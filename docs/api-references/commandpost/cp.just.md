# cp.just

This module provides functions to help with performing tasks which may be
delayed, up to a finite number of loops.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [doUntil](#dountil)
 * [doWhile](#dowhile)
 * [wait](#wait)


---

## API Documentation

### Functions


### [doUntil](#dountil)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.just.doUntil(actionFn[, timeout[, frequency]]) -> value`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs an `action` function, looping until the result of the function evaluates to `true` (or a non-nil value). It will halt after the `timeout` in seconds after checking every `frequency` seconds.                                                                     |
| **Parameters**                              | <ul><li>`actionFn`	- a fuction which is called on each loop. It should return a 'truthy' value.</li><li>`timeout`	- (optional) the number of seconds after which we will give up. Defaults to 1 second.</li><li>`frequency`	- (optional) the amount of time in seconds between checks. Defaults to 1 millisecond.</li></ul> |
| **Returns**                                 | <ul><li>The last return value of the action function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doWhile](#dowhile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.just.doWhile(actionFn[, timeout[, frequency]]) -> value`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs an 'action' function, looping while the result of the function evaluates to `true`. It will halt after `timeout` seconds, checking with the specified `frequency`.                                                                     |
| **Parameters**                              | <ul><li>`actionFn`	- a fuction which is called on each loop. It should return a 'truthy' value.</li><li>`timeout`	- (optional) the number of seconds after which we will give up. Defaults to 1 second.</li><li>`frequency`	- (optional) the time between checks. Defaults to 1 millisecond.</li></ul> |
| **Returns**                                 | <ul><li>The last return value of the action function.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [wait](#wait)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.just.wait(periodInSeconds) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Pauses the application for the specified number of seconds.                                                                     |
| **Parameters**                              | <ul><li>periodInSeconds - the number of seconds to pause for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
