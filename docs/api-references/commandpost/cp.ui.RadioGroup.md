# cp.ui.RadioGroup

Represents an `AXRadioGroup`, providing utility methods.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [RadioGroup](#radiogroup)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [optionCount](#optioncount)
 * [options](#options)
 * [optionsUI](#optionsui)
 * [selectedOption](#selectedoption)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doNextOption](#donextoption)
 * [doPreviousOption](#dopreviousoption)
 * [doSelectOption](#doselectoption)
 * [nextOption](#nextoption)
 * [previousOption](#previousoption)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `axuielement` is a RadioGroup.                                                                     |
| **Parameters**                              | <ul><li>element	- The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element is a RadioGroup.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L27) |

---

#### Constructors


### [RadioGroup](#radiogroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup(parent, uiFinder[, createOptionFn]) -> cp.ui.RadioGroup`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new RadioGroup.                                                                     |
| **Parameters**                              | <ul><li>parent	        - The parent table.</li><li>uiFinder	        - The function which will find the `axuielement` representing the RadioGroup.</li><li>createOptionFn   - If provided a function that receives the `RadioGroup` and an `axuielement` for a given option within the group.</li></ul> |
| **Returns**                                 | <ul><li>The new `RadioGroup` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L40) |

---

#### Fields


### [optionCount](#optioncount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup.optionCount <cp.prop: number; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The number of options in the group.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L56) |

---


### [options](#options)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup.options <table: cp.ui.Element; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `table` containing `cp.ui.Element` available in the radio group.                                                                     |
| **Returns**                                 | <ul><li>The `cp.prop` of options.</li></ul>          |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L81) |

---


### [optionsUI](#optionsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup.optionsUI <cp.prop: axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` containing `table` of `axuielement` options available in the radio group.                                                                     |
| **Returns**                                 | <ul><li>The `cp.prop` of options.</li></ul>          |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L68) |

---


### [selectedOption](#selectedoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup.selectedOption <cp.prop: number>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The currently selected option number.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L102) |

---

#### Methods


### [doNextOption](#donextoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup:doNextOption() -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that selects the next option in the group. Cycles from the last to the first option.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, that resolves to `true` if successful or sends an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 179](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L179) |

---


### [doPreviousOption](#dopreviousoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup:doPreviousOption() -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that selects the previous option in the group. Cycles from the first to the last item.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which resolves to `true` if successful or sends an error if not..</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 218](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L218) |

---


### [doSelectOption](#doselectoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup:doSelectOption(index) -> cp.rx.go.Statement<boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will attempt to select the option at the specified `index`.                                                                     |
| **Parameters**                              | <ul><li>index     - The index to select. Must be between 1 and [optionCount](#optionCount).</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful or send an error if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 135](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L135) |

---


### [nextOption](#nextoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup:nextOption() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects the next option in the group. Cycles from the last to the first option.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `RadioGroup`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L160) |

---


### [previousOption](#previousoption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.RadioGroup:previousOption() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects the previous option in the group. Cycles from the first to the last item.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `RadioGroup`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/RadioGroup.lua line 199](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/RadioGroup.lua#L199) |

---

