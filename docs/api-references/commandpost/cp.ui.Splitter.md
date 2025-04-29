# cp.ui.Splitter

Represents an `AXSplitter`.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [HORIZONTAL_ORIENTATION](#horizontal_orientation)
 * [VERTICAL_ORIENTATION](#vertical_orientation)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [horizontal](#horizontal)
 * [maxValue](#maxvalue)
 * [minValue](#minvalue)
 * [nextContentsUI](#nextcontentsui)
 * [orientation](#orientation)
 * [previousContentsUI](#previouscontentsui)
 * [vertical](#vertical)


---

## API Documentation

#### Constants


### [HORIZONTAL_ORIENTATION](#horizontal_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.HORIZONTAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is horizontal.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L17) |

---


### [VERTICAL_ORIENTATION](#vertical_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.VERTICAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is vertical.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 12](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L12) |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.matches(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>value - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 22](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L22) |

---

#### Fields


### [horizontal](#horizontal)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.horizontal <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `Splitter` is horizontal, otherwise `false`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L77) |

---


### [maxValue](#maxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.maxValue <cp.prop: number, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The maximum value of the splitter.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L33) |

---


### [minValue](#minvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.minValue <cp.prop: number, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The minimum value of the splitter.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L40) |

---


### [nextContentsUI](#nextcontentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.nextContentsUI <cp.prop: axuielementObject, read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielementObject` for the next contents of the splitter.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 47](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L47) |

---


### [orientation](#orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.orientation <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `AXOrientation` string.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L61) |

---


### [previousContentsUI](#previouscontentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.previousContentsUI <cp.prop: axuielementObject, read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielementObject` for the previous contents of the splitter.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L54) |

---


### [vertical](#vertical)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.vertical <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `Splitter` is vertical, otherwise `false`.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/ui/Splitter.lua line 68](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/Splitter.lua#L68) |

---

