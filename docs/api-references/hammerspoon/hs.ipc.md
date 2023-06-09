# hs.ipc

Provides Hammerspoon with the ability to create both local and remote message ports for inter-process communication.

The most common use of this module is to provide support for the command line tool `hs` which can be added to your terminal shell environment with [hs.ipc.cliInstall](#cliInstall).  The command line tool will not work unless the `hs.ipc` module is loaded first, so it is recommended that you add `require("hs.ipc")` to your Hammerspoon `init.lua` file (usually located at ~/.hammerspoon/init.lua) so that it is always available when Hammerspoon is running.

This module is based heavily on code from Mjolnir by [Steven Degutis](https://github.com/sdegutis/).

---

## API Overview
**Deprecateds** - _API features which will be removed in an future release_
 * [cliGetColors](#cligetcolors)
 * [cliResetColors](#cliresetcolors)
 * [cliSetColors](#clisetcolors)

**Functions** - _API calls offered directly by the extension_
 * [cliColors](#clicolors)
 * [cliInstall](#cliinstall)
 * [cliSaveHistory](#clisavehistory)
 * [cliSaveHistorySize](#clisavehistorysize)
 * [cliStatus](#clistatus)
 * [cliUninstall](#cliuninstall)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [localPort](#localport)
 * [remotePort](#remoteport)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [delete](#delete)
 * [isRemote](#isremote)
 * [isValid](#isvalid)
 * [name](#name)
 * [sendMessage](#sendmessage)


---

## API Documentation

#### Deprecateds


### [cliGetColors](#cligetcolors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliGetColors() -> table`                                                                    |
| **Type**                                    | Deprecated                                                                     |
| **Description**                             | See [hs.ipc.cliColors](#cliColors).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 112](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L112){target="_blank"} |

---


### [cliResetColors](#cliresetcolors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliResetColors()`                                                                    |
| **Type**                                    | Deprecated                                                                     |
| **Description**                             | See [hs.ipc.cliColors](#cliColors).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 136](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L136){target="_blank"} |

---


### [cliSetColors](#clisetcolors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliSetColors(table) -> table`                                                                    |
| **Type**                                    | Deprecated                                                                     |
| **Description**                             | See [hs.ipc.cliColors](#cliColors).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 124](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L124){target="_blank"} |

---

#### Functions


### [cliColors](#clicolors)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliColors([colors]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set the terminal escape codes used to produce colorized output in the `hs` command line tool                                                                     |
| **Parameters**                              | <ul><li>colors - an optional table or explicit nil specifying the colors to use when colorizing output for the command line tool.  If you specify an explicit nil, the colors will revert to their defaults.  If you specify a table it must contain one or more of the following keys with the terminal key sequence as a string for the value:
  initial - this color is used for the initial tagline when starting the command line tool and for output to the Hammerspoon console that is redirected to the instance.  Defaults to "\27[35m" (foreground magenta).
  input   - this color is used for input typed in by the user into the cli instance.  Defaults to "\27[33m" (foreground yellow).
  output  - this color is used for output generated by the commands executed within the instance and the results returned.  Defaults to "\27[36m" (foreground cyan).
  error   - this color is used for lua errors generated by the commands executed within the instance.  Defaults to "\27[31m" (foreground red).</li></ul> |
| **Returns**                                 | <ul><li>a table describing the colors used when colorizing output in the `hs` command line tool.</li></ul>          |
| **Notes**                                   | <ul><li>For a brief intro into terminal colors, you can visit a web site like this one [http://jafrog.com/2013/11/23/colors-in-terminal.html](http://jafrog.com/2013/11/23/colors-in-terminal.html)</li><li>Lua doesn't support octal escapes in it's strings, so use `\x1b` or `\27` to indicate the `escape` character e.g. `ipc.cliSetColors{ initial = "", input = "\27[33m", output = "\27[38;5;11m" }`</li><li></li><li>Changes made with this function are saved with `hs.settings` with the following labels and will persist through a reload or restart of Hammerspoon: "ipc.cli.color_initial", "ipc.cli.color_input", "ipc.cli.color_output", and "ipc.cli.color_error"</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 63](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L63){target="_blank"} |

---


### [cliInstall](#cliinstall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliInstall([path][,silent]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Installs the `cmdpost` command line tool                                                                     |
| **Parameters**                              | <ul><li>path - An optional string containing a path to install the tool in. Defaults to `/usr/local`</li><li>silent - An optional boolean indicating whether or not to print errors to the CommandPost Error Log</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the tool was successfully installed, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>If this function fails, it is likely that you have some old/broken symlinks. You can use `hs.ipc.cliUninstall()` to forcibly tidy them up</li><li>You may need to pre-create `/usr/local/bin` and `/usr/local/share/man/man1` in a terminal using sudo, and adjust permissions so your login user can write to them</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 268](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L268){target="_blank"} |

---


### [cliSaveHistory](#clisavehistory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliSaveHistory([state]) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set whether or not the command line tool saves a history of the commands you type.                                                                     |
| **Parameters**                              | <ul><li>state - an optional boolean (default false) specifying whether or not a history of the commands you type into the command line tool should be saved between sessions.</li></ul> |
| **Returns**                                 | <ul><li>the current, possibly changed, value</li></ul>          |
| **Notes**                                   | <ul><li>If this is enabled, your history is saved in `hs.configDir .. ".cli.history"`, which is usually "~/.hammerspoon/.cli.history".</li><li>If you have multiple invocations of the command line tool running at the same time, only the history of the last one cleanly exited is saved; this is a limitation of the readline wrapper Apple has provided for libedit and at present no workaround is known.</li><li></li><li>Changes made with this function are saved with `hs.settings` with the label "ipc.cli.saveHistory" and will persist through a reload or restart of Hammerspoon.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 148](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L148){target="_blank"} |

---


### [cliSaveHistorySize](#clisavehistorysize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliSaveHistorySize([size]) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get or set whether the maximum number of commands saved when command line tool history saving is enabled.                                                                     |
| **Parameters**                              | <ul><li>size - an optional integer (default 1000) specifying the maximum number of commands to save when [hs.ipc.cliSaveHistory](#cliSaveHistory) is set to true.</li></ul> |
| **Returns**                                 | <ul><li>the current, possibly changed, value</li></ul>          |
| **Notes**                                   | <ul><li>When [hs.ipc.cliSaveHistory](#cliSaveHistory) is enabled, your history is saved in `hs.configDir .. ".cli.history"`, which is usually "~/.hammerspoon/.cli.history".</li><li>If you have multiple invocations of the command line tool running at the same time, only the history of the last one cleanly exited is saved; this is a limitation of the readline wrapper Apple has provided for libedit and at present no workaround is known.</li><li></li><li>Changes made with this function are saved with `hs.settings` with the label "ipc.cli.historyLimit" and will persist through a reload or restart of Hammerspoon.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 171](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L171){target="_blank"} |

---


### [cliStatus](#clistatus)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliStatus([path][,silent]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the status of the `hs` command line tool                                                                     |
| **Parameters**                              | <ul><li>path - An optional string containing a path to look for the `hs` tool. Defaults to `/usr/local`</li><li>silent - An optional boolean indicating whether or not to print errors to the Hammerspoon Console</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the `hs` command line tool is correctly installed, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 194](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L194){target="_blank"} |

---


### [cliUninstall](#cliuninstall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.cliUninstall([path][,silent]) -> bool`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Uninstalls the `hs` command line tool                                                                     |
| **Parameters**                              | <ul><li>path - An optional string containing a path to remove the tool from. Defaults to `/usr/local`</li><li>silent - An optional boolean indicating whether or not to print errors to the CommandPost Error Log</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the tool was successfully removed, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>This function used to be very conservative and refuse to remove symlinks it wasn't sure about, but now it will unconditionally remove whatever it finds at `path/bin/cmdpost` and `path/share/man/man1/cmdpost.1`. This is more likely to be useful in situations where this command is actually needed (please open an Issue on GitHub if you disagree!)</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/ipc.lua line 294](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/ipc.lua#L294){target="_blank"} |

---

#### Constructors


### [localPort](#localport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.localPort(name, fn) -> ipcObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new local ipcObject for receiving and responding to messages from a remote port                                                                     |
| **Parameters**                              | <ul><li>name - a string acting as the message port name.</li><li>fn   - the callback function which will receive messages.</li></ul> |
| **Returns**                                 | <ul><li>the ipc object</li></ul>          |
| **Notes**                                   | <ul><li>a remote port can send messages at any time to a local port; a local port can only respond to messages from a remote port</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 78](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L78){target="_blank"} |

---


### [remotePort](#remoteport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc.remotePort(name) -> ipcObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new remote ipcObject for sending messages asynchronously to a local port                                                                     |
| **Parameters**                              | <ul><li>name - a string acting as the message port name.</li></ul> |
| **Returns**                                 | <ul><li>the ipc object</li></ul>          |
| **Notes**                                   | <ul><li>a remote port can send messages at any time to a local port; a local port can only respond to messages from a remote port</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 128](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L128){target="_blank"} |

---

#### Methods


### [delete](#delete)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc:delete() -> None`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes the ipcObject, stopping it as well if necessary                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 338](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L338){target="_blank"} |

---


### [isRemote](#isremote)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc:isRemote() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the ipcObject represents a remote or local port                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if the object is a remote port, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>a remote port can send messages at any time to a local port; a local port can only respond to messages from a remote port</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 174](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L174){target="_blank"} |

---


### [isValid](#isvalid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc:isValid() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the ipcObject port is still valid or not                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>true if the object is a valid port, otherwise false</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 195](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L195){target="_blank"} |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc:name() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the name the ipcObject uses for its port when active                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the port name as a string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 156](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L156){target="_blank"} |

---


### [sendMessage](#sendmessage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.ipc:sendMessage(data, msgID, [waitTimeout], [oneWay]) -> status, response`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sends a message from a remote port to a local port                                                                     |
| **Parameters**                              | <ul><li>data        - any data type which is to be sent to the local port.  The data will be converted into its string representation</li><li>msgID       - an integer message ID</li><li>waitTimeout - an optional number, default 2.0, representing the number of seconds the method will wait to send the message and then wait for a response.  The method *may* block up to twice this number of seconds, though usually it will be shorter.</li><li>oneWay      -  an optional boolean, default false, indicating whether or not to wait for a response.  It this is true, the second returned argument will be nil.</li></ul> |
| **Returns**                                 | <ul><li>status   - a boolean indicating whether or not the local port responded before the timeout (true) or if an error or timeout occurred waiting for the response (false)</li><li>response - the response from the local port, usually a string, but may be nil if there was no response returned.  If status is false, will contain an error message describing the error.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/ipc/libipc.m line 213](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/ipc/libipc.m#L213){target="_blank"} |

---

