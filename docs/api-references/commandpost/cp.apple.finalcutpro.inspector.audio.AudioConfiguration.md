# cp.apple.finalcutpro.inspector.audio.AudioConfiguration

The Audio Configuration section of the Audio Inspector.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [AudioConfiguration](#audioconfiguration)
 * [matches](#matches)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [component](#component)
 * [doShow](#doshow)
 * [show](#show)
 * [subcomponent](#subcomponent)


---

## API Documentation

#### Functions


### [AudioConfiguration](#audioconfiguration)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration(parent) -> AudioConfiguration`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Media Import object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new AudioConfiguration object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L33){target="_blank"} |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L20){target="_blank"} |

---

#### Methods


### [component](#component)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:component() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of `AudioComponent` objects for all main audio components.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing `AudioComponent` objects.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L61){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that will attempt to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or send an `error` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 110](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L110){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `AudioConfiguration` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 95](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L95){target="_blank"} |

---


### [subcomponent](#subcomponent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioConfiguration:subcomponent() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of `AudioComponent` objects for all audio subcomponents.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing `AudioComponent` objects.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioConfiguration.lua#L78){target="_blank"} |

---

