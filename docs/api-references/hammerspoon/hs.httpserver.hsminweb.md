# hs.httpserver.hsminweb

Minimalist Web Server for Hammerspoon

This module aims to be a minimal, but (mostly) standards-compliant web server for use within Hammerspoon.  Expanding upon the Hammerspoon module, `hs.httpserver`, this module adds support for serving static pages stored at a specified document root as well as serving dynamic content from Lua Template Files interpreted within the Hammerspoon environment and external executables which support the CGI/1.1 framework.

This module aims to provide a fully functional, and somewhat extendable, web server foundation, but will never replace a true dedicated web server application.  Some limitations include:
 * It is single threaded within the Hammerspoon environment and can only serve one resource at a time
 * As with all Hammerspoon modules, while dynamic content is being generated, Hammerspoon cannot respond to other callback functions -- a complex or time consuming script may block other Hammerspoon activity in a noticeable manner.
 * All document requests and responses are handled in memory only -- because of this, maximum resource size is limited to what you are willing to allow Hammerspoon to consume and memory limitations of your computer.

While some of these limitations may be mitigated to an extent in the future with additional modules and additions to `hs.httpserver`, Hammerspoon's web serving capabilities will never replace a dedicated web server when volume or speed is required.

An example web site is provided in the `hsdocs` folder of the `hs.doc` module.  This web site can serve documentation for Hammerspoon dynamically generated from the json file included with the Hammerspoon application for internal documentation.  It serves as a basic example of what is possible with this module.

You can start this web server by typing the following into your Hammerspoon console:
`require("hs.doc.hsdocs").start()` and then visiting `http://localhost:12345/` with your web browser.

---

## Submodules
 * [hs.httpserver.hsminweb.cgilua](hs.httpserver.hsminweb.cgilua.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [dateFormatString](#dateformatstring)
 * [statusCodes](#statuscodes)

**Variables** - _Configurable values_
 * [_accessLog](#_accesslog)
 * [_errorHandlers](#_errorhandlers)
 * [_serverAdmin](#_serveradmin)
 * [_supportMethods](#_supportmethods)
 * [log](#log)

**Functions** - _API calls offered directly by the extension_
 * [formattedDate](#formatteddate)
 * [urlParts](#urlparts)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [accessList](#accesslist)
 * [allowDirectory](#allowdirectory)
 * [bonjour](#bonjour)
 * [cgiEnabled](#cgienabled)
 * [cgiExtensions](#cgiextensions)
 * [directoryIndex](#directoryindex)
 * [dnsLookup](#dnslookup)
 * [documentRoot](#documentroot)
 * [interface](#interface)
 * [luaTemplateExtension](#luatemplateextension)
 * [maxBodySize](#maxbodysize)
 * [name](#name)
 * [password](#password)
 * [port](#port)
 * [queryLogging](#querylogging)
 * [scriptTimeout](#scripttimeout)
 * [ssl](#ssl)
 * [start](#start)
 * [stop](#stop)


---

## API Documentation

#### Constants


### [dateFormatString](#dateformatstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.dateFormatString`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A format string, usable with `os.date`, which will display a date in the format expected for HTTP communications as described in RFC 822, updated by RFC 1123.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1592](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1592) |

---


### [statusCodes](#statuscodes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.statusCodes`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | HTTP Response Status Codes                                                                     |
| **Notes**                                   | <ul><li>The keys and labels in this table have been combined from a variety of sources including, but not limited to:</li><li>  "Official" list at https://en.wikipedia.org/wiki/List_of_HTTP_status_codes</li><li>  KeplerProject's wsapi at https://github.com/keplerproject/wsapi</li><li>  IIS additions from https://support.microsoft.com/en-us/kb/943891</li><li>This table has metatable additions which allow you to review its contents from the Hammerspoon console by typing `hs.httpserver.hsminweb.statusCodes`</li></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1644](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1644) |

---

#### Variables


### [_accessLog](#_accesslog)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb._accessLog`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Accessed as `self._accessLog`.  If query logging is enabled for the web server, an Apache style common log entry will be appended to this string for each request.  See [hs.httpserver.hsminweb:queryLogging](#queryLogging).                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1552](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1552) |

---


### [_errorHandlers](#_errorhandlers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb._errorHandlers`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Accessed as `self._errorHandlers[errorCode]`.  A table whose keyed entries specify the function to generate the error response page for an HTTP error.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1556](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1556) |

---


### [_serverAdmin](#_serveradmin)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb._serverAdmin`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Accessed as `self._serverAdmin`.  A string containing the administrator for the web server.  Defaults to the currently logged in user's short form username and the computer's localized name as returned by `hs.host.localizedName()` (e.g. "user@computer").                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1546](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1546) |

---


### [_supportMethods](#_supportmethods)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb._supportMethods`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Accessed as `self._supportMethods[method]`.  A table whose keyed entries specify whether or not a specified HTTP method is supported by this server.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1574](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1574) |

---


### [log](#log)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.log`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The `hs.logger` instance for the `hs.httpserver.hsminweb` module. See the documentation for `hs.logger` for more information.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1639](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1639) |

---

#### Functions


### [formattedDate](#formatteddate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.formattedDate([date]) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the current or specified time in the format expected for HTTP communications as described in RFC 822, updated by RFC 1123.                                                                     |
| **Parameters**                              | <ul><li>date - an optional integer specifying the date as the number of seconds since 00:00:00 UTC on 1 January 1970.  Defaults to the current time as returned by `os.time()`</li></ul> |
| **Returns**                                 | <ul><li>the time indicated as a string in the format expected for HTTP communications as described in RFC 822, updated by RFC 1123.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1597](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1597) |

---


### [urlParts](#urlparts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.urlParts(url) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Parse the specified URL into its constituent parts.                                                                     |
| **Parameters**                              | <ul><li>url - the url to parse</li></ul> |
| **Returns**                                 | <ul><li>a table containing the constituent parts of the provided url.  The table will contain one or more of the following key-value pairs:</li><li>  fragment           - the anchor name a URL refers to within an HTML document.  Appears after '#' at the end of a URL.  Note that not all web clients include this in an HTTP request since its normal purpose is to indicate where to scroll to within a page after the content has been retrieved.</li><li>  host               - the host name portion of the URL, if any</li><li>  lastPathComponent  - the last component of the path portion of the URL</li><li>  password           - the password specified in the URL.  Note that this is not the password that would be entered when using Basic or Digest authentication; rather it is a password included in the URL itself -- for security reasons, use of this field has been deprecated in most situations and modern browsers will often prompt for confirmation before allowing URL's which contain a password to be transmitted.</li><li>  path               - the full path specified in the URL</li><li>  pathComponents     - an array containing the path components as individual strings.  Components which specify a sub-directory of the path will end with a "/" character.</li><li>  pathExtension      - if the final component of the path refers to a file, the file's extension, if any.</li><li>  port               - the port specified in the URL, if any</li><li>  query              - the portion of the URL after a '?' character, if any; used to contain query information often from a form submitting it's input with the GET method.</li><li>  resourceSpecifier  - the portion of the URL after the scheme</li><li>  scheme             - the URL scheme; for web traffic, this will be "http" or "https"</li><li>  standardizedURL    - the URL with any path components of ".." or "." normalized.  The use of ".." that would cause the URL to refer to something preceding its root is simply removed.</li><li>  URL                - the URL as it was provided to this function (no changes)</li><li>  user               - the user name specified in the URL.  Note that this is not the user name that would be entered when using Basic or Digest authentication; rather it is a user name included in the URL itself -- for security reasons, use of this field has been deprecated in most situations and modern browsers will often prompt for confirmation before allowing URL's which contain a user name to be transmitted.</li></ul>          |
| **Notes**                                   | <ul><li>This function differs from the similar function `hs.http.urlParts` in a few ways:</li><li>  To simplify the logic used by this module to determine if a request for a directory is properly terminated with a "/", the path components returned by this function do not remove this character from the component, if present.</li><li>  Some extraneous or duplicate keys have been removed.</li><li>  This function is patterned after RFC 3986 while `hs.http.urlParts` uses OS X API functions which are patterned after RFC 1808. RFC 3986 obsoletes 1808.  The primary distinction that affects this module is in regards to `parameters` for path components in the URI -- RFC 3986 disallows them in schema based URI's (like the URL's that are used for web based traffic).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1608](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1608) |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb.new([documentRoot]) -> hsminwebTable`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Create a new hsminweb table object representing a Hammerspoon Web Server.                                                                     |
| **Parameters**                              | <ul><li>documentRoot - an optional string specifying the document root for the new web server.  Defaults to the Hammerspoon users `Sites` sub-directory (i.e. `os.getenv("HOME").."/Sites"`).</li></ul> |
| **Returns**                                 | <ul><li>a table representing the hsminweb object.</li></ul>          |
| **Notes**                                   | <ul><li>a web server's document root is the directory which contains the documents or files to be served by the web server.</li><li>while an hs.minweb object is actually represented by a Lua table, it has been assigned a meta-table which allows methods to be called directly on it like a user-data object.  For most purposes, you should think of this table as the module's userdata.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1505](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1505) |

---

#### Methods


### [accessList](#accesslist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:accessList([table]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the access-list table for the hsminweb web server                                                                     |
| **Parameters**                              | <ul><li>table - an optional table or `nil` containing the access list for the web server, default `nil`.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>The access-list feature works by comparing the request headers against a list of tests which either accept or reject the request.  If no access list is set (i.e. it is assigned a value of `nil`), then all requests are served.  If a table is passed into this method, then any request which is not explicitly accepted by one of the tests provided is rejected (i.e. there is an implicit "reject" at the end of the list).</li><li>The access-list table is a list of tests which are evaluated in order.  The first test which matches a given request determines whether or not the request is accepted or rejected.</li><li>Each entry in the access-list table is also a table with the following format:</li><li>  { 'header', 'value', isPattern, isAccepted }</li><li>    header     - a string value matching the name of a header.  While the header name must match exactly, the comparison is case-insensitive (i.e. "X-Remote-addr" and "x-remote-addr" will both match the actual header name used, which is "X-Remote-Addr").</li><li>    value      - a string value specifying the value to compare the header key's value to.</li><li>    isPattern  - a boolean indicating whether or not the header key's value should be compared to `value` as a pattern match (true) -- see Lua documentation 6.4.1, `help.lua._man._6_4_1` in the console, or as an exact match (false)</li><li>    isAccepted - a boolean indicating whether or not a match should be accepted (true) or rejected (false)</li><li>  A special entry of the form { '\*', '\*', '\*', true } accepts all further requests and can be used as the final entry if you wish for the access list to function as a list of requests to reject, but to accept any requests which do not match a previous test.</li><li>  A special entry of the form { '\*', '\*', '\*', false } rejects all further requests and can be used as the final entry if you wish for the access list to function as a list of requests to accept, but to reject any requests which do not match a previous test.  This is the implicit "default" final test if a table is assigned with the access-list method and does not actually need to be specified, but is included for completeness.</li><li>  Note that any entry after an entry in which the first two parameters are equal to '\*' will never actually be used.</li><li></li><li>The tests are performed in order; if you wich to allow one IP address in a range, but reject all others, you should list the accepted IP addresses first. For example:</li><li>    ~~~</li><li>    {</li><li>       { 'X-Remote-Addr', '192.168.1.100',  false, true },  -- accept requests from 192.168.1.100</li><li>       { 'X-Remote-Addr', '^192%.168%.1%.', true,  false }, -- reject all others from the 192.168.1 subnet</li><li>       { '*',             '*',              '*',   true }   -- accept all other requests</li><li>    }</li><li>    ~~~</li><li></li><li>Most of the headers available are provided by the requesting web browser, so the exact headers available will vary.  You can find some information about common HTTP request headers at: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields.</li><li></li><li>The following headers are inserted automatically by `hs.httpserver` and are probably the most useful for use in an access list:</li><li>  X-Remote-Addr - the remote IPv4 or IPv6 address of the machine making the request,</li><li>  X-Remote-Port - the TCP port of the remote machine where the request originated.</li><li>  X-Server-Addr - the server IPv4 or IPv6 address that the web server received the request from.  For machines with multiple interfaces, this will allow you to determine which interface the request was received on.</li><li>  X-Server-Port - the TCP port of the web server that received the request.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1367](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1367) |

---


### [allowDirectory](#allowdirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:allowDirectory([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not a directory index is returned when the requested URL specifies a directory and no file matching an entry in the directory indexes table is found.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to false, indicating whether or not a directory index can be returned when a default file cannot be located.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>if this value is false, then an attempt to retrieve a URL specifying a directory that does not contain a default file as identified by one of the entries in the [hs.httpserver.hsminweb:directoryIndex](#directoryIndex) list will result in a "403.2" error.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1183](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1183) |

---


### [bonjour](#bonjour)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:bonjour([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not the web server should advertise itself via Bonjour when it is running.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to true, indicating whether or not the server should advertise itself via Bonjour when it is running.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>this flag can only be changed when the server is not running (i.e. the [hs.httpserver.hsminweb:start](#start) method has not yet been called, or the [hs.httpserver.hsminweb:stop](#stop) method is called first.)</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1156](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1156) |

---


### [cgiEnabled](#cgienabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:cgiEnabled([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not CGI file execution is enabled.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to false, indicating whether or not CGI script execution is enabled for the web server.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1277](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1277) |

---


### [cgiExtensions](#cgiextensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:cgiExtensions([table]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the file extensions which identify files which should be executed as CGI scripts to provide the results to an HTTP request.                                                                     |
| **Parameters**                              | <ul><li>table - an optional table or `nil`, defaults to `{ "cgi", "pl" }`, specifying a list of file extensions which indicate that a file should be executed as CGI scripts to provide the content for an HTTP request.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>this list is ignored if [hs.httpserver.hsminweb:cgiEnabled](#cgiEnabled) is not also set to true.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1297](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1297) |

---


### [directoryIndex](#directoryindex)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:directoryIndex([table]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the file names to look for when the requested URL specifies a directory.                                                                     |
| **Parameters**                              | <ul><li>table - an optional table or `nil`, defaults to `{ "index.html", "index.htm" }`, specifying a list of file names to look for when the requested URL specifies a directory.  If a file with one of the names is found in the directory, this file is served instead of the directory.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>Files listed in this table are checked in order, so the first matched is served.  If no file match occurs, then the server will return a generated list of the files in the directory, or a "403.2" error, depending upon the value controlled by [hs.httpserver.hsminweb:allowDirectory](#allowDirectory).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1254](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1254) |

---


### [dnsLookup](#dnslookup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:dnsLookup([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not DNS lookups are performed.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to false, indicating whether or not DNS lookups are performed.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>DNS lookups can be time consuming or even block Hammerspoon for a short time, so they are disabled by default.</li><li>Currently DNS lookups are (optionally) performed for CGI scripts, but may be added for other purposes in the future (logging, etc.).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1206](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1206) |

---


### [documentRoot](#documentroot)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:documentRoot([path]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the document root for the web server.                                                                     |
| **Parameters**                              | <ul><li>path - an optional string, default `os.getenv("HOME") .. "/Sites"`, specifying where documents for the web server should be served from.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1104](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1104) |

---


### [interface](#interface)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:interface([interface]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the network interface that the hsminweb web server will listen on                                                                     |
| **Parameters**                              | <ul><li>interface - an optional string, or nil, specifying the network interface the web server will listen on.  An explicit nil specifies that the web server should listen on all active interfaces for the machine.  Defaults to nil.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>See `hs.httpserver.setInterface` for a description of valid values that can be specified as the `interface` argument to this method.</li><li>the interface can only be specified before the hsminweb web server has been started.  If you wish to change the listening interface for a running web server, you must stop it with [hs.httpserver.hsminweb:stop](#stop) before invoking this method and then restart it with [hs.httpserver.hsminweb:start](#start).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1417](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1417) |

---


### [luaTemplateExtension](#luatemplateextension)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:luaTemplateExtension([string]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the extension of files which contain Lua code which should be executed within Hammerspoon to provide the results to an HTTP request.                                                                     |
| **Parameters**                              | <ul><li>string - an optional string or `nil`, defaults to `nil`, specifying the file extension which indicates that a file should be executed as Lua code within the Hammerspoon environment to provide the content for an HTTP request.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>This extension is checked after the extensions given to [hs.httpserver.hsminweb:cgiExtensions](#cgiExtensions); this means that if the same extension set by this method is also in the CGI extensions list, then the file will be interpreted as a CGI script and ignore this setting.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1320](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1320) |

---


### [maxBodySize](#maxbodysize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:maxBodySize([size]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the maximum body size for an HTTP request                                                                     |
| **Parameters**                              | <ul><li>size - An optional integer value specifying the maximum body size allowed for an incoming HTTP request in bytes.  Defaults to 10485760 (10 MB).</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>Because the Hammerspoon http server processes incoming requests completely in memory, this method puts a limit on the maximum size for a POST or PUT request.</li><li>If the request body exceeds this size, `hs.httpserver` will respond with a status code of 405 for the method before this module ever receives the request.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1075](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1075) |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:name([name]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the name the web server uses in Bonjour advertisement when the web server is running.                                                                     |
| **Parameters**                              | <ul><li>name - an optional string specifying the name the server advertises itself as when Bonjour is enabled and the web server is running.  Defaults to `nil`, which causes the server to be advertised with the computer's name as defined in the Sharing preferences panel for the computer.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1020](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1020) |

---


### [password](#password)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:password([password]) -> hsminwebTable | boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set a password for the hsminweb web server, or return a boolean indicating whether or not a password is currently set for the web server.                                                                     |
| **Parameters**                              | <ul><li>password - An optional string that contains the server password, or an explicit `nil` to remove an existing password.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or a boolean indicating whether or not a password has been set if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>the password, if set, is server wide and causes the server to use the Basic authentication scheme with an empty string for the username.</li><li>this module is an extension to the Hammerspoon core module `hs.httpserver`, so it has the same limitations regarding server passwords. See the documentation for `hs.httpserver.setPassword` (`help.hs.httpserver.setPassword` in the Hammerspoon console).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1045](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1045) |

---


### [port](#port)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:port([port]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the name the port the web server listens on                                                                     |
| **Parameters**                              | <ul><li>port - an optional integer specifying the TCP port the server listens for requests on when it is running.  Defaults to `nil`, which causes the server to randomly choose a port when it is started.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>due to security restrictions enforced by OS X, the port must be a number greater than 1023</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 992](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L992) |

---


### [queryLogging](#querylogging)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:queryLogging([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not requests to this web server are logged.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to false, indicating whether or not query requests are logged.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>If logging is enabled, an Apache common style log entry is appended to [self._accesslog](#_accessLog) for each request made to the web server.</li><li>Error messages during content generation are always logged to the Hammerspoon console via the `hs.logger` instance saved to [hs.httpserver.hsminweb.log](#log).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1230](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1230) |

---


### [scriptTimeout](#scripttimeout)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:scriptTimeout([integer]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the timeout for a CGI script                                                                     |
| **Parameters**                              | <ul><li>integer - an optional integer, defaults to 30, specifying the length of time in seconds a CGI script should be allowed to run before being forcibly terminated if it has not yet completed its task.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>With the current functionality available in `hs.httpserver`, any script which is expected to return content for an HTTP request must run in a blocking manner -- this means that no other Hammerspoon activity can be occurring while the script is executing.  This parameter lets you set the maximum amount of time such a script can hold things up before being terminated.</li><li>An alternative implementation of at least some of the methods available in `hs.httpserver` is being considered which may make it possible to use `hs.task` for these scripts, which would alleviate this blocking behavior.  However, even if this is addressed, a timeout for scripts is still desirable so that a client making a request doesn't sit around waiting forever if a script is malformed.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1343](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1343) |

---


### [ssl](#ssl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:ssl([flag]) -> hsminwebTable | current-value`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the whether or not the web server utilizes SSL for HTTP request and response communications.                                                                     |
| **Parameters**                              | <ul><li>flag - an optional boolean, defaults to false, indicating whether or not the server utilizes SSL for HTTP request and response traffic.</li></ul> |
| **Returns**                                 | <ul><li>the hsminwebTable object if a parameter is provided, or the current value if no parameter is specified.</li></ul>          |
| **Notes**                                   | <ul><li>this flag can only be changed when the server is not running (i.e. the [hs.httpserver.hsminweb:start](#start) method has not yet been called, or the [hs.httpserver.hsminweb:stop](#stop) method is called first.)</li><li>this module is an extension to the Hammerspoon core module `hs.httpserver`, so it has the same considerations regarding SSL. See the documentation for `hs.httpserver.new` (`help.hs.httpserver.new` in the Hammerspoon console).</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1128](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1128) |

---


### [start](#start)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:start() -> hsminwebTable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Start serving pages for the hsminweb web server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the hsminWebTable object</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1448](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1448) |

---


### [stop](#stop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.httpserver.hsminweb:stop() -> hsminwebTable`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Stop serving pages for the hsminweb web server.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the hsminWebTable object</li></ul>          |
| **Notes**                                   | <ul><li>this method is called automatically during garbage collection.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [extensions/httpserver/httpserver_hsminweb.lua line 1479](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/httpserver/httpserver_hsminweb.lua#L1479) |

---

