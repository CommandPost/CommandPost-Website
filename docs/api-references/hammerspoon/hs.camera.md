# hs.camera

Inspect the system's camera devices

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [allCameras](#allcameras)
 * [isWatcherRunning](#iswatcherrunning)
 * [setWatcherCallback](#setwatchercallback)
 * [startWatcher](#startwatcher)
 * [stopWatcher](#stopwatcher)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [connectionID](#connectionid)
 * [isInUse](#isinuse)
 * [isPropertyWatcherRunning](#ispropertywatcherrunning)
 * [name](#name)
 * [setPropertyWatcherCallback](#setpropertywatchercallback)
 * [startPropertyWatcher](#startpropertywatcher)
 * [stopPropertyWatcher](#stoppropertywatcher)
 * [uid](#uid)


---

## API Documentation

#### Functions


### [allCameras](#allcameras)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera.allCameras() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get all the cameras known to the system                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing all of the known cameras</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 329](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L329){target="_blank"} |

---


### [isWatcherRunning](#iswatcherrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera.isWatcherRunning() -> Boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the camera devices watcher is running                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, True if the watcher is running, otherwise False</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 468](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L468){target="_blank"} |

---


### [setWatcherCallback](#setwatchercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera.setWatcherCallback(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets/clears the callback function for the camera devices watcher                                                                     |
| **Parameters**                              | <ul><li>fn - A callback function, or nil to remove a previously set callback. The callback should accept a two arguments (see Notes below)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The callback will be called when a camera is added or removed from the system</li><li>To watch for changes within a single camera device, see `hs.camera:newWatcher()`</li><li>The callback function arguments are:</li><li> An hs.camera device object for the affected device</li><li> A string, either "Added" or "Removed" depending on whether the device was added or removed from the system</li><li>For "Removed" events, most methods on the hs.camera device object will not function correctly anymore and the device object passed to the callback is likely to be useless. It is recommended you re-check `hs.camera.allCameras()` and keep records of the cameras you care about</li><li>Passing nil will cause the watcher to stop if it is running</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 486](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L486){target="_blank"} |

---


### [startWatcher](#startwatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera.startWatcher()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Starts the camera devices watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 378](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L378){target="_blank"} |

---


### [stopWatcher](#stopwatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera.stopWatcher()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stops the camera devices watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 435](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L435){target="_blank"} |

---

#### Methods


### [connectionID](#connectionid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:connectionID() -> String`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the raw connection ID of the camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the connection ID of the camera</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 554](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L554){target="_blank"} |

---


### [isInUse](#isinuse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:isInUse() -> Boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the usage status of the camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, True if the camera is in use, otherwise False</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 590](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L590){target="_blank"} |

---


### [isPropertyWatcherRunning](#ispropertywatcherrunning)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:isPropertyWatcherRunning() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the property watcher on a camera object is running                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, True if the property watcher is running, otherwise False</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 691](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L691){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:name() -> String`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the name of the camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the camera</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 572](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L572){target="_blank"} |

---


### [setPropertyWatcherCallback](#setpropertywatchercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:setPropertyWatcherCallback(fn) -> hs.camera object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or clears a callback for when the properties of an hs.camera object change                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when properties of the camera change, or nil to clear a previously set callback. The function should accept the following parameters:
  The hs.camera object that changed
  A string describing the property that changed. Possible values are:
  gone - The device's "in use" status changed (ie another app started using the camera, or stopped using it)
  A string containing the scope of the event, this will likely always be "glob"
  A number containing the element of the event, this will likely always be "0"</li></ul> |
| **Returns**                                 | <ul><li>The `hs.camera` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 608](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L608){target="_blank"} |

---


### [startPropertyWatcher](#startpropertywatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:startPropertyWatcher()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the property watcher on a camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.camera` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 644](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L644){target="_blank"} |

---


### [stopPropertyWatcher](#stoppropertywatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:stopPropertyWatcher()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the property watcher on a camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.camera` object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 671](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L671){target="_blank"} |

---


### [uid](#uid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.camera:uid() -> String`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get the UID of the camera                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the UID of the camera</li></ul>          |
| **Notes**                                   | <ul><li>The UID is not guaranteed to be stable across reboots</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/camera/libcamera.m line 533](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/camera/libcamera.m#L533){target="_blank"} |

---

