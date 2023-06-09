# cp.apple.finalcutpro.inspector.BaseMotionPanel

A base class for [Inspector](cp.apple.finalcutpro.inspector.Inspector.md) panels
that publish Motion parameters.

Extends [BasePanel](cp.apple.finalcutpro.inspector.BasePanel.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [BaseMotionPanel](#basemotionpanel)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)
 * [published](#published)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element could be a BaseMotionPanel.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua line 32](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua#L32){target="_blank"} |

---

#### Constructors


### [BaseMotionPanel](#basemotionpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel(parent, panelType) -> cp.apple.finalcutpro.inspector.BaseMotionPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `BaseMotionPanel` object                                                                     |
| **Parameters**                              | <ul><li>`parent`		- The parent</li><li>`panelType`  - The panel type.</li></ul> |
| **Returns**                                 | <ul><li>A `BaseMotionPanel` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua#L47){target="_blank"} |

---

#### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.contentUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The primary content `axuielement` for the panel.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua#L70){target="_blank"} |

---


### [published](#published)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.published <cp.prop: cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'Published Parameters' section.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/BaseMotionPanel.lua#L63){target="_blank"} |

---

