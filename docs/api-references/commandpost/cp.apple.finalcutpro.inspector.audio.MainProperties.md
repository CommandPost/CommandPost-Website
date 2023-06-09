# cp.apple.finalcutpro.inspector.audio.MainProperties

The MainProperties UI for the [AudioInspector](cp.apple.finalcutpro.inspector.audio.AudioInspector.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [MainProperties](#mainproperties)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contentUI](#contentui)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.MainProperties.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element matches the MainProperties.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua#L30){target="_blank"} |

---

#### Constructors


### [MainProperties](#mainproperties)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.MainProperties(parent, uiFinder) -> MainProperties`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new MainProperties.                                                                     |
| **Parameters**                              | <ul><li>parent		- The parent object.</li><li>uiFinder	- The `axuielement` object that represents this element.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua#L41){target="_blank"} |

---

#### Fields


### [contentUI](#contentui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.audio.MainProperties.contentUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` object that represents the content of the MainProperties group.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/audio/MainProperties.lua#L102){target="_blank"} |

---

