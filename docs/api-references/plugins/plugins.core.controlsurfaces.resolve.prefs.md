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
| **Notes**                                   | - None |

---


### [displayMessageWhenChangingBanks](#displaymessagewhenchangingbanks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.displayMessageWhenChangingBanks <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Display a message when changing banks?                                                                     |
| **Notes**                                   | - None |

---


### [lastDevice](#lastdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastDevice <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Device used in the Preferences Panel.                                                                     |
| **Notes**                                   | - None |

---


### [lastExportPath](#lastexportpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastExportPath <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Export path.                                                                     |
| **Notes**                                   | - None |

---


### [lastImportPath](#lastimportpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastImportPath <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Import path.                                                                     |
| **Notes**                                   | - None |

---


### [lastUnit](#lastunit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.lastUnit <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Last Unit used in the Preferences Panel.                                                                     |
| **Notes**                                   | - None |

---


### [pasteboard](#pasteboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.pasteboard <cp.prop: table>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Pasteboard                                                                     |
| **Notes**                                   | - None |

---


### [snippetsRefreshFrequency](#snippetsrefreshfrequency)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.controlsurfaces.resolve.prefs.snippetsRefreshFrequency <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | How often snippets are refreshed.                                                                     |
| **Notes**                                   | - None |

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
| **Notes**                                   | <ul></ul> |

---

