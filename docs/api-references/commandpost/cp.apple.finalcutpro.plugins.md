# cp.apple.finalcutpro.plugins

Scans an entire system for Final Cut Pro Effects, Generators, Titles & Transitions.

Usage:
```lua
    require("cp.apple.finalcutpro"):plugins():scan()
```

---

## Submodules
 * [cp.apple.finalcutpro.plugins.guiscan](cp.apple.finalcutpro.plugins.guiscan.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [types](#types)

**Functions** - _API calls offered directly by the extension_
 * [clearCaches](#clearcaches)
 * [new](#new)
 * [scan](#scan)
 * [scanAppEffectsPresets](#scanappeffectspresets)
 * [scanned](#scanned)
 * [scanSystemAudioUnits](#scansystemaudiounits)
 * [scanUserColorPresets](#scanusercolorpresets)
 * [scanUserEffectsPresets](#scanusereffectspresets)

**Methods** - _API calls which can only be made on an object returned by a constructor_
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


---

## API Documentation

#### Constants


### [types](#types)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.types -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of the different audio/video/transition/generator types.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 255](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L255){target="_blank"} |

---

#### Functions


### [clearCaches](#clearcaches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.clearCaches() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Clears any local caches created for tracking the plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the caches have been cleared successfully.</li></ul>          |
| **Notes**                                   | <ul><li>Does not uninstall any of the actual plugins.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1499](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1499){target="_blank"} |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.new(fcp) -> plugins object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new Plugins Object.                                                                     |
| **Parameters**                              | <ul><li>fcp - The `cp.apple.finalcutpro` object</li></ul> |
| **Returns**                                 | <ul><li>The plugins object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1828](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1828){target="_blank"} |

---


### [scan](#scan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scan() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro for Effects, Transitions, Generators & Titles                                                                     |
| **Parameters**                              | <ul><li>fcp - the `cp.apple.finalcutpro` instance</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1684](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1684){target="_blank"} |

---


### [scanAppEffectsPresets](#scanappeffectspresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppEffectsPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro Built-in Effects Presets                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 419](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L419){target="_blank"} |

---


### [scanned](#scanned)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins.scanned() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets if the system has been scanned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` is scanned otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1725](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1725){target="_blank"} |

---


### [scanSystemAudioUnits](#scansystemaudiounits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanSystemAudioUnits(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans for Validated Audio Units, and saves the results to a cache for faster subsequent startup times.                                                                     |
| **Parameters**                              | <ul><li>locale   - the locale to scan in.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 314](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L314){target="_blank"} |

---


### [scanUserColorPresets](#scanusercolorpresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserColorPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro User Color Presets                                                                     |
| **Parameters**                              | <ul><li>`locale` - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 528](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L528){target="_blank"} |

---


### [scanUserEffectsPresets](#scanusereffectspresets)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserEffectsPresets(locale) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans Final Cut Pro Effects Presets                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 439](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L439){target="_blank"} |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:app() -> plugins`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `cp.apple.finalcutpro` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1339](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1339){target="_blank"} |

---


### [audioEffects](#audioeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:audioEffects([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'audio effect' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1393](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1393){target="_blank"} |

---


### [effectBundleStrings](#effectbundlestrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:effectBundleStrings() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all the Effect Bundle Strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The effect bundle strings in a table.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1062](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1062){target="_blank"} |

---


### [effectStrings](#effectstrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:effectStrings() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table of Effects Strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of effect strings.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1294](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1294){target="_blank"} |

---


### [generators](#generators)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:generators([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'generator' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1435](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1435){target="_blank"} |

---


### [ofType](#oftype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:ofType(type[, locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the plugins of the specified type (`types.videoEffect`, etc.) and if provided, locale.                                                                     |
| **Parameters**                              | <ul><li>`type`        - The plugin type. See `types` for the complete list.</li><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins of the specified type.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1352](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1352){target="_blank"} |

---


### [registerPlugin](#registerplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:registerPlugin(path, type, categoryName, themeName, pluginName, locale) -> plugin`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a plugin with the specified details.                                                                     |
| **Parameters**                              | <ul><li>`path`           - The path to the plugin directory.</li><li>`type`           - The type of plugin</li><li>`categoryName`   - The category name, in the specified locale.</li><li>`themeName`      - The theme name, in the specified locale. May be `nil` if not in a theme.</li><li>`pluginName`     - The plugin name, in the specified locale.</li><li>`locale`         - The `cp.i18n.localeID` or string code for same (e.g. "en", "fr", "de")</li></ul> |
| **Returns**                                 | <ul><li>The plugin object.</li></ul>          |
| **Notes**                                   | <ul><li>`locale` defaults to the current Final Cut Pro locale if nothing is supplied.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 991](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L991){target="_blank"} |

---


### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:reset() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets all the cached plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1048](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1048){target="_blank"} |

---


### [scanAll](#scanall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAll() -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans all supported locales, loading them into memory.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1738](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1738){target="_blank"} |

---


### [scanAppAudioEffectBundles](#scanappaudioeffectbundles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppAudioEffectBundles() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans the Audio Effect Bundles directories.                                                                     |
| **Parameters**                              | <ul><li>directoryPath - Directory to scan</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1100](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1100){target="_blank"} |

---


### [scanAppBuiltInPlugins](#scanappbuiltinplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppBuiltInPlugins([locale]) -> None`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scan Built In Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The `cp.i18n.localeID` code to search for. Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1449](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1449){target="_blank"} |

---


### [scanAppEdelEffects](#scanappedeleffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppEdelEffects() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for Soundtrack Pro EDEL Effects.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1275](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1275){target="_blank"} |

---


### [scanAppMotionTemplates](#scanappmotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanAppMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for app-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1132](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1132){target="_blank"} |

---


### [scanPluginCategoryDirectory](#scanplugincategorydirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginCategoryDirectory(locale, path, plugin) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a folder as a plugin category folder. The contents will be folders that are either theme folders or actual plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`        - The locale to scan with.</li><li>`path`            - The path to the plugin type directory</li><li>`plugin`      - A table containing the plugin details collected so far.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the folder was scanned successfully.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 901](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L901){target="_blank"} |

---


### [scanPluginsDirectory](#scanpluginsdirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginsDirectory(locale, path, filter) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a root plugins directory.                                                                     |
| **Parameters**                              | <ul><li>`locale`   - The locale code to scan for (e.g. "en" or "fr").</li><li>`path`       - The path of the root plugin directory to scan.</li><li>`checkFn`    - A function which will receive the path being scanned and return `true` if it should be scanned.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin directory was successfully scanned.</li></ul>          |
| **Notes**                                   | <ul><li>Plugins directories have a standard structure which comes in two flavours:</li><li>  ** <type>/<plugin name>/<plugin name>.<ext></li><li>  ** <type>/<group>/<plugin name>/<plugin name>.<ext></li><li>  ** <type>/<group>/<theme>/<plugin name>/<plugin name>.<ext></li><li>This is somewhat complicated by 'localization', wherein each of the folder levels may have a `.localized` extension. If this is the case, it will contain a subfolder called `.localized`, which in turn contains files which describe the local name for the folder in any number of locales.</li><li>This function will drill down through the contents of the specified `path`, assuming the above structure, and then register any contained plugins in the `locale` provided. Other locales are ignored, other than some use of English when checking for specific effect types (Effect, Generator, etc.).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 754](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L754){target="_blank"} |

---


### [scanPluginThemeDirectory](#scanpluginthemedirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanPluginThemeDirectory(locale, path, plugin) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans a folder as a plugin theme folder. The contents will be plugin folders.                                                                     |
| **Parameters**                              | <ul><li>`locale`        - The locale to scan with.</li><li>`path`            - The path to the plugin type directory</li><li>`plugin`          - A table containing the plugin details collected so far.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the folder was scanned successfully.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 938](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L938){target="_blank"} |

---


### [scanSystemMotionTemplates](#scansystemmotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanSystemMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for system-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1214](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1214){target="_blank"} |

---


### [scanUserMotionTemplates](#scanusermotiontemplates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:scanUserMotionTemplates(locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Scans for user-provided Final Cut Pro Plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale to scan for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1156](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1156){target="_blank"} |

---


### [titles](#titles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:titles([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'title' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1407](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1407){target="_blank"} |

---


### [transitions](#transitions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:transitions([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'transitions' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1421](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1421){target="_blank"} |

---


### [translateEffectBundle](#translateeffectbundle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:translateEffectBundle(input, locale) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Translates an Effect Bundle Item.                                                                     |
| **Parameters**                              | <ul><li>input - The original name</li><li>locale - The locale code you want to attempt to translate to</li></ul> |
| **Returns**                                 | <ul><li>The translated value for `input` in the specified locale, if present.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1084](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1084){target="_blank"} |

---


### [unwatch](#unwatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:unwatch(id) -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unwatches a watcher with a specific ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the watcher to stop watching.</li></ul> |
| **Returns**                                 | <ul><li>The watcher object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1774](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1774){target="_blank"} |

---


### [videoEffects](#videoeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:videoEffects([locale]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds the 'video effect' plugins.                                                                     |
| **Parameters**                              | <ul><li>`locale`    - The locale code to search for (e.g. "en"). Defaults to the current FCPX langauge.</li></ul> |
| **Returns**                                 | <ul><li>A table of the available plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1379](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1379){target="_blank"} |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.plugins:watch(events) -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a watcher for the provided events table.                                                                     |
| **Parameters**                              | <ul><li>events - A table of events to watch.</li></ul> |
| **Returns**                                 | <ul><li>The watcher object</li></ul>          |
| **Notes**                                   | <ul><li>The events can be:</li><li> ** videoEffects</li><li> ** audioEffects</li><li> ** transitions</li><li> ** titles</li><li> ** generators</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/plugins.lua line 1753](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/plugins.lua#L1753){target="_blank"} |

---

