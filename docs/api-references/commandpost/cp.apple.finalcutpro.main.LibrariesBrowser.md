# cp.apple.finalcutpro.main.LibrariesBrowser

Libraries Browser Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [deselectAll](#deselectAll)
 * [indexOfClip](#indexOfClip)
* Constructors - API calls which return an object, typically one that offers API methods
 * [LibrariesBrowser](#LibrariesBrowser)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [clipFiltering](#clipFiltering)
 * [filmstrip](#filmstrip)
 * [isFilmstripView](#isFilmstripView)
 * [isFocused](#isFocused)
 * [isListView](#isListView)
 * [list](#list)
 * [mainGroupUI](#mainGroupUI)
 * [search](#search)
 * [searchToggle](#searchToggle)
 * [toggleViewMode](#toggleViewMode)
* Methods - API calls which can only be made on an object returned by a constructor
 * [clips](#clips)
 * [clipsUI](#clipsUI)
 * [doFindClips](#doFindClips)
 * [doFindClipsTitled](#doFindClipsTitled)
 * [doHide](#doHide)
 * [doOpenClipTitled](#doOpenClipTitled)
 * [doSelectClipTitled](#doSelectClipTitled)
 * [doShow](#doShow)
 * [hide](#hide)
 * [loadLayout](#loadLayout)
 * [openClipTitled](#openClipTitled)
 * [playhead](#playhead)
 * [saveLayout](#saveLayout)
 * [selectAll](#selectAll)
 * [selectClip](#selectClip)
 * [selectClipAt](#selectClipAt)
 * [selectClipTitled](#selectClipTitled)
 * [selectedClips](#selectedClips)
 * [selectedClipsUI](#selectedClipsUI)
 * [selectLibrary](#selectLibrary)
 * [show](#show)
 * [showClip](#showClip)
 * [sidebar](#sidebar)
 * [skimmingPlayhead](#skimmingPlayhead)

## API Documentation

### Functions


### [deselectAll](#deselectAll)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [indexOfClip](#indexOfClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [LibrariesBrowser](#LibrariesBrowser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser(app) -> LibrariesBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesBrowser` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [clipFiltering](#clipFiltering)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.clipFiltering <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Clip Filtering [PopUpButton](cp.ui.PopUpButton.md).                                                                     |

---

### [filmstrip](#filmstrip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.filmstrip <LibrariesFilmstrip>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `LibrariesFilmstrip` object.                                                                     |

---

### [isFilmstripView](#isFilmstripView)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isFilmstripView <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Library Browser is in 'filmstrip view' mode.                                                                     |

---

### [isFocused](#isFocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isFocused <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Libraries Browser is the current focus.                                                                     |

---

### [isListView](#isListView)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isListView <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Library Browser is in 'list view' mode.                                                                     |

---

### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.list <LibrariesList>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [LibrariesList](cp.apple.finalcutpro.main.LibrariesList.md) object.                                                                     |

---

### [mainGroupUI](#mainGroupUI)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.mainGroupUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the main group within the Libraries Browser, or `nil` if not available..                                                                     |

---

### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Search [TextField](cp.ui.TextField.md).                                                                     |

---

### [searchToggle](#searchToggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.searchToggle <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Search Toggle [Button](cp.ui.Button.md).                                                                     |

---

### [toggleViewMode](#toggleViewMode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.toggleViewMode <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Toggle View Mode [Button](cp.ui.Button.md).                                                                     |

---
### Methods


### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [clipsUI](#clipsUI)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doFindClips](#doFindClips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doFindClips(filter) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will send each clip in the Libraries Browser matching the `filter` as an `onNext` signal.                                                                     |
| **Parameters**                              | <ul><li>filter    - a function which receives the [Clip](cp.apple.finalcutpro.content.Clip.md) to check and returns `true` or `false`.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doFindClipsTitled](#doFindClipsTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doFindClipsTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will send each clip in the Libraries Browser with the specified `title` as an `onNext` signal.                                                                     |
| **Parameters**                              | <ul><li>title    - The title string to check for.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doHide](#doHide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will hide the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doOpenClipTitled](#doOpenClipTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doOpenClipTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to open the named clip in the Libraries Browser in the Timeline.                                                                     |
| **Parameters**                              | <ul><li>title      - The title of the clip to open.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doSelectClipTitled](#doSelectClipTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doSelectClipTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will select the first clip with a matching `title`.                                                                     |
| **Parameters**                              | <ul><li>title     - The title to select.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` ready to execute.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doShow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:hide() -> LibrariesBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [loadLayout](#loadLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Libraries Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Libraries Browser layout settings - created using `cp.apple.finalcutpro.main.LibrariesBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [openClipTitled](#openClipTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:openClipTitled(name) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Open a clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the clip you want to open.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:playhead() -> Playhead`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Libraries Browser Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Playhead` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#saveLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Libraries Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Libraries Browser Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectAll](#selectAll)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectClip](#selectClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectClipAt](#selectClipAt)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectClipTitled](#selectClipTitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectedClips](#selectedClips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectedClipsUI](#selectedClipsUI)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectLibrary](#selectLibrary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectLibrary(...) -> Table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a Library.                                                                     |
| **Parameters**                              | <ul><li>... - Libraries as string.</li></ul> |
| **Returns**                                 | <ul><li>A `Table` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:show() -> LibrariesBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showClip](#showClip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.sidebar <cp.apple.finalcutpro.main.LibrariesSidebar>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The  [LibrariesSidebar](cp.apple.finalcutpro.main.LibrariesSidebar.md) Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [skimmingPlayhead](#skimmingPlayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:skimmingPlayhead() -> Playhead`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Libraries Browser Skimming Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Playhead` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
