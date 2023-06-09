# cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover

Browser Marker Popup.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [BrowserMarkerPopover](#BrowserMarkerPopover)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [chapter](#chapter)
 * [completed](#completed)
 * [delete](#delete)
 * [done](#done)
 * [name](#name)
 * [standard](#standard)
 * [toDo](#toDo)
* Methods - API calls which can only be made on an object returned by a constructor
 * [hide](#hide)
 * [show](#show)

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the Browser Marker Popover or not                                                                     |
| **Parameters**                              | <ul><li>element - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the Browser Marker Popover otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [BrowserMarkerPopover](#BrowserMarkerPopover)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover(parent) -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new Browser Marker Popover                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>The new `BrowserMarkerPopover` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [chapter](#chapter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.chapter <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Chapter" Marker button.                                                                     |

---

### [completed](#completed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.completed <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the "Completed" checkbox. This only available if you have a "To Do" marker selected.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |

---

### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.delete <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the "Delete" [Button](cp.ui.Button.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |

---

### [done](#done)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.done <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Done" [Button](cp.ui.Button.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |

---

### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.name <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Marker Name [TextField](cp.ui.TextField.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `TextField` object.</li></ul>          |

---

### [standard](#standard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.standard <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Standard" Marker button.                                                                     |

---

### [toDo](#toDo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.toDo <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "To Do" Marker button.                                                                     |

---
### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover:hide() -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Browser Marker Popover by clicking "Done" on the popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>BrowserMarkerPopover object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover:show() -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Browser Marker Popover by triggering "Add Marker and Modify" from the menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>BrowserMarkerPopover object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
