# cp.apple.finalcutpro.inspector.info.InfoInspector

Video Inspector Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [metadataViews](#metadataviews)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [metadataView](#metadataview)
 * [metadataViewButton](#metadataviewbutton)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [propertiesUI](#propertiesui)


---

## API Documentation

#### Constants


### [metadataViews](#metadataviews)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataViews -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Metadata Views                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L29){target="_blank"} |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L46){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.new(parent) -> InfoInspector object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new InfoInspector object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A InfoInspector object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L61){target="_blank"} |

---

#### Fields


### [metadataView](#metadataview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataView <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the name of the current metadata view.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L126){target="_blank"} |

---


### [metadataViewButton](#metadataviewbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector.metadataViewButton <cp.io.MenuButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Info Inspector Metadata View Button.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 152](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L152){target="_blank"} |

---

#### Methods


### [propertiesUI](#propertiesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.info.InfoInspector:propertiesUI() -> hs.axuielement object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `hs.axuielement` object for the Properties UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `hs.axuielement` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/inspector/info/InfoInspector.lua#L109){target="_blank"} |

---

