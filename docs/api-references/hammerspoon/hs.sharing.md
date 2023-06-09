# hs.sharing

Share items with the macOS Sharing Services under the control of Hammerspoon.

This module will allow you to share Hammerspoon items with registered Sharing Services.  Some of the built-in sharing services include sharing through mail, Facebook, AirDrop, etc.  Other applications can add additional services as well.

For most sharing services (this has not been tested with all), the user will be prompted with the standard sharing dialog showing what is to be shared and offered a chance to submit or cancel.

This example prepares an email with a screenshot:
~~~lua
mailer = hs.sharing.newShare("com.apple.share.Mail.compose")
mailer:subject("Screenshot generated at " .. os.date()):recipients({ "user@address.com" })
mailer:shareItems({ [[
    Add any notes that you wish to add describing the screenshot here and click the Send icon when you are ready to send this

]], hs.screen.mainScreen():snapshot() })
~~~

Common item data types that can be shared with Sharing Services include (but are not necessarily limited to):
 * basic data types like strings and numbers
 * hs.image objects
 * hs.styledtext objects
 * web sites and other URLs through the use of the [hs.sharing.URL](#URL) function
 * local files through the use of file URLs created with the [hs.sharing.fileURL](#fileURL) function

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [builtinSharingServices](#builtinsharingservices)

**Functions** - _API calls offered directly by the extension_
 * [fileURL](#fileurl)
 * [shareTypesFor](#sharetypesfor)
 * [URL](#url)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [newShare](#newshare)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [accountName](#accountname)
 * [alternateImage](#alternateimage)
 * [attachments](#attachments)
 * [callback](#callback)
 * [canShareItems](#canshareitems)
 * [image](#image)
 * [messageBody](#messagebody)
 * [permanentLink](#permanentlink)
 * [recipients](#recipients)
 * [serviceName](#servicename)
 * [shareItems](#shareitems)
 * [subject](#subject)
 * [title](#title)


---

## API Documentation

### Constants


### [builtinSharingServices](#builtinsharingservices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing.builtinSharingServices[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A table containing the predefined sharing service labels defined by Apple.                                                                     |

---
### Functions


### [fileURL](#fileurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing.fileURL(path) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table representing a file URL for the path specified.                                                                     |
| **Parameters**                              | <ul><li>path - a string specifying a path to represent as a file URL.</li></ul> |
| **Returns**                                 | <ul><li>a table containing the necessary labels for converting the specified path into a URL as required by the macOS APIs.</li></ul>          |
| **Notes**                                   | <ul><li>this function is a wrapper to [hs.sharing.URL](#URL) which sets the second argument to `true` for you.</li><li>see [hs.sharing.URL](#URL) for more information about the table format returned by this function.</li></ul>                |

---

### [shareTypesFor](#sharetypesfor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing.shareTypesFor(items) -> identifiersTable`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing the sharing service identifiers which can share the items specified.                                                                     |
| **Parameters**                              | <ul><li>items - an array (table) or list of items separated by commas which you wish to share with this module.</li></ul> |
| **Returns**                                 | <ul><li>an array (table) containing strings which identify sharing service identifiers which may be used by the [hs.sharing.newShare](#newShare) constructor to share the specified data.</li></ul>          |
| **Notes**                                   | <ul><li>this function is intended to be used to determine the identifiers for sharing services available on your computer and that may not be included in the [hs.sharing.builtinSharingServices](#builtinSharingServices) table.</li></ul>                |

---

### [URL](#url)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing.URL(URL, [fileURL]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table representing the URL specified.                                                                     |
| **Parameters**                              | <ul><li>URL     - a string or table specifying the URL.</li><li>fileURL - an optional boolean, default `false`, specifying whether or not the URL is supposed to represent a file on the local computer.</li></ul> |
| **Returns**                                 | <ul><li>a table containing the necessary labels for representing the specified URL as required by the macOS APIs.</li></ul>          |
| **Notes**                                   | <ul><li>If the URL is specified as a table, it is expected to contain a `url` key with a string value specifying a proper schema and resource locator.</li><li></li><li>Because macOS requires URLs to be represented as a specific object type which has no exact equivalent in Lua, Hammerspoon uses a table with specific keys to allow proper identification of a URL when included as an argument or result type.  Use this function or the [hs.sharing.fileURL](#fileURL) wrapper function when specifying a URL to ensure that the proper keys are defined.</li><li>At present, the following keys are defined for a URL table (additional keys may be added in the future if future Hammerspoon modules require them to more completely utilize the macOS NSURL class, but these will not change):</li><li>  url           - a string containing the URL with a proper schema and resource locator</li><li>  filePath      = a string specifying the actual path to the file in case the url is a file reference URL.  Note that setting this field with this method will be silently ignored; the field is automatically inserted if appropriate when returning an NSURL object to lua.</li><li>  __luaSkinType - a string specifying the macOS type this table represents when converted into an Objective-C type</li></ul>                |

---
### Constructors


### [newShare](#newshare)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing.newShare(type) -> sharingObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new sharing object of the type specified by the identifier provided.                                                                     |
| **Parameters**                              | <ul><li>type - a string specifying a sharing type identifier as listed in the [hs.sharing.builtinSharingServices](#builtinSharingServices) table or returned by the [hs.sharing.shareTypesFor](#shareTypesFor).</li></ul> |
| **Returns**                                 | <ul><li>a sharingObject or nil if the type identifier cannot be created on this system</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [accountName](#accountname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:accountName() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The account name used by the sharing service when posting on Twitter or Sina Weibo.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the account name used by the sharing service, or nil if the sharing service does not provide this.</li></ul>          |
| **Notes**                                   | <ul><li>According to the Apple API documentation, only the Twitter and Sina Weibo sharing services will set this property, but this has not been fully tested.</li></ul>                |

---

### [alternateImage](#alternateimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:alternateImage() -> hs.image object | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an alternate image, if one exists, representing the sharing service provided by this sharing object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an hs.image object or nil, if no alternate image representation for the sharing service is defined.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [attachments](#attachments)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:attachments() -> table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the sharing service provides an array of the attachments included when the data was posted, this method will return an array of file URL tables of the attachments.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an array (table) containing the attachment file URLs, or nil if the sharing service selected does not provide this.</li></ul>          |
| **Notes**                                   | <ul><li>not all sharing services will set a value for this property.</li></ul>                |

---

### [callback](#callback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:callback(fn) -> sharingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Set or clear the callback for the sharingObject.                                                                     |
| **Parameters**                              | <ul><li>fn - A function, or nil, to set or remove the callback for the sharingObject</li></ul> |
| **Returns**                                 | <ul><li>the sharingObject</li></ul>          |
| **Notes**                                   | <ul><li>the callback should expect 3 or 4 arguments and return no results.  The arguments will be as follows:</li><li>  the sharingObject itself</li><li>  the callback message, which will be a string equal to one of the following:</li><li>    "didFail"   - an error occurred while attempting to share the items</li><li>    "didShare"  - the sharing service has finished sharing the items</li><li>    "willShare" - the sharing service is about to start sharing the items; occurs before sharing actually begins</li><li>  an array (table) containing the items being shared; if the message is "didFail" or "didShare", the items may be in a different order or converted to a different internal type to facilitate sharing.</li><li>  if the message is "didFail", the fourth argument will be a localized description of the error that occurred.</li></ul>                |

---

### [canShareItems](#canshareitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:canShareItems(items) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a boolean specifying whether or not all of the items specified can be shared with the sharing service represented by the sharingObject.                                                                     |
| **Parameters**                              | <ul><li>items - an array (table) or list of items separated by commas which are to be shared by the sharing service</li></ul> |
| **Returns**                                 | <ul><li>a boolean value indicating whether or not all of the specified items can be shared with the sharing service represented by the sharingObject.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [image](#image)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:image() -> hs.image object | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an image, if one exists, representing the sharing service provided by this sharing object.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an hs.image object or nil, if no image representation for the sharing service is defined.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [messageBody](#messagebody)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:messageBody() -> string | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the sharing service provides the message body that was posted when sharing has completed, this method will return the message body as a string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the message body, or nil if the sharing service selected does not provide this.</li></ul>          |
| **Notes**                                   | <ul><li>not all sharing services will set a value for this property.</li></ul>                |

---

### [permanentLink](#permanentlink)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:permanentLink() -> URL table | nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | If the sharing service provides a permanent link to the post when sharing has completed, this method will return the corresponding URL.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the URL for the permanent link, or nil if the sharing service selected does not provide this.</li></ul>          |
| **Notes**                                   | <ul><li>not all sharing services will set a value for this property.</li></ul>                |

---

### [recipients](#recipients)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:recipients([recipients]) -> current value | sharingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the subject to be used when the sharing service performs its sharing method.                                                                     |
| **Parameters**                              | <ul><li>recipients - an optional array (table) or list of recipient strings separated by commas which specify the recipients of the shared items.</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the sharingObject; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>not all sharing services will make use of the value set by this method.</li><li>the individual recipients should be specified as strings in the format expected by the sharing service; e.g. for items being shared in an email, the recipients should be email address, etc.</li></ul>                |

---

### [serviceName](#servicename)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:serviceName() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The service identifier for the sharing service represented by the sharingObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the identifier for the sharing service.</li></ul>          |
| **Notes**                                   | <ul><li>this string will match the identifier used to create the sharing service object with [hs.sharing.newShare](#newShare)</li></ul>                |

---

### [shareItems](#shareitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:shareItems(items) -> sharingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shares the items specified with the sharing service represented by the sharingObject.                                                                     |
| **Parameters**                              | <ul><li>items - an array (table) or list of items separated by commas which are to be shared by the sharing service</li></ul> |
| **Returns**                                 | <ul><li>the sharingObject, or nil if one or more of the items cannot be shared with the sharing service represented by the sharingObject.</li></ul>          |
| **Notes**                                   | <ul><li>You can check to see if all of your items can be shared with the [hs.sharing:canShareItems](#canShareItems) method.</li></ul>                |

---

### [subject](#subject)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:subject([subject]) -> current value | sharingObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the subject to be used when the sharing service performs its sharing method.                                                                     |
| **Parameters**                              | <ul><li>subject - an optional string specifying the subject for the posting of the shared content</li></ul> |
| **Returns**                                 | <ul><li>if an argument is provided, returns the sharingObject; otherwise returns the current value.</li></ul>          |
| **Notes**                                   | <ul><li>not all sharing services will make use of the value set by this method.</li></ul>                |

---

### [title](#title)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.sharing:title() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The title for the sharing service represented by the sharingObject.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string containing the title of the sharing service.</li></ul>          |
| **Notes**                                   | <ul><li>this string differs from the identifier used to create the sharing service object with [hs.sharing.newShare](#newShare) and is intended to provide a more friendly label for the service if you need to list or refer to it elsewhere.</li></ul>                |

---
