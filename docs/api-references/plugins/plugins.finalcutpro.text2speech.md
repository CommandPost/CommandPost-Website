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
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L52) |

---

#### Variables


### [addCaption](#addcaption)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCaption`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L82) |

---


### [addCustomKeyword](#addcustomkeyword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addCustomKeyword`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not to add a custom keyword.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 137](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L137) |

---


### [addKeywordForVoiceName](#addkeywordforvoicename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addKeywordForVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a tag should be added for the voice.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L132) |

---


### [addTextToNotesFieldAfterImport](#addtexttonotesfieldafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.addTextToNotesFieldAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Option to Add Text to Notes Field After Importing                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L77) |

---


### [assignClipAudioRoleToVoiceName](#assignclipaudioroletovoicename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.assignClipAudioRoleToVoiceName`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Assign Clip Audio Role to Voice Name                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 127](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L127) |

---


### [currentIncrementalNumber](#currentincrementalnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.currentIncrementalNumber`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Current Incremental Number as number                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L62) |

---


### [customPrefix](#customprefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.customPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | String which contains the custom prefix.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L117) |

---


### [deleteFileAfterImport](#deletefileafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.deleteFileAfterImport`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Delete File After Import                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 87](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L87) |

---


### [enableCustomPrefix](#enablecustomprefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.enableCustomPrefix`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not a custom prefix for the generated filename is enabled.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 112](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L112) |

---


### [includeTextInFilename](#includetextinfilename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.includeTextInFilename`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Includes the entered text in the filename                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L67) |

---


### [insertIntoTimeline](#insertintotimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertIntoTimeline`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L107) |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.path`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Path for generated files.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 92](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L92) |

---


### [recentText](#recenttext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.recentText`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of recent items in Text to Speech Search.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L57) |

---


### [replaceSpaceWithUnderscore](#replacespacewithunderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.replaceSpaceWithUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Replace Space with Underscore                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L72) |

---


### [tag](#tag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.tag`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Tag that will be added to generated voice overs.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L102) |

---


### [useUnderscore](#useunderscore)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.useUnderscore`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | If `true` then an underscore will be used in the Custom Prefix filename otherwise a dash will be used.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L122) |

---


### [voice](#voice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.voice`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Text to Speech Voice.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L97) |

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
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 142](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L142) |

---


### [insertFromPasteboard](#insertfrompasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.insertFromPasteboard() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inserts Text to Speech by reading the Pasteboard.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 1121](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L1121) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.text2speech.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Text to Speech Chooser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/text2speech/init.lua line 1063](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/text2speech/init.lua#L1063) |

---

