# cp.apple.finalcutpro.main.LibrariesBrowser

Libraries Browser Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [deselectAll](#deselectall)
 * [indexOfClip](#indexofclip)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [LibrariesBrowser](#librariesbrowser)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [clipFiltering](#clipfiltering)
 * [filmstrip](#filmstrip)
 * [isFilmstripView](#isfilmstripview)
 * [isFocused](#isfocused)
 * [isListView](#islistview)
 * [list](#list)
 * [mainGroupUI](#maingroupui)
 * [search](#search)
 * [searchToggle](#searchtoggle)
 * [toggleViewMode](#toggleviewmode)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [clips](#clips)
 * [clipsUI](#clipsui)
 * [doFindClips](#dofindclips)
 * [doFindClipsTitled](#dofindclipstitled)
 * [doHide](#dohide)
 * [doOpenClipTitled](#doopencliptitled)
 * [doSelectClipTitled](#doselectcliptitled)
 * [doShow](#doshow)
 * [hide](#hide)
 * [loadLayout](#loadlayout)
 * [openClipTitled](#opencliptitled)
 * [playhead](#playhead)
 * [saveLayout](#savelayout)
 * [selectAll](#selectall)
 * [selectClip](#selectclip)
 * [selectClipAt](#selectclipat)
 * [selectClipTitled](#selectcliptitled)
 * [selectedClips](#selectedclips)
 * [selectedClipsUI](#selectedclipsui)
 * [selectLibrary](#selectlibrary)
 * [show](#show)
 * [showClip](#showclip)
 * [sidebar](#sidebar)
 * [skimmingPlayhead](#skimmingplayhead)


---

## API Documentation

#### Functions


### [deselectAll](#deselectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:deselectAll() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Deselect all clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 590](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L590){target="_blank"} |

---


### [indexOfClip](#indexofclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:indexOfClip(clip) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the index of a specific clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to get the index of.</li></ul> |
| **Returns**                                 | <ul><li>The index or `nil` if an error occurs.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 489](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L489){target="_blank"} |

---

#### Constructors


### [LibrariesBrowser](#librariesbrowser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser(app) -> LibrariesBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `LibrariesBrowser` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L47){target="_blank"} |

---

#### Fields


### [clipFiltering](#clipfiltering)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.clipFiltering <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Clip Filtering [PopUpButton](cp.ui.PopUpButton.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 247](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L247){target="_blank"} |

---


### [filmstrip](#filmstrip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.filmstrip <LibrariesFilmstrip>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `LibrariesFilmstrip` object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 269](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L269){target="_blank"} |

---


### [isFilmstripView](#isfilmstripview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isFilmstripView <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Library Browser is in 'filmstrip view' mode.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 96](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L96){target="_blank"} |

---


### [isFocused](#isfocused)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isFocused <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Libraries Browser is the current focus.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L79){target="_blank"} |

---


### [isListView](#islistview)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.isListView <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the Library Browser is in 'list view' mode.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L89){target="_blank"} |

---


### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.list <LibrariesList>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [LibrariesList](cp.apple.finalcutpro.main.LibrariesList.md) object.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 276](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L276){target="_blank"} |

---


### [mainGroupUI](#maingroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.mainGroupUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the main group within the Libraries Browser, or `nil` if not available..                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L67){target="_blank"} |

---


### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Search [TextField](cp.ui.TextField.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 238](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L238){target="_blank"} |

---


### [searchToggle](#searchtoggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.searchToggle <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Search Toggle [Button](cp.ui.Button.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 229](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L229){target="_blank"} |

---


### [toggleViewMode](#toggleviewmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.toggleViewMode <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Toggle View Mode [Button](cp.ui.Button.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 220](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L220){target="_blank"} |

---

#### Methods


### [clips](#clips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:clips(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets clips using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 378](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L378){target="_blank"} |

---


### [clipsUI](#clipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:clipsUI(filterFn) -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets clip UIs using a custom filter.                                                                     |
| **Parameters**                              | <ul><li>filterFn - A function to filter the UI results.</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clip UI could be found.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 359](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L359){target="_blank"} |

---


### [doFindClips](#dofindclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doFindClips(filter) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will send each clip in the Libraries Browser matching the `filter` as an `onNext` signal.                                                                     |
| **Parameters**                              | <ul><li>filter    - a function which receives the [Clip](cp.apple.finalcutpro.content.Clip.md) to check and returns `true` or `false`.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 528](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L528){target="_blank"} |

---


### [doFindClipsTitled](#dofindclipstitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doFindClipsTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will send each clip in the Libraries Browser with the specified `title` as an `onNext` signal.                                                                     |
| **Parameters**                              | <ul><li>title    - The title string to check for.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 541](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L541){target="_blank"} |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will hide the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 161](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L161){target="_blank"} |

---


### [doOpenClipTitled](#doopencliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doOpenClipTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to open the named clip in the Libraries Browser in the Timeline.                                                                     |
| **Parameters**                              | <ul><li>title      - The title of the clip to open.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L340){target="_blank"} |

---


### [doSelectClipTitled](#doselectcliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doSelectClipTitled(title) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) which will select the first clip with a matching `title`.                                                                     |
| **Parameters**                              | <ul><li>title     - The title to select.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` ready to execute.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 554](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L554){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 129](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L129){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:hide() -> LibrariesBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 147](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L147){target="_blank"} |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Libraries Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Libraries Browser layout settings - created using `cp.apple.finalcutpro.main.LibrariesBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 626](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L626){target="_blank"} |

---


### [openClipTitled](#opencliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:openClipTitled(name) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Open a clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the clip you want to open.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 309](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L309){target="_blank"} |

---


### [playhead](#playhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:playhead() -> Playhead`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Libraries Browser Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Playhead` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 180](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L180){target="_blank"} |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Libraries Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Libraries Browser Layout.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 607](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L607){target="_blank"} |

---


### [selectAll](#selectall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectAll([clips]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select all clips.                                                                     |
| **Parameters**                              | <ul><li>clips - A optional table of `Clip` objects.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 573](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L573){target="_blank"} |

---


### [selectClip](#selectclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClip(clip) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to select.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 452](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L452){target="_blank"} |

---


### [selectClipAt](#selectclipat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClipAt(index) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select clip at a specific index.                                                                     |
| **Parameters**                              | <ul><li>index - A number of where the clip appears in the list.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 472](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L472){target="_blank"} |

---


### [selectClipTitled](#selectcliptitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectClipTitled(title) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Select clip with a specific title.                                                                     |
| **Parameters**                              | <ul><li>title - The title of a clip.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 506](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L506){target="_blank"} |

---


### [selectedClips](#selectedclips)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectedClips() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets selected clips.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `Clip` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 416](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L416){target="_blank"} |

---


### [selectedClipsUI](#selectedclipsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectedClipsUI() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets selected clips UI's.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of `axuielementObject` objects or `nil` if no clips are selected.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 397](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L397){target="_blank"} |

---


### [selectLibrary](#selectlibrary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:selectLibrary(...) -> Table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a Library.                                                                     |
| **Parameters**                              | <ul><li>... - Libraries as string.</li></ul> |
| **Returns**                                 | <ul><li>A `Table` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 296](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L296){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:show() -> LibrariesBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Libraries Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 109](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L109){target="_blank"} |

---


### [showClip](#showclip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:showClip(clip) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows a clip.                                                                     |
| **Parameters**                              | <ul><li>clip - The `Clip` you want to show.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 435](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L435){target="_blank"} |

---


### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser.sidebar <cp.apple.finalcutpro.main.LibrariesSidebar>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The  [LibrariesSidebar](cp.apple.finalcutpro.main.LibrariesSidebar.md) Table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 283](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L283){target="_blank"} |

---


### [skimmingPlayhead](#skimmingplayhead)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.LibrariesBrowser:skimmingPlayhead() -> Playhead`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Libraries Browser Skimming Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Playhead` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua line 197](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/LibrariesBrowser.lua#L197){target="_blank"} |

---

