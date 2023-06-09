# cp.plist.archiver

Supports 'defrosting' a table which is made up from an 'NSKeyArchiver' record.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [isPlist](#isplist)
 * [unarchive](#unarchive)
 * [unarchiveBase64](#unarchivebase64)
 * [unarchiveFile](#unarchivefile)


---

## API Documentation

#### Functions


### [isPlist](#isplist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.archiver.isPlist(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the given `data` is a supported plist.                                                                     |
| **Parameters**                              | <ul><li>data - The data to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `data` is a supported plist, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/archiver.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/archiver.lua#L162){target="_blank"} |

---


### [unarchive](#unarchive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.archiver.unarchive(archive, defrostFn) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchives a LUA table which was archived into a plist using the NSKeyedArchiver.                                                                     |
| **Parameters**                              | <ul><li>`archive`		- the table containing the archive plist as a table</li><li>`defrostFn`	- (optional) a function which will be passed an object with a '$class' entry</li></ul> |
| **Returns**                                 | <ul><li>The unarchived plist table</li></ul>          |
| **Notes**                                   | <ul><li>A 'defrost' function can be provided, which will be called whenever a table with a '$class'</li><li>   structure is present. It will receive the table and the classname and should either return a modified value</li><li>   if the class was handled, or `nil` if it was unable to handle the class. Eg:</li><li></li><li>   ```</li><li>   local result = archiver.unarchive(archiveData, function(frozen, classname)</li><li>	   if classname == "XXMyClass" then</li><li>		   return MyClass:new(frozen.foo, frozen.bar)</li><li>	   end</li><li>		   return nil</li><li>   end)</li><li>   ```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/archiver.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/archiver.lua#L173){target="_blank"} |

---


### [unarchiveBase64](#unarchivebase64)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.archiver.unarchiveBase64(base64data, defrostFn) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchives a Base64 encoded `string` which was archived into a plist using the `NSKeyedArchiver`.                                                                     |
| **Parameters**                              | <ul><li>`base64data`	- the file containing the archive plist</li><li>`defrostFn`	- (optional) a function which will be passed an object with a `'$class'` entry</li></ul> |
| **Returns**                                 | <ul><li>The unarchived plist.</li></ul>          |
| **Notes**                                   | <ul><li>A 'defrost' function can be provided, which will be called whenever a table with a `'$class'`</li><li>   structure is present. It will receive the table and the classname and should either return a modified value</li><li>   if the class was handled, or `nil` if it was unable to handle the class. Eg:</li><li></li><li>   ```</li><li>   local result = archiver.unarchiveFile(filename, function(frozen, classname)</li><li>	   if classname == "XXMyClass" then</li><li>		   return MyClass:new(frozen.foo, frozen.bar)</li><li>	   end</li><li>		   return nil</li><li>   end)</li><li>   ```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/archiver.lua line 210](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/archiver.lua#L210){target="_blank"} |

---


### [unarchiveFile](#unarchivefile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.plist.archiver.unarchiveFile(filename, defrostFn) -> table | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unarchives a plist file which was archived into a plist using the NSKeyedArchiver.                                                                     |
| **Parameters**                              | <ul><li>`filename`	- the file containing the archive plist</li><li>`defrostFn`	- (optional) a function which will be passed an object with a '$class' entry</li></ul> |
| **Returns**                                 | <ul><li>The unarchived plist.</li></ul>          |
| **Notes**                                   | <ul><li>A 'defrost' function can be provided, which will be called whenever a table with a '$class'</li><li>   structure is present. It will receive the table and the classname and should either return a modified value</li><li>   if the class was handled, or `nil` if it was unable to handle the class. Eg:</li><li></li><li>   ```</li><li>   local result = archiver.unarchiveFile(filename, function(frozen, classname)</li><li>	   if classname == "XXMyClass" then</li><li>		   return MyClass:new(frozen.foo, frozen.bar)</li><li>	   end</li><li>		   return nil</li><li>   end)</li><li>   ```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/plist/archiver.lua line 243](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/plist/archiver.lua#L243){target="_blank"} |

---

