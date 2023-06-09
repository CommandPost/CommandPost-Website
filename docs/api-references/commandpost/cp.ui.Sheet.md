# cp.ui.Sheet

Sheet UI Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Sheet](#sheet)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [cancel](#cancel)
 * [default](#default)
 * [title](#title)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [containsText](#containstext)
 * [doCancel](#docancel)
 * [doDefault](#dodefault)
 * [doHide](#dohide)
 * [doPress](#dopress)
 * [hide](#hide)
 * [pressCancel](#presscancel)
 * [pressDefault](#pressdefault)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L16){target="_blank"} |

---

#### Constructors


### [Sheet](#sheet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet(parent, uiFinder) -> Sheet`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Sheet` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder     - The UI, either a `cp.prop` or a `function`.</li></ul> |
| **Returns**                                 | <ul><li>A new `Browser` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L29){target="_blank"} |

---

#### Fields


### [cancel](#cancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet.cancel <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The cancel [Button](cp.ui.Button.md) for the `Sheet`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L57){target="_blank"} |

---


### [default](#default)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet.default <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The default [Button](cp.ui.Button.md) for the `Sheet`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L50){target="_blank"} |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet.title <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the title of the sheet.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L43){target="_blank"} |

---

#### Methods


### [containsText](#containstext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:containsText(value[, plain]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if there are any child text elements containing the exact text or pattern, from beginning to end.                                                                     |
| **Parameters**                              | <ul><li>textPattern   - The text pattern to check.</li><li>plain         - If `true`, the text will be compared exactly, otherwise it will be considered to be a pattern. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if an element's `AXValue` matches the text pattern exactly.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 171](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L171){target="_blank"} |

---


### [doCancel](#docancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:doCancel() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to hide the Sheet (if visible) by pressing the [Cancel](#cancel) button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to execute, resolving to `true` if the button was present and clicked, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L94){target="_blank"} |

---


### [doDefault](#dodefault)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:doDefault() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the `default` [Button](cp.ui.Button.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to execute, resolving to `true` if the button was present and clicked, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L107){target="_blank"} |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:doHide() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to hide the Sheet (if visible) by pressing the [Cancel](#cancel) button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to execute, resolving to `true` if the button was present and clicked, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L77){target="_blank"} |

---


### [doPress](#dopress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:doPress(buttonFromLeft) -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to press the indicated button from left-to-right, if it can be found.                                                                     |
| **Parameters**                              | <ul><li>buttonFromLeft    - The number of the button from left-to-right.</li></ul> |
| **Returns**                                 | <ul><li>a [Statement](cp.rx.go.Statement.md) to execute, resolving in `true` if the button was found and pressed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 120](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L120){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:hide() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the sheet by pressing the "Cancel" button, if it exists.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L64){target="_blank"} |

---


### [pressCancel](#presscancel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:pressCancel() -> self, boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Cancel button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Sheet` object.</li><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L141){target="_blank"} |

---


### [pressDefault](#pressdefault)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Sheet:pressDefault() -> self, boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Presses the Default button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Sheet` object.</li><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/Sheet.lua line 156](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Sheet.lua#L156){target="_blank"} |

---

