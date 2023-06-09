# cp.apple.finalcutpro.workflowextensions.CommandPostWindow

The CommandPost Workflow Extension Window.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [CommandPostWindow](#commandpostwindow)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [reloadButton](#reloadbutton)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doHide](#dohide)
 * [doShow](#doshow)
 * [hasStalled](#hasstalled)
 * [hide](#hide)
 * [reload](#reload)
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L27){target="_blank"} |

---

#### Constructors


### [CommandPostWindow](#commandpostwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow(app) -> CommandPostWindow`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new CommandPost Workflow Extension window object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `CommandPostWindow` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L41){target="_blank"} |

---

#### Fields


### [reloadButton](#reloadbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow.reloadButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Reload Button within a stalled Workflow Extension.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 60](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L60){target="_blank"} |

---

#### Methods


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to hide the CommandPost Workflow Extension window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L162){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to show the CommandPost Workflow Extension window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L126){target="_blank"} |

---


### [hasStalled](#hasstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:hasStalled() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Has the Workflow Extension stalled?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if stalled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L86){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:hide() -> CommandPostWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to hide the CommandPost Workflow Extension window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `CommandPostWindow`, for chaining.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 143](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L143){target="_blank"} |

---


### [reload](#reload)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:reload() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Press the Reload Button.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L71){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.workflowextensions.CommandPostWindow:show() -> CommandPostWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the CommandPost Workflow Extension window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `CommandPostWindow`, for chaining.</li></ul>          |
| **Notes**                                   | <ul><li>If the Workflow Extension has stalled, this method will restart it.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/workflowextensions/CommandPostWindow.lua#L99){target="_blank"} |

---

