# hs.usb.watcher

Watch for USB device connection/disconnection events

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.usb.watcher.new(fn) -> watcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new watcher for USB device events                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a USB device is inserted or removed. The function should accept a single parameter, which is a table containing the following keys:
  eventType - A string containing either "added" or "removed" depending on whether the USB device was connected or disconnected
  productName - A string containing the name of the device
  vendorName - A string containing the name of the device vendor
  vendorID - A number containing the Vendor ID of the device
  productID - A number containing the Product ID of the device</li></ul> |
| **Returns**                                 | <ul><li>A `hs.usb.watcher` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/usb/libusb_watcher.m line 177](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/usb/libusb_watcher.m#L177){target="_blank"} |

---

#### Methods


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.usb.watcher:start() -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Starts the USB watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.usb.watcher` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/usb/libusb_watcher.m line 212](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/usb/libusb_watcher.m#L212){target="_blank"} |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.usb.watcher:stop() -> watcher`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stops the USB watcher                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.usb.watcher` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/usb/libusb_watcher.m line 251](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/usb/libusb_watcher.m#L251){target="_blank"} |

---

