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

#### Variables


### [dragAndDropFileActions](#draganddropfileactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop File Actions.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L79) |

---


### [dragAndDropTextActions](#draganddroptextactions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextActions -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of registered Drag & Drop Text Actions.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L56) |

---


### [openDebugConsoleOnDockClick](#opendebugconsoleondockclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.openDebugConsoleOnDockClick <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Open Error Log on Dock Icon Click.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L51) |

---

#### Functions


### [registerDragAndDropFileAction](#registerdraganddropfileaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropFileAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop File Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L84) |

---


### [registerDragAndDropTextAction](#registerdraganddroptextaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.registerDragAndDropTextAction(id, label, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Drag & Drop Text Action.                                                                     |
| **Parameters**                              | <ul><li>id - A unique identifier as a string</li><li>label - The label that should be display in the user interface</li><li>fn - A callback function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L61) |

---

#### Fields


### [autoLaunch](#autolaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.autoLaunch <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls if CommandPost will automatically upload crash data to the developer.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L26) |

---


### [dockIcon](#dockicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dockIcon <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Controls whether or not CommandPost should show a dock icon.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L34) |

---


### [dragAndDropFileAction](#draganddropfileaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropFileAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop File Action is enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L41) |

---


### [dragAndDropTextAction](#draganddroptextaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.general.dragAndDropTextAction <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Which Drag & Drop Text Action is enabled?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/general.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/general.lua#L46) |

---

