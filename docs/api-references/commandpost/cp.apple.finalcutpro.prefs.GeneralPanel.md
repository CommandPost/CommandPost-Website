# cp.apple.finalcutpro.prefs.GeneralPanel

General Panel Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [TIME_DISPLAY](#TIME_DISPLAY)
* Functions - API calls offered directly by the extension
 * [timeDisplay](#timeDisplay)
* Constructors - API calls which return an object, typically one that offers API methods
 * [GeneralPanel](#GeneralPanel)

## API Documentation

### Constants

| [TIME_DISPLAY](#TIME_DISPLAY)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel.TIME_DISPLAY -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The time display options.                                                                     |

### Functions

| [timeDisplay](#timeDisplay)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel.timeDisplay([value]) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets to sets the Time Display value.                                                                     |
| **Parameters**                              | <ul><li>value - An optional value to set the Time Display.</li></ul> |
| **Returns**                                 | <ul><li>The time display if successful, otherwise `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [GeneralPanel](#GeneralPanel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.GeneralPanel(preferencesDialog) -> GeneralPanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `GeneralPanel` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `GeneralPanel` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

