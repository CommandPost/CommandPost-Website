# cp.apple.finalcutpro.timeline.CaptionsSubrole

 *Extends [Role](cp.apple.finalcutpro.timeline.Role.md)*

A [Role](cp.apple.finalcutpro.timeline.Role.md) representing Captions.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [CaptionsSubrole](#captionssubrole)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [format](#format)
 * [visibleInTimeline](#visibleintimeline)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsSubrole.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a "Captions" Subrole.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua#L16){target="_blank"} |

---

#### Constructors


### [CaptionsSubrole](#captionssubrole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsSubrole(parent, uiFinder)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `Row`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua#L30){target="_blank"} |

---

#### Fields


### [format](#format)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsSubrole.format <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [StaticText](cp.ui.StaticText.md) which represents the subtitle format (e.g. "ITT", "SRT").                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua line 44](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua#L44){target="_blank"} |

---


### [visibleInTimeline](#visibleintimeline)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.CaptionsSubrole.visibleInTimeline <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [CheckBox](cp.ui.CheckBox.md) that indicates if the subtitle track is visible in the Viewer.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/CaptionsSubrole.lua#L53){target="_blank"} |

---

