# hs.doc

Create documentation objects for interactive help within Hammerspoon

The documentation object created is a table with tostring metamethods allowing access to a specific functions documentation by appending the path to the method or function to the object created.

From the Hammerspoon console:

      doc = require("hs.doc")
      doc.hs.application

Results in:

      Manipulate running applications

      [submodules]
      hs.application.watcher

      [subitems]
      hs.application:activate([allWindows]) -> bool
      hs.application:allWindows() -> window[]
          ...
      hs.application:visibleWindows() -> win[]

By default, the internal core documentation and portions of the Lua 5.3 manual, located at http://www.lua.org/manual/5.3/manual.html, are already registered for inclusion within this documentation object, but you can register additional documentation from 3rd party modules with `hs.registerJSONFile(...)`.

## Submodules
 * [hs.doc.builder](hs.doc.builder.md)
 * [hs.doc.hsdocs](hs.doc.hsdocs.md)
 * [hs.doc.markdown](hs.doc.markdown.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [help](#help)
 * [locateJSONFile](#locateJSONFile)
 * [preloadSpoonDocs](#preloadSpoonDocs)
 * [registeredFiles](#registeredFiles)
 * [registerJSONFile](#registerJSONFile)
 * [unregisterJSONFile](#unregisterJSONFile)

## API Documentation

### Functions

| [help](#help)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.help(identifier)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prints the documentation for some part of Hammerspoon's API and Lua 5.3.  This function has also been aliased as `hs.help` and `help` as a shorthand for use within the Hammerspoon console.                                                                     |
| **Parameters**                              | <ul><li>identifier - A string containing the signature of some part of Hammerspoon's API (e.g. `"hs.reload"`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function is mainly for runtime API help while using Hammerspoon's Console</li><li></li><li>Documentation files registered with [hs.doc.registerJSONFile](#registerJSONFile) or [hs.doc.preloadSpoonDocs](#preloadSpoonDocs) that have not yet been actually loaded will be loaded when this command is invoked in any of the forms described below.</li><li></li><li>You can also access the results of this function by the following methods from the console:</li><li>  help("prefix.path") -- quotes are required, e.g. `help("hs.reload")`</li><li>  help.prefix.path -- no quotes are required, e.g. `help.hs.reload`</li><li>    `prefix` can be one of the following:</li><li>      `hs`    - provides documentation for Hammerspoon's builtin commands and modules</li><li>      `spoon` - provides documentation for the Spoons installed on your system</li><li>      `lua`   - provides documentation for the version of lua Hammerspoon is using, currently 5.3</li><li>        `lua._man` - provides the table of contents for the Lua 5.3 manual.  You can pull up a specific section of the lua manual by including the chapter (and subsection) like this: `lua._man._3_4_8`.</li><li>        `lua._C`   - provides documentation specifically about the Lua C API for use when developing modules which require external libraries.</li><li>    `path` is one or more components, separated by a period specifying the module, submodule, function, or method you wish to view documentation for.</li></ul>                |

| [locateJSONFile](#locateJSONFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.locateJSONFile(module) -> path | false, message`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Locates the JSON file corresponding to the specified third-party module or Spoon by searching package.path and package.cpath.                                                                     |
| **Parameters**                              | <ul><li>module - the name of the module to locate a JSON file for</li></ul> |
| **Returns**                                 | <ul><li>the path to the JSON file, or `false, error` if unable to locate a corresponding JSON file.</li></ul>          |
| **Notes**                                   | <ul><li>The JSON should be named 'docs.json' and located in the same directory as the `lua` or `so` file which is used when the module is loaded via `require`.</li><li></li><li>The documentation for core modules is stored in the JSON file specified by the `hs.docstrings_json_file` variable; this function is intended for use in locating the documentation file for third party modules and Spoons.</li></ul>                |

| [preloadSpoonDocs](#preloadSpoonDocs)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.preloadSpoonDocs()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Locates all installed Spoon documentation files and marks them for loading the next time the [hs.doc.help](#help) function is invoked.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [registeredFiles](#registeredFiles)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.registeredFiles() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the list of registered JSON files.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the list of registered JSON files</li></ul>          |
| **Notes**                                   | <ul><li>The table returned by this function has a metatable including a __tostring method which allows you to see the list of registered files by simply typing `hs.doc.registeredFiles()` in the Hammerspoon Console.</li><li></li><li>By default, the internal core documentation and portions of the Lua 5.3 manual, located at http://www.lua.org/manual/5.3/manual.html, are already registered for inclusion within this documentation object.</li><li></li><li>You can unregister these defaults if you wish to start with a clean slate with the following commands:</li><li>  `hs.doc.unregisterJSONFile(hs.docstrings_json_file)` -- to unregister the Hammerspoon API docs</li><li>  `hs.doc.unregisterJSONFile((hs.docstrings_json_file:gsub("/docs.json$","/lua.json")))` -- to unregister the Lua 5.3 Documentation.</li></ul>                |

| [registerJSONFile](#registerJSONFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.registerJSONFile(jsonfile, [isSpoon]) -> status[, message]`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Register a JSON file for inclusion when Hammerspoon generates internal documentation.                                                                     |
| **Parameters**                              | <ul><li>jsonfile - A string containing the location of a JSON file</li><li>isSpoon  - an optional boolean, default false, specifying that the documentation should be added to the `spoons` sub heading in the documentation hierarchy.</li></ul> |
| **Returns**                                 | <ul><li>status - Boolean flag indicating if the file was registered or not.  If the file was not registered, then a message indicating the error is also returned.</li></ul>          |
| **Notes**                                   | <ul><li>this function just registers the documentation file; it won't actually be loaded and parsed until [hs.doc.help](#help) is invoked.</li></ul>                |

| [unregisterJSONFile](#unregisterJSONFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.unregisterJSONFile(jsonfile) -> status[, message]`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Remove a JSON file from the list of registered files.                                                                     |
| **Parameters**                              | <ul><li>jsonfile - A string containing the location of a JSON file</li></ul> |
| **Returns**                                 | <ul><li>status - Boolean flag indicating if the file was unregistered or not.  If the file was not unregistered, then a message indicating the error is also returned.</li></ul>          |
| **Notes**                                   | <ul><li>This function requires the rebuilding of the entire documentation tree for all remaining registered files, so the next time help is queried with [hs.doc.help](#help), there may be a slight one-time delay.</li></ul>                |

