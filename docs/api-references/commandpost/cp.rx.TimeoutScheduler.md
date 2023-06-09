# cp.rx.TimeoutScheduler

A scheduler that uses the `hs.timer` library to schedule events on an event loop.

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [create](#create)
 * [schedule](#schedule)
 * [stopAll](#stopall)


---

## API Documentation

#### Methods


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.TimeoutScheduler.create() -> cp.rx.TimeoutScheduler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new `TimeoutScheduler`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The new `TimeoutScheduler`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/TimeoutScheduler.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/TimeoutScheduler.lua#L17) |

---


### [schedule](#schedule)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.TimeoutScheduler:schedule(action[, delay]) -> cp.rx.TimeoutScheduler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Schedules an action to run at a future point in time.                                                                     |
| **Parameters**                              | <ul><li>action  - The action to run.</li><li>delay   - The delay, in milliseconds. Defaults to `0`.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/TimeoutScheduler.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/TimeoutScheduler.lua#L30) |

---


### [stopAll](#stopall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.TimeoutScheduler:stopAll() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops all future timers from running and clears them.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/rx/TimeoutScheduler.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/rx/TimeoutScheduler.lua#L51) |

---

