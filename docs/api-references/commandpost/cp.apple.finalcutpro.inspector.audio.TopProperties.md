# cp.apple.finalcutpro.inspector.audio.TopProperties

The `TopProperties` class is used to represent the top properties group of the Audio Inspector.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [TopProperties](#topproperties)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.TopProperties.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element matches the TopProperties.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua#L23) |

---

#### Constructors


### [TopProperties](#topproperties)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.TopProperties(parent, uiFinder) -> TopProperties`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new TopProperties.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder	- The `axuielement` object that represents this element.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua#L34) |

---

#### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.TopProperties.contentUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` object that represents the content of the TopProperties group.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/TopProperties.lua#L49) |

---

