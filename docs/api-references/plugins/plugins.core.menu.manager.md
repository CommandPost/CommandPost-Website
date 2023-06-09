# plugins.core.menu.manager

Menu Manager Plugin.

---

## Submodules
 * [plugins.core.menu.manager.section](plugins.core.menu.manager.section.md)

---

## API Overview
**Variables** - _Configurable values_
 * [rootSection](#rootsection)
 * [titleSuffix](#titlesuffix)

**Functions** - _API calls offered directly by the extension_
 * [addSection](#addsection)
 * [addTitleSuffix](#addtitlesuffix)
 * [disable](#disable)
 * [enable](#enable)
 * [generateMenuTable](#generatemenutable)
 * [init](#init)
 * [updateMenubarIcon](#updatemenubaricon)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [displayMenubarAsIcon](#displaymenubarasicon)


---

## API Documentation

#### Variables


### [rootSection](#rootsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.rootSection() -> section`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A new Root Section                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L23) |

---


### [titleSuffix](#titlesuffix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.titleSuffix() -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Title Suffix's                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L28) |

---

#### Functions


### [addSection](#addsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.addSection(priority) -> section`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new menu section, which can have items and sub-menus added to it.                                                                     |
| **Parameters**                              | <ul><li>priority - The priority order of menu items created in the section relative to other sections.</li></ul> |
| **Returns**                                 | <ul><li>section - The section that was created.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L148) |

---


### [addTitleSuffix](#addtitlesuffix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.addTitleSuffix(fnTitleSuffix)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Allows you to add a custom Suffix to the Menubar Title                                                                     |
| **Parameters**                              | <ul><li>fnTitleSuffix - A function that returns a single string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L161) |

---


### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.disable(priority) -> menubaritem`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the menu from the system menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L63) |

---


### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.enable(priority) -> menubaritem`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the previously removed menu back to the system menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L78) |

---


### [generateMenuTable](#generatemenutable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.generateMenuTable()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the Menu Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Menu Table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 175](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L175) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L33) |

---


### [updateMenubarIcon](#updatemenubaricon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.updateMenubarIcon(priority) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Menubar Icon                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L93) |

---

#### Fields


### [displayMenubarAsIcon](#displaymenubarasicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.displayMenubarAsIcon <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, the menubar item will be the app icon. If not, it will be the app name.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/menu/manager/init.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/menu/manager/init.lua#L143) |

---

