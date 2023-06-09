# plugins.core.shortcuts.prefs

Shortcuts Preferences Panel

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_SHORTCUTS](#default_shortcuts)
* Functions - API calls offered directly by the extension
 * [getGroupEditor](#getgroupeditor)
 * [init](#init)
 * [setGroupEditor](#setgroupeditor)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [lastGroup](#lastgroup)

## API Documentation

### Constants


### [DEFAULT_SHORTCUTS](#default_shortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.DEFAULT_SHORTCUTS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Shortcuts File Name                                                                     |

---
### Functions


### [getGroupEditor](#getgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.getGroupEditor(groupId) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li></ul> |
| **Returns**                                 | <ul><li>Group Editor</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.init(deps, env) -> module`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the Module.                                                                     |
| **Parameters**                              | <ul><li>deps - Dependancies Table</li><li>env - Environment Table</li></ul> |
| **Returns**                                 | <ul><li>The Module</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGroupEditor](#setgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.setGroupEditor(groupId, editorFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li><li>editorFn - Editor Function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [lastGroup](#lastgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.lastGroup <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |

---
