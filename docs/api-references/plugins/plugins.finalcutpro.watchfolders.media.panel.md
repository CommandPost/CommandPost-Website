# plugins.finalcutpro.watchfolders.media.panel

Watch Folder Media Panel.

---

## API Overview
**Variables** - _Configurable values_
 * [watchFolderTableID](#watchfoldertableid)

**Functions** - _API calls offered directly by the extension_
 * [addWatchFolder](#addwatchfolder)
 * [controllerCallback](#controllercallback)
 * [generateTable](#generatetable)
 * [init](#init)
 * [refreshTable](#refreshtable)
 * [styleSheet](#stylesheet)


---

## API Documentation

#### Variables


### [watchFolderTableID](#watchfoldertableid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.watchFolderTableID -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Watch Folder Table ID                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L28){target="_blank"} |

---

#### Functions


### [addWatchFolder](#addwatchfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.addWatchFolder() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens the "Add Watch Folder" Dialog.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 343](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L343){target="_blank"} |

---


### [controllerCallback](#controllercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.controllerCallback(id, params) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Callback Controller                                                                     |
| **Parameters**                              | <ul><li>id - ID as string</li><li>params - table of Parameters</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L107){target="_blank"} |

---


### [generateTable](#generatetable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.generateTable() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generate HTML Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns a HTML table as a string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 137](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L137){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.init(mediaFolderManager, panelManager) -> self`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the module.                                                                     |
| **Parameters**                              | <ul><li>mediaFolderManager - Media Folder Manager</li><li>panelManager - Panel Manager</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L33){target="_blank"} |

---


### [refreshTable](#refreshtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.refreshTable() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the Final Cut Pro Watch Folder Panel via JavaScript Injection                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 219](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L219){target="_blank"} |

---


### [styleSheet](#stylesheet)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.watchfolders.media.panel.styleSheet() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates Style Sheet                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns Style Sheet as a string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finalcutpro/watchfolders/media/panel.lua line 245](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/watchfolders/media/panel.lua#L245){target="_blank"} |

---

