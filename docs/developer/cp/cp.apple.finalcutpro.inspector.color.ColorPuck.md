# [docs](index.md) » cp.apple.finalcutpro.inspector.color.ColorPuck
---

Color ColorPuck Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_ANGLES](#DEFAULT_ANGLES)
 * [ELASTICITY](#ELASTICITY)
 * [NATURAL_LENGTH](#NATURAL_LENGTH)
 * [RANGE](#RANGE)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [ColorPuck](#ColorPuck)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [angle](#angle)
 * [label](#label)
 * [percent](#percent)
 * [row](#row)
 * [skimming](#skimming)
* Methods - API calls which can only be made on an object returned by a constructor
 * [accumulate](#accumulate)
 * [cleanup](#cleanup)
 * [colorMarker](#colorMarker)
 * [contentUI](#contentUI)
 * [doReset](#doReset)
 * [doSelect](#doSelect)
 * [doShiftPercent](#doShiftPercent)
 * [doShow](#doShow)
 * [drawMarker](#drawMarker)
 * [getArc](#getArc)
 * [getBrightness](#getBrightness)
 * [hasAngle](#hasAngle)
 * [index](#index)
 * [loop](#loop)
 * [reset](#reset)
 * [select](#select)
 * [shiftAngle](#shiftAngle)
 * [shiftPercent](#shiftPercent)
 * [show](#show)
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constants

| [DEFAULT_ANGLES](#DEFAULT_ANGLES)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.DEFAULT_ANGLES -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The table of default angles for the various pucks (1-4).                                                                     |

| [ELASTICITY](#ELASTICITY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.ELASTICITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Elasticity as number.                                                                     |

| [NATURAL_LENGTH](#NATURAL_LENGTH)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.NATURAL_LENGTH -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Natural Length as number.                                                                     |

| [RANGE](#RANGE)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.RANGE -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of puck ranges.                                                                     |

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [ColorPuck](#ColorPuck)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck(parent, puckNumber, labelKeys, hasAngle) -> ColorPuck`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ColorPuck` object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li><li>`puckNumber` - The puck number</li><li>`labelKeys`  - Label Keys</li><li>`hasAngle`   - If `true`, the puck has an `angle` parameter.</li></ul> |
| **Returns**                                 | <ul><li>A ColorInspector object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [angle](#angle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.angle <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'angle' text field (only present for the 'color' aspect).                                                                     |

| [label](#label)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.label <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The human-readable label for the puck, in FCPX's current language.                                                                     |

| [percent](#percent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.percent <cp.prop: TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The 'percent' text field.                                                                     |

| [row](#row)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.row <cp.prop: PropertyRow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Finds the 'row' for the property type.                                                                     |

| [skimming](#skimming)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck.skimming <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Skimming Preferences value.                                                                     |

### Methods

| [accumulate](#accumulate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:accumulate(xShift, yShift) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Accumulate's the Shift Values.                                                                     |
| **Parameters**                              | <ul><li>`xShift` - `x` value as number</li><li>`yShift` - `y` value as number</li></ul> |
| **Returns**                                 | <ul><li>`x` - Accumulated `x` value as number</li><li>`y` - Accumulated `y` value as number</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [cleanup](#cleanup)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:cleanup() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Cleans up the Color ColorPuck drawings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [colorMarker](#colorMarker)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:colorMarker(pct, angle) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Draws a Color Marker.                                                                     |
| **Parameters**                              | <ul><li>pct - Percentage</li><li>angle - Angle</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [contentUI](#contentUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:contentUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Content Accessibility Object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `axuielementObject` or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doReset](#doReset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:doReset() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that resets the puck to its default settings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful, or throwing an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSelect](#doSelect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:doSelect() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that selects this puck.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or throwing an error if no.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShiftPercent](#doShiftPercent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:doShiftPercent(amount) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shifts the percent value by the provide amount.                                                                     |
| **Parameters**                              | <ul><li>`amount` - The amount to shift the percent value.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to the updated percent value, or throwing an error if there is a problem.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that shows the Color ColorPuck.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful or sending an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [drawMarker](#drawMarker)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:drawMarker() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Draws a marker.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getArc](#getArc)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:getArc() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the arc value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The arc value as number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getBrightness](#getBrightness)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:getBrightness() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the brightness value.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The brightness value as number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hasAngle](#hasAngle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:hasAngle() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Indicates if the puck has an `angle` parameter. The `angle` `cp.prop` will always exist regardless, but if this is `false`, it will never return a result.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the puck has an `angle`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [index](#index)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:index() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the puck number (1 through 4).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The puck number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loop](#loop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:loop() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loops the Color ColorPuck function.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [reset](#reset)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:reset() -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets the puck to its default settings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorPuck` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [select](#select)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:select() -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects this puck.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorPuck` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shiftAngle](#shiftAngle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:shiftAngle(amount) -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shifts the angle value by the provide amount.                                                                     |
| **Parameters**                              | <ul><li>amount - The amount to shift the angle value.</li></ul> |
| **Returns**                                 | <ul><li>The `ColorPuck` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shiftPercent](#shiftPercent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:shiftPercent(amount) -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shifts the percent value by the provide amount.                                                                     |
| **Parameters**                              | <ul><li>`amount` - The amount to shift the percent value.</li></ul> |
| **Returns**                                 | <ul><li>The updated value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:show() -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Color ColorPuck                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.inspector.color.ColorPuck` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:start() -> cp.apple.finalcutpro.inspector.color.ColorPuck`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts a Color ColorPuck.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `ColorPuck` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.color.ColorPuck:stop() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops a Color ColorPuck.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

