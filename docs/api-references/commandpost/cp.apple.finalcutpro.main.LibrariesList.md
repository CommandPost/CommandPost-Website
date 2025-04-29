# cp.apple.finalcutpro.main.LibrariesList

Libraries List Module.

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

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [LibrariesList](#librarieslist)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contents](#contents)
 * [isFocused](#isfocused)
 * [isShowing](#isshowing)
 * [playerUI](#playerui)
 * [playhead](#playhead)
 * [skimmingPlayhead](#skimmingplayhead)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [columns](#columns)
 * [show](#show)


---

## API Documentation

#### Functions


### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 229](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L229) |

---


### [clipsUI](#clipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 169](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L169) |

---


### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 389](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L389) |

---


### [indexOfClip](#indexofclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 331](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L331) |

---


### [selectAll](#selectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 371](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L371) |

---


### [selectClip](#selectclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 293](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L293) |

---


### [selectClipAt](#selectclipat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 313](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L313) |

---


### [selectClipTitled](#selectcliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 352](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L352) |

---


### [selectedClips](#selectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 260](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L260) |

---


### [selectedClipsUI](#selectedclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 247](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L247) |

---


### [showClip](#showclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 273](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L273) |

---

#### Constructors


### [LibrariesList](#librarieslist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList(app) -> LibrariesList`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesList` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesList` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 43](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L43) |

---

#### Fields


### [contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.contents <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries List Contents UI.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L160) |

---


### [isFocused](#isfocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.isFocused <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Libraries List is currently focused within FCPX.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 90](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L90) |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Libraries List is showing on screen.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L83) |

---


### [playerUI](#playerui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.playerUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` for the player section of the Libraries List UI.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L72) |

---


### [playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.playhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Libraries List Playhead.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 140](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L140) |

---


### [skimmingPlayhead](#skimmingplayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList.skimmingPlayhead <Playhead>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | the Libraries List Skimming Playhead.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L147) |

---

#### Methods


### [columns](#columns)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:columns() -> Columns`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the List View Columns object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Columns` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L100) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesList:show() -> LibrariesList`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries List.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`LibrariesList` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua line 119](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesList.lua#L119) |

---

