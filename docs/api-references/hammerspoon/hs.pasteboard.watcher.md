# hs.pasteboard.watcher

Watch for Pasteboard Changes.
macOS doesn't offer any API for getting Pasteboard notifications, so this extension uses polling to check for Pasteboard changes at a chosen interval (defaults to 0.25).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [interval](#interval)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [running](#running)
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Functions


### [interval](#interval)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.watcher.interval([value]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets or sets the polling interval (i.e. the frequency the pasteboard watcher checks the pasteboard).                                                                     |
| **Parameters**                              | <ul><li>value - an optional number to set the polling interval to.</li></ul> |
| **Returns**                                 | <ul><li>The polling interval as a number.</li></ul>          |
| **Notes**                                   | <ul><li>This only affects new watchers, not existing/running ones.</li><li>The default value is 0.25.</li></ul> |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.watcher.new(callbackFn[, name]) -> pasteboardWatcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates and starts a new `hs.pasteboard.watcher` object for watching for Pasteboard changes.                                                                     |
| **Parameters**                              | <ul><li>callbackFn - A function that will be called when the Pasteboard contents has changed. It should accept one parameter:
  A string containing the pasteboard contents or `nil` if the contents is not a valid string.</li><li>name - An optional string containing the name of the pasteboard. Defaults to the system pasteboard.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.pasteboard.watcher` object</li></ul>          |
| **Notes**                                   | <ul><li>Internally this extension uses a single `NSTimer` to check for changes to the pasteboard count every half a second.</li><li>Example usage:</li><li> ```lua</li><li> generalPBWatcher = hs.pasteboard.watcher.new(function(v) print(string.format("General Pasteboard Contents: %s", v)) end)</li><li> specialPBWatcher = hs.pasteboard.watcher.new(function(v) print(string.format("Special Pasteboard Contents: %s", v)) end, "special")</li><li> hs.pasteboard.writeObjects("This is on the general pasteboard.")</li><li> hs.pasteboard.writeObjects("This is on the special pasteboard.", "special")```</li></ul> |

---

#### Methods


### [running](#running)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.watcher:running() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether or not the Pasteboard Watcher is currently running.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean value indicating whether or not the timer is currently running.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.watcher:start() -> timer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts an `hs.pasteboard.watcher` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.pasteboard.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.pasteboard.watcher:stop() -> timer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops an `hs.pasteboard.watcher` object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.pasteboard.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

