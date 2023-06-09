# hs.caffeinate.watcher

Watch for display and system sleep/wake/power events
and for fast user switching session events.

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

## API Overview
* Constants - Useful values which cannot be changed
 * [screensaverDidStart](#screensaverDidStart)
 * [screensaverDidStop](#screensaverDidStop)
 * [screensaverWillStop](#screensaverWillStop)
 * [screensDidLock](#screensDidLock)
 * [screensDidSleep](#screensDidSleep)
 * [screensDidUnlock](#screensDidUnlock)
 * [screensDidWake](#screensDidWake)
 * [sessionDidBecomeActive](#sessionDidBecomeActive)
 * [sessionDidResignActive](#sessionDidResignActive)
 * [systemDidWake](#systemDidWake)
 * [systemWillPowerOff](#systemWillPowerOff)
 * [systemWillSleep](#systemWillSleep)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constants


### [screensaverDidStart](#screensaverDidStart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverDidStart`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver started                                                                     |

---

### [screensaverDidStop](#screensaverDidStop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverDidStop`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver stopped                                                                     |

---

### [screensaverWillStop](#screensaverWillStop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverWillStop`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver is about to stop                                                                     |

---

### [screensDidLock](#screensDidLock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidLock`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screen was locked                                                                     |

---

### [screensDidSleep](#screensDidSleep)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidSleep`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The displays have gone to sleep                                                                     |

---

### [screensDidUnlock](#screensDidUnlock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidUnlock`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screen was unlocked                                                                     |

---

### [screensDidWake](#screensDidWake)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidWake`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The displays have woken from sleep                                                                     |

---

### [sessionDidBecomeActive](#sessionDidBecomeActive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.sessionDidBecomeActive`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The session became active, due to fast user switching                                                                     |

---

### [sessionDidResignActive](#sessionDidResignActive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.sessionDidResignActive`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The session is no longer active, due to fast user switching                                                                     |

---

### [systemDidWake](#systemDidWake)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.systemDidWake`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The system woke from sleep                                                                     |

---

### [systemWillPowerOff](#systemWillPowerOff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.systemWillPowerOff`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The user requested a logout or shutdown                                                                     |

---

### [systemWillSleep](#systemWillSleep)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.systemWillSleep`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The system is preparing to sleep                                                                     |

---
### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.new(fn) -> watcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a watcher object for system and display sleep/wake/power events                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when system/display events happen. It should accept one parameter:
  An event type (see the constants defined above)</li></ul> |
| **Returns**                                 | <ul><li>An `hs.caffeinate.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher:start()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the sleep/wake watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.caffeinate.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher:stop()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the sleep/wake watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.caffeinate.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
