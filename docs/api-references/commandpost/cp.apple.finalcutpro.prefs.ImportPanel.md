# cp.apple.finalcutpro.prefs.ImportPanel

Import Panel Module.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [ImportPanel](#ImportPanel)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [analyzeAudioProblems](#analyzeAudioProblems)
 * [analyzeBalanceColor](#analyzeBalanceColor)
 * [assignAudioRole](#assignAudioRole)
 * [copyToLibraryStorageLocation](#copyToLibraryStorageLocation)
 * [createOptimizedMedia](#createOptimizedMedia)
 * [createProxyMedia](#createProxyMedia)
 * [findPeople](#findPeople)
 * [findPeopleConsolidatedResults](#findPeopleConsolidatedResults)
 * [findPeopleSmartCollections](#findPeopleSmartCollections)
 * [iXMLRoles](#iXMLRoles)
 * [keywordsFromFinderTags](#keywordsFromFinderTags)
 * [keywordsFromFolders](#keywordsFromFolders)
 * [leaveFilesInPlace](#leaveFilesInPlace)
 * [removeSilentChannels](#removeSilentChannels)
 * [separateMonoGroupStereoAudio](#separateMonoGroupStereoAudio)
* Methods - API calls which can only be made on an object returned by a constructor
 * [toggleMediaLocation](#toggleMediaLocation)

## API Documentation

### Constructors

| [ImportPanel](#ImportPanel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel(preferencesDialog) -> ImportPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ImportPanel` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `ImportPanel` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [analyzeAudioProblems](#analyzeAudioProblems)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.analyzeAudioProblems <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Analyze and fix audio problems" `CheckBox`.                                                                     |

| [analyzeBalanceColor](#analyzeBalanceColor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.analyzeBalanceColor <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Analyze video for balance color" `CheckBox`.                                                                     |

| [assignAudioRole](#assignAudioRole)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.assignAudioRole <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Assign Role" `PopUpButton`.                                                                     |

| [copyToLibraryStorageLocation](#copyToLibraryStorageLocation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.copyToLibraryStorageLocation <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Copy to library storage location" `RadioButton`.                                                                     |

| [createOptimizedMedia](#createOptimizedMedia)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.createOptimizedMedia <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create optimized media" `CheckBox`.                                                                     |

| [createProxyMedia](#createProxyMedia)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.createProxyMedia <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create proxy media" `CheckBox`.                                                                     |

| [findPeople](#findPeople)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeople <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Find people" `CheckBox`.                                                                     |

| [findPeopleConsolidatedResults](#findPeopleConsolidatedResults)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeopleConsolidatedResults <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Consolidate find people results" `CheckBox`.                                                                     |

| [findPeopleSmartCollections](#findPeopleSmartCollections)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.findPeopleSmartCollections <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Create Smart Collections after analysis" `CheckBox`.                                                                     |

| [iXMLRoles](#iXMLRoles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.iXMLRoles <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Assign iXML track names if available" `CheckBox`.                                                                     |

| [keywordsFromFinderTags](#keywordsFromFinderTags)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.keywordsFromFinderTags <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keywords from Finder tags" `CheckBox`.                                                                     |

| [keywordsFromFolders](#keywordsFromFolders)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.keywordsFromFolders <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keywords from folders" `CheckBox`.                                                                     |

| [leaveFilesInPlace](#leaveFilesInPlace)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.leaveFilesInPlace <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Leave files in place" `RadioButton`.                                                                     |

| [removeSilentChannels](#removeSilentChannels)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.removeSilentChannels <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Remove silent channels" `CheckBox`.                                                                     |

| [separateMonoGroupStereoAudio](#separateMonoGroupStereoAudio)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel.separateMonoGroupStereoAudio <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Separate mono and group stereo audio" `CheckBox`.                                                                     |

### Methods

| [toggleMediaLocation](#toggleMediaLocation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.ImportPanel:toggleMediaLocation() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that toggles between the "Copy to library storage location" and "Leave files in place" options.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

