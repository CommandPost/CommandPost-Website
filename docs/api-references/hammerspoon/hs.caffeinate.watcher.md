# hs.caffeinate.watcher

Watch for display and system sleep/wake/power events
and for fast user switching session events.

This module is based primarily on code from the previous incarnation of Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [screensaverDidStart](#screensaverdidstart)
 * [screensaverDidStop](#screensaverdidstop)
 * [screensaverWillStop](#screensaverwillstop)
 * [screensDidLock](#screensdidlock)
 * [screensDidSleep](#screensdidsleep)
 * [screensDidUnlock](#screensdidunlock)
 * [screensDidWake](#screensdidwake)
 * [sessionDidBecomeActive](#sessiondidbecomeactive)
 * [sessionDidResignActive](#sessiondidresignactive)
 * [systemDidWake](#systemdidwake)
 * [systemWillPowerOff](#systemwillpoweroff)
 * [systemWillSleep](#systemwillsleep)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [start](#start)
 * [stop](#stop)


## API Documentation

### Constants


### [screensaverDidStart](#screensaverdidstart)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverDidStart`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver started                                                                     |

---

### [screensaverDidStop](#screensaverdidstop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverDidStop`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver stopped                                                                     |

---

### [screensaverWillStop](#screensaverwillstop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensaverWillStop`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screensaver is about to stop                                                                     |

---

### [screensDidLock](#screensdidlock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidLock`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screen was locked                                                                     |

---

### [screensDidSleep](#screensdidsleep)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidSleep`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The displays have gone to sleep                                                                     |

---

### [screensDidUnlock](#screensdidunlock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidUnlock`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The screen was unlocked                                                                     |

---

### [screensDidWake](#screensdidwake)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.screensDidWake`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The displays have woken from sleep                                                                     |

---

### [sessionDidBecomeActive](#sessiondidbecomeactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.sessionDidBecomeActive`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The session became active, due to fast user switching                                                                     |

---

### [sessionDidResignActive](#sessiondidresignactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.sessionDidResignActive`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The session is no longer active, due to fast user switching                                                                     |

---

### [systemDidWake](#systemdidwake)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.systemDidWake`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The system woke from sleep                                                                     |

---

### [systemWillPowerOff](#systemwillpoweroff)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.caffeinate.watcher.systemWillPowerOff`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The user requested a logout or shutdown                                                                     |

---

### [systemWillSleep](#systemwillsleep)

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
