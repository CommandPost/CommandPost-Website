# cp.adobe.aftereffects

Adobe After Effects Extension

## Submodules
 * [cp.adobe.aftereffects.app](cp.adobe.aftereffects.app.md)
 * [cp.adobe.aftereffects.shortcuts](cp.adobe.aftereffects.shortcuts.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [preferences](#preferences)
* Functions - API calls offered directly by the extension
 * [allowScriptsToWriteFilesAndAccessNetwork](#allowScriptsToWriteFilesAndAccessNetwork)
 * [preferencesFilePath](#preferencesFilePath)
 * [preferencesPath](#preferencesPath)
 * [refreshPreferences](#refreshPreferences)
 * [shortcutsPreferences](#shortcutsPreferences)
 * [shortcutsPreferencesPath](#shortcutsPreferencesPath)

## API Documentation

### Constants

| [preferences](#preferences)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects.preferences <cp.app.prefs>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The `cp.app.prefs` for After Effects.                                                                     |

### Functions

| [allowScriptsToWriteFilesAndAccessNetwork](#allowScriptsToWriteFilesAndAccessNetwork)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:allowScriptsToWriteFilesAndAccessNetwork() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is "Allow Scripts to Write Files and Access Network" enabled in After Effects Preferences?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [preferencesFilePath](#preferencesFilePath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:preferencesFilePath() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The path to the main Preferences file.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [preferencesPath](#preferencesPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:preferencesPath() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The path to After Effects Preferences folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string or `nil` if no path can be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [refreshPreferences](#refreshPreferences)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:refreshPreferences() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | If After Effects is running, this forces the preferences file to be saved to disk.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shortcutsPreferences](#shortcutsPreferences)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:shortcutsPreferences() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of all the active After Effects keyboard shortcuts.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shortcutsPreferencesPath](#shortcutsPreferencesPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.adobe.aftereffects:shortcutsPreferencesPath() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the active shortcut key preferences file path.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

