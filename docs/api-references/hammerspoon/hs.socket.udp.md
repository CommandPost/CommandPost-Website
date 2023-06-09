# hs.socket.udp

Talk to custom protocols using asynchronous UDP sockets.

For TCP sockets see [`hs.socket`](./hs.socket.html).

You can do a lot of neat trivial and non-trivial things with these. A simple ping ponger:
```lua
function ping(data, addr)
  print(data)
  addr = hs.socket.parseAddress(addr)
  hs.timer.doAfter(1, function()
    client:send("ping", addr.host, addr.port)
  end)
end

function pong(data, addr)
  print(data)
  addr = hs.socket.parseAddress(addr)
  hs.timer.doAfter(1, function()
    server:send("pong", addr.host, addr.port)
  end)
end

server = hs.socket.udp.server(9001, pong):receive()
client = hs.socket.udp.new(ping):send("ping", "localhost", 9001):receive()
```
Resulting in the following endless exchange:
```
20:26:56    LuaSkin: (secondary thread): Data written to UDP socket
            LuaSkin: (secondary thread): Data read from UDP socket
ping
20:26:57    LuaSkin: (secondary thread): Data written to UDP socket
            LuaSkin: (secondary thread): Data read from UDP socket
pong
20:26:58    LuaSkin: (secondary thread): Data written to UDP socket
            LuaSkin: (secondary thread): Data read from UDP socket
ping
20:26:59    LuaSkin: (secondary thread): Data written to UDP socket
            LuaSkin: (secondary thread): Data read from UDP socket
pong
...
```

You can do some silly things with a callback factory and enabling broadcasting:
```lua
local function callbackMaker(name)
  local fun = function(data, addr)
    addr = hs.socket.parseAddress(addr)
    print(name.." received data:\n"..data.."\nfrom host: "..addr.host.." port: "..addr.port)
  end
  return fun
end

local listeners = {}
local port = 9001

for i=1,3 do
  table.insert(listeners, hs.socket.udp.new(callbackMaker("listener "..i)):reusePort():listen(port):receive())
end

broadcaster = hs.socket.udp.new():broadcast()
broadcaster:send("hello!", "255.255.255.255", port)
```
Since neither IPv4 nor IPv6 have been disabled, the broadcast is received on both protocols ('dual-stack' IPv6 addresses shown):
```
listener 2 received data:
hello!
from host: ::ffff:192.168.0.3 port: 53057
listener 1 received data:
hello!
from host: ::ffff:192.168.0.3 port: 53057
listener 3 received data:
hello!
from host: ::ffff:192.168.0.3 port: 53057
listener 1 received data:
hello!
from host: 192.168.0.3 port: 53057
listener 3 received data:
hello!
from host: 192.168.0.3 port: 53057
listener 2 received data:
hello!
from host: 192.168.0.3 port: 53057
```


---

## API Overview
**Variables** - _Configurable values_
 * [timeout](#timeout)

**Functions** - _API calls offered directly by the extension_
 * [parseAddress](#parseaddress)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [server](#server)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [broadcast](#broadcast)
 * [close](#close)
 * [closed](#closed)
 * [connect](#connect)
 * [connected](#connected)
 * [enableIPv](#enableipv)
 * [info](#info)
 * [listen](#listen)
 * [pause](#pause)
 * [preferIPv](#preferipv)
 * [read](#read)
 * [readOne](#readone)
 * [receive](#receive)
 * [receiveOne](#receiveone)
 * [reusePort](#reuseport)
 * [send](#send)
 * [setBufferSize](#setbuffersize)
 * [setCallback](#setcallback)
 * [setTimeout](#settimeout)
 * [write](#write)


---

## API Documentation

#### Variables


### [timeout](#timeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp.timeout`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Timeout for the socket operations, in seconds.                                                                     |
| **Notes**                                   | <ul><li>New [`hs.socket.udp`](#new) objects will be created with this timeout value, but can individually change it with the [`hs.socket.udp:setTimeout`](#setTimeout) method.</li><li></li><li>If the timeout value is negative, the operations will not use a timeout. The default value is `-1`.</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 173](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L173){target="_blank"} |

---

#### Functions


### [parseAddress](#parseaddress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp.parseAddress(sockaddr) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Alias for [`hs.socket.parseAddress`](./hs.socket.html#parseAddress)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 184](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L184){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp.new([fn]) -> hs.socket.udp object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an unconnected asynchronous UDP socket object.                                                                     |
| **Parameters**                              | <ul><li>`fn` - An optional [callback function](#setCallback) for reading data from the socket, settable here for convenience.</li></ul> |
| **Returns**                                 | <ul><li>An [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 111](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L111){target="_blank"} |

---


### [server](#server)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp.server(port[, fn]) -> hs.socket.udp object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a UDP socket, and binds it to a port for listening.                                                                     |
| **Parameters**                              | <ul><li>`port` - A port number [0-65535]. Ports [1-1023] are privileged. Port 0 allows the OS to select any available port.</li><li>`fn` - An optional [callback function](#setCallback) for reading data from the socket, settable here for convenience.</li></ul> |
| **Returns**                                 | <ul><li>An [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 208](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L208){target="_blank"} |

---

#### Methods


### [broadcast](#broadcast)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:broadcast([flag]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables broadcasting on the underlying socket.                                                                     |
| **Parameters**                              | <ul><li>`flag` - An optional boolean: `true` to enable broadcasting, `false` to disable it. Defaults to `true`.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>By default, the underlying socket in the OS will not allow you to send broadcast messages.</li><li>In order to send broadcast messages, you need to enable this functionality in the socket.</li><li>A broadcast is a UDP message to addresses like "192.168.255.255" or "255.255.255.255" that is delivered to every host on the network.</li><li>The reason this is generally disabled by default (by the OS) is to prevent accidental broadcast messages from flooding the network.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 418](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L418){target="_blank"} |

---


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:close() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Immediately closes the socket, freeing it for reuse. Any pending send operations are discarded.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 222](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L222){target="_blank"} |

---


### [closed](#closed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:closed() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the closed status of the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the socket is closed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>UDP sockets are typically meant to be connectionless.</li><li>Sending a packet anywhere, regardless of whether or not the destination receives it, opens the socket until it is explicitly closed.</li><li>An active listening socket will not be closed, but will not be 'connected' unless the [`hs.socket.udp:connect`](#connect) method has been called.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 675](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L675){target="_blank"} |

---


### [connect](#connect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:connect(host, port[, fn]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Connects an unconnected socket.                                                                     |
| **Parameters**                              | <ul><li>`host` - A string containing the hostname or IP address.</li><li>`port` - A port number [1-65535].</li><li>`fn` - An optional single-use callback function to execute after establishing the connection. The callback receives no parameters.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>* By design, UDP is a connectionless protocol, and connecting is not needed.</li><li>* Choosing to connect to a specific host/port has the following effect:</li><li> You will only be able to send data to the connected host/port;</li><li> You will only be able to receive data from the connected host/port;</li><li> You will receive ICMP messages that come from the connected host/port, such as "connection refused".</li><li>* The actual process of connecting a UDP socket does not result in any communication on the socket, it simply changes the internal state of the socket.</li><li>* You cannot bind a socket for listening after it has been connected.</li><li>* You can only connect a socket once.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 145](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L145){target="_blank"} |

---


### [connected](#connected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:connected() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the connection status of the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if connected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>UDP sockets are typically meant to be connectionless.</li><li>This method will only return `true` if the [`hs.socket.udp:connect`](#connect) method has been explicitly called.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 652](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L652){target="_blank"} |

---


### [enableIPv](#enableipv)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:enableIPv(version[, flag]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables or disables IPv4 or IPv6 on the underlying socket. By default, both are enabled.                                                                     |
| **Parameters**                              | <ul><li>`version` - A number containing the IP version (4 or 6) to enable or disable.</li><li>`flag` - A boolean: `true` to enable the chosen IP version, `false` to disable it. Defaults to `true`.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Must be called before binding the socket. If you want to create an IPv6-only server, do something like:</li><li>  `hs.socket.udp.new(callback):enableIPv(4, false):listen(port):receive()`</li><li>The convenience constructor [`hs.socket.server`](#server) will automatically bind the socket and requires closing and relistening to use this method.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 486](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L486){target="_blank"} |

---


### [info](#info)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:info() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns information about the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the following keys:</li><li>  connectedAddress - `string` (`sockaddr` struct)</li><li>  connectedHost - `string`</li><li>  connectedPort - `number`</li><li>  isClosed - `boolean`</li><li>  isConnected - `boolean`</li><li>  isIPv4 - `boolean`</li><li>  isIPv4Enabled - `boolean`</li><li>  isIPv4Preferred - `boolean`</li><li>  isIPv6 - `boolean`</li><li>  isIPv6Enabled - `boolean`</li><li>  isIPv6Preferred - `boolean`</li><li>  isIPVersionNeutral - `boolean`</li><li>  localAddress - `string` (`sockaddr` struct)</li><li>  localAddress_IPv4 - `string` (`sockaddr` struct)</li><li>  localAddress_IPv6 - `string` (`sockaddr` struct)</li><li>  localHost - `string`</li><li>  localHost_IPv4 - `string`</li><li>  localHost_IPv6 - `string`</li><li>  localPort - `number`</li><li>  localPort_IPv4 - `number`</li><li>  localPort_IPv6 - `number`</li><li>  maxReceiveIPv4BufferSize - `number`</li><li>  maxReceiveIPv6BufferSize - `number`</li><li>  timeout - `number`</li><li>  userData - `string`</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 699](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L699){target="_blank"} |

---


### [listen](#listen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:listen(port) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Binds an unconnected socket to a port for listening.                                                                     |
| **Parameters**                              | <ul><li>`port` - A port number [0-65535]. Ports [1-1023] are privileged. Port 0 allows the OS to select any available port.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 192](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L192){target="_blank"} |

---


### [pause](#pause)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:pause() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Suspends reading of packets from the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object</li></ul>          |
| **Notes**                                   | <ul><li>Call one of the receive methods to resume.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 243](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L243){target="_blank"} |

---


### [preferIPv](#preferipv)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:preferIPv([version]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the preferred IP version: IPv4, IPv6, or neutral (first to resolve).                                                                     |
| **Parameters**                              | <ul><li>`version` - An optional number containing the IP version to prefer. Anything but 4 or 6 else sets the default neutral behavior.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>If a DNS lookup returns only IPv4 results, the socket will automatically use IPv4.</li><li>If a DNS lookup returns only IPv6 results, the socket will automatically use IPv6.</li><li>If a DNS lookup returns both IPv4 and IPv6 results, then the protocol used depends on the configured preference.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 523](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L523){target="_blank"} |

---


### [read](#read)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:read(delimiter[, tag]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.socket.udp:receive`](#receive)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 237](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L237){target="_blank"} |

---


### [readOne](#readone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:readOne(delimiter[, tag]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.socket.udp:receiveOne`](#receiveOne)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 243](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L243){target="_blank"} |

---


### [receive](#receive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:receive([fn]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads packets from the socket as they arrive.                                                                     |
| **Parameters**                              | <ul><li>`fn` - Optionally supply the [read callback](#setCallback) here.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Results are passed to the [callback function](#setCallback), which must be set to use this method.</li><li>There are two modes of operation for receiving packets: one-at-a-time & continuous.</li><li>In one-at-a-time mode, you call receiveOne every time you are ready process an incoming UDP packet.</li><li>Receiving packets one-at-a-time may be better suited for implementing certain state machine code where your state machine may not always be ready to process incoming packets.</li><li>In continuous mode, the callback is invoked immediately every time incoming udp packets are received.</li><li>Receiving packets continuously is better suited to real-time streaming applications.</li><li>You may switch back and forth between one-at-a-time mode and continuous mode.</li><li>If the socket is currently in one-at-a-time mode, calling this method will switch it to continuous mode.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 295](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L295){target="_blank"} |

---


### [receiveOne](#receiveone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:receiveOne([fn]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads a single packet from the socket.                                                                     |
| **Parameters**                              | <ul><li>`fn` - Optionally supply the [read callback](#setCallback) here.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Results are passed to the [callback function](#setCallback), which must be set to use this method.</li><li>There are two modes of operation for receiving packets: one-at-a-time & continuous.</li><li>In one-at-a-time mode, you call receiveOne every time you are ready process an incoming UDP packet.</li><li>Receiving packets one-at-a-time may be better suited for implementing certain state machine code where your state machine may not always be ready to process incoming packets.</li><li>In continuous mode, the callback is invoked immediately every time incoming udp packets are received.</li><li>Receiving packets continuously is better suited to real-time streaming applications.</li><li>You may switch back and forth between one-at-a-time mode and continuous mode.</li><li>If the socket is currently in continuous mode, calling this method will switch it to one-at-a-time mode</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 321](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L321){target="_blank"} |

---


### [reusePort](#reuseport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:reusePort([flag]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables port reuse on the socket.                                                                     |
| **Parameters**                              | <ul><li>`flag` - An optional boolean: `true` to enable port reuse, `false` to disable it. Defaults to `true`.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>By default, only one socket can be bound to a given IP address & port at a time.</li><li>To enable multiple processes to simultaneously bind to the same address & port, you need to enable this functionality in the socket.</li><li>All processes that wish to use the address & port simultaneously must all enable reuse port on the socket bound to that port.</li><li>Must be called before binding the socket.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 452](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L452){target="_blank"} |

---


### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:send(message[, host, port][, tag, fn]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a packet to the destination address.                                                                     |
| **Parameters**                              | <ul><li>`message` - A string containing data to be sent on the socket.</li><li>`host` - A string containing the hostname or IP address.</li><li>`port` - A port number [1-65535].</li><li>`tag` - An optional integer to assist with labeling writes.</li><li>`fn` - An optional single-use callback function to execute after sending the packet. The callback receives the tag parameter provided here.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>For non-connected sockets, the remote destination is specified for each packet.</li><li>If the socket has been explicitly connected with [`connect`](#connect), only the message parameter and an optional tag and/or write callback can be supplied.</li><li>Recall that connecting is optional for a UDP socket.</li><li>For connected sockets, data can only be sent to the connected address.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 347](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L347){target="_blank"} |

---


### [setBufferSize](#setbuffersize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:setBufferSize(size[, version]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the maximum size of the buffer that will be allocated for receive operations.                                                                     |
| **Parameters**                              | <ul><li>`size` - An number containing the receive buffer size in bytes.</li><li>`version` - An optional number containing the IP version for which to set the buffer size. Anything but 4 or 6 else sets the same size for both.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>The default maximum size is 9216 bytes.</li><li>The theoretical maximum size of any IPv4 UDP packet is `UINT16_MAX = 65535`.</li><li>The theoretical maximum size of any IPv6 UDP packet is `UINT32_MAX = 4294967295`.</li><li>Since the OS notifies us of the size of each received UDP packet, the actual allocated buffer size for each packet is exact.</li><li>In practice the size of UDP packets is generally much smaller than the max. Most protocols will send and receive packets of only a few bytes, or will set a limit on the size of packets to prevent fragmentation in the IP layer.</li><li>If you set the buffer size too small, the sockets API in the OS will silently discard any extra data.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 555](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L555){target="_blank"} |

---


### [setCallback](#setcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:setCallback([fn]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the read callback for the socket.                                                                     |
| **Parameters**                              | <ul><li>`fn` - An optional callback function to process data read from the socket. `nil` or no argument clears the callback. The callback receives 2 parameters:
  `data` - The data read from the socket as a string.
  `sockaddr` - The sending address as a binary socket address structure. See [`parseAddress`](#parseAddress).</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>A callback must be set in order to read data from the socket.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 597](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L597){target="_blank"} |

---


### [setTimeout](#settimeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:setTimeout(timeout) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the timeout for the socket operations.                                                                     |
| **Parameters**                              | <ul><li>`timeout` - A number containing the timeout duration, in seconds.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket.udp`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li> If the timeout value is negative, the operations will not use a timeout, which is the default.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/libsocket_udp.m line 628](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/libsocket_udp.m#L628){target="_blank"} |

---


### [write](#write)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.udp:write(message[, tag]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.socket.udp:send`](#send)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/socket/socket.lua line 249](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/socket/socket.lua#L249){target="_blank"} |

---

