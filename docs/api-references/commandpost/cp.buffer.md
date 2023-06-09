# cp.buffer

Internal byte buffer type. Allows additional chunks of bytes
to be concatonated relatively inexpensively, as well as `peek` and `pop` operations
to preview/read in chunks of bytes.

 For example:

```lua
local buff = buffer.new()
buff:push("Hello")
buff:len()       -- 5
buff:peek(2)     -- "He"
buff:peek(7)     -- nil
buff:write(" world!")
buff:len()       -- 12
buff:peek(7)     -- "Hello w"
buff:pop(3)      -- "Hel"
buff:len()       -- 9
buff:bytes()     -- "lo world!"
```

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
* Constructors - API calls which return an object, typically one that offers API methods
 * [clone](#clone)
 * [fromHex](#fromHex)
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [drop](#drop)
 * [len](#len)
 * [peek](#peek)
 * [pop](#pop)
 * [push](#push)

## API Documentation

### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `value` is an instance of a `buffer`.                                                                     |
| **Parameters**                              | <ul><li>`value`  - The value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the value is an instance of `buffer`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [clone](#clone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer.clone(otherBuffer) -> buffer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a copy of the provided buffer. It shares data with the original, but can be modified via `pop`/`push`, etc without affecting the original.                                                                     |
| **Parameters**                              | <ul><li>otherBuffer - The `buffer` to clone.</li></ul> |
| **Returns**                                 | <ul><li>the clone of the original `buffer`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [fromHex](#fromHex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer.fromHex(hexString[, spacer]) -> cp.buffer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a buffer from the bytes represented by the provided hex string.                                                                     |
| **Parameters**                              | <ul><li>hexString - The string of hex characters to convert.</li><li>spacer - The character to ignore as a spacer. Defaults to space (" ").</li></ul> |
| **Returns**                                 | <ul><li>The new `buffer`.</li></ul>          |
| **Notes**                                   | <ul><li>Examples:</li><li> `buffer.fromHex("ABCDE")`</li><li> `buffer.fromHex("12-34-56", "-")`</li></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer.new(...) -> buffer`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new byte string buffer containing the provided `string` chunks.                                                                     |
| **Parameters**                              | <ul><li>... - The new `string` chunks to add to the end of the buffer.</li></ul> |
| **Returns**                                 | <ul><li>The new `buffer`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [drop](#drop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer:drop(len) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Drops the specified `len` of bytes from the start of the buffer.                                                                     |
| **Parameters**                              | <ul><li>len - The number of bytes to read.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` if there are not enough bytes available for the requested `len`.</li></ul>          |
| **Notes**                                   | <ul><li>Equivalent to, but more efficient than `pop` if you don't need the bytes being dropped.</li></ul>                |

---

### [len](#len)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer:len() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the total number of bytes in the buffer.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of bytes in the buffer.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [peek](#peek)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer:peek(len) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads the specified `len` of bytes from the start of the buffer without removing them.                                                                     |
| **Parameters**                              | <ul><li>len - The number of bytes to read.</li></ul> |
| **Returns**                                 | <ul><li>The `string` of bytes or `nil` if there are not enough bytes available for the requested `len`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pop](#pop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer:pop(len) -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads the specified `len` of bytes from the start of the buffer, removing them.                                                                     |
| **Parameters**                              | <ul><li>len - The number of bytes to read.</li></ul> |
| **Returns**                                 | <ul><li>The `string` of bytes or `nil` if there are not enough bytes available for the requested `len`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [push](#push)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.buffer:push(...) -> buffer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Pushes the provided `string`s onto the end of the buffer.                                                                     |
| **Parameters**                              | <ul><li>... - The new `string` chunks to add to the end of the buffer.</li></ul> |
| **Returns**                                 | <ul><li>The same `buffer` instance.</li></ul>          |
| **Notes**                                   | <ul><li>Throws an error if more than `cp.buffer.maxChunks` are currently in the buffer when a new value is pushed.</li></ul>                |

---
