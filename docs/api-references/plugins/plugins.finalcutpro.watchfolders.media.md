# plugins.finalcutpro.watchfolders.media

Final Cut Pro Media Watch Folder Plugin.

---

## Submodules
 * [plugins.finalcutpro.watchfolders.media.MediaFolder](plugins.finalcutpro.watchfolders.media.MediaFolder.md)
 * [plugins.finalcutpro.watchfolders.media.panel](plugins.finalcutpro.watchfolders.media.panel.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [SECONDS_UNTIL_DELETE](#seconds_until_delete)

**Variables** - _Configurable values_
 * [automaticallyImport](#automaticallyimport)
 * [deleteAfterImport](#deleteafterimport)
 * [insertIntoTimeline](#insertintotimeline)

**Functions** - _API calls offered directly by the extension_
 * [addMediaFolder](#addmediafolder)
 * [hasMediaFolder](#hasmediafolder)
 * [init](#init)
 * [loadMediaFolders](#loadmediafolders)
 * [mediaFolders](#mediafolders)
 * [removeMediaFolder](#removemediafolder)
 * [saveMediaFolders](#savemediafolders)


---

## API Documentation

#### Constants


### [SECONDS_UNTIL_DELETE](#seconds_until_delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.SECONDS_UNTIL_DELETE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Seconds until a file is deleted.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 135](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L135){target="_blank"} |

---

#### Variables


### [automaticallyImport](#automaticallyimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.automaticallyImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L140){target="_blank"} |

---


### [deleteAfterImport](#deleteafterimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.deleteAfterImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not you want to delete file after they've been imported.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 150](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L150){target="_blank"} |

---


### [insertIntoTimeline](#insertintotimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.insertIntoTimeline <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not the files are automatically added to the timeline or not.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 145](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L145){target="_blank"} |

---

#### Functions


### [addMediaFolder](#addmediafolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.addMediaFolder(path, videoTag, audioTag, imageTag) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a media folder.                                                                     |
| **Parameters**                              | <ul><li>path - The path of the folder to remove.</li><li>videoTag - An optional video tag as a string.</li><li>audioTag - An optional audio tag as a string.</li><li>imageTag - An optional image tag as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L27){target="_blank"} |

---


### [hasMediaFolder](#hasmediafolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.hasMediaFolder(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a path has a media folder already saved.                                                                     |
| **Parameters**                              | <ul><li>path - The path to check.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L64){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.init(deps, env) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>deps - The dependencies environment</li><li>env - The plugin environment</li></ul> |
| **Returns**                                 | <ul><li>Table of the module.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L155){target="_blank"} |

---


### [loadMediaFolders](#loadmediafolders)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.loadMediaFolders() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads the MediaFolder list from storage. Any existing MediaFolder instances will be destroyed before loading.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 111](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L111){target="_blank"} |

---


### [mediaFolders](#mediafolders)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.mediaFolders() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of all the media folders.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of all the media folders.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L81){target="_blank"} |

---


### [removeMediaFolder](#removemediafolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.removeMediaFolder(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a media folder.                                                                     |
| **Parameters**                              | <ul><li>path - The path of the folder to remove.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L44){target="_blank"} |

---


### [saveMediaFolders](#savemediafolders)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.saveMediaFolders()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the current state of the media folders, including notifications, etc.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/init.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/init.lua#L94){target="_blank"} |

---

