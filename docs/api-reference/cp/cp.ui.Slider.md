# [docs](index.md) » cp.ui.Slider
---

Slider Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Slider](#Slider)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [maxValue](#maxValue)
 * [minValue](#minValue)
 * [value](#value)
* Methods - API calls which can only be made on an object returned by a constructor
 * [decrement](#decrement)
 * [getMaxValue](#getMaxValue)
 * [getMinValue](#getMinValue)
 * [getValue](#getValue)
 * [increment](#increment)
 * [loadLayout](#loadLayout)
 * [saveLayout](#saveLayout)
 * [setValue](#setValue)
 * [shiftValue](#shiftValue)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a Slider.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Slider](#Slider)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider(parent, uiFinder) -> cp.ui.Slider`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Slider                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object. Should have an `isShowing` property.</li><li>uiFinder		- The function which returns an `hs.axuielement` for the slider, or `nil`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Slider` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [maxValue](#maxValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.maxValue <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the maximum value of the slider.                                                                     |

| [minValue](#minValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.minValue <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the minimum value of the slider.                                                                     |

| [value](#value)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.value <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Sets or gets the value of the slider.                                                                     |

### Methods

| [decrement](#decrement)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:decrement() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Decrements the slider by one step.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getMaxValue](#getMaxValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getMaxValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the maximum value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value as a number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getMinValue](#getMinValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getMinValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the minimum value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value as a number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getValue](#getValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value of the slider as a number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [increment](#increment)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:increment() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Increments the slider by one step.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadLayout](#loadLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Slider layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Slider layout settings - created using [saveLayout](#saveLayout].</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveLayout](#saveLayout)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Slider layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Slider Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setValue](#setValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the slider to as a number.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shiftValue](#shiftValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:shiftValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shifts the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to shift the slider by as a number.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

