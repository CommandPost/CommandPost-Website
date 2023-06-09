# cp.websocket.http

Provides a full HTTP-based websocket implementation.

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

#### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http.new(url, callback) -> object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new websocket connection via a serial connection.                                                                     |
| **Parameters**                              | <ul><li>url - The URL path to the websocket server.</li><li>callback - A function that's triggered by websocket actions.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback should accept two parameters.</li><li>The first parameter is a `cp.websocket.event` value.</li><li>The second parameter is a `string` with the received message or an error message.</li><li>Given a path '/mysock' and a port of 8000, the websocket URL is as follows:</li><li> `ws://localhost:8000/mysock`</li><li> `wss://localhost:8000/mysock` (if SSL enabled)</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L21){target="_blank"} |

---

#### Methods


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http:close() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes a websocket connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.serial` object</li></ul>          |
| **Notes**                                   | <ul><li>The `status` may be either `closing` or `closed` after calling this method.</li><li>To be notified the close has completed, listen for the `cp.websocket.event.closed` event in the callback.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 175](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L175){target="_blank"} |

---


### [isOpen](#isopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http:isOpen() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets whether or not the HTTP websocket is fully open.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if open, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L133){target="_blank"} |

---


### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http:open() -> cp.websocket.status`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to open a websocket connection with the configured HTTP connection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.status` after attempting to open.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 117](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L117){target="_blank"} |

---


### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http:send(message[, isData]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message to the websocket client.                                                                     |
| **Parameters**                              | <ul><li>message - A string containing the message to send.</li><li>isData - An optional boolean that sends the message as binary data (defaults to true).</li></ul> |
| **Returns**                                 | <ul><li>The `cp.websocket.serial` object</li></ul>          |
| **Notes**                                   | <ul><li>Forcing a text representation by setting isData to `false` may alter the data if it</li><li>  contains invalid UTF8 character sequences (the default string behavior is to make</li><li>  sure everything is "printable" by converting invalid sequences into the Unicode</li><li>  Invalid Character sequence).</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 207](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L207){target="_blank"} |

---


### [status](#status)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.http:status() -> cp.websocket.status`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current connection status.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The current `cp.websocket.status`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/websocket/http.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/http.lua#L53){target="_blank"} |

---

