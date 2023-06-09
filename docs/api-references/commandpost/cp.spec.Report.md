# cp.spec.Report

The results of a test [run](cp.spec.Run.md).

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Report](#report)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [aborts](#aborts)
 * [failures](#failures)
 * [passes](#passes)
 * [run](#run)
 * [startTime](#starttime)
 * [stopTime](#stoptime)
 * [totalTime](#totaltime)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [aborted](#aborted)
 * [add](#add)
 * [failed](#failed)
 * [passed](#passed)
 * [start](#start)
 * [stop](#stop)
 * [summary](#summary)
 * [waiting](#waiting)


---

## API Documentation

#### Constructors


### [Report](#report)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report(run) -> cp.spec.Report`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new test report.                                                                     |
| **Parameters**                              | <ul><li>run</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.spec.Report` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L16) |

---

#### Fields


### [aborts](#aborts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.aborts <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of aborts in the run.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L42) |

---


### [failures](#failures)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.failures <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of failures in the run.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L37) |

---


### [passes](#passes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.passes <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of passes in the run.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L32) |

---


### [run](#run)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.run <cp.spec.Run>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [run](cp.spec.Run.md) the reports are for.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L27) |

---


### [startTime](#starttime)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.startTime <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of seconds since epoch when the test started, or `nil` if not started yet.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L47) |

---


### [stopTime](#stoptime)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.stopTime <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of seconds since epoch when the tests stopped, or `nil` if not stopped yet.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L52) |

---


### [totalTime](#totaltime)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report.totalTime <number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of seconds the run took (may be decimal), or `nil` if the test hasn't run.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L57) |

---

#### Methods


### [aborted](#aborted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:aborted(message)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Records an abort, with the specified message.                                                                     |
| **Parameters**                              | <ul><li>message - The related message to output.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 120](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L120) |

---


### [add](#add)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:add(otherReport) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the passes/failures/aborts from the other report into this one.                                                                     |
| **Parameters**                              | <ul><li>otherReport   - The other report to add.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L160) |

---


### [failed](#failed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:failed(message)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Records a fail, with the specified message.                                                                     |
| **Parameters**                              | <ul><li>message - The related message to output.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L106) |

---


### [passed](#passed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:passed([message])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Records a pass, with the specified message.                                                                     |
| **Parameters**                              | <ul><li>message - an optional additional message to output.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L92) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:start() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Logs the start time.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L63) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:stop() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Logs the end time.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L77) |

---


### [summary](#summary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:summary()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Summarise the reports.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L147) |

---


### [waiting](#waiting)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Report:waiting(timeout)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Records that a run is waiting for up to the specified amount of time.                                                                     |
| **Parameters**                              | <ul><li>timeout - The timeout to wait for, in seconds.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/spec/Report.lua line 134](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/spec/Report.lua#L134) |

---

