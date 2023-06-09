# cp.apple.finalcutpro.main.MediaBrowser

Media Browser Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [GARAGE_BAND](#GARAGE_BAND)
 * [ITUNES](#ITUNES)
 * [LEGACY_TITLE](#LEGACY_TITLE)
 * [MAX_SECTIONS](#MAX_SECTIONS)
 * [PHOTOS](#PHOTOS)
 * [SOUND_EFFECTS](#SOUND_EFFECTS)
 * [TITLE](#TITLE)
* Constructors - API calls which return an object, typically one that offers API methods
 * [MediaBrowser](#MediaBrowser)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [group](#group)
 * [isShowing](#isShowing)
 * [mainGroupUI](#mainGroupUI)
 * [search](#search)
 * [sidebar](#sidebar)
* Methods - API calls which can only be made on an object returned by a constructor
 * [hide](#hide)
 * [loadLayout](#loadLayout)
 * [saveLayout](#saveLayout)
 * [show](#show)
 * [showGarageBand](#showGarageBand)
 * [showITunes](#showITunes)
 * [showPhotos](#showPhotos)
 * [showSection](#showSection)
 * [showSidebar](#showSidebar)
 * [showSoundEffects](#showSoundEffects)
 * [topCategoriesUI](#topCategoriesUI)

## API Documentation

### Constants


### [GARAGE_BAND](#GARAGE_BAND)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.GARAGE_BAND -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Garage Band ID.                                                                     |

---

### [ITUNES](#ITUNES)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.ITUNES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | iTunes ID.                                                                     |

---

### [LEGACY_TITLE](#LEGACY_TITLE)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.LEGACY_TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.1 and earlier.                                                                     |

---

### [MAX_SECTIONS](#MAX_SECTIONS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.MAX_SECTIONS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Maximum Sections.                                                                     |

---

### [PHOTOS](#PHOTOS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.PHOTOS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos ID.                                                                     |

---

### [SOUND_EFFECTS](#SOUND_EFFECTS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.SOUND_EFFECTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Sound Effects ID.                                                                     |

---

### [TITLE](#TITLE)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.TITLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Photos & Audio Title in v10.6.2 and later.                                                                     |

---
### Constructors


### [MediaBrowser](#MediaBrowser)

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

### [isShowing](#isShowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser.isShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the Media Browser is showing.                                                                     |

---

### [mainGroupUI](#mainGroupUI)

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

### [loadLayout](#loadLayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Media Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Media Browser layout settings - created using `cp.apple.finalcutpro.main.MediaBrowser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveLayout](#saveLayout)

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

### [showGarageBand](#showGarageBand)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showGarageBand() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Garage Band Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showITunes](#showITunes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showITunes() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show iTunes Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showPhotos](#showPhotos)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showPhotos() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Photos Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSection](#showSection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSection(index) -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show a specific section.                                                                     |
| **Parameters**                              | <ul><li>index - The index ID of the section you want to show as a number.</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSidebar](#showSidebar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSidebar() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show the Media Browser Sidebar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [showSoundEffects](#showSoundEffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:showSoundEffects() -> MediaBrowser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Sound Effects Section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`MediaBrowser` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [topCategoriesUI](#topCategoriesUI)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.MediaBrowser:topCategoriesUI() -> axuielementObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the Top Categories UI.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`axuielementObject` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
