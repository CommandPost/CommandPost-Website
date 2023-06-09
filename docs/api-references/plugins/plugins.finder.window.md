# plugins.finder.window

Handy tools for Windows Management in macOS.

Inspired by [WinWin](http://www.hammerspoon.org/Spoons/WinWin.html) for [Hammerspoon](http://www.hammerspoon.org/).

---

## API Overview
**Variables** - _Configurable values_
 * [gridparts](#gridparts)

**Functions** - _API calls offered directly by the extension_
 * [centerCursor](#centercursor)
 * [grid](#grid)
 * [hints](#hints)
 * [moveAndResize](#moveandresize)
 * [moveToScreen](#movetoscreen)
 * [stepMove](#stepmove)
 * [stepResize](#stepresize)
 * [undo](#undo)


---

## API Documentation

#### Variables


### [gridparts](#gridparts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.gridparts`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An integer specifying how many gridparts the screen should be divided into. Defaults to 30.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 72](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L72){target="_blank"} |

---

#### Functions


### [centerCursor](#centercursor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.centerCursor() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Center the cursor on the focused window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 42](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L42){target="_blank"} |

---


### [grid](#grid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.grid() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows a modal keyboard driven interface for interactive window resizing.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 16](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L16){target="_blank"} |

---


### [hints](#hints)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.hints() -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a keyboard hint for switching focus to each window.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 29](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L29){target="_blank"} |

---


### [moveAndResize](#moveandresize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.moveAndResize(option)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move and resize the focused window.                                                                     |
| **Parameters**                              | <ul><li>option - A string specifying the option, valid strings are: `halfleft`, `halfright`, `halfup`, `halfdown`, `cornerNW`, `cornerSW`, `cornerNE`, `cornerSE`, `center`, `fullscreen`, `expand`, `shrink`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 182](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L182){target="_blank"} |

---


### [moveToScreen](#movetoscreen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.moveToScreen(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move the focused window between all of the screens in the `direction`.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`, `next`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 237](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L237){target="_blank"} |

---


### [stepMove](#stepmove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.stepMove(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Move the focused window in the `direction` by one step. The step scale equals to the width/height of one gridpart.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L77){target="_blank"} |

---


### [stepResize](#stepresize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.stepResize(direction)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Resize the focused window in the `direction` by on step.                                                                     |
| **Parameters**                              | <ul><li>direction - A string specifying the direction, valid strings are: `left`, `right`, `up`, `down`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L128){target="_blank"} |

---


### [undo](#undo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finder.window.undo()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Undo the last window manipulation. Only those "moveAndResize" manipulations can be undone.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/plugins/finder/window/window.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finder/window/window.lua#L106){target="_blank"} |

---

