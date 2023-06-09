# hs.osc

Open Sound Control (OSC) support.

This extension allows you to create both OSC Servers and Clients.

This extension was thrown together by [Chris Hocking](https://github.com/latenitefilms) for [CommandPost](http://commandpost.io).

This extension uses [F53OSC](https://github.com/Figure53/F53OSC).

F53OSC LICENSE:
Copyright (c) 2010-2020 Figure 53 LLC, https://figure53.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [newClient](#newclient)
 * [newServer](#newserver)
* Methods - API calls which can only be made on an object returned by a constructor
 * [callback](#callback)
 * [host](#host)
 * [isActive](#isactive)
 * [listeningPort](#listeningport)
 * [port](#port)
 * [send](#send)
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constructors


### [newClient](#newclient)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc.newClient(host, port) -> oscObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new OSC Client.                                                                     |
| **Parameters**                              | <ul><li>host - A string of the host path.</li><li>port - A number of the port.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.osc` object or `nil` if an error occured.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [newServer](#newserver)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc.newServer(listeningPort) -> oscObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new OSC Server.                                                                     |
| **Parameters**                              | <ul><li>listeningPort - A number for the listening port.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.osc` object or `nil` if an error occured.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:callback(callbackFn) -> oscObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for a OSC Server.                                                                     |
| **Parameters**                              | <ul><li>`callbackFn` - a function to set as the callback for this OSC Server.  If the value provided is `nil`, any currently existing callback function is removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.osc` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 3 arguments and should not return anything:</li><li>  `oscObject` - The OSC object that triggered the callback.</li><li>  `addressParts` - A table of address parts.</li><li>  `arguments` - A table of arguments.</li></ul>                |

---

### [host](#host)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:host() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the host path of a OSC Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The host as a string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isActive](#isactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:isActive() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets whether or not a OSC Server or Client is active.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if open, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [listeningPort](#listeningport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:listeningPort() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the listening port of a OSC Server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The port as a number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [port](#port)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:port() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the port of a OSC Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The port as a number.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:send(address, arguments) -> oscObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message from an OSC Client.                                                                     |
| **Parameters**                              | <ul><li>address - A string of the OSC address.</li><li>arguments - A table of arguments.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.osc` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:start() -> oscObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts an OSC Server or Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.osc` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.osc:stop() -> oscObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops an OSC Server or Client.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.osc` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
