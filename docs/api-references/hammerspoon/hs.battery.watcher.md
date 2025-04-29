# hs.battery.watcher

Watch for battery/power state changes

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.watcher.new(fn) -> watcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a battery watcher                                                                     |
| **Parameters**                              | <ul><li>A function that will be called when the battery state changes. The function should accept no arguments.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.battery.watcher` object</li></ul>          |
| **Notes**                                   | <ul><li>Because the callback function accepts no arguments, tracking of state of changing battery attributes is the responsibility of the user (see https://github.com/Hammerspoon/hammerspoon/issues/166 for discussion)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery_watcher.m line 44](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery_watcher.m#L44) |

---

#### Methods


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.watcher:start() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the battery watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.battery.watcher` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery_watcher.m line 75](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery_watcher.m#L75) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.battery.watcher:stop() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the battery watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.battery.watcher` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/battery/libbattery_watcher.m line 97](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/battery/libbattery_watcher.m#L97) |

---

