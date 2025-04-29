# cp.apple.finalcutpro.prefs.PreferencesWindow

Preferences Window Module.

---

## API Overview
**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [editingPanel](#editingpanel)
 * [generalPanel](#generalpanel)
 * [importPanel](#importpanel)
 * [playbackPanel](#playbackpanel)
 * [title](#title)
 * [toolbar](#toolbar)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doHide](#dohide)
 * [doShow](#doshow)
 * [hide](#hide)
 * [show](#show)


---

## API Documentation

#### Fields


### [editingPanel](#editingpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.editingPanel <EditingPanel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `EditingPanel` for the Preferences Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 79](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L79) |

---


### [generalPanel](#generalpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.generalPanel <GeneralPanel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `GeneralPanel` for the Preferences Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L72) |

---


### [importPanel](#importpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.importPanel <ImportPanel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `ImportPanel` for the Preferences Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L93) |

---


### [playbackPanel](#playbackpanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.playbackPanel <PlaybackPanel>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `PlaybackPanel` for the Preferences Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 86](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L86) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.title <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `StaticText` for the Preferences Window title.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 50](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L50) |

---


### [toolbar](#toolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow.toolbar <cp.ui.Toolbar>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Toolbar` for the Preferences Window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L61) |

---

#### Methods


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to hide the Preferences window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L157) |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that attempts to show the Preferences window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L121) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow:hide() -> PreferencesWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to hide the Preferences window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `PreferencesWindow`, for chaining.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 138](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L138) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.prefs.PreferencesWindow:show() -> PreferencesWindow`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to show the Preferences window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The same `PreferencesWindow`, for chaining.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua line 100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/prefs/PreferencesWindow.lua#L100) |

---

