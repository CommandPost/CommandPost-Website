# plugins.core.toolbox.manager

Manager for the CommandPost Toolbox Window.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_WIDTH](#default_width)
 * [lastTab](#lasttab)
 * [position](#position)
 * [WEBVIEW_LABEL](#webview_label)

**Variables** - _Configurable values_
 * [_handlers](#_handlers)
 * [_panels](#_panels)

**Functions** - _API calls offered directly by the extension_
 * [addHandler](#addhandler)
 * [addPanel](#addpanel)
 * [currentPanelID](#currentpanelid)
 * [focus](#focus)
 * [getHandler](#gethandler)
 * [getLabel](#getlabel)
 * [getWebview](#getwebview)
 * [hide](#hide)
 * [init](#init)
 * [injectScript](#injectscript)
 * [maxPanelHeight](#maxpanelheight)
 * [new](#new)
 * [refresh](#refresh)
 * [selectPanel](#selectpanel)
 * [setPanelRenderer](#setpanelrenderer)
 * [show](#show)


---

## API Documentation

#### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Height of Preferences Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L38) |

---


### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Width of Preferences Window                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L43) |

---


### [lastTab](#lasttab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.lastTab`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last tab saved in settings.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L63) |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.position`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last frame saved in settings.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 58](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L58) |

---


### [WEBVIEW_LABEL](#webview_label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.WEBVIEW_LABEL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The WebView Label                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L33) |

---

#### Variables


### [_handlers](#_handlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager._handlers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing handlers.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L53) |

---


### [_panels](#_panels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager._panels -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing panels.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 48](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L48) |

---

#### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.addHandler(id, handlerFn) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a Handler                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li><li>handlerFn - the handler function</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 94](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L94) |

---


### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.addPanel(params) -> plugins.core.toolbox.manager.panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new panel with the specified `params` to the preferences manager.                                                                     |
| **Parameters**                              | <ul><li>`params` - The parameters table. Details below.</li></ul> |
| **Returns**                                 | <ul><li>The new `panel` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can have the following properties. The `priority` and `id` and properties are **required**.</li><li> ** `priority`      - An integer value specifying the priority of the panel compared to others.</li><li> ** `id`            - A string containing the unique ID of the panel.</li><li> ** `label`         - The human-readable label for the panel icon.</li><li> ** `image`         - The `hs.image` for the panel icon.</li><li> ** `tooltip`       - The human-readable details for the toolbar icon when the mouse is hovering over it.</li><li> ** `closeFn`       - A callback function that's triggered when the Preferences window is closed.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 553](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L553) |

---


### [currentPanelID](#currentpanelid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.currentPanelID() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the panel ID with the highest priority.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The panel ID as a string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 152](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L152) |

---


### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.focus() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Puts focus on the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful or otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 406](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L406) |

---


### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.getHandler(id) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the handler for a given ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 108](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L108) |

---


### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L81) |

---


### [getWebview](#getwebview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.getWebview() -> hs.webview`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview of the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.webview`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L68) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 425](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L425) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.init() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the preferences panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L234) |

---


### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the Preferences Webview.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript code you want to inject in the form of a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 463](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L463) |

---


### [maxPanelHeight](#maxpanelheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.maxPanelHeight() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the maximum size defined by a panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The maximum panel height.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L249) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.new() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 290](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L290) |

---


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.refresh() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 441](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L441) |

---


### [selectPanel](#selectpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.selectPanel(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a Preferences Panel.                                                                     |
| **Parameters**                              | <ul><li>id - the ID of the panel you want to select.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 487](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L487) |

---


### [setPanelRenderer](#setpanelrenderer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.setPanelRenderer(renderer) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a Panel Renderer                                                                     |
| **Parameters**                              | <ul><li>renderer - The renderer</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L121) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.toolbox.manager.show([panelID]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Preferences Window                                                                     |
| **Parameters**                              | <ul><li>[panelID] - An optional panel ID</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/toolbox/manager/init.lua line 374](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/toolbox/manager/init.lua#L374) |

---

