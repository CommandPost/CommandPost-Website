# cp.plugins.env

Provides access to resources in the plugin environment. In generally, this will be files stored in a Complex Plugin's folder.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [compileTemplate](#compiletemplate)
 * [pathToAbsolute](#pathtoabsolute)
 * [pathToURL](#pathtourl)
 * [readResource](#readresource)
 * [renderTemplate](#rendertemplate)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env.new(rootPath) -> cp.plugins.env`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `env` pointing at the specified root folder path.                                                                     |
| **Parameters**                              | <ul><li>`rootPath` the path to the plugin's root folder.</li></ul> |
| **Returns**                                 | <ul><li>The new `env` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L21) |

---

#### Methods


### [compileTemplate](#compiletemplate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env:compileTemplate(view[, layout]) -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Compiles a Resty Template within the context of the plugin. The `view` may be a resource path pointing at a template file in the plugin, or may be raw template markup. The `layout` is an optional path/template for a layout template. See the [Resty Template](https://github.com/bungle/lua-resty-template) documentation for details.                                                                     |
| **Parameters**                              | <ul><li>`view`	- The local path inside the plugin to the template file, or raw template markup.</li><li>`layout`	- The local path inside the plugin to the layout file.</li></ul> |
| **Returns**                                 | <ul><li>A function which will render the template.</li></ul>          |
| **Notes**                                   | <ul><li>It returns a function which can have a `model` table passed in which will provide variables/functions/etc that the template can access while rendering. The function can be reused multiple times with different context values.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L102) |

---


### [pathToAbsolute](#pathtoabsolute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env:pathToAbsolute(resourcePath) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the absolute path to the file referred to by the relative resource path. If an image is stored as `images/my.jpg` in the plugin, the resource path will be `"images/my.jpg"`. The result will be the full path to that file. If the file cannot be found in the plugin, it will look in the `cp/resources/assets` folder for globally-shared resources.                                                                     |
| **Parameters**                              | <ul><li>`resourcePath` - The local path to the resource inside the plugin.</li></ul> |
| **Returns**                                 | <ul><li>The absolute path to the resource, or `nil` if it does not exist.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 37](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L37) |

---


### [pathToURL](#pathtourl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env:pathToURL(resourcePath) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an absolute `file://` URL to the file referred to by the relative resource path. If an image is stored as `images/my.jpg` in the plugin, the resource path will be `"images/my.jpg"`. The result will be a URL to that file. If the file cannot be found in the plugin, it will look in the `cp/resources/assets` folder for globally-shared resources.                                                                     |
| **Parameters**                              | <ul><li>`resourcePath` - The local path to the resource inside the plugin.</li></ul> |
| **Returns**                                 | <ul><li>The absolute URL to the resource, or `nil` if it does not exist.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 60](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L60) |

---


### [readResource](#readresource)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env:readResource(resourcePath) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads the contents of the resource at the specified resource path. This is returned as a string of data (which may or may not be an actual readable string, depending on the source content).                                                                     |
| **Parameters**                              | <ul><li>`resourcePath`	- The local path to the resource inside the plugin.</li></ul> |
| **Returns**                                 | <ul><li>The contents of the resouce, or `nil` if the file does not exist.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 78](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L78) |

---


### [renderTemplate](#rendertemplate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plugins.env:renderTemplate(view[, model[, layout]]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Renders a Resty Template within the context of the plugin. The `view` may be a resource path pointing at a template file in the plugin, or may be raw template markup. The `layout` is an optional path/template for a layout template. See the [Resty Template](https://github.com/bungle/lua-resty-template) documentation for details.                                                                     |
| **Parameters**                              | <ul><li>`view`	- The local path inside the plugin to the template file, or raw template markup.</li><li>`model`	- The model which provides variables/functions/etc to the template.</li><li>`layout`	- The local path inside the plugin to the layout file.</li></ul> |
| **Returns**                                 | <ul><li>A function which will render the template.</li></ul>          |
| **Notes**                                   | <ul><li>The `model` is a table which will provide variables/functions/etc that the template can access while rendering.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/plugins/env.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plugins/env.lua#L146) |

---

