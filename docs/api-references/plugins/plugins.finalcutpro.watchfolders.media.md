# plugins.finalcutpro.watchfolders.media

Final Cut Pro Media Watch Folder Plugin.

## Submodules
 * [plugins.finalcutpro.watchfolders.media.MediaFolder](plugins.finalcutpro.watchfolders.media.MediaFolder.md)
 * [plugins.finalcutpro.watchfolders.media.panel](plugins.finalcutpro.watchfolders.media.panel.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [SECONDS_UNTIL_DELETE](#SECONDS_UNTIL_DELETE)
* Variables - Configurable values
 * [automaticallyImport](#automaticallyImport)
 * [deleteAfterImport](#deleteAfterImport)
 * [insertIntoTimeline](#insertIntoTimeline)
* Functions - API calls offered directly by the extension
 * [addMediaFolder](#addMediaFolder)
 * [hasMediaFolder](#hasMediaFolder)
 * [init](#init)
 * [loadMediaFolders](#loadMediaFolders)
 * [mediaFolders](#mediaFolders)
 * [removeMediaFolder](#removeMediaFolder)
 * [saveMediaFolders](#saveMediaFolders)

## API Documentation

### Constants

| [SECONDS_UNTIL_DELETE](#SECONDS_UNTIL_DELETE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.SECONDS_UNTIL_DELETE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Seconds until a file is deleted.                                                                     |

### Variables

| [automaticallyImport](#automaticallyImport)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.automaticallyImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not new generated voice file are automatically added to the timeline or not.                                                                     |

| [deleteAfterImport](#deleteAfterImport)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.deleteAfterImport <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not you want to delete file after they've been imported.                                                                     |

| [insertIntoTimeline](#insertIntoTimeline)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.insertIntoTimeline <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Boolean that sets whether or not the files are automatically added to the timeline or not.                                                                     |

### Functions

| [addMediaFolder](#addMediaFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.addMediaFolder(path, videoTag, audioTag, imageTag) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a media folder.                                                                     |
| **Parameters**                              | <ul><li>path - The path of the folder to remove.</li><li>videoTag - An optional video tag as a string.</li><li>audioTag - An optional audio tag as a string.</li><li>imageTag - An optional image tag as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasMediaFolder](#hasMediaFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.hasMediaFolder(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a path has a media folder already saved.                                                                     |
| **Parameters**                              | <ul><li>path - The path to check.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [init](#init)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.init(deps, env) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>deps - The dependencies environment</li><li>env - The plugin environment</li></ul> |
| **Returns**                                 | <ul><li>Table of the module.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadMediaFolders](#loadMediaFolders)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.loadMediaFolders() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads the MediaFolder list from storage. Any existing MediaFolder instances will be destroyed before loading.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [mediaFolders](#mediaFolders)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.mediaFolders() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a table of all the media folders.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of all the media folders.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [removeMediaFolder](#removeMediaFolder)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.removeMediaFolder(path) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes a media folder.                                                                     |
| **Parameters**                              | <ul><li>path - The path of the folder to remove.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveMediaFolders](#saveMediaFolders)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.saveMediaFolders()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the current state of the media folders, including notifications, etc.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

