# plugins.core.accessibility

Accessibility Plugin.

## Submodules
 * [plugins.core.accessibility.screenrecording](plugins.core.accessibility.screenrecording.md)
 * [plugins.core.accessibility.tools](plugins.core.accessibility.tools.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [enabled](#enabled)
* Variables - Configurable values
 * [shouldWeTryCloseSystemPreferences](#shouldwetryclosesystempreferences)
 * [systemPreferencesAlreadyOpen](#systempreferencesalreadyopen)
* Functions - API calls offered directly by the extension
 * [completeSetupPanel](#completesetuppanel)
 * [init](#init)
 * [showSetupPanel](#showsetuppanel)

## API Documentation

### Constants


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.enabled <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Is `true` if Accessibility permissions have been enabled for CommandPost.                                                                     |

---
### Variables


### [shouldWeTryCloseSystemPreferences](#shouldwetryclosesystempreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.shouldWeTryCloseSystemPreferences -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Should we try and close system preferences?                                                                     |

---

### [systemPreferencesAlreadyOpen](#systempreferencesalreadyopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.systemPreferencesAlreadyOpen -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Was System Preferences already open?                                                                     |

---
### Functions


### [completeSetupPanel](#completesetuppanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.completeSetupPanel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Called when the setup panel for accessibility was shown and is ready to complete.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.init(setup) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>setup - Dependancies setup</li></ul> |
| **Returns**                                 | <ul><li>The module as a table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSetupPanel](#showsetuppanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.accessibility.showSetupPanel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Called when the Setup Panel should be shown to prompt the user about enabling Accessbility.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
