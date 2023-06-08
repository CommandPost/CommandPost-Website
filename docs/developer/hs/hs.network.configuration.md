# [docs](index.md) » hs.network.configuration
---

This sub-module provides access to the current location set configuration settings in the system's dynamic store.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [open](#open)
* Methods - API calls which can only be made on an object returned by a constructor
 * [computerName](#computerName)
 * [consoleUser](#consoleUser)
 * [contents](#contents)
 * [dhcpInfo](#dhcpInfo)
 * [hostname](#hostname)
 * [keys](#keys)
 * [location](#location)
 * [locations](#locations)
 * [monitorKeys](#monitorKeys)
 * [proxies](#proxies)
 * [setCallback](#setCallback)
 * [setLocation](#setLocation)
 * [start](#start)
 * [stop](#stop)

## API Documentation

### Constructors

| [open](#open)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration.open() -> storeObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Opens a session to the dynamic store maintained by the System Configuration server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the storeObject</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [computerName](#computerName)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:computerName() -> name, encoding`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of the computer as specified in the Sharing Preferences, and its string encoding                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>name     - the computer name</li><li>encoding - the encoding type</li></ul>          |
| **Notes**                                   | <ul><li>You can also retrieve this information as key-value pairs with `hs.network.configuration:contents("Setup:/System")`</li></ul>                |

| [consoleUser](#consoleUser)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:consoleUser() -> name, uid, gid`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of the user currently logged into the system, including the users id and primary group id                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>name - the user name</li><li>uid  - the user ID for the user</li><li>gid  - the user's primary group ID</li></ul>          |
| **Notes**                                   | <ul><li>You can also retrieve this information as key-value pairs with `hs.network.configuration:contents("State:/Users/ConsoleUser")`</li></ul>                |

| [contents](#contents)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:contents([keys], [pattern]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return the contents of the store for the specified keys or keys matching the specified pattern(s)                                                                     |
| **Parameters**                              | <ul><li>keys    - a string or table of strings containing the keys or patterns of keys, if `pattern` is true.  Defaults to all keys.</li><li>pattern - a boolean indicating wether or not the string(s) provided are to be considered regular expression patterns (true) or literal strings to match (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>a table of key-value pairs from the dynamic store which match the specified keys or key patterns.</li></ul>          |
| **Notes**                                   | <ul><li>if no parameters are provided, then all key-value pairs in the dynamic store are returned.</li></ul>                |

| [dhcpInfo](#dhcpInfo)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:dhcpInfo([serviceID]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return the DHCP information for the specified service or the primary service if no parameter is specified.                                                                     |
| **Parameters**                              | <ul><li>serviceID - an optional string containing the service ID of the interface for which to return DHCP info.  If this parameter is not provided, then the default (primary) service is queried.</li></ul> |
| **Returns**                                 | <ul><li>a table containing DHCP information including lease time and DHCP options</li></ul>          |
| **Notes**                                   | <ul><li>a list of possible Service ID's can be retrieved with `hs.network.configuration:contents("Setup:/Network/Global/IPv4")`</li><li>generates an error if the service ID is invalid or was not assigned an IP address via DHCP.</li></ul>                |

| [hostname](#hostname)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:hostname() -> name`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current local host name for the computer                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>name - the local host name</li></ul>          |
| **Notes**                                   | <ul><li>You can also retrieve this information as key-value pairs with `hs.network.configuration:contents("Setup:/System")`</li></ul>                |

| [keys](#keys)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:keys([keypattern]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Return the keys in the dynamic store which match the specified pattern                                                                     |
| **Parameters**                              | <ul><li>keypattern - a regular expression specifying which keys to return (defaults to ".*", or all keys)</li></ul> |
| **Returns**                                 | <ul><li>a table of keys from the dynamic store.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [location](#location)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:location() -> location`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current location identifier                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>location - the UUID for the currently active network location</li></ul>          |
| **Notes**                                   | <ul><li>You can also retrieve this information as key-value pairs with `hs.network.configuration:contents("Setup:")`</li><li>If you have different locations defined in the Network preferences panel, this can be used to determine the currently active location.</li></ul>                |

| [locations](#locations)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:locations() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all configured locations                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table of key-value pairs mapping location UUIDs to their names</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [monitorKeys](#monitorKeys)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:monitorKeys([keys], [pattern]) -> storeObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specify the key(s) or key pattern(s) to monitor for changes.                                                                     |
| **Parameters**                              | <ul><li>keys    - a string or table of strings containing the keys or patterns of keys, if `pattern` is true.  Defaults to all keys.</li><li>pattern - a boolean indicating wether or not the string(s) provided are to be considered regular expression patterns (true) or literal strings to match (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>the store Object</li></ul>          |
| **Notes**                                   | <ul><li>if no parameters are provided, then all key-value pairs in the dynamic store are monitored for changes.</li></ul>                |

| [proxies](#proxies)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:proxies() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns information about the currently active proxies, if any                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table of key-value pairs describing the current proxies in effect, both globally, and scoped to specific interfaces.</li></ul>          |
| **Notes**                                   | <ul><li>You can also retrieve this information as key-value pairs with `hs.network.configuration:contents("State:/Network/Global/Proxies")`</li></ul>                |

| [setCallback](#setCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:setCallback(function) -> storeObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or remove the callback function for a store object                                                                     |
| **Parameters**                              | <ul><li>a function or nil to set or remove the store object callback function</li></ul> |
| **Returns**                                 | <ul><li>the store object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function will be invoked each time a monitored key changes value and the callback function should accept two parameters: the storeObject itself, and an array of the keys which contain values that have changed.</li><li>This method just sets the callback function.  You specify which keys to watch with [hs.network.configuration:monitorKeys](#monitorKeys) and start or stop the watcher with [hs.network.configuration:start](#start) or [hs.network.configuration:stop](#stop)</li></ul>                |

| [setLocation](#setLocation)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:setLocation(location) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Switches to a new location                                                                     |
| **Parameters**                              | <ul><li>location - string containing name or UUID of new location</li></ul> |
| **Returns**                                 | <ul><li>bool - true if the location was successfully changed, false if there was an error</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:start() -> storeObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts watching the store object for changes to the monitored keys and invokes the callback function (if any) when a change occurs.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the store object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should be specified with [hs.network.configuration:setCallback](#setCallback) and the keys to monitor should be specified with [hs.network.configuration:monitorKeys](#monitorKeys).</li></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.network.configuration:stop() -> storeObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops watching the store object for changes.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the store object</li></ul>          |
| **Notes**                                   | <ul></ul>                |
