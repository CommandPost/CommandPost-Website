# plugins.core.preferences.general

General Preferences Panel.

---

## API Overview
**Variables** - _Configurable values_
 * [dragAndDropFileActions](#draganddropfileactions)
 * [dragAndDropTextActions](#draganddroptextactions)
 * [openDebugConsoleOnDockClick](#opendebugconsoleondockclick)

**Functions** - _API calls offered directly by the extension_
 * [registerDragAndDropFileAction](#registerdraganddropfileaction)
 * [registerDragAndDropTextAction](#registerdraganddroptextaction)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [autoLaunch](#autolaunch)
 * [dockIcon](#dockicon)
 * [dragAndDropFileAction](#draganddropfileaction)
 * [dragAndDropTextAction](#draganddroptextaction)


---

## API Documentation

### Variables


### [dragAndDropFileActions](#draganddropfileactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop File Actions.                                                                     |

---

### [dragAndDropTextActions](#draganddroptextactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop Text Actions.                                                                     |

---

### [openDebugConsoleOnDockClick](#opendebugconsoleondockclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.openDebugConsoleOnDockClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Open Error Log on Dock Icon Click.                                                                     |

---
### Functions


### [registerDragAndDropFileAction](#registerdraganddropfileaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropFileAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop File Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [registerDragAndDropTextAction](#registerdraganddroptextaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropTextAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop Text Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [autoLaunch](#autolaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.autoLaunch <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls if CommandPost will automatically upload crash data to the developer.                                                                     |

---

### [dockIcon](#dockicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dockIcon <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls whether or not CommandPost should show a dock icon.                                                                     |

---

### [dragAndDropFileAction](#draganddropfileaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop File Action is enabled?                                                                     |

---

### [dragAndDropTextAction](#draganddroptextaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop Text Action is enabled?                                                                     |

---
