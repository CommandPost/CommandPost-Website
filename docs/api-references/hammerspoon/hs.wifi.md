# hs.wifi

Inspect WiFi networks

---

## Submodules
 * [hs.wifi.watcher](hs.wifi.watcher.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [associate](#associate)
 * [availableNetworks](#availablenetworks)
 * [currentNetwork](#currentnetwork)
 * [disassociate](#disassociate)
 * [interfaceDetails](#interfacedetails)
 * [interfaces](#interfaces)
 * [setPower](#setpower)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [backgroundScan](#backgroundscan)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [isDone](#isdone)


---

## API Documentation

#### Functions


### [associate](#associate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.associate(network, passphrase[, interface]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Connect the interface to a wireless network                                                                     |
| **Parameters**                              | <ul><li>network - A string containing the SSID of the network to associate to</li><li>passphrase - A string containing the passphrase of the network</li><li>interface - An optional string containing the name of an interface (see [hs.wifi.interfaces](#interfaces)). If not present, the default system WLAN device will be used</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the network was joined successfully, false if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>Enterprise WiFi networks are not currently supported. Please file an issue on GitHub if you need support for enterprise networks</li><li>This function blocks Hammerspoon until the operation is completed</li><li>If multiple access points are available with the same SSID, one will be chosen at random to connect to</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 131](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L131) |

---


### [availableNetworks](#availablenetworks)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.availableNetworks([interface]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets a list of available WiFi networks                                                                     |
| **Parameters**                              | <ul><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of all visible WiFi networks</li></ul>          |
| **Notes**                                   | <ul><li>WARNING: This function will block all Lua execution until the scan has completed. It's probably not very sensible to use this function very much, if at all.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 189](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L189) |

---


### [currentNetwork](#currentnetwork)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.currentNetwork([interface]) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the name of the current WiFi network                                                                     |
| **Parameters**                              | <ul><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>A string containing the SSID of the WiFi network currently joined, or nil if no there is no WiFi connection</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 300](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L300) |

---


### [disassociate](#disassociate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.disassociate([interface]) -> nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disconnect the interface from its current network.                                                                     |
| **Parameters**                              | <ul><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 110](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L110) |

---


### [interfaceDetails](#interfacedetails)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.interfaceDetails([interface]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing details about the wireless interface.                                                                     |
| **Parameters**                              | <ul><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>A table containing details about the interface.  The table will contain the following keys:</li><li>  active            - The interface has its corresponding network service enabled.</li><li>  activePHYMode     - The current active PHY mode for the interface.</li><li>  bssid             - The current basic service set identifier (BSSID) for the interface. Note that for this key to be available, hs.location needs to have been started</li><li>  cachedScanResults - A table containing the networks currently in the scan cache for the WLAN interface.  See [hs.wifi.backgroundScan](#backgroundScan) for details on the table format.</li><li>  configuration     - A table containing the current configuration for the given WLAN interface.  This table will contain the following keys:</li><li>    networkProfiles                    - A table containing an array of known networks for the interface.  Entries in the array will each contain the following keys:</li><li>      ssid     - The service set identifier (SSID) for the network profile.</li><li>      ssidData - The service set identifier (SSID) for the network, returned as data (1-32 octets).</li><li>      security - The security mode for the network profile.</li><li>    rememberJoinedNetworks             - A boolean flag indicating whether or not the AirPort client will remember all joined networks.</li><li>    requireAdministratorForAssociation - A boolean flag indicating whether or not changing the wireless network requires an Administrator password.</li><li>    requireAdministratorForIBSSMode    - A boolean flag indicating whether or not creating an IBSS (Ad Hoc) network requires an Administrator password.</li><li>    requireAdministratorForPower       - A boolean flag indicating whether or not changing the wireless power state requires an Administrator password.</li><li>  countryCode       - The current country code (ISO/IEC 3166-1:1997) for the interface.</li><li>  hardwareAddress   - The hardware media access control (MAC) address for the interface.</li><li>  interface         - The BSD name of the interface.</li><li>  interfaceMode     - The current mode for the interface.</li><li>  noise             - The current aggregate noise measurement (dBm) for the interface.</li><li>  power             - Whether or not the interface is currently powered on.</li><li>  rssi              - The current aggregate received signal strength indication (RSSI) measurement (dBm) for the interface.</li><li>  security          - The current security mode for the interface.</li><li>  ssid              - The current service set identifier (SSID) for the interface.</li><li>  ssidData          - The service set identifier (SSID) for the interface, returned as data (1-32 octets).</li><li>  supportedChannels - An array of channels supported by the interface for the active country code.  The array will contain entries with the following keys:</li><li>    band   - The channel band.</li><li>    number - The channel number.</li><li>    width  - The channel width.</li><li>  transmitPower     - The current transmit power (mW) for the interface. Returns 0 in the case of an error.</li><li>  transmitRate      - The current transmit rate (Mbps) for the interface.</li><li>  wlanChannel       - A table containing details about the channel the interface is on. The table will contain the following keys:</li><li>    band   - The channel band.</li><li>    number - The channel number.</li><li>    width  - The channel width.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 326](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L326) |

---


### [interfaces](#interfaces)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.interfaces() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of interface names for WLAN devices attached to the system                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a table containing the names of all WLAN interfaces for this system.</li></ul>          |
| **Notes**                                   | <ul><li>For most systems, this will be one interface, but the result is still returned as an array.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 170](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L170) |

---


### [setPower](#setpower)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.setPower(state, [interface]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Turns a wifi interface on or off                                                                     |
| **Parameters**                              | <ul><li>state - a boolean value indicating if the Wifi device should be powered on (true) or off (false).</li><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>True if the power change was successful, or false and an error string if an error occurred attempting to set the power state.  Returns nil if there is a problem attaching to the interface.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 75](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L75) |

---

#### Constructors


### [backgroundScan](#backgroundscan)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.backgroundScan(fn, [interface]) -> scanObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Perform a scan for available wifi networks in the background (non-blocking)                                                                     |
| **Parameters**                              | <ul><li>fn        - the function to callback when the scan is completed.</li><li>interface - an optional interface name as listed in the results of [hs.wifi.interfaces](#interfaces).  If not present, the interface defaults to the systems default WLAN device.</li></ul> |
| **Returns**                                 | <ul><li>returns a scan object</li></ul>          |
| **Notes**                                   | <ul><li>If you pass in nil as the callback function, the scan occurs but no callback function is called.  This can be useful to update the `cachedScanResults` entry returned by [hs.wifi.interfaceDetails](#interfaceDetails).</li><li>The callback function should expect one argument which will be a table if the scan was successful or a string containing an error message if it was not.  The table will be an array of available networks.  Each entry in the array will be a table containing the following keys:</li><li> beaconInterval         - The beacon interval (ms) for the network.</li><li> bssid                  - The basic service set identifier (BSSID) for the network.</li><li> countryCode            - The country code (ISO/IEC 3166-1:1997) for the network.</li><li> ibss                   - Whether or not the network is an IBSS (ad-hoc) network.</li><li> informationElementData - Information element data included in beacon or probe response frames as an array of integers.</li><li> noise                  - The aggregate noise measurement (dBm) for the network.</li><li> PHYModes               - A table containing the PHY Modes supported by the network.</li><li> rssi                   - The aggregate received signal strength indication (RSSI) measurement (dBm) for the network.</li><li> security               - A table containing the security types supported by the network.</li><li> ssid                   - The service set identifier (SSID) for the network, encoded as a string.</li><li> ssidData               - The service set identifier (SSID) for the network, returned as data (1-32 octets).</li><li> wlanChannel            - A table containing details about the channel the network is on. The table will contain the following keys:</li><li>  band   - The channel band.</li><li>  number - The channel number.</li><li>  width  - The channel width.</li><li></li><li>The contents of the `informationElementData` field is returned as an array of integers, each array item representing a byte in the block of data for the element.</li><li>  You can convert this data into a Lua string by passing the array as an argument to `string.char(table.unpack(results.informationElementData))`, but note that this field contains arbitrary binary data and should **not** be treated or considered as a *displayable* string. It requires additional parsing, depending upon the specific information you need from the probe or beacon response.</li><li>  For debugging purposes, if you wish to view the contents of this field as a string, make sure to wrap `string.char(table.unpack(results.informationElementData))` with `hs.utf8.asciiOnly` or `hs.utf8.hexDump`, rather than just print the result directly.</li><li>  As an example using [hs.wifi.interfaceDetails](#interfaceDetails) whose `cachedScanResults` key is an array of entries identical to the argument passed to this constructor's callback function:</li><li>   ~~~</li><li>   function dumpIED(interface)</li><li>       local interface = interface or "en0"</li><li>       local cleanupFunction = hs.utf8.hexDump -- or hs.utf8.asciiOnly if you prefer</li><li>       local cachedScanResults = hs.wifi.interfaceDetails(interface).cachedScanResults</li><li>       if not cachedScanResults then</li><li>           hs.wifi.availableNetworks() -- blocking, so only do if necessary</li><li>           cachedScanResults = hs.wifi.interfaceDetails(interface).cachedScanResults</li><li>       end</li><li>       for i, v in ipairs(cachedScanResults) do</li><li>           print(v.ssid .. " on channel " .. v.wlanChannel.number .. " beacon data:")</li><li>           print(cleanupFunction(string.char(table.unpack(v.informationElementData))))</li><li>       end</li><li>   end</li><li>   ~~~</li><li>  These precautions are in response to Hammerspoon GitHub Issue #859.  As binary data, even when cleaned up with the Console's UTF8 wrapper code, some valid UTF8 sequences have been found to cause crashes in the OSX CoreText API during rendering.  While some specific sequences have made the rounds on the Internet, the specific code analysis at http://www.theregister.co.uk/2015/05/27/text_message_unicode_ios_osx_vulnerability/ suggests a possible cause of the problem which may be triggered by other currently unknown sequences as well.  As the sequences aren't at present predictable, we can't add to the UTF8 wrapper already in place for the Hammerspoon console.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 226](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L226) |

---

#### Methods


### [isDone](#isdone)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi:isDone() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not a scan object has completed its scan for wireless networks.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean value indicating whether or not the scan has been completed.</li></ul>          |
| **Notes**                                   | <ul><li>This will be set whether or not an actual callback function was invoked.  This method can be checked to see if the cached data for the `cachedScanResults` entry returned by [hs.wifi.interfaceDetails](#interfaceDetails) has been updated.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/wifi/libwifi.m line 387](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/wifi/libwifi.m#L387) |

---

