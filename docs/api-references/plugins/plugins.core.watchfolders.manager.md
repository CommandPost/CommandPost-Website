# plugins.core.watchfolders.manager

Manager for the CommandPost Watch Folders Panel.

---

## Submodules
 * [plugins.core.watchfolders.manager.panel](plugins.core.watchfolders.manager.panel.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_TITLE](#default_title)
 * [DEFAULT_WIDTH](#default_width)
 * [DEFAULT_WINDOW_STYLE](#default_window_style)
 * [position](#position)
 * [WEBVIEW_LABEL](#webview_label)

**Functions** - _API calls offered directly by the extension_
 * [addHandler](#addhandler)
 * [addPanel](#addpanel)
 * [getHandler](#gethandler)
 * [getLabel](#getlabel)
 * [hide](#hide)
 * [init](#init)
 * [injectScript](#injectscript)
 * [maxPanelHeight](#maxpanelheight)
 * [selectPanel](#selectpanel)
 * [setPanelRenderer](#setpanelrenderer)
 * [show](#show)


---

## API Documentation

#### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Height of the Watch Folder Window                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L48){target="_blank"} |

---


### [DEFAULT_TITLE](#default_title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.DEFAULT_TITLE -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Title of the Watch Folder Window                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L53){target="_blank"} |

---


### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Width of the Watch Folder Window                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L43){target="_blank"} |

---


### [DEFAULT_WINDOW_STYLE](#default_window_style)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.DEFAULT_WINDOW_STYLE -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Default Window Style                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L38){target="_blank"} |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.position <cp.prop: table>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last frame saved in settings.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 73](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L73){target="_blank"} |

---


### [WEBVIEW_LABEL](#webview_label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.WEBVIEW_LABEL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | WebView Label                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L33){target="_blank"} |

---

#### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.addHandler(id, handlerFn) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a Handler                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li><li>handlerFn - the handler function</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L91){target="_blank"} |

---


### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.addPanel(params) -> plugins.core.watchfolders.manager.panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new panel with the specified `params` to the preferences manager.                                                                     |
| **Parameters**                              | <ul><li>`params` - The parameters table. Details below.</li></ul> |
| **Returns**                                 | <ul><li>The new `panel` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can have the following properties. The `priority` and `id` and properties are **required**.</li><li> ** `priority`      - An integer value specifying the priority of the panel compared to others.</li><li> ** `id`            - A string containing the unique ID of the panel.</li><li> ** `label`         - The human-readable label for the panel icon.</li><li> ** `image`         - The `hs.image` for the panel icon.</li><li> ** `tooltip`       - The human-readable details for the toolbar icon when the mouse is hovering over it.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 506](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L506){target="_blank"} |

---


### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.getHandler(id) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the handler for a given ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L105){target="_blank"} |

---


### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L78){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.hide() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Watch Folders Window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 380](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L380){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.init() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Watch Folder Manager.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 534](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L534){target="_blank"} |

---


### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the Watch Folders Webview.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript code you want to inject in the form of a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 396](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L396){target="_blank"} |

---


### [maxPanelHeight](#maxpanelheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.maxPanelHeight() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the maximum panel height as a number                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 230](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L230){target="_blank"} |

---


### [selectPanel](#selectpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.selectPanel(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a Preferences Panel.                                                                     |
| **Parameters**                              | <ul><li>id - the ID of the panel you want to select.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 421](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L421){target="_blank"} |

---


### [setPanelRenderer](#setpanelrenderer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.setPanelRenderer(renderer) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a Panel Renderer                                                                     |
| **Parameters**                              | <ul><li>renderer - The renderer</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 118](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L118){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.watchfolders.manager.show([panelID]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Watch Folders Window                                                                     |
| **Parameters**                              | <ul><li>[panelID] - An optional panel ID</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/watchfolders/manager/init.lua line 343](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/watchfolders/manager/init.lua#L343){target="_blank"} |

---

