# cp.apple.finalcutpro.main.LibrariesFilmstrip

Libraries Filmstrip Module.

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
 * [showClipAt](#showClipAt)
 * [sortClips](#sortClips)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [playhead](#playhead)
 * [skimmingPlayhead](#skimmingPlayhead)
* Methods - API calls which can only be made on an object returned by a constructor
 * [show](#show)

## API Documentation

### Functions

| [clips](#clips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [clipsUI](#clipsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [deselectAll](#deselectAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [indexOfClip](#indexOfClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectAll](#selectAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClip](#selectClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClipAt](#selectClipAt)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectClipTitled](#selectClipTitled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectedClips](#selectedClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [selectedClipsUI](#selectedClipsUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showClip](#showClip)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [showClipAt](#showClipAt)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:showClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the clip you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sortClips](#sortClips)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.sortClips(a,b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determines if clip A is above clip B or not.                                                                     |
| **Parameters**                              | <ul><li>a - Clip A</li><li>b - Clip B</li></ul> |
| **Returns**                                 | <ul><li>`true` if clip A is above clip B, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.new(app) -> LibrariesFilmstrip`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesFilmstrip` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesFilmstrip` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [playhead](#playhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.playhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries Filmstrip Playhead.                                                                     |

| [skimmingPlayhead](#skimmingPlayhead)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.skimmingPlayhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries Filmstrip Skimming Playhead.                                                                     |

### Methods

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:show() -> LibrariesFilmstrip`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries Filmstrip.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`LibrariesFilmstrip` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

