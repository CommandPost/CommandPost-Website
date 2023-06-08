# [docs](index.md) » hs.timer.delayed
---

Specialized timer objects to coalesce processing of unpredictable asynchronous events into a single callback

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [nextTrigger](#nextTrigger)
 * [running](#running)
 * [setDelay](#setDelay)
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed.new(delay, fn) -> hs.timer.delayed object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new delayed timer                                                                     |
| **Parameters**                              | <ul><li>delay - number of seconds to wait for after a `:start()` invocation (the "callback countdown")</li><li>fn - a function to call after `delay` has fully elapsed without any further `:start()` invocations</li></ul> |
| **Returns**                                 | <ul><li>a new `hs.timer.delayed` object</li></ul>          |
| **Notes**                                   | <ul><li>These timers are meant to be long-lived: once instantiated, there's no way to remove them from the run loop; create them once at the module level.</li><li>Delayed timers have specialized methods that behave differently from regular timers. When the `:start()` method is invoked, the timer will wait for `delay` seconds before calling `fn()`; this is referred to as the callback countdown. If `:start()` is invoked again before `delay` has elapsed, the countdown starts over again.</li><li>You can use a delayed timer to coalesce processing of unpredictable asynchronous events into a single callback; for example, if you have an event stream that happens in "bursts" of dozens of events at once, set an appropriate `delay` to wait for things to settle down, and then your callback will run just once.</li></ul>                |

### Methods

| [nextTrigger](#nextTrigger)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed:nextTrigger() -> number or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the time left in the callback countdown                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>if the callback countdown is running, returns the number of seconds until it triggers; otherwise returns nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [running](#running)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed:running() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether the callback countdown is running                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setDelay](#setDelay)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed:setDelay(delay) -> hs.timer.delayed object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Changes the callback countdown duration                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the delayed timer object</li></ul>          |
| **Notes**                                   | <ul><li>if the callback countdown is running, calling this method will restart it</li></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed:start([delay]) -> hs.timer.delayed object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts or restarts the callback countdown                                                                     |
| **Parameters**                              | <ul><li>delay - (optional) if provided, sets the countdown duration to this number of seconds for this time only; subsequent calls to `:start()` will revert to the original delay (or to the delay set with `:setDelay(delay)`)</li></ul> |
| **Returns**                                 | <ul><li>the delayed timer object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.timer.delayed:stop() -> hs.timer.delayed object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cancels the callback countdown, if running; the callback will therefore not be triggered                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the delayed timer object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

