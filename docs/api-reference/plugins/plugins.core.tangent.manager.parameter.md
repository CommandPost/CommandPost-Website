# [docs](index.md) » plugins.core.tangent.manager.parameter
---

Represents a Tangent Parameter control.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
 * [update](#update)
* Constructors - API calls which return an object, typically one that offers API methods
 * [parameter](#parameter)
* Methods - API calls which can only be made on an object returned by a constructor
 * [change](#change)
 * [get](#get)
 * [maxValue](#maxValue)
 * [minValue](#minValue)
 * [onChange](#onChange)
 * [onGet](#onGet)
 * [onReset](#onReset)
 * [press](#press)
 * [release](#release)
 * [reset](#reset)
 * [stepSize](#stepSize)
 * [xml](#xml)

## API Documentation

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a `parameter` instance.                                                                     |
| **Parameters**                              | <ul><li>thing     - The other object to test.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `parameter`, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [update](#update)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:update()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Tangent with the current value of the parameter.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [parameter](#parameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter(id[, name[, parent]) -> parameter`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Parameter` instance.                                                                     |
| **Parameters**                              | <ul><li>id        - The ID number of the parameter.</li><li>name      - The name of the parameter.</li><li>parent    - The parent of the parameter.</li></ul> |
| **Returns**                                 | <ul><li>the new `parameter`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [change](#change)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:change(amount) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `change` function if present, and returns the new result. If none has been set, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>amount    - The amount to change the parameter.</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [get](#get)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:get() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `get` function if present, and returns the result. If none has been set, `nil` is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [maxValue](#maxValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:maxValue([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the maximum value for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [minValue](#minValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:minValue([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the minimum value for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [onChange](#onChange)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onChange(changeFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter change' request.                                                                     |
| **Parameters**                              | <ul><li>getFn     - The function to call when the Tangent requests the parameter change.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function(amount) -> number`</li><li></li><li>The return value should be the new value of the parameter.</li></ul>                |

| [onGet](#onGet)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onGet(getFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter value' request.                                                                     |
| **Parameters**                              | <ul><li>getFn     - The function to call when the Tangent requests the parameter value.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> number`</li></ul>                |

| [onReset](#onReset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:onReset(resetFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the Tangent sends a 'parameter reset' request.                                                                     |
| **Parameters**                              | <ul><li>resetFn     - The function to call when the Tangent requests the parameter reset.</li></ul> |
| **Returns**                                 | <ul><li>The `parameter` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This function should have this signature:</li><li></li><li>`function() -> nil`</li></ul>                |

| [press](#press)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:press() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `press` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [release](#release)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:release() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `release` function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:reset() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the `reset` function if present. Returns the current value of the parameter after reset.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current value, or `nil` if it can't be accessed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stepSize](#stepSize)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:stepSize([value]) -> number | self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the step size for the parameter.                                                                     |
| **Parameters**                              | <ul><li>value     - The new value.</li></ul> |
| **Returns**                                 | <ul><li>If `value` is `nil`, the current value is returned, otherwise returns `self`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [xml](#xml)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.tangent.manager.parameter:xml() -> cp.web.xml`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `xml` configuration for the Parameter.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `xml` for the Parameter.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

