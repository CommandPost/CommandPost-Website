# plugins.core.preferences.manager

Manager for the CommandPost Preferences Window.

---

## Submodules
 * [plugins.core.preferences.manager.panel](plugins.core.preferences.manager.panel.md)

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
| **Signature**                               | `plugins.core.preferences.manager.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Height of Preferences Window                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L37){target="_blank"} |

---


### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Width of Preferences Window                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L42){target="_blank"} |

---


### [lastTab](#lasttab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.lastTab`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last tab saved in settings.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L62){target="_blank"} |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.position`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last frame saved in settings.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L57){target="_blank"} |

---


### [WEBVIEW_LABEL](#webview_label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.WEBVIEW_LABEL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The WebView Label                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L32){target="_blank"} |

---

#### Variables


### [_handlers](#_handlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager._handlers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing handlers.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L52){target="_blank"} |

---


### [_panels](#_panels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager._panels -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing panels.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L47){target="_blank"} |

---

#### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.addHandler(id, handlerFn) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a Handler                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li><li>handlerFn - the handler function</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L93){target="_blank"} |

---


### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.addPanel(params) -> plugins.core.preferences.manager.panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new panel with the specified `params` to the preferences manager.                                                                     |
| **Parameters**                              | <ul><li>`params` - The parameters table. Details below.</li></ul> |
| **Returns**                                 | <ul><li>The new `panel` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can have the following properties. The `priority` and `id` and properties are **required**.</li><li> ** `priority`      - An integer value specifying the priority of the panel compared to others.</li><li> ** `id`            - A string containing the unique ID of the panel.</li><li> ** `label`         - The human-readable label for the panel icon.</li><li> ** `image`         - The `hs.image` for the panel icon.</li><li> ** `tooltip`       - The human-readable details for the toolbar icon when the mouse is hovering over it.</li><li> ** `closeFn`       - A callback function that's triggered when the Preferences window is closed.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 550](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L550){target="_blank"} |

---


### [currentPanelID](#currentpanelid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.currentPanelID() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the panel ID with the highest priority.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The panel ID as a string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 151](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L151){target="_blank"} |

---


### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.focus() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Puts focus on the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful or otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 406](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L406){target="_blank"} |

---


### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.getHandler(id) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the handler for a given ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 107](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L107){target="_blank"} |

---


### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L80){target="_blank"} |

---


### [getWebview](#getwebview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.getWebview() -> hs.webview`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview of the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.webview`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L67){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 425](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L425){target="_blank"} |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.init() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the preferences panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 233](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L233){target="_blank"} |

---


### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the Preferences Webview.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript code you want to inject in the form of a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 463](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L463){target="_blank"} |

---


### [maxPanelHeight](#maxpanelheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.maxPanelHeight() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the maximum size defined by a panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The maximum panel height.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 248](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L248){target="_blank"} |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.new() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 289](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L289){target="_blank"} |

---


### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.refresh() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 441](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L441){target="_blank"} |

---


### [selectPanel](#selectpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.selectPanel(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a Preferences Panel.                                                                     |
| **Parameters**                              | <ul><li>id - the ID of the panel you want to select.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 484](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L484){target="_blank"} |

---


### [setPanelRenderer](#setpanelrenderer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.setPanelRenderer(renderer) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a Panel Renderer                                                                     |
| **Parameters**                              | <ul><li>renderer - The renderer</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 120](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L120){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.show([panelID]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Preferences Window                                                                     |
| **Parameters**                              | <ul><li>[panelID] - An optional panel ID</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/core/preferences/manager/init.lua line 374](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/preferences/manager/init.lua#L374){target="_blank"} |

---

