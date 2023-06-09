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

#### Variables


### [defaultIconPath](#defaulticonpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.defaultIconPath -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Path where built-in icons are stored                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L32){target="_blank"} |

---


### [maxItems](#maxitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.maxItems -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The maximum number of Touch Bar items per group.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L52){target="_blank"} |

---


### [supportedExtensions](#supportedextensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.supportedExtensions -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of supported extensions for Touch Bar Icons.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L27){target="_blank"} |

---

#### Functions


### [getGroupEditor](#getgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.getGroupEditor(groupId) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li></ul> |
| **Returns**                                 | <ul><li>Group Editor</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 376](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L376){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.init(deps, env) -> module`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialise the Module.                                                                     |
| **Parameters**                              | <ul><li>deps - Dependancies Table</li><li>env - Environment Table</li></ul> |
| **Returns**                                 | <ul><li>The Module</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 566](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L566){target="_blank"} |

---


### [setGroupEditor](#setgroupeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.setGroupEditor(groupId, editorFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Group Editor                                                                     |
| **Parameters**                              | <ul><li>groupId - Group ID</li><li>editorFn - Editor Function</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 359](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L359){target="_blank"} |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Touch Bar Support.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L37){target="_blank"} |

---


### [lastGroup](#lastgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.lastGroup <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L42){target="_blank"} |

---


### [scrollBarPosition](#scrollbarposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.prefs.scrollBarPosition <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last group used in the Preferences Drop Down.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/touchbar/prefs/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/touchbar/prefs/init.lua#L47){target="_blank"} |

---

