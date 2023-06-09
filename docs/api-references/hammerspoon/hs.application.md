# hs.application

Manipulate running applications

---

## Submodules
 * [hs.application.watcher](hs.application.watcher.md)

---

## API Overview
**Variables** - _Configurable values_
 * [menuGlyphs](#menuglyphs)

**Functions** - _API calls offered directly by the extension_
 * [applicationForPID](#applicationforpid)
 * [applicationsForBundleID](#applicationsforbundleid)
 * [defaultAppForUTI](#defaultappforuti)
 * [enableSpotlightForNameSearches](#enablespotlightfornamesearches)
 * [frontmostApplication](#frontmostapplication)
 * [infoForBundleID](#infoforbundleid)
 * [infoForBundlePath](#infoforbundlepath)
 * [launchOrFocus](#launchorfocus)
 * [launchOrFocusByBundleID](#launchorfocusbybundleid)
 * [localizationsForBundleID](#localizationsforbundleid)
 * [localizationsForBundlePath](#localizationsforbundlepath)
 * [nameForBundleID](#nameforbundleid)
 * [pathForBundleID](#pathforbundleid)
 * [preferredLocalizationsForBundleID](#preferredlocalizationsforbundleid)
 * [preferredLocalizationsForBundlePath](#preferredlocalizationsforbundlepath)
 * [runningApplications](#runningapplications)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [find](#find)
 * [get](#get)
 * [open](#open)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activate](#activate)
 * [allWindows](#allwindows)
 * [bundleID](#bundleid)
 * [findMenuItem](#findmenuitem)
 * [findWindow](#findwindow)
 * [focusedWindow](#focusedwindow)
 * [getMenuItems](#getmenuitems)
 * [getWindow](#getwindow)
 * [hide](#hide)
 * [isFrontmost](#isfrontmost)
 * [isHidden](#ishidden)
 * [isRunning](#isrunning)
 * [kill](#kill)
 * [kill9](#kill9)
 * [kind](#kind)
 * [mainWindow](#mainwindow)
 * [name](#name)
 * [path](#path)
 * [pid](#pid)
 * [selectMenuItem](#selectmenuitem)
 * [setFrontmost](#setfrontmost)
 * [title](#title)
 * [unhide](#unhide)
 * [visibleWindows](#visiblewindows)


---

## API Documentation

#### Variables


### [menuGlyphs](#menuglyphs)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.menuGlyphs`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table containing UTF8 representations of the defined key glyphs used in Menus for keyboard shortcuts which are presented pictorially rather than as text (arrow keys, return key, etc.)                                                                     |
| **Notes**                                   | <ul><li>a `__tostring` metamethod is provided for this table so you can view its current contents by typing `hs.application.menuGlyphs` into the Hammerspoon console.</li><li>This table is provided as a variable so that you can change any representation if you feel you know of a better or more appropriate one for you usage at runtime.</li><li></li><li>The glyphs provided are defined in the Carbon framework headers in the Menus.h file, located (as of 10.11) at /System/Library/Frameworks/Carbon.framework/Frameworks/HIToolbox.framework/Headers/Menus.h.</li><li>The following constants are defined in Menus.h, but do not seem to correspond to a visible UTF8 character or well defined representation that I could discover.  If you believe that you know of a (preferably sanctioned by Apple) proper visual representation, please submit an issue detailing it at the Hammerspoon repository on GitHub.</li><li>  kMenuNullGlyph, 0x00, Null (always glyph 1)</li><li>  kMenuNonmarkingReturnGlyph, 0x0D, Nonmarking return key</li><li>  kMenuParagraphKoreanGlyph, 0x15, Unassigned (paragraph in Korean)</li><li>  kMenuTrademarkJapaneseGlyph, 0x1F, Unassigned (trademark in Japanese)</li><li>  kMenuAppleLogoOutlineGlyph, 0x6C, Apple logo key (outline)</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 239](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L239) |

---

#### Functions


### [applicationForPID](#applicationforpid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.applicationForPID(pid) -> hs.application object or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the running app for the given pid, if it exists.                                                                     |
| **Parameters**                              | <ul><li>pid - a UNIX process id (i.e. a number)</li></ul> |
| **Returns**                                 | <ul><li>An hs.application object if one can be found, otherwise nil</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 54](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L54) |

---


### [applicationsForBundleID](#applicationsforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.applicationsForBundleID(bundleID) -> list of hs.application objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns any running apps that have the given bundleID.                                                                     |
| **Parameters**                              | <ul><li>bundleID - An OSX application bundle identifier</li></ul> |
| **Returns**                                 | <ul><li>A table of zero or more hs.application objects that match the given identifier</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 71](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L71) |

---


### [defaultAppForUTI](#defaultappforuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.defaultAppForUTI(uti) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the bundle ID of the default application for a given UTI                                                                     |
| **Parameters**                              | <ul><li>uti - A string containing a UTI</li></ul> |
| **Returns**                                 | <ul><li>A string containing a bundle ID, or nil if none could be found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 215](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L215) |

---


### [enableSpotlightForNameSearches](#enablespotlightfornamesearches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.enableSpotlightForNameSearches([state]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set whether Spotlight should be used to find alternate names for applications.                                                                     |
| **Parameters**                              | <ul><li>`state` - an optional boolean specifying whether or not Spotlight should be used to try and determine alternate application names for `hs.application.find` and similar functions.</li></ul> |
| **Returns**                                 | <ul><li>the current, possibly changed, state</li></ul>          |
| **Notes**                                   | <ul><li>This setting is persistent across reloading and restarting Hammerspoon.</li><li>If this was set to true and you set it to true again, it will purge the alternate name map and rebuild it from scratch.</li><li>You can disable Spotlight alternate name mapping by setting this value to false or nil. If you set this to false, then the notifications indicating that more results might be possible if Spotlight is enabled will be suppressed.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 429](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L429) |

---


### [frontmostApplication](#frontmostapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.frontmostApplication() -> hs.application object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the application object for the frontmost (active) application.  This is the application which currently receives input events.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.application object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L21) |

---


### [infoForBundleID](#infoforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.infoForBundleID(bundleID) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the metadata of an application from its bundle identifier                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>A table containing information about the application, or nil if the bundle identifier could not be located</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 119](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L119) |

---


### [infoForBundlePath](#infoforbundlepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.infoForBundlePath(bundlePath) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the metadata of an application from its path on disk                                                                     |
| **Parameters**                              | <ul><li>bundlePath - A string containing the path to an application bundle (e.g. "/Applications/Safari.app")</li></ul> |
| **Returns**                                 | <ul><li>A table containing information about the application, or nil if the bundle could not be located</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 199](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L199) |

---


### [launchOrFocus](#launchorfocus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.launchOrFocus(name) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launches the app with the given name, or activates it if it's already running                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of the application to either launch or focus. This can also be the full path to an application (including the `.app` suffix) if you need to uniquely distinguish between applications in different locations that share the same name</li></ul> |
| **Returns**                                 | <ul><li>True if the application was either launched or focused, otherwise false (e.g. if the application doesn't exist)</li></ul>          |
| **Notes**                                   | <ul><li>The name parameter should match the name of the application on disk, e.g. "IntelliJ IDEA", rather than "IntelliJ"</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 1092](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L1092) |

---


### [launchOrFocusByBundleID](#launchorfocusbybundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.launchOrFocusByBundleID(bundleID) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launches the app with the given bundle ID, or activates it if it's already running                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing the bundle ID of the application to either launch or focus.</li></ul> |
| **Returns**                                 | <ul><li>True if the application was either launched or focused, otherwise false (e.g. if the application doesn't exist)</li></ul>          |
| **Notes**                                   | <ul><li>Bundle identifiers typically take the form of `com.company.ApplicationName`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 1111](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L1111) |

---


### [localizationsForBundleID](#localizationsforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.localizationsForBundleID(bundleID) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a list of all the localizations contained in the bundle.                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>A table containing language IDs for all the localizations contained in the bundle.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 167](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L167) |

---


### [localizationsForBundlePath](#localizationsforbundlepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.localizationsForBundlePath(bundlePath) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a list of all the localizations contained in the bundle.                                                                     |
| **Parameters**                              | <ul><li>bundlePath - A string containing the path to an application bundle (e.g. "/Applications/Safari.app")</li></ul> |
| **Returns**                                 | <ul><li>A table containing language IDs for all the localizations contained in the bundle.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 183](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L183) |

---


### [nameForBundleID](#nameforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.nameForBundleID(bundleID) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of an application from its bundle identifier                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>A string containing the application name, or nil if the bundle identifier could not be located</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 87](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L87) |

---


### [pathForBundleID](#pathforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.pathForBundleID(bundleID) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the filesystem path of an application from its bundle identifier                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>A string containing the app bundle's filesystem path, or nil if the bundle identifier could not be located</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 103](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L103) |

---


### [preferredLocalizationsForBundleID](#preferredlocalizationsforbundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.preferredLocalizationsForBundleID(bundleID) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an ordered list of preferred localizations contained in a bundle                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>A table containing language IDs for localizations in the bundle. The strings are ordered according to the user's language preferences and available localizations.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 135](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L135) |

---


### [preferredLocalizationsForBundlePath](#preferredlocalizationsforbundlepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.preferredLocalizationsForBundlePath(bundlePath) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an ordered list of preferred localizations contained in a bundle                                                                     |
| **Parameters**                              | <ul><li>bundlePath - A string containing the path to an application bundle (e.g. "/Applications/Safari.app")</li></ul> |
| **Returns**                                 | <ul><li>A table containing language IDs for localizations in the bundle. The strings are ordered according to the user's language preferences and available localizations.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 151](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L151) |

---


### [runningApplications](#runningapplications)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.runningApplications() -> list of hs.application objects`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns all running apps.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing zero or more hs.application objects currently running on the system</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 37](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L37) |

---

#### Constructors


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.find(hint, exact, stringLiteral) -> hs.application object(s)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Finds running applications                                                                     |
| **Parameters**                              | <ul><li>hint - search criterion for the desired application(s); it can be: - a pid number as per `hs.application:pid()` - a bundle ID string as per `hs.application:bundleID()` - a string pattern that matches (via `string.find`) the application name as per `hs.application:name()` (for convenience, the matching will be done on lowercased strings) - a string pattern that matches (via `string.find`) the application's window title per `hs.window:title()` (for convenience, the matching will be done on lowercased strings)</li><li>exact - a boolean, true to check application names for exact matches, false to use Lua's string:find() method. Defaults to false</li><li>stringLiteral - a boolean, true to interpret the hint string literally, false to interpret it as a Lua Pattern. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>one or more hs.application objects for running applications that match the supplied search criterion, or `nil` if none found</li></ul>          |
| **Notes**                                   | <ul><li>If multiple results are found, this function will return multiple values. See [https://www.lua.org/pil/5.1.html](https://www.lua.org/pil/5.1.html) for more information on how to work with this</li><li>for convenience you can call this as `hs.application(hint)`</li><li>use this function when you don't know the exact name of an application you're interested in, i.e.</li><li>   from the console: `hs.application'term' --> hs.application: iTerm2 (0x61000025fb88)  hs.application: Terminal (0x618000447588)`.</li><li>   But be careful when using it in your `init.lua`: `terminal=hs.application'term'` will assign either "Terminal" or "iTerm2" arbitrarily (or even,</li><li>   if neither are running, any other app with a window that happens to have "term" in its title); to make sure you get the right app in your scripts,</li><li>   use `hs.application.get` with the exact name: `terminal=hs.application.get'Terminal' --> "Terminal" app, or nil if it's not running`</li><li></li><li>Usage:</li><li>-- by pid</li><li>hs.application(42):name() --> Finder</li><li>-- by bundle id</li><li>hs.application'com.apple.Safari':name() --> Safari</li><li>-- by name</li><li>hs.application'chrome':name() --> Google Chrome</li><li>-- by window title</li><li>hs.application'bash':name() --> Terminal</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 106](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L106) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.get(hint) -> hs.application object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Gets a running application                                                                     |
| **Parameters**                              | <ul><li>hint - search criterion for the desired application; it can be: - a pid number as per `hs.application:pid()` - a bundle ID string as per `hs.application:bundleID()` - an application name string as per `hs.application:name()`</li></ul> |
| **Returns**                                 | <ul><li>an hs.application object for a running application that matches the supplied search criterion, or `nil` if not found</li></ul>          |
| **Notes**                                   | <ul><li>see also `hs.application.find`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 87](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L87) |

---


### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.open(app[, wait, [waitForFirstWindow]]) -> hs.application object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Launches an application, or activates it if it's already running                                                                     |
| **Parameters**                              | <ul><li>app - a string describing the application to open; it can be: - the application's name as per `hs.application:name()` - the full path to an application on disk (including the `.app` suffix) - the application's bundle ID as per `hs.application:bundleID()`</li><li>wait - (optional) the maximum number of seconds to wait for the app to be launched, if not already running; if omitted, defaults to 0; if the app takes longer than this to launch, this function will return `nil`, but the app will still launch</li><li>waitForFirstWindow - (optional) if `true`, additionally wait until the app has spawned its first window (which usually takes a bit longer)</li></ul> |
| **Returns**                                 | <ul><li>the `hs.application` object for the launched or activated application; `nil` if not found</li></ul>          |
| **Notes**                                   | <ul><li>the `wait` parameter will *block all Hammerspoon activity* in order to return the application object "synchronously"; only use it if you</li><li>   a) have no time-critical event processing happening elsewhere in your `init.lua` and b) need to act on the application object, or on</li><li>   its window(s), right away</li><li>when launching a "windowless" app (background daemon, menulet, etc.) make sure to omit `waitForFirstWindow`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 202](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L202) |

---

#### Methods


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:activate([allWindows]) -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tries to activate the app (make its key window focused) and returns whether it succeeded; if allWindows is true, all windows of the application are brought forward as well.                                                                     |
| **Parameters**                              | <ul><li>allWindows - If true, all windows of the application will be brought to the front. Otherwise, only the application's key window will. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether or not the application could be activated</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 62](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L62) |

---


### [allWindows](#allwindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:allWindows() -> list of hs.window objects`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all open windows owned by the given app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of zero or more hs.window objects owned by the application</li></ul>          |
| **Notes**                                   | <ul><li>This function can only return windows in the current Mission Control Space; if you need to address windows across</li><li>   different Spaces you can use the `hs.window.filter` module</li><li>   - if `Displays have separate Spaces` is *on* (in System Preferences>Mission Control) the current Space is defined</li><li>     as the union of all currently visible Spaces</li><li>   - minimized windows and hidden windows (i.e. belonging to hidden apps, e.g. via cmd-h) are always considered</li><li>     to be in the current Space</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 246](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L246) |

---


### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:bundleID() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the bundle identifier of the app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the bundle identifier of the application</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 349](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L349) |

---


### [findMenuItem](#findmenuitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:findMenuItem(menuItem[, isRegex]) -> table or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Searches the application for a menu item                                                                     |
| **Parameters**                              | <ul><li>menuItem - This can either be a string containing the text of a menu item (e.g. `"Messages"`) or a table representing the hierarchical path of a menu item (e.g. `{"File", "Share", "Messages"}`). In the string case, all of the application's menus will be searched until a match is found (with no specified behaviour if multiple menu items exist with the same name). In the table case, the whole menu structure will not be searched, because a precise path has been specified.</li><li>isRegex - An optional boolean, defaulting to false, which is only used if `menuItem` is a string. If set to true, `menuItem` will be treated as a regular expression rather than a strict string to match against</li></ul> |
| **Returns**                                 | <ul><li>Returns nil if the menu item cannot be found. If it does exist, returns a table with two keys:</li><li> enabled - whether the menu item can be selected/ticked. This will always be false if the application is not currently focussed</li><li> ticked - whether the menu item is ticked or not (obviously this value is meaningless for menu items that can't be ticked)</li></ul>          |
| **Notes**                                   | <ul><li>This can only search for menu items that don't have children - i.e. you can't search for the name of a submenu</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 764](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L764) |

---


### [findWindow](#findwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:findWindow(titlePattern) -> hs.window object(s)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds windows from this application                                                                     |
| **Parameters**                              | <ul><li>titlePattern - a string pattern that matches (via `string.find`) the window title(s) as per `hs.window:title()` (for convenience, the matching will be done on lowercased strings)</li></ul> |
| **Returns**                                 | <ul><li>one or more hs.window objects belonging to this application that match the supplied search criterion, or `nil` if none found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 175](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L175) |

---


### [focusedWindow](#focusedwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:focusedWindow() -> hs.window object or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the currently focused window of the application, or nil                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.window object representing the window of the application that currently has focus, or nil if there are none</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 289](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L289) |

---


### [getMenuItems](#getmenuitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:getMenuItems([fn]) -> table or nil | hs.application object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the menu structure of the application                                                                     |
| **Parameters**                              | <ul><li>fn - an optional callback function.  If provided, the function will receive a single argument and return none.</li></ul> |
| **Returns**                                 | <ul><li>If no argument is provided, returns a table containing the menu structure of the application, or nil if an error occurred. If a callback function is provided, the callback function will receive this table (or nil) and this method will return the application object this method was invoked on.</li></ul>          |
| **Notes**                                   | <ul><li>In some applications, this can take a little while to complete, because quite a large number of round trips are required to the source application, to get the information. When this method is invoked without a callback function, Hammerspoon will block while creating the menu structure table.  When invoked with a callback function, the menu structure is built in a background thread.</li><li></li><li>The table is nested with the same structure as the menus of the application. Each item has several keys containing information about the menu item. Not all keys will appear for all items. The possible keys are:</li><li> AXTitle - A string containing the text of the menu item (entries which have no title are menu separators)</li><li> AXEnabled - A boolean, 1 if the menu item is clickable, 0 if not</li><li> AXRole - A string containing the role of the menu item - this will be either AXMenuBarItem for a top level menu, or AXMenuItem for an item in a menu</li><li> AXMenuItemMarkChar - A string containing the "mark" character for a menu item. This is for toggleable menu items and will usually be an empty string or a Unicode tick character (✓)</li><li> AXMenuItemCmdModifiers - A table containing string representations of the keyboard modifiers for the menu item's keyboard shortcut, or nil if no modifiers are present</li><li> AXMenuItemCmdChar - A string containing the key for the menu item's keyboard shortcut, or an empty string if no shortcut is present</li><li> AXMenuItemCmdGlyph - An integer, corresponding to one of the defined glyphs in `hs.application.menuGlyphs` if the keyboard shortcut is a special character usually represented by a pictorial representation (think arrow keys, return, etc), or an empty string if no glyph is used in presenting the keyboard shortcut.</li><li>Using `hs.inspect()` on these tables, while useful for exploration, can be extremely slow, taking several minutes to correctly render very complex menus</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 1025](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L1025) |

---


### [getWindow](#getwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:getWindow(title) -> hs.window object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a specific window from this application                                                                     |
| **Parameters**                              | <ul><li>title - the desired window's title string as per `hs.window:title()`</li></ul> |
| **Returns**                                 | <ul><li>the desired hs.window object belonging to this application, or `nil` if not found</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 189](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L189) |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:hide() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the app (and all its windows).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean indicating whether the application was successfully hidden</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 421](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L421) |

---


### [isFrontmost](#isfrontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:isFrontmost() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the app is the frontmost (i.e. is the currently active application)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>True if the application is the frontmost application, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 490](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L490) |

---


### [isHidden](#ishidden)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:isHidden() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the app is currently hidden.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean indicating whether the application is hidden or not</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 473](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L473) |

---


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:isRunning() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the application is still running                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the application is running, false if not</li></ul>          |
| **Notes**                                   | <ul><li>If an application is terminated and re-launched, this method will still return false, as `hs.application` objects are tied to a specific instance of an application (i.e. its PID)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 383](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L383) |

---


### [kill](#kill)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:kill()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tries to terminate the app gracefully.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 439](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L439) |

---


### [kill9](#kill9)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:kill9()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tries to terminate the app forcefully.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 456](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L456) |

---


### [kind](#kind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:kind() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Identify the application's GUI state                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number that is either 1 if the app is in the dock, 0 if it is not, or -1 if the application is prohibited from having GUI elements</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 547](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L547) |

---


### [mainWindow](#mainwindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:mainWindow() -> hs.window object or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the main window of the given app, or nil.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.window object representing the main window of the application, or nil if it has no windows</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 272](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L272) |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:name()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.application:title()`](#title)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 82](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L82) |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:path() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the filesystem path of the app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the filesystem path of the application or nil if the path could not be determined (e.g. if the application has terminated).</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 366](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L366) |

---


### [pid](#pid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:pid() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app's process identifier.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The UNIX process identifier of the application (i.e. a number)</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 530](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L530) |

---


### [selectMenuItem](#selectmenuitem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:selectMenuItem(menuitem[, isRegex]) -> true or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a menu item (i.e. simulates clicking on the menu item)                                                                     |
| **Parameters**                              | <ul><li>menuitem - The menu item to select, specified as either a string or a table. See the `menuitem` parameter of `hs.application:findMenuItem()` for more information.</li><li>isRegex - An optional boolean, defaulting to false, which is only used if `menuItem` is a string. If set to true, `menuItem` will be treated as a regular expression rather than a strict string to match against</li></ul> |
| **Returns**                                 | <ul><li>True if the menu item was found and selected, or nil if it wasn't (e.g. because the menu item couldn't be found)</li></ul>          |
| **Notes**                                   | <ul><li>Depending on the type of menu item involved, this will either activate or tick/untick the menu item</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 855](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L855) |

---


### [setFrontmost](#setfrontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:setFrontmost([allWindows]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the app to the frontmost (i.e. currently active) application                                                                     |
| **Parameters**                              | <ul><li>allWindows - An optional boolean, true to bring all windows of the application to the front. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the operation was successful, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 507](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L507) |

---


### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:title() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the localized name of the app (in UTF8).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the application</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 332](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L332) |

---


### [unhide](#unhide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:unhide() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unhides the app (and all its windows) if it's hidden.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean indicating whether the application was successfully unhidden</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/libapplication.m line 403](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication.m#L403) |

---


### [visibleWindows](#visiblewindows)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application:visibleWindows() -> win[]`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns only the app's windows that are visible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing zero or more hs.window objects</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/application/application.lua line 46](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/application.lua#L46) |

---

