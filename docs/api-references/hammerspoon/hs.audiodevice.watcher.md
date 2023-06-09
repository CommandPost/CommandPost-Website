# hs.audiodevice.watcher

Watch for system level audio hardware events

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [isRunning](#isrunning)
 * [setCallback](#setcallback)
 * [start](#start)
 * [stop](#stop)


## API Documentation

### Functions


### [isRunning](#isrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.watcher.isRunning() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the status of the audio device watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the watcher is running, false if not</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setCallback](#setcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.watcher.setCallback(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the callback function for the audio device watcher                                                                     |
| **Parameters**                              | <ul><li>fn - A callback function, or nil to remove a previously set callback. The callback function should accept a single argument (see Notes below)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This watcher will call the callback when various audio device related events occur (e.g. an audio device appears/disappears, a system default audio device setting changes, etc)</li><li>To watch for changes within an audio device, see `hs.audiodevice:newWatcher()`</li><li>The callback function argument is a string which may be one of the following strings, but might also be a different string entirely:</li><li> dIn  - Default audio input device setting changed (Note that there is a space character after `dIn`, because these values always have to be four characters long)</li><li> dOut - Default audio output device setting changed</li><li> sOut - Default system audio output setting changed (i.e. the device that system sound effects use. This may also be triggered by dOut, depending on the user's settings)</li><li> dev# - An audio device appeared or disappeared</li><li>The callback will be called for each individual audio device event received from the OS, so you may receive multiple events for a single physical action (e.g. unplugging the default audio device will cause `dOut` and `dev#` events, and possibly `sOut` too)</li><li>Passing nil will cause the watcher to stop if it is already running</li></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.watcher.start()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the audio device watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.audiodevice.watcher.stop() -> hs.audiodevice.watcher`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the audio device watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.audiodevice.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
