# cp.spec.Run

An individual run of a test [Definition](cp.spec.Definition.md) or [Specification](cp.spec.Specification.md).

## Submodules
 * [cp.spec.Run.This](cp.spec.Run.This.md)

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [Run](#Run)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [phase](#phase)
 * [report](#report)
 * [result](#result)
 * [shared](#shared)
 * [source](#source)
* Methods - API calls which can only be made on an object returned by a constructor
 * [debug](#debug)
 * [expectAbort](#expectAbort)
 * [expectFail](#expectFail)
 * [isDebugging](#isDebugging)
 * [isExpectingAbort](#isExpectingAbort)
 * [isExpectingFail](#isExpectingFail)
 * [log](#log)
 * [onBefore](#onBefore)
 * [onBfter](#onBfter)
 * [onRunning](#onRunning)
 * [parent](#parent)
 * [verbose](#verbose)

## API Documentation

### Constructors

| [Run](#Run)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run(name, source) -> cp.spec.Run`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new test run.                                                                     |
| **Parameters**                              | <ul><li>name          - The name of the run.</li><li>source        - The object (typically a [Definition](cp.spec.Definition.md)) that initiated the run.</li></ul> |
| **Returns**                                 | <ul><li>cp.spec.Run</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [phase](#phase)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.phase <cp.spec.Run.phase>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current [phase](#phase) of the run.                                                                     |

| [report](#report)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.report <cp.spec.Report>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The reports of the run.                                                                     |

| [result](#result)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.result <cp.spec.Run.result>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current result. Defaults to `Run.result.passing`.                                                                     |

| [shared](#shared)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.shared <table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The set of data shared by all phases of the Run. Data from parent Runs will also be available.                                                                     |

| [source](#source)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run.source`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The object that initiated the run. Typically a [Definition](cp.spec.Definition.md).                                                                     |

### Methods

| [debug](#debug)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:debug() -> cp.spec.Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables debugging on this `Run`. Any calls to [#log] will be output to the console.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `Run` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [expectAbort](#expectAbort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:expectAbort([messagePattern]) -> Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that this spec is expecting an abort/`error` to occur.                                                                     |
| **Parameters**                              | <ul><li>messagePattern - The pattern to check the fail message against. If not provided, any message will match.</li></ul> |
| **Returns**                                 | <ul><li>The same `Run` instance.</li></ul>          |
| **Notes**                                   | <ul><li>When this is expected, it doesn't log the problem as a 'fail'. In fact, if the it doesn't occur at some point during the run, it will raise a failure at the end of the run.</li><li>The `messagePattern` can be used to ensure it's the fail you expect.</li><li>This should be called before the actual abort/`error` would occur.</li></ul>                |

| [expectFail](#expectFail)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:expectFail([messagePattern]) -> Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates that this spec is expecting an assert/fail to occur.                                                                     |
| **Parameters**                              | <ul><li>messagePattern - The pattern to check the fail message against. If not provided, any message will match.</li></ul> |
| **Returns**                                 | <ul><li>The same `Run` instance.</li></ul>          |
| **Notes**                                   | <ul><li>When this is expected, it doesn't log the problem as a 'fail'. In fact, if the fail doesn't occur, it will raise a failure at the end of the run.</li><li>The `messagePattern` can be used to ensure it's the fail you expect.</li><li>This should be called before the actual assert/fail would occur.</li></ul>                |

| [isDebugging](#isDebugging)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:isDebugging() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if `debug` has been enabled on this or any parent `Run`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isExpectingAbort](#isExpectingAbort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:isExpectingAbort() -> boolean, string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the run is expecting a abort/error to occur. If so, it will return the expected message pattern as the second value, if specified.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>boolean - `true`, if a fail is expected.</li><li>string - the message pattern, if specified.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isExpectingFail](#isExpectingFail)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:isExpectingFail() -> boolean, string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the run is expecting a fail to occur. If so, it will return the expected message pattern, if specified.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>boolean - `true`, if a fail is expected.</li><li>string - the message pattern, if specified.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [log](#log)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:log(message[, ...])`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | When the current [Run](cp.spec.Run.md) is in [debug](#debug) mode, output the message to the console.                                                                     |
| **Parameters**                              | <ul><li>message   - the text message to output.</li><li>...       - optional parameters, to be injected into the message, ala `string.format`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onBefore](#onBefore)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:onBefore(actionFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a callback function to run prior to executing the actual test.                                                                     |
| **Parameters**                              | <ul><li>actionFn - The function to run, passed this `Run.This` as the first parameter.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onBfter](#onBfter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:onBfter(actionFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a callback function to run after to executing the actual test, pass or fail.                                                                     |
| **Parameters**                              | <ul><li>actionFn      - The function to run, passed this `Run` as the first parameter.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onRunning](#onRunning)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:onRunning(actionFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a callback function to run during the test.                                                                     |
| **Parameters**                              | <ul><li>runningFn - The function to run, passed [Run.This](cp.spec.Run.This.md) as the first parameter.</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [parent](#parent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:parent([parent]) -> cp.spec.Run`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets and/or sets the parent `Run` for this run.                                                                     |
| **Parameters**                              | <ul><li>parent        - (optional) If set, will set the parent `Run`.</li></ul> |
| **Returns**                                 | <ul><li>The current parent `Run`.</li></ul>          |
| **Notes**                                   | <ul><li>If a `parent` is provided and there is already another Run set as a parent, an error is thrown.</li></ul>                |

| [verbose](#verbose)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.Run:verbose([isVerbose]) -> boolean | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Either sets the `verbose` value and returns itself for further chaining, or returns the current verbose status.                                                                     |
| **Parameters**                              | <ul><li>isVerbose - (optional) if `true` or `false` will update the verbose status and return this `Run`.</li></ul> |
| **Returns**                                 | <ul><li>The current `verbose` status, or this `Run` if `isVerbose` is provided.</li></ul>          |
| **Notes**                                   | <ul></ul>                |
