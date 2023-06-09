# plugins.finalcutpro.browser.playhead

Browser Playhead Plugin.

## API Overview
* Functions - API calls offered directly by the extension
 * [changeHighlightColor](#changeHighlightColor)
 * [deleteHighlight](#deleteHighlight)
 * [getHighlightColor](#getHighlightColor)
 * [getHighlightCustomColor](#getHighlightCustomColor)
 * [getHighlightShape](#getHighlightShape)
 * [getHighlightTime](#getHighlightTime)
 * [highlight](#highlight)
 * [highlightFrame](#highlightFrame)
 * [setHighlightColor](#setHighlightColor)
 * [setHighlightCustomColor](#setHighlightCustomColor)
 * [setHighlightShape](#setHighlightShape)
 * [setHighlightTime](#setHighlightTime)

## API Documentation

### Functions


### [changeHighlightColor](#changeHighlightColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.changeHighlightColor([value]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prompts the user to change the Playhead Highlight Colour.                                                                     |
| **Parameters**                              | <ul><li>value - An RGB table with the selected colour (see `hs.drawing.color`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [deleteHighlight](#deleteHighlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.deleteHighlight() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Delete's the highlight if it's currently visible on the screen.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHighlightColor](#getHighlightColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.getHighlightColor() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current highlight colour.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An RGB table with the selected colour (see `hs.drawing.color`) or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHighlightCustomColor](#getHighlightCustomColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.getHighlightCustomColor() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current custom highlight colour.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An RGB table with the selected colour (see `hs.drawing.color`) or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHighlightShape](#getHighlightShape)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.getHighlightShape() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current highlight shape.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>"Rectangle", "Circle" or "Diamond" or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getHighlightTime](#getHighlightTime)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.getHighlightTime() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current highlight playhead time.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number or `nil`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [highlight](#highlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.highlight() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlight's the Final Cut Pro Browser Playhead.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [highlightFrame](#highlightFrame)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.highlightFrame([frame]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlights a specific frame.                                                                     |
| **Parameters**                              | <ul><li>frame - Frame as per `hs.geometry.rect`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setHighlightColor](#setHighlightColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.setHighlightColor([value]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Playhead Highlight Colour.                                                                     |
| **Parameters**                              | <ul><li>value - An RGB table with the selected colour (see `hs.drawing.color`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setHighlightCustomColor](#setHighlightCustomColor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.setHighlightCustomColor([value]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Custom Playhead Highlight Colour.                                                                     |
| **Parameters**                              | <ul><li>value - An RGB table with the selected colour (see `hs.drawing.color`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setHighlightShape](#setHighlightShape)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.setHighlightShape([value]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Custom Playhead Highlight Shape.                                                                     |
| **Parameters**                              | <ul><li>value - A string which can be "Rectangle", "Circle" or "Diamond".</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setHighlightTime](#setHighlightTime)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.playhead.setHighlightTime([value]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Custom Playhead Highlight Time.                                                                     |
| **Parameters**                              | <ul><li>value - A number</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
