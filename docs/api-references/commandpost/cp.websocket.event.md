# cp.websocket.event

The set of event types received from websocket connections.

## API Overview
* Constants - Useful values which cannot be changed
 * [closed](#closed)
 * [closing](#closing)
 * [error](#error)
 * [message](#message)
 * [opened](#opened)
 * [opening](#opening)

## API Documentation

### Constants

| [closed](#closed)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.closed <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has closed.                                                                     |

| [closing](#closing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.closing <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket is attempting to close.                                                                     |

| [error](#error)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.error <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | There was an error. The connection may still be open.                                                                     |

| [message](#message)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.message <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has sent a message.                                                                     |

| [opened](#opened)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.opened <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket has opened.                                                                     |

| [opening](#opening)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.websocket.event.opening <string>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The socket is attempting to open.                                                                     |

