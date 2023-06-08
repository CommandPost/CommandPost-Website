# [docs](index.md) » cp.apple.finalcutpro.timeline.ToolPalette
---

Represents the Tool Palette Menu Button in the Timeline.

Extends:
 * [MenuButton](cp.ui.MenuButton.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [OPTIONS](#OPTIONS)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [isBlade](#isBlade)
 * [isHand](#isHand)
 * [isPosition](#isPosition)
 * [isRange](#isRange)
 * [isSelect](#isSelect)
 * [isTrim](#isTrim)
 * [isZoom](#isZoom)
 * [value](#value)

## API Documentation

### Constants

| [OPTIONS](#OPTIONS)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.OPTIONS <table of tables>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The options for the Tool Palette Menu Button.                                                                     |
| **Notes**                                   | <ul><li>Contains `SELECT`, `TRIM`, `POSITION`, `RANGE`, `BLADE`, `ZOOM`, and `HAND`.</li><li>The `CommandSetID` value can be used with `cp.apple.finalcutpro:doShortcut()`.</li></ul>                |

### Fields

| [isBlade](#isBlade)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isBlade <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `BLADE` option.                                                                     |

| [isHand](#isHand)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isHand <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `HAND` option.                                                                     |

| [isPosition](#isPosition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isPosition <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `POSITION` option.                                                                     |

| [isRange](#isRange)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isRange <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `RANGE` option.                                                                     |

| [isSelect](#isSelect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isSelect <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `SELECT` option.                                                                     |

| [isTrim](#isTrim)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isTrim <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `TRIM` option.                                                                     |

| [isZoom](#isZoom)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.isZoom <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` that indicates if the Tool Palette is set to the `ZOOM` option.                                                                     |

| [value](#value)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.ToolPalette.value <cp.prop: ToolPalette.OPTIONS, live?, read-write>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `cp.prop` containing the current [OPTIONS](#OPTIONS) value of the Tool Palette. May be `nil` if the toolbar is not available.                                                                     |

