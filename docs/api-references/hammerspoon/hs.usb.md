# hs.usb

Inspect USB devices

---

## Submodules
 * [hs.usb.watcher](hs.usb.watcher.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [attachedDevices](#attacheddevices)


---

## API Documentation

#### Functions


### [attachedDevices](#attacheddevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.usb.attachedDevices() -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets details about currently attached USB devices                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing information about currently attached USB devices, or nil if an error occurred. The table contains a sub-table for each USB device, the keys of which are:</li><li> productName - A string containing the name of the device</li><li> vendorName - A string containing the name of the device vendor</li><li> vendorID - A number containing the Vendor ID of the device</li><li> productID - A number containing the Product ID of the device</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/usb/libusb.m line 14](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/usb/libusb.m#L14){target="_blank"} |

---

