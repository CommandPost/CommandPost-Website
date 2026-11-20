# cp.ui.ColorWell

UI ColorWell.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [ColorWell](#colorwell)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ColorWell.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ColorWell.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ColorWell.lua#L23) |

---

#### Constructors


### [ColorWell](#colorwell)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.ColorWell(parent, uiFinder) -> Image`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `ColorWell` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li><li>uiFinder - A function which will return the `hs.axuielement` when available.</li></ul> |
| **Returns**                                 | <ul><li>A new `ColorWell` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/ColorWell.lua line 11](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/ColorWell.lua#L11) |

---

