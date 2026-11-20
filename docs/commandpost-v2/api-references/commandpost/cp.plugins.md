# cp.plugins

This is a simple plugin manager.

## Functions

It has a few core functions:

### `plugins.init(...)`

This function will load all enabled plugins in the specified 'parent' folders. For example:

```lua
local plugins = require("cp.plugins")
plugins.init("~/Library/Application Support/CommandPost/Plugins")
```

This will load all plugins in the current user's `Library/Application Support/CommandPost/Plugins` folder.

### `cp.plugins.getPluginModule(id)`

Once the plugins have been loaded, the module can be accessed by their ID via the `getPluginModule(id)` function. It will return the module returned by the plugin's `init` function. This can also be done via the default function for the library. Eg:

```lua
plugins("my.plugin.id").doSomething()
```

## Plugin Modules

Plugins typically have two parts:
1. The plugin table, which defines details about the plugin, and
2. The module, or result, which could be anything, which is returned from the `init` function.


A plugin file should return a `plugin` table that allows the plugin to be initialised. The table will look something like this:

```lua
local module = {}

local module.init(otherPlugin)
    -- do stuff with otherPlugin here
end

local plugin = {
    id = "my.plugin.id",
    group = "foo",
    dependencies = {
        ["some.other.plugin"] = "otherPlugin",
    },
}

function plugin.init(dependencies)
   -- do stuff to initialise the module here
   module.init(dependencies.otherPlugin)
   return module
}

function plugin.postInit(dependencies)
   -- do stuff that will happen after all plugins have been initialised.
end
```

As you can see above, plugin module can have a few simple functions and properties. The key ones are:

### `plugin.id`
This is a unique ID for the plugin. It is used to load the plugin externally, as well as to define dependencies between plugins.

### `plugin.group`
This is the group ID for the plugin. This is used to group plugins visually in the Properties panel for Plugins.

### `plugin.required`
This optional property can be specified for plugins which should never be disabled. This should only be set for plugins which will break the application if disabled.

### `plugin.dependencies`

This is a table with the list of other plugins that this plugin requires to be loaded prior to this plugin. Be careful of creating infinite loops of dependencies - we don't check for them currently!

It is defined like so:

```lua
plugin.dependencies = {
    "cp.plugins.myplugin",
    ["cp.plugins.otherplugin"] = "otherPlugin"
}

As you can see, there are two ways of declaring a dependency. The first is with just the plugin ID, the second has an alias.

These can be accessed in the `init` and `postInit` functions like so:

```lua
function plugin.init(dependencies)
   local myPlugin = dependencies["cp.plugins.myplugin"]
   local otherPlugin = dependencies.otherPlugin -- or dependencies["cp.plugins.otherplugin"]
end
```

A plugin will only have its `init` function called after its dependencies have successfully had their `init` functions called. Additionally, if a plugin has a `postInit`, all declared `postInits` for dependencies will have been called prior to the plugin's `postInit` function.

### `function plugin.init(dependencies[, environment]) -> module`

This function is basically required. It will be executed when the plugin is initialised. The `dependencies` parameter is a table containing the list of dependencies that the plugin defined via the `dependencies` property. The `environment` provides access to resources such as images, HTML files, or other lua modules that are bundled with the plugin. See `Simple vs Complex Plugins` below.

As you may have noted, there are two ways to specify a plugin is required. Either by simply specifying it as an 'array' item (the first example) or as a key/value (the second example). Doing the later allows you to specify an alias for the dependency, which can be used in the `init(...)` function, like so:

```lua
local plugin = {}

plugin.dependencies = {
    "cp.plugins.myplugin",
    ["cp.plugins.otherplugin"] = "otherplugin"
}

function plugin.init(dependencies)
    local myplugin = dependencies["cp.plugins.myplugin"]
    local otherplugin = dependencies.otherplugin

    -- do other stuff with the dependencies

    return myinstance
end

return plugin
```

## Simple vs Complex Plugins

There are two types of plugin structures supported. The Simple version is a single `.lua` file that matches the above format for `plugin`. The Complex version is a folder containing an `init.lua` file that matches the above format.

The key advantage of Complex Plugins is that the folder can contain other resources, such as images, HTML templates, or other `.lua` files - including 3rd-party libraries if desired. These can be accessed via two main mechanisms:

1. The second `environment` parameter in the `init` function. This is a [cp.plugins.env](cp.plugins.env.md) table, which provides access to files and templates inside the plugin folder. See the [documentation](cp.plugins.env.md) for details.
2. The standard `require` method will allow loading of `*.lua` files inside the plugin from the `init.lua`.

For example, if you have a file called `foo.lua` in your folder, it can be `required` like so:

```lua
local foo = require("foo")
```

You do not have to know anything about where the plugin folder is stored, or use the plugin ID. Just use the local file path within the plugin. If you have another file in a `foo` folder called `bar.lua`, it can be loaded via:

```lua
local fooBar = require("foo.bar")
```

These modules will not be accessible to other plugins or to the main application. They are only available to code inside the plugin.

---

## Submodules
 * [cp.plugins.env](cp.plugins.env.md)
 * [cp.plugins.plugin](cp.plugins.plugin.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [CACHE](#cache)
 * [SETTINGS_DISABLED](#settings_disabled)

**Variables** - _Configurable values_
 * [IDS](#ids)

**Functions** - _API calls offered directly by the extension_
 * [addDependent](#adddependent)
 * [disable](#disable)
 * [enable](#enable)
 * [getDependents](#getdependents)
 * [getPlugin](#getplugin)
 * [getPluginIds](#getpluginids)
 * [getPluginModule](#getpluginmodule)
 * [getPlugins](#getplugins)
 * [init](#init)
 * [initPlugin](#initplugin)
 * [initPlugins](#initplugins)
 * [isDisabled](#isdisabled)
 * [loadComplexPlugin](#loadcomplexplugin)
 * [loadDependencies](#loaddependencies)
 * [loadSimplePlugin](#loadsimpleplugin)
 * [postInitPlugin](#postinitplugin)
 * [postInitPlugins](#postinitplugins)
 * [scanDirectory](#scandirectory)
 * [watchPluginPaths](#watchpluginpaths)


---

## API Documentation

#### Constants


### [CACHE](#cache)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.CACHE -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Plugin Cache                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 174](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L174) |

---


### [SETTINGS_DISABLED](#settings_disabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.SETTINGS_DISABLED -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Plugin Disabled Code                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 195](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L195) |

---

#### Variables


### [IDS](#ids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.IDS -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Plugin Status Codes                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 184](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L184) |

---

#### Functions


### [addDependent](#adddependent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.addDependent(id, dependentPlugin) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds the `dependentPlugin` as a dependent of the plugin with the specified id.                                                                     |
| **Parameters**                              | <ul><li>`id`                 - The plugin package ID.</li><li>`dependentPlugin`    - The plugin which is a dependent</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 450](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L450) |

---


### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.disable(...) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disabled the plugin(s) with the specified IDs and reloads the application.                                                                     |
| **Parameters**                              | <ul><li>`...` - The list of plugin package IDs.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin was disabled, or `false` if any of the plugins failed.</li><li>If disabling failed, the first ID that failed is returned as the second value.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 481](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L481) |

---


### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.enable(...) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables the plugin with the specified ID, and reloads the application.                                                                     |
| **Parameters**                              | <ul><li>`...` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugins had been disabled and are now enabled.</li><li>If enabling failed, the plugin ID which could not be enabled is returned as the second value.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 529](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L529) |

---


### [getDependents](#getdependents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.getDependents(pluginId)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves the list of dependent plugins for the specified plugin id.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The plugin ID.</li></ul> |
| **Returns**                                 | <ul><li>The table of dependents.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 467](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L467) |

---


### [getPlugin](#getplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.getPlugin(id) -> plugin`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves a plugin from the cache by ID.                                                                     |
| **Parameters**                              | <ul><li>id - The ID of the plugin you want to get</li></ul> |
| **Returns**                                 | <ul><li>The plugin</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 255](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L255) |

---


### [getPluginIds](#getpluginids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.getPluginIds() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves an array of the loaded plugin IDs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the list of plugin IDs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 242](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L242) |

---


### [getPluginModule](#getpluginmodule)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.getPluginModule(id) -> value`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an initialised plugin result with the specified `id`.                                                                     |
| **Parameters**                              | <ul><li>`id` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>the result of the plugin's `init(...)` function call.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 228](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L228) |

---


### [getPlugins](#getplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.getPlugins() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Retrieves an array of details about the set of loaded plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the list of plugins.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 268](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L268) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.init(paths) -> cp.plugins`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the plugin loader to look in the specified file paths for plugins.                                                                     |
| **Parameters**                              | <ul><li>`paths` - An array of paths to search for plugins in.</li></ul> |
| **Returns**                                 | <ul><li>`cp.plugins` - The module.</li></ul>          |
| **Notes**                                   | <ul><li>Plugins in earlier packages will take precedence over those in later paths, if there are duplicates.</li><li></li><li>Eg:</li><li></li><li>```lua</li><li>plugins.init({"~/Library/Application Support/CommandPost/Plugins"})</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 653](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L653) |

---


### [initPlugin](#initplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.initPlugin(id) -> module`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises a specific plugin with the specified path.                                                                     |
| **Parameters**                              | <ul><li>`id` - The LUA package to look in</li></ul> |
| **Returns**                                 | <ul><li>the result of the plugin's `init(...)` function call.</li></ul>          |
| **Notes**                                   | <ul><li>The plugin will only be loaded once, and the result of its `init(...)` function will be cached for future calls.</li><li></li><li>Eg:</li><li></li><li>```</li><li>plugins.initPlugin("cp.plugins.test.helloworld")</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L300) |

---


### [initPlugins](#initplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.initPlugins() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises all registered plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 285](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L285) |

---


### [isDisabled](#isdisabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.isDisabled(id) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified plugin ID is disabled. Plugins are enabled by default.                                                                     |
| **Parameters**                              | <ul><li>`id` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin is disabled.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 561](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L561) |

---


### [loadComplexPlugin](#loadcomplexplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.loadComplexPlugin(path) -> plugin`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a 'complex' plugin, which is a folder containing an `init.lua` file.                                                                     |
| **Parameters**                              | <ul><li>`path` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin is successfully post-initialised.</li></ul>          |
| **Notes**                                   | <ul><li>Complex plugins can also have other resources, accessible via an `cp.plugins.env` parameter passed to the `init()` function. For example, an image stored in the `images` folder inside the plugin can be accessed via:</li><li></li><li>```lua</li><li>function plugin.init(dependencies, env)</li><li>    local imagePath = env:pathToAbsolute("image/example.jpg")</li><li>end</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 810](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L810) |

---


### [loadDependencies](#loaddependencies)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.loadDependencies(plugin) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads the list of dependencies for the provided plugin.                                                                     |
| **Parameters**                              | <ul><li>`plugin` - The plugin object</li></ul> |
| **Returns**                                 | <ul><li>an array of the dependencies required by the plugin, or `nil` if any could not be loaded.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 410](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L410) |

---


### [loadSimplePlugin](#loadsimpleplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.loadSimplePlugin(id) -> plugin`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a 'simple' plugin, where it is defined by a single LUA script.                                                                     |
| **Parameters**                              | <ul><li>`path` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin is successfully post-initialised.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 779](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L779) |

---


### [postInitPlugin](#postinitplugin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.postInitPlugin(id) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs any post-initialisation functions declared for the specified plugin ID. Any dependencies will be post-initialised prior to the plugin being post-initialised.                                                                     |
| **Parameters**                              | <ul><li>`id` - The plugin package ID.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the plugin is successfully post-initialised.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 596](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L596) |

---


### [postInitPlugins](#postinitplugins)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.postInitPlugins() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Performs any post-initialisation required for plugins.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 575](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L575) |

---


### [scanDirectory](#scandirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.scanDirectory(directoryPath) -> cp.plugins`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Scans the specified directory and loads any plugins in the directory, along with any in sub-directories.                                                                     |
| **Parameters**                              | <ul><li>`directoryPath` - The path to the directory to scan.</li></ul> |
| **Returns**                                 | <ul><li>boolean - `true` if the path was loaded successfully, false if there were any issues.</li></ul>          |
| **Notes**                                   | <ul><li>Plugins can be simple or complex. Simple plugins are a single `*.lua` file, not named `init.lua`. Complex plugins are folders containing an `init.lua` file.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 718](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L718) |

---


### [watchPluginPaths](#watchpluginpaths)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.watchPluginPaths() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Watches the plugin paths for changes and reloads the  application if any change.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/plugins/init.lua line 700](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/init.lua#L700) |

---

