# cp.rx.go.Statement

A `Statement` is defined to enable processing of asynchronous `resolvable` values such
as [cp.rx.Observable](cp.rx.Observable.md) values.

To define a new `Statement`, you call the [named](#named) constructor, assigning the result
to a constant value and calling the [define](#define) method.

## Definine a new Statement

To define a new `Statement` implementation, we use the [Statement.named](cp.rx.go.Statement.md#named) constructor.
This gives us a [Statement.Definition](cp.rx.go.Statement.Definition.md) which allows
us to set the rules for the statement before finally "defining" it.

Statements *may* have an `onInit`, and *must* have an `onObservable` provided,
and then the `define` method must be called.

For example, the [First](cp.rx.go.First.md) statement is defined like so:

```lua
local First = Statement.named("First")
:onInit(function(context, resolvable)
    assert(resolvable ~= nil, "The First `resolveable` may not be `nil`.")
    context.resolvable = resolvable
end)
:onObservable(function(context)
    return toObservable(context.resolvable):first()
end)
:define()
```

Once you've defined a statement, you then execute it by calling the statement directly, passing
in any parameters.

For example:
```lua
local First = require("cp.rx.go").First
First(Observable.of(1, 2, 3))
:Now(
    function(value) print("Received: "..tostring(value)) end,
    function(message) print("Error: "..tostring(message)) end,
    function() print("Completed") end
)
```

This will output:
```
Received: 1
Completed
```

The `Observable` as passed to the `onInit` function handler as the second parameter.
`context` is always the first parameter, followed by any values passed to the constructor call.

The `onObservable` function handler is called once the statement is actually executing, typically
by calling the [Now](cp.rx.go.Statement.md#Now) or [After](cp.rx.go.Statement.md#After) methods.

> It is recommended that any conversion of input parameters are converted to `Observable`s as
> late as possible, typically in the `onObservable` function handler. Otherwise, input values
> may get resolved before the user intends.

## Submodules
 * [cp.rx.go.Statement.Definition](cp.rx.go.Statement.Definition.md)
 * [cp.rx.go.Statement.Modifier](cp.rx.go.Statement.Modifier.md)

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [defaultObserverFactory](#defaultobserverfactory)
 * [is](#is)
 * [toObservable](#toobservable)
 * [toObservables](#toobservables)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [named](#named)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [After](#after)
 * [Catch](#catch)
 * [Debug](#debug)
 * [Finally](#finally)
 * [fullName](#fullname)
 * [Label](#label)
 * [name](#name)
 * [Now](#now)
 * [ThenDelay](#thendelay)
 * [ThenYield](#thenyield)
 * [TimeoutAfter](#timeoutafter)
 * [toObservable](#toobservable)


## API Documentation

### Functions


### [defaultObserverFactory](#defaultobserverfactory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.defaultObserverFactory([factoryFn]) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets/sets the factory function which creates a new `Observer` for Statements which are executed without one being provided. By default, an `Observer` which only outputs errors via the standard `error` function is provided.                                                                     |
| **Parameters**                              | <ul><li>factoryFn     - if provided, replaces the current default factory function.</li></ul> |
| **Returns**                                 | <ul><li>A new `Observer`, or the previous factory function if a new one was provided.</li></ul>          |
| **Notes**                                   | <ul><li>The factory function has no arguments provided and must return a new `Observer` instance.</li></ul>                |

---

### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `Statement`.                                                                     |
| **Parameters**                              | <ul><li>thing        - The thing to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the thing is a `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toObservable](#toobservable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.toObservable(thing[, params]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts the `thing` into an `Observable`.                                                                     |
| **Parameters**                              | <ul><li>thing    - The thing to convert.</li><li>params   - Optional table list to pass as parameters for the `thing` if it's a `function`.</li></ul> |
| **Returns**                                 | <ul><li>The `Observable`.</li></ul>          |
| **Notes**                                   | <ul><li>It converts the following:</li><li></li><li>`Observable`          - Returned unchanged.</li><li>`cp.rx.go.Statement`  - Returns the result of the `toObservable()` method. Note: this will cancel any scheduled executions for the Statement.</li><li>`cp.prop`             - Returns the `cp.prop:toObservable()` value.</li><li>`function`            - Executes the function, passing in the `params` as a list of values, returning the results converted to an `Observable`.</li><li>Other values          - Returned via `Observable.of(thing)`.</li><li></li><li>Note that with `functions`, the function is not executed immediately, but it will be passed the params as</li><li>a list when the resulting `Observable` is subscribed to. For example:</li><li></li><li>```lua</li><li>-- set up the function</li><li>multiply = toObservable(function(one, two) return onetwo end, {2, 3})</li><li>-- nothing has happened yet</li><li>multiply:subscribe(function(result) print(result) end)</li><li>-- now the function has been executed</li><li>```</li><li>This results in printing `6`.</li></ul>                |

---

### [toObservables](#toobservables)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.toObservables(things[, params]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts a list of things into a list of `Observables` of those things.                                                                     |
| **Parameters**                              | <ul><li>things       - a table list of things to convert to `Observables`.</li><li>params       - an optional table list of parameters to pass to any `function` things.</li></ul> |
| **Returns**                                 | <ul><li>A table list of the things, converted to `Observable`.</li></ul>          |
| **Notes**                                   | <ul><li></li><li>For example:</li><li>```lua</li><li>result = toObservables({1, 2, 3})</li><li>for _,o in ipairs(results) do</li><li>    o:subscribe(function(x) print x end)</li><li>end</li><li></li><li>If any of the things are `function`s, then the `params` table is unpacked to a list</li><li>and passed into the function when it is called. For example:</li><li></li><li>```lua</li><li>toObservables({function(x) return x2 end}, {3})</li><li>    :subscribe(function(x) print end) -- outputs 6</li><li>```</li><li></li><li>Any type supported by [toObservable](#toObservable) can be included in the `things` array.</li></ul>                |

---
### Constructors


### [named](#named)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement.named(name) -> Statement.Definition`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Starts the definition of a new `Statement` with the specified names.                                                                     |
| **Parameters**                              | <ul><li>name     - The name of the `Statement`.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement.Definition](cp.rx.go.Statement.Definition.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [After](#after)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:After(millis[, observer][, scheduler]) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Requests the statement to be executed after the specified amount of time in seconds.                                                                     |
| **Parameters**                              | <ul><li>millis      - The number of milliseconds to delay the execution.</li><li>observer     - The observer to subscribe to the final result.</li><li>scheduler    - (optional) the `cp.rx.Scheduler` to use. Uses the `cp.rx.util.defaultScheduler()` if none is provided.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Catch](#catch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:Catch(handler) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Assigns a handler which will be applied at the end of the Statement.                                                                     |
| **Parameters**                              | <ul><li>handler  - The handler function</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>The function will receive the error signal and the returned value will be pass onwards.</li></ul>                |

---

### [Debug](#debug)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:Debug([label]) -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that the results of the `Statement` should be output to the Error Log.                                                                     |
| **Parameters**                              | <ul><li>label    - If specified, this is output in the log.</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Finally](#finally)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:Finally(handler) -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Provides a function handler to get called when the statement is done, either via an `onError` or `onComplete` signal.                                                                     |
| **Parameters**                              | <ul><li>handler   - The handler function.</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The original signal will be passed on without modification. This will trigger after any [Catch](#Catch) handler, so will be affected by the results of that.</li></ul>                |

---

### [fullName](#fullname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:fullName()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Statement's full name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The full Statement name.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:Label(label) -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the custom `label` for the Statement. This will be used instead of the `name` when outputting it as a `string` if set. Defaults to `nil`.                                                                     |
| **Parameters**                              | <ul><li>label - Optional new value for the label. If provided, the `Statement` is returned.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` if a new lable is specified, otherwise the current label value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:name()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Statement name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Statement name.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [Now](#now)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:Now([observer]) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the statment immediately.                                                                     |
| **Parameters**                              | <ul><li>observer - An observer to watch the resulting `Observable`. Defaults to the default observer factory.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ThenDelay](#thendelay)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:ThenDelay(millis) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that there will be a delay after this statement by the specified number of `millis`. This will happen after any `TimeoutAfter`/`Catch`/`Debug` actions.                                                                     |
| **Parameters**                              | <ul><li>millis   - the amount of time to delay, in millisecods.</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ThenYield](#thenyield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:ThenYield() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that the `Statement` will "yield" to allow other pending operations to happen, then pick up as soon as possible afterwards. This will happen after any `TimeoutAfter`/`Catch`/`Debug` actions.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [TimeoutAfter](#timeoutafter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:TimeoutAfter(millis[, next][, scheduler]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that this statement should time out after the specified number of milliseconds.                                                                     |
| **Parameters**                              | <ul><li>millis       - A `number` or a `function` returning the number of milliseconds to wait before timing out.</li><li>next         - Optional string or `resolvable` value indicating how to handle it.</li><li>scheduler    - The `cp.rx.Scheduler` to use when timing out. Defaults to `cp.rx.defaultScheduler()`.</li></ul> |
| **Returns**                                 | <ul><li>The same `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>This can be called multiple times before the statement is executed, and the most recent configuration will be used at that time.</li><li>The `next` value may be either a string to send as the error, or a `resolvable` value to pass on instead of failing. If nothing is provided, a default error message is output.</li></ul>                |

---

### [toObservable](#toobservable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Statement:toObservable([preserveTimer]) -> cp.rx.Observable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a new `Observable` instance for the `Statement`. Unless `preserveTimer` is `true`, this will cancel any scheduled execution of the statement via [After](#After)                                                                     |
| **Parameters**                              | <ul><li>preserveTimer    - If a timer has been set via [After](#After), don't cancel it. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>The `Observable`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
