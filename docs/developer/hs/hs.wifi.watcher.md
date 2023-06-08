# [docs](index.md) » hs.wifi.watcher
---

Watch for changes to the associated wifi network

## API Overview
* Constants - Useful values which cannot be changed
 * [eventTypes](#eventTypes)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [start](#start)
 * [stop](#stop)
 * [watchingFor](#watchingFor)

## API Documentation

### Constants

| [eventTypes](#eventTypes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.watcher.eventTypes[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing the possible event types that this watcher can monitor for.                                                                     |
| **Notes**                                   | <ul><li>The following events are available for monitoring:</li><li> "SSIDChange"                   - monitor when the associated network for the Wi-Fi interface changes</li><li> "BSSIDChange"                  - monitor when the base station the Wi-Fi interface is connected to changes</li><li> "countryCodeChange"            - monitor when the adopted country code of the Wi-Fi interface changes</li><li> "linkChange"                   - monitor when the link state for the Wi-Fi interface changes</li><li> "linkQualityChange"            - monitor when the RSSI or transmit rate for the Wi-Fi interface changes</li><li> "modeChange"                   - monitor when the operating mode of the Wi-Fi interface changes</li><li> "powerChange"                  - monitor when the power state of the Wi-Fi interface changes</li><li> "scanCacheUpdated"             - monitor when the scan cache of the Wi-Fi interface is updated with new information</li></ul>                |

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.watcher.new(fn) -> watcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new watcher for WiFi network events                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a WiFi event that is being monitored occurs. The function should expect 2 or 4 arguments as described in the notes below.</li></ul> |
| **Returns**                                 | <ul><li>A `hs.wifi.watcher` object</li></ul>          |
| **Notes**                                   | <ul><li>For backwards compatibility, only "SSIDChange" is watched for by default, so existing code can continue to ignore the callback function arguments unless you add or change events with the [hs.wifi.watcher:watchingFor](#watchingFor).</li><li>The callback function should expect between 3 and 5 arguments, depending upon the events being watched.  The possible arguments are as follows:</li><li>  `watcher`, "SSIDChange", `interface` - occurs when the associated network for the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "SSIDChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  Use `hs.wifi.currentNetwork([interface])` to identify the new network, which may be nil when you leave a network.</li><li>  `watcher`, "BSSIDChange", `interface` - occurs when the base station the Wi-Fi interface is connected to changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "BSSIDChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  `watcher`, "countryCodeChange", `interface` - occurs when the adopted country code of the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "countryCodeChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  `watcher`, "linkChange", `interface` - occurs when the link state for the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "linkChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  `watcher`, "linkQualityChange", `interface` - occurs when the RSSI or transmit rate for the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "linkQualityChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>    `rssi`      - the RSSI value for the currently associated network on the Wi-Fi interface</li><li>    `rate`      - the transmit rate for the currently associated network on the Wi-Fi interface</li><li>  `watcher`, "modeChange", `interface` - occurs when the operating mode of the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "modeChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  `watcher`, "powerChange", `interface` - occurs when the power state of the Wi-Fi interface changes</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "powerChange"</li><li>    `interface` - the name of the interface for which the event occurred</li><li>  `watcher`, "scanCacheUpdated", `interface` - occurs when the scan cache of the Wi-Fi interface is updated with new information</li><li>    `watcher`   - the watcher object itself</li><li>    `message`   - the message specifying the event, in this case "scanCacheUpdated"</li><li>    `interface` - the name of the interface for which the event occurred</li></ul>                |

### Methods

| [start](#start)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.watcher:start() -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the SSID watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.wifi.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [stop](#stop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.watcher:stop() -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the SSID watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.wifi.watcher` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [watchingFor](#watchingFor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.wifi.watcher:watchingFor([messages]) -> watcher | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the specific types of wifi events to generate a callback for with this watcher.                                                                     |
| **Parameters**                              | <ul><li>`messages` - an optional table of or list of strings specifying the types of events this watcher should invoke a callback for.  You can specify multiple types of events to watch for. Defaults to `{ "SSIDChange" }`.</li></ul> |
| **Returns**                                 | <ul><li>if a value is provided, returns the watcher object; otherwise returns the current values as a table of strings.</li></ul>          |
| **Notes**                                   | <ul><li>the possible values for this method are described in [hs.wifi.watcher.eventTypes](#eventTypes).</li><li>the special string "all" specifies that all event types should be watched for.</li></ul>                |

