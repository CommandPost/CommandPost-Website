# [docs](index.md) » cp.apple.finalcutpro.main.LibrariesList
---

Libraries List Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [clips](#clips)
 * [clipsUI](#clipsUI)
 * [deselectAll](#deselectAll)
 * [indexOfClip](#indexOfClip)
 * [selectAll](#selectAll)
 * [selectClip](#selectClip)
 * [selectClipAt](#selectClipAt)
 * [selectClipTitled](#selectClipTitled)
 * [selectedClips](#selectedClips)
 * [selectedClipsUI](#selectedClipsUI)
 * [showClip](#showClip)
* Constructors - API calls which return an object, typically one that offers API methods
 * [LibrariesList](#LibrariesList)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [contents](#contents)
 * [isFocused](#isFocused)
 * [isShowing](#isShowing)
 * [playerUI](#playerUI)
 * [playhead](#playhead)
 * [skimmingPlayhead](#skimmingPlayhead)
* Methods - API calls which can only be made on an object returned by a constructor
 * [columns](#columns)
 * [show](#show)

## API Documentation

### Functions

| [clips](#clips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [clipsUI](#clipsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [deselectAll](#deselectAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [indexOfClip](#indexOfClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectAll](#selectAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClip](#selectClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClipAt](#selectClipAt)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClipTitled](#selectClipTitled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectedClips](#selectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectedClipsUI](#selectedClipsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showClip](#showClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [LibrariesList](#LibrariesList)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList(app) -> LibrariesList`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesList` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesList` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [contents](#contents)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.contents <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries List Contents UI.                                                                     |

| [isFocused](#isFocused)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.isFocused <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Libraries List is currently focused within FCPX.                                                                     |

| [isShowing](#isShowing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Libraries List is showing on screen.                                                                     |

| [playerUI](#playerUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.playerUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` for the player section of the Libraries List UI.                                                                     |

| [playhead](#playhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.playhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries List Playhead.                                                                     |

| [skimmingPlayhead](#skimmingPlayhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.skimmingPlayhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | the Libraries List Skimming Playhead.                                                                     |

### Methods

| [columns](#columns)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:columns() -> Columns`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the List View Columns object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Columns` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:show() -> LibrariesList`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries List.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`LibrariesList` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |
