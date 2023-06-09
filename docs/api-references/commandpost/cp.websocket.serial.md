# cp.websocket.serial

A partial implementation of the websocket API communicating
via serial port rather than HTTP.

It implements the same basic methods as `hs.websocket`, so can
be dropped in as a replacement without change, other than the
initial construction.

Note that it does not support any websocket extensions.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [close](#close)
 * [isOpen](#isopen)
 * [open](#open)
 * [send](#send)
 * [status](#status)


---

## API Documentation

### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial.new(deviceName, baudRate, dataBits, stopBits, callback) -> object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new websocket connection via a serial connection.                                                                     |
| **Parameters**                              | <ul><li>deviceName - The name of the USB Device</li><li>baudRate - The connection baud rate</li><li>dataBits - The data bits.</li><li>stopBits - The stop bits.</li><li>callback - A function that's triggered by websocket actions.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback should accept two parameters.</li><li>The first parameter is a `cp.websocket.event` value.</li><li>The second parameter is a `string` with the received message or an error message.</li></ul>                |

---
### Methods


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial:close() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes a websocket connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.serial` object</li></ul>          |
| **Notes**                                   | <ul><li>The `status` may be either `closing` or `closed` after calling this method.</li><li>To be notified the close has completed, listen for the `cp.websocket.event.closed` event in the callback.</li></ul>                |

---

### [isOpen](#isopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial:isOpen() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets whether or not the serial websocket is fully open.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if open, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial:open() -> cp.websocket.status`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to open a websocket connection with the configured serial connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.status` after attempting to open.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial:send(message[, isData]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message to the websocket client.                                                                     |
| **Parameters**                              | <ul><li>message - A string containing the message to send.</li><li>isData - An optional boolean that sends the message as binary data (defaults to true).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.serial` object</li></ul>          |
| **Notes**                                   | <ul><li>Forcing a text representation by setting isData to `false` may alter the data if it</li><li>  contains invalid UTF8 character sequences (the default string behavior is to make</li><li>  sure everything is "printable" by converting invalid sequences into the Unicode</li><li>  Invalid Character sequence).</li></ul>                |

---

### [status](#status)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.serial:status() -> cp.websocket.status`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current connection status.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current `cp.websocket.status`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
