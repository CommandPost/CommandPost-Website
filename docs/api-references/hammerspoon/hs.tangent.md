# hs.tangent

Tangent Control Surface Extension

**API Version:** TUBE Version 3.2 - TIPC Rev 4 (22nd February 2017)

This plugin allows Hammerspoon to communicate with Tangent's range of panels, such as their Element, Virtual Element Apps, Wave, Ripple and any future panels.

The Tangent Unified Bridge Engine (TUBE) is made up of two software elements, the Mapper and the Hub. The Hub communicates with your application via the
TUBE Inter Process Communications (TIPC). TIPC is a standardised protocol to allow any application that supports it to communicate with any current and
future panels produced by Tangent via the TUBE Hub.

You can download the Tangent Developer Support Pack & Tangent Hub Installer for Mac [here](http://www.tangentwave.co.uk/developer-support/).

This extension was thrown together by [Chris Hocking](https://github.com/latenitefilms), then dramatically improved by [David Peterson](https://github.com/randomeizer) for [CommandPost](http://commandpost.io).

## API Overview
* Constants - Useful values which cannot be changed
 * [action](#action)
 * [fromHub](#fromHub)
 * [panelType](#panelType)
 * [parameter](#parameter)
 * [toHub](#toHub)
* Variables - Configurable values
 * [automaticallySendApplicationDefinition](#automaticallySendApplicationDefinition)
 * [ipAddress](#ipAddress)
 * [port](#port)
* Functions - API calls offered directly by the extension
 * [callback](#callback)
 * [connect](#connect)
 * [connected](#connected)
 * [disconnect](#disconnect)
 * [isTangentHubInstalled](#isTangentHubInstalled)
 * [send](#send)
 * [sendAllChange](#sendAllChange)
 * [sendApplicationDefinition](#sendApplicationDefinition)
 * [sendDisplayText](#sendDisplayText)
 * [sendHighlightControl](#sendHighlightControl)
 * [sendIndicateControl](#sendIndicateControl)
 * [sendMenuString](#sendMenuString)
 * [sendModeValue](#sendModeValue)
 * [sendPanelConnectionStatesRequest](#sendPanelConnectionStatesRequest)
 * [sendParameterValue](#sendParameterValue)
 * [sendRenameControl](#sendRenameControl)
 * [sendUnmanagedDisplayWrite](#sendUnmanagedDisplayWrite)
 * [sendUnmanagedPanelCapabilitiesRequest](#sendUnmanagedPanelCapabilitiesRequest)
 * [setLogLevel](#setLogLevel)

## API Documentation

### Constants

| [action](#action)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.reserved.action -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Definitions for reserved action IDs.                                                                     |
| **Notes**                                   | <ul><li>`alt`                     - toggles the 'ALT' function.</li><li>`nextKnobBank`            - switches to the next knob bank.</li><li>`prevKnobBank`            - switches to the previous knob bank.</li><li>`nextButtonBank`          - switches to the next button bank.</li><li>`prevBasketBank`          - switches to the previous button bank.</li><li>`nextTrackerballBank`     - switches to the next trackerball bank.</li><li>`prevTrackerballBank`     - switches to the previous trackerball bank.</li><li>`nextMode`                - switches to the next mode.</li><li>`prevMode`                - switches to the previous mode.</li><li>`goToMode`                - switches to the specified mode, requiring a Argument with the mode ID.</li><li>`toggleJogShuttle`        - toggles jog/shuttle mode.</li><li>`toggleMouseEmulation`    - toggles mouse emulation.</li><li>`fakeKeypress`            - generates a keypress, requiring an Argument with the key code.</li><li>`showHUD`                 - shows the HUD on screen.</li><li>`goToKnobBank`            - goes to the specific knob bank, requiring an Argument with the bank number.</li><li>`goToButtonBank`          - goes to the specific button bank, requiring an Argument with the bank number.</li><li>`goToTrackerballBank`     - goes to the specific trackerball bank, requiring an Argument with the bank number.</li></ul>                |

| [fromHub](#fromHub)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.fromHub -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Definitions for IPC Commands from the HUB to Hammerspoon.                                                                     |
| **Notes**                                   | <ul><li>`connected`                       - a connection is established with the Hub.</li><li>`disconnected`                    - the connection is dropped with the Hub.</li><li>`initiateComms`                   - sent when the Hub wants to initiate communications.</li><li>`parameterChange`                 - a parameter was incremented.</li><li>`parameterReset`                  - a parameter was reset.</li><li>`parameterValueRequest`           - the Hub wants the current value of the parameter.</li><li>`menuChange`                      - The menu was changed, `+1` or `-1`.</li><li>`menuReset`                       - The menu was reset.</li><li>`menuStringRequest`               - The application should send a `menuString` with the current value.</li><li>`actionOn`                        - An action button was pressed.</li><li>`actionOff`                       - An action button was released.</li><li>`modeChange`                      - The current mode was changed.</li><li>`transport`                       - The transport.</li><li>`unmanagedPanelCapabilities`      - Send by the Hub to advertise an unmanaged panel.</li><li>`unmanagedButtonDown`             - A button on an unmanaged panel was pressed.</li><li>`unmanagedButtonUp`               - A button on an unmanaged panel was released.</li><li>`unmanagedEncoderChange`          - An encoder (dial/wheel) on an unmanaged panel changed.</li><li>`unmanagedDisplayRefresh`         - Triggered when an unmanaged panel's display needs to update.</li><li>`panelConnectionState`            - A panel's connection state changed.</li></ul>                |

| [panelType](#panelType)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.panelType -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Tangent Panel Types.                                                                     |

| [parameter](#parameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.reserved.parameter -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table of reserved parameter IDs.                                                                     |
| **Notes**                                   | <ul><li>`transportRing`           - transport ring.</li><li>`fakeKeypress`            - sends a fake keypress.</li></ul>                |

| [toHub](#toHub)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.toHub -> table`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Definitions for IPC Commands from Hammerspoon to the HUB.                                                                     |

### Variables

| [automaticallySendApplicationDefinition](#automaticallySendApplicationDefinition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.automaticallySendApplicationDefinition -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Automatically send the "Application Definition" response. Defaults to `true`.                                                                     |

| [ipAddress](#ipAddress)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.ipAddress -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | IP Address that the Tangent Hub is located at. Defaults to 127.0.0.1.                                                                     |

| [port](#port)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.port -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The port that Tangent Hub monitors. Defaults to 64246.                                                                     |

### Functions

| [callback](#callback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.callback() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets a callback when new messages are received.                                                                     |
| **Parameters**                              | <ul><li>callbackFn - a function to set as the callback for `hs.tangent`. If the value provided is `nil`, any currently existing callback function is removed.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul><li>Full documentation for the Tangent API can be downloaded [here](http://www.tangentwave.co.uk/download/developer-support-pack/).</li><li>The callback function should expect 1 argument and should not return anything.</li><li>The 1 argument will be a table, which can contain one or many commands. Each command is it's own table with the following contents:</li><li>  id - the message ID of the incoming message</li><li>  metadata - A table of data for the Tangent command (see below).</li><li>The metadata table will return the following, depending on the `id` for the callback:</li><li>  `connected` - Connection to Tangent Hub successfully established.</li><li>  `disconnected` - The connection to Tangent Hub was dropped.</li><li>  `initiateComms` - Initiates communication between the Hub and the application.</li><li>    `protocolRev` - The revision number of the protocol.</li><li>    `numPanels` - The number of panels connected.</li><li>    `panels`</li><li>      `panelID` - The ID of the panel.</li><li>      `panelType` - The type of panel connected.</li><li>    `data` - The raw data from the Tangent Hub</li><li>  `parameterChange` - Requests that the application increment a parameter.</li><li>    `paramID` - The ID value of the parameter.</li><li>    `increment` - The incremental value which should be applied to the parameter.</li><li>  `parameterReset` - Requests that the application changes a parameter to its reset value.</li><li>    `paramID` - The ID value of the parameter.</li><li>  `parameterValueRequest` - Requests that the application sends a `ParameterValue (0x82)` command to the Hub.</li><li>    `paramID` - The ID value of the parameter.</li><li>  `menuChange` - Requests the application change a menu index by +1 or -1.</li><li>    `menuID` - The ID value of the menu.</li><li>    `increment` - The incremental amount by which the menu index should be changed which will always be an integer value of +1 or -1.</li><li>  `menuReset` - Requests that the application changes a menu to its reset value.</li><li>    `menuID` - The ID value of the menu.</li><li>  `menuStringRequest` - Requests that the application sends a `MenuString (0x83)` command to the Hub.</li><li>    `menuID` - The ID value of the menu.</li><li>  `actionOn` - Requests that the application performs the specified action.</li><li>    `actionID` - The ID value of the action.</li><li>  `modeChange` - Requests that the application changes to the specified mode.</li><li>    `modeID` - The ID value of the mode.</li><li>  `transport` - Requests the application to move the currently active transport.</li><li>    `jogValue` - The number of jog steps to move the transport.</li><li>    `shuttleValue` - An incremental value to add to the shuttle speed.</li><li>  `actionOff` - Requests that the application cancels the specified action.</li><li>    `actionID` - The ID value of the action.</li><li>  `unmanagedPanelCapabilities` - Only used when working in Unmanaged panel mode. Sent in response to a `UnmanagedPanelCapabilitiesRequest (0xA0)` command.</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>    `numButtons` - The number of buttons on the panel.</li><li>    `numEncoders` - The number of encoders on the panel.</li><li>    `numDisplays` - The number of displays on the panel.</li><li>    `numDisplayLines` - The number of lines for each display on the panel.</li><li>    `numDisplayChars` - The number of characters on each line of each display on the panel.</li><li>  `unmanagedButtonDown` - Only used when working in Unmanaged panel mode. Issued when a button has been pressed.</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>    `buttonID` - The hardware ID of the button</li><li>  `unmanagedButtonUp` - Only used when working in Unmanaged panel mode. Issued when a button has been released.</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>    `buttonID` - The hardware ID of the button.</li><li>  `unmanagedEncoderChange` - Only used when working in Unmanaged panel mode. Issued when an encoder has been moved.</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>    `paramID` - The hardware ID of the encoder.</li><li>    `increment` - The incremental value.</li><li>  `unmanagedDisplayRefresh` - Only used when working in Unmanaged panel mode. Issued when a panel has been connected or the focus of the panel has been returned to your application.</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>  `panelConnectionState`</li><li>    `panelID` - The ID of the panel as reported in the `InitiateComms` command.</li><li>    `state` - The connected state of the panel, `true` if connected, `false` if disconnected.</li></ul>                |

| [connect](#connect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.connect(applicationName, systemPath[, userPath]) -> boolean, errorMessage`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Connects to the Tangent Hub.                                                                     |
| **Parameters**                              | <ul><li>applicationName - Your application name as a string</li><li>systemPath - A string containing the absolute path of the directory that contains the Controls and Default Map XML files.</li><li>[userPath] - An optional string containing the absolute path of the directory that contains the User’s Default Map XML files.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` on success, otherwise `nil`</li><li>errorMessage - The error messages as a string or `nil` if `success` is `true`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [connected](#connected)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.connected() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see whether or not you're successfully connected to the Tangent Hub.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if connected, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [disconnect](#disconnect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.disconnect() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Disconnects from the Tangent Hub.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [isTangentHubInstalled](#isTangentHubInstalled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.isTangentHubInstalled() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see whether or not the Tangent Hub software is installed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if Tangent Hub is installed otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [send](#send)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.send(byteString) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends a "bytestring" message to the Tangent Hub.                                                                     |
| **Parameters**                              | <ul><li>byteString   - The string of bytes to send to tangent.</li></ul> |
| **Returns**                                 | <ul><li>success - `true` if connected, otherwise `false`</li><li>errorMessage - An error message if an error occurs, as a string</li></ul>          |
| **Notes**                                   | <ul><li>This should be a full encoded string for the command you want to send, withouth the leading 'size' section, which the function will calculate automatically.</li><li>In general, you should use the more specific functions that package the command for you, such as `sendParameterValue(...)`. This function can be used to send a message that this API doesn't yet support.</li><li>Full documentation for the Tangent API can be downloaded [here](http://www.tangentwave.co.uk/download/developer-support-pack/).</li></ul>                |

| [sendAllChange](#sendAllChange)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendAllChange() -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Tells the Hub that a large number of software-controls have changed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>The Hub responds by requesting all the current values of software-controls it is currently controlling.</li></ul>                |

| [sendApplicationDefinition](#sendApplicationDefinition)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendApplicationDefinition([appName, systemPath, userPath]) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends the application details to the Tangent Hub.                                                                     |
| **Parameters**                              | <ul><li>appName       - The human-readable name of the application.</li><li>systemPath    - A string containing the absolute path of the directory that contains the Controls and Default Map XML files (Path String)</li><li>userPath      - A string containing the absolute path of the directory that contains the User’s Default Map XML files (Path String)</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, `false` and an error message if there was a problem.</li></ul>          |
| **Notes**                                   | <ul><li>If no details are provided the ones stored in the module are used.</li></ul>                |

| [sendDisplayText](#sendDisplayText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendDisplayText(messages[, doubleHeight]) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Hub with a number of character strings that will be displayed on connected panels if there is space.                                                                     |
| **Parameters**                              | <ul><li>messages      - A list of messages to send.</li><li>doubleHeight  - An optional list of `boolean`s indicating if the corresponding message is double-height.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>Strings may either be 32 character, single height or 16 character double-height. They will be displayed in the order received; the first string displayed at the top of the display.</li><li>If a string is not defined as double-height then it will occupy the next line.</li><li>If a string is defined as double-height then it will occupy the next 2 lines.</li><li>The maximum number of lines which will be used by the application must be indicated in the Controls XML file.</li><li>Text which exceeds 32 (single-height) or 16 (double-height) characters will be truncated.</li><li>If all text is single-height, the `doubleHeight` table can be omitted.</li></ul>                |

| [sendHighlightControl](#sendHighlightControl)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendHighlightControl(targetID, active) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlights the control on any panel where this feature is available.                                                                     |
| **Parameters**                              | <ul><li>targetID      - The id of any application defined Parameter, Menu, Action or Mode (Unsigned Int)</li><li>active        - If `true`, the control is highlighted, otherwise it is not.</li></ul> |
| **Returns**                                 | <ul><li>`true` if sent successfully, `false` and an error message if no.</li></ul>          |
| **Notes**                                   | <ul><li>When applied to Modes, buttons which are mapped to the reserved "Go To Mode" action for this particular mode will highlight.</li></ul>                |

| [sendIndicateControl](#sendIndicateControl)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendIndicateControl(targetID, indicated) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Indicator of the control on any panel where this feature is available.                                                                     |
| **Parameters**                              | <ul><li>targetID      - The id of any application defined Parameter, Menu, Action or Mode</li><li>active        - If `true`, the control is indicated, otherwise it is not.</li></ul> |
| **Returns**                                 | <ul><li>`true` if sent successfully, `false` and an error message if no.</li></ul>          |
| **Notes**                                   | <ul><li>This indicator is driven by the `atDefault` argument for Parameters and Menus. This command therefore only applies to controls mapped to Actions and Modes.</li><li>When applied to Modes, buttons which are mapped to the reserved "Go To Mode" action for this particular mode will have their indicator set.</li></ul>                |

| [sendMenuString](#sendMenuString)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendMenuString(menuID, value[, atDefault]) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Hub with a menu value.                                                                     |
| **Parameters**                              | <ul><li>menuID - The ID value of the menu (Unsigned Int)</li><li>value - The current ‘value’ of the parameter represented as a string</li><li>atDefault - if `true` the value represents the default. Otherwise `false`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>The Hub then updates the displays of any panels which are currently showing the menu.</li><li>If a value of `nil` is sent then the Hub will not attempt to display a value for the menu. However the `atDefault` flag will still be recognised.</li></ul>                |

| [sendModeValue](#sendModeValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendModeValue(modeID) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Hub with a mode value.                                                                     |
| **Parameters**                              | <ul><li>modeID - The ID value of the mode (Unsigned Int)</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>The Hub then changes mode and requests all the current values of software-controls it is controlling.</li></ul>                |

| [sendPanelConnectionStatesRequest](#sendPanelConnectionStatesRequest)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendPanelConnectionStatesRequest())`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Requests the Hub to respond with a sequence of PanelConnectionState (0x35) commands to report the connected/disconnected status of each configured panel                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if sent successfully, `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>A single request may result in multiple state responses.</li></ul>                |

| [sendParameterValue](#sendParameterValue)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendParameterValue(paramID, value[, atDefault]) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Hub with a parameter value.                                                                     |
| **Parameters**                              | <ul><li>paramID - The ID value of the parameter (Unsigned Int)</li><li>value - The current value of the parameter (Float)</li><li>atDefault - if `true` the value represents the default. Defaults to `false`.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>The Hub then updates the displays of any panels which are currently showing the parameter value.</li></ul>                |

| [sendRenameControl](#sendRenameControl)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendRenameControl(targetID, newName) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Renames a control dynamically.                                                                     |
| **Parameters**                              | <ul><li>targetID  - The id of any application defined Parameter, Menu, Action or Mode (Unsigned Int)</li><li>newName   - The new name to apply.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>The string supplied will replace the normal text which has been derived from the Controls XML file.</li><li>To remove any existing replacement name set `newName` to `""`, this will remove any renaming and return the system to the normal display text</li><li>When applied to Modes, the string displayed on buttons which mapped to the reserved "Go To Mode" action for this particular mode will also change.</li></ul>                |

| [sendUnmanagedDisplayWrite](#sendUnmanagedDisplayWrite)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendUnmanagedDisplayWrite(panelID, displayID, lineNum, pos, message) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the Hub with text that will be displayed on a specific panel at the given line and starting position where supported by the panel capabilities.                                                                     |
| **Parameters**                              | <ul><li>panelID       - The ID of the panel as reported in the InitiateComms command (Unsigned Int)</li><li>displayID     - The ID of the display to be written to (Unsigned Int)</li><li>lineNum       - The line number of the display to be written to with `1` as the top line (Unsigned Int)</li><li>pos           - The position on the line to start writing from with `1` as the first column (Unsigned Int)</li><li>message       - A line of text (Character String)</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>Only used when working in Unmanaged panel mode.</li><li>If the most significant bit of any individual text character in `message` is set it will be displayed as inversed with dark text on a light background.</li></ul>                |

| [sendUnmanagedPanelCapabilitiesRequest](#sendUnmanagedPanelCapabilitiesRequest)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.sendUnmanagedPanelCapabilitiesRequest(panelID) -> boolean, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Requests the Hub to respond with an UnmanagedPanelCapabilities (0x30) command.                                                                     |
| **Parameters**                              | <ul><li>panelID - The ID of the panel as reported in the InitiateComms command (Unsigned Int)</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful, or `false` and an error message if not.</li></ul>          |
| **Notes**                                   | <ul><li>Only used when working in Unmanaged panel mode</li></ul>                |

| [setLogLevel](#setLogLevel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.tangent.setLogLevel(loglevel) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Log Level.                                                                     |
| **Parameters**                              | <ul><li>loglevel - can be 'nothing', 'error', 'warning', 'info', 'debug', or 'verbose'; or a corresponding number between 0 and 5</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

