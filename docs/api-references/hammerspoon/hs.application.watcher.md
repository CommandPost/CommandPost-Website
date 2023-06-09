# hs.application.watcher

Watch for application launch/terminate events

This module is based primarily on code from the previous incarnation of Mjolnir by [Markus Engelbrecht](https://github.com/mgee) and [Steven Degutis](https://github.com/sdegutis/).

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [activated](#activated)
 * [deactivated](#deactivated)
 * [hidden](#hidden)
 * [launched](#launched)
 * [launching](#launching)
 * [terminated](#terminated)
 * [unhidden](#unhidden)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Constants


### [activated](#activated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.activated`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been activated (i.e. given keyboard/mouse focus)                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 33](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L33) |

---


### [deactivated](#deactivated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.deactivated`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been deactivated (i.e. lost keyboard/mouse focus)                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 37](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L37) |

---


### [hidden](#hidden)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.hidden`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been hidden                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 25](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L25) |

---


### [launched](#launched)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.launched`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been launched                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 17](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L17) |

---


### [launching](#launching)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.launching`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application is in the process of being launched                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 13](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L13) |

---


### [terminated](#terminated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.terminated`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been terminated                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L21) |

---


### [unhidden](#unhidden)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.unhidden`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | An application has been unhidden                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 29](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L29) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher.new(fn) -> watcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an application event watcher                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when application events happen. It should accept three parameters:
  A string containing the name of the application
  An event type (see the constants defined above)
  An `hs.application` object representing the application, or nil if the application couldn't be found</li></ul> |
| **Returns**                                 | <ul><li>An `hs.application.watcher` object</li></ul>          |
| **Notes**                                   | <ul><li>If the function is called with an event type of `hs.application.watcher.terminated` then the application name parameter will be `nil` and the `hs.application` parameter, will only be useful for getting the UNIX process ID (i.e. the PID) of the application</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 142](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L142) |

---

#### Methods


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher:start()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the application watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.application.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 224](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L224) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.application.watcher:stop()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the application watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.application.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/application/libapplication_watcher.m line 247](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/application/libapplication_watcher.m#L247) |

---

