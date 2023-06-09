# cp.apple.finalcutpro.main.GeneratorsBrowser

Generators Browser Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [TITLE](#title)

**Variables** - _Configurable values_
 * [isShowing](#isshowing)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [GeneratorsBrowser](#generatorsbrowser)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contents](#contents)
 * [group](#group)
 * [mainGroupUI](#maingroupui)
 * [search](#search)
 * [sidebar](#sidebar)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [applyItem](#applyitem)
 * [currentItemsUI](#currentitemsui)
 * [getCurrentTitles](#getcurrenttitles)
 * [getGeneratorsRowLabel](#getgeneratorsrowlabel)
 * [getTitlesRowLabel](#gettitlesrowlabel)
 * [hide](#hide)
 * [itemIsSelected](#itemisselected)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [selectedItemsUI](#selecteditemsui)
 * [show](#show)
 * [showAllGenerators](#showallgenerators)
 * [showAllTitles](#showalltitles)
 * [showGeneratorsCategory](#showgeneratorscategory)
 * [showInstalledGenerators](#showinstalledgenerators)
 * [showInstalledTitles](#showinstalledtitles)
 * [showSidebar](#showsidebar)
 * [showTitlesCategory](#showtitlescategory)
 * [topCategoriesUI](#topcategoriesui)


---

## API Documentation

#### Constants


### [TITLE](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Titles & Generators Title.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L37) |

---

#### Variables


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.isShowing <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Is the Generators Browser showing?                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L68) |

---

#### Constructors


### [GeneratorsBrowser](#generatorsbrowser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser(parent) -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `GeneratorsBrowser` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L42) |

---

#### Fields


### [contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.contents <cp.ui.ScrollArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Generators Browser Contents.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 152](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L152) |

---


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.group <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The group.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 164](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L164) |

---


### [mainGroupUI](#maingroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.mainGroupUI <cp.prop: axuielementObject>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Main Group UI.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 130](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L130) |

---


### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Search TextField object.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L173) |

---


### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser.sidebar <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The sidebar object.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L143) |

---

#### Methods


### [applyItem](#applyitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:applyItem(itemUI) -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies an item by double clicking on it.                                                                     |
| **Parameters**                              | <ul><li>itemUI - The `axuielementObject` of the item you want to apply.</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 380](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L380) |

---


### [currentItemsUI](#currentitemsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:currentItemsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the current items UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 333](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L333) |

---


### [getCurrentTitles](#getcurrenttitles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:getCurrentTitles() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the list of titles for all generators currently visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 399](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L399) |

---


### [getGeneratorsRowLabel](#getgeneratorsrowlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:getGeneratorsRowLabel() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a Generators Row Label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Generators Row Label as string.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 287](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L287) |

---


### [getTitlesRowLabel](#gettitlesrowlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:getTitlesRowLabel() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the label of the 'Titles' row in the current language.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The 'Titles' label.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 241](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L241) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:hide() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Generators Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L105) |

---


### [itemIsSelected](#itemisselected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:itemIsSelected(itemUI) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks to see if an item is selected.                                                                     |
| **Parameters**                              | <ul><li>itemUI - A `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the item is selected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 359](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L359) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Generators Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Generators Browser layout settings - created using `cp.apple.finalcutpro.main.GeneratorsBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 444](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L444) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Generators Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Effects Browser Layout.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 424](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L424) |

---


### [selectedItemsUI](#selecteditemsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:selectedItemsUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the selected items UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 346](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L346) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:show() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Generators Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L78) |

---


### [showAllGenerators](#showallgenerators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showAllGenerators() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show All Generators.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L300) |

---


### [showAllTitles](#showalltitles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showAllTitles() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing in the Generators & Titles panel, focused on all 'Titles'.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 254](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L254) |

---


### [showGeneratorsCategory](#showgeneratorscategory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showGeneratorsCategory(name) -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show a specific Generators Category.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the Generators Category to show.</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 318](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L318) |

---


### [showInstalledGenerators](#showinstalledgenerators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showInstalledGenerators() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures that the browser is showing 'Installed Generators'.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 227](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L227) |

---


### [showInstalledTitles](#showinstalledtitles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showInstalledTitles() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures that the browser is showing 'Installed Titles'.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 213](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L213) |

---


### [showSidebar](#showsidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showSidebar() -> GeneratorsBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing in the Generators & Titles panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `GeneratorsBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 182](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L182) |

---


### [showTitlesCategory](#showtitlescategory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:showTitlesCategory(name) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the sidebar is showing and that the selected 'Titles' category is selected, if available.                                                                     |
| **Parameters**                              | <ul><li>name - The category name, in the current language.</li></ul> |
| **Returns**                                 | <ul><li>The Generators Browser.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 272](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L272) |

---


### [topCategoriesUI](#topcategoriesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.GeneratorsBrowser:topCategoriesUI() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an array of the top-level categories in the sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The array of category rows.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/GeneratorsBrowser.lua#L198) |

---

