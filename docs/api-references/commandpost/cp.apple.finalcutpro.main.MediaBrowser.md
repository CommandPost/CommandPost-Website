# cp.apple.finalcutpro.main.MediaBrowser

Media Browser Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [GARAGE_BAND](#garage_band)
 * [ITUNES](#itunes)
 * [LEGACY_TITLE](#legacy_title)
 * [MAX_SECTIONS](#max_sections)
 * [PHOTOS](#photos)
 * [SOUND_EFFECTS](#sound_effects)
 * [TITLE](#title)
* Constructors - API calls which return an object, typically one that offers API methods
 * [MediaBrowser](#mediabrowser)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [group](#group)
 * [isShowing](#isshowing)
 * [mainGroupUI](#maingroupui)
 * [search](#search)
 * [sidebar](#sidebar)
* Methods - API calls which can only be made on an object returned by a constructor
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

## API Documentation

### Constants


### [GARAGE_BAND](#garage_band)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.GARAGE_BAND -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Garage Band ID.                                                                     |

---

### [ITUNES](#itunes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.ITUNES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | iTunes ID.                                                                     |

---

### [LEGACY_TITLE](#legacy_title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.LEGACY_TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.1 and earlier.                                                                     |

---

### [MAX_SECTIONS](#max_sections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.MAX_SECTIONS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum Sections.                                                                     |

---

### [PHOTOS](#photos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.PHOTOS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos ID.                                                                     |

---

### [SOUND_EFFECTS](#sound_effects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.SOUND_EFFECTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Sound Effects ID.                                                                     |

---

### [TITLE](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.2 and later.                                                                     |

---
### Constructors


### [MediaBrowser](#mediabrowser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser(parent) -> MediaBrowser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Browser` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.group <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The group PopUpButton.                                                                     |

---

### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Media Browser is showing.                                                                     |

---

### [mainGroupUI](#maingroupui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.mainGroupUI <cp.prop: hs.axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the main group UI for the Media Browser, or `nil` if not available.                                                                     |

---

### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The search TextField.                                                                     |

---

### [sidebar](#sidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.sidebar <cp.ui.OldTable>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Sidebar `Table`.                                                                     |

---
### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:hide() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hide the Media Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Media Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Media Browser layout settings - created using `cp.apple.finalcutpro.main.MediaBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Media Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Media Browser Layout.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:show() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Media Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showGarageBand](#showgarageband)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showGarageBand() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Garage Band Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showITunes](#showitunes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showITunes() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show iTunes Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showPhotos](#showphotos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showPhotos() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Photos Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSection](#showsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSection(index) -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show a specific section.                                                                     |
| **Parameters**                              | <ul><li>index - The index ID of the section you want to show as a number.</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSidebar](#showsidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSidebar() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Media Browser Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSoundEffects](#showsoundeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSoundEffects() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Sound Effects Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [topCategoriesUI](#topcategoriesui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:topCategoriesUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the Top Categories UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
