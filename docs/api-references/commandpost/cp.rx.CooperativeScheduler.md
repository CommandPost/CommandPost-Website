# cp.rx.CooperativeScheduler

Manages [Observables](cp.rx.Observer.md) using `coroutines` and a virtual clock that must be updated
manually.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [create](#create)
* Methods - API calls which can only be made on an object returned by a constructor
 * [isEmpth](#isempth)
 * [schedule](#schedule)
 * [update](#update)

## API Documentation

### Constructors


### [create](#create)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.CooperativeScheduler.create([currentTime]) -> cp.rx.CooperativeScheduler`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `CooperativeScheduler`.                                                                     |
| **Parameters**                              | <ul><li>currentTime     - A time to start the scheduler at. Defaults to `0`.</li></ul> |
| **Returns**                                 | <ul><li>The new `CooperativeScheduler`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [isEmpth](#isempth)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.CooperativeScheduler:isEmpth() -> cp.rx.CooperativeScheduler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the `CooperativeScheduler`'s queue is empty.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the scheduler is empty, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [schedule](#schedule)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.CooperativeScheduler:schedule(action[, delay]) -> cp.rx.Reference`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Schedules a `function` to be run after an optional delay.  Returns a [Reference](cp.rx.Reference.md) that will stop the action from running.                                                                     |
| **Parameters**                              | <ul><li>action - The `function` to execute. Will be converted into a coroutine. The coroutine may yield execution back to the scheduler with an optional number, which will put it to sleep for a time period.</li><li>delay - Delay execution of the action by a virtual time period. Defaults to `0`.</li></ul> |
| **Returns**                                 | <ul><li>The [Reference](cp.rx.Reference.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.CooperativeScheduler:update(delta) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Triggers an update of the `CooperativeScheduler`. The clock will be advanced and the scheduler will run any coroutines that are due to be run.                                                                     |
| **Parameters**                              | <ul><li>delta - An amount of time to advance the clock by. It is common to pass in the time in seconds or milliseconds elapsed since this function was last called. Defaults to `0`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
