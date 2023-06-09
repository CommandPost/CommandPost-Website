# hs.serial

Communicate with external devices through a serial port (most commonly RS-232).

Powered by ORSSerialPort. Thrown together by @latenitefilms.

Copyright (c) 2011-2012 Andrew R. Madsen (andrew@openreelsoftware.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [availablePortDetails](#availableportdetails)
 * [availablePortNames](#availableportnames)
 * [availablePortPaths](#availableportpaths)
 * [deviceCallback](#devicecallback)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [newFromName](#newfromname)
 * [newFromPath](#newfrompath)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [baudRate](#baudrate)
 * [callback](#callback)
 * [close](#close)
 * [dataBits](#databits)
 * [dtr](#dtr)
 * [isOpen](#isopen)
 * [name](#name)
 * [open](#open)
 * [parity](#parity)
 * [path](#path)
 * [rts](#rts)
 * [sendData](#senddata)
 * [shouldEchoReceivedData](#shouldechoreceiveddata)
 * [stopBits](#stopbits)
 * [usesDTRDSRFlowControl](#usesdtrdsrflowcontrol)
 * [usesRTSCTSFlowControl](#usesrtsctsflowcontrol)


---

## API Documentation

#### Functions


### [availablePortDetails](#availableportdetails)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.availablePortDetails() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of currently connected serial ports details, organised by port name.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the IOKit details of any connected serial ports, organised by port name.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 655](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L655){target="_blank"} |

---


### [availablePortNames](#availableportnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.availablePortNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of currently connected serial ports names.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of any connected serial port names as strings.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 631](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L631){target="_blank"} |

---


### [availablePortPaths](#availableportpaths)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.availablePortPaths() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of currently connected serial ports paths.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the names of any connected serial port paths as strings.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 683](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L683){target="_blank"} |

---


### [deviceCallback](#devicecallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.deviceCallback(callbackFn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | A callback that's triggered when a serial port is added or removed from the system.                                                                     |
| **Parameters**                              | <ul><li>callbackFn - the callback function to trigger, or nil to remove the current callback</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 1 argument and should not return anything:</li><li>  `devices` - A table containing the names of any serial ports connected as strings.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1161](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1161){target="_blank"} |

---

#### Constructors


### [newFromName](#newfromname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.newFromName(portName) -> serialPortObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `hs.serial` object using the port name.                                                                     |
| **Parameters**                              | <ul><li>portName - A string containing the port name.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.serial` object or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>A valid port name can be found by checking `hs.serial.availablePortNames()`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 525](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L525){target="_blank"} |

---


### [newFromPath](#newfrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial.newFromPath(path) -> serialPortObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `hs.serial` object using a path.                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the path (i.e. "/dev/cu.usbserial").</li></ul> |
| **Returns**                                 | <ul><li>An `hs.serial` object or `nil` if an error occurred.</li></ul>          |
| **Notes**                                   | <ul><li>A valid port name can be found by checking `hs.serial.availablePortPaths()`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 558](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L558){target="_blank"} |

---

#### Methods


### [baudRate](#baudrate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:baudRate([value], [allowNonStandardBaudRates]) -> number | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the baud rate for the serial port.                                                                     |
| **Parameters**                              | <ul><li>value - An optional number to set the baud rate.</li><li>[allowNonStandardBaudRates] - An optional boolean to enable non-standard baud rates. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns the baud rate as a number</li></ul>          |
| **Notes**                                   | <ul><li>This function supports the following standard baud rates as numbers: 300, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200, 230400.</li><li>If no baud rate is supplied, it defaults to 115200.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 783](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L783){target="_blank"} |

---


### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:callback(callbackFn) -> serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets or removes a callback function for the `hs.serial` object.                                                                     |
| **Parameters**                              | <ul><li>`callbackFn` - a function to set as the callback for this `hs.serial` object.  If the value provided is `nil`, any currently existing callback function is removed.</li></ul> |
| **Returns**                                 | <ul><li>The `hs.serial` object</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should expect 4 arguments and should not return anything:</li><li>  `serialPortObject` - The serial port object that triggered the callback.</li><li>  `callbackType` - A string containing "opened", "closed", "received", "removed" or "error".</li><li>  `message` - If the `callbackType` is "received", then this will be the data received as a string. If the `callbackType` is "error", this will be the error message as a string.</li><li>  `hexadecimalString` - If the `callbackType` is "received", then this will be the data received as a hexadecimal string.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 591](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L591){target="_blank"} |

---


### [close](#close)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:close() -> serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Closes the serial port.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.serial` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 765](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L765){target="_blank"} |

---


### [dataBits](#databits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:dataBits([value]) -> number | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the number of data bits for the serial port.                                                                     |
| **Parameters**                              | <ul><li>value - An optional number to set the number of data bits. It can be 5 to 8.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns the data bits as a number.</li><li>The default value is 8.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1091](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1091){target="_blank"} |

---


### [dtr](#dtr)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:dtr([value]) -> boolean | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the state of the serial port's DTR (Data Terminal Ready) pin.                                                                     |
| **Parameters**                              | <ul><li>value - An optional boolean.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a boolean.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is `false`.</li><li>Setting this to `true` is most likely required for Arduino devices prior to opening the serial port.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 972](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L972){target="_blank"} |

---


### [isOpen](#isopen)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:isOpen() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets whether or not a serial port is open.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if open, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1122](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1122){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name of a `hs.serial` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The name as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 707](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L707){target="_blank"} |

---


### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:open() -> serialPortObject | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Opens the serial port.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `hs.serial` object or `nil` if the port could not be opened.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 743](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L743){target="_blank"} |

---


### [parity](#parity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:parity([value]) -> string | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the parity for the serial port.                                                                     |
| **Parameters**                              | <ul><li>value - An optional string to set the parity. It can be "none", "odd" or "even".</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a string value of "none", "odd" or "even".</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 834](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L834){target="_blank"} |

---


### [path](#path)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:path() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the path of a `hs.serial` object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The path as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 725](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L725){target="_blank"} |

---


### [rts](#rts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:rts([value]) -> boolean | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the state of the serial port's RTS (Request to Send) pin.                                                                     |
| **Parameters**                              | <ul><li>value - An optional boolean.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a boolean.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is `false`.</li><li>Setting this to `true` is most likely required for Arduino devices prior to opening the serial port.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1001](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1001){target="_blank"} |

---


### [sendData](#senddata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:sendData(value) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends data via a serial port.                                                                     |
| **Parameters**                              | <ul><li>value - A string of data to send.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1140](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1140){target="_blank"} |

---


### [shouldEchoReceivedData](#shouldechoreceiveddata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:shouldEchoReceivedData([value]) -> boolean | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets whether the port should echo received data.                                                                     |
| **Parameters**                              | <ul><li>value - An optional boolean.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a boolean.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is `false`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1030](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1030){target="_blank"} |

---


### [stopBits](#stopbits)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:stopBits([value]) -> number | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets the number of stop bits for the serial port.                                                                     |
| **Parameters**                              | <ul><li>value - An optional number to set the number of stop bits. It can be 1 or 2.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns the number of stop bits as a number.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is 1.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 1058](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L1058){target="_blank"} |

---


### [usesDTRDSRFlowControl](#usesdtrdsrflowcontrol)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:usesDTRDSRFlowControl([value]) -> boolean | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets whether the port should use DTR/DSR Flow Control.                                                                     |
| **Parameters**                              | <ul><li>value - An optional boolean.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a boolean.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is `false`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 916](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L916){target="_blank"} |

---


### [usesRTSCTSFlowControl](#usesrtsctsflowcontrol)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.serial:usesRTSCTSFlowControl([value]) -> boolean | serialPortObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets or sets whether the port should use RTS/CTS Flow Control.                                                                     |
| **Parameters**                              | <ul><li>value - An optional boolean.</li></ul> |
| **Returns**                                 | <ul><li>If a value is specified, then this method returns the serial port object. Otherwise this method returns a boolean.</li></ul>          |
| **Notes**                                   | <ul><li>The default value is `false`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/serial/libserial.m line 944](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/serial/libserial.m#L944){target="_blank"} |

---

