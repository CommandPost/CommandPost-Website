# cp.config

Manage CommandPost's constants and settings.

## Submodules
 * [cp.config.dockIconClickCallback](cp.config.dockIconClickCallback.md)
 * [cp.config.fileDroppedToDockIconCallback](cp.config.fileDroppedToDockIconCallback.md)
 * [cp.config.shutdownCallback](cp.config.shutdownCallback.md)
 * [cp.config.textDroppedToDockIconCallback](cp.config.textDroppedToDockIconCallback.md)

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [appBuild](#appbuild)
 * [appName](#appname)
 * [appVersion](#appversion)
 * [assetsPath](#assetspath)
 * [basePath](#basepath)
 * [bundledPluginsPath](#bundledpluginspath)
 * [bundleID](#bundleid)
 * [cachePath](#cachepath)
 * [configPrefix](#configprefix)
 * [iconPath](#iconpath)
 * [languagePath](#languagepath)
 * [pluginPaths](#pluginpaths)
 * [privacyPolicyURL](#privacypolicyurl)
 * [processID](#processid)
 * [scriptPath](#scriptpath)
 * [sourceExtensions](#sourceextensions)
 * [sourceWatcher](#sourcewatcher)
 * [translationURL](#translationurl)
 * [userConfigRootPath](#userconfigrootpath)
 * [userPluginsPath](#userpluginspath)

### **Variables** - _Configurable values_
 * [automaticScriptReloading](#automaticscriptreloading)
 * [watcher](#watcher)

### **Functions** - _API calls offered directly by the extension_
 * [application](#application)
 * [get](#get)
 * [prop](#prop)
 * [reset](#reset)
 * [set](#set)
 * [unwatch](#unwatch)
 * [watch](#watch)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [developerMode](#developermode)
 * [frontmost](#frontmost)


## API Documentation

### Constants


### [appBuild](#appbuild)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.appBuild -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Application Build                                                                     |

---

### [appName](#appname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.appName -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The name of the Application                                                                     |

---

### [appVersion](#appversion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.appVersion -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Application Version                                                                     |

---

### [assetsPath](#assetspath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.assetsPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Path to where Application Assets are stored                                                                     |

---

### [basePath](#basepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.basePath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Path to where the Extensions & Plugins folders are stored.                                                                     |

---

### [bundledPluginsPath](#bundledpluginspath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.bundledPluginsPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The path to bundled plugins                                                                     |

---

### [bundleID](#bundleid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.bundleID -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Application's Bundle ID                                                                     |

---

### [cachePath](#cachepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.cachePath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The path to the CommandPost Cache folder.                                                                     |

---

### [configPrefix](#configprefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.configPrefix -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Prefix used for Configuration Settings                                                                     |

---

### [iconPath](#iconpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.iconPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Path to the Application Icon                                                                     |

---

### [languagePath](#languagepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.languagePath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Path to the Languages Folder                                                                     |

---

### [pluginPaths](#pluginpaths)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.pluginPaths -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of Plugins Paths. Earlier entries take precedence.                                                                     |

---

### [privacyPolicyURL](#privacypolicyurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.privacyPolicyURL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | URL for Privacy Policy                                                                     |

---

### [processID](#processid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.processID -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Application's Process ID                                                                     |

---

### [scriptPath](#scriptpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.scriptPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Path to where Application Scripts are stored                                                                     |

---

### [sourceExtensions](#sourceextensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.sourceExtensions -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Extensions for files which will trigger a reload when modified.                                                                     |

---

### [sourceWatcher](#sourcewatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.sourceWatcher -> SourceWatcher`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A `cp.sourcewatcher` that will watch for source files and reload CommandPost if any change.                                                                     |

---

### [translationURL](#translationurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.translationURL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | URL for Translations                                                                     |

---

### [userConfigRootPath](#userconfigrootpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.userConfigRootPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The path to user configuration folders                                                                     |

---

### [userPluginsPath](#userpluginspath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.userPluginsPath -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The path to user plugins                                                                     |

---
### Variables


### [automaticScriptReloading](#automaticscriptreloading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.automaticScriptReloading <cp.prop: boolean>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatic Script Reloading.                                                                     |

---

### [watcher](#watcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.watcher() -> watcher`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Config Watcher                                                                     |

---
### Functions


### [application](#application)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.application() -> hs.application object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Application as a hs.application object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>hs.application object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.get(key[, defaultValue]) -> string or boolean or number or nil or table or binary data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a setting                                                                     |
| **Parameters**                              | <ul><li>key - A string containing the name of the setting</li><li>defaultValue - A default value if the setting doesn't already exist</li></ul> |
| **Returns**                                 | <ul><li>The value of the setting</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [prop](#prop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.prop(key[, defaultValue]) -> cp.prop`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `cp.prop` instance connected to the value of the specified key. When the value is modified, it will be notified.                                                                     |
| **Parameters**                              | <ul><li>`key`				- The configuration setting key.</li><li>`defaultValue`	- The default value if the key has not been set.</li></ul> |
| **Returns**                                 | <ul><li>A `cp.prop` instance for the key.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.reset()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resets all the settings for the Application                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [set](#set)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.set(key, value)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves a setting with common datatypes                                                                     |
| **Parameters**                              | <ul><li>`key`		- A string containing the name of the setting</li><li>`value`		- An optional value for the setting.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function cannot set dates or raw data types</li><li>Valid datatypes are:</li><li>   ** string</li><li>   ** number</li><li>   ** boolean</li><li>   ** nil</li><li>   ** table (which may contain any of the same valid datatypes)</li><li>if no value is provided, it is assumed to be nil</li></ul>                |

---

### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.unwatch(id)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unregisters the watcher with the specified ID.                                                                     |
| **Parameters**                              | <ul><li>`id`		- The ID, originally returned from the `watch` function.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a watcher with the ID existed and was successfully removed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.watch(events) -> id`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watches for config events.                                                                     |
| **Parameters**                              | <ul><li>`events`	- a table containing functions for each event to watch for.</li></ul> |
| **Returns**                                 | <ul><li>a unique ID that can be used to `unwatch`.</li></ul>          |
| **Notes**                                   | <ul><li>Supported events:</li><li> ** `reset()`	- occurs after CommandPost's settings are reset.</li></ul>                |

---
### Fields


### [developerMode](#developermode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.developerMode <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | When `true`, the app is in developer mode.                                                                     |

---

### [frontmost](#frontmost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.config.frontmost <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns whether or not the Application is frontmost.                                                                     |

---
