# cp.apple.finalcutpro.timeline.ToolPalette

Represents the Tool Palette Menu Button in the Timeline.

Extends:
 * [MenuButton](cp.ui.MenuButton.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [OPTIONS](#options)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [isBlade](#isblade)
 * [isHand](#ishand)
 * [isPosition](#isposition)
 * [isRange](#isrange)
 * [isSelect](#isselect)
 * [isTrim](#istrim)
 * [isZoom](#iszoom)
 * [value](#value)


---

## API Documentation

#### Constants


### [OPTIONS](#options)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.OPTIONS <table of tables>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The options for the Tool Palette Menu Button.                                                                     |
| **Notes**                                   | <ul><li>Contains `SELECT`, `TRIM`, `POSITION`, `RANGE`, `BLADE`, `ZOOM`, and `HAND`.</li><li>The `CommandSetID` value can be used with `cp.apple.finalcutpro:doShortcut()`.</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L21) |

---

#### Fields


### [isBlade](#isblade)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isBlade <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `BLADE` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 190](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L190) |

---


### [isHand](#ishand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isHand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `HAND` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 222](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L222) |

---


### [isPosition](#isposition)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isPosition <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `POSITION` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L158) |

---


### [isRange](#isrange)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isRange <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `RANGE` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L174) |

---


### [isSelect](#isselect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isSelect <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `SELECT` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L126) |

---


### [isTrim](#istrim)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isTrim <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `TRIM` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 142](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L142) |

---


### [isZoom](#iszoom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isZoom <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `ZOOM` option.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 206](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L206) |

---


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.value <cp.prop: ToolPalette.OPTIONS, live?, read-write>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` containing the current [OPTIONS](#OPTIONS) value of the Tool Palette. May be `nil` if the toolbar is not available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua line 85](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/timeline/ToolPalette.lua#L85) |

---

