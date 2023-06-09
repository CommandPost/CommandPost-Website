# cp.prop

This is a utility library for helping keep track of single-value property states. Each property provides access to a single value. Must be readable, but may be read-only. It works by creating a table which has a `get` and (optionally) a `set` function which are called when changing the state.



## Features:
### 1. Callable
A `prop` can be called like a function once created. Eg:

```lua
local value = true
local propValue = prop.new(function() return value end, function(newValue) value = newValue end)
propValue() == true     -- `value` is still true
propValue(false) == false   -- now `value` is false
```

### 2. Togglable
A `prop` comes with toggling built in - as long as the it has a `set` function. Continuing from the last example:

```lua
propValue:toggle()  -- `value` went from `false` to `true`.
```

 **Note:** Toggling a non-boolean value will flip it to `nil` and a subsequent toggle will make it `true`. See the [toggle method](#toggle) for more details.

### 3. Watchable
Interested parties can 'watch' the `prop` value to be notified of changes. Again, continuing on:

```lua
propValue:watch(function(newValue) print "New Value: "...newValue) end) -- prints "New Value: true" immediately
propValue(false)    -- prints "New Value: false"
```

This will also work on [AND](#and) and [OR][#or] properties. Any changes from component properties will trigger a notification.

### 4. Observable
Similarly, you can 'observe' a prop as a `cp.rx.Observer` by calling the `observe` method:

```lua
propValue:toObservable():subscribe(function(value) print(tostring(value) end))
```

These will never emit an `onError` or `onComplete` message, just `onNext` with either `nil` or the current value as it changes.

### 5. Combinable
We can combine or modify properties with AND/OR and NOT operations. The resulting values will be a live combination of the underlying `prop` values. They can also be watched, and will be notified when the underlying `prop` values change. For example:

```lua
local watered   = prop.TRUE()               -- a simple `prop` which stores the current value internally, defaults to `true`
local fed       = prop.FALSE()              -- same as above, defautls to `false`
local rested    = prop.FALSE()              -- as above.
local satisfied = watered:AND(fed)        -- will be true if both `watered` and `fed` are true.
local happy     = satisfied:AND(rested)   -- will be true if both `satisfied` and `happy`.
local sleepy    = fed:AND(prop.NOT(rested)) -- will be sleepy if `fed`, but not `rested`.

-- These statements all evaluate to `true`
satisfied()     == false
happy()         == false
sleepy()        == false

-- Get fed
fed(true)       == true
satisfied()     == true
happy()         == false
sleepy()        == true

-- Get rest
rested:toggle() == true
satisfied()     == true
happy()         == true
sleepy()        == false

-- These will produce an error, because you can't modify an AND or OR:
happy(true)
happy:toggle()
```

You can also use non-boolean properties. Any non-`nil` value is considered to be `true`.

### 6. Immutable
If appropriate, a `prop` may be immutable. Any `prop` with no `set` function defined is immutable. Examples are the `prop.AND` and `prop.OR` instances, since modifying combinations of values doesn't really make sense.

Additionally, an immutable wrapper can be made from any `prop` value via either `prop.IMMUTABLE(...)` or calling the `myValue:IMMUTABLE()` method.

Note that the underlying `prop` value(s) are still potentially modifiable, and any watchers on the immutable wrapper will be notified of changes. You just can't make any changes directly to the immutable property instance.

For example:

```lua
local isImmutable = propValue:IMMUTABLE()
isImmutable:toggle()    -- results in an `error` being thrown
isImmutable:watch(function(newValue) print "isImmutable changed to "..newValue end)
propValue:toggle()      -- prints "isImmutable changed to false"
```

### 7. Bindable
A property can be bound to an 'owning' table. This table will be passed into the `get` and `set` functions for the property if present. This is mostly useful if your property depends on internal instance values of a table. For example, you might want to make a property work as a method instead of a function:

```lua
local owner = {
   _value = true
}
owner.value = prop(function() return owner._value end)
owner:isMethod() -- error!
```

To use a `prop` as a method, you need to `attach` it to the owning table, like so:

```lua
local owner = { _value = true }
owner.isMethod = prop(function(self) return self._value end, function(value, self) self._value = value end):bind(owner)
owner:isMethod()                -- success!
owner.isMethod()                -- also works - will still pass in the bound owner.
owner.isMethod:owner() == owner -- is true~
```

You can also use the [prop.bind](#bind) function to bind multple properties at once:

```lua
local owner = { _value = true }
prop.bind(o) {
    isMethod = prop(function(self) return self._value end)
}
owner:isMethod()                -- success!
```

The [prop.extend](#extend) function will also bind any `cp.prop` values it finds:

```lua
local owner = prop.extend({
    _value = true,
    isMethod = prop(function(self) return self._value end),
})
owner:isMethod()                -- success!
```

The bound `owner` is passed in as the last parameter of the `get` and `set` functions.

### 8. Extendable
A common use case is using metatables to provide shared fields and methods across multiple instances. A typical example might be:

```lua
local person = {}
function person:name(newValue)
    if newValue then
        self._name = newValue
    end
    return self._name
end

function person.new(name)
    local o = { _name = name }
    return setmetatable(o, { __index = person })
end

local johnDoe = person.new("John Doe")
johnDoe:name() == "John Doe"
```

If we want to make the `name` a property, we might try creating a bound property like this:

```lua
person.name = prop(function(self) return self._name end, function(value, self) self._name = value end):bind(person)
```
Unfortunately, this doesn't work as expected:

```lua
johnDoe:name()          -- Throws an error because `person` is the owner, not `johnDoe`.
johnDoe.name() == nil   -- Works, but will return `nil` because "John Doe" is applied to the new table, not `person`
```

The fix is to use `prop.extend` when creating the new person. Rewrite `person.new` like so:

```lua
person.new(name)
    local o = { _name = name }
    return prop.extend(o, person)
end
```

Now, this will work as expected:

```lua
johnDoe:name() == "John Doe"
johnDoe.name() == "John Doe"
```

The `prop.extend` function will set the `source` table as a metatable of the `target`, as well as binding any bound props that are in the `source` to `target`.

## Tables

Because tables are copied by reference rather than by value, changes made inside a table will not necessarily
trigger an update when setting a value with an updated table value. By default, tables are simply passed in
and out without modification. You can nominate for a property to make copies of tables (not userdata) when
getting or setting, which effectively isolates the value being stored from outside modification. This can be
done with the [deepTable](#deepTable) and [shallowTable](#shallowTable) methods. Below is an example of them
in action:

```lua
local value = { a = 1, b = { c = 1 } }
local valueProp = prop.THIS(value)
local deepProp = prop.THIS(value):deepTable()
local shallowProp = prop.THIS(value):shallowTable()

-- print a message when the prop value is updated
valueProp:watch(function(v) print("value: a = " .. v.a ..", b.c = ".. v.b.c ) end)
deepProp:watch(function(v) print("deep: a = " .. v.a ..", b.c = ".. v.b.c ) end)
shallowProp:watch(function(v) print("shallow: a = " .. v.a ..", b.c = ".. v.b.c ) end)

-- change the original table:
value.a             = 2
value.b.c           = 2

valueProp().a       == 2    -- modified
valueProp().b.c     == 2    -- modified
shallowProp().a     == 1    -- top level is copied
shallowProp().b.c   == 2    -- child tables are referenced
deepProp().a        == 1    -- top level is copied
deepProp().b.c      == 1    -- child tables are copied as well

-- get the 'value' property
value = valueProp()         -- returns the original value table

value.a             = 3     -- updates the original value table `a` value
value.b.c           = 3     -- updates the original `b` table's `c` value

valueProp(value)            -- nothing is printed, since it's still the same table

valueProp().a       == 3    -- still referencing the original table
valueProp().b.c     == 3    -- the child is still referenced too
shallowProp().a     == 1    -- still unmodified after the initial copy
shallowProp().b.c   == 3    -- still updated, since `b` was copied by reference
deepProp().a        == 1    -- still unmodified after initial copy
deepProp().b.c      == 1    -- still unmodified after initial copy

-- get the 'deep copy' property
value = deepProp()          -- returns a new table, with all child tables also copied.

value.a             = 4     -- updates the new table's `a` value
value.b.c           = 4     -- updates the new `b` table's `c` value

deepProp(value)             -- prints "deep: a = 4, b.c = 4"

valueProp().a       == 3    -- still referencing the original table
valueProp().b.c     == 3    -- the child is still referenced too
shallowProp().a     == 1    -- still unmodified after the initial copy
shallowProp().b.c   == 3    -- still referencing the original `b` table.
deepProp().a        == 4    -- updated to the new value
deepProp().b.c      == 4    -- updated to the new value

-- get the 'shallow' property
value = shallowProp()       -- returns a new table with top-level keys copied.

value.a             = 5     -- updates the new table's `a` value
value.b.c           = 5     -- updates the original `b` table's `c` value.

shallowProp(value)          -- prints "shallow: a = 5, b.c = 5"

valueProp().a       == 3    -- still referencing the original table
valueProp().b.c     == 5    -- still referencing the original `b` table
shallowProp().a     == 5    -- updated to the new value
shallowProp().b.c   == 5    -- referencing the original `b` table, which was updated
deepProp().a        == 4    -- unmodified after the last update
deepProp().b.c      == 4    -- unmodified after the last update
```

So, a little bit tricky. The general rule of thumb is:

1. If working with immutable objects, use the default `value` value copy, which preserves the original.
2. If working with an array of immutible objects, use the `shallow` table copy.
3. In most other cases, use a `deep` table copy.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NIL](#nil)

**Functions** - _API calls offered directly by the extension_
 * [bind](#bind)
 * [extend](#extend)
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [AND](#and)
 * [FALSE](#false)
 * [FROM](#from)
 * [IMMUTABLE](#immutable)
 * [new](#new)
 * [NOT](#not)
 * [OR](#or)
 * [THIS](#this)
 * [TRUE](#true)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [mainWindow](#mainwindow)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [ABOVE](#above)
 * [AND](#and)
 * [ATLEAST](#atleast)
 * [ATMOST](#atmost)
 * [BELOW](#below)
 * [bind](#bind)
 * [cached](#cached)
 * [clear](#clear)
 * [clone](#clone)
 * [deepTable](#deeptable)
 * [EQ](#eq)
 * [get](#get)
 * [hasWatchers](#haswatchers)
 * [id](#id)
 * [IMMUTABLE](#immutable)
 * [IS](#is)
 * [ISNOT](#isnot)
 * [label](#label)
 * [mirror](#mirror)
 * [monitor](#monitor)
 * [mutable](#mutable)
 * [mutate](#mutate)
 * [NEQ](#neq)
 * [NOT](#not)
 * [OR](#or)
 * [owner](#owner)
 * [preWatch](#prewatch)
 * [set](#set)
 * [shallowTable](#shallowtable)
 * [toggle](#toggle)
 * [toObservable](#toobservable)
 * [unwatch](#unwatch)
 * [update](#update)
 * [value](#value)
 * [watch](#watch)
 * [wrap](#wrap)


---

## API Documentation

#### Constants


### [NIL](#nil)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.NIL -> cp.prop`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns a `cp.prop` which will always be `nil`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a new `cp.prop` instance with a value of `nil`.</li></ul>          |
| **Notes**                                   | - None |

---

#### Functions


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.bind(owner[, relaxed]) -> function`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This provides a utility function for binding multiple properties to a single owner in a simple way.                                                                     |
| **Parameters**                              | <ul><li>owner     - The owner table to bind the properties to.</li><li>relaxed   - If `true`, then non-`cp.prop` fields will be ignored. Otherwise they generate an error.</li></ul> |
| **Returns**                                 | <ul><li>A function which should be called, passing in a table of key/value pairs which are `string`/`cp.prop` value.</li></ul>          |
| **Notes**                                   | <ul><li>If you are binding multiple `cp.prop` values that are dependent on other `cp.prop` values on the same owner (e.g. via `mutate` or a boolean join), you</li><li>  will have to break it up into multiple `prop.bind(...) {...}` calls, so that the dependent property can access the bound property.</li><li>If a `cp.prop` provided as bindings already has a bound owner, it will be wrapped instead of bound directly.</li><li>To use, do something like this:</li><li></li><li>```lua</li><li>local o = {}</li><li>prop.bind(o) {</li><li>    foo = prop.TRUE(),</li><li>    bar = prop.THIS("Hello world"),</li><li>}</li><li>```</li><li></li><li>This is equivalent to the following:</li><li></li><li>```lua</li><li>local o = {}</li><li>o.foo = prop.TRUE():bind(o):label("foo")</li><li>-- alternately...</li><li>prop.THIS("Hello world"):bind(o, "bar")</li><li>```</li><li></li><li>It has the added benefit of checking that the target properties ('foo' and 'bar' in this case) have not already been assigned a value.</li></ul> |

---


### [extend](#extend)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.extend(target, source) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Makes the `target` extend the `source`. It will copy all bound properties on the source table into the target, rebinding it to the target table. Other keys are inherited via the metatable.                                                                     |
| **Parameters**                              | <ul><li>`target` - The target to extend</li><li>`source` - The source to extend from</li></ul> |
| **Returns**                                 | <ul><li>The `target`, now extending the `source`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `value` is an instance of a `cp.prop`.                                                                     |
| **Parameters**                              | <ul><li>`value`  - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is an instance of `cp.prop`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [AND](#and)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.AND(...) -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` which will be `true` if all `cp.prop` instances passed into the function return a `truthy` value.                                                                     |
| **Parameters**                              | <ul><li>`...`        - The list of `cp.prop` instances to 'AND' together.</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The value of this instance will resolve by lazily checking the `value` of the contained `cp.prop` instances in the order provided. The first `falsy` value will be returned. Otherwise the last `truthy` value is returned.</li><li>The instance is **immutable**.</li><li>Once you have created an 'AND', you cannot 'OR' as a method. Eg, this will fail: `prop.TRUE():AND(prop:FALSE()):OR(prop.TRUE())`. This is to avoid ambiguity as to whether the 'AND' or 'OR' takes precedence. Is it `(true and false) or true` or `true and (false or true)`?.</li><li>To combine 'AND' and 'OR' values, group them together when combining. Eg:</li><li> `(true and false) or true`: `prop.OR( prop.TRUE():AND(prop.FALSE()), prop.TRUE() )`</li><li> `true and (false or true)`: `prop.TRUE():AND( prop.FALSE():OR(prop.TRUE()) )`</li></ul> |

---


### [FALSE](#false)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.FALSE() -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` which will cache internally, initially set to `false`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance defaulting to `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [FROM](#from)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.FROM(value) --> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `prop` value, with the provided `value`.                                                                     |
| **Parameters**                              | <ul><li>`value`      - The value to use.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If it's already a `cp.prop`, it will be returned directly.</li><li>If it's a function, it will be treated as a `get` function.</li><li>Otherwise, it will be returned as [THIS](#THIS)</li></ul> |

---


### [IMMUTABLE](#immutable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.IMMUTABLE(propValue) -- cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` instance which will not allow the wrapped value to be modified.                                                                     |
| **Parameters**                              | <ul><li>`propValue` - The `cp.prop` value to wrap.</li></ul> |
| **Returns**                                 | <ul><li>a new `cp.prop` instance which cannot be modified.</li></ul>          |
| **Notes**                                   | <ul><li>The original `propValue` can still be modified (if appropriate) and watchers of the immutable value will be notified when it changes.</li></ul> |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.new(getFn, setFn, cloneFn) --> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `prop` value, with the provided `get` and `set` functions.                                                                     |
| **Parameters**                              | <ul><li>`getFn`      - The function that will get called to retrieve the current value.</li><li>`setFn`      - (optional) The function that will get called to set the new value.</li><li>`cloneFn`        - (optional) The function that will get called when cloning the property.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>`getFn` signature: `function([owner]) -> anything`</li><li> `owner`     - If this is attached as a method, the owner table is passed in.</li><li>`setFn` signature: `function(newValue[, owner])`</li><li> `newValue`  - The new value to store.</li><li> `owner`     - If this is attached as a method, the owner table is passed in.</li><li>`cloneFn` signature: `function(prop) -> new cp.prop`</li><li>This can also be executed by calling the module directly. E.g. `require('cp.prop')(myGetFunction)`</li></ul> |

---


### [NOT](#not)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.NOT(propValue) -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` which negates the provided `propValue`.                                                                     |
| **Parameters**                              | <ul><li>`propValue`      - Another `cp.prop` instance.</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance negating the `propValue`.</li></ul>          |
| **Notes**                                   | <ul><li>If the `propValue` is mutable, you can set the `NOT` property value and the underlying value</li><li>    will be set to the negated value. Be aware that the same negation rules apply when setting as when getting.</li><li>Values are negated as follows:</li><li>  `boolean`    - Switch between `true` and `false`</li><li>  `nil`        - Switches to `true`</li><li>  <other>  - Switches to `nil`.</li></ul> |

---


### [OR](#or)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.OR(...) -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` which will return the first 'truthy' value provided by one of the provided properties. Otherwise, returns the last 'falsy' value.                                                                     |
| **Parameters**                              | <ul><li>`...`        - The list of `cp.prop` instances to 'OR' together.</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The value of this instance will resolve by lazily checking the `value` of the contained `cp.prop` instances in the order provided. If any return `true`, no further instances will be checked.</li><li>The instance is immutable, since there is no realy way to flip the component values of an 'OR' in a way that makes sense.</li><li>Once you have created an 'OR', you cannot 'AND' as a method. Eg, this will fail: `prop.TRUE():OR(prop:FALSE()):AND(prop.TRUE())`. This is to avoid ambiguity as to whether the 'OR' or 'AND' takes precedence. Is it `(true or false) and true` or `true or (false and true)`?.</li><li>To combine 'AND' and 'OR' values, group them together when combining. Eg:</li><li> `(true or false) and true`: `prop.AND( prop.TRUE():OR(prop.FALSE()), prop.TRUE() )`</li><li> `true or (false and true)`: `prop.TRUE():OR( prop.FALSE():AND(prop.TRUE()) )`</li></ul> |

---


### [THIS](#this)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.THIS([initialValue]) -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` instance which will cache a value internally. It will default to the value of the `initialValue`, if provided.                                                                     |
| **Parameters**                              | <ul><li>`initialValue` - The initial value to set it to (optional).</li></ul> |
| **Returns**                                 | <ul><li>a new `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [TRUE](#true)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.TRUE() -> cp.prop`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new `cp.prop` which will cache internally, initially set to `true`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance defaulting to `true`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [mainWindow](#mainwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop.mainWindow <cp.prop: cp.ui.Window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The main [Window](cp.ui.Window.md), or `nil` if none is available.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [ABOVE](#above)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:ABOVE() -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property comparing this property to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is greater than `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [AND](#and)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:AND(...) -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `cp.prop` which will be `true` if this and all other `cp.prop` instances passed into the function return `true`.                                                                     |
| **Parameters**                              | <ul><li>`...`        - The list of `cp.prop` instances to 'AND' together.</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>See the [AND Function](#and) for more details</li></ul> |

---


### [ATLEAST](#atleast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:ATLEAST() -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property comparing this property to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is less than or equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ATMOST](#atmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:ATMOST() -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property comparing this property to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is less than or equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [BELOW](#below)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:BELOW() -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property comparing this property to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is less than `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:bind(owner, [key]) -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Binds the property to the specified owner. Once bound, it cannot be changed.                                                                     |
| **Parameters**                              | <ul><li>`owner`  - The owner to attach to.</li><li>`key`    - If provided, the property will be bound to the specified key.</li></ul> |
| **Returns**                                 | <ul><li>the `cp.prop`</li></ul>          |
| **Notes**                                   | <ul><li>Throws an `error` if the new owner is `nil`.</li><li>Throws an `error` if the owner already has a property with the name provided in `key`.</li><li>Throws an `error` if the `key` is not a string value.</li><li>Optionally, a key can be provided which will assign the `cp.prop` to the owner using that key.</li><li>If the `cp.prop` does not have a label, the key will be used as the label.</li></ul> |

---


### [cached](#cached)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:cached() -> prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This can be called once to enable caching of the result inside the `prop`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This can help with performance, but if there are other ways of modifying the original value outside the prop, it will potentially return stale values.</li><li>You can force a reload via the [update](#update) method.</li></ul> |

---


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:clear() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears the property. Watchers will be notified if the value has changed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [clone](#clone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:clone() -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new copy of the property.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>New `cp.prop`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [deepTable](#deeptable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:deepTable([skipMetatable]) -> prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This can be called once to enable deep copying of `table` values. By default, `table`s are simply passed in and out. If a sub-key of a table changes, no change will be registered when setting.                                                                     |
| **Parameters**                              | <ul><li>`skipMetatable` - If set to `true`, copies will _not_ copy the metatable into the new tables.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>See [shallowTable](#shallowTable).</li></ul> |

---


### [EQ](#eq)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:EQ(something) -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Synonym for [IS](#is).                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:get() -> value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current value of the property.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hasWatchers](#haswatchers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:hasWatchers() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns `true` if the property has any watchers.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if any watchers have been registered.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:id() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current ID.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID value.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [IMMUTABLE](#immutable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:IMMUTABLE() -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `cp.prop` instance wrapping this property which will not allow it to be modified.                                                                     |
| **Parameters**                              | <ul><li>`propValue`      - The `cp.prop` value to wrap.</li></ul> |
| **Returns**                                 | <ul><li>a new `cp.prop` instance which cannot be modified.</li></ul>          |
| **Notes**                                   | <ul><li>The original property can still be modified (if appropriate) and watchers of the immutable value will be notified when it changes.</li></ul> |

---


### [IS](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:IS(something) -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property returning `true` if the value is equal to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [ISNOT](#isnot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:ISNOT(something) -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property returning `true` when this property is not equal to `something`.                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is NOT equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:label([newLabel]) -> string | cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets and sets the property label. This is human-readable text describing the `cp.prop`. It is used when converting the prop to a string, for example.                                                                     |
| **Parameters**                              | <ul><li>newLabel - (optional) if provided, this will be the new label.</li></ul> |
| **Returns**                                 | <ul><li>Either the existing label, or the `cp.prop` itself if a new label was provided.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [mirror](#mirror)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:mirror(otherProp) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Configures this prop and the other prop to mirror each other's values. When one changes the other will change with it. Only one prop needs to mirror.                                                                     |
| **Parameters**                              | <ul><li>`otherProp`   - The other prop to mirror.</li></ul> |
| **Returns**                                 | <ul><li>The same property.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [monitor](#monitor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:monitor(...) -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an uncloned watch to the `otherProp` which will trigger an [update](#update) check in this property.                                                                     |
| **Parameters**                              | <ul><li>`...`  - a list of other `cp.prop` values to monitor.</li></ul> |
| **Returns**                                 | <ul><li>`cp.prop`    - This prop value.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [mutable](#mutable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:mutable() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the `cp.prop` can be modified.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value can be modified.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [mutate](#mutate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:mutate(getFn, [setFn]) -> cp.prop <anything; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property that is a mutation of the current one.                                                                     |
| **Parameters**                              | <ul><li>`getFn` - Get function</li><li>`setFn` - An optional set function</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.prop` which will return a mutation of the property value.</li></ul>          |
| **Notes**                                   | <ul><li>Watchers of the mutant will be if a change in the current prop causes</li><li>the mutation to be a new value.</li><li></li><li>The `getFn` is a function with the following signature:</li><li></li><li>```lua</li><li>function(original, owner, prop) --> mutantValue</li><li>```</li><li></li><li>`originalProp`   - The original `cp.prop` being mutated.</li><li>`owner`          - The owner of the mutator property, if it has been bound.</li><li>`mutantProp`     - The mutant property.</li><li>`mutantValue`    - The new value based off the original.</li><li></li><li>You can ignore any parameters that you don't need. Most simply use the `original` prop.</li><li></li><li>The `setFn` is optional, and is a function with the following signature:</li><li></li><li>```lua</li><li>function(mutantValue, original, owner, prop) --> nil</li><li>```</li><li></li><li>`mutantValue`    - The new value being sent in.</li><li>`originalProp`   - The original property being mutated.</li><li>`owner`          - The owner of the mutant property, if it has been bound.</li><li>`mutantProp`     - The mutant property.</li><li></li><li>Again, you can ignore any parameters that you don't need.</li><li>If you want to set a new value to the `original` property, you can do so.</li><li>It's recommended that you use `original:set(...)`, which will allow setting `nil` values.</li><li></li><li>For example:</li><li></li><li>```lua</li><li>anyNumber   = prop.THIS(1)</li><li>isEven      = anyNumber:mutate(function(original) return original() % 2 == 0 end)</li><li>    :watch(function(even)</li><li>        if even() then</li><li>            print "even"</li><li>        else</li><li>            print "odd"</li><li>        end</li><li>    end)</li><li></li><li>isEven:update()     -- prints "odd"</li><li>anyNumber(10)       -- prints "even"</li><li>isEven() == true    -- no printing</li><li>```</li></ul> |

---


### [NEQ](#neq)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:NEQ(something) -> cp.prop <boolean; read-only>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A synonym for [ISNOT](#isnot)                                                                     |
| **Parameters**                              | <ul><li>`something`  - A value, a function or a `cp.prop` to compare to.</li></ul> |
| **Returns**                                 | <ul><li>New, read-only `cp.prop` which will be `true` if this property is NOT equal to `something`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [NOT](#not)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:NOT() -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `cp.prop` which negates the current value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance negating the current instance.</li></ul>          |
| **Notes**                                   | <ul><li>If this property is mutable, you can set the `NOT` property value and this property will be set to the negated value. Be aware that the same negation rules apply when setting as when getting.</li><li>Values are negated as follows:</li><li>  ** `boolean`    - Switch between `true` and `false`</li><li>  ** `nil`        - Switches to `true`</li><li>  ** <other>  - Switches to `nil`.</li></ul> |

---


### [OR](#or)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:OR(...) -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `cp.prop` which will be `true` if this or any `cp.prop` instance passed into the function returns `true`.                                                                     |
| **Parameters**                              | <ul><li>`...`        - The list of `cp.prop` instances to 'OR' together.</li></ul> |
| **Returns**                                 | <ul><li>a `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>See [OR Function](#or) for more details.</li></ul> |

---


### [owner](#owner)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:owner() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If this is a 'method', return the table instance the method is attached to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The owner table, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [preWatch](#prewatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:preWatch(preWatchFn) -> cp.prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a function which will be called once if any watchers are added to this prop.                                                                     |
| **Parameters**                              | <ul><li>`preWatchFn`     - The function to call once when the prop is watched. Has the signature `function(owner, prop)`.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>This allows configuration, typically for watching other events, but only if anything is actually watching this property value.</li><li>If the prop already has watchers, this function will be called imediately.</li></ul> |

---


### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:set(newValue) -> value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the property to the specified value. Watchers will be notified if the value has changed.                                                                     |
| **Parameters**                              | <ul><li>`newValue`   - The new value to set. May be `nil`.</li></ul> |
| **Returns**                                 | <ul><li>The current value of the prop. May not be the same as `newValue`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [shallowTable](#shallowtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:shallowTable(skipMetatable) -> prop`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This can be called once to enable shallow cloning of `table` values. By default, `table`s are simply passed in and out. If a sub-key of a table changes, no change will be registered when setting.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` instance.</li></ul>          |
| **Notes**                                   | <ul><li>See [deepTable](#deepTable).</li></ul> |

---


### [toggle](#toggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:toggle() -> boolean | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Toggles the current value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new value.</li></ul>          |
| **Notes**                                   | <ul><li>If the value is immutable, an error will be thrown.</li><li>If you toggle a non-boolean parameter twice, it will end up set to `true`.</li><li>Values are modified as follows:</li><li>  ** `boolean`    - Switch between `true` and `false`</li><li>  ** `nil`        - Switches to `true`</li><li>  ** <other>  - Switches to `nil`.</li></ul> |

---


### [toObservable](#toobservable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:toObservable() -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `cp.rx.Observable` for the property. This will emit `onNext()` events with the current value whenever the `cp.prop` is updated. Any new subscriptions will receive the most recent value immediately.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Observable` instance for the property.</li></ul>          |
| **Notes**                                   | <ul><li>It will only emit `onNext` events, never an `onError` or `onCompleted` event.</li><li>This will trigger an `update` each time it is called.</li></ul> |

---


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:unwatch(watchFn) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the specified watch method as a watcher, if present.                                                                     |
| **Parameters**                              | <ul><li>`watchFn`        - The original watch function to remove. Must be the same instance that was added.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the function was watching and successfully removed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>An example of adding and removing a watch:</li><li></li><li>```lua</li><li>local prop, watcher = prop.TRUE():watch(function(value) print tostring(value) end)</li><li>prop:unwatch(watcher) == true</li><li>```</li></ul> |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:update() -> value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Forces an update of the property and notifies any watchers if it has changed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value of the property.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:value([newValue]) -> value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current value of the `cp.prop` instance. If a `newValue` is provided, and the instance is mutable, the value will be updated and the new value is returned. If it is not mutable, an error will be thrown.                                                                     |
| **Parameters**                              | <ul><li>`newValue`   - The new value to set the instance to.</li></ul> |
| **Returns**                                 | <ul><li>The current boolean value.</li></ul>          |
| **Notes**                                   | <ul><li>If you need to set the property to `nil`, use the [set method](#set), otherwise it will be ignored.</li><li>This method can also be called directly on the property, like so:</li><li></li><li>```lua</li><li>local foo = prop.TRUE()</li><li>foo() == foo:value()</li><li>```</li></ul> |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:watch(watchFn, notifyNow, uncloned) -> cp.prop, function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the watch function to the value. When the value changes, watchers are notified by calling the function.                                                                     |
| **Parameters**                              | <ul><li>`watchFn` - The watch function, with the signature `function(newValue, owner)`.</li><li>`notifyNow` - The function will be triggered immediately with the current state.  Defaults to `false`.</li><li>`uncloned` - If `true`, the watch function will not be attached to any clones of this prop.</li></ul> |
| **Returns**                                 | <ul><li>`cp.prop` - The same `cp.prop` instance</li><li>`function` - The watch function, which can be passed to [unwatch](#unwatch) to stop watching.</li></ul>          |
| **Notes**                                   | <ul><li>You can watch immutable values. Wrapped `cp.prop` instances may not be immutable, and any changes to them will cause watchers to be notified up the chain.</li><li>The function should have the following signature:</li><li></li><li>```lua</li><li>function(value, owner, prop)</li><li>```</li><li>`value`  - The new value of the property</li><li>`owner`  - The property owner. May be `nil`.</li><li>`prop`   - The property itself.</li></ul> |

---


### [wrap](#wrap)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.prop:wrap([owner[, key]]) -> cp.prop <anything>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new property that wraps this one. It will be able to get and set the same as this, and changes to this property will trigger updates in the wrapper.                                                                     |
| **Parameters**                              | <ul><li>`owner`  -    (optional) If provided, the wrapper will be bound to the specified owner.</li><li>`key`    -    (optional) If provided, the wrapper will be assigned to the owner with the specified key.</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.prop` which wraps this property.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

