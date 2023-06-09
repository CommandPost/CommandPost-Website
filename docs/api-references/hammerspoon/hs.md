# hs

Core Hammerspoon functionality

---

## Submodules
 * [hs.alert](hs.alert.md)
 * [hs.appfinder](hs.appfinder.md)
 * [hs.applescript](hs.applescript.md)
 * [hs.application](hs.application.md)
 * [hs.audiodevice](hs.audiodevice.md)
 * [hs.axuielement](hs.axuielement.md)
 * [hs.base64](hs.base64.md)
 * [hs.battery](hs.battery.md)
 * [hs.blackmagic](hs.blackmagic.md)
 * [hs.bonjour](hs.bonjour.md)
 * [hs.brightness](hs.brightness.md)
 * [hs.caffeinate](hs.caffeinate.md)
 * [hs.camera](hs.camera.md)
 * [hs.canvas](hs.canvas.md)
 * [hs.chooser](hs.chooser.md)
 * [hs.console](hs.console.md)
 * [hs.crash](hs.crash.md)
 * [hs.deezer](hs.deezer.md)
 * [hs.dialog](hs.dialog.md)
 * [hs.distributednotifications](hs.distributednotifications.md)
 * [hs.doc](hs.doc.md)
 * [hs.dockicon](hs.dockicon.md)
 * [hs.drawing](hs.drawing.md)
 * [hs.eventtap](hs.eventtap.md)
 * [hs.expose](hs.expose.md)
 * [hs.fnutils](hs.fnutils.md)
 * [hs.fs](hs.fs.md)
 * [hs.geometry](hs.geometry.md)
 * [hs.grid](hs.grid.md)
 * [hs.hash](hs.hash.md)
 * [hs.hid](hs.hid.md)
 * [hs.hints](hs.hints.md)
 * [hs.host](hs.host.md)
 * [hs.hotkey](hs.hotkey.md)
 * [hs.http](hs.http.md)
 * [hs.httpserver](hs.httpserver.md)
 * [hs.image](hs.image.md)
 * [hs.inspect](hs.inspect.md)
 * [hs.ipc](hs.ipc.md)
 * [hs.itunes](hs.itunes.md)
 * [hs.javascript](hs.javascript.md)
 * [hs.json](hs.json.md)
 * [hs.keycodes](hs.keycodes.md)
 * [hs.layout](hs.layout.md)
 * [hs.location](hs.location.md)
 * [hs.logger](hs.logger.md)
 * [hs.math](hs.math.md)
 * [hs.menubar](hs.menubar.md)
 * [hs.messages](hs.messages.md)
 * [hs.midi](hs.midi.md)
 * [hs.milight](hs.milight.md)
 * [hs.mjomatic](hs.mjomatic.md)
 * [hs.mouse](hs.mouse.md)
 * [hs.network](hs.network.md)
 * [hs.noises](hs.noises.md)
 * [hs.notify](hs.notify.md)
 * [hs.osascript](hs.osascript.md)
 * [hs.osc](hs.osc.md)
 * [hs.pasteboard](hs.pasteboard.md)
 * [hs.pathwatcher](hs.pathwatcher.md)
 * [hs.plist](hs.plist.md)
 * [hs.razer](hs.razer.md)
 * [hs.redshift](hs.redshift.md)
 * [hs.screen](hs.screen.md)
 * [hs.serial](hs.serial.md)
 * [hs.settings](hs.settings.md)
 * [hs.sharing](hs.sharing.md)
 * [hs.shortcuts](hs.shortcuts.md)
 * [hs.socket](hs.socket.md)
 * [hs.sound](hs.sound.md)
 * [hs.spaces](hs.spaces.md)
 * [hs.speech](hs.speech.md)
 * [hs.spoons](hs.spoons.md)
 * [hs.spotify](hs.spotify.md)
 * [hs.spotlight](hs.spotlight.md)
 * [hs.sqlite3](hs.sqlite3.md)
 * [hs.streamdeck](hs.streamdeck.md)
 * [hs.styledtext](hs.styledtext.md)
 * [hs.tabs](hs.tabs.md)
 * [hs.tangent](hs.tangent.md)
 * [hs.task](hs.task.md)
 * [hs.timer](hs.timer.md)
 * [hs.uielement](hs.uielement.md)
 * [hs.urlevent](hs.urlevent.md)
 * [hs.usb](hs.usb.md)
 * [hs.utf8](hs.utf8.md)
 * [hs.vox](hs.vox.md)
 * [hs.watchable](hs.watchable.md)
 * [hs.websocket](hs.websocket.md)
 * [hs.webview](hs.webview.md)
 * [hs.wifi](hs.wifi.md)
 * [hs.window](hs.window.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [configdir](#configdir)
 * [docstrings_json_file](#docstrings_json_file)
 * [processInfo](#processinfo)

**Variables** - _Configurable values_
 * [accessibilityStateCallback](#accessibilitystatecallback)
 * [completionsForInputString](#completionsforinputstring)
 * [dockIconClickCallback](#dockiconclickcallback)
 * [fileDroppedToDockIconCallback](#filedroppedtodockiconcallback)
 * [shutdownCallback](#shutdowncallback)
 * [textDroppedToDockIconCallback](#textdroppedtodockiconcallback)

**Functions** - _API calls offered directly by the extension_
 * [accessibilityState](#accessibilitystate)
 * [allowAppleScript](#allowapplescript)
 * [autoLaunch](#autolaunch)
 * [automaticallyCheckForUpdates](#automaticallycheckforupdates)
 * [cameraState](#camerastate)
 * [canCheckForUpdates](#cancheckforupdates)
 * [checkForUpdates](#checkforupdates)
 * [cleanUTF8forConsole](#cleanutf8forconsole)
 * [closeConsole](#closeconsole)
 * [closePreferences](#closepreferences)
 * [consoleOnTop](#consoleontop)
 * [coroutineApplicationYield](#coroutineapplicationyield)
 * [dockIcon](#dockicon)
 * [execute](#execute)
 * [focus](#focus)
 * [getObjectMetatable](#getobjectmetatable)
 * [help](#help)
 * [hsdocs](#hsdocs)
 * [loadSpoon](#loadspoon)
 * [menuIcon](#menuicon)
 * [microphoneState](#microphonestate)
 * [open](#open)
 * [openAbout](#openabout)
 * [openConsole](#openconsole)
 * [openConsoleOnDockClick](#openconsoleondockclick)
 * [openPreferences](#openpreferences)
 * [preferencesDarkMode](#preferencesdarkmode)
 * [printf](#printf)
 * [rawprint](#rawprint)
 * [relaunch](#relaunch)
 * [reload](#reload)
 * [screenRecordingState](#screenrecordingstate)
 * [showError](#showerror)
 * [toggleConsole](#toggleconsole)
 * [updateAvailable](#updateavailable)
 * [uploadCrashData](#uploadcrashdata)


---

## API Documentation

### Constants


### [configdir](#configdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.configdir`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A string containing Hammerspoon's configuration directory. Typically `~/.hammerspoon/`                                                                     |

---

### [docstrings_json_file](#docstrings_json_file)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.docstrings_json_file`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A string containing the full path to the `docs.json` file inside Hammerspoon's app bundle. This contains the full Hammerspoon API documentation and can be accessed in the Console using `help("someAPI")`. It can also be loaded and processed by the `hs.doc` extension                                                                     |

---

### [processInfo](#processinfo)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.processInfo`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing read-only information about the Hammerspoon application instance currently running.                                                                     |

---
### Variables


### [accessibilityStateCallback](#accessibilitystatecallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.accessibilityStateCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An optional function that will be called when the Accessibility State is changed.                                                                     |
| **Notes**                                   | <ul><li>The function will not receive any arguments when called.  To check what the accessibility state has been changed to, you should call [hs.accessibilityState](#accessibilityState) from within your function.</li></ul>                |

---

### [completionsForInputString](#completionsforinputstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.completionsForInputString(completionWord) -> table of strings`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Gathers tab completion options for the Console window                                                                     |
| **Parameters**                              | <ul><li>completionWord - A string from the Console window's input field that completions are needed for</li></ul> |
| **Returns**                                 | <ul><li>A table of strings, each of which will be shown as a possible completion option to the user</li></ul>          |
| **Notes**                                   | <ul><li>Hammerspoon provides a default implementation of this function, which can complete against the global Lua namespace, the 'hs' (i.e. extension) namespace, and object metatables. You can assign a new function to the variable to replace it with your own variant.</li></ul>                |

---

### [dockIconClickCallback](#dockiconclickcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dockIconClickCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An optional function that will be called when the Hammerspoon Dock Icon is clicked while the app is running                                                                     |
| **Notes**                                   | <ul><li>If set, this callback will be called regardless of whether or not Hammerspoon shows its console window in response to a click (which can be enabled/disabled via `hs.openConsoleOnDockClick()`</li></ul>                |

---

### [fileDroppedToDockIconCallback](#filedroppedtodockiconcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fileDroppedToDockIconCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An optional function that will be called when a files are dragged to the Hammerspoon Dock Icon or sent via the Services menu                                                                     |
| **Notes**                                   | <ul><li>The function should accept a single parameter, which will be a string containing the full path to the file that was dragged to the dock icon</li><li>If multiple files are sent, this callback will be called once for each file</li><li>This callback will be triggered when ANY file type is dragged onto the Hammerspoon Dock Icon, however certain filetypes are also processed separately by Hammerspoon. For example, `hs.urlevent` will be triggered when the following filetypes are dropped onto the Dock Icon: HTML Documents (.html, .htm, .shtml, .jhtml), Plain text documents (.txt, .text), Web site locations (.url), XHTML documents (.xhtml, .xht, .xhtm, .xht).</li></ul>                |

---

### [shutdownCallback](#shutdowncallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.shutdownCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An optional function that will be called when the Lua environment is being destroyed (either because Hammerspoon is exiting or reloading its config)                                                                     |
| **Notes**                                   | <ul><li>This function should not perform any asynchronous tasks</li><li>You do not need to fastidiously destroy objects you have created, this callback exists purely for utility reasons (e.g. serialising state, destroying system resources that will not be released by normal Lua garbage collection processes, etc)</li></ul>                |

---

### [textDroppedToDockIconCallback](#textdroppedtodockiconcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.textDroppedToDockIconCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | An optional function that will be called when text is dragged to the Hammerspoon Dock Icon or sent via the Services menu                                                                     |
| **Notes**                                   | <ul><li>The function should accept a single parameter, which will be a string containing the text that was dragged to the dock icon</li></ul>                |

---
### Functions


### [accessibilityState](#accessibilitystate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.accessibilityState(shouldPrompt) -> isEnabled`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks the Accessibility Permissions for Hammerspoon, and optionally allows you to prompt for permissions.                                                                     |
| **Parameters**                              | <ul><li>shouldPrompt - an optional boolean value indicating if the dialog box asking if the System Preferences application should be opened should be presented when Accessibility is not currently enabled for Hammerspoon.  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>True or False indicating whether or not Accessibility is enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>Since this check is done automatically when Hammerspoon loads, it is probably of limited use except for skipping things that are known to fail when Accessibility is not enabled.  Evettaps which try to capture keyUp and keyDown events, for example, will fail until Accessibility is enabled and the Hammerspoon application is relaunched.</li></ul>                |

---

### [allowAppleScript](#allowapplescript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.allowAppleScript([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not external Hammerspoon AppleScript commands are allowed.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not external Hammerspoon's AppleScript commands are allowed.</li></ul> |
| **Returns**                                 | <ul><li>A boolean, `true` if Hammerspoon's AppleScript commands are (or has just been) allowed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>AppleScript access is disallowed by default.</li><li>However due to the way AppleScript support works, Hammerspoon will always allow AppleScript commands that are part of the "Standard Suite", such as `name`, `quit`, `version`, etc. However, Hammerspoon will only allow commands from the "Hammerspoon Suite" if `hs.allowAppleScript()` is set to `true`.</li><li>For a full list of AppleScript Commands:</li><li>     - Open `/Applications/Utilities/Script Editor.app`</li><li>     - Click `File > Open Dictionary...`</li><li>     - Select Hammerspoon from the list of Applications</li><li>     - This will now open a Dictionary containing all of the available Hammerspoon AppleScript commands.</li><li>Note that strings within the Lua code you pass from AppleScript can be delimited by `[[` and `]]` rather than normal quotes</li><li>Example:</li><li>   ```lua</li><li>   tell application "Hammerspoon"</li><li>     execute lua code "hs.alert([[Hello from AppleScript]])"</li><li>   end tell```</li></ul>                |

---

### [autoLaunch](#autolaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.autoLaunch([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display the "Launch on Login" status for Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not Hammerspoon should be launched automatically when you log into your computer.</li></ul> |
| **Returns**                                 | <ul><li>True if Hammerspoon is currently (or has just been) set to launch on login or False if Hammerspoon is not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [automaticallyCheckForUpdates](#automaticallycheckforupdates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.automaticallyCheckForUpdates([setting]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets and optionally sets the Hammerspoon option to automatically check for updates.                                                                     |
| **Parameters**                              | <ul><li>setting - an optional boolean variable indicating if Hammerspoon should (true) or should not (false) check for updates.</li></ul> |
| **Returns**                                 | <ul><li>The current (or newly set) value indicating whether or not automatic update checks should occur for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>If you are running a non-release or locally compiled version of Hammerspoon then the results of this function are unspecified.</li></ul>                |

---

### [cameraState](#camerastate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.cameraState(shouldPrompt) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks the Camera Permissions for Hammerspoon, and optionally allows you to prompt for permissions.                                                                     |
| **Parameters**                              | <ul><li>shouldPrompt - an optional boolean value indicating if we should request camera access. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>`true` or `false` indicating whether or not Camera access is enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>Will always return `true` on macOS 10.13 or earlier.</li></ul>                |

---

### [canCheckForUpdates](#cancheckforupdates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.canCheckForUpdates() -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a boolean indicating whether or not the Sparkle framework is available to check for Hammerspoon updates.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean indicating whether or not the Sparkle framework is available to check for Hammerspoon updates</li></ul>          |
| **Notes**                                   | <ul><li>The Sparkle framework is included in all regular releases of Hammerspoon but not included if you are running a non-release or locally compiled version of Hammerspoon, so this function can be used as a simple test to determine whether or not you are running a formal release Hammerspoon or not.</li></ul>                |

---

### [checkForUpdates](#checkforupdates)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.checkForUpdates([silent]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check for an update now, and if one is available, prompt the user to continue the update process.                                                                     |
| **Parameters**                              | <ul><li>silent - An optional boolean. If true, no UI will be displayed if an update is available. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If you are running a non-release or locally compiled version of Hammerspoon then the results of this function are unspecified.</li></ul>                |

---

### [cleanUTF8forConsole](#cleanutf8forconsole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.cleanUTF8forConsole(inString) -> outString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a copy of the incoming string that can be displayed in the Hammerspoon console.  Invalid UTF8 sequences are converted to the Unicode Replacement Character and NULL (0x00) is converted to the Unicode Empty Set character.                                                                     |
| **Parameters**                              | <ul><li>inString - the string to be cleaned up</li></ul> |
| **Returns**                                 | <ul><li>outString - the cleaned up version of the input string.</li></ul>          |
| **Notes**                                   | <ul><li>This function is applied automatically to all output which appears in the Hammerspoon console, but not to the output provided by the `hs` command line tool.</li><li>This function does not modify the original string - to actually replace it, assign the result of this function to the original string.</li><li>This function is a more specifically targeted version of the `hs.utf8.fixUTF8(...)` function.</li></ul>                |

---

### [closeConsole](#closeconsole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.closeConsole()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Closes the Hammerspoon Console window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [closePreferences](#closepreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.closePreferences()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Closes the Hammerspoon Preferences window                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [consoleOnTop](#consoleontop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.consoleOnTop([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not the Hammerspoon console is always on top when visible.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not the Hammerspoon console is always on top when visible.</li></ul> |
| **Returns**                                 | <ul><li>True if the console is currently set (or has just been) to be always on top when visible or False if it is not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [coroutineApplicationYield](#coroutineapplicationyield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.coroutineApplicationYield([delay])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Yield coroutine to allow the Hammerspoon application to process other scheduled events and schedule a resume in the event application queue.                                                                     |
| **Parameters**                              | <ul><li>`delay` - an optional number, default `hs.math.minFloat`, specifying the number of seconds from when this function is executed that the `coroutine.resume` should be scheduled for.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>this function will return an error if invoked outside of a coroutine.</li><li>unlike `coroutine.yield`, this function does not allow the passing of (new) information to or from the coroutine while it is running; this function is to allow long running tasks to yield time to the Hammerspoon application so other timers and scheduled events can occur without requiring the programmer to add code for an explicit resume.</li><li></li><li>this function is added to the lua `coroutine` library as `coroutine.applicationYield` as an alternative name.</li></ul>                |

---

### [dockIcon](#dockicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.dockIcon([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not the Hammerspoon dock icon is visible.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not the Hammerspoon dock icon should be visible.</li></ul> |
| **Returns**                                 | <ul><li>True if the icon is currently set (or has just been) to be visible or False if it is not.</li></ul>          |
| **Notes**                                   | <ul><li>This function is a wrapper to functions found in the `hs.dockicon` module, but is provided here to provide an interface consistent with other selectable preference items.</li></ul>                |

---

### [execute](#execute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.execute(command[, with_user_env]) -> output, status, type, rc`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Runs a shell command, optionally loading the users shell environment first, and returns stdout as a string, followed by the same result codes as `os.execute` would return.                                                                     |
| **Parameters**                              | <ul><li>command - a string containing the shell command to execute</li><li>with_user_env - optional boolean argument which if provided and is true, executes the command in the users login shell as an "interactive" login shell causing the user's local profile (or other login scripts) to be loaded first.</li></ul> |
| **Returns**                                 | <ul><li>output -- the stdout of the command as a string.  May contain an extra terminating new-line (\n).</li><li>status -- `true` if the command terminated successfully or nil otherwise.</li><li>type   -- a string value of "exit" or "signal" indicating whether the command terminated of its own accord or if it was terminated by a signal (killed, segfault, etc.)</li><li>rc     -- if the command exited of its own accord, then this number will represent the exit code (usually 0 for success, not 0 for an error, though this is very command specific, so check man pages when there is a question).  If the command was killed by a signal, then this number corresponds to the signal type that caused the command to terminate.</li></ul>          |
| **Notes**                                   | <ul><li>Setting `with_user_env` to true does incur noticeable overhead, so it should only be used if necessary (to set the path or other environment variables).</li><li>Because this function returns the stdout as it's first return value, it is not quite a drop-in replacement for `os.execute`.  In most cases, it is probable that `stdout` will be the empty string when `status` is nil, but this is not guaranteed, so this trade off of shifting os.execute's results was deemed acceptable.</li><li>This particular function is most useful when you're more interested in the command's output then a simple check for completion and result codes.  If you only require the result codes or verification of command completion, then `os.execute` will be slightly more efficient.</li><li>If you need to execute commands that have spaces in their paths, use a form like: `hs.execute [["/Some/Path To/An/Executable" "--first-arg" "second-arg"]]`</li></ul>                |

---

### [focus](#focus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.focus()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Makes Hammerspoon the foreground app.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getObjectMetatable](#getobjectmetatable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.getObjectMetatable(name) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Fetches the Lua metatable for objects produced by an extension                                                                     |
| **Parameters**                              | <ul><li>name - A string containing the name of a module to fetch object metadata for (e.g. `"hs.screen"`)</li></ul> |
| **Returns**                                 | <ul><li>The extension's object metatable, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [help](#help)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.help(identifier)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prints the documentation for some part of Hammerspoon's API and Lua 5.3.  This function is actually sourced from hs.doc.help.                                                                     |
| **Parameters**                              | <ul><li>identifier - A string containing the signature of some part of Hammerspoon's API (e.g. `"hs.reload"`)</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function is mainly for runtime API help while using Hammerspoon's Console</li><li>You can also access the results of this function by the following methods from the console:</li><li>  help("identifier") -- quotes are required, e.g. `help("hs.reload")`</li><li>  help.identifier.path -- no quotes are required, e.g. `help.hs.reload`</li><li>Lua information can be accessed by using the `lua` prefix, rather than `hs`.</li><li>  the identifier `lua._man` provides the table of contents for the Lua 5.3 manual.  You can pull up a specific section of the lua manual by including the chapter (and subsection) like this: `lua._man._3_4_8`.</li><li>  the identifier `lua._C` will provide information specifically about the Lua C API for use when developing modules which require external libraries.</li></ul>                |

---

### [hsdocs](#hsdocs)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hsdocs([identifier])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Display's Hammerspoon API documentation in a webview browser.                                                                     |
| **Parameters**                              | <ul><li>identifier - An optional string containing the signature of some part of Hammerspoon's API (e.g. `"hs.reload"`).  If no string is provided, then the table of contents for the Hammerspoon documentation is displayed.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>You can also access the results of this function by the following methods from the console:</li><li>  hs.hsdocs.identifier.path -- no quotes are required, e.g. `hs.hsdocs.hs.reload`</li><li>See `hs.doc.hsdocs` for more information about the available settings for the documentation browser.</li><li>This function provides documentation for Hammerspoon modules, functions, and methods similar to the Hammerspoon Dash docset, but does not require any additional software.</li><li>This currently only provides documentation for the built in Hammerspoon modules, functions, and methods.  The Lua documentation and third-party modules are not presently supported, but may be added in a future release.</li></ul>                |

---

### [loadSpoon](#loadspoon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.loadSpoon(name[, global]) -> Spoon object`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a Spoon                                                                     |
| **Parameters**                              | <ul><li>name - The name of a Spoon (without the trailing `.spoon`)</li><li>global - An optional boolean. If true, this function will insert the spoon into Lua's global namespace as `spoon.NAME`. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>The object provided by the Spoon (which can be ignored if you chose to make the Spoon global)</li></ul>          |
| **Notes**                                   | <ul><li>Spoons are a way of distributing self-contained units of Lua functionality, for Hammerspoon. For more information, see https://github.com/Hammerspoon/hammerspoon/blob/master/SPOONS.md</li><li>This function will load the Spoon and call its `:init()` method if it has one. If you do not wish this to happen, or wish to use a Spoon that somehow doesn't fit with the behaviours of this function, you can also simply `require('name')` to load the Spoon</li><li>If the Spoon has a `:start()` method you are responsible for calling it before using the functionality of the Spoon.</li><li>If the Spoon provides documentation, it will be loaded by made available in hs.docs</li><li>To learn how to distribute your own code as a Spoon, see https://github.com/Hammerspoon/hammerspoon/blob/master/SPOONS.md</li></ul>                |

---

### [menuIcon](#menuicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.menuIcon([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not the Hammerspoon menu icon is visible.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not the Hammerspoon menu icon should be visible.</li></ul> |
| **Returns**                                 | <ul><li>True if the icon is currently set (or has just been) to be visible or False if it is not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [microphoneState](#microphonestate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.microphoneState(shouldPrompt) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks the Microphone Permissions for Hammerspoon, and optionally allows you to prompt for permissions.                                                                     |
| **Parameters**                              | <ul><li>shouldPrompt - an optional boolean value indicating if we should request microphone access. Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>`true` or `false` indicating whether or not Microphone access is enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>Will always return `true` on macOS 10.13 or earlier.</li></ul>                |

---

### [open](#open)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.open(filePath)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens a file as if it were opened with /usr/bin/open                                                                     |
| **Parameters**                              | <ul><li>filePath - A string containing the path to a file/bundle to open</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the file was opened successfully, otherwise false</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [openAbout](#openabout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.openAbout()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays the OS X About panel for Hammerspoon; implicitly focuses Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [openConsole](#openconsole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.openConsole([bringToFront])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens the Hammerspoon Console window and optionally focuses it.                                                                     |
| **Parameters**                              | <ul><li>bringToFront - if true (default), the console will be focused as well as opened.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [openConsoleOnDockClick](#openconsoleondockclick)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.openConsoleOnDockClick([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not the Console window will open when the Hammerspoon dock icon is clicked                                                                     |
| **Parameters**                              | <ul><li>state - An optional boolean, true if the console window should open, false if not</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the console window will open when the dock icon</li></ul>          |
| **Notes**                                   | <ul><li>This only refers to dock icon clicks while Hammerspoon is already running. The console window is not opened by launching the app</li></ul>                |

---

### [openPreferences](#openpreferences)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.openPreferences()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Displays the Hammerspoon Preferences panel; implicitly focuses Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [preferencesDarkMode](#preferencesdarkmode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.preferencesDarkMode([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set or display whether or not the Preferences panel should display in dark mode.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean which will set whether or not the Preferences panel should display in dark mode.</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if dark mode is enabled otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [printf](#printf)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.printf(format, ...)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Prints formatted strings to the Console                                                                     |
| **Parameters**                              | <ul><li>format - A format string</li><li>... - Zero or more arguments to fill the placeholders in the format string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This is a simple wrapper around the Lua code `print(string.format(...))`.</li></ul>                |

---

### [rawprint](#rawprint)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.rawprint(aString)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The original Lua print() function                                                                     |
| **Parameters**                              | <ul><li>aString - A string to be printed</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Hammerspoon overrides Lua's print() function, but this is a reference we retain to is, should you need it for any reason</li></ul>                |

---

### [relaunch](#relaunch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.relaunch()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Quits and relaunches Hammerspoon.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [reload](#reload)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.reload()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reloads your init-file in a fresh Lua environment.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [screenRecordingState](#screenrecordingstate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.screenRecordingState(shouldPrompt) -> isEnabled`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks the Screen Recording Permissions for Hammerspoon, and optionally allows you to prompt for permissions.                                                                     |
| **Parameters**                              | <ul><li>shouldPrompt - an optional boolean value indicating if the dialog box asking if the System Preferences application should be opened should be presented when Screen Recording is not currently enabled for Hammerspoon.  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>True or False indicating whether or not Screen Recording is enabled for Hammerspoon.</li></ul>          |
| **Notes**                                   | <ul><li>If you trigger the prompt and the user denies it, you cannot bring up the prompt again - the user must manually enable it in System Preferences.</li></ul>                |

---

### [showError](#showerror)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.showError(err)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Shows an error to the user, using Hammerspoon's Console                                                                     |
| **Parameters**                              | <ul><li>err - A string containing an error message</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>This function is called whenever an (uncaught) error occurs or is thrown (via `error()`)</li><li>The default implementation shows a notification, opens the Console, and prints the error message and stacktrace</li><li>You can override this function if you wish to route errors differently (e.g. for remote systems)</li></ul>                |

---

### [toggleConsole](#toggleconsole)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.toggleConsole()`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Toggles the visibility of the console                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If the console is not currently open, it will be opened. If it is open and not the focused window, it will be brought forward and focused.</li><li>If the console is focused, it will be closed.</li></ul>                |

---

### [updateAvailable](#updateavailable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.updateAvailable() -> string or false, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the version & build number of an available update                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the display version of the latest release, or a boolean false if no update is available</li><li>A string containing the build number of the latest release, or `nil` if no update is available</li></ul>          |
| **Notes**                                   | <ul><li>This is not a live check, it is a cached result of whatever the previous update check found. By default Hammerspoon checks for updates every few hours, but you can also add your own timer to check for updates more frequently with `hs.checkForUpdates()`</li></ul>                |

---

### [uploadCrashData](#uploadcrashdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.uploadCrashData([state]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set the "Upload Crash Data" preference for Hammerspoon                                                                     |
| **Parameters**                              | <ul><li>state - An optional boolean, true to upload crash reports, false to not</li></ul> |
| **Returns**                                 | <ul><li>True if Hammerspoon is currently (or has just been) set to upload crash data or False otherwise</li></ul>          |
| **Notes**                                   | <ul><li>If at all possible, please do allow Hammerspoon to upload crash reports to us, it helps a great deal in keeping Hammerspoon stable</li><li>Our Privacy Policy can be found here: [https://www.hammerspoon.org/privacy.html](https://www.hammerspoon.org/privacy.html)</li></ul>                |

---
