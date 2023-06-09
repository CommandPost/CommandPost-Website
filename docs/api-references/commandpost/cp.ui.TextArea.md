# cp.ui.TextArea

UI Text Area.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [TextArea](#textarea)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [value](#value)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [append](#append)
 * [prepend](#prepend)


---

## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextArea.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [TextArea](#textarea)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextArea(parent, uiFinder) -> TextArea`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `TextArea` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder - A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>A new `TextArea` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [value](#value)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextArea.value <cp.prop: string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The current value of the text field.                                                                     |

---
### Methods


### [append](#append)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextArea:append(moreText) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Appends `moreText` to the end of the current value, returning the combined text value. If no text is currently set, `moreText` becomes the value.                                                                     |
| **Parameters**                              | <ul><li>moreText - The text to add.</li></ul> |
| **Returns**                                 | <ul><li>The combined `string` value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [prepend](#prepend)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextArea:prepend(moreText) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Appends `moreText` to the beginning of the current value, returning the combined text value. If no text is currently set, `moreText` becomes the value.                                                                     |
| **Parameters**                              | <ul><li>moreText - The text to add.</li></ul> |
| **Returns**                                 | <ul><li>The combined `string` value.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
