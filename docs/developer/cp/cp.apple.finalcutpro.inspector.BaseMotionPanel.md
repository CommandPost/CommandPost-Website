# [docs](index.md) » cp.apple.finalcutpro.inspector.BaseMotionPanel
---

A base class for [Inspector](cp.apple.finalcutpro.inspector.Inspector.md) panels
that publish Motion parameters.

Extends [BasePanel](cp.apple.finalcutpro.inspector.BasePanel.md).

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [BaseMotionPanel](#BaseMotionPanel)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [contentUI](#contentUI)
 * [published](#published)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.matches(element)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided element could be a BaseMotionPanel.                                                                     |
| **Parameters**                              | <ul><li>element   - The element to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [BaseMotionPanel](#BaseMotionPanel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel(parent, panelType) -> cp.apple.finalcutpro.inspector.BaseMotionPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `BaseMotionPanel` object                                                                     |
| **Parameters**                              | <ul><li>`parent`		- The parent</li><li>`panelType`  - The panel type.</li></ul> |
| **Returns**                                 | <ul><li>A `BaseMotionPanel` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [contentUI](#contentUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.contentUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The primary content `axuielement` for the panel.                                                                     |

| [published](#published)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BaseMotionPanel.published <cp.prop: cp.ui.PropertyRow; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'Published Parameters' section.                                                                     |

