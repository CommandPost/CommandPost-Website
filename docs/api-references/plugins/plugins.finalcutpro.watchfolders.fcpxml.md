# plugins.finalcutpro.watchfolders.fcpxml

Final Cut Pro FCPXML Watch Folder Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [SECONDS_UNTIL_DELETE](#seconds_until_delete)

**Variables** - _Configurable values_
 * [automaticallyImport](#automaticallyimport)
 * [deleteAfterImport](#deleteafterimport)
 * [disableImport](#disableimport)
 * [filesInTransit](#filesintransit)
 * [notifications](#notifications)
 * [savedNotifications](#savednotifications)
 * [watchFolders](#watchfolders)
 * [watchFolderTableID](#watchfoldertableid)

**Functions** - _API calls offered directly by the extension_
 * [addWatchFolder](#addwatchfolder)
 * [controllerCallback](#controllercallback)
 * [createNotification](#createnotification)
 * [generateTable](#generatetable)
 * [importFile](#importfile)
 * [init](#init)
 * [insertFilesIntoFinalCutPro](#insertfilesintofinalcutpro)
 * [newWatcher](#newwatcher)
 * [refreshTable](#refreshtable)
 * [removeWatcher](#removewatcher)
 * [setupWatchers](#setupwatchers)
 * [styleSheet](#stylesheet)
 * [watchFolderTriggered](#watchfoldertriggered)


---

## API Documentation

#### Constants


### [SECONDS_UNTIL_DELETE](#seconds_until_delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.SECONDS_UNTIL_DELETE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Seconds until a file is deleted.                                                                     |
| **Notes**                                   | - None |

---

#### Variables


### [automaticallyImport](#automaticallyimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.automaticallyImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |
| **Notes**                                   | - None |

---


### [deleteAfterImport](#deleteafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.deleteAfterImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not you want to delete file after they've been imported.                                                                     |
| **Notes**                                   | - None |

---


### [disableImport](#disableimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.disableImport -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | When `true` Notifications will no longer be triggered.                                                                     |
| **Notes**                                   | - None |

---


### [filesInTransit](#filesintransit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.filesInTransit -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Files currently being copied                                                                     |
| **Notes**                                   | - None |

---


### [notifications](#notifications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.notifications -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Notifications                                                                     |
| **Notes**                                   | - None |

---


### [savedNotifications](#savednotifications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.savedNotifications <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of Notifications that are saved between restarts                                                                     |
| **Notes**                                   | - None |

---


### [watchFolders](#watchfolders)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.watchFolders <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of the users watch folders.                                                                     |
| **Notes**                                   | - None |

---


### [watchFolderTableID](#watchfoldertableid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.watchFolderTableID -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Watch Folder Table ID                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [addWatchFolder](#addwatchfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.addWatchFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens the "Add Watch Folder" Dialog.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [controllerCallback](#controllercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.controllerCallback(id, params) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Callback Controller                                                                     |
| **Parameters**                              | <ul><li>id - ID as string</li><li>params - table of Parameters</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [createNotification](#createnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.createNotification(file) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new notification                                                                     |
| **Parameters**                              | <ul><li>file - File name</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [generateTable](#generatetable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.generateTable() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generate HTML Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns a HTML table as a string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [importFile](#importfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.importFile(file, obj) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Imports a file into Final Cut Pro                                                                     |
| **Parameters**                              | <ul><li>file - File name</li><li>tag - The notification tag</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.init(deps, env) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>deps - The dependencies environment</li><li>env - The plugin environment</li></ul> |
| **Returns**                                 | <ul><li>Table of the module.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [insertFilesIntoFinalCutPro](#insertfilesintofinalcutpro)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.insertFilesIntoFinalCutPro(files) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Imports a file into Final Cut Pro                                                                     |
| **Parameters**                              | <ul><li>files - File names in table</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [newWatcher](#newwatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.newWatcher(path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | New Folder Watcher                                                                     |
| **Parameters**                              | <ul><li>path - Path to Watch Folder</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [refreshTable](#refreshtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.refreshTable() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the Final Cut Pro Watch Folder Panel via JavaScript Injection                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [removeWatcher](#removewatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.removeWatcher(path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Remove Folder Watcher                                                                     |
| **Parameters**                              | <ul><li>path - Path to Watch Folder</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [setupWatchers](#setupwatchers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.setupWatchers(path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Setup Folder Watchers                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [styleSheet](#stylesheet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.styleSheet() -> cp.web.html`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates Style Sheet                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns Style Sheet as a string</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [watchFolderTriggered](#watchfoldertriggered)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.fcpxml.watchFolderTriggered(files) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watch Folder Triggered                                                                     |
| **Parameters**                              | <ul><li>files - A table of files</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

