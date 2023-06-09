# cp.app

This class assists with working with macOS apps. It provides functions for
finding, checking the running status, version number, path, and many other
values related to an application. It also provides support for launching,
quitting, and other activities related to applications.

This extension differs from the `hs.application` extension in several ways:
 * `cp.app` instances are long-lived. You request it once and it will stay up-to-date even if the app quits.
 * It makes extensive use of `cp.prop`, so you can `watch` many most properties of the app and get live notifications when they change.

---

## Submodules
 * [cp.app.menu](cp.app.menu.md)
 * [cp.app.prefs](cp.app.prefs.md)

---

## API Overview
**Variables** - _Configurable values_
 * [frontmostApp](#frontmostapp)

**Functions** - _API calls offered directly by the extension_
 * [apps](#apps)
 * [bundleIDs](#bundleids)
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [forBundleID](#forbundleid)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [baseLocale](#baselocale)
 * [baseResourcesPath](#baseresourcespath)
 * [currentLocale](#currentlocale)
 * [description](#description)
 * [displayName](#displayname)
 * [focusedWindow](#focusedwindow)
 * [focusedWindowUI](#focusedwindowui)
 * [frontmost](#frontmost)
 * [hsApplication](#hsapplication)
 * [info](#info)
 * [installed](#installed)
 * [isWindowAnimationEnabled](#iswindowanimationenabled)
 * [localeResourcesPath](#localeresourcespath)
 * [mainWindowUI](#mainwindowui)
 * [modalDialogOpen](#modaldialogopen)
 * [path](#path)
 * [pid](#pid)
 * [preferences](#preferences)
 * [resourcesPath](#resourcespath)
 * [running](#running)
 * [showing](#showing)
 * [supportedLocales](#supportedlocales)
 * [UI](#ui)
 * [version](#version)
 * [versionString](#versionstring)
 * [windows](#windows)
 * [windowsUI](#windowsui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bestSupportedLocale](#bestsupportedlocale)
 * [bundleID](#bundleid)
 * [doHide](#dohide)
 * [doLaunch](#dolaunch)
 * [doQuit](#doquit)
 * [doRestart](#dorestart)
 * [doShow](#doshow)
 * [hide](#hide)
 * [icon](#icon)
 * [isSupportedLocale](#issupportedlocale)
 * [keyStroke](#keystroke)
 * [launch](#launch)
 * [notifier](#notifier)
 * [quit](#quit)
 * [registerWindowType](#registerwindowtype)
 * [searchResources](#searchresources)
 * [show](#show)
 * [update](#update)


---

## API Documentation

#### Variables


### [frontmostApp](#frontmostapp)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.frontmostApp <cp.prop: cp.app; read-only; live>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Returns the most recent 'registered' app that was active, other than CommandPost itself.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 127](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L127){target="_blank"} |

---

#### Functions


### [apps](#apps)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.apps() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of all apps that have been requested via [forBundleID](#forBundleID), in no particular order.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of `cp.app` instances.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 108](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L108){target="_blank"} |

---


### [bundleIDs](#bundleids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.bundleIDs() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of Bundle IDs which have been requested via [forBundleID](#forBundleID).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A list of Bundle IDs.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 91](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L91){target="_blank"} |

---


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the provided `thing` is a `cp.app` instance.                                                                     |
| **Parameters**                              | <ul><li>thing        - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `cp.app` instance, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L78){target="_blank"} |

---

#### Constructors


### [forBundleID](#forbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.forBundleID(bundleID)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the `cp.app` for the specified Bundle ID. If the app has already been created, the same instance of `cp.app` will be returned on subsequent calls.                                                                     |
| **Parameters**                              | <ul><li>bundleID      - The application bundle ID to find the app for.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` for the bundle.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 153](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L153){target="_blank"} |

---

#### Fields


### [baseLocale](#baselocale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.baseLocale <cp.prop: cp.i18n.localeID; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the [localeID](cp.i18n.localeID.md) of the development region. This is the 'Base' locale for I18N.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 603](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L603){target="_blank"} |

---


### [baseResourcesPath](#baseresourcespath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.baseResourcesPath <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [prop](cp.prop.md) for the file path to the `Content/Resources/Base.lproj` folder                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 740](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L740){target="_blank"} |

---


### [currentLocale](#currentlocale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.currentLocale <cp.prop: cp.i18n.localeID; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets and sets the current locale for the application.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 647](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L647){target="_blank"} |

---


### [description](#description)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.description -> string`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the short description of the class as "cp.app: <bundleID>"                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1048](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1048){target="_blank"} |

---


### [displayName](#displayname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.displayName <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The application display name as a string.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 586](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L586){target="_blank"} |

---


### [focusedWindow](#focusedwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.focusedWindow <cp.prop: cp.ui.Window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The currently-focused [Window](cp.ui.Window.md). This may be a subclass of `Window` if                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 452](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L452){target="_blank"} |

---


### [focusedWindowUI](#focusedwindowui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.focusedWindowUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI containing the currently-focused window for the app.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 462](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L462){target="_blank"} |

---


### [frontmost](#frontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.frontmost <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the application currently frontmost?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 312](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L312){target="_blank"} |

---


### [hsApplication](#hsapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.hsApplication <cp.prop: hs.application; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the running `hs.application` for the application, or `nil` if it's not running.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 245](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L245){target="_blank"} |

---


### [info](#info)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.info <cp.prop: table; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The info table for the application, if available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 533](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L533){target="_blank"} |

---


### [installed](#installed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.installed <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the application currently installed.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 596](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L596){target="_blank"} |

---


### [isWindowAnimationEnabled](#iswindowanimationenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.isWindowAnimationEnabled <cp.prop: bool; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [prop](cp.prop.md) that determines if window animations (eg. popups, etc.) are enabled for the                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 771](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L771){target="_blank"} |

---


### [localeResourcesPath](#localeresourcespath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.localeResourcesPath <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [prop](cp.prop.md) for the file path to the locale-specific resources                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 751](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L751){target="_blank"} |

---


### [mainWindowUI](#mainwindowui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.mainWindowUI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI containing the currently-focused window for the app.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 481](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L481){target="_blank"} |

---


### [modalDialogOpen](#modaldialogopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.modalDialogOpen <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if a modal dialog window is currently opon.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 491](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L491){target="_blank"} |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.path <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Path to the application, or `nil` if not found.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 504](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L504){target="_blank"} |

---


### [pid](#pid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.pid <cp.prop: number; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the PID for the currently-running application, or `nil` if it's not running.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 267](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L267){target="_blank"} |

---


### [preferences](#preferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.preferences <cp.app.prefs>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current [preferences](cp.app.prefs.md) for the application.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 238](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L238){target="_blank"} |

---


### [resourcesPath](#resourcespath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.resourcesPath <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A [prop](cp.prop.md) for the file path to the `Contents/Resources` folder inside the app.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 730](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L730){target="_blank"} |

---


### [running](#running)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.running <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Checks if the application currently is running.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 277](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L277){target="_blank"} |

---


### [showing](#showing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.showing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is the app visible on screen?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 299](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L299){target="_blank"} |

---


### [supportedLocales](#supportedlocales)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.supportedLocales <cp.prop: table of cp.i18n.localeID; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a list of `cp.i18n.localeID` values for locales that are supported by this app.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 614](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L614){target="_blank"} |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.UI <cp.prop: hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the application's `axuielement`, if available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 287](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L287){target="_blank"} |

---


### [version](#version)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.version <cp.prop: semver; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The application version as a [semver](https://github.com/kikito/semver.lua).                                                                     |
| **Notes**                                   | <ul><li>If the application is running it will get the version of the active application as a string, otherwise, it will use `hs.application.infoForBundleID()` to find the version.</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 573](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L573){target="_blank"} |

---


### [versionString](#versionstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.versionString <cp.prop: string; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The application version as a `string`.                                                                     |
| **Notes**                                   | <ul><li>If the application is running it will get the version of the active application as a string, otherwise, it will use `hs.application.infoForBundleID()` to find the version.</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 560](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L560){target="_blank"} |

---


### [windows](#windows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.windows <cp.prop: table of cp.ui.Window; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns a list containing the [Window](cp.ui.Window.md) instances currently available.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 418](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L418){target="_blank"} |

---


### [windowsUI](#windowsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.windowsUI <cp.prop: table of hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the UI containing the list of windows in the app.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 432](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L432){target="_blank"} |

---

#### Methods


### [bestSupportedLocale](#bestsupportedlocale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:bestSupportedLocale(locale) -> cp.i18n.localeID or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the closest match for the specified locale. The returned locale will be in the same language as the provided locale, and as close a match as possible with the region and script.                                                                     |
| **Parameters**                              | <ul><li>locale    - The local to match</li></ul> |
| **Returns**                                 | <ul><li>The closest supported locale or `nil` if none are available in the language.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1105){target="_blank"} |

---


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:bundleID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the Bundle ID for the app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Bundle ID.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L198){target="_blank"} |

---


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:doHide() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will hide the app if it's currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement`, resolving to `true` if the app is running and was successfully hidden, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1017](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1017){target="_blank"} |

---


### [doLaunch](#dolaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:doLaunch([waitSeconds[, path]]) -> cp.rx.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that can be run to launch or focus the current app. It will resolve to `true` when the app was launched.                                                                     |
| **Parameters**                              | <ul><li>waitSeconds - (optional) The number of seconds to wait for it to load. Defaults to 30 seconds.</li><li>path - (optional) The alternate path of the app to launch.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` after the app is frontmost.</li></ul>          |
| **Notes**                                   | <ul><li>By default the `Statement` will time out after 30 seconds, sending an error signal.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 823](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L823){target="_blank"} |

---


### [doQuit](#doquit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:doQuit() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that will attempt to quit the app when executed.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the app was running and was quit successfully, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>The Statement will time out after 60 seconds by default. This can be changed by calling the `TimeoutAfter` method on the Statement before executing.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 895](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L895){target="_blank"} |

---


### [doRestart](#dorestart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:doRestart() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will attempt to restart the app. If the app was not running at the time, no action is taken and `false` is returned. If it was running then the app will be attempted to quit then restarted.                                                                     |
| **Parameters**                              | <ul><li>None.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the app was running and was quit and restarted successfully, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>The Statement will time out after 60 seconds by default. This can be changed by calling the `TimeoutAfter` method on the Statement before executing.</li><li>If you have multiple versions of the same app on your system, this will restart with the same version that was running when the restart was requested.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 918](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L918){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:doShow() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` which will show the app if it's currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Statement`, resolving to `true` if the app is running and was successfully shown, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 977](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L977){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:hide() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the application, if it's currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1000](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1000){target="_blank"} |

---


### [icon](#icon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:icon() -> image`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the application icon as a `hs.image`                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The icon as a `hs.image` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 211](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L211){target="_blank"} |

---


### [isSupportedLocale](#issupportedlocale)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:isSupportedLocale(locale) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the specified locale is supported. The `locale` can be either a string with the locale code (eg. "en_AU") or a `cp.i18n.localeID`.                                                                     |
| **Parameters**                              | <ul><li>locale    - The locale code string or `localeID` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is supported, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1083](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1083){target="_blank"} |

---


### [keyStroke](#keystroke)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:keyStroke(modifiers, character) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates and emits a single keystroke event pair for the supplied keyboard modifiers and character to the application.                                                                     |
| **Parameters**                              | <ul><li>modifiers - A table containing the keyboard modifiers to apply ("fn", "ctrl", "alt", "cmd" or "shift")</li><li>character - A string containing a character to be emitted</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 224](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L224){target="_blank"} |

---


### [launch](#launch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:launch([waitSeconds], [path]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Launches the application, or brings it to the front if it was already running.                                                                     |
| **Parameters**                              | <ul><li>`waitSeconds` - If provided, the number of seconds to wait until the launch completes. If `nil`, it will return immediately.</li><li>`path`        - An optional full path to an application without an extension (i.e `/Applications/Final Cut Pro 10.3.4`). This allows you to load previous versions of the application.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 786](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L786){target="_blank"} |

---


### [notifier](#notifier)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:notifier() -> cp.ui.notifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `notifier` that is tracking the application UI element. It has already been started.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The notifier.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1035](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1035){target="_blank"} |

---


### [quit](#quit)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:quit(waitSeconds) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Asks the application to quit, if it's running. The app may not have actually quit after this function runs, even if `true` is returned. The application may take some time, or may be prompting the user for input, etc.                                                                     |
| **Parameters**                              | <ul><li>`waitSeconds`    - If povided, the number of seconds to wait until the quit completes. If `nil`, it will return immediately.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 875](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L875){target="_blank"} |

---


### [registerWindowType](#registerwindowtype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:registerWindowType(windowClass[, options]) -> cp.app`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers the specified class as one which will be used when accessing a specific `AXWindow` instance.                                                                     |
| **Parameters**                              | <ul><li>windowClass       - The class that will be used to create the window. It should be a subclass of [Window](cp.ui.Window.md)</li><li>options           - (optional) if provided, it will be passed the `hs.asm.axuielement` being wrapped, and should return `true` or `false`.</li></ul> |
| **Returns**                                 | <ul><li>the same instance of the `cp.app` for further configuration.</li></ul>          |
| **Notes**                                   | <ul><li>Options:</li><li>   `matches`: a `function` that will receive the AXWindow instance and should return `true` or `false`.</li><li>   `persistent`: if set to `true`, the Window instance will be cached and checked when windows appear and disappear.</li><li>By default, it will use the `matches` function on the class itself to check. An alternate function can be provided by putting it in the `{matches = <function>}` property of the `options` table.</li><li></li><li>By default, Windows instances are assumed to be short-lived, and will not persist beyond the window opening or closing.</li><li>To indicate that it should stick around, add `persistent = true` to the `options` table.</li><li>If the new `AXWindow` matches, this class will be used when requesting the set of windows via the [#windows] method or the [#focusedWindow] or [#mainWindow] props.</li><li>Classes registered later will supersede those registered earlier, so ensure that matchers are specific enough to not recognise more window UIs than they should.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 325](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L325){target="_blank"} |

---


### [searchResources](#searchresources)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:searchResources(value) -> hs.task`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a `hs.task` which will search for the specified string value in the resources of the current app.                                                                     |
| **Parameters**                              | <ul><li>value     - The string value to search for.</li></ul> |
| **Returns**                                 | <ul><li>`hs.task` which is already running, searching for the `value`. Results will be output in the Error Log.</li></ul>          |
| **Notes**                                   | <ul><li>This may take some time to complete, depending on how many resources the app contains.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1163](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1163){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:show() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Ensure the app is onscreen if it is currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 955](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L955){target="_blank"} |

---


### [update](#update)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app:update() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Updates the app, triggering any watchers if values have changed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//app.lua line 1133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//app.lua#L1133){target="_blank"} |

---

