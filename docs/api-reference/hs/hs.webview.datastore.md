# [docs](index.md) » hs.webview.datastore
---

Provides methods to list and purge the various types of data used by websites visited with `hs.webview`.

This module is only available under OS X 10.11 and later.

This module allows you to list and selectively purge the types of data stored locally for the websites visited with the `hs.webview` module.  It also adds support for non-persistent datastores to `hs.webview` (private browsing) and allows a non-persistent datastore to be shared among multiple instances of `hs.webview` objects.

The datastore for a webview contains various types of data including cookies, disk and memory caches, and persistent data such as WebSQL, IndexedDB databases, and local storage.  You can use methods in this module to selectively or completely purge the common datastore (used by all Hammerspoon `hs.webview` instances that do not use a non-persistent datastore).

## API Overview
* Functions - API calls offered directly by the extension
 * [websiteDataTypes](#websiteDataTypes)
* Constructors - API calls which return an object, typically one that offers API methods
 * [default](#default)
 * [fromWebview](#fromWebview)
 * [newPrivate](#newPrivate)
* Methods - API calls which can only be made on an object returned by a constructor
 * [fetchRecords](#fetchRecords)
 * [persistent](#persistent)
 * [removeRecordsAfter](#removeRecordsAfter)
 * [removeRecordsFor](#removeRecordsFor)

## API Documentation

### Functions

| [websiteDataTypes](#websiteDataTypes)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore.websiteDataTypes() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a list of the currently available data types within a datastore.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a list of strings where each string is a specific data type stored in a datastore.</li></ul>          |
| **Notes**                                   | <ul><li>As of the writing of this module, the following data types are defined and returned by this function:</li><li>  `WKWebsiteDataTypeDiskCache`                  - On-disk caches.</li><li>  `WKWebsiteDataTypeOfflineWebApplicationCache` - HTML offline web application caches.</li><li>  `WKWebsiteDataTypeMemoryCache`                - In-memory caches.</li><li>  `WKWebsiteDataTypeLocalStorage`               - HTML local storage.</li><li>  `WKWebsiteDataTypeCookies`                    - Cookies.</li><li>  `WKWebsiteDataTypeSessionStorage`             - HTML session storage.</li><li>  `WKWebsiteDataTypeIndexedDBDatabases`         - WebSQL databases.</li><li>  `WKWebsiteDataTypeWebSQLDatabases`            - IndexedDB databases.</li></ul>                |

### Constructors

| [default](#default)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore.default() -> datastoreObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an object representing the default datastore for Hammerspoon `hs.webview` instances.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a datastoreObject</li></ul>          |
| **Notes**                                   | <ul><li>this is the datastore used unless otherwise specified when creating an `hs.webview` instance.</li></ul>                |

| [fromWebview](#fromWebview)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore.fromWebview(webview) -> datastoreObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an object representing the datastore for the specified `hs.webview` instance.                                                                     |
| **Parameters**                              | <ul><li>`webview` - an `hs.webview` instance (webviewObject)</li></ul> |
| **Returns**                                 | <ul><li>a datastoreObject</li></ul>          |
| **Notes**                                   | <ul><li>When running on a system with OS X 10.11 or later, this method will also be added to the metatable for `hs.webview` objects so that you can retrieve a webview's datastore with `hs.webview:datastore()`.</li><li></li><li>This method can be used to identify the datastore in use for a webview if you wish to create a new instance using the same datastore.</li></ul>                |

| [newPrivate](#newPrivate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore.newPrivate() -> datastoreObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns an object representing a newly created non-persistent (private) datastore for use with a Hammerspoon `hs.webview` instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a datastoreObject</li></ul>          |
| **Notes**                                   | <ul><li>The datastore represented by this object will be initially empty.  You can use this function to create a non-persistent datastore that you wish to share among multiple `hs.webview` instances.  Once a datastore is created, you assign it to a `hs.webview` instance by including the `datastore` key in the `hs.webview.new` constructor's preferences table and setting it equal to this key.  All webview instances created with this datastore object will share web caches, cookies, etc. but will still be isolated from the default datastore and it will be purged from memory when the webviews are deleted, or Hammerspoon is restarted.</li><li></li><li>Using the `datastore` key in the webview's constructor differs from the `private` key -- use of the `private` key will override the `datastore` key and will create a separate non-persistent datastore for the webview instance.  See `hs.webview.new` for more information.</li></ul>                |

### Methods

| [fetchRecords](#fetchRecords)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore:fetchRecords([dataTypes], callback) -> datastoreObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates a list of the datastore records of the specified type, and invokes the callback function with the list.                                                                     |
| **Parameters**                              | <ul><li>`dataTypes` - an optional string or table specifying the data types to fetch from the datastore.  If this parameter is not specified, it defaults to the list returned by [hs.webview.datastore.websiteDataTypes](#websiteDataTypes).</li><li>`callback`  - a function which accepts as it's argument an array-table containing tables with the following key-value pairs:
  `displayName` - a string containing the site's display name.  Typically, the display name is the domain name with suffix taken from the resource’s security origin (website name).
  `dataTypes`   - a table containing strings representing the types of data stored for the website specified by `displayName`.</li></ul> |
| **Returns**                                 | <ul><li>the datastore object</li></ul>          |
| **Notes**                                   | <ul><li>only those sites with one or more of the specified data types are returned</li><li>for the sites returned, only those data types that were present in the query will be included in the list, even if the site has data of another type in the datastore.</li></ul>                |

| [persistent](#persistent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore:persistent() -> bool`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns whether or not the datastore is persistent.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a boolean value indicating whether or not the datastore is persistent (true) or private (false)</li></ul>          |
| **Notes**                                   | <ul><li>Note that this value is the inverse of `hs.webview:privateBrowsing()`, since private browsing uses a non-persistent datastore.</li></ul>                |

| [removeRecordsAfter](#removeRecordsAfter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore:removeRecordsAfter(date, dataTypes, [callback]) -> datastoreObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Removes the specified types of data from the datastore if the data was added or changed since the given date.                                                                     |
| **Parameters**                              | <ul><li>`date`         - an integer representing seconds since `1970-01-01 00:00:00 +0000` (e.g. `os.time()`), or a string containing a date in RFC3339 format (`YYYY-MM-DD[T]HH:MM:SS[Z]`).</li><li>`dataTypes`    - a string or array of strings specifying the types of data to remove from the datastore for the specified sites.</li><li>`callback`     - an optional function, which should expect no arguments, that will be called when the specified items have been removed from the datastore.</li></ul> |
| **Returns**                                 | <ul><li>the datastore object</li></ul>          |
| **Notes**                                   | <ul><li>Yes, you read the description correctly -- removes data *newer* then the date specified.  I've not yet found a way to remove data *older* then the date specified (to expire old data, for example) but updates or suggestions are welcome in the Hammerspoon Google group or GitHub web site.</li><li></li><li>to specify that all data types that qualify should be removed, specify the function  [hs.webview.datastore.websiteDataTypes()](#websiteDataTypes). as the second argument.</li><li></li><li>For example, to purge the Hammerspoon default datastore of all data, you can do the following:</li><li>~~~</li><li>hs.webview.datastore.default():removeRecordsAfter(0, hs.webview.datastore.websiteDataTypes())</li><li>~~~</li></ul>                |

| [removeRecordsFor](#removeRecordsFor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.webview.datastore:removeRecordsFor(displayNames, dataTypes, [callback]) -> datastoreObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Remove data from the datastore of the specified type(s) for the specified site(s).                                                                     |
| **Parameters**                              | <ul><li>`displayNames` - a string or array of strings specifying the display names (sites) to remove records for.</li><li>`dataTypes`    - a string or array of strings specifying the types of data to remove from the datastore for the specified sites.</li><li>`callback`     - an optional function, which should expect no arguments, that will be called when the specified items have been removed from the datastore.</li></ul> |
| **Returns**                                 | <ul><li>the datastore object</li></ul>          |
| **Notes**                                   | <ul><li>to specify that all data types that qualify should be removed, specify the function  [hs.webview.datastore.websiteDataTypes()](#websiteDataTypes). as the second argument.</li></ul>                |

