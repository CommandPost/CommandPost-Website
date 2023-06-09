# cp.ui.PropertyRow

Represents a single property row, typically in a Property Inspector.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [intersectBuffer](#intersectbuffer)

**Functions** - _API calls offered directly by the extension_
 * [isParent](#isparent)
 * [matches](#matches)
 * [parentUIFinder](#parentuifinder)
 * [prepareParent](#prepareparent)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [PropertyRow](#propertyrow)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [label](#label)
 * [labelUI](#labelui)
 * [propertiesUI](#propertiesui)
 * [reset](#reset)
 * [UI](#ui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [children](#children)
 * [doHide](#dohide)
 * [doShow](#doshow)
 * [extend](#extend)
 * [hide](#hide)
 * [labelKeys](#labelkeys)
 * [parent](#parent)
 * [show](#show)


---

## API Documentation

#### Constants


### [intersectBuffer](#intersectbuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.intersectBuffer`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Defines the buffer for intersections with the `labelUI`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L37){target="_blank"} |

---

#### Functions


### [isParent](#isparent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.isParent(parent) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `parent` has been prepared via [prepareParent](#prepareParent).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the parent is prepared.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L84){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `axuielement` could be a property row.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element could be a property row.</li></ul>          |
| **Notes**                                   | <ul><li>This does not guarantee that it *is* a property row element, just that it could be.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L97){target="_blank"} |

---


### [parentUIFinder](#parentuifinder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.parentUIFinder(parent) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the `cp.prop` which finds the `hs.axuielement` that contains property rows from the parent. This needs to be configured first by calling the `prepareParent` function with the `parent` and finder function.                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent which has a finder assigned.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.prop` which provides access to the finder, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L42){target="_blank"} |

---


### [prepareParent](#prepareparent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.prepareParent(parent, uiFinder) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Call this to make `parent` table ready to be a parent of `PropertyRow`s. Essentially, this lets `PropertyRow` instances ask the parent for the `hs.axuielement` that contains the property row details.                                                                     |
| **Parameters**                              | <ul><li>parent    - The parent table.</li><li>uiFinder  - The function or cp.prop which will be called to find the parent UI element. Functions will be passed the `parent` when being executed.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 55](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L55){target="_blank"} |

---

#### Constructors


### [PropertyRow](#propertyrow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow(parent, labelKey[, index]) -> cp.ui.PropertyRow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `PropertyRow` with the specified parent and label key.                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent object.</li><li>labelKey      - The key of the label that the row will map to.</li><li>index         - The row number with the same label to get. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The new `PropertyRow` instance.</li></ul>          |
| **Notes**                                   | <ul><li>If you have more than one row with the same label, specify the `index` - specifying `2` will match with the second instance, for example.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L113){target="_blank"} |

---

#### Fields


### [label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.label <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The label of the property row, in the current langauge.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L191){target="_blank"} |

---


### [labelUI](#labelui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.labelUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` for the label UI.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L133){target="_blank"} |

---


### [propertiesUI](#propertiesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.propertiesUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` from the parent that contains the properties.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 184](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L184){target="_blank"} |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.reset <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `reset` button for the row, which may or may not actually exist.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 208](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L208){target="_blank"} |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow.UI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` for the row.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 150](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L150){target="_blank"} |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 236](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L236){target="_blank"} |

---


### [children](#children)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:children() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a table of children for the Property Row.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of children or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 319](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L319){target="_blank"} |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to hide the `PropertyRow`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 293](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L293){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the `PropertyRow`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 263](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L263){target="_blank"} |

---


### [extend](#extend)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:extend(extendFn) -> cp.ui.PropertyRow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This method will call the provided function, passing it the current `PropertyRow`. This can be used to add addtional tweaks to the row, such as adding custom Elements.                                                                     |
| **Parameters**                              | <ul><li>extendFn     - A `function` that will be passed the current row.</li></ul> |
| **Returns**                                 | <ul><li>The same `PropertyRow` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 169](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L169){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the `PropertyRow`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 276](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L276){target="_blank"} |

---


### [labelKeys](#labelkeys)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:labelKeys() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the key of the label that the row will map to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 306](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L306){target="_blank"} |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:parent() -> parent`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the parent object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>parent</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 223](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L223){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.PropertyRow:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the `PropertyRow`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>self</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/PropertyRow.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/PropertyRow.lua#L249){target="_blank"} |

---

