# cp.apple.finalcutpro.prefs.ImportPanel

Import Panel Module.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ImportPanel](#importpanel)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [analyzeAudioProblems](#analyzeaudioproblems)
 * [analyzeBalanceColor](#analyzebalancecolor)
 * [assignAudioRole](#assignaudiorole)
 * [copyToLibraryStorageLocation](#copytolibrarystoragelocation)
 * [createOptimizedMedia](#createoptimizedmedia)
 * [createProxyMedia](#createproxymedia)
 * [findPeople](#findpeople)
 * [findPeopleConsolidatedResults](#findpeopleconsolidatedresults)
 * [findPeopleSmartCollections](#findpeoplesmartcollections)
 * [iXMLRoles](#ixmlroles)
 * [keywordsFromFinderTags](#keywordsfromfindertags)
 * [keywordsFromFolders](#keywordsfromfolders)
 * [leaveFilesInPlace](#leavefilesinplace)
 * [removeSilentChannels](#removesilentchannels)
 * [separateMonoGroupStereoAudio](#separatemonogroupstereoaudio)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [toggleMediaLocation](#togglemedialocation)


---

## API Documentation

#### Constructors


### [ImportPanel](#importpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel(preferencesDialog) -> ImportPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ImportPanel` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `ImportPanel` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L26) |

---

#### Fields


### [analyzeAudioProblems](#analyzeaudioproblems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.analyzeAudioProblems <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Analyze and fix audio problems" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 194](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L194) |

---


### [analyzeBalanceColor](#analyzebalancecolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.analyzeBalanceColor <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Analyze video for balance color" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L158) |

---


### [assignAudioRole](#assignaudiorole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.assignAudioRole <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Assign Role" `PopUpButton`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L122) |

---


### [copyToLibraryStorageLocation](#copytolibrarystoragelocation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.copyToLibraryStorageLocation <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Copy to library storage location" `RadioButton`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L39) |

---


### [createOptimizedMedia](#createoptimizedmedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.createOptimizedMedia <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create optimized media" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L140) |

---


### [createProxyMedia](#createproxymedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.createProxyMedia <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create proxy media" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 149](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L149) |

---


### [findPeople](#findpeople)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeople <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Find people" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 167](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L167) |

---


### [findPeopleConsolidatedResults](#findpeopleconsolidatedresults)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeopleConsolidatedResults <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Consolidate find people results" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 176](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L176) |

---


### [findPeopleSmartCollections](#findpeoplesmartcollections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeopleSmartCollections <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create Smart Collections after analysis" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 185](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L185) |

---


### [iXMLRoles](#ixmlroles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.iXMLRoles <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Assign iXML track names if available" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L131) |

---


### [keywordsFromFinderTags](#keywordsfromfindertags)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.keywordsFromFinderTags <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keywords from Finder tags" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 104](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L104) |

---


### [keywordsFromFolders](#keywordsfromfolders)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.keywordsFromFolders <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keywords from folders" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 113](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L113) |

---


### [leaveFilesInPlace](#leavefilesinplace)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.leaveFilesInPlace <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Leave files in place" `RadioButton`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L50) |

---


### [removeSilentChannels](#removesilentchannels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.removeSilentChannels <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Remove silent channels" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 212](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L212) |

---


### [separateMonoGroupStereoAudio](#separatemonogroupstereoaudio)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.separateMonoGroupStereoAudio <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Separate mono and group stereo audio" `CheckBox`.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 203](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L203) |

---

#### Methods


### [toggleMediaLocation](#togglemedialocation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel:toggleMediaLocation() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that toggles between the "Copy to library storage location" and "Leave files in place" options.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/ImportPanel.lua#L82) |

---

