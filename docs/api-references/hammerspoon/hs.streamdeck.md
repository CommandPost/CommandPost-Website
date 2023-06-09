# hs.streamdeck

Configure/control an Elgato Stream Deck.

Please note that in order for this module to work, the official Elgato Stream Deck app should not be running.

This extension supports the following devices:
 * Stream Deck (Original)
 * Stream Deck (Original V2)
 * Stream Deck Plus
 * Stream Deck Mini
 * Stream Deck Mini (V2)
 * Stream Deck XL
 * Stream Deck XL (Mk2)
 * Stream Deck Pedal

This module would not have been possible without standing on the shoulders of others:
 * https://github.com/OpenStreamDeck/StreamDeckSharp
 * https://github.com/Lange/node-elgato-stream-deck
 * Hopper

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [discoveryCallback](#discoverycallback)
 * [getDevice](#getdevice)
 * [init](#init)
 * [numDevices](#numdevices)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [buttonCallback](#buttoncallback)
 * [buttonLayout](#buttonlayout)
 * [encoderCallback](#encodercallback)
 * [firmwareVersion](#firmwareversion)
 * [imageSize](#imagesize)
 * [reset](#reset)
 * [screenCallback](#screencallback)
 * [serialNumber](#serialnumber)
 * [setBrightness](#setbrightness)
 * [setButtonColor](#setbuttoncolor)
 * [setButtonImage](#setbuttonimage)
 * [setScreenImage](#setscreenimage)


## API Documentation

### Functions


### [discoveryCallback](#discoverycallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck.discoveryCallback(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets/clears a callback for reacting to device discovery events                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Stream Deck is connected or disconnected. It should take the following arguments:
  A boolean, true if a device was connected, false if a device was disconnected
  An hs.streamdeck object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDevice](#getdevice)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck.getDevice(num)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets an hs.streamdeck object for the specified device                                                                     |
| **Parameters**                              | <ul><li>num - A number that should be within the bounds of the number of connected devices</li></ul> |
| **Returns**                                 | <ul><li>An hs.streamdeck object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck.init(fn)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Stream Deck driver and sets a discovery callback                                                                     |
| **Parameters**                              | <ul><li>fn - A function that will be called when a Stream Deck is connected or disconnected. It should take the following arguments:
  A boolean, true if a device was connected, false if a device was disconnected
  An hs.streamdeck object, being the device that was connected/disconnected</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function must be called before any other parts of this module are used</li></ul>                |

---

### [numDevices](#numdevices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck.numDevices()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the number of Stream Deck devices connected                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A number containing the number of Stream Deck devices attached to the system</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [buttonCallback](#buttoncallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:buttonCallback(fn)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears the button callback function for a Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when a button is pressed/released on the stream deck. It should receive three arguments:
  The hs.streamdeck userdata object
  A number containing the button that was pressed/released
  A boolean indicating whether the button was pressed (true) or released (false)</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck device</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [buttonLayout](#buttonlayout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:buttonLayout()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the layout of buttons a Stream Deck device has                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of columns</li><li>The number of rows</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [encoderCallback](#encodercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:encoderCallback(fn)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears the knob/encoder callback function for a Stream Deck Plus.                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when an encoder button is pressed/released/rotated on a Stream Deck Plus. It should receive five arguments:
  The hs.streamdeck userdata object
  A number containing the button that was pressed/released/rotated
  A boolean indicating whether the button was pressed (true) or released (false)
  A boolean indicating that the button was turned left
  A boolean indicating that the button was turned right</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck device</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [firmwareVersion](#firmwareversion)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:firmwareVersion()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the firmware version of a Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the firmware version of the deck</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [imageSize](#imagesize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:imageSize()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the width and height of the buttons in pixels                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>An table with keys `w` and `h` containing the width and height, respectively, of images expected by the Stream Deck</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reset](#reset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:reset()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Resets a Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [screenCallback](#screencallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:screenCallback(fn)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets/clears the screen callback function for a Stream Deck Plus's touch screen (above the encoder knobs).                                                                     |
| **Parameters**                              | <ul><li>fn - A function to be called when a screen is pressed/released/swiped on a Stream Deck Plus. It should receive six arguments:
  The hs.streamdeck userdata object
  A string either containing "shortPress", "longPress" or "swipe"
  The X position of where the screen was first touched
  The Y position of where the screen was first touched
  The X position of where the screen was last touched (if swiping)
  The Y position of where the screen was last touched (if swiping)</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck device</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [serialNumber](#serialnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:serialNumber()`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the serial number of a Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the serial number of the deck</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setBrightness](#setbrightness)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:setBrightness(brightness)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the brightness of a Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>brightness - A whole number between 0 and 100 indicating the percentage brightness level to set</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck device</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setButtonColor](#setbuttoncolor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:setButtonColor(button, color)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets a button on the Stream Deck device to the specified color                                                                     |
| **Parameters**                              | <ul><li>button - A number (from 1 to 15) describing which button to set the color on</li><li>color - An hs.drawing.color object</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setButtonImage](#setbuttonimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:setButtonImage(button, image)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of a button on the Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>button - A number (from 1 to 15) describing which button to set the image for</li><li>image - An hs.image object</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setScreenImage](#setscreenimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.streamdeck:setScreenImage(encoder, image)`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of the screen on the Stream Deck device                                                                     |
| **Parameters**                              | <ul><li>encoder - A number (from 1 to 4) describing which encoder to set the image for</li><li>image - An hs.image object</li></ul> |
| **Returns**                                 | <ul><li>The hs.streamdeck object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
