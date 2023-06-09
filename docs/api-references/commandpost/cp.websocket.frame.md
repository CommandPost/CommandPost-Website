# cp.websocket.frame

Implementation of [RFC-6455](https://tools.ietf.org/html/rfc6455), Section 5

Reads and writes data to and from websocket frame wire protocol data.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [bytesRequired](#bytesrequired)
 * [fromBuffer](#frombuffer)
 * [fromBytes](#frombytes)
 * [fromHex](#fromhex)
 * [isValid](#isvalid)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [isControlFrame](#iscontrolframe)
 * [isNonControlFrame](#isnoncontrolframe)
 * [toBytes](#tobytes)


---

## API Documentation

#### Functions


### [bytesRequired](#bytesrequired)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.bytesRequired(data) -> number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks bytes in the data `string` or `buffer`. If it contains a valid frame header (everything up to but not including the masking key/payload) it will return the total required bytes for a valid frame, otherwise it will return `nil`.                                                                     |
| **Parameters**                              | <ul><li>data: the `string` or `buffer` to check.</li></ul> |
| **Returns**                                 | <ul><li>The `number` of bytes required based on the frame header, or `nil` if not enough information is available.</li></ul>          |
| **Notes**                                   | <ul><li>The `data` will be unmodified after returning from this function.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 166](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L166){target="_blank"} |

---


### [fromBuffer](#frombuffer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.fromBuffer(buff) -> result<{frame:frame, bytes:number}>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reads a Websocket Frame from the provided `cp.buffer` of binary data.                                                                     |
| **Parameters**                              | <ul><li>buff - The `cp.buffer` of bytes to read from.</li></ul> |
| **Returns**                                 | <ul><li>The a `cp.result` with either `success` and the `frame` of binary payload data plus the number of `bytes` read from the `data`,</li><li>  or `failure` with a `message` if there was an error.</li></ul>          |
| **Notes**                                   | <ul><li>If a `success`, the `value` will be a table containing the following:</li><li> `frame` - The `cp.websocket.frame` value</li><li> `bytes` - The `number` of bytes which were read from the `buffer`.</li><li>If a `success`, the passed-in `buffer` will have had the bytes required for the `frame` removed.</li><li>If a `failure`, the passed-in `buffer` will not be modified.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L234){target="_blank"} |

---


### [fromBytes](#frombytes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.fromBytes(buff) -> result<{frame:frame, bytes:number}>`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reads a Websocket Frame from the provided `cp.buffer` of binary data.                                                                     |
| **Parameters**                              | <ul><li>buff - The `cp.buffer` of bytes to read from.</li></ul> |
| **Returns**                                 | <ul><li>The a `cp.result` with either `success` and the `frame` of binary payload data plus the number of `bytes` read from the `data`,</li><li>  or `failure` with a `message` if there was an error.</li></ul>          |
| **Notes**                                   | <ul><li>If a `success`, the `value` will be a table containing the following:</li><li> `frame` - The `cp.websocket.frame` value</li><li> `bytes` - The `number` of bytes which were read from the `buffer`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 215](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L215){target="_blank"} |

---


### [fromHex](#fromhex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.fromHex(value, spacer) -> frame, number | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Convenience function for converting "XX XX" strings to a binary string, then parsing it into a frame.                                                                     |
| **Parameters**                              | <ul><li>value - The hex value as a string</li><li>spacer - The spacer used, for example " " (a space)</li></ul> |
| **Returns**                                 | <ul><li>The `frame` of binary payload data plus the next index `number` to read from the `data` `string`, or `nil` if the data was invalid.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 297](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L297){target="_blank"} |

---


### [isValid](#isvalid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.isValid(data) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks bytes in the data `string` or `buffer` contains a valid `frame`.                                                                     |
| **Parameters**                              | <ul><li>data: the `string` or `buffer` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the data contains both a valid frame header and sufficient bytes for the whole frame.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 192](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L192){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame.new(final, opcode, mask, payloadData) -> cp.websocket.frame`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `frame` instance.                                                                     |
| **Parameters**                              | <ul><li>final - If `true`, this is the final frame for a block of data. May be the first frame.</li><li>opcode - The `cp.websocket.frame.opcode` for the frame.</li><li>mask - If `true`, the data will be masked. Mandatory for client-originating frames.</li><li>payloadData - The `string` of application data to send.</li></ul> |
| **Returns**                                 | <ul><li>The new `frame` instance.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 311](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L311){target="_blank"} |

---

#### Methods


### [isControlFrame](#iscontrolframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame:isControlFrame() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the frame has a control frame opcode.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if this is a control frame.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 353](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L353){target="_blank"} |

---


### [isNonControlFrame](#isnoncontrolframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame:isNonControlFrame() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Checks if the frame has a non-control frame opcode.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if this is a non-control frame.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L340){target="_blank"} |

---


### [toBytes](#tobytes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.frame:toBytes() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts the frame to its byte string form.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The byte `string` containing the frame in binary format.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/websocket/frame.lua line 373](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/frame.lua#L373){target="_blank"} |

---

