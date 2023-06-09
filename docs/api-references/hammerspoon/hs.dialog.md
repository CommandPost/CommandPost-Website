# hs.dialog

A collection of useful dialog boxes, alerts and panels for user interaction.

---

## Submodules
 * [hs.dialog.color](hs.dialog.color.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [alert](#alert)
 * [blockAlert](#blockalert)
 * [chooseFileOrFolder](#choosefileorfolder)
 * [textPrompt](#textprompt)
 * [webviewAlert](#webviewalert)


---

## API Documentation

#### Functions


### [alert](#alert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dialog.alert(x, y, callbackFn, message, [informativeText], [buttonOne], [buttonTwo], [style]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a simple non-blocking dialog box using `NSAlert` and a hidden `hs.webview` that's automatically destroyed when the alert is closed.                                                                     |
| **Parameters**                              | <ul><li>x - A number containing the horizontal co-ordinate of the top-left point of the dialog box. Defaults to 1.</li><li>y - A number containing the vertical co-ordinate of the top-left point of the dialog box. Defaults to 1.</li><li>callbackFn - The callback function that's called when a button is pressed.</li><li>message - The message text to display.</li><li>[informativeText] - Optional informative text to display.</li><li>[buttonOne] - An optional value for the first button as a string. Defaults to "OK".</li><li>[buttonTwo] - An optional value for the second button as a string. If `nil` is used, no second button will be displayed.</li><li>[style] - An optional style of the dialog box as a string. Defaults to "warning".</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul><li>The optional values must be entered in order (i.e. you can't supply `style` without also supplying `buttonOne` and `buttonTwo`).</li><li>[style] can be "warning", "informational" or "critical". If something other than these string values is given, it will use "informational".</li><li>Example:</li><li>     ```lua</li><li>     testCallbackFn = function(result) print("Callback Result: " .. result) end</li><li>     hs.dialog.alert(100, 100, testCallbackFn, "Message", "Informative Text", "Button One", "Button Two", "NSCriticalAlertStyle")</li><li>     hs.dialog.alert(200, 200, testCallbackFn, "Message", "Informative Text", "Single Button")```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/dialog/dialog.lua line 20](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/dialog/dialog.lua#L20) |

---


### [blockAlert](#blockalert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dialog.blockAlert(message, informativeText, [buttonOne], [buttonTwo], [style]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a simple dialog box using `NSAlert` that will halt Lua code processing until the alert is closed.                                                                     |
| **Parameters**                              | <ul><li>message - The message text to display.</li><li>informativeText - The informative text to display.</li><li>[buttonOne] - An optional value for the first button as a string. Defaults to "OK".</li><li>[buttonTwo] - An optional value for the second button as a string. If `nil` is used, no second button will be displayed.</li><li>[style] - An optional style of the dialog box as a string. Defaults to "informational".</li></ul> |
| **Returns**                                 | <ul><li>The value of the button as a string.</li></ul>          |
| **Notes**                                   | <ul><li>The optional values must be entered in order (i.e. you can't supply `style` without also supplying `buttonOne` and `buttonTwo`).</li><li>[style] can be "warning", "informational" or "critical". If something other than these string values is given, it will use "warning".</li><li>Example:</li><li>     `hs.dialog.blockAlert("Message", "Informative Text", "Button One", "Button Two", "critical")`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/dialog/libdialog.m line 564](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/dialog/libdialog.m#L564) |

---


### [chooseFileOrFolder](#choosefileorfolder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dialog.chooseFileOrFolder([message], [defaultPath], [canChooseFiles], [canChooseDirectories], [allowsMultipleSelection], [allowedFileTypes], [resolvesAliases]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a file and/or folder selection dialog box using NSOpenPanel.                                                                     |
| **Parameters**                              | <ul><li>[message] - The optional message text to display.</li><li>[defaultPath] - The optional path you want to dialog to open to.</li><li>[canChooseFiles] - Whether or not the user can select files. Defaults to `true`.</li><li>[canChooseDirectories] - Whether or not the user can select folders. Default to `false`.</li><li>[allowsMultipleSelection] - Allow multiple selections of files and/or folders. Defaults to `false`.</li><li>[allowedFileTypes] - An optional table of allowed file types. Defaults to `true`.</li><li>[resolvesAliases] - An optional boolean that indicates whether the panel resolves aliases.</li></ul> |
| **Returns**                                 | <ul><li>The selected files in a table or `nil` if cancel was pressed.</li></ul>          |
| **Notes**                                   | <ul><li>The optional values must be entered in order (i.e. you can't supply `allowsMultipleSelection` without also supplying `canChooseFiles` and `canChooseDirectories`).</li><li>Example:</li><li>     `hs.inspect(hs.dialog.chooseFileOrFolder("Please select a file:", "~/Desktop", true, false, true, {"jpeg", "pdf"}, true))`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/dialog/libdialog.m line 327](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/dialog/libdialog.m#L327) |

---


### [textPrompt](#textprompt)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dialog.textPrompt(message, informativeText, [defaultText], [buttonOne], [buttonTwo], [secureField]) -> string, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a simple text input dialog box.                                                                     |
| **Parameters**                              | <ul><li>message - The message text to display</li><li>informativeText - The informative text to display</li><li>[defaultText] - The informative text to display</li><li>[buttonOne] - An optional value for the first button as a string</li><li>[buttonTwo] - An optional value for the second button as a string</li><li>[secureField] - An optional boolean. If true, PasswordField instead of TextField. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>The value of the button as a string</li><li>The value of the text input as a string</li></ul>          |
| **Notes**                                   | <ul><li>`buttonOne` defaults to "OK" if no value is supplied.</li><li>`buttonOne` will also be triggered by pressing `ENTER`, whereas `buttonTwo` will be triggered by pressing `ESC`.</li><li>Examples:</li><li>     `hs.dialog.textPrompt("Main message.", "Please enter something:")`</li><li>     `hs.dialog.textPrompt("Main message.", "Please enter something:", "Default Value", "OK")`</li><li>     `hs.dialog.textPrompt("Main message.", "Please enter something:", "Default Value", "OK", "Cancel")`</li><li>     `hs.dialog.textPrompt("Main message.", "Please enter something:", "", "OK", "Cancel", true)`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/dialog/libdialog.m line 665](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/dialog/libdialog.m#L665) |

---


### [webviewAlert](#webviewalert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dialog.webviewAlert(webview, callbackFn, message, [informativeText], [buttonOne], [buttonTwo], [style]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays a simple dialog box using `NSAlert` in a `hs.webview`.                                                                     |
| **Parameters**                              | <ul><li>webview - The `hs.webview` to display the alert on.</li><li>callbackFn - The callback function that's called when a button is pressed.</li><li>message - The message text to display.</li><li>[informativeText] - Optional informative text to display.</li><li>[buttonOne] - An optional value for the first button as a string. Defaults to "OK".</li><li>[buttonTwo] - An optional value for the second button as a string. If `nil` is used, no second button will be displayed.</li><li>[style] - An optional style of the dialog box as a string. Defaults to "warning".</li></ul> |
| **Returns**                                 | <ul><li>nil</li></ul>          |
| **Notes**                                   | <ul><li>This alert is will prevent the user from interacting with the `hs.webview` until a button is pressed on the alert.</li><li>The optional values must be entered in order (i.e. you can't supply `style` without also supplying `buttonOne` and `buttonTwo`).</li><li>[style] can be "warning", "informational" or "critical". If something other than these string values is given, it will use "informational".</li><li>Example:</li><li>     ```lua</li><li>     testCallbackFn = function(result) print("Callback Result: " .. result) end</li><li>     testWebviewA = hs.webview.newBrowser(hs.geometry.rect(250, 250, 250, 250)):show()</li><li>     testWebviewB = hs.webview.newBrowser(hs.geometry.rect(450, 450, 450, 450)):show()</li><li>     hs.dialog.webviewAlert(testWebviewA, testCallbackFn, "Message", "Informative Text", "Button One", "Button Two", "warning")</li><li>     hs.dialog.webviewAlert(testWebviewB, testCallbackFn, "Message", "Informative Text", "Single Button")```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/dialog/libdialog.m line 440](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/dialog/libdialog.m#L440) |

---

