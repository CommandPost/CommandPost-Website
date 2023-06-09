# plugins.finder.window

Handy tools for Windows Management in macOS.

Inspired by [WinWin](http://www.hammerspoon.org/Spoons/WinWin.html) for [Hammerspoon](http://www.hammerspoon.org/).

## API Overview
### **Variables** - _Configurable values_
 * [gridparts](#gridparts)

### **Functions** - _API calls offered directly by the extension_
 * [centerCursor](#centercursor)
 * [grid](#grid)
 * [hints](#hints)
 * [moveAndResize](#moveandresize)
 * [moveToScreen](#movetoscreen)
 * [stepMove](#stepmove)
 * [stepResize](#stepresize)
 * [undo](#undo)


## API Documentation

### Variables


### [gridparts](#gridparts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.gridparts`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An integer specifying how many gridparts the screen should be divided into. Defaults to 30.                                                                     |

---
### Functions


### [centerCursor](#centercursor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.centerCursor() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Center the cursor on the focused window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [grid](#grid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.grid() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a modal keyboard driven interface for interactive window resizing.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hints](#hints)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.hints() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a keyboard hint for switching focus to each window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [moveAndResize](#moveandresize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.moveAndResize(option)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move and resize the focused window.                                                                     |
| **Parameters**                              | <ul><li>option - A string specifying the option, valid strings are: `halfleft`, `halfright`, `halfup`, `halfdown`, `cornerNW`, `cornerSW`, `cornerNE`, `cornerSE`, `center`, `fullscreen`, `expand`, `shrink`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [moveToScreen](#movetoscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.moveToScreen(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move the focused window between all of the screens in the `direction`.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`, `next`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stepMove](#stepmove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.stepMove(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move the focused window in the `direction` by one step. The step scale equals to the width/height of one gridpart.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stepResize](#stepresize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.stepResize(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resize the focused window in the `direction` by on step.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [undo](#undo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.undo()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Undo the last window manipulation. Only those "moveAndResize" manipulations can be undone.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
