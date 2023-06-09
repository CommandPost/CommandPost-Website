# plugins.core.controlsurfaces.manager

Manager for the CommandPost Preferences Window.

## Submodules
 * [plugins.core.controlsurfaces.manager.panel](plugins.core.controlsurfaces.manager.panel.md)

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_WIDTH](#default_width)
 * [lastTab](#lasttab)
 * [NUMBER_OF_BANKS](#number_of_banks)
 * [NUMBER_OF_DEVICES](#number_of_devices)
 * [position](#position)
 * [WEBVIEW_LABEL](#webview_label)

### **Variables** - _Configurable values_
 * [_handlers](#_handlers)
 * [_panels](#_panels)

### **Functions** - _API calls offered directly by the extension_
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


## API Documentation

### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Height of Preferences Window                                                                     |

---

### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Width of Preferences Window                                                                     |

---

### [lastTab](#lasttab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.lastTab`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last tab saved in settings.                                                                     |

---

### [NUMBER_OF_BANKS](#number_of_banks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.NUMBER_OF_BANKS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of banks.                                                                     |

---

### [NUMBER_OF_DEVICES](#number_of_devices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.NUMBER_OF_DEVICES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of devices.                                                                     |

---

### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.position`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last frame saved in settings.                                                                     |

---

### [WEBVIEW_LABEL](#webview_label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.WEBVIEW_LABEL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The WebView Label                                                                     |

---
### Variables


### [_handlers](#_handlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager._handlers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing handlers.                                                                     |

---

### [_panels](#_panels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager._panels -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing panels.                                                                     |

---
### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.addHandler(id, handlerFn) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a Handler                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li><li>handlerFn - the handler function</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.addPanel(params) -> plugins.core.controlsurfaces.manager.panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new panel with the specified `params` to the preferences manager.                                                                     |
| **Parameters**                              | <ul><li>`params` - The parameters table. Details below.</li></ul> |
| **Returns**                                 | <ul><li>The new `panel` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can have the following properties. The `priority` and `id` and properties are **required**.</li><li> ** `priority`      - An integer value specifying the priority of the panel compared to others.</li><li> ** `id`            - A string containing the unique ID of the panel.</li><li> ** `label`         - The human-readable label for the panel icon.</li><li> ** `image`         - The `hs.image` for the panel icon.</li><li> ** `tooltip`       - The human-readable details for the toolbar icon when the mouse is hovering over it.</li><li> ** `closeFn`       - A callback function that's triggered when the Preferences window is closed.</li></ul>                |

---

### [currentPanelID](#currentpanelid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.currentPanelID() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the panel ID with the highest priority.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The panel ID as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.focus() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Puts focus on the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful or otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.getHandler(id) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the handler for a given ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getWebview](#getwebview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.getWebview() -> hs.webview`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview of the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.webview`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.init() -> nothing`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the preferences panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the Preferences Webview.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript code you want to inject in the form of a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [maxPanelHeight](#maxpanelheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.maxPanelHeight() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the maximum size defined by a panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The maximum panel height.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.new() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.refresh() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the Preferences Window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectPanel](#selectpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.selectPanel(id) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a Preferences Panel.                                                                     |
| **Parameters**                              | <ul><li>id - the ID of the panel you want to select.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setPanelRenderer](#setpanelrenderer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.setPanelRenderer(renderer) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a Panel Renderer                                                                     |
| **Parameters**                              | <ul><li>renderer - The renderer</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.manager.show([panelID]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Preferences Window                                                                     |
| **Parameters**                              | <ul><li>[panelID] - An optional panel ID</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
