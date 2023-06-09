# hs.socket

Talk to custom protocols using asynchronous TCP sockets.

For UDP sockets see [`hs.socket.udp`](./hs.socket.udp.html).

`hs.socket` is implemented with [CocoaAsyncSocket](https://github.com/robbiehanson/CocoaAsyncSocket). CocoaAsyncSocket's [tagging features](https://github.com/robbiehanson/CocoaAsyncSocket/wiki/Intro_GCDAsyncSocket#reading--writing) provide a handy way to implement custom protocols.

For example, you can easily implement a basic HTTP client as follows (though using [`hs.http`](./hs.http.html) is recommended for the real world):

```lua
local TAG_HTTP_HEADER, TAG_HTTP_CONTENT = 1, 2
local body = ""
local function httpCallback(data, tag)
  if tag == TAG_HTTP_HEADER then
    print(tag, "TAG_HTTP_HEADER"); print(data)
    local contentLength = data:match("\r\nContent%-Length: (%d+)\r\n")
    client:read(tonumber(contentLength), TAG_HTTP_CONTENT)
  elseif tag == TAG_HTTP_CONTENT then
    print(tag, "TAG_HTTP_CONTENT"); print(data)
    body = data
  end
end

client = hs.socket.new(httpCallback):connect("google.com", 80)
client:write("GET /index.html HTTP/1.0\r\nHost: google.com\r\n\r\n")
client:read("\r\n\r\n", TAG_HTTP_HEADER)
```

Resulting in the following console output (adjust log verbosity with `hs.socket.setLogLevel()`) :

```
            LuaSkin: (secondary thread): TCP socket connected
            LuaSkin: (secondary thread): Data written to TCP socket
            LuaSkin: (secondary thread): Data read from TCP socket
1 TAG_HTTP_HEADER
HTTP/1.0 301 Moved Permanently
Location: http://www.google.com/index.html
Content-Type: text/html; charset=UTF-8
Date: Thu, 03 Mar 2016 08:38:02 GMT
Expires: Sat, 02 Apr 2016 08:38:02 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 229
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN

            LuaSkin: (secondary thread): Data read from TCP socket
2 TAG_HTTP_CONTENT
&lt;HTML&gt;&lt;HEAD&gt;&lt;meta http-equiv=&quot;content-type&quot; content=&quot;text/html;charset=utf-8&quot;&gt;
&lt;TITLE&gt;301 Moved&lt;/TITLE&gt;&lt;/HEAD&gt;&lt;BODY&gt;
&lt;H1&gt;301 Moved&lt;/H1&gt;
The document has moved
&lt;A HREF=&quot;http://www.google.com/index.html&quot;&gt;here&lt;/A&gt;.
&lt;/BODY&gt;&lt;/HTML&gt;
            LuaSkin: (secondary thread): TCP socket disconnected Socket closed by remote peer
```



---

## Submodules
 * [hs.socket.udp](hs.socket.udp.md)

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
 * [connect](#connect)
 * [connected](#connected)
 * [connections](#connections)
 * [disconnect](#disconnect)
 * [info](#info)
 * [listen](#listen)
 * [read](#read)
 * [receive](#receive)
 * [send](#send)
 * [setCallback](#setcallback)
 * [setTimeout](#settimeout)
 * [startTLS](#starttls)
 * [write](#write)


---

## API Documentation

#### Variables


### [timeout](#timeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.timeout`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Timeout for the socket operations, in seconds.                                                                     |
| **Notes**                                   | <ul><li>New [`hs.socket`](#new) objects will be created with this timeout value, but can individually change it with the [`hs.socket:setTimeout`](#setTimeout) method.</li><li></li><li>If the timeout value is negative, the operations will not use a timeout. The default value is `-1`.</li></ul> |

---

#### Functions


### [parseAddress](#parseaddress)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.parseAddress(sockaddr) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Parses a binary socket address structure into a readable table.                                                                     |
| **Parameters**                              | <ul><li>`sockaddr` - A binary socket address structure, usually obtained from the [`info`](#info) method or in [`hs.socket.udp`](./hs.socket.udp.html)'s [read callback](./hs.socket.udp.html#setCallback).</li></ul> |
| **Returns**                                 | <ul><li>A table describing the address with the following keys or `nil`:</li><li> host - A string containing the host IP.</li><li> port - A number containing the port.</li><li> addressFamily - A number containing the address family.</li></ul>          |
| **Notes**                                   | <ul><li>Some address family definitions from `<sys/socket.h>`:</li><li></li><li>address family | number | description</li><li>:--- | :--- | :</li><li>AF_UNSPEC | 0 | unspecified</li><li>AF_UNIX | 1 | local to host (pipes)</li><li>AF_LOCAL | AF_UNIX | backward compatibility</li><li>AF_INET | 2 | internetwork: UDP, TCP, etc.</li><li>AF_NS | 6 | XEROX NS protocols</li><li>AF_CCITT | 10 | CCITT protocols, X.25 etc</li><li>AF_APPLETALK | 16 | Apple Talk</li><li>AF_ROUTE | 17 | Internal Routing Protocol</li><li>AF_LINK | 18 | Link layer interface</li><li>AF_INET6 | 30 | IPv6</li></ul> |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.new([fn]) -> hs.socket object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an unconnected asynchronous TCP socket object.                                                                     |
| **Parameters**                              | <ul><li>`fn` - An optional [callback function](#setCallback) for reading data from the socket, settable here for convenience.</li></ul> |
| **Returns**                                 | <ul><li>An [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [server](#server)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket.server(port | path [, fn]) -> hs.socket object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a TCP socket, and binds it to either a port or path (Unix domain socket) for listening.                                                                     |
| **Parameters**                              | <ul><li>`port` - A port number [0-65535]. Ports [1-1023] are privileged. Port 0 allows the OS to select any available port.</li><li>`path` - A string containing the path to the Unix domain socket.</li><li>`fn` - An optional [callback function](#setCallback) for reading data from the socket, settable here for convenience.</li></ul> |
| **Returns**                                 | <ul><li>An [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [connect](#connect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:connect(host, port | path [, fn]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Connects an unconnected socket.                                                                     |
| **Parameters**                              | <ul><li>`host` - A string containing the hostname or IP address.</li><li>`port` - A port number [1-65535].</li><li>`path` - A string containing the path to the Unix domain socket.</li><li>`fn` - An optional single-use callback function to execute after establishing the connection. The callback receives no parameters.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Either a host/port pair OR a Unix domain socket path must be supplied. If no port is passed, the first parameter is assumed to be a path to the socket file.</li></ul> |

---


### [connected](#connected)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:connected() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the connection status of the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the socket is connected, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>If the socket is bound for listening, this method returns `true` if there is at least one connection.</li></ul> |

---


### [connections](#connections)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:connections() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the number of connections to the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of connections to the socket.</li></ul>          |
| **Notes**                                   | <ul><li>This method returns at most 1 for default (non-listening) sockets.</li></ul> |

---


### [disconnect](#disconnect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:disconnect() -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disconnects the socket, freeing it for reuse.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>If called on a listening socket with multiple connections, each client is disconnected.</li></ul> |

---


### [info](#info)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:info() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns information about the socket.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the following keys:</li><li>  connectedAddress - `string` (`sockaddr` struct)</li><li>  connectedHost - `string`</li><li>  connectedPort - `number`</li><li>  connectedURL - `string`</li><li>  connections - `number`</li><li>  isConnected - `boolean`</li><li>  isDisconnected - `boolean`</li><li>  isIPv4 - `boolean`</li><li>  isIPv4Enabled - `boolean`</li><li>  isIPv4PreferredOverIPv6 - `boolean`</li><li>  isIPv6 - `boolean`</li><li>  isIPv6Enabled - `boolean`</li><li>  isSecure - `boolean`</li><li>  localAddress - `string` (`sockaddr` struct)</li><li>  localHost - `string`</li><li>  localPort - `number`</li><li>  timeout - `number`</li><li>  unixSocketPath - `string`</li><li>  userData - `string`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [listen](#listen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:listen(port|path) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Binds an unconnected socket to either a port or path (Unix domain socket) for listening.                                                                     |
| **Parameters**                              | <ul><li>`port` - A port number [0-65535]. Ports [1-1023] are privileged. Port 0 allows the OS to select any available port.</li><li>`path` - A string containing the path to the Unix domain socket.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [read](#read)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:read(delimiter[, tag]) -> self or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Read data from the socket.                                                                     |
| **Parameters**                              | <ul><li>`delimiter` - Either a number of bytes to read, or a string delimiter such as "\\n" or "\\r\\n". Data is read up to and including the delimiter.</li><li>`tag` - An optional integer to assist with labeling reads. It is passed to the callback to assist with implementing [state machines](https://github.com/robbiehanson/CocoaAsyncSocket/wiki/Intro_GCDAsyncSocket#reading--writing) for processing complex protocols.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object, or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>Results are passed to the socket's [callback function](#setCallback), which must be set to use this method.</li><li>If called on a listening socket with multiple connections, data is read from each of them.</li></ul> |

---


### [receive](#receive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:receive(delimiter[, tag]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.socket:read`](#read)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [send](#send)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:send(message[, tag]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Alias for [`hs.socket:write`](#write)                                                                     |
| **Parameters**                              | <ul></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [setCallback](#setcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:setCallback([fn]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the read callback for the socket.                                                                     |
| **Parameters**                              | <ul><li>`fn` - An optional callback function to process data read from the socket. `nil` or no argument clears the callback. The callback receives 2 parameters:
  `data` - The data read from the socket as a string.
  `tag` - The integer tag associated with the read call, which defaults to `-1`.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>A callback must be set in order to read data from the socket.</li></ul> |

---


### [setTimeout](#settimeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:setTimeout(timeout) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the timeout for the socket operations.                                                                     |
| **Parameters**                              | <ul><li>`timeout` - A number containing the timeout duration, in seconds.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li> If the timeout value is negative, the operations will not use a timeout, which is the default.</li></ul> |

---


### [startTLS](#starttls)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:startTLS([verify][, peerName]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Secures the socket with TLS.                                                                     |
| **Parameters**                              | <ul><li>`verify` - An optional boolean that, if `false`, allows TLS handshaking with servers with self-signed certificates and does not evaluate the chain of trust. Defaults to `true` and omitted if `peerName` is supplied</li><li>`peerName` - An optional string containing the fully qualified domain name of the peer to validate against — for example, `store.apple.com`. It should match the name in the X.509 certificate given by the remote party. See the important security note below.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>The socket will disconnect immediately if TLS negotiation fails. </li><li>**IMPORTANT SECURITY NOTE**: The default settings will check to make sure the remote party's certificate is signed by a trusted 3rd party certificate agency (e.g. verisign) and that the certificate is not expired.  However it will not verify the name on the certificate unless you give it a name to verify against via `peerName`.  The security implications of this are important to understand.  Imagine you are attempting to create a secure connection to MySecureServer.com, but your socket gets directed to MaliciousServer.com because of a hacked DNS server.  If you simply use the default settings, and MaliciousServer.com has a valid certificate, the default settings will not detect any problems since the certificate is valid.  To properly secure your connection in this particular scenario you should set `peerName` to "MySecureServer.com".</li></ul> |

---


### [write](#write)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.socket:write(message[, tag, fn]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Write data to the socket.                                                                     |
| **Parameters**                              | <ul><li>`message` - A string containing data to be sent on the socket.</li><li>`tag` - An optional integer to assist with labeling writes.</li><li>`fn` - An optional single-use callback function to execute after writing data to the socket. The callback receives the tag parameter provided here.</li></ul> |
| **Returns**                                 | <ul><li>The [`hs.socket`](#new) object.</li></ul>          |
| **Notes**                                   | <ul><li>If called on a listening socket with multiple connections, data is broadcast to all connected sockets.</li></ul> |

---

