# hs.websocket

Simple websocket client.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [close](#close)
 * [send](#send)
 * [status](#status)


---

## API Documentation

### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.websocket.new(url, callback) -> object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new websocket connection.                                                                     |
| **Parameters**                              | <ul><li>url - The URL to the websocket</li><li>callback - A function that's triggered by websocket actions.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.websocket` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback should accept two parameters.</li><li>The first parameter is a string with the following possible options:</li><li>  open - The websocket connection has been opened</li><li>  closed - The websocket connection has been closed</li><li>  fail - The websocket connection has failed</li><li>  received - The websocket has received a message</li><li>  pong - A pong request has been received</li><li>The second parameter is a string with the received message or an error message.</li><li>Given a path '/mysock' and a port of 8000, the websocket URL is as follows:</li><li>  ws://localhost:8000/mysock</li><li>  wss://localhost:8000/mysock (if SSL enabled)</li></ul>                |

---
### Methods


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.websocket:close() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes a websocket connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.websocket` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.websocket:send(message[, isData]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message to the websocket client.                                                                     |
| **Parameters**                              | <ul><li>message - A string containing the message to send.</li><li>isData - An optional boolean that sends the message as binary data (defaults to true).</li></ul> |
| **Returns**                                 | <ul><li>The `hs.websocket` object</li></ul>          |
| **Notes**                                   | <ul><li>Forcing a text representation by setting isData to `false` may alter the data if it</li><li>  contains invalid UTF8 character sequences (the default string behavior is to make</li><li>  sure everything is "printable" by converting invalid sequences into the Unicode</li><li>  Invalid Character sequence).</li></ul>                |

---

### [status](#status)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.websocket:status() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the status of a websocket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing one of the following options:</li><li> connecting</li><li> open</li><li> closing</li><li> closed</li><li> unknown</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
