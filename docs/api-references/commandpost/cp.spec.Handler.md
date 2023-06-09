# cp.spec.Handler

Subclasses of this can customise how reports are handled.
All methods do nothing.

See [DefaultHandler](cp.spec.DefaultHandler.md).

## API Overview
* Functions - API calls offered directly by the extension
 * [default](#default)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Handler](#handler)
* Methods - API calls which can only be made on an object returned by a constructor
 * [aborted](#aborted)
 * [checkVerbose](#checkverbose)
 * [failed](#failed)
 * [filter](#filter)
 * [passed](#passed)
 * [start](#start)
 * [stop](#stop)
 * [summary](#summary)
 * [verbose](#verbose)
 * [waiting](#waiting)

## API Documentation

### Functions


### [default](#default)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler.default([handler]) -> cp.spec.Handler`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets and sets the current default `Handler` implementation. This is used when processing test runs.                                                                     |
| **Parameters**                              | <ul><li>handler - (optional) when provided, sets the default to the specified handler.</li></ul> |
| **Returns**                                 | <ul><li>The current `Handler` implementation.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [Handler](#handler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler() -> cp.spec.Handler`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Handler`                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [aborted](#aborted)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:aborted(run, msg) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has had an abort.                                                                     |
| **Parameters**                              | <ul><li>run - The test run.</li><li>msg - The message.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [checkVerbose](#checkverbose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:checkVerbose(run) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates if either the handler or the individual [Run](cp.spec.Run.md) is "verbose". If so, more messages may be output by the handler.                                                                     |
| **Parameters**                              | <ul><li>run</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [failed](#failed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:failed(run, msg) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has failed.                                                                     |
| **Parameters**                              | <ul><li>run      - The test run.</li><li>msg       - The message.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [filter](#filter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:filter(run, msg) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) is running due to being filtered.                                                                     |
| **Parameters**                              | <ul><li>run      - The test run.</li><li>msg       - The message.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [passed](#passed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:passed(run) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has passed.                                                                     |
| **Parameters**                              | <ul><li>run - The test run.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:start(run) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has started.                                                                     |
| **Parameters**                              | <ul><li>run - The test run.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:stop(run) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has completed.                                                                     |
| **Parameters**                              | <ul><li>run - The test run.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [summary](#summary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:summary(run, report) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate the [run](cp.spec.Run.md) has passed with the given [report](cp.spec.Report.md).                                                                     |
| **Parameters**                              | <ul><li>run  - The test run.</li><li>report - The test reports.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [verbose](#verbose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:verbose([isVerbose]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicate that the handler is (or is not) verbose. If not provided, this is set to `true`.                                                                     |
| **Parameters**                              | <ul><li>isVerbose - (optional) If set to `false`, the handler will not be verbose. Defaults to `true`.</li></ul> |
| **Returns**                                 | <ul><li>The `Handler` instance, for chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [waiting](#waiting)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Handler:waiting(run, timeout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Call to indicate that the run is waiting asynchronously.                                                                     |
| **Parameters**                              | <ul><li>run      - The test run.</li><li>timeout  - The timeout, in seconds.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
