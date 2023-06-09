# cp.fn.args

Functions for working with function arguments.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [from](#from)
 * [hasAny](#hasany)
 * [hasNone](#hasnone)
 * [only](#only)
 * [pack](#pack)
 * [unpack](#unpack)


---

## API Documentation

### Functions


### [from](#from)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.from(index) -> function(...) -> ...`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that selects the arguments from the provided index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the argument to select.</li></ul> |
| **Returns**                                 | <ul><li>A function that selects the argument at the specified index.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hasAny](#hasany)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.hasAny(...) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if any of the arguments are not `nil`.                                                                     |
| **Parameters**                              | <ul><li>... - The arguments to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if any of the arguments are not `nil`, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hasNone](#hasnone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.hasNone(...) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if all the arguments are `nil`.                                                                     |
| **Parameters**                              | <ul><li>... - The arguments to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if all the arguments are `nil`, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [only](#only)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.only(index, ...) -> function(...) -> any`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a function that only returns the argument at the specified index.                                                                     |
| **Parameters**                              | <ul><li>index - The index of the argument to return.</li><li>... - The other indexes to include as well.</li></ul> |
| **Returns**                                 | <ul><li>A function that returns the arguments at the specified indecies.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pack](#pack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.pack(...) -> table, boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Packs the arguments into a table.                                                                     |
| **Parameters**                              | <ul><li>... - The arguments to pack.</li></ul> |
| **Returns**                                 | <ul><li>A table containing the arguments.</li><li>A boolean indicating whether the arguments were packed into a table.</li></ul>          |
| **Notes**                                   | <ul><li>If the number of arguments is 1 and the first argument is a table, and the table has a size of 1 or more, it will be returned.</li><li>Otherwise, the arguments are packed into a table.</li></ul>                |

---

### [unpack](#unpack)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.fn.args.unpack(args, packed) -> ... | table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unpacks the arguments from a table.                                                                     |
| **Parameters**                              | <ul><li>args - The arguments to unpack.</li><li>packed - A boolean indicating whether the arguments were packed.</li></ul> |
| **Returns**                                 | <ul><li>The arguments, unpacked if necessary.</li></ul>          |
| **Notes**                                   | <ul><li>If the arguments were packed, the table is unpacked first.</li><li>* Otherwise, the arguments are returned unchanged.</li></ul>                |

---
