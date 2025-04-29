# plugins.core.accessibility

Accessibility Plugin.

---

## Submodules
 * [plugins.core.accessibility.screenrecording](plugins.core.accessibility.screenrecording.md)
 * [plugins.core.accessibility.tools](plugins.core.accessibility.tools.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [enabled](#enabled)

**Variables** - _Configurable values_
 * [shouldWeTryCloseSystemPreferences](#shouldwetryclosesystempreferences)
 * [systemPreferencesAlreadyOpen](#systempreferencesalreadyopen)

**Functions** - _API calls offered directly by the extension_
 * [completeSetupPanel](#completesetuppanel)
 * [init](#init)
 * [showSetupPanel](#showsetuppanel)


---

## API Documentation

#### Constants


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.enabled <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Is `true` if Accessibility permissions have been enabled for CommandPost.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L27) |

---

#### Variables


### [shouldWeTryCloseSystemPreferences](#shouldwetryclosesystempreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.shouldWeTryCloseSystemPreferences -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Should we try and close system preferences?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L17) |

---


### [systemPreferencesAlreadyOpen](#systempreferencesalreadyopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.systemPreferencesAlreadyOpen -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Was System Preferences already open?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L22) |

---

#### Functions


### [completeSetupPanel](#completesetuppanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.completeSetupPanel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Called when the setup panel for accessibility was shown and is ready to complete.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L54) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.init(setup) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>setup - Dependancies setup</li></ul> |
| **Returns**                                 | <ul><li>The module as a table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L85) |

---


### [showSetupPanel](#showsetuppanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.showSetupPanel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Called when the Setup Panel should be shown to prompt the user about enabling Accessbility.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/accessibility/accessibility.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/accessibility/accessibility.lua#L70) |

---

