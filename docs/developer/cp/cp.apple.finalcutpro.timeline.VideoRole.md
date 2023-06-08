# [docs](index.md) » cp.apple.finalcutpro.timeline.VideoRole
---

 *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*

A [Role](cp.apple.finalcutpro.timeline.Role.md) representing Video clips.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [VideoRole](#VideoRole)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [subrolesExpanded](#subrolesExpanded)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.VideoRole.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a "Video" Role.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [VideoRole](#VideoRole)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.VideoRole(parent, uiFinder)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [subrolesExpanded](#subrolesExpanded)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.VideoRole.subrolesExpanded <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Button](cp.ui.Button.md) that toggles whether the sub-captions are visible.                                                                     |
| **Notes**                                   | <ul><li>This [Button](cp.ui.Button.md) is only visible when the pointer is hovering over the Role.</li></ul>                |

