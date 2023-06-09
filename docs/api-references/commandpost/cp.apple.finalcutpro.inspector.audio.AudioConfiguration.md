# cp.apple.finalcutpro.inspector.audio.AudioConfiguration

The Audio Configuration section of the Audio Inspector.

## API Overview
* Functions - API calls offered directly by the extension
 * [AudioConfiguration](#AudioConfiguration)
 * [matches](#matches)
* Methods - API calls which can only be made on an object returned by a constructor
 * [component](#component)
 * [doShow](#doShow)
 * [show](#show)
 * [subcomponent](#subcomponent)

## API Documentation

### Functions

| [AudioConfiguration](#AudioConfiguration)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration(parent) -> AudioConfiguration`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Media Import object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new AudioConfiguration object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [component](#component)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:component() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of `AudioComponent` objects for all main audio components.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing `AudioComponent` objects.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that will attempt to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or send an `error` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `AudioConfiguration` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [subcomponent](#subcomponent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:subcomponent() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of `AudioComponent` objects for all audio subcomponents.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing `AudioComponent` objects.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

