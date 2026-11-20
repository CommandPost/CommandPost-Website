# plugins.core.controlsurfaces.resolve.prefs

Blackmagic DaVinci Resolve Control Surface Preferences Panel

---

## API Overview
**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [changeBankOnHardwareWhenChangingHere](#changebankonhardwarewhenchanginghere)
 * [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)
 * [lastDevice](#lastdevice)
 * [lastExportPath](#lastexportpath)
 * [lastImportPath](#lastimportpath)
 * [lastUnit](#lastunit)
 * [pasteboard](#pasteboard)
 * [snippetsRefreshFrequency](#snippetsrefreshfrequency)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [setItem](#setitem)


---

## API Documentation

#### Fields


### [changeBankOnHardwareWhenChangingHere](#changebankonhardwarewhenchanginghere)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.changeBankOnHardwareWhenChangingHere <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Should we change bank on hardware when changing in preferences?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 82](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L82) |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display a message when changing banks?                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 121](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L121) |

---


### [lastDevice](#lastdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastDevice <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Device used in the Preferences Panel.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L67) |

---


### [lastExportPath](#lastexportpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastExportPath <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Export path.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L57) |

---


### [lastImportPath](#lastimportpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastImportPath <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Import path.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 62](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L62) |

---


### [lastUnit](#lastunit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastUnit <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Unit used in the Preferences Panel.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L77) |

---


### [pasteboard](#pasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.pasteboard <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Pasteboard                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 52](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L52) |

---


### [snippetsRefreshFrequency](#snippetsrefreshfrequency)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.snippetsRefreshFrequency <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | How often snippets are refreshed.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/manager/init.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/manager/init.lua#L126) |

---

#### Methods


### [setItem](#setitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.setItem(app, bank, button, key, [value]) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Update the Speed Editor layout file.                                                                     |
| **Parameters**                              | <ul><li>app - The application bundle ID as a string</li><li>bank - The bank ID as a string</li><li>button - The button ID as a string</li><li>key - The key as a string or a table if replacing the entire button contents</li><li>value - The optional value</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/core/controlsurfaces/resolve/prefs/init.lua line 486](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/core/controlsurfaces/resolve/prefs/init.lua#L486) |

---

