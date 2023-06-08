# [docs](index.md) » hs.network.ping.echoRequest
---

Provides lower-level access to the ICMP Echo Request infrastructure used by the hs.network.ping module. In general, you should not need to use this module directly unless you have specific requirements not met by the hs.network.ping module and the `hs.network.ping` object methods.

This module is based heavily on Apple's SimplePing sample project which can be found at https://developer.apple.com/library/content/samplecode/SimplePing/Introduction/Intro.html.

When a callback function argument is specified as an ICMP table, the Lua table returned will contain the following key-value pairs:
 * `checksum`       - The ICMP packet checksum used to ensure data integrity.
 * `code`           - ICMP Control Message Code. This should always be 0 unless the callback has received a "receivedUnexpectedPacket" message.
 * `identifier`     - The ICMP packet identifier.  This should match the results of [hs.network.ping.echoRequest:identifier](#identifier) unless the callback has received a "receivedUnexpectedPacket" message.
 * `payload`        - A string containing the ICMP payload for this packet. The default payload has been constructed to cause the ICMP packet to be exactly 64 bytes to match the convention for ICMP Echo Requests.
 * `sequenceNumber` - The ICMP Sequence Number for this packet.
 * `type`           - ICMP Control Message Type. Unless the callback has received a "receivedUnexpectedPacket" message, this will be 0 (ICMPv4) or 129 (ICMPv6) for packets we receive and 8 (ICMPv4) or 128 (ICMPv6) for packets we send.
 * `_raw`           - A string containing the ICMP packet as raw data.

In cases where the callback receives a "receivedUnexpectedPacket" message because the packet is corrupted or truncated, this table may only contain the `_raw` field.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [echoRequest](#echoRequest)
* Methods - API calls which can only be made on an object returned by a constructor
 * [acceptAddressFamily](#acceptAddressFamily)
 * [hostAddress](#hostAddress)
 * [hostAddressFamily](#hostAddressFamily)
 * [hostName](#hostName)
 * [identifier](#identifier)
 * [isRunning](#isRunning)
 * [nextSequenceNumber](#nextSequenceNumber)
 * [seeAllUnexpectedPackets](#seeAllUnexpectedPackets)
 * [sendPayload](#sendPayload)
 * [setCallback](#setCallback)
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constructors

| [echoRequest](#echoRequest)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest.echoRequest(server) -> echoRequestObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new ICMP Echo Request object for the server specified.                                                                     |
| **Parameters**                              | <ul><li>`server` - a string containing the hostname or ip address of the server to communicate with. Both IPv4 and IPv6 style addresses are supported.</li></ul> |
| **Returns**                                 | <ul><li>an echoRequest object</li></ul>          |
| **Notes**                                   | <ul><li>This constructor returns a lower-level object than the `hs.network.ping.ping` constructor and is more difficult to use. It is recommended that you use this constructor only if `hs.network.ping.ping` is not sufficient for your needs.</li><li></li><li>For convenience, you can call this constructor as `hs.network.ping.echoRequest(server)`</li></ul>                |

### Methods

| [acceptAddressFamily](#acceptAddressFamily)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:acceptAddressFamily([family]) -> echoRequestObject | current value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the address family the echoRequestObject should communicate with.                                                                     |
| **Parameters**                              | <ul><li>`family` - an optional string, default "any", which specifies the address family used by this object.  Valid values are "any", "IPv4", and "IPv6".</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the echoRequestObject, otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>Setting this value to "IPv6" or "IPv4" will cause the echoRequestObject to attempt to resolve the server's name into an IPv6 address or an IPv4 address and communicate via ICMPv6 or ICMP(v4) when the [hs.network.ping.echoRequest:start](#start) method is invoked.  A callback with the message "didFail" will occur if the server could not be resolved to an address in the specified family.</li><li>If this value is set to "any", then the first address which is discovered for the server's name will determine whether ICMPv6 or ICMP(v4) is used, based upon the family of the address.</li><li></li><li>Setting a value with this method will have no immediate effect on an echoRequestObject which has already been started with [hs.network.ping.echoRequest:start](#start). You must first stop and then restart the object for any change to have an effect.</li></ul>                |

| [hostAddress](#hostAddress)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:hostAddress() -> string | false | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a string representation for the server's IP address, or a boolean if address resolution has not completed yet.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>If the object has been started and address resolution has completed, then the string representation of the server's IP address is returned.</li><li>If the object has been started, but resolution is still pending, returns a boolean value of false.</li><li>If the object has not been started, returns nil.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hostAddressFamily](#hostAddressFamily)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:hostAddressFamily() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the host address family currently in use by this echoRequestObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string indicating the IP address family currently used by this echoRequestObject.  It will be one of the following values:</li><li>  "IPv4"       - indicates that ICMP(v4) packets are being sent and listened for.</li><li>  "IPv6"       - indicates that ICMPv6 packets are being sent and listened for.</li><li>  "unresolved" - indicates that the echoRequestObject has not been started or that address resolution is still in progress.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hostName](#hostName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:hostName() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of the target host as provided to the echoRequestObject's constructor                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the hostname as specified when the object was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [identifier](#identifier)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:identifier() -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the identifier number for the echoRequestObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an integer specifying the identifier which is embedded in the ICMP packets this object sends.</li></ul>          |
| **Notes**                                   | <ul><li>ICMP Echo Replies which include this identifier will generate a "receivedPacket" message to the object callback, while replies which include a different identifier will generate a "receivedUnexpectedPacket" message.</li></ul>                |

| [isRunning](#isRunning)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:isRunning() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean indicating whether or not this echoRequestObject is currently listening for ICMP Echo Replies.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if the object is currently listening for ICMP Echo Replies, or false if it is not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [nextSequenceNumber](#nextSequenceNumber)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:nextSequenceNumber() -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The sequence number that will be used for the next ICMP packet sent by this object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an integer specifying the sequence number that will be embedded in the next ICMP message sent by this object when [hs.network.ping.echoRequest:sendPayload](#sendPayload) is invoked.</li></ul>          |
| **Notes**                                   | <ul><li>ICMP Echo Replies which are expected by this object should always be less than this number, with the caveat that this number is a 16-bit integer which will wrap around to 0 after sending a packet with the sequence number 65535.</li><li>Because of this wrap around effect, this module will generate a "receivedPacket" message to the object callback whenever the received packet has a sequence number that is within the last 120 sequence numbers we've sent and a "receivedUnexpectedPacket" otherwise.</li><li>  Per the comments in Apple's SimplePing.m file: Why 120?  Well, if we send one ping per second, 120 is 2 minutes, which is the standard "max time a packet can bounce around the Internet" value.</li></ul>                |

| [seeAllUnexpectedPackets](#seeAllUnexpectedPackets)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:seeAllUnexpectedPackets([state]) -> boolean | echoRequestObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether or not the callback should receive all unexpected packets or only those which carry our identifier.                                                                     |
| **Parameters**                              | <ul><li>`state` - an optional boolean, default false, specifying whether or not all unexpected packets or only those which carry our identifier should generate a "receivedUnexpectedPacket" callback message.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the echoRequestObject; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>The nature of ICMP packet reception is such that all listeners receive all ICMP packets, even those which belong to another process or echoRequestObject.</li><li>  By default, a valid packet (i.e. with a valid checksum) which does not contain our identifier is ignored since it was not intended for our receiver.  Only corrupt or packets with our identifier but that were otherwise unexpected will generate a "receivedUnexpectedPacket" callback message.</li><li>  This method optionally allows the echoRequestObject to receive *all* incoming packets, even ones which are expected by another process or echoRequestObject.</li><li>If you wish to examine ICMPv6 router advertisement and neighbor discovery packets, you should set this property to true. Note that this module does not provide the necessary tools to decode these packets at present, so you will have to decode them yourself if you wish to examine their contents.</li></ul>                |

| [sendPayload](#sendPayload)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:sendPayload([payload]) -> echoRequestObject | false | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a single ICMP Echo Request packet.                                                                     |
| **Parameters**                              | <ul><li>`payload` - an optional string containing the data to include in the ICMP Echo Request as the packet payload.</li></ul> |
| **Returns**                                 | <ul><li>If the object has been started and address resolution has completed, then the ICMP Echo Packet is sent and this method returns the echoRequestObject</li><li>If the object has been started, but resolution is still pending, the packet is not sent and this method returns a boolean value of false.</li><li>If the object has not been started, the packet is not sent and this method returns nil.</li></ul>          |
| **Notes**                                   | <ul><li>By convention, unless you are trying to test for specific network fragmentation or congestion problems, ICMP Echo Requests are generally 64 bytes in length (this includes the 8 byte header, giving 56 bytes of payload data).  If you do not specify a payload, a default payload which will result in a packet size of 64 bytes is constructed.</li></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:setCallback(fn) -> echoRequestObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or remove the object callback function                                                                     |
| **Parameters**                              | <ul><li>`fn` - a function to set as the callback function for this object, or nil if you wish to remove any existing callback function.</li></ul> |
| **Returns**                                 | <ul><li>the echoRequestObject</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect between 3 and 5 arguments and return none. The possible arguments which are sent will be one of the following:</li><li></li><li>  "didStart" - indicates that the object has resolved the address of the server and is ready to begin sending and receiving ICMP Echo packets.</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "didStart"</li><li>    `address` - a string representation of the IPv4 or IPv6 address of the server specified to the constructor.</li><li></li><li>  "didFail" - indicates that the object has failed, either because the address could not be resolved or a network error has occurred.</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "didFail"</li><li>    `error`   - a string describing the error that occurred.</li><li>  Notes:</li><li>    When this message is received, you do not need to call [hs.network.ping.echoRequest:stop](#stop) -- the object will already have been stopped.</li><li></li><li>  "sendPacket" - indicates that the object has sent an ICMP Echo Request packet.</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "sendPacket"</li><li>    `icmp`    - an ICMP packet table representing the packet which has been sent as described in the header of this module's documentation.</li><li>    `seq`     - the sequence number for this packet. Sequence numbers always start at 0 and increase by 1 every time the [hs.network.ping.echoRequest:sendPayload](#sendPayload) method is called.</li><li></li><li>  "sendPacketFailed" - indicates that the object failed to send the ICMP Echo Request packet.</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "sendPacketFailed"</li><li>    `icmp`    - an ICMP packet table representing the packet which was to be sent.</li><li>    `seq`     - the sequence number for this packet.</li><li>    `error`   - a string describing the error that occurred.</li><li>  Notes:</li><li>    Unlike "didFail", the echoRequestObject is not stopped when this message occurs; you can try to send another payload if you wish without restarting the object first.</li><li></li><li>  "receivedPacket" - indicates that an expected ICMP Echo Reply packet has been received by the object.</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "receivedPacket"</li><li>    `icmp`    - an ICMP packet table representing the packet received.</li><li>    `seq`     - the sequence number for this packet.</li><li></li><li>  "receivedUnexpectedPacket" - indicates that an unexpected ICMP packet was received</li><li>    `object`  - the echoRequestObject itself</li><li>    `message` - the message to the callback, in this case "receivedUnexpectedPacket"</li><li>    `icmp`    - an ICMP packet table representing the packet received.</li><li>  Notes:</li><li>    This message can occur for a variety of reasons, the most common being:</li><li>      the ICMP packet is corrupt or truncated and cannot be parsed</li><li>      the ICMP Identifier does not match ours and the sequence number is not one we have sent</li><li>      the ICMP type does not match an ICMP Echo Reply</li><li>      When using IPv6, this is especially common because IPv6 uses ICMP for network management functions like Router Advertisement and Neighbor Discovery.</li><li>    In general, it is reasonably safe to ignore these messages, unless you are having problems receiving anything else, in which case it could indicate problems on your network that need addressing.</li></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:start() -> echoRequestObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Start the echoRequestObject by resolving the server's address and start listening for ICMP Echo Reply packets.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the echoRequestObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.ping.echoRequest:stop() -> echoRequestObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stop listening for ICMP Echo Reply packets with this object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the echoRequestObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

