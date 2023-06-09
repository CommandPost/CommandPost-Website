# cp.apple.finalcutpro.timeline.CaptionsRole

 *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*

A [Role](cp.apple.finalcutpro.timeline.Role.md) representing Captions.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [CaptionsRole](#captionsrole)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [subrolesExpanded](#subrolesexpanded)
 * [visibleInViewer](#visibleinviewer)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsRole.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a "Captions" Role.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua#L21){target="_blank"} |

---

#### Constructors


### [CaptionsRole](#captionsrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsRole(parent, uiFinder)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua#L36){target="_blank"} |

---

#### Fields


### [subrolesExpanded](#subrolesexpanded)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsRole.subrolesExpanded <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [Button](cp.ui.Button.md) that toggles whether the sub-captions are visible.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua#L59){target="_blank"} |

---


### [visibleInViewer](#visibleinviewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsRole.visibleInViewer <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [CheckBox](cp.ui.CheckBox.md) that toggles whether captions are visible in the [Viewer](cp.apple.finalcutpro.viewer.Viewer.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsRole.lua#L50){target="_blank"} |

---

