# cp.ui.ScrollBar

Provides access to `AXScrollBar` `axuielement` values.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [HORIZONTAL_ORIENTATION](#horizontal_orientation)
 * [VERTICAL_ORIENTATION](#vertical_orientation)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ScrollBar](#scrollbar)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [hidden](#hidden)
 * [horizontal](#horizontal)
 * [orientation](#orientation)
 * [value](#value)
 * [vertical](#vertical)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [loadLayout](#loadlayout)
 * [matches](#matches)
 * [saveLayout](#savelayout)
 * [shiftValueBy](#shiftvalueby)


---

## API Documentation

#### Constants


### [HORIZONTAL_ORIENTATION](#horizontal_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.HORIZONTAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is horizontal.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 15](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L15){target="_blank"} |

---


### [VERTICAL_ORIENTATION](#vertical_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.VERTICAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is vertical.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 10](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L10){target="_blank"} |

---

#### Constructors


### [ScrollBar](#scrollbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar(parent, uiFinder) -> cp.ui.ScrollBar`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ScrollBar` instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent object.</li><li>uiFinder - a `function` or `cp.prop` that provides the `AXScrollBar` `axuielement`.</li></ul> |
| **Returns**                                 | <ul><li>The new `ScrollBar`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L33){target="_blank"} |

---

#### Fields


### [hidden](#hidden)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.hidden <cp.prop: boolean; read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `ScrollBar` is currently hidden.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L69){target="_blank"} |

---


### [horizontal](#horizontal)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.horizontal <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `ScrollBar` is horizontal, otherwise `false`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 60](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L60){target="_blank"} |

---


### [orientation](#orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.orientation <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `AXOrientation` string.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L44){target="_blank"} |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.value <cp.prop: number; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the numeric scroll value, typically between `0.0` and `1.0`. May be set.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 76](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L76){target="_blank"} |

---


### [vertical](#vertical)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.vertical <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `ScrollBar` is vertical, otherwise `false`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L51){target="_blank"} |

---

#### Methods


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar:loadLayout(layout)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads the provided `layout` table of configuration parameters.                                                                     |
| **Parameters**                              | <ul><li>layout - the table of parameters.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L115){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the element is a `ScrollBar`.                                                                     |
| **Parameters**                              | <ul><li>element - The `axuielement` being matched.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L20){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the `ScrollBar` layout configuration.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a `table` with the configuration parameters.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L100){target="_blank"} |

---


### [shiftValueBy](#shiftvalueby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ScrollBar:shiftValueBy(amount) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to shift the value by the specified amount.                                                                     |
| **Parameters**                              | <ul><li>amount - The amount to shift by.</li></ul> |
| **Returns**                                 | <ul><li>The new value, or `nil` if not available.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ScrollBar.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ScrollBar.lua#L83){target="_blank"} |

---

