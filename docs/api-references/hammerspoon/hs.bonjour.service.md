# hs.bonjour.service

Represents the service records that are discovered or published by the hs.bonjour module.

This module allows you to explore the details of discovered services including ip addresses and text records, and to publish your own multicast DNS advertisements for services on your computer. This can be useful to advertise network services provided by other Hammerspoon modules or other applications on your computer which do not publish their own advertisements already.

This module will *not* allow you to publish proxy records for other hosts on your local network.
Additional submodules which may address this limitation as well as provide additional functions available with Apple's dns-sd library are being considered but there is no estimated timeframe at present.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [serviceTypes](#servicetypes)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)
 * [remote](#remote)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addresses](#addresses)
 * [domain](#domain)
 * [hostname](#hostname)
 * [includesPeerToPeer](#includespeertopeer)
 * [monitor](#monitor)
 * [name](#name)
 * [port](#port)
 * [publish](#publish)
 * [resolve](#resolve)
 * [stop](#stop)
 * [stopMonitoring](#stopmonitoring)
 * [txtRecord](#txtrecord)
 * [type](#type)


---

## API Documentation

#### Constants


### [serviceTypes](#servicetypes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.serviceTypes`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A list of common service types which can used for discovery through this module.                                                                     |
| **Notes**                                   | <ul><li>This list was generated from the output of `avahi-browse -b` and `avahi-browse -bk` from the avahi-daemon/stable,now 0.7-4+b1 armhf package under Raspbian GNU/Linux 10.</li><li>This list is by no means complete and is provided solely for the purposes of providing examples. Additional service types can be discovered quite easily using Google or other search engines.</li><li>You can view the contents of this table in the Hammerspoon Console by entering `require("hs.bonjour").serviceTypes` into the input field.</li></ul> |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service.new(name, service, port, [domain]) -> serviceObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new serviceObject for advertising a service provided by your computer.                                                                     |
| **Parameters**                              | <ul><li>`name`    - The name of the service being advertised. This does not have to be the hostname of the machine. However, if you specify an empty string, the computers hostname will be used.</li><li>`service` - a string specifying the service being advertised. This string should be specified in the format of '_service._protocol.' where _protocol is one of '_tcp' or '_udp'. Examples of common service types can be found in `hs.bonjour.serviceTypes`.</li><li>`port`    - an integer specifying the tcp or udp port the service is provided at</li><li>`domain`  - an optional string specifying the domain you wish to advertise this service in.</li></ul> |
| **Returns**                                 | <ul><li>the newly created service object, or nil if there was an error</li></ul>          |
| **Notes**                                   | <ul><li>If the name specified is not unique on the network for the service type specified, then a number will be appended to the end of the name. This behavior cannot be overridden and can only be detected by checking [hs.bonjour.service:name](#name) after [hs.bonjour.service:publish](#publish) is invoked to see if the name has been changed from what you originally assigned.</li><li></li><li>The service will not be advertised until [hs.bonjour.service:publish](#publish) is invoked on the serviceObject returned.</li><li></li><li>If you do not specify the `domain` parameter, your default domain, usually "local" will be used.</li></ul> |

---


### [remote](#remote)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service.remote(name, service, [domain]) -> serviceObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a new serviceObject for a remote machine (i.e. not the users computer) on your network offering the specified service.                                                                     |
| **Parameters**                              | <ul><li>`name`    - a string specifying the name of the advertised service on the network to locate. Often, but not always, this will be the hostname of the machine providing the desired service.</li><li>`service` - a string specifying the service type. This string should be specified in the format of '_service._protocol.' where _protocol is one of '_tcp' or '_udp'. Examples of common service types can be found in `hs.bonjour.serviceTypes`.</li><li>`domain`  - an optional string specifying the domain the service belongs to.</li></ul> |
| **Returns**                                 | <ul><li>the newly created service object, or nil if there was an error</li></ul>          |
| **Notes**                                   | <ul><li>In general you should not need to use this constructor, as they will be created automatically for you in the callbacks to `hs.bonjour:findServices`.</li><li>This method can be used, however, when you already know that a specific service should exist on the network and you wish to resolve its current IP addresses or text records.</li><li></li><li>Resolution of the service ip address, hostname, port, and current text records will not occur until [hs.bonjour.service:publish](#publish) is invoked on the serviceObject returned.</li><li></li><li>The macOS API specifies that an empty domain string (i.e. specifying the `domain` parameter as "" or leaving it off completely) should result in using the default domain for the computer; in my experience this results in an error when attempting to resolve the serviceObject's ip addresses if I don't specify "local" explicitly. In general this shouldn't be an issue if you limit your use of remote serviceObjects to those returned by `hs.bonjour:findServices` as the domain of discovery will be included in the object for you automatically. If you do try to create these objects independently yourself, be aware that attempting to use the "default domain" rather than specifying it explicitly will probably not work as expected.</li></ul> |

---

#### Methods


### [addresses](#addresses)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:addresses() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table listing the addresses for the service represented by the serviceObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an array table of strings representing the IPv4 and IPv6 address of the machine which provides the services represented by the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>for remote serviceObjects, the table will be empty if this method is invoked before [hs.bonjour.service:resolve](#resolve).</li><li>for local (published) serviceObjects, this table will always be empty.</li></ul> |

---


### [domain](#domain)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:domain() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the domain the service represented by the serviceObject belongs to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the domain the service represented by the serviceObject belongs to.</li></ul>          |
| **Notes**                                   | <ul><li>for remote serviceObjects, this domain will be the domain the service was discovered in.</li><li>for local (published) serviceObjects, this domain will be the domain the service is published in; if you did not specify a domain with [hs.bonjour.service.new](#new) then this will be an empty string until [hs.bonjour.service:publish](#publish) is invoked.</li></ul> |

---


### [hostname](#hostname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:hostname() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the hostname of the machine the service represented by the serviceObject belongs to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the hostname of the machine the service represented by the serviceObject belongs to.</li></ul>          |
| **Notes**                                   | <ul><li>for remote serviceObjects, this will be nil if this method is invoked before [hs.bonjour.service:resolve](#resolve).</li><li>for local (published) serviceObjects, this method will always return nil.</li></ul> |

---


### [includesPeerToPeer](#includespeertopeer)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:includesPeerToPeer([value]) -> boolean | serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether the service represented by the service object should be published or resolved over peer-to-peer Bluetooth and Wi-Fi, if available.                                                                     |
| **Parameters**                              | <ul><li>`value` - an optional boolean, default false, specifying whether advertising and resolving should occur over peer-to-peer Bluetooth and Wi-Fi, if available.</li></ul> |
| **Returns**                                 | <ul><li>if `value` is provided, returns the serviceObject; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>if you are changing the value of this property, you must call this method before invoking [hs.bonjour.service:publish](#publish] or [hs.bonjour.service:resolve](#resolve), or after stopping publishing or resolving with [hs.bonjour.service:stop](#stop).</li><li></li><li>for remote serviceObjects, this flag determines if resolution and text record monitoring should occur over peer-to-peer network interfaces.</li><li>for local (published) serviceObjects, this flag determines if advertising should occur over peer-to-peer network interfaces.</li></ul> |

---


### [monitor](#monitor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:monitor([callback]) -> serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Monitor the service for changes to its associated text records.                                                                     |
| **Parameters**                              | <ul><li>`callback` - an optional callback function which should expect 3 arguments:
  the serviceObject userdata
  the string "txtRecord"
  a table containing key-value pairs specifying the new text records for the service</li></ul> |
| **Returns**                                 | <ul><li>the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>When monitoring is active, [hs.bonjour.service:txtRecord](#txtRecord) will return the most recent text records observed. If this is the only method by which you check the text records, but you wish to ensure you have the most recent values, you should invoke this method without specifying a callback.</li><li></li><li>When [hs.bonjour.service:resolve](#resolve) is invoked, the text records at the time of resolution are captured for retrieval with [hs.bonjour.service:txtRecord](#txtRecord). Subsequent changes to the text records will not be reflected by [hs.bonjour.service:txtRecord](#txtRecord) unless this method has been invoked (with or without a callback function) and is currently active.</li><li></li><li>You *can* monitor for text changes on local serviceObjects that were created by [hs.bonjour.service.new](#new) and that you are publishing. This can be used to invoke a callback when one portion of your code makes changes to the text records you are publishing and you need another portion of your code to be aware of this change.</li></ul> |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of the service represented by the serviceObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the name of the service represented by the serviceObject.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [port](#port)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:port() -> integer`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the port the service represented by the serviceObject is available on.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a number specifying the port the service represented by the serviceObject is available on.</li></ul>          |
| **Notes**                                   | <ul><li>for remote serviceObjects, this will be -1 if this method is invoked before [hs.bonjour.service:resolve](#resolve).</li><li>for local (published) serviceObjects, this method will always return the number specified when the serviceObject was created with the [hs.bonjour.service.new](#new) constructor.</li></ul> |

---


### [publish](#publish)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:publish([allowRename], [callback]) -> serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Begin advertising the specified local service.                                                                     |
| **Parameters**                              | <ul><li>`allowRename` - an optional boolean, default true, specifying whether to automatically rename the service if the name and type combination is already being published in the service's domain. If renaming is allowed and a conflict occurs, the service name will have `-#` appended to it where `#` is an increasing integer starting at 2.</li><li>`callback`    - an optional callback function which should expect 2 or 3 arguments and return none. The arguments to the callback function will be one of the following sets:
  on successful publishing:the serviceObject userdatathe string "published"
  if an error occurs during publishing:the serviceObject userdatathe string "error"a string specifying the specific error that occurred</li></ul> |
| **Returns**                                 | <ul><li>the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>this method should only be called on serviceObjects which were created with [hs.bonjour.service.new](#new).</li></ul> |

---


### [resolve](#resolve)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:resolve([timeout], [callback]) -> serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resolve the address and details for a discovered service.                                                                     |
| **Parameters**                              | <ul><li>`timeout`  - an optional number, default 0.0, specifying the maximum number of seconds to attempt to resolve the details for this service. Specifying 0.0 means that the resolution should not timeout and that resolution should continue indefinitely.</li><li>`callback` - an optional callback function which should expect 2 or 3 arguments and return none.
  on successful resolution:the serviceObject userdatathe string "resolved"
  if an error occurs during resolution:the serviceObject userdatathe string "error"a string specifying the specific error that occurred
  if `timeout` is specified and is any number other than 0.0, the following will be sent to the callback when the timeout has been reached:the serviceObject userdatathe string "stop"</li></ul> |
| **Returns**                                 | <ul><li>the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>this method should only be called on serviceObjects which were returned by an `hs.bonjour` browserObject or created with [hs.bonjour.service.remote](#remote).</li><li></li><li>For a remote service, this method must be called in order to retrieve the [addresses](#addresses), the [port](#port), the [hostname](#hostname), and any the associated [text records](#txtRecord) for the service.</li><li>To reduce the usage of system resources, you should generally specify a timeout value or make sure to invoke [hs.bonjour.service:stop](#stop) after you have verified that you have received the details you require.</li></ul> |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:stop() -> serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stop advertising or resolving the service specified by the serviceObject                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>this method will stop the advertising of a service which has been published with [hs.bonjour.service:publish](#publish) or is being resolved with [hs.bonjour.service:resolve](#resolve).</li><li></li><li>To reduce the usage of system resources, you should make sure to use this method when resolving a remote service if you did not specify a timeout for [hs.bonjour.service:resolve](#resolve) or specified a timeout of 0.0 once you have verified that you have the details you need.</li></ul> |

---


### [stopMonitoring](#stopmonitoring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:stopMonitoring() -> serviceObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stop monitoring a service for changes to its text records.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the serviceObject</li></ul>          |
| **Notes**                                   | <ul><li>This method will stop updating [hs.bonjour.service:txtRecord](#txtRecord) and invoking the callback, if any, assigned with [hs.bonjour.service:monitor](#monitor).</li></ul> |

---


### [txtRecord](#txtrecord)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:txtRecord([records]) -> table | serviceObject | false`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the text records associated with the serviceObject.                                                                     |
| **Parameters**                              | <ul><li>`records` - an optional table specifying the text record for the advertised service as a series of key-value entries. All keys and values must be specified as strings.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided to this method, returns the serviceObject or false if there was a problem setting the text record for this service. If no argument is provided, returns the current table of text records.</li></ul>          |
| **Notes**                                   | <ul><li>for remote serviceObjects, this method will return nil if invoked before [hs.bonjour.service:resolve](#resolve)</li><li>setting the text record for a service replaces the existing records for the serviceObject. If the serviceObject is remote, this change is only visible on the local machine. For a service you are advertising, this change will be advertised to other machines.</li><li></li><li>Text records are usually used to provide additional information concerning the service and their purpose and meanings are service dependant; for example, when advertising an `_http._tcp.` service, you can specify a specific path on the server by specifying a table of text records containing the "path" key.</li></ul> |

---


### [type](#type)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.bonjour.service:type() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the type of service represented by the serviceObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the type of service represented by the serviceObject.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

