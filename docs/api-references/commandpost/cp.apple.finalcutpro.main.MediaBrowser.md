# cp.apple.finalcutpro.main.MediaBrowser

Media Browser Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [GARAGE_BAND](#garage_band)
 * [ITUNES](#itunes)
 * [LEGACY_TITLE](#legacy_title)
 * [MAX_SECTIONS](#max_sections)
 * [PHOTOS](#photos)
 * [SOUND_EFFECTS](#sound_effects)
 * [TITLE](#title)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [MediaBrowser](#mediabrowser)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [group](#group)
 * [isShowing](#isshowing)
 * [mainGroupUI](#maingroupui)
 * [search](#search)
 * [sidebar](#sidebar)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [show](#show)
 * [showGarageBand](#showgarageband)
 * [showITunes](#showitunes)
 * [showPhotos](#showphotos)
 * [showSection](#showsection)
 * [showSidebar](#showsidebar)
 * [showSoundEffects](#showsoundeffects)
 * [topCategoriesUI](#topcategoriesui)


---

## API Documentation

#### Constants


### [GARAGE_BAND](#garage_band)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.GARAGE_BAND -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Garage Band ID.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L46) |

---


### [ITUNES](#itunes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.ITUNES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | iTunes ID.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 51](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L51) |

---


### [LEGACY_TITLE](#legacy_title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.LEGACY_TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.1 and earlier.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 31](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L31) |

---


### [MAX_SECTIONS](#max_sections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.MAX_SECTIONS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum Sections.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L36) |

---


### [PHOTOS](#photos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.PHOTOS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos ID.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L41) |

---


### [SOUND_EFFECTS](#sound_effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.SOUND_EFFECTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Sound Effects ID.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 56](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L56) |

---


### [TITLE](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.2 and later.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L26) |

---

#### Constructors


### [MediaBrowser](#mediabrowser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser(parent) -> MediaBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Browser` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L61) |

---

#### Fields


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.group <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The group PopUpButton.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L157) |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Media Browser is showing.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L80) |

---


### [mainGroupUI](#maingroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.mainGroupUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the main group UI for the Media Browser, or `nil` if not available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 88](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L88) |

---


### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The search TextField.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 166](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L166) |

---


### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.sidebar <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Sidebar `Table`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 148](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L148) |

---

#### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:hide() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide the Media Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L128) |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Media Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Media Browser layout settings - created using `cp.apple.finalcutpro.main.MediaBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 293](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L293) |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Media Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Media Browser Layout.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 274](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L274) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:show() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Media Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L106) |

---


### [showGarageBand](#showgarageband)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showGarageBand() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Garage Band Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 235](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L235) |

---


### [showITunes](#showitunes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showITunes() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show iTunes Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 248](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L248) |

---


### [showPhotos](#showphotos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showPhotos() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Photos Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 222](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L222) |

---


### [showSection](#showsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSection(index) -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show a specific section.                                                                     |
| **Parameters**                              | <ul><li>index - The index ID of the section you want to show as a number.</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 204](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L204) |

---


### [showSidebar](#showsidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSidebar() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Media Browser Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 175](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L175) |

---


### [showSoundEffects](#showsoundeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSoundEffects() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Sound Effects Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 261](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L261) |

---


### [topCategoriesUI](#topcategoriesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:topCategoriesUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the Top Categories UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua line 189](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/MediaBrowser.lua#L189) |

---

