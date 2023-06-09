# cp.apple.finalcutpro.main.Playhead

Playhead Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [find](#find)
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Playhead](#playhead)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [center](#center)
 * [currentViewer](#currentviewer)
 * [frame](#frame)
 * [isPersistent](#ispersistent)
 * [position](#position)
 * [timecode](#timecode)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [show](#show)


---

## API Documentation

#### Functions


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.find(containerUI, skimming) -> hs.axuielement object | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the playhead (either persistent or skimming) in the specified container. Defaults to persistent.                                                                     |
| **Parameters**                              | <ul><li>`containerUI` - The container UI</li><li>`skimming` - Whether or not you want the skimming playhead as boolean.</li></ul> |
| **Returns**                                 | <ul><li>The playhead `hs.axuielement` object or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 30](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L30) |

---


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the Playhead or not                                                                     |
| **Parameters**                              | <ul><li>`element`    - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the Playhead otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L17) |

---

#### Constructors


### [Playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead(parent[, skimming[, containerFn[, useEventViewer]]]) -> Playhead`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new Playhead                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent object</li><li>skimming      - (optional) if `true`, this links to the 'skimming' playhead created under the mouse, if present.</li><li>containerUI   - (optional) a `cp.prop` which returns the container axuielement which contains the playheads. If not present, it will use the parent's UI element.</li><li>useEventViewer - (optional) if `true`, this will use the Event Viewer's timecode, when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `Playhead` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L64) |

---

#### Fields


### [center](#center)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.center <cp.prop: hs.geometry.point; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the centre point (`{x, y}`) of the playhead.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L126) |

---


### [currentViewer](#currentviewer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.currentViewer <cp.prop: cp.apple.finalcutpro.viewer.Viewer; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Represents the current viewer for the playhead. This may be either the primary Viewer or the Event Viewer,                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 136](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L136) |

---


### [frame](#frame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.frame <cp.prop: hs.geometry.frame; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the frame of the playhead.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L106) |

---


### [isPersistent](#ispersistent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.isPersistent <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the playhead persistent?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 99](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L99) |

---


### [position](#position)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.position <cp.prop; number; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the horizontal position of the playhead line, which may be different to the `x` position of the playhead.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L116) |

---


### [timecode](#timecode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.timecode <cp.prop: string; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets and sets the current timecode.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 154](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L154) |

---

#### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead:hide() -> Playhead object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Playhead                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Playhead object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 216](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L216) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead:show() -> Playhead object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Playhead                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Playhead object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/Playhead.lua line 180](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/Playhead.lua#L180) |

---

