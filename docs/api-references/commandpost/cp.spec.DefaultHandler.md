# cp.spec.DefaultHandler

Default implementation of [Handler](cp.spec.Handler.md), which
outputs via the standard `print` function.

## API Overview
* Methods - API calls which can only be made on an object returned by a constructor
 * [aborted](#aborted)
 * [failed](#failed)
 * [filter](#filter)
 * [printf](#printf)
 * [printSpacer](#printSpacer)
 * [start](#start)
 * [stop](#stop)
 * [summary](#summary)
 * [waiting](#waiting)

## API Documentation

### Methods

| [aborted](#aborted)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:aborted(run, msg)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints an "[ABORT]" message.                                                                     |
| **Parameters**                              | <ul><li>run      - the [run](cp.spec.Run.md)</li><li>msg       - the message string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [failed](#failed)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:failed(run, msg) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints a "[FAIL]" message.                                                                     |
| **Parameters**                              | <ul><li>run      - the [run](cp.spec.Run.md)</li><li>msg       - the message string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [filter](#filter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:filter(run, msg) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints a "[FILTER]" message.                                                                     |
| **Parameters**                              | <ul><li>run      - the [run](cp.spec.Run.md)</li><li>msg       - the message string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [printf](#printf)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:printf(test, ...)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints a spacer (if not the first line), followed by the text, optionally formatted with the provided parameters.                                                                     |
| **Parameters**                              | <ul><li>text - The message to print.</li><li>... - The parameters to interpolate into the text message.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [printSpacer](#printSpacer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:printSpacer()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints a blank line if this is not the first time it has been called.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:start(run, msg)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the handler or run is verbose, prints a "[PASS]" message.                                                                     |
| **Parameters**                              | <ul><li>run - the [run](cp.spec.Run.md)</li><li>msg - the message string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:stop(run)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the handler or run is verbose, prints a "[STOP]" message.                                                                     |
| **Parameters**                              | <ul><li>run - the [run](cp.spec.Run.md)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [summary](#summary)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:summary(run, report) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the handler or run is verbose, prints a "[RESULT]" message.                                                                     |
| **Parameters**                              | <ul><li>run      - the [run](cp.spec.Run.md)</li><li>report    - the [report](cp.spec.Report.md)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [waiting](#waiting)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.DefaultHandler:waiting(run, timeout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prints a "[WAIT]" message with the timeout value..                                                                     |
| **Parameters**                              | <ul><li>run - run</li><li>timeout - timeout</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

