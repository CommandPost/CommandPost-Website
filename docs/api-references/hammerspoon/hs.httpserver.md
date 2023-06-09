# hs.httpserver

Simple HTTP server

Notes:
 * Running an HTTP server is potentially dangerous, you should seriously consider the security implications of exposing your Hammerspoon instance to a network - especially to the Internet
 * As a user of Hammerspoon, you are assumed to be highly capable, and aware of the security issues

## Submodules
 * [hs.httpserver.hsminweb](hs.httpserver.hsminweb.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [getInterface](#getInterface)
 * [getName](#getName)
 * [getPort](#getPort)
 * [maxBodySize](#maxBodySize)
 * [send](#send)
 * [setCallback](#setCallback)
 * [setInterface](#setInterface)
 * [setName](#setName)
 * [setPassword](#setPassword)
 * [setPort](#setPort)
 * [start](#start)
 * [stop](#stop)
 * [websocket](#websocket)

## API Documentation

### Functions

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.new([ssl], [bonjour]) -> object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new HTTP or HTTPS server                                                                     |
| **Parameters**                              | <ul><li>ssl     - An optional boolean. If true, the server will start using HTTPS. Defaults to false.</li><li>bonjour - An optional boolean. If true, the server will advertise itself with Bonjour.  Defaults to true. Note that in order to change this, you must supply a true or false value for the `ssl` argument.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>By default, the server will start on a random TCP port and advertise itself with Bonjour. You can check the port with `hs.httpserver:getPort()`</li><li>By default, the server will listen on all network interfaces. You can override this with `hs.httpserver:setInterface()` before starting the server</li><li>Currently, in HTTPS mode, the server will use a self-signed certificate, which most browsers will warn about. If you want/need to be able to use `hs.httpserver` with a certificate signed by a trusted Certificate Authority, please file an bug on Hammerspoon requesting support for this.</li></ul>                |

### Methods

| [getInterface](#getInterface)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:getInterface() -> string or nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the network interface the server is configured to listen on                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the network interface name, or nil if the server will listen on all interfaces</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getName](#getName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:getName() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Bonjour name the server is configured to advertise itself as                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the Bonjour name of this server</li></ul>          |
| **Notes**                                   | <ul><li>This is not the hostname of the server, just its name in Bonjour service lists (e.g. Safari's Bonjour bookmarks menu)</li></ul>                |

| [getPort](#getPort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:getPort() -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the TCP port the server is configured to listen on                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the TCP port</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [maxBodySize](#maxBodySize)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:maxBodySize([size]) -> object | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the maximum allowed body size for an incoming HTTP request.                                                                     |
| **Parameters**                              | <ul><li>size - An optional integer value specifying the maximum body size allowed for an incoming HTTP request in bytes.  Defaults to 10485760 (10 MB).</li></ul> |
| **Returns**                                 | <ul><li>If a new size is specified, returns the `hs.httpserver` object; otherwise the current value.</li></ul>          |
| **Notes**                                   | <ul><li>Because the Hammerspoon http server processes incoming requests completely in memory, this method puts a limit on the maximum size for a POST or PUT request.</li></ul>                |

| [send](#send)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:send(message) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message to the websocket client                                                                     |
| **Parameters**                              | <ul><li>message - A string containing the message to send</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:setCallback([callback]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the request handling callback for an HTTP server object                                                                     |
| **Parameters**                              | <ul><li>callback - An optional function that will be called to process each incoming HTTP request, or nil to remove an existing callback. See the notes section below for more information about this callback</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback will be passed four arguments:</li><li> A string containing the type of request (i.e. `GET`/`POST`/`DELETE`/etc)</li><li> A string containing the path element of the request (e.g. `/index.html`)</li><li> A table containing the request headers</li><li> A string containing the raw contents of the request body, or the empty string if no body is included in the request.</li><li>The callback *must* return three values:</li><li> A string containing the body of the response</li><li> An integer containing the response code (e.g. 200 for a successful request)</li><li> A table containing additional HTTP headers to set (or an empty table, `{}`, if no extra headers are required)</li><li></li><li>A POST request, often used by HTML forms, will store the contents of the form in the body of the request.</li></ul>                |

| [setInterface](#setInterface)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:setInterface(interface) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the network interface the server is configured to listen on                                                                     |
| **Parameters**                              | <ul><li>interface - A string containing an interface name</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>As well as real interface names (e.g. `en0`) the following values are valid:</li><li> An IP address of one of your interfaces</li><li> localhost</li><li> loopback</li><li> nil (which means all interfaces, and is the default)</li></ul>                |

| [setName](#setName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:setName(name) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the Bonjour name the server should advertise itself as                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the Bonjour name for the server</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>This is not the hostname of the server, just its name in Bonjour service lists (e.g. Safari's Bonjour bookmarks menu)</li></ul>                |

| [setPassword](#setPassword)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:setPassword([password]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a password for an HTTP server object                                                                     |
| **Parameters**                              | <ul><li>password - An optional string that contains the server password, or nil to remove an existing password</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>It is not currently possible to set multiple passwords for different users, or passwords only on specific paths</li></ul>                |

| [setPort](#setPort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:setPort(port) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the TCP port the server is configured to listen on                                                                     |
| **Parameters**                              | <ul><li>port - An integer containing a TCP port to listen on</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:start() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts an HTTP server object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:stop() -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops an HTTP server object                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [websocket](#websocket)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver:websocket(path, callback) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables a websocket endpoint on the HTTP server                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the websocket path such as '/ws'</li><li>callback - A function returning a string for each received websocket message</li></ul> |
| **Returns**                                 | <ul><li>The `hs.httpserver` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback is passed one string parameter containing the received message</li><li>The callback must return a string containing the response message</li><li>Given a path '/mysock' and a port of 8000, the websocket URL is as follows:</li><li> ws://localhost:8000/mysock</li><li> wss://localhost:8000/mysock (if SSL enabled)</li></ul>                |

