# cp.sourcewatcher

Watches folders for specific file extensions and reloads the app if they change.

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [filesChanged](#fileschanged)
 * [matchesExtensions](#matchesextensions)
 * [new](#new)
 * [start](#start)
 * [stop](#stop)
 * [watchPath](#watchpath)


---

## API Documentation

#### Methods


### [filesChanged](#fileschanged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher:filesChanged(files, flagTables) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks that the file that triggered the Path Watcher matches the extension given.                                                                     |
| **Parameters**                              | <ul><li>`files`      - Table of files to check as strings</li><li>`flagTables` - Table of flagTables (see: `hs.pathwatcher.new`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L67) |

---


### [matchesExtensions](#matchesextensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher:matchesExtensions(file) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks that the file that triggered the Path Watcher matches the extension given.                                                                     |
| **Parameters**                              | <ul><li>`file`       - The file as string</li></ul> |
| **Returns**                                 | <ul><li>A boolean value</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L39) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher.new(extensions) -> sourcewatcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new `sourcewatcher` instance.                                                                     |
| **Parameters**                              | <ul><li>`extensions`     - Extensions</li></ul> |
| **Returns**                                 | <ul><li>A sourcewatcher instance</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L20) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher:start() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts a Source Watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 129](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L129) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher:stop() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops a Source Watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 112](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L112) |

---


### [watchPath](#watchpath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.sourcewatcher:watchPath(path) -> sourcewatcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Watches a path.                                                                     |
| **Parameters**                              | <ul><li>`path`       - The path you want to watch as a string.</li></ul> |
| **Returns**                                 | <ul><li>sourcewatcher</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/sourcewatcher/init.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/sourcewatcher/init.lua#L93) |

---

