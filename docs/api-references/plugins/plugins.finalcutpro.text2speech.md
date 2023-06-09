# plugins.finalcutpro.text2speech

Text to Speech Plugin.

## API Overview
* Constants - Useful values which cannot be changed
 * [copyToMediaFolder](#copyToMediaFolder)
* Variables - Configurable values
 * [addCaption](#addCaption)
 * [addCustomKeyword](#addCustomKeyword)
 * [addKeywordForVoiceName](#addKeywordForVoiceName)
 * [addTextToNotesFieldAfterImport](#addTextToNotesFieldAfterImport)
 * [assignClipAudioRoleToVoiceName](#assignClipAudioRoleToVoiceName)
 * [currentIncrementalNumber](#currentIncrementalNumber)
 * [customPrefix](#customPrefix)
 * [deleteFileAfterImport](#deleteFileAfterImport)
 * [enableCustomPrefix](#enableCustomPrefix)
 * [includeTextInFilename](#includeTextInFilename)
 * [insertIntoTimeline](#insertIntoTimeline)
 * [path](#path)
 * [recentText](#recentText)
 * [replaceSpaceWithUnderscore](#replaceSpaceWithUnderscore)
 * [tag](#tag)
 * [useUnderscore](#useUnderscore)
 * [voice](#voice)
* Functions - API calls offered directly by the extension
 * [chooseFolder](#chooseFolder)
 * [insertFromPasteboard](#insertFromPasteboard)
 * [show](#show)

## API Documentation

### Constants


### [copyToMediaFolder](#copyToMediaFolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.copyToMediaFolder <cp.prop: boolean; live>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Copy to Media Folder Preferences Key.                                                                     |

---
### Variables


### [addCaption](#addCaption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCaption`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |

---

### [addCustomKeyword](#addCustomKeyword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCustomKeyword`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not to add a custom keyword.                                                                     |

---

### [addKeywordForVoiceName](#addKeywordForVoiceName)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addKeywordForVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a tag should be added for the voice.                                                                     |

---

### [addTextToNotesFieldAfterImport](#addTextToNotesFieldAfterImport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addTextToNotesFieldAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |

---

### [assignClipAudioRoleToVoiceName](#assignClipAudioRoleToVoiceName)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.assignClipAudioRoleToVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Assign Clip Audio Role to Voice Name                                                                     |

---

### [currentIncrementalNumber](#currentIncrementalNumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.currentIncrementalNumber`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Current Incremental Number as number                                                                     |

---

### [customPrefix](#customPrefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.customPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | String which contains the custom prefix.                                                                     |

---

### [deleteFileAfterImport](#deleteFileAfterImport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.deleteFileAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Delete File After Import                                                                     |

---

### [enableCustomPrefix](#enableCustomPrefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.enableCustomPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a custom prefix for the generated filename is enabled.                                                                     |

---

### [includeTextInFilename](#includeTextInFilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.includeTextInFilename`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Includes the entered text in the filename                                                                     |

---

### [insertIntoTimeline](#insertIntoTimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertIntoTimeline`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |

---

### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.path`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Path for generated files.                                                                     |

---

### [recentText](#recentText)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.recentText`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of recent items in Text to Speech Search.                                                                     |

---

### [replaceSpaceWithUnderscore](#replaceSpaceWithUnderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.replaceSpaceWithUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Replace Space with Underscore                                                                     |

---

### [tag](#tag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.tag`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Tag that will be added to generated voice overs.                                                                     |

---

### [useUnderscore](#useUnderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.useUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If `true` then an underscore will be used in the Custom Prefix filename otherwise a dash will be used.                                                                     |

---

### [voice](#voice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.voice`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Voice.                                                                     |

---
### Functions


### [chooseFolder](#chooseFolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.chooseFolder() -> string or false`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prompts the user to choose a folder for the Text to Speech Tool.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string of the selected path or `false` if cancelled.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [insertFromPasteboard](#insertFromPasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertFromPasteboard() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inserts Text to Speech by reading the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Text to Speech Chooser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
