# cp.apple.finalcutpro.main.Playhead

Playhead Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [find](#find)
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [Playhead](#Playhead)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [center](#center)
 * [currentViewer](#currentViewer)
 * [frame](#frame)
 * [isPersistent](#isPersistent)
 * [position](#position)
 * [timecode](#timecode)
* Methods - API calls which can only be made on an object returned by a constructor
 * [hide](#hide)
 * [show](#show)

## API Documentation

### Functions

| [find](#find)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.find(containerUI, skimming) -> hs.axuielement object | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Finds the playhead (either persistent or skimming) in the specified container. Defaults to persistent.                                                                     |
| **Parameters**                              | <ul><li>`containerUI` - The container UI</li><li>`skimming` - Whether or not you want the skimming playhead as boolean.</li></ul> |
| **Returns**                                 | <ul><li>The playhead `hs.axuielement` object or `nil` if not found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the Playhead or not                                                                     |
| **Parameters**                              | <ul><li>`element`    - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the Playhead otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [Playhead](#Playhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead(parent[, skimming[, containerFn[, useEventViewer]]]) -> Playhead`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new Playhead                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent object</li><li>skimming      - (optional) if `true`, this links to the 'skimming' playhead created under the mouse, if present.</li><li>containerUI   - (optional) a `cp.prop` which returns the container axuielement which contains the playheads. If not present, it will use the parent's UI element.</li><li>useEventViewer - (optional) if `true`, this will use the Event Viewer's timecode, when available.</li></ul> |
| **Returns**                                 | <ul><li>The new `Playhead` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [center](#center)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.center <cp.prop: hs.geometry.point; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the centre point (`{x, y}`) of the playhead.                                                                     |

| [currentViewer](#currentViewer)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.currentViewer <cp.prop: cp.apple.finalcutpro.viewer.Viewer; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Represents the current viewer for the playhead. This may be either the primary Viewer or the Event Viewer,                                                                     |

| [frame](#frame)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.frame <cp.prop: hs.geometry.frame; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the frame of the playhead.                                                                     |

| [isPersistent](#isPersistent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.isPersistent <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the playhead persistent?                                                                     |

| [position](#position)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.position <cp.prop; number; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the horizontal position of the playhead line, which may be different to the `x` position of the playhead.                                                                     |

| [timecode](#timecode)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead.timecode <cp.prop: string; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets and sets the current timecode.                                                                     |

### Methods

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead:hide() -> Playhead object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Playhead                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Playhead object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Playhead:show() -> Playhead object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Playhead                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Playhead object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

