# cp.apple.finalcutpro.inspector.audio.AudioComponent

The Audio Configuration section of the Audio Inspector.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [AudioComponent](#audiocomponent)
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [channels](#channels)
 * [role](#role)
 * [showAs](#showas)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [enabled](#enabled)
 * [show](#show)


---

## API Documentation

#### Functions


### [AudioComponent](#audiocomponent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent(parent, subcomponent, index) -> AudioComponent`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Audio Component object.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>subcomponent - A boolean that defines whether or not this is a subcomponent.</li><li>index - The index of the component</li></ul> |
| **Returns**                                 | <ul><li>A new AudioComponent object.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 74](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L74) |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L30) |

---

#### Fields


### [channels](#channels)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent.channels <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The channels popup menu button for the component. This only present for                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 232](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L232) |

---


### [role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent.role <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The role popup menu button for the subcomponent. Only present for                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 266](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L266) |

---


### [showAs](#showas)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent.showAs <cp.ui.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The subroles popup menu button for the component. Only present for                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 249](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L249) |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A Statement that will attempt to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if successful, or send an `error` if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 298](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L298) |

---


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent:enabled() -> Button`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the enable/disable button for the component.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Button` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 188](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L188) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.AudioComponent:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `AudioComponent` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua line 283](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/AudioComponent.lua#L283) |

---

