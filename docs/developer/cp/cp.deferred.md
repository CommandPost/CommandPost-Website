# [docs](index.md) » cp.deferred
---

This extension makes it simple to defer multiple actions after a delay from the initial execution.
 Unlike `hs.timer.delayed`, the delay will not be extended
with subsequent `run()` calls, but the delay will trigger again if `run()` is called again later.

For example:

```lua
local update = deferred.new(1) -- defer 1 second
:action(function() print("Updated!"") end)
-- do something
update()
-- do something else
update()
-- one second after the inital call to `update()`, one "Updated!" is printed.
```

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [action](#action)
 * [delay](#delay)
 * [run](#run)
 * [secondsRemaining](#secondsRemaining)
 * [stop](#stop)
 * [waiting](#waiting)

## API Documentation

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred.new(delay) -> cp.deferred`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `defer` instance, which will trigger any added `action`s by a set delay after the initial call to `run()`.                                                                     |
| **Parameters**                              | <ul><li>delay - The number of seconds to delay when `run()` is initally called.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.deferred` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [action](#action)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:action(actionFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the `action` the the list that will be called when the timer goes off.                                                                     |
| **Parameters**                              | <ul><li>The callable action.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul><li>It must be a `function` (or callable `table`) with the following signature:</li><li></li><li>```lua</li><li>function() -> nil</li><li>```</li><li></li><li>* Multiple actions can be added and they will all be called when the delay timer goes off.</li></ul>                |

| [delay](#delay)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:delay([value]) -> self | number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/gets the delay period. If no `value` is provided, the current delay is returned.                                                                     |
| **Parameters**                              | <ul><li>value     - the new delay value.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.deferred` instance if a new value is provided, or the current delay if not.</li></ul>          |
| **Notes**                                   | <ul><li>If it is provided, then the new delay will be set. If it is currently waiting, then the wait will be restarted with the new delay.</li></ul>                |

| [run](#run)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:run() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures that the actions will run after the `delay`. Multiple calls will not increase the delay from the initial call.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.deferred` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [secondsRemaining](#secondsRemaining)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:secondsRemaining() -> number | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of seconds until the next execution, or `nil` if it's not running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of seconds until execution.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:stop() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops any execution of any deferred actions, if it is currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The deferred timer.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [waiting](#waiting)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.deferred:waiting() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the defer is currently waiting to run.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the deferred action is waiting to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

