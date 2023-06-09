# cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover

Browser Marker Popup.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [BrowserMarkerPopover](#browsermarkerpopover)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [chapter](#chapter)
 * [completed](#completed)
 * [delete](#delete)
 * [done](#done)
 * [name](#name)
 * [standard](#standard)
 * [toDo](#todo)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [hide](#hide)
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if a GUI element is the Browser Marker Popover or not                                                                     |
| **Parameters**                              | <ul><li>element - The element you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `element` is the Browser Marker Popover otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L26) |

---

#### Constructors


### [BrowserMarkerPopover](#browsermarkerpopover)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover(parent) -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new Browser Marker Popover                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object</li></ul> |
| **Returns**                                 | <ul><li>The new `BrowserMarkerPopover` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L39) |

---

#### Fields


### [chapter](#chapter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.chapter <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Chapter" Marker button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L133) |

---


### [completed](#completed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.completed <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the "Completed" checkbox. This only available if you have a "To Do" marker selected.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 172](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L172) |

---


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.delete <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the "Delete" [Button](cp.ui.Button.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L157) |

---


### [done](#done)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.done <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Done" [Button](cp.ui.Button.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `Button` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 142](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L142) |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.name <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Gets the Marker Name [TextField](cp.ui.TextField.md).                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A `TextField` object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 187](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L187) |

---


### [standard](#standard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.standard <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Standard" Marker button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L115) |

---


### [toDo](#todo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover.toDo <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "To Do" Marker button.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 124](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L124) |

---

#### Methods


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover:hide() -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Browser Marker Popover by clicking "Done" on the popover.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>BrowserMarkerPopover object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 81](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L81) |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.Browser.BrowserMarkerPopover:show() -> BrowserMarkerPopover`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Browser Marker Popover by triggering "Add Marker and Modify" from the menu bar.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>BrowserMarkerPopover object</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua line 65](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/BrowserMarkerPopover.lua#L65) |

---

