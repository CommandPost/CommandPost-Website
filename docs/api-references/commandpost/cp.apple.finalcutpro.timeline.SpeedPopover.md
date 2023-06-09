# cp.apple.finalcutpro.timeline.SpeedPopover

 *Extends [Timeline](cp.apple.finalcutpro.timeline.md)*

Represents the Speed Popover.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [SpeedPopover](#SpeedPopover)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [byDuration](#byDuration)
 * [byRate](#byRate)
 * [direction](#direction)
 * [duration](#duration)
 * [forward](#forward)
 * [rate](#rate)
 * [reverse](#reverse)
 * [ripple](#ripple)
 * [setSpeed](#setSpeed)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doShow](#doShow)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element is a "Video" Role.                                                                     |
| **Parameters**                              | <ul><li>element - An element to check</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [SpeedPopover](#SpeedPopover)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover(parent, uiFinder)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new instance with the specified `parent` and `uiFinder`.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent `Element`.</li><li>uiFinder - a `function` or `cp.prop` containing the `axuielement`</li></ul> |
| **Returns**                                 | <ul><li>The new `SpeedPopover`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [byDuration](#byDuration)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:byDuration <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Duration" radio button.                                                                     |

| [byRate](#byRate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:byRate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Rate" radio button.                                                                     |

| [direction](#direction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:direction <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioGroup](cp.ui.RadioGroup.md) for the "Direction" radio group.                                                                     |

| [duration](#duration)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:duration <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextField](cp.ui.TextField.md) for the "Duration" text field.                                                                     |

| [forward](#forward)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:forward <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Forward" radio button.                                                                     |

| [rate](#rate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:rate <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [TextField](cp.ui.TextField.md) for the "Rate" text field.                                                                     |

| [reverse](#reverse)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:reverse <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) for the "Reverse" radio button.                                                                     |

| [ripple](#ripple)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:ripple <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CheckBox](cp.ui.CheckBox.md) for the "Ripple" checkbox.                                                                     |

| [setSpeed](#setSpeed)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:setSpeed <cp.ui.RadioGroup>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioGroup](cp.ui.RadioGroup.md) for the "Set Speed" radio group.                                                                     |

### Methods

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.SpeedPopover:doShow() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will show the Speed Popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement` which will send `true` if it successful, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

