# cp.delegator

`cp.delegator` is a [middleclass](https://github.com/kikito/middleclass) "mix-in" that allows for
simple specification of "delegated" values and functions in class definitions.

This allows you to compose an object from other objects, but allow methods or values from the
composed values to be accessed directly via the composing parent object.

For example:

```lua
local class = require "middleclass"
local delegator = require "cp.delegator"

local Minion = class("Minion")

function Minion:doTask()
   -- does something...
   return true
end

local Boss = class("Boss"):include(delegator):delegateTo("minion")

function Boss:initialize()
end

function Boss:hireMinion(minion)
    self.minion = minion
end

local johnSmith = Boss()
local joeBloggs = Minion()

johnSmith:doTask() -- error: no 'doTask' method available.

johnSmith:hireMinion(minion)
johnSmith:doTask() -- can now do the task, because his minion does it for him.
johnSmith.minion:doTask() -- The exact same thing.
```

The order that `delegator` is included with other mixins can affect how it functions. For example,
when mixing with `cp.lazy`, if `cp.lazy` is mixed in second, like so:

```lua
local MyClass = class("MyClass"):include(delegator):include(lazy):delegateTo("delegate")

function MyClass:initialize()
    self.delegate = {
        value = "delegated value"
    }
end

function MyClass.lazy.value()
    return "lazy value"
end

local myInstance = MyClass()
assert(myInstance.value == "delegated value") -- passes
assert(myInstance.delegated.value == "delegated value") -- passes
```

...then any delegated methods will take priority over lazy ones. Most likely you want to put `lazy` first, like so:

```lua
local MyClass = class("MyClass"):include(lazy):include(delegator):delegateTo("delegate")

function MyClass:initialize()
    self.delegate = {
        value = "delegated value"
    }
end

function MyClass.lazy.value()
    return "lazy value"
end

local myInstance = MyClass()
assert(myInstance.value == "lazy value") -- passes
assert(myInstance.delegated.value == "delegated value") -- passes
```

The easy way to remember is to read them together - "lazy delegator" sounds better than "delegator lazy".

## API Overview

## API Documentation

