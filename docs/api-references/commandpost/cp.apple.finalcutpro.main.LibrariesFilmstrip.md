# cp.apple.finalcutpro.main.LibrariesFilmstrip

Libraries Filmstrip Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [clips](#clips)
 * [clipsUI](#clipsui)
 * [deselectAll](#deselectall)
 * [indexOfClip](#indexofclip)
 * [selectAll](#selectall)
 * [selectClip](#selectclip)
 * [selectClipAt](#selectclipat)
 * [selectClipTitled](#selectcliptitled)
 * [selectedClips](#selectedclips)
 * [selectedClipsUI](#selectedclipsui)
 * [showClip](#showclip)
 * [showClipAt](#showclipat)
 * [sortClips](#sortclips)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [playhead](#playhead)
 * [skimmingPlayhead](#skimmingplayhead)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [show](#show)


---

## API Documentation

#### Functions


### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 191](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L191){target="_blank"} |

---


### [clipsUI](#clipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 167](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L167){target="_blank"} |

---


### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 407](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L407){target="_blank"} |

---


### [indexOfClip](#indexofclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 347](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L347){target="_blank"} |

---


### [selectAll](#selectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 387](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L387){target="_blank"} |

---


### [selectClip](#selectclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 307](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L307){target="_blank"} |

---


### [selectClipAt](#selectclipat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 330](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L330){target="_blank"} |

---


### [selectClipTitled](#selectcliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 368](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L368){target="_blank"} |

---


### [selectedClips](#selectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L234){target="_blank"} |

---


### [selectedClipsUI](#selectedclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L211){target="_blank"} |

---


### [showClip](#showclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 247](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L247){target="_blank"} |

---


### [showClipAt](#showclipat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:showClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the clip you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 290](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L290){target="_blank"} |

---


### [sortClips](#sortclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.sortClips(a,b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Determines if clip A is above clip B or not.                                                                     |
| **Parameters**                              | <ul><li>a - Clip A</li><li>b - Clip B</li></ul> |
| **Returns**                                 | <ul><li>`true` if clip A is above clip B, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L115){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.new(app) -> LibrariesFilmstrip`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesFilmstrip` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesFilmstrip` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L37){target="_blank"} |

---

#### Fields


### [playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.playhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries Filmstrip Playhead.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 95](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L95){target="_blank"} |

---


### [skimmingPlayhead](#skimmingplayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip.skimmingPlayhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries Filmstrip Skimming Playhead.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L102){target="_blank"} |

---

#### Methods


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesFilmstrip:show() -> LibrariesFilmstrip`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries Filmstrip.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`LibrariesFilmstrip` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua line 73](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesFilmstrip.lua#L73){target="_blank"} |

---

