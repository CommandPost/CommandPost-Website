# cp.ui.Slider

Slider Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Slider](#slider)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [maxValue](#maxvalue)
 * [minValue](#minvalue)
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [decrement](#decrement)
 * [getMaxValue](#getmaxvalue)
 * [getMinValue](#getminvalue)
 * [getValue](#getvalue)
 * [increment](#increment)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [setValue](#setvalue)
 * [shiftValue](#shiftvalue)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `hs.axuielement` is a Slider.                                                                     |
| **Parameters**                              | <ul><li>element		- The `axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it's a match, or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [Slider](#slider)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider(parent, uiFinder) -> cp.ui.Slider`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Slider                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object. Should have an `isShowing` property.</li><li>uiFinder		- The function which returns an `hs.axuielement` for the slider, or `nil`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Slider` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [maxValue](#maxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.maxValue <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the maximum value of the slider.                                                                     |
| **Notes**                                   | - None |

---


### [minValue](#minvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.minValue <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the minimum value of the slider.                                                                     |
| **Notes**                                   | - None |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider.value <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Sets or gets the value of the slider.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [decrement](#decrement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:decrement() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Decrements the slider by one step.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getMaxValue](#getmaxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getMaxValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the maximum value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value as a number.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getMinValue](#getminvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getMinValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the minimum value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value as a number.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getValue](#getvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:getValue() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The value of the slider as a number.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [increment](#increment)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:increment() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Increments the slider by one step.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Slider layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Slider layout settings - created using [saveLayout](#saveLayout].</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Slider layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Slider Layout.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [setValue](#setvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:setValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to set the slider to as a number.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [shiftValue](#shiftvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Slider:shiftValue(value) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shifts the value of the slider.                                                                     |
| **Parameters**                              | <ul><li>value - The value you want to shift the slider by as a number.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

