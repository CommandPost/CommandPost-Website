# plugins.finalcutpro.watchfolders.media.MediaFolder

Final Cut Pro Media Watch Folder Plugin.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [freeze](#freeze)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [thaw](#thaw)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addIncoming](#addincoming)
 * [addReady](#addready)
 * [checkNotifications](#checknotifications)
 * [destroy](#destroy)
 * [doDeleteImportedFiles](#dodeleteimportedfiles)
 * [doImportNext](#doimportnext)
 * [doRestoreOriginalPasteboard](#dorestoreoriginalpasteboard)
 * [doRevealInFinder](#dorevealinfinder)
 * [doTagFiles](#dotagfiles)
 * [handleImport](#handleimport)
 * [importAll](#importall)
 * [importFiles](#importfiles)
 * [importFirst](#importfirst)
 * [importTag](#importtag)
 * [init](#init)
 * [processFiles](#processfiles)
 * [removeFile](#removefile)
 * [save](#save)
 * [skipAll](#skipall)
 * [skipOne](#skipone)
 * [updateIncomingNotification](#updateincomingnotification)
 * [updateReadyNotification](#updatereadynotification)


---

## API Documentation

#### Functions


### [freeze](#freeze)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder.freeze(mediaFolder) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table with the details of the `MediaFolder`, ready to be stored. It can be brought back via the `MediaFolder.thaw(...)` function.                                                                     |
| **Parameters**                              | <ul><li>mediaFolder   - The `MediaFolder` to freeze.</li></ul> |
| **Returns**                                 | <ul><li>A table of details.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L85) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder.new(mod, path, videoTag, audioTag, imageTag) -> MediaFolder`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Media Folder.                                                                     |
| **Parameters**                              | <ul><li>mod - The module.</li><li>path - Path to the Media Folder.</li><li>videoTag - Video Tag as String</li><li>audioTag - Audio Tag as String</li><li>imageTag - Image Tag as String</li></ul> |
| **Returns**                                 | <ul><li>A new MediaFolder object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L39) |

---


### [thaw](#thaw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder.thaw(details) -> MediaFolder`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new MediaFolder based on the details provided. The details have typically come from a call to `MediaFolder.freeze(...)`                                                                     |
| **Parameters**                              | <ul><li>details - The table with details of the media folder when it was frozen.</li></ul> |
| **Returns**                                 | <ul><li>A new MediaFolder instance with the specified details.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L67) |

---

#### Methods


### [addIncoming](#addincoming)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:addIncoming(file) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the file to the 'incoming' list and updates the notification.                                                                     |
| **Parameters**                              | <ul><li>file - The file to add.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 301](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L301) |

---


### [addReady](#addready)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:addReady(file) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the file to the 'ready' list and updates the notifications.                                                                     |
| **Parameters**                              | <ul><li>file      - The file to add.</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 316](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L316) |

---


### [checkNotifications](#checknotifications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:checkNotifications() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks Notifications.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L234) |

---


### [destroy](#destroy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:destroy()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Destroys the MediaFolder. It should not be used after this is called.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 758](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L758) |

---


### [doDeleteImportedFiles](#dodeleteimportedfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:doDeleteImportedFiles(context) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if we are deleting after import, and if so schedules them to be deleted.                                                                     |
| **Parameters**                              | <ul><li>files - a table of file paths.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 590](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L590) |

---


### [doImportNext](#doimportnext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:doImportNext() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Imports the next file in the Media Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 622](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L622) |

---


### [doRestoreOriginalPasteboard](#dorestoreoriginalpasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:doRestoreOriginalPasteboard(context) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Restore original Pasteboard contents after 2 seconds.                                                                     |
| **Parameters**                              | <ul><li>context - The context.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 567](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L567) |

---


### [doRevealInFinder](#dorevealinfinder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:doRevealInFinder() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will reveal the MediaFolder path in the Finder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Statement</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 790](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L790) |

---


### [doTagFiles](#dotagfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:doTagFiles(files) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tags a table of files.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 145](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L145) |

---


### [handleImport](#handleimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:handleImport(notification) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Handles the importing of a file.                                                                     |
| **Parameters**                              | <ul><li>notification - The notification object.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 436](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L436) |

---


### [importAll](#importall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:importAll() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Begins importing all `ready` files, removing them from the `ready` queue.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 483](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L483) |

---


### [importFiles](#importfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:importFiles(files) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Requests for the files to be imported.                                                                     |
| **Parameters**                              | <ul><li>files - a table/list of files to be imported.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 551](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L551) |

---


### [importFirst](#importfirst)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:importFirst() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Begins importing the first `ready` file, removing it from the `ready` queue.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 501](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L501) |

---


### [importTag](#importtag)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:importTag() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the import tag.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The import tag as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 368](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L368) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:init() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Initialises the folder, getting any watchers, notifications, etc. running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L105) |

---


### [processFiles](#processfiles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:processFiles(files, fileFlags) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Process files.                                                                     |
| **Parameters**                              | <ul><li>files - A table of files to process.</li><li>fileFlags - A table of file flags.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 251](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L251) |

---


### [removeFile](#removefile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:removeFile(file) -> MediaFolder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the file from any queues it might be in, updating relevant notifications.                                                                     |
| **Parameters**                              | <ul><li>file  - the full path to the file.</li></ul> |
| **Returns**                                 | <ul><li>The MediaFolder instance</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 279](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L279) |

---


### [save](#save)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:save()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensures the MediaFolder is saved.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 745](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L745) |

---


### [skipAll](#skipall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:skipAll() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Skip all files in the Media Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 519](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L519) |

---


### [skipOne](#skipone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:skipOne() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Skip one file in the Media Folder.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 534](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L534) |

---


### [updateIncomingNotification](#updateincomingnotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:updateIncomingNotification() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the 'incoming' notification based on the current set of files in the `incoming` queue.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 336](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L336) |

---


### [updateReadyNotification](#updatereadynotification)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.MediaFolder:updateReadyNotification() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the 'ready' notification based on the current set of files in the `ready` queue.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua line 381](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/MediaFolder.lua#L381) |

---

