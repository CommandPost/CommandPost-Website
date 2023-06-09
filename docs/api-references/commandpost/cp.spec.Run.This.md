# cp.spec.Run.This

A token passed to test functions to allow them to indicate if a test [run](cp.spec.Run.md)
will complete asynchronously.

## API Overview
* Constants - Useful values which cannot be changed
 * [state](#state)
* Functions - API calls offered directly by the extension
 * [defaultTimeout](#defaultTimeout)
* Constructors - API calls which return an object, typically one that offers API methods
 * [This](#This)
* Methods - API calls which can only be made on an object returned by a constructor
 * [abort](#abort)
 * [cleanup](#cleanup)
 * [done](#done)
 * [expectAbort](#expectAbort)
 * [expectFail](#expectFail)
 * [fail](#fail)
 * [isActive](#isActive)
 * [isDone](#isDone)
 * [isWaiting](#isWaiting)
 * [log](#log)
 * [prepare](#prepare)
 * [run](#run)
 * [toObserver](#toObserver)
 * [wait](#wait)

## API Documentation

### Constants


### [state](#state)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This.state`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A collection of states that a `Run.This` can be in.                                                                     |
| **Notes**                                   | <ul><li>States include:</li><li> running     - The Run is currently running and will terminate at the end of the function (synchrnonous).</li><li> waiting     - The Run is waiting, and will terminate when [done()](#done) is called. (asynchronous).</li><li> done        - The Run is done.</li></ul>                |

---
### Functions


### [defaultTimeout](#defaultTimeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This.defaultTimeout([timeout]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets and/or sets the default timeout for asynchronous tests. Defaults to 60 seconds.                                                                     |
| **Parameters**                              | <ul><li>timeout - (optional) the new timeout, in seconds.</li></ul> |
| **Returns**                                 | <ul><li>The current default timeout, in seconds.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [This](#This)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This(run, actionFn, index) -> cp.spec.Run.This`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Run.This` instance for a [Run](cp.spec.Run.md).                                                                     |
| **Parameters**                              | <ul><li>run       - The [Run](cp.spec.Run.md).</li><li>actionFn  - The action function to execute.</li><li>index     - The index of the action in the current phase.</li></ul> |
| **Returns**                                 | <ul><li>The new `Run.This`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [abort](#abort)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:abort([message]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates the stage has aborted.                                                                     |
| **Parameters**                              | <ul><li>message   - The optional message to output.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [cleanup](#cleanup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:cleanup()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cleans up This after a step.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [done](#done)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:done()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that the test is completed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [expectAbort](#expectAbort)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:expectAbort([messagePattern]) -> Run.This`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that this spec is expecting an abort/`error` to occur.                                                                     |
| **Parameters**                              | <ul><li>messagePattern - The pattern to check the fail message against. If not provided, any message will match.</li></ul> |
| **Returns**                                 | <ul><li>The same `Run.This` instance.</li></ul>          |
| **Notes**                                   | <ul><li>When this is expected, it doesn't log the problem as a 'fail'. In fact, if the it doesn't occur at some point during the run, it will raise a failure at the end of the run.</li><li>The `messagePattern` can be used to ensure it's the fail you expect.</li><li>This should be called before the actual abort/`error` would occur.</li></ul>                |

---

### [expectFail](#expectFail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:expectFail([messagePattern]) -> Run.This`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that this spec is expecting an assert/fail to occur.                                                                     |
| **Parameters**                              | <ul><li>messagePattern - The pattern to check the fail message against. If not provided, any message will match.</li></ul> |
| **Returns**                                 | <ul><li>The same `Run.This` instance.</li></ul>          |
| **Notes**                                   | <ul><li>When this is expected, it doesn't log the problem as a 'fail'. In fact, if the fail doesn't occur, it will raise a failure at the end of the run.</li><li>The `messagePattern` can be used to ensure it's the fail you expect.</li><li>This should be called before the actual assert/fail would occur.</li></ul>                |

---

### [fail](#fail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:fail([message]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates the run has failed.                                                                     |
| **Parameters**                              | <ul><li>message   - The optional message to output.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isActive](#isActive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:isActive() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the this is in an active state - either `running` or `waiting`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if isActive.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isDone](#isDone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:isDone() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns `true` if this is done.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isWaiting](#isWaiting)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:isWaiting() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the [Run](cp.spec.Run.md) is waiting for this execution to complete via the [done](cp.spec.Run.This.md#done) method.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the waiting.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [log](#log)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:log(message[, ...])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | When the current [Run](cp.spec.Run.md) is in [debug](#debug) mode, output the message to the console.                                                                     |
| **Parameters**                              | <ul><li>message   - the text message to output.</li><li>...       - optional parameters, to be injected into the message, ala `string.format`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [prepare](#prepare)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:prepare()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prepares this to run.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [run](#run)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:run() -> cp.spec.Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current [Run](cp.spec.Run.md)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns the current [Run](cp.spec.Run.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [toObserver](#toObserver)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:toObserver([onNext[, onError[, onCompleted]]) -> cp.rx.Observer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates an [Observer](cp.rx.Observer.md).                                                                     |
| **Parameters**                              | <ul><li>onNext - The `next` handler.</li><li>onError - The `error` handler.</li><li>onCompleted - The `completed` handler.</li></ul> |
| **Returns**                                 | <ul><li>cp.rx.Observer</li></ul>          |
| **Notes**                                   | <ul><li>If the `onNext`/`onError`/`onCompleted` functions are</li><li>not provided, then it will provide defaults. `onNext` will be logged, `onError` will throw an error,</li><li>and `onCompleted` will trigger [done](#done).</li></ul>                |

---

### [wait](#wait)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.This:wait([timeout]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that the test is continuing asynchronously, and will be completed by calling [done](#done).                                                                     |
| **Parameters**                              | <ul><li>timeout - (optional) The number of seconds to wait before timing out.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If not provided, [Run.This.defaultTimeout()](cp.spec.Run.This.md#defaultTimeout) is used.</li></ul>                |

---
