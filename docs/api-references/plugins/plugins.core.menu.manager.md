# plugins.core.menu.manager

Menu Manager Plugin.

## Submodules
 * [plugins.core.menu.manager.section](plugins.core.menu.manager.section.md)

## API Overview
* Variables - Configurable values
 * [rootSection](#rootSection)
 * [titleSuffix](#titleSuffix)
* Functions - API calls offered directly by the extension
 * [addSection](#addSection)
 * [addTitleSuffix](#addTitleSuffix)
 * [disable](#disable)
 * [enable](#enable)
 * [generateMenuTable](#generateMenuTable)
 * [init](#init)
 * [updateMenubarIcon](#updateMenubarIcon)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [displayMenubarAsIcon](#displayMenubarAsIcon)

## API Documentation

### Variables


### [rootSection](#rootSection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.rootSection() -> section`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A new Root Section                                                                     |

---

### [titleSuffix](#titleSuffix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.titleSuffix() -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Title Suffix's                                                                     |

---
### Functions


### [addSection](#addSection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.addSection(priority) -> section`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new menu section, which can have items and sub-menus added to it.                                                                     |
| **Parameters**                              | <ul><li>priority - The priority order of menu items created in the section relative to other sections.</li></ul> |
| **Returns**                                 | <ul><li>section - The section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addTitleSuffix](#addTitleSuffix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.addTitleSuffix(fnTitleSuffix)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Allows you to add a custom Suffix to the Menubar Title                                                                     |
| **Parameters**                              | <ul><li>fnTitleSuffix - A function that returns a single string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.disable(priority) -> menubaritem`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes the menu from the system menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.enable(priority) -> menubaritem`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the previously removed menu back to the system menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the menubaritem</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [generateMenuTable](#generateMenuTable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.generateMenuTable()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the Menu Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Menu Table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateMenubarIcon](#updateMenubarIcon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.updateMenubarIcon(priority) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Menubar Icon                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [displayMenubarAsIcon](#displayMenubarAsIcon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.displayMenubarAsIcon <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If `true`, the menubar item will be the app icon. If not, it will be the app name.                                                                     |

---
