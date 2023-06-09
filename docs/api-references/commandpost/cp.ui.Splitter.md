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

### Constants


### [HORIZONTAL_ORIENTATION](#horizontal_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.HORIZONTAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is horizontal.                                                                     |

---

### [VERTICAL_ORIENTATION](#vertical_orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.VERTICAL_ORIENTATION <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The value for `AXOrientation` when it is vertical.                                                                     |

---
### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.matches(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>value - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [horizontal](#horizontal)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.horizontal <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `Splitter` is horizontal, otherwise `false`.                                                                     |

---

### [maxValue](#maxvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.maxValue <cp.prop: number, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The maximum value of the splitter.                                                                     |

---

### [minValue](#minvalue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.minValue <cp.prop: number, read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The minimum value of the splitter.                                                                     |

---

### [nextContentsUI](#nextcontentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.nextContentsUI <cp.prop: axuielementObject, read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielementObject` for the next contents of the splitter.                                                                     |

---

### [orientation](#orientation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.orientation <cp.prop: string; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `AXOrientation` string.                                                                     |

---

### [previousContentsUI](#previouscontentsui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.previousContentsUI <cp.prop: axuielementObject, read-only, live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielementObject` for the previous contents of the splitter.                                                                     |

---

### [vertical](#vertical)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.Splitter.vertical <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Is `true` if the `Splitter` is vertical, otherwise `false`.                                                                     |

---