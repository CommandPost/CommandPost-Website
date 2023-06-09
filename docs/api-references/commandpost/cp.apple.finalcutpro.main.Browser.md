# cp.apple.finalcutpro.main.Browser

Browser Module.

---

## Submodules
 * [cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover](cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Browser](#browser)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [generators](#generators)
 * [generatorsShowing](#generatorsshowing)
 * [isOnPrimary](#isonprimary)
 * [isOnSecondary](#isonsecondary)
 * [libraries](#libraries)
 * [librariesShowing](#librariesshowing)
 * [markerPopover](#markerpopover)
 * [media](#media)
 * [mediaShowing](#mediashowing)
 * [showGenerators](#showgenerators)
 * [showLibraries](#showlibraries)
 * [showMedia](#showmedia)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [appearanceAndFiltering](#appearanceandfiltering)
 * [doHide](#dohide)
 * [doShow](#doshow)
 * [doShowOnPrimary](#doshowonprimary)
 * [doShowOnSecondary](#doshowonsecondary)
 * [hide](#hide)
 * [loadLayout](#loadlayout)
 * [saveLayout](#savelayout)
 * [showOnPrimary](#showonprimary)
 * [showOnSecondary](#showonsecondary)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [Browser](#browser)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser(app) -> Browser`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Browser` instance.                                                                     |
| **Parameters**                              | <ul><li>app - The Final Cut Pro app instance.</li></ul> |
| **Returns**                                 | <ul><li>The new `Browser`.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [generators](#generators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.generators <cp.apple.finalcutpro.main.GeneratorsBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Generators Browser object.                                                                     |
| **Notes**                                   | - None |

---


### [generatorsShowing](#generatorsshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.generatorsShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the 'Generators' button active, and thus showing?                                                                     |
| **Notes**                                   | - None |

---


### [isOnPrimary](#isonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.isOnPrimary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the Browser on the Primary Window?                                                                     |
| **Notes**                                   | - None |

---


### [isOnSecondary](#isonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.isOnSecondary <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the Browser on the Secondary Window?                                                                     |
| **Notes**                                   | - None |

---


### [libraries](#libraries)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.libraries <cp.apple.finalcutpro.main.LibrariesBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [module](package.module.md) object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `LibrariesBrowser` object.</li></ul>          |
| **Notes**                                   | - None |

---


### [librariesShowing](#librariesshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.librariesShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the 'Libraries' button active, and thus showing?                                                                     |
| **Notes**                                   | - None |

---


### [markerPopover](#markerpopover)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.markerPopover <BrowserMarkerPopover>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Browser Marker Popover object.                                                                     |
| **Notes**                                   | - None |

---


### [media](#media)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.media <cp.apple.finalcutpro.main.MediaBrowser>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Media Browser object.                                                                     |
| **Notes**                                   | - None |

---


### [mediaShowing](#mediashowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.mediaShowing <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the 'Media' button active, and thus showing?                                                                     |
| **Notes**                                   | - None |

---


### [showGenerators](#showgenerators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.showGenerators <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The CheckBox indicating if the Generators Browser is showing.                                                                     |
| **Notes**                                   | - None |

---


### [showLibraries](#showlibraries)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.showLibraries <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if Libraries is showing, and can be clicked to toggle.                                                                     |
| **Notes**                                   | - None |

---


### [showMedia](#showmedia)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.showMedia <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | CheckBox indicating if the  Media Browser is showing.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [appearanceAndFiltering](#appearanceandfiltering)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.appearanceAndFiltering <cp.apple.finalcutpro.main.AppearanceAndFiltering>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The Clip [AppearanceAndFiltering](cp.apple.finalcutpro.main.AppearanceAndFiltering.md) Menu Popover                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will hide the Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will ensure the Browser is showing. If it's currently showing on the Secondary Screen it will stay there, otherwise it will get shown on the Primary Screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShowOnPrimary](#doshowonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:doShowOnPrimary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Browser on Primary Screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShowOnSecondary](#doshowonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:doShowOnSecondary() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Browser on Secondary Screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:hide() -> Browser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Browser.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Browser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [loadLayout](#loadlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:loadLayout(layout) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads a Browser layout.                                                                     |
| **Parameters**                              | <ul><li>layout - A table containing the Browser layout settings - created using `cp.apple.finalcutpro.main.Browser:saveLayout()`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [saveLayout](#savelayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:saveLayout() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Saves the current Browser layout to a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the current Browser Layout.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [showOnPrimary](#showonprimary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:showOnPrimary() -> Browser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Browser on Primary Screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Browser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [showOnSecondary](#showonsecondary)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser:showOnSecondary() -> Browser`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Show Browser on Secondary Screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Browser` object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

