# hs.keycodes

Convert between key-strings and key-codes. Also provides functionality for querying and changing keyboard layouts.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [map](#map)

### **Functions** - _API calls offered directly by the extension_
 * [currentLayout](#currentlayout)
 * [currentLayoutIcon](#currentlayouticon)
 * [currentMethod](#currentmethod)
 * [currentSourceID](#currentsourceid)
 * [iconForLayoutOrMethod](#iconforlayoutormethod)
 * [inputSourceChanged](#inputsourcechanged)
 * [layouts](#layouts)
 * [methods](#methods)
 * [setLayout](#setlayout)
 * [setMethod](#setmethod)


## API Documentation

### Constants


### [map](#map)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.map`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A mapping from string representation of a key to its keycode, and vice versa.                                                                     |
| **Notes**                                   | <ul><li>For example: keycodes[1] == "s", and keycodes["s"] == 1, and so on.</li><li>This is primarily used by the hs.eventtap and hs.hotkey extensions.</li><li>Valid strings are any single-character string, or any of the following strings:</li><li> f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15,</li><li> f16, f17, f18, f19, f20, pad., pad*, pad+, pad/, pad-, pad=,</li><li> pad0, pad1, pad2, pad3, pad4, pad5, pad6, pad7, pad8, pad9,</li><li> padclear, padenter, return, tab, space, delete, escape, help,</li><li> home, pageup, forwarddelete, end, pagedown, left, right, down, up,</li><li> shift, rightshift, cmd, rightcmd, alt, rightalt, ctrl, rightctrl,</li><li> capslock, fn</li></ul>                |

---
### Functions


### [currentLayout](#currentlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.currentLayout() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current keyboard layout                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the name of the current keyboard layout</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [currentLayoutIcon](#currentlayouticon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.currentLayoutIcon() -> hs.image object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the icon of the current keyboard layout                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An hs.image object containing the icon, if available</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [currentMethod](#currentmethod)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.currentMethod() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get current input method                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Name of current input method, or nil</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [currentSourceID](#currentsourceid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.currentSourceID([sourceID]) -> string | boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set the source id for the keyboard input source                                                                     |
| **Parameters**                              | <ul><li>sourceID - an optional string specifying the input source to set for keyboard input</li></ul> |
| **Returns**                                 | <ul><li>If no parameter is provided, returns a string containing the source id for the current keyboard layout or input method; if a parameter is provided, returns true or false specifying whether or not the input source was able to be changed.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [iconForLayoutOrMethod](#iconforlayoutormethod)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.iconForLayoutOrMethod(sourceName) -> hs.image object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an hs.image object for a given keyboard layout or input method                                                                     |
| **Parameters**                              | <ul><li>sourceName - A string containing the name of an input method or keyboard layout</li></ul> |
| **Returns**                                 | <ul><li>An hs.image object, or nil if no image could be found</li></ul>          |
| **Notes**                                   | <ul><li>Not all layouts/methods have icons, so you should assume this will return nil at some point</li></ul>                |

---

### [inputSourceChanged](#inputsourcechanged)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.inputSourceChanged(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the function to be called when your input source (i.e. qwerty, dvorak, colemac) changes.                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when the input source changes. No arguments are supplied to the function.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This may be helpful for rebinding your hotkeys to appropriate keys in the new layout</li><li>Setting this will un-set functions previously registered by this function.</li></ul>                |

---

### [layouts](#layouts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.layouts([sourceID]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all of the enabled keyboard layouts that the keyboard input source can be switched to                                                                     |
| **Parameters**                              | <ul><li>sourceID - an optional boolean, default false, indicating whether the keyboard layout names should be returned (false) or their source IDs (true).</li></ul> |
| **Returns**                                 | <ul><li>A table containing a list of keyboard layouts enabled in System Preferences</li></ul>          |
| **Notes**                                   | <ul><li>Only those layouts which can be explicitly switched to will be included in the table.  Keyboard layouts which are part of input methods are not included.  See `hs.keycodes.methods`.</li></ul>                |

---

### [methods](#methods)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.methods([sourceID]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all of the enabled input methods that the keyboard input source can be switched to                                                                     |
| **Parameters**                              | <ul><li>sourceID - an optional boolean, default false, indicating whether the keyboard input method names should be returned (false) or their source IDs (true).</li></ul> |
| **Returns**                                 | <ul><li>A table containing a list of input methods enabled in System Preferences</li></ul>          |
| **Notes**                                   | <ul><li>Keyboard layouts which are not part of an input method are not included in this table.  See `hs.keycodes.layouts`.</li></ul>                |

---

### [setLayout](#setlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.setLayout(layoutName) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Changes the system keyboard layout                                                                     |
| **Parameters**                              | <ul><li>layoutName - A string containing the name of an enabled keyboard layout</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the layout was successfully changed, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setMethod](#setmethod)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.keycodes.setMethod(methodName) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Changes the system input method                                                                     |
| **Parameters**                              | <ul><li>methodName - A string containing the name of an enabled input method</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the method was successfully changed, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
