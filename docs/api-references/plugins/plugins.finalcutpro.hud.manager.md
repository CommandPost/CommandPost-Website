# plugins.finalcutpro.hud.manager

Manager for the Final Cut Pro HUD.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_WIDTH](#default_width)
 * [lastTab](#lasttab)
 * [position](#position)

### **Variables** - _Configurable values_
 * [_handlers](#_handlers)
 * [_panels](#_panels)

### **Functions** - _API calls offered directly by the extension_
 * [addHandler](#addhandler)
 * [addPanel](#addpanel)
 * [currentPanelID](#currentpanelid)
 * [delete](#delete)
 * [getHandler](#gethandler)
 * [getLabel](#getlabel)
 * [getWebview](#getwebview)
 * [hide](#hide)
 * [injectScript](#injectscript)
 * [maxPanelHeight](#maxpanelheight)
 * [new](#new)
 * [refresh](#refresh)
 * [resize](#resize)
 * [selectPanel](#selectpanel)
 * [show](#show)
 * [update](#update)
 * [updatePosition](#updateposition)
 * [updateVisibility](#updatevisibility)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)


## API Documentation

### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Height of HUD                                                                     |

---

### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Default Width of HUD                                                                     |

---

### [lastTab](#lasttab)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.lastTab`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last tab saved in settings.                                                                     |

---

### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.position`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Returns the last frame saved in settings.                                                                     |

---
### Variables


### [_handlers](#_handlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager._handlers -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing handlers.                                                                     |

---

### [_panels](#_panels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager._panels -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table containing panels.                                                                     |

---
### Functions


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.addHandler(id, handlerFn) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a Handler                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li><li>handlerFn - the handler function</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.addPanel(params) -> plugins.finalcutpro.hud.manager.panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds a new panel with the specified `params` to the HUD manager.                                                                     |
| **Parameters**                              | <ul><li>`params` - The parameters table. Details below.</li></ul> |
| **Returns**                                 | <ul><li>The new `panel` instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can have the following properties. The `priority` and `id` and properties are **required**.</li><li> ** `priority`      - An integer value specifying the priority of the panel compared to others.</li><li> ** `id`            - A string containing the unique ID of the panel.</li><li> ** `label`         - The human-readable label for the panel icon.</li><li> ** `image`         - The `hs.image` for the panel icon.</li><li> ** `tooltip`       - The human-readable details for the toolbar icon when the mouse is hovering over it.</li><li> ** `openFn`        - A callback function that's triggered when the panel is opened.</li><li> ** `closeFn`       - A callback function that's triggered when the panel is closed.</li><li> ** `loadedFn`      - A callback function that's triggered when the panel is loaded.</li></ul>                |

---

### [currentPanelID](#currentpanelid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.currentPanelID() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the panel ID with the highest priority.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The panel ID as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.delete()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes the existing HUD if it exists                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.getHandler(id) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the handler for a given ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getWebview](#getwebview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.getWebview() -> hs.webview`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview of the HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.webview`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.hide() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Hides the HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the HUD Webview.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript code you want to inject in the form of a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [maxPanelHeight](#maxpanelheight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.maxPanelHeight() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the maximum size defined by a panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The maximum panel height.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.new() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [refresh](#refresh)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.refresh() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Refreshes the HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resize](#resize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.resize()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resizes the HUD.                                                                     |
| **Parameters**                              | <ul><li>height - The new height of the HUD as number.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectPanel](#selectpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.selectPanel([id]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a HUD Panel.                                                                     |
| **Parameters**                              | <ul><li>id - the optional ID of the panel you want to select. If no ID is supplied then the current panel ID will be used.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.show() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the HUD                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if successful or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or Disables the HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updatePosition](#updateposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.updatePosition() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the HUD position.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [updateVisibility](#updatevisibility)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.updateVisibility() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Update the visibility of the HUD.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.hud.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the HUD enabled in the settings?                                                                     |

---
