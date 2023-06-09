# plugins.finalcutpro.text2speech

Text to Speech Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [copyToMediaFolder](#copytomediafolder)

**Variables** - _Configurable values_
 * [addCaption](#addcaption)
 * [addCustomKeyword](#addcustomkeyword)
 * [addKeywordForVoiceName](#addkeywordforvoicename)
 * [addTextToNotesFieldAfterImport](#addtexttonotesfieldafterimport)
 * [assignClipAudioRoleToVoiceName](#assignclipaudioroletovoicename)
 * [currentIncrementalNumber](#currentincrementalnumber)
 * [customPrefix](#customprefix)
 * [deleteFileAfterImport](#deletefileafterimport)
 * [enableCustomPrefix](#enablecustomprefix)
 * [includeTextInFilename](#includetextinfilename)
 * [insertIntoTimeline](#insertintotimeline)
 * [path](#path)
 * [recentText](#recenttext)
 * [replaceSpaceWithUnderscore](#replacespacewithunderscore)
 * [tag](#tag)
 * [useUnderscore](#useunderscore)
 * [voice](#voice)

**Functions** - _API calls offered directly by the extension_
 * [chooseFolder](#choosefolder)
 * [insertFromPasteboard](#insertfrompasteboard)
 * [show](#show)


---

## API Documentation

#### Constants


### [copyToMediaFolder](#copytomediafolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.copyToMediaFolder <cp.prop: boolean; live>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Copy to Media Folder Preferences Key.                                                                     |
| **Notes**                                   | - None |

---

#### Variables


### [addCaption](#addcaption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCaption`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |
| **Notes**                                   | - None |

---


### [addCustomKeyword](#addcustomkeyword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCustomKeyword`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not to add a custom keyword.                                                                     |
| **Notes**                                   | - None |

---


### [addKeywordForVoiceName](#addkeywordforvoicename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addKeywordForVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a tag should be added for the voice.                                                                     |
| **Notes**                                   | - None |

---


### [addTextToNotesFieldAfterImport](#addtexttonotesfieldafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addTextToNotesFieldAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |
| **Notes**                                   | - None |

---


### [assignClipAudioRoleToVoiceName](#assignclipaudioroletovoicename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.assignClipAudioRoleToVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Assign Clip Audio Role to Voice Name                                                                     |
| **Notes**                                   | - None |

---


### [currentIncrementalNumber](#currentincrementalnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.currentIncrementalNumber`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Current Incremental Number as number                                                                     |
| **Notes**                                   | - None |

---


### [customPrefix](#customprefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.customPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | String which contains the custom prefix.                                                                     |
| **Notes**                                   | - None |

---


### [deleteFileAfterImport](#deletefileafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.deleteFileAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Delete File After Import                                                                     |
| **Notes**                                   | - None |

---


### [enableCustomPrefix](#enablecustomprefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.enableCustomPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a custom prefix for the generated filename is enabled.                                                                     |
| **Notes**                                   | - None |

---


### [includeTextInFilename](#includetextinfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.includeTextInFilename`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Includes the entered text in the filename                                                                     |
| **Notes**                                   | - None |

---


### [insertIntoTimeline](#insertintotimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertIntoTimeline`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |
| **Notes**                                   | - None |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.path`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Path for generated files.                                                                     |
| **Notes**                                   | - None |

---


### [recentText](#recenttext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.recentText`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of recent items in Text to Speech Search.                                                                     |
| **Notes**                                   | - None |

---


### [replaceSpaceWithUnderscore](#replacespacewithunderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.replaceSpaceWithUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Replace Space with Underscore                                                                     |
| **Notes**                                   | - None |

---


### [tag](#tag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.tag`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Tag that will be added to generated voice overs.                                                                     |
| **Notes**                                   | - None |

---


### [useUnderscore](#useunderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.useUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If `true` then an underscore will be used in the Custom Prefix filename otherwise a dash will be used.                                                                     |
| **Notes**                                   | - None |

---


### [voice](#voice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.voice`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Voice.                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [chooseFolder](#choosefolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.chooseFolder() -> string or false`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prompts the user to choose a folder for the Text to Speech Tool.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string of the selected path or `false` if cancelled.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [insertFromPasteboard](#insertfrompasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertFromPasteboard() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inserts Text to Speech by reading the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Text to Speech Chooser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

