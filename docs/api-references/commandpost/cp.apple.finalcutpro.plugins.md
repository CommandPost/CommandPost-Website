# cp.apple.finalcutpro.plugins

Scans an entire system for Final Cut Pro Effects, Generators, Titles & Transitions.

Usage:
```lua
    require("cp.apple.finalcutpro"):plugins():scan()
```

## Submodules
 * [cp.apple.finalcutpro.plugins.guiscan](cp.apple.finalcutpro.plugins.guiscan.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [types](#types)
* Functions - API calls offered directly by the extension
 * [clearCaches](#clearcaches)
 * [new](#new)
 * [scan](#scan)
 * [scanAppEffectsPresets](#scanappeffectspresets)
 * [scanned](#scanned)
 * [scanSystemAudioUnits](#scansystemaudiounits)
 * [scanUserColorPresets](#scanusercolorpresets)
 * [scanUserEffectsPresets](#scanusereffectspresets)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [audioEffects](#audioeffects)
 * [effectBundleStrings](#effectbundlestrings)
 * [effectStrings](#effectstrings)
 * [generators](#generators)
 * [ofType](#oftype)
 * [registerPlugin](#registerplugin)
 * [reset](#reset)
 * [scanAll](#scanall)
 * [scanAppAudioEffectBundles](#scanappaudioeffectbundles)
 * [scanAppBuiltInPlugins](#scanappbuiltinplugins)
 * [scanAppEdelEffects](#scanappedeleffects)
 * [scanAppMotionTemplates](#scanappmotiontemplates)
 * [scanPluginCategoryDirectory](#scanplugincategorydirectory)
 * [scanPluginsDirectory](#scanpluginsdirectory)
 * [scanPluginThemeDirectory](#scanpluginthemedirectory)
 * [scanSystemMotionTemplates](#scansystemmotiontemplates)
 * [scanUserMotionTemplates](#scanusermotiontemplates)
 * [titles](#titles)
 * [transitions](#transitions)
 * [translateEffectBundle](#translateeffectbundle)
 * [unwatch](#unwatch)
 * [videoEffects](#videoeffects)
 * [watch](#watch)

## API Documentation

### Constants


### [types](#types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.types -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of the different audio/video/transition/generator types.                                                                     |

---
### Functions


### [clearCaches](#clearcaches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.clearCaches() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears any local caches created for tracking the plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the caches have been cleared successfully.</li></ul>          |
| **Notes**                                   | <ul><li>Does not uninstall any of the actual plugins.</li></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.new(fcp) -> plugins object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Plugins Object.                                                                     |
| **Parameters**                              | <ul><li>fcp - The `cp.apple.finalcutpro` object</li></ul> |
| **Returns**                                 | <ul><li>The plugins object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scan](#scan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scan() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro for Effects, Transitions, Generators & Titles                                                                     |
| **Parameters**                              | <ul><li>fcp - the `cp.apple.finalcutpro` instance</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAppEffectsPresets](#scanappeffectspresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppEffectsPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro Built-in Effects Presets                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanned](#scanned)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.scanned() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets if the system has been scanned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` is scanned otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanSystemAudioUnits](#scansystemaudiounits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanSystemAudioUnits(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans for Validated Audio Units, and saves the results to a cache for faster subsequent startup times.                                                                     |
| **Parameters**                              | <ul><li>locale   - the locale to scan in.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanUserColorPresets](#scanusercolorpresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserColorPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro User Color Presets                                                                     |
| **Parameters**                              | <ul><li>`locale` - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanUserEffectsPresets](#scanusereffectspresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserEffectsPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro Effects Presets                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:app() -> plugins`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `cp.apple.finalcutpro` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [audioEffects](#audioeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:audioEffects([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'audio effect' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [effectBundleStrings](#effectbundlestrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:effectBundleStrings() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all the Effect Bundle Strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The effect bundle strings in a table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [effectStrings](#effectstrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:effectStrings() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of Effects Strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of effect strings.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [generators](#generators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:generators([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'generator' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [ofType](#oftype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:ofType(type[, locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the plugins of the specified type (`types.videoEffect`, etc.) and if provided, locale.                                                                     |
| **Parameters**                              | <ul><li>`type`        - The plugin type. See `types` for the complete list.</li><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins of the specified type.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [registerPlugin](#registerplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:registerPlugin(path, type, categoryName, themeName, pluginName, locale) -> plugin`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a plugin with the specified details.                                                                     |
| **Parameters**                              | <ul><li>`path`           - The path to the plugin directory.</li><li>`type`           - The type of plugin</li><li>`categoryName`   - The category name, in the specified locale.</li><li>`themeName`      - The theme name, in the specified locale. May be `nil` if not in a theme.</li><li>`pluginName`     - The plugin name, in the specified locale.</li><li>`locale`         - The `cp.i18n.localeID` or string code for same (e.g. "en", "fr", "de")</li></ul> |
| **Returns**                                 | <ul><li>The plugin object.</li></ul>          |
| **Notes**                                   | <ul><li>`locale` defaults to the current Final Cut Pro locale if nothing is supplied.</li></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:reset() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets all the cached plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAll](#scanall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAll() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans all supported locales, loading them into memory.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAppAudioEffectBundles](#scanappaudioeffectbundles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppAudioEffectBundles() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans the Audio Effect Bundles directories.                                                                     |
| **Parameters**                              | <ul><li>directoryPath - Directory to scan</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAppBuiltInPlugins](#scanappbuiltinplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppBuiltInPlugins([locale]) -> None`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scan Built In Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The `cp.i18n.localeID` code to search for. Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAppEdelEffects](#scanappedeleffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppEdelEffects() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for Soundtrack Pro EDEL Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanAppMotionTemplates](#scanappmotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for app-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanPluginCategoryDirectory](#scanplugincategorydirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginCategoryDirectory(locale, path, plugin) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a folder as a plugin category folder. The contents will be folders that are either theme folders or actual plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`        - The locale to scan with.</li><li>`path`            - The path to the plugin type directory</li><li>`plugin`      - A table containing the plugin details collected so far.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the folder was scanned successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanPluginsDirectory](#scanpluginsdirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginsDirectory(locale, path, filter) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a root plugins directory.                                                                     |
| **Parameters**                              | <ul><li>`locale`   - The locale code to scan for (e.g. "en" or "fr").</li><li>`path`       - The path of the root plugin directory to scan.</li><li>`checkFn`    - A function which will receive the path being scanned and return `true` if it should be scanned.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin directory was successfully scanned.</li></ul>          |
| **Notes**                                   | <ul><li>Plugins directories have a standard structure which comes in two flavours:</li><li>  ** <type>/<plugin name>/<plugin name>.<ext></li><li>  ** <type>/<group>/<plugin name>/<plugin name>.<ext></li><li>  ** <type>/<group>/<theme>/<plugin name>/<plugin name>.<ext></li><li>This is somewhat complicated by 'localization', wherein each of the folder levels may have a `.localized` extension. If this is the case, it will contain a subfolder called `.localized`, which in turn contains files which describe the local name for the folder in any number of locales.</li><li>This function will drill down through the contents of the specified `path`, assuming the above structure, and then register any contained plugins in the `locale` provided. Other locales are ignored, other than some use of English when checking for specific effect types (Effect, Generator, etc.).</li></ul>                |

---

### [scanPluginThemeDirectory](#scanpluginthemedirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginThemeDirectory(locale, path, plugin) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a folder as a plugin theme folder. The contents will be plugin folders.                                                                     |
| **Parameters**                              | <ul><li>`locale`        - The locale to scan with.</li><li>`path`            - The path to the plugin type directory</li><li>`plugin`          - A table containing the plugin details collected so far.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the folder was scanned successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanSystemMotionTemplates](#scansystemmotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanSystemMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for system-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [scanUserMotionTemplates](#scanusermotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for user-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [titles](#titles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:titles([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'title' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [transitions](#transitions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:transitions([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'transitions' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [translateEffectBundle](#translateeffectbundle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:translateEffectBundle(input, locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Translates an Effect Bundle Item.                                                                     |
| **Parameters**                              | <ul><li>input - The original name</li><li>locale - The locale code you want to attempt to translate to</li></ul> |
| **Returns**                                 | <ul><li>The translated value for `input` in the specified locale, if present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:unwatch(id) -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unwatches a watcher with a specific ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher to stop watching.</li></ul> |
| **Returns**                                 | <ul><li>The watcher object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [videoEffects](#videoeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:videoEffects([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'video effect' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:watch(events) -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a watcher for the provided events table.                                                                     |
| **Parameters**                              | <ul><li>events - A table of events to watch.</li></ul> |
| **Returns**                                 | <ul><li>The watcher object</li></ul>          |
| **Notes**                                   | <ul><li>The events can be:</li><li> ** videoEffects</li><li> ** audioEffects</li><li> ** transitions</li><li> ** titles</li><li> ** generators</li></ul>                |

---
