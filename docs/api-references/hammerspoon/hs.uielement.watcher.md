# hs.uielement.watcher

Watch for events on certain UI elements (including windows and applications)

You can watch the following events:
### Application-level events
See hs.application.watcher for more events you can watch.
* hs.uielement.watcher.applicationActivated: The current application switched to this one.
* hs.uielement.watcher.applicationDeactivated: The current application is no longer this one.
* hs.uielement.watcher.applicationHidden: The application was hidden.
* hs.uielement.watcher.applicationShown: The application was shown.

#### Focus change events
These events are watched on the application level, but send the relevant child element to the handler.
* hs.uielement.watcher.mainWindowChanged: The main window of the application was changed.
* hs.uielement.watcher.focusedWindowChanged: The focused window of the application was changed. Note that the application may not be activated itself.
* hs.uielement.watcher.focusedElementChanged: The focused UI element of the application was changed.

### Window-level events
* hs.uielement.watcher.windowCreated: A window was created. You should watch for this event on the application, or the parent window.
* hs.uielement.watcher.windowMoved: The window was moved.
* hs.uielement.watcher.windowResized: The window was resized.
* hs.uielement.watcher.windowMinimized: The window was minimized.
* hs.uielement.watcher.windowUnminimized: The window was unminimized.

### Element-level events
These work on all UI elements, including windows.
* hs.uielement.watcher.elementDestroyed: The element was destroyed.
* hs.uielement.watcher.titleChanged: The element's title was changed.

## API Overview
### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [element](#element)
 * [pid](#pid)
 * [start](#start)
 * [stop](#stop)


## API Documentation

### Methods


### [element](#element)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement.watcher:element() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the element the watcher is watching.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The element the watcher is watching.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pid](#pid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement.watcher:pid() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the PID of the element being watched                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The PID of the element being watched</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement.watcher:start(events) -> hs.uielement.watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tells the watcher to start watching for the given list of events.                                                                     |
| **Parameters**                              | <ul><li>An array of events to be watched for.</li></ul> |
| **Returns**                                 | <ul><li>hs.uielement.watcher</li></ul>          |
| **Notes**                                   | <ul><li>See hs.uielement.watcher for a list of events. You may also specify arbitrary event names as strings.</li><li>Does nothing if the watcher has already been started. To start with different events, stop it first.</li></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement.watcher:stop() -> hs.uielement.watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Tells the watcher to stop listening for events.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>hs.uielement.watcher</li></ul>          |
| **Notes**                                   | <ul><li>This is automatically called if the element is destroyed.</li></ul>                |

---
