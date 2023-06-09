# cp.idle

This library allows tasks to be queue for execution when the computer has
been idle for a specified amount of time. 'Idle' is defined as no keyboard
or mouse movement.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [queue](#queue)


---

## API Documentation

### Functions


### [queue](#queue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.idle.queue(idleSeconds, actionFn[, retryOnError]) -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds an action to the idle queue, which will be run after the the computer has been idle for at least the specified number of seconds. It may be longer, if other items are on the queue, or if other tasks are running in the application.                                                                     |
| **Parameters**                              | <ul><li>`idleSeconds`		- The number of seconds of idle time must have elapsed run the action</li><li>`actionFn`		- The function to execute</li><li>`retryOnError`	- Optional. If set to `true`, the action will try running again if there is an error.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
