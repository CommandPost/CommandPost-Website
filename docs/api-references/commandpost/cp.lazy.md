# cp.lazy

`cp.lazy` is a [middleclass](https://github.com/kikito/middleclass) "mix-in" that allows for
simple specification of "lazy-loaded" values and functions in class definitions.

Some values and function results in classes are only created once, and may never be created,
depending on what happens in the class's lifetime.

In these cases, it is useful to have the value created on demand, rather than when the instance
is initialised.

For methods, this can be done like so with standard Lua code:

```lua
local class = require "middleclass"

local MyClass = class("MyClass")
function MyClass:expensiveThing()
    if self._expensiveThing == nil then
        self._expensiveThing = ExpensiveThing()
    end
    return self._expensiveThing
end

local myThing = MyClass()
local myExpensiveThing = myThing:expensiveThing()
```

For values, it is much trickier, and involves overriding the `metatable.__init` function. Which is
what this mix-in does for you. It allows you to provide a factory function which will be called just
once in the object's lifetime, and the result is stored for future calls.

To create a lazy `function` or method, do the following:

```lua
local class     = require "middleclass"
local lazy      = require "cp.lazy"

local MyClass = class("MyClass"):include(lazy)
function MyClass.lazy.method:expensiveThing()
    return ExpensiveThing()
end

local myThing = MyClass()
local myExpensiveThing = myThing:expensiveThing()
```

To create a lazy `value`, it's the same, except applied to the `value` table:

```lua
local class     = require "middleclass"
local lazy      = require "cp.lazy"

local MyClass = class("MyClass"):include(lazy)
function MyClass.lazy.value:expensiveThing()
    return ExpensiveThing()
end

local myThing = MyClass()
local myExpensiveThing = myThing.expensiveThing
```

Note that it is a 'method' function, so you can use `self` to refer to the specific instance
that the result will be applied to. The factory function is also passed the key value the
result is getting applied to as the next parameter, so you can do something like this:

```lua
function lookup(instance, key)
    return instance:expensiveLookup(key)
end
MyClass.lazy.method.oneThing = lookup
MyClass.lazy.method.otherThing = lookup
```

The `expensiveLookup` function would only get called once for each method, caching the result for future calls.

You can also create [cp.prop](cp.prop.md) values:

```lua
function MyClass.lazy.value:enabled()
    return prop.TRUE()
end

...
myClassValue:enabled() -- `true`
```

The returned `cp.prop` will be automatically bound
to the new instance and labeled with the key ("enabled" in the example above).

You can also create `statement` methods or values, which expect a cachable `cp.rx.go.Statement` value to be returned.
The `Statement` will automatically be labeled with the "class:method" name for debugging purposes.

For example:

```lua
function MyClass.lazy.method:doSomething()
    return Do(function() self:something() end)
end

...
myClassValue:doSomething():Now()
```

## API Overview

## API Documentation

