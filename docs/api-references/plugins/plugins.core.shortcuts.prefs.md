# plugins.core.shortcuts.prefs

Shortcuts Preferences Panel

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_SHORTCUTS](#default_shortcuts)

**Functions** - _API calls offered directly by the extension_
 * [getGroupEditor](#getgroupeditor)
 * [init](#init)
 * [setGroupEditor](#setgroupeditor)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [lastGroup](#lastgroup)


---

## API Documentation

#### Constants


### [DEFAULT_SHORTCUTS](#default_shortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.DEFAULT_SHORTCUTS -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Shortcuts File Name                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/shortcuts/prefs/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/prefs/init.lua#L33) |

---

#### Functions


### [getGroupEditor](#getgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.getGroupEditor(groupId) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li></ul> |
| **Returns**                                 | <ul><li>Group Editor</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/shortcuts/prefs/init.lua line 640](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/prefs/init.lua#L640) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.init(deps, env) -> module`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the Module.                                                                     |
| **Parameters**                              | <ul><li>deps - Dependancies Table</li><li>env - Environment Table</li></ul> |
| **Returns**                                 | <ul><li>The Module</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/shortcuts/prefs/init.lua line 571](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/prefs/init.lua#L571) |

---


### [setGroupEditor](#setgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.setGroupEditor(groupId, editorFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li><li>editorFn - Editor Function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/shortcuts/prefs/init.lua line 623](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/prefs/init.lua#L623) |

---

#### Fields


### [lastGroup](#lastgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.shortcuts.prefs.lastGroup <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/shortcuts/prefs/init.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/shortcuts/prefs/init.lua#L38) |

---

