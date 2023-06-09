# cp.websocket.event

The set of event types received from websocket connections.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [closed](#closed)
 * [closing](#closing)
 * [error](#error)
 * [message](#message)
 * [opened](#opened)
 * [opening](#opening)


---

## API Documentation

#### Constants


### [closed](#closed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.closed <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has closed.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L17) |

---


### [closing](#closing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.closing <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket is attempting to close.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 13](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L13) |

---


### [error](#error)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.error <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | There was an error. The connection may still be open.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L21) |

---


### [message](#message)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.message <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has sent a message.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L25) |

---


### [opened](#opened)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.opened <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has opened.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 9](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L9) |

---


### [opening](#opening)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.opening <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket is attempting to open.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/websocket/event.lua line 5](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/websocket/event.lua#L5) |

---

