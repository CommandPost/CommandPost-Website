# hs.uielement

A generalized framework for working with OSX UI elements

## Submodules
 * [hs.uielement.watcher](hs.uielement.watcher.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [focusedElement](#focusedelement)
* Methods - API calls which can only be made on an object returned by a constructor
 * [isApplication](#isapplication)
 * [isWindow](#iswindow)
 * [newWatcher](#newwatcher)
 * [role](#role)
 * [selectedText](#selectedtext)

## API Documentation

### Functions


### [focusedElement](#focusedelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement.focusedElement() -> element or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the currently focused UI element                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An `hs.uielement` object or nil if no object could be found</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [isApplication](#isapplication)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement:isApplication() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the UI element represents an application.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the UI element is an application</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isWindow](#iswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement:isWindow() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether the UI element represents a window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the UI element is a window, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [newWatcher](#newwatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement:newWatcher(handler[, userData]) -> hs.uielement.watcher or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new watcher                                                                     |
| **Parameters**                              | <ul><li>A function to be called when a watched event occurs.  The function will be passed the following arguments:
  element: The element the event occurred on. Note this is not always the element being watched.
  event: The name of the event that occurred.
  watcher: The watcher object being created.
  userData: The userData you included, if any.</li><li>an optional userData object which will be included as the final argument to the callback function when it is called.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.uielement.watcher` object, or `nil` if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [role](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement:role() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the role of the element.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the role of the UI element</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [selectedText](#selectedtext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uielement:selectedText() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the selected text in the element                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the selected text, or nil if none could be found</li></ul>          |
| **Notes**                                   | <ul><li>Many applications (e.g. Safari, Mail, Firefox) do not implement the necessary accessibility features for this to work in their web views</li></ul>                |

---
