# cp.blackmagic.resolve

The Blackmagic DaVinci Resolve Extension.

---

## Submodules
 * [cp.blackmagic.resolve.app](cp.blackmagic.resolve.app.md)
 * [cp.blackmagic.resolve.color](cp.blackmagic.resolve.color.md)
 * [cp.blackmagic.resolve.main](cp.blackmagic.resolve.main.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)
 * [preferences](#preferences)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [Color](#color)
 * [currentLocale](#currentlocale)
 * [isFrontmost](#isfrontmost)
 * [isInstalled](#isinstalled)
 * [isModalDialogOpen](#ismodaldialogopen)
 * [isRunning](#isrunning)
 * [isShowing](#isshowing)
 * [isSupported](#issupported)
 * [isUnsupported](#isunsupported)
 * [primaryWindow](#primarywindow)
 * [supportedLocales](#supportedlocales)
 * [UI](#ui)
 * [version](#version)
 * [versionString](#versionstring)
 * [windowsUI](#windowsui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bundleID](#bundleid)
 * [doHide](#dohide)
 * [doLaunch](#dolaunch)
 * [doQuit](#doquit)
 * [doRestart](#dorestart)
 * [doShow](#doshow)
 * [getPath](#getpath)
 * [hide](#hide)
 * [launch](#launch)
 * [notifier](#notifier)
 * [quit](#quit)
 * [show](#show)


---

## API Documentation

#### Constants


### [EARLIEST_SUPPORTED_VERSION](#earliest_supported_version)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.EARLIEST_SUPPORTED_VERSION <semver>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The earliest version this API supports.                                                                     |
| **Notes**                                   | - None |

---


### [preferences](#preferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.preferences <cp.app.prefs>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The `cp.app.prefs` for DaVinci Resolve.                                                                     |
| **Notes**                                   | - None |

---

#### Fields


### [Color](#color)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.Color <cp.blackmagic.resolve.Color>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Color Workspace.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the Browser</li></ul>          |
| **Notes**                                   | - None |

---


### [currentLocale](#currentlocale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.currentLocale <cp.prop: cp.i18n.localeID; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets and sets the current locale for FCPX.                                                                     |
| **Notes**                                   | - None |

---


### [isFrontmost](#isfrontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:isFrontmost <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is DaVinci Resolve Frontmost?                                                                     |
| **Notes**                                   | - None |

---


### [isInstalled](#isinstalled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.isInstalled <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is any version of DaVinci Resolve Installed?                                                                     |
| **Notes**                                   | - None |

---


### [isModalDialogOpen](#ismodaldialogopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:isModalDialogOpen <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is a modal dialog currently open?                                                                     |
| **Notes**                                   | - None |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.isRunning <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is DaVinci Resolve Running?                                                                     |
| **Notes**                                   | - None |

---


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.isShowing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is Final Cut visible on screen?                                                                     |
| **Notes**                                   | - None |

---


### [isSupported](#issupported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.isSupported <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is a supported version of DaVinci Resolve installed?                                                                     |
| **Notes**                                   | <ul><li>Supported version refers to any version of DaVinci Resolve equal or higher to `cp.blackmagic.resolve.EARLIEST_SUPPORTED_VERSION`</li></ul> |

---


### [isUnsupported](#isunsupported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.isUnsupported <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is an unsupported version of DaVinci Resolve installed?                                                                     |
| **Notes**                                   | <ul><li>Supported version refers to any version of DaVinci Resolve equal or higher to cp.blackmagic.resolve.EARLIEST_SUPPORTED_VERSION</li></ul> |

---


### [primaryWindow](#primarywindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.primaryWindow <PrimaryWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The DaVinci Resolve Primary Window.                                                                     |
| **Notes**                                   | - None |

---


### [supportedLocales](#supportedlocales)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.supportedLocales <cp.prop: table of cp.i18n.localeID; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of supported locales for this version of FCPX.                                                                     |
| **Notes**                                   | - None |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.UI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The DaVinci Resolve `axuielement`, if available.                                                                     |
| **Notes**                                   | - None |

---


### [version](#version)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.version <cp.prop: semver; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The version number of the running or default installation of FCPX as a `semver`.                                                                     |
| **Notes**                                   | - None |

---


### [versionString](#versionstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.versionString <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The version number of the running or default installation of FCPX as a `string`.                                                                     |
| **Notes**                                   | - None |

---


### [windowsUI](#windowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve.windowsUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI containing the list of windows in the app.                                                                     |
| **Notes**                                   | - None |

---

#### Methods


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:bundleID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Bundle ID for the app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Bundle ID</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will hide the FCP.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doLaunch](#dolaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:doLaunch() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will launch, or focus it if already running FCP.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doQuit](#doquit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:doQuit() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will quit FCP.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doRestart](#dorestart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:doRestart() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.cp) that will restart DaVinci Resolve, if it is running. If not, nothing happens.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>The FCP instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show FCP on-screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getPath](#getpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:getPath() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Path to DaVinci Resolve Application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing DaVinci Resolve's filesystem path, or nil if DaVinci Resolve's path could not be determined.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides DaVinci Resolve                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The FCP instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [launch](#launch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:launch([waitSeconds], [path]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Launches DaVinci Resolve, or brings it to the front if it was already running.                                                                     |
| **Parameters**                              | <ul><li>`waitSeconds` - If provided, the number of seconds to wait until the launch completes. If `nil`, it will return immediately.</li><li>`path`        - An optional full path to an application without an extension (i.e `/Applications/DaVinci Resolve 10.3.4`). This allows you to load previous versions of the application.</li></ul> |
| **Returns**                                 | <ul><li>The FCP instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [notifier](#notifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a notifier that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [quit](#quit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:quit([waitSeconds]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Quits DaVinci Resolve, if it's running.                                                                     |
| **Parameters**                              | <ul><li>waitSeconds      - The number of seconds to wait for the quit to complete.</li></ul> |
| **Returns**                                 | <ul><li>The FCP instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.blackmagic.resolve:show() -> cp.blackmagic.resolve`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Activate DaVinci Resolve, if it is running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The FCP instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

