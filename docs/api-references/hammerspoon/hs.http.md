# hs.http

Perform HTTP requests

---

## API Overview
**Variables** - _Configurable values_
 * [htmlEntities](#htmlentities)

**Functions** - _API calls offered directly by the extension_
 * [asyncGet](#asyncget)
 * [asyncPost](#asyncpost)
 * [asyncPut](#asyncput)
 * [convertHtmlEntities](#converthtmlentities)
 * [doAsyncRequest](#doasyncrequest)
 * [doRequest](#dorequest)
 * [encodeForQuery](#encodeforquery)
 * [get](#get)
 * [post](#post)
 * [put](#put)
 * [registerEntity](#registerentity)
 * [urlParts](#urlparts)


---

## API Documentation

#### Variables


### [htmlEntities](#htmlentities)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.htmlEntities[]`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A collection of common HTML Entities (&whatever;) and their UTF8 equivalents.  To retrieve the UTF8 sequence for a given entity, reference the table as `hs.http.htmlEntities["&key;"]` where `key` is the text of the entity's name or a numeric reference like `#number`.                                                                     |
| **Notes**                                   | <ul><li>This list is likely not complete.  It is based on the list of common entities described at http://www.freeformatter.com/html-entities.html.</li><li>Additional entities can be temporarily added via the `hs.http.registerEntity(...)` function.  If you feel you have a more official list of entities which contains items which are currently not included by default, please open up an issue at https://github.com/Hammerspoon/hammerspoon and your link will be considered.</li><li>To see a list of the currently defined entities, a __tostring meta-method is included so that referencing the table directly as a string will return the current definitions.</li><li>  For reference, this meta-method is essentially the following:</li><li></li><li>     for i,v in hs.fnutils.sortByKeys(hs.http.htmlEntities) do print(string.format("%-10s %-10s %s\n", i, "&#"..tostring(hs.utf8.codepoint(v))..";", v)) end</li><li></li><li>  Note that this list will not include the numeric conversion of entities (e.g. &#65;), as this is handled by an __index metamethod to allow for all possible numeric values.</li></ul> |
| **Source**                                  | [extensions/http/http.lua line 144](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L144){target="_blank"} |

---

#### Functions


### [asyncGet](#asyncget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.asyncGet(url, headers, callback)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP GET request asynchronously                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to retrieve</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li><li>callback - A function to be called when the request succeeds or fails. The function will be passed three parameters:
  A number containing the HTTP response status
  A string containing the response body
  A table containing the response headers</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>If the request fails, the callback function's first parameter will be negative and the second parameter will contain an error message. The third parameter will be nil</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 76](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L76){target="_blank"} |

---


### [asyncPost](#asyncpost)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.asyncPost(url, data, headers, callback)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP POST request asynchronously                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to submit to</li><li>data - A string containing the request body, or nil to send no body</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li><li>callback - A function to be called when the request succeeds or fails. The function will be passed three parameters:
  A number containing the HTTP response status
  A string containing the response body
  A table containing the response headers</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>If the request fails, the callback function's first parameter will be negative and the second parameter will contain an error message. The third parameter will be nil</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 98](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L98){target="_blank"} |

---


### [asyncPut](#asyncput)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.asyncPut(url, data, headers, callback)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP PUT request asynchronously                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to submit to</li><li>data - A string containing the request body, or nil to send no body</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li><li>callback - A function to be called when the request succeeds or fails. The function will be passed three parameters:
  A number containing the HTTP response status
  A string containing the response body
  A table containing the response headers</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>If the request fails, the callback function's first parameter will be negative and the second parameter will contain an error message. The third parameter will be nil</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 121](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L121){target="_blank"} |

---


### [convertHtmlEntities](#converthtmlentities)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.convertHtmlEntities(inString) -> outString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Convert all recognized HTML Entities in the `inString` to appropriate UTF8 byte sequences and returns the converted text.                                                                     |
| **Parameters**                              | <ul><li>inString -- A string containing any number of HTML Entities (&whatever;) in the text.</li></ul> |
| **Returns**                                 | <ul><li>outString -- the input string with all recognized HTML Entity sequences converted to UTF8 byte sequences.</li></ul>          |
| **Notes**                                   | <ul><li>Recognized HTML Entities are those registered in `hs.http.htmlEntities` or numeric entity sequences: &#n; where `n` can be any integer number.</li><li>This function is especially useful as a post-filter to data retrieved by the `hs.http.get` and `hs.http.asyncGet` functions.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 444](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L444){target="_blank"} |

---


### [doAsyncRequest](#doasyncrequest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.doAsyncRequest(url, method, data, headers, callback, [cachePolicy|enableRedirect])`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates an HTTP request and executes it asynchronously                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL</li><li>method - A string containing the HTTP method to use (e.g. "GET", "POST", etc)</li><li>data - A string containing the request body, or nil to send no body</li><li>headers - A table containing string keys and values representing request header keys and values, or nil to add no headers</li><li>callback - A function to called when the response is received. The function should accept three arguments:
  code - A number containing the HTTP response code
  body - A string containing the body of the response
  headers - A table containing the HTTP headers of the response</li><li>cachePolicy - An optional string containing the cache policy ("protocolCachePolicy", "ignoreLocalCache", "ignoreLocalAndRemoteCache", "returnCacheOrLoad", "returnCacheDontLoad" or "reloadRevalidatingCache"). Defaults to `protocolCachePolicy`.</li><li>enableRedirect - An optional boolean to indicate whether to redirect the http request. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>If the Content-Type response header begins `text/` then the response body return value is a UTF8 string. Any other content type passes the response body, unaltered, as a stream of bytes.</li><li>If enableRedirect is set to true, response body will be empty string. Http body will be dropped even though response has the body. This seems the limitation of 'connection:willSendRequest:redirectResponse' method.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/libhttp.m line 201](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/libhttp.m#L201){target="_blank"} |

---


### [doRequest](#dorequest)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.doRequest(url, method, [data, headers, cachePolicy]) -> int, string, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates an HTTP request and executes it synchronously                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL</li><li>method - A string containing the HTTP method to use (e.g. "GET", "POST", etc)</li><li>data - An optional string containing the data to POST to the URL, or nil to send no data</li><li>headers - An optional table of string keys and values used as headers for the request, or nil to add no headers</li><li>cachePolicy - An optional string containing the cache policy ("protocolCachePolicy", "ignoreLocalCache", "ignoreLocalAndRemoteCache", "returnCacheOrLoad", "returnCacheDontLoad" or "reloadRevalidatingCache"). Defaults to `protocolCachePolicy`.</li></ul> |
| **Returns**                                 | <ul><li>A number containing the HTTP response status code</li><li>A string containing the response body</li><li>A table containing the response headers</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li></li><li>This function is synchronous and will therefore block all Lua execution until it completes. You are encouraged to use the asynchronous functions.</li><li>If you attempt to connect to a local Hammerspoon server created with `hs.httpserver`, then Hammerspoon will block until the connection times out (60 seconds), return a failed result due to the timeout, and then the `hs.httpserver` callback function will be invoked (so any side effects of the function will occur, but it's results will be lost).  Use [hs.http.doAsyncRequest](#doAsyncRequest) to avoid this.</li><li>If the Content-Type response header begins `text/` then the response body return value is a UTF8 string. Any other content type passes the response body, unaltered, as a stream of bytes.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/libhttp.m line 264](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/libhttp.m#L264){target="_blank"} |

---


### [encodeForQuery](#encodeforquery)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.encodeForQuery(string) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a copy of the provided string in which characters that are not valid within an HTTP query key or value are escaped with their %## equivalent.                                                                     |
| **Parameters**                              | <ul><li>originalString - the string to make safe as a key or value for a query</li></ul> |
| **Returns**                                 | <ul><li>the converted string</li></ul>          |
| **Notes**                                   | <ul><li>The intent of this function is to provide a valid key or a valid value for a query string, not to validate the entire query string.  For this reason, ?, =, +, and & are included in the converted characters.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 461](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L461){target="_blank"} |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.get(url, headers) -> int, string, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP GET request to a URL                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to retrieve</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li></ul> |
| **Returns**                                 | <ul><li>A number containing the HTTP response status</li><li>A string containing the response body</li><li>A table containing the response headers</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>This function is synchronous and will therefore block all other Lua execution while the request is in progress, you are encouraged to use the asynchronous functions</li><li>If you attempt to connect to a local Hammerspoon server created with `hs.httpserver`, then Hammerspoon will block until the connection times out (60 seconds), return a failed result due to the timeout, and then the `hs.httpserver` callback function will be invoked (so any side effects of the function will occur, but it's results will be lost).  Use [hs.http.asyncGet](#asyncGet) to avoid this.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 11](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L11){target="_blank"} |

---


### [post](#post)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.post(url, data, headers) -> int, string, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP POST request to a URL                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to submit to</li><li>data - A string containing the request body, or nil to send no body</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li></ul> |
| **Returns**                                 | <ul><li>A number containing the HTTP response status</li><li>A string containing the response body</li><li>A table containing the response headers</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>This function is synchronous and will therefore block all other Lua execution while the request is in progress, you are encouraged to use the asynchronous functions</li><li>If you attempt to connect to a local Hammerspoon server created with `hs.httpserver`, then Hammerspoon will block until the connection times out (60 seconds), return a failed result due to the timeout, and then the `hs.httpserver` callback function will be invoked (so any side effects of the function will occur, but it's results will be lost).  Use [hs.http.asyncPost](#asyncPost) to avoid this.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 32](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L32){target="_blank"} |

---


### [put](#put)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.put(url, data, headers) -> int, string, table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sends an HTTP PUT request to a URL                                                                     |
| **Parameters**                              | <ul><li>url - A string containing the URL to submit to</li><li>data - A string containing the request body, or nil to send no body</li><li>headers - A table containing string keys and values representing the request headers, or nil to add no headers</li></ul> |
| **Returns**                                 | <ul><li>A number containing the HTTP response status</li><li>A string containing the response body</li><li>A table containing the response headers</li></ul>          |
| **Notes**                                   | <ul><li>If authentication is required in order to download the request, the required credentials must be specified as part of the URL (e.g. "http://user:password@host.com/"). If authentication fails, or credentials are missing, the connection will attempt to continue without credentials.</li><li>This function is synchronous and will therefore block all other Lua execution while the request is in progress, you are encouraged to use the asynchronous functions</li><li>If you attempt to connect to a local Hammerspoon server created with `hs.httpserver`, then Hammerspoon will block until the connection times out (60 seconds), return a failed result due to the timeout, and then the `hs.httpserver` callback function will be invoked (so any side effects of the function will occur, but it's results will be lost).  Use [hs.http.asyncPost](#asyncPost) to avoid this.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 54](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L54){target="_blank"} |

---


### [registerEntity](#registerentity)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.registerEntity(entity, codepoint) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers an HTML Entity with the specified Unicode codepoint which can later referenced in your code as `hs.http.htmlEntity[entity]` for convenience and readability.                                                                     |
| **Parameters**                              | <ul><li>entity -- The full text of the HTML Entity as it appears in HTML encoded documents.  A proper entity starts with & and ends with ; and entity labels which do not meet this will have them added -- future dereferences to get the corresponding UTF8 *must* include this initiator and terminator or they will not be recognized.</li><li>codepoint -- a Unicode codepoint in numeric or `U+xxxx` format to register with as the given entity.</li></ul> |
| **Returns**                                 | <ul><li>Returns the UTF8 byte sequence for the entity registered.</li></ul>          |
| **Notes**                                   | <ul><li>If an entity label was previously registered, this will overwrite the previous value with a new one.</li><li>The return value is merely syntactic sugar and you do not need to save it locally; it can be safely ignored -- future access to the pre-converted entity should be retrieved as `hs.http.htmlEntities[entity]` in your code.  It looks good when invoked from the console, though ☺.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/http.lua line 419](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/http.lua#L419){target="_blank"} |

---


### [urlParts](#urlparts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.http.urlParts(url) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table of keys containing the individual components of the provided url.                                                                     |
| **Parameters**                              | <ul><li>url - the url to parse into it's individual components</li></ul> |
| **Returns**                                 | <ul><li>a table containing any of the following keys which apply to the specified url:</li><li>  absoluteString           - The URL string for the URL as an absolute URL.</li><li>  absoluteURL              - An absolute URL that refers to the same resource as the provided URL.</li><li>  baseURL                  - the base URL, if the URL is relative</li><li>  fileSystemRepresentation - the URL’s unescaped path specified as a file system path</li><li>  fragment                 - the fragment, if specified in the URL</li><li>  host                     - the host for the URL</li><li>  isFileURL                - a boolean value indicating whether or not the URL represents a local file</li><li>  lastPathComponent        - the last path component specified in the URL</li><li>  parameterString          - the parameter string, if specified in the URL</li><li>  password                 - the password, if specified in the URL</li><li>  path                     - the unescaped path specified in the URL</li><li>  pathComponents           - an array containing the path components of the URL</li><li>  pathExtension            - the file extension, if specified in the URL</li><li>  port                     - the port, if specified in the URL</li><li>  query                    - the query, if specified in the URL</li><li>  queryItems               - if the URL contains a query string, then this field contains an array of the unescaped key-value pairs for each item. Each key-value pair is represented as a table in the array to preserve order.  See notes for more information.</li><li>  relativePath             - the relative path of the URL without resolving against its base URL. If the path has a trailing slash it is stripped. If the URL is already an absolute URL, this contains the same value as path.</li><li>  relativeString           - a string representation of the relative portion of the URL. If the URL is already an absolute URL this contains the same value as absoluteString.</li><li>  resourceSpecifier        - the resource specified in the URL</li><li>  scheme                   - the scheme of the URL</li><li>  standardizedURL          - the URL with any instances of ".." or "." removed from its path</li><li>  user                     - the username, if specified in the URL</li></ul>          |
| **Notes**                                   | <ul><li>This function assumes that the URL conforms to RFC 1808.  If the URL is malformed or does not conform to RFC1808, then many of these fields may be missing.</li><li></li><li>A contrived example for the url `http://user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment`:</li><li></li><li>    > hs.inspect(hs.http.urlParts("http://user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment"))</li><li>     {</li><li>       absoluteString = "http://user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment",</li><li>       absoluteURL = "http://user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment",</li><li>       fileSystemRepresentation = "/path/to a/../file.txt",</li><li>       fragment = "fragment",</li><li>       host = "host.site.com",</li><li>       isFileURL = false,</li><li>       lastPathComponent = "file.txt",</li><li>       parameterString = "parameter",</li><li>       password = "password",</li><li>       path = "/path/to a/../file.txt",</li><li>       pathComponents = { "/", "path", "to a", "..", "file.txt" },</li><li>       pathExtension = "txt",</li><li>       port = 80,</li><li>       query = "query1=1&query2=a%28",</li><li>       queryItems = { {</li><li>           query1 = "1"</li><li>         }, {</li><li>           query2 = "a("</li><li>         } },</li><li>       relativePath = "/path/to a/../file.txt",</li><li>       relativeString = "http://user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment",</li><li>       resourceSpecifier = "//user:password@host.site.com:80/path/to%20a/../file.txt;parameter?query1=1&query2=a%28#fragment",</li><li>       scheme = "http",</li><li>       standardizedURL = "http://user:password@host.site.com:80/path/file.txt;parameter?query1=1&query2=a%28#fragment",</li><li>       user = "user"</li><li>     }</li><li></li><li>Because it is valid for a query key-value pair to be missing either the key or the value or both, the following conventions are used:</li><li>  a missing key (e.g. '=value') will be represented as { "" = value }</li><li>  a missing value (e.g. 'key=') will be represented as { key = "" }</li><li>  a missing value with no = (e.g. 'key') will be represented as { key }</li><li>  a missing key and value (e.g. '=') will be represented as { "" = "" }</li><li>  an empty query item (e.g. a query ending in '&' or a query containing && between two other query items) will be represented as { "" }</li><li></li><li>At present Hammerspoon does not provide a way to represent a URL as a true Objective-C object within the OS X API.  This affects the following keys:</li><li>  relative URLs are not possible to express properly so baseURL will always be nil and relativePath and relativeString will always match path and absoluteString.</li><li>  These limitations may change in a future update if the need for a more fully compliant URL treatment is determined to be necessary.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/http/libhttp.m line 332](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/http/libhttp.m#L332){target="_blank"} |

---

