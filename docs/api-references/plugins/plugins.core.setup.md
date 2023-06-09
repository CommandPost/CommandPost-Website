# plugins.core.setup

Manager for the CommandPost Setup Screen.

## Submodules
 * [plugins.core.setup.panel](plugins.core.setup.panel.md)

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [DEFAULT_HEIGHT](#default_height)
 * [DEFAULT_TITLE](#default_title)
 * [DEFAULT_WIDTH](#default_width)
 * [enabled](#enabled)
 * [FIRST_PRIORITY](#first_priority)
 * [LAST_PRIORITY](#last_priority)
 * [visible](#visible)

### **Variables** - _Configurable values_
 * [onboardingRequired](#onboardingrequired)
 * [position](#position)

### **Functions** - _API calls offered directly by the extension_
 * [addPanel](#addpanel)
 * [currentPanel](#currentpanel)
 * [delete](#delete)
 * [focus](#focus)
 * [getLabel](#getlabel)
 * [injectScript](#injectscript)
 * [new](#new)
 * [nextPanel](#nextpanel)
 * [setPanelRenderer](#setpanelrenderer)
 * [show](#show)
 * [update](#update)


## API Documentation

### Constants


### [DEFAULT_HEIGHT](#default_height)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.DEFAULT_HEIGHT -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default panel height.                                                                     |

---

### [DEFAULT_TITLE](#default_title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.DEFAULT_TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default panel title.                                                                     |

---

### [DEFAULT_WIDTH](#default_width)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.DEFAULT_WIDTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default panel width.                                                                     |

---

### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Set to `true` if the manager is enabled. Defaults to `false`.                                                                     |

---

### [FIRST_PRIORITY](#first_priority)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.FIRST_PRIORITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The first panel priority.                                                                     |

---

### [LAST_PRIORITY](#last_priority)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.LAST_PRIORITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The last panel priority.                                                                     |

---

### [visible](#visible)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.visible <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A property indicating if the welcome window is visible on screen.                                                                     |

---
### Variables


### [onboardingRequired](#onboardingrequired)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.onboardingRequired <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Set to `true` if on-boarding is required otherwise `false`. Defaults to `true`.                                                                     |

---

### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.position <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last known position of the Setup Window as a frame.                                                                     |

---
### Functions


### [addPanel](#addpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.addPanel(newPanel) -> panel`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds the new panel to the manager. Panels are created via the `plugins.core.setup.panel.new(...)` function.                                                                     |
| **Parameters**                              | <ul><li>`newPanel`   - The panel to add.</li></ul> |
| **Returns**                                 | <ul><li>The manager.</li></ul>          |
| **Notes**                                   | <ul><li>If the Setup Manager is `enabled`, the window will be displayed immediately when a panel is added.</li></ul>                |

---

### [currentPanel](#currentpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.currentPanel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The Current Panel                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current panel as a string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.delete() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deletes the Setup Panels.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.focus() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Focuses on the Setup Panels window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getLabel](#getlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.getLabel() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Webview label.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Webview label as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [injectScript](#injectscript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.injectScript(script) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Injects JavaScript into the Setup Panels.                                                                     |
| **Parameters**                              | <ul><li>script - The JavaScript you want to inject as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.new() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates the Setup Panels.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [nextPanel](#nextpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.nextPanel() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Moves to the next panel. If the window is visible, the panel will be updated. If no panels are left in the queue, the window will be closed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if there was another panel to move to, or `false` if no panels remain.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setPanelRenderer](#setpanelrenderer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.setPanelRenderer(renderer) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a Panel Renderer                                                                     |
| **Parameters**                              | <ul><li>renderer - The renderer</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.show() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows the Setup Panels.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.update() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Setup Panels.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
