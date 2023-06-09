# hs.urlevent

Allows CommandPost to respond to URLs
CommandPost is configured to react to URLs that start with `commandpost://` when they are opened by OS X.
This extension allows you to register callbacks for these URL events and their parameters, offering a flexible way to receive events from other applications.

You can also choose to make CommandPost the default for `http://` and `https://` URLs, which lets you route the URLs in your Lua code

Given a URL such as `commandpost://someEventToHandle?someParam=things&otherParam=stuff`, in the literal, RFC1808 sense of the URL, `someEventToHandle` is the hostname (or net_loc) of the URL, but given that these are not network resources, we consider `someEventToHandle` to be the name of the event. No path should be specified in the URL - it should consist purely of a hostname and, optionally, query parameters.

See also `hs.ipc` for a command line IPC mechanism that is likely more appropriate for shell scripts or command line use. Unlike `hs.ipc`, `hs.urlevent` is not able to return any data to its caller.

NOTE: If CommandPost is not running when a `commandpost://` URL is opened, CommandPost will be launched, but it will not react to the URL event. Nor will it react to any events until this extension is loaded and event callbacks have been bound.
NOTE: Any event which is received, for which no callback has been bound, will be logged to the CommandPost Console
NOTE: When you trigger a URL from another application, it is usually best to have the URL open in the background, if that option is available. Otherwise, OS X will activate CommandPost (i.e. give it focus), which makes URL events difficult to use for things like window management.

---

## API Overview
**Variables** - _Configurable values_
 * [httpCallback](#httpcallback)
 * [mailtoCallback](#mailtocallback)

**Functions** - _API calls offered directly by the extension_
 * [bind](#bind)
 * [getAllHandlersForScheme](#getallhandlersforscheme)
 * [getDefaultHandler](#getdefaulthandler)
 * [openURL](#openurl)
 * [openURLWithBundle](#openurlwithbundle)
 * [setDefaultHandler](#setdefaulthandler)
 * [setRestoreHandler](#setrestorehandler)


---

## API Documentation

#### Variables


### [httpCallback](#httpcallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.httpCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A function that should handle http:// and https:// URL events                                                                     |
| **Notes**                                   | <ul><li>The function should handle four arguments:</li><li> scheme - A string containing the URL scheme (i.e. "http")</li><li> host - A string containing the host requested (e.g. "www.commandpost.org")</li><li> params - A table containing the key/value pairs of all the URL parameters</li><li> fullURL - A string containing the full, original URL</li><li> senderPID - An integer containing the PID of the application that opened the URL, if available (otherwise -1)</li></ul> |
| **Source**                                  | [extensions/urlevent/urlevent.lua line 21](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/urlevent.lua#L21){target="_blank"} |

---


### [mailtoCallback](#mailtocallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.mailtoCallback`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A function that should handle mailto: URL events                                                                     |
| **Notes**                                   | <ul><li>The function should handle four arguments:</li><li> scheme - A string containing the URI scheme (i.e. "mailto")</li><li> host - A string containing the host requested (typically nil)</li><li> params - A table containing the key/value pairs of all the URL parameters, typically empty</li><li> fullURL - A string containing the full, original URI</li><li> senderPID - An integer containing the PID of the application that opened the URI, if available (otherwise -1)</li></ul> |
| **Source**                                  | [extensions/urlevent/urlevent.lua line 34](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/urlevent.lua#L34){target="_blank"} |

---

#### Functions


### [bind](#bind)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.bind(eventName, callback)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a callback for a commandpost:// URL event                                                                     |
| **Parameters**                              | <ul><li>eventName - A string containing the name of an event</li><li>callback - A function that will be called when the specified event is received, or nil to remove an existing callback</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The callback function should accept two parameters:</li><li> eventName - A string containing the name of the event</li><li> params - A table containing key/value string pairs containing any URL parameters that were specified in the URL</li><li> senderPID - An integer containing the PID of the sending application, if available (otherwise -1)</li><li>Given the URL `commandpost://doThingA?value=1` The event name is `doThingA` and the callback's `params` argument will be a table containing `{["value"] = "1"}`</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/urlevent.lua line 88](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/urlevent.lua#L88){target="_blank"} |

---


### [getAllHandlersForScheme](#getallhandlersforscheme)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.getAllHandlersForScheme(scheme) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets all of the application bundle identifiers of applications able to handle a URL scheme                                                                     |
| **Parameters**                              | <ul><li>scheme - A string containing a URL scheme (e.g. 'http')</li></ul> |
| **Returns**                                 | <ul><li>A table containing the bundle identifiers of all applications that can handle the scheme</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/liburlevent.m line 269](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/liburlevent.m#L269){target="_blank"} |

---


### [getDefaultHandler](#getdefaulthandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.getDefaultHandler(scheme) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the application bundle identifier of the application currently registered to handle a URL scheme                                                                     |
| **Parameters**                              | <ul><li>scheme - A string containing a URL scheme (e.g. 'http')</li></ul> |
| **Returns**                                 | <ul><li>A string containing the bundle identifier of the current default application</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/liburlevent.m line 244](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/liburlevent.m#L244){target="_blank"} |

---


### [openURL](#openurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.openURL(url)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens a URL with the default application                                                                     |
| **Parameters**                              | <ul><li>url - A string containing a URL, which must contain a scheme and '://'</li></ul> |
| **Returns**                                 | <ul><li>A boolean, true if the URL was opened successfully, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/urlevent.lua line 109](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/urlevent.lua#L109){target="_blank"} |

---


### [openURLWithBundle](#openurlwithbundle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.openURLWithBundle(url, bundleID) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Opens a URL with a specified application                                                                     |
| **Parameters**                              | <ul><li>url - A string containing a URL</li><li>bundleID - A string containing an application bundle identifier (e.g. "com.apple.Safari")</li></ul> |
| **Returns**                                 | <ul><li>True if the application was launched successfully, otherwise false</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/liburlevent.m line 300](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/liburlevent.m#L300){target="_blank"} |

---


### [setDefaultHandler](#setdefaulthandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.setDefaultHandler(scheme[, bundleID])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the default system handler for URLs of a given scheme                                                                     |
| **Parameters**                              | <ul><li>scheme - A string containing the URL scheme to change. This must be 'http' or 'https' (although entering either will change the handler for both)</li><li>bundleID - An optional string containing an application bundle identifier for the application to set as the default handler. Defaults to `org.latenitefilms.CommandPost`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>Changing the default handler for http/https URLs will display a system prompt asking the user to confirm the change</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/liburlevent.m line 196](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/liburlevent.m#L196){target="_blank"} |

---


### [setRestoreHandler](#setrestorehandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.urlevent.setRestoreHandler(scheme, bundleID)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Stores a URL handler that will be restored when CommandPost or reloads its config                                                                     |
| **Parameters**                              | <ul><li>scheme - A string containing the URL scheme to change. This must be 'http' (although both http:// and https:// URLs will be affected)</li><li>bundleID - A string containing an application bundle identifier (e.g. 'com.apple.Safari') for the application to set as the default handler when CommandPost exits or reloads its config</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>You don't have to call this function if you want CommandPost to permanently be your default handler. Only use this if you want the handler to be automatically reverted to something else when CommandPost exits/reloads.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [extensions/urlevent/liburlevent.m line 173](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/urlevent/liburlevent.m#L173){target="_blank"} |

---

