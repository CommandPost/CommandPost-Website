# cp.adobe.aftereffects

Adobe After Effects Extension

---

## Submodules
 * [cp.adobe.aftereffects.app](cp.adobe.aftereffects.app.md)
 * [cp.adobe.aftereffects.shortcuts](cp.adobe.aftereffects.shortcuts.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [preferences](#preferences)

**Functions** - _API calls offered directly by the extension_
 * [allowScriptsToWriteFilesAndAccessNetwork](#allowscriptstowritefilesandaccessnetwork)
 * [preferencesFilePath](#preferencesfilepath)
 * [preferencesPath](#preferencespath)
 * [refreshPreferences](#refreshpreferences)
 * [shortcutsPreferences](#shortcutspreferences)
 * [shortcutsPreferencesPath](#shortcutspreferencespath)


---

## API Documentation

#### Constants


### [preferences](#preferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects.preferences <cp.app.prefs>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The `cp.app.prefs` for After Effects.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 35](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L35) |

---

#### Functions


### [allowScriptsToWriteFilesAndAccessNetwork](#allowscriptstowritefilesandaccessnetwork)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:allowScriptsToWriteFilesAndAccessNetwork() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is "Allow Scripts to Write Files and Access Network" enabled in After Effects Preferences?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L82) |

---


### [preferencesFilePath](#preferencesfilepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:preferencesFilePath() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The path to the main Preferences file.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L62) |

---


### [preferencesPath](#preferencespath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:preferencesPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The path to After Effects Preferences folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string or `nil` if no path can be found.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L43) |

---


### [refreshPreferences](#refreshpreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:refreshPreferences() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | If After Effects is running, this forces the preferences file to be saved to disk.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L97) |

---


### [shortcutsPreferences](#shortcutspreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:shortcutsPreferences() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of all the active After Effects keyboard shortcuts.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 201](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L201) |

---


### [shortcutsPreferencesPath](#shortcutspreferencespath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:shortcutsPreferencesPath() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the active shortcut key preferences file path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/adobe/aftereffects/init.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/adobe/aftereffects/init.lua#L116) |

---

