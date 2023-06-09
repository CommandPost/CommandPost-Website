# cp.ui.Toolbar

Toolbar Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Toolbar](#toolbar)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [overflowButton](#overflowbutton)
 * [selectedTitle](#selectedtitle)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doSelect](#doselect)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Toolbar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `element` is a `Button`, returning `true` if so.                                                                     |
| **Parameters**                              | <ul><li>element		- The `hs.axuielement` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is a `Button`, or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Toolbar.lua line 15](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Toolbar.lua#L15){target="_blank"} |

---

#### Constructors


### [Toolbar](#toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Toolbar(parent, uiFinder) -> cp.ui.Toolbar`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Toolbar` instance, given the specified `parent` and `uiFinder`                                                                     |
| **Parameters**                              | <ul><li>parent   - The parent object.</li><li>uiFinder   - The `cp.prop` or `function` that finds the `hs.axuielement` that represents the `Toolbar`.</li></ul> |
| **Returns**                                 | <ul><li>The new `Toolbar` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Toolbar.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Toolbar.lua#L28){target="_blank"} |

---

#### Fields


### [overflowButton](#overflowbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Toolbar.overflowButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "overflow" button which appears if there are more toolbar items                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Toolbar.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Toolbar.lua#L64){target="_blank"} |

---


### [selectedTitle](#selectedtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Toolbar.selectedTitle <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The title of the first selected item, if available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Toolbar.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Toolbar.lua#L51){target="_blank"} |

---

#### Methods


### [doSelect](#doselect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Toolbar:doSelect(title) -> Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will select the toolbar item with the specified title.                                                                     |
| **Parameters**                              | <ul><li>title - The title to select, if present.</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` that when executed returns `true` if the item was found and selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Toolbar.lua line 75](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Toolbar.lua#L75){target="_blank"} |

---

