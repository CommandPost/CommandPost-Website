# plugins.core.touchbar.prefs

Touch Bar Preferences Panel

---

## API Overview
**Variables** - _Configurable values_
 * [defaultIconPath](#defaulticonpath)
 * [maxItems](#maxitems)
 * [supportedExtensions](#supportedextensions)

**Functions** - _API calls offered directly by the extension_
 * [getGroupEditor](#getgroupeditor)
 * [init](#init)
 * [setGroupEditor](#setgroupeditor)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)
 * [lastGroup](#lastgroup)
 * [scrollBarPosition](#scrollbarposition)


---

## API Documentation

### Variables


### [defaultIconPath](#defaulticonpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.defaultIconPath -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Path where built-in icons are stored                                                                     |

---

### [maxItems](#maxitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of Touch Bar items per group.                                                                     |

---

### [supportedExtensions](#supportedextensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.supportedExtensions -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of supported extensions for Touch Bar Icons.                                                                     |

---
### Functions


### [getGroupEditor](#getgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.getGroupEditor(groupId) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li></ul> |
| **Returns**                                 | <ul><li>Group Editor</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.init(deps, env) -> module`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the Module.                                                                     |
| **Parameters**                              | <ul><li>deps - Dependancies Table</li><li>env - Environment Table</li></ul> |
| **Returns**                                 | <ul><li>The Module</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setGroupEditor](#setgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.setGroupEditor(groupId, editorFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li><li>editorFn - Editor Function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Touch Bar Support.                                                                     |

---

### [lastGroup](#lastgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.lastGroup <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |

---

### [scrollBarPosition](#scrollbarposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.scrollBarPosition <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |

---
