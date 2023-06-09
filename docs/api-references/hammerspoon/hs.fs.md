# hs.fs

Access/inspect the filesystem

This module is partial superset of LuaFileSystem 1.8.0 (http://keplerproject.github.io/luafilesystem/). It has been modified to remove functions which do not apply to macOS filesystems and additional functions providing macOS specific filesystem information have been added.

## Submodules
 * [hs.fs.volume](hs.fs.volume.md)
 * [hs.fs.xattr](hs.fs.xattr.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [attributes](#attributes)
 * [chdir](#chdir)
 * [currentDir](#currentdir)
 * [dir](#dir)
 * [displayName](#displayname)
 * [fileUTI](#fileuti)
 * [fileUTIalternate](#fileutialternate)
 * [getFinderComments](#getfindercomments)
 * [link](#link)
 * [lock](#lock)
 * [lockDir](#lockdir)
 * [mkdir](#mkdir)
 * [pathFromBookmark](#pathfrombookmark)
 * [pathToAbsolute](#pathtoabsolute)
 * [pathToBookmark](#pathtobookmark)
 * [rmdir](#rmdir)
 * [setFinderComments](#setfindercomments)
 * [symlinkAttributes](#symlinkattributes)
 * [tagsAdd](#tagsadd)
 * [tagsGet](#tagsget)
 * [tagsRemove](#tagsremove)
 * [tagsSet](#tagsset)
 * [temporaryDirectory](#temporarydirectory)
 * [touch](#touch)
 * [unlock](#unlock)
 * [urlFromPath](#urlfrompath)

## API Documentation

### Functions


### [attributes](#attributes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.attributes(filepath [, aName]) -> table or string or nil,error`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the attributes of a file                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file to inspect</li><li>aName - An optional attribute name. If this value is specified, only the attribute requested, is returned</li></ul> |
| **Returns**                                 | <ul><li>A table with the file attributes corresponding to filepath (or nil followed by an error message in case of error). If the second optional argument is given, then a string is returned with the value of the named attribute. attribute mode is a string, all the others are numbers, and the time related attributes use the same time reference of os.time:</li><li> dev - A number containing the device the file resides on</li><li> ino - A number containing the inode of the file</li><li> mode - A string containing the type of the file (possible values are: file, directory, link, socket, named pipe, char device, block device or other)</li><li> nlink - A number containing a count of hard links to the file</li><li> uid - A number containing the user-id of owner</li><li> gid - A number containing the group-id of owner</li><li> rdev - A number containing the type of device, for files that are char/block devices</li><li> access - A number containing the time of last access modification (as seconds since the UNIX epoch)</li><li> change - A number containing the time of last file status change (as seconds since the UNIX epoch)</li><li> modification - A number containing the time of the last file contents change (as seconds since the UNIX epoch)</li><li> permissions - A 9 character string specifying the user access permissions for the file. The first three characters represent Read/Write/Execute permissions for the file owner. The first character will be "r" if the user has read permissions, "-" if they do not; the second will be "w" if they have write permissions, "-" if they do not; the third will be "x" if they have execute permissions, "-" if they do not. The second group of three characters follow the same convention, but refer to whether or not the file's group have Read/Write/Execute permissions, and the final three characters follow the same convention, but apply to other system users not covered by the Owner or Group fields.</li><li> creation - A number containing the time the file was created (as seconds since the UNIX epoch)</li><li> size - A number containing the file size, in bytes</li><li> blocks - A number containing the number of blocks allocated for file</li><li> blksize - A number containing the optimal file system I/O blocksize</li></ul>          |
| **Notes**                                   | <ul><li>This function uses `stat()` internally thus if the given filepath is a symbolic link, it is followed (if it points to another link the chain is followed recursively) and the information is about the file it refers to. To obtain information about the link itself, see function `hs.fs.symlinkAttributes()`</li></ul>                |

---

### [chdir](#chdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.chdir(path) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Changes the current working directory to the given path.                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the path to change working directory to</li></ul> |
| **Returns**                                 | <ul><li>If successful, returns true, otherwise returns nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [currentDir](#currentdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.currentDir() -> string or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the current working directory                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the current working directory, or if an error occurred, nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [dir](#dir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.dir(path) -> iter_fn, dir_obj, nil, dir_obj`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates an iterator for walking a filesystem path                                                                     |
| **Parameters**                              | <ul><li>path - A string containing a directory to iterate</li></ul> |
| **Returns**                                 | <ul><li>An iterator function</li><li>A data object to pass to the iterator function or an error message as a string</li><li>`nil` as the initial argument for the iterator (unused and unnecessary in this case, but conforms to Lua spec for iterators). Ignore this value if you are not using this function with `for` (see Notes).</li><li>A second data object used by `for` to close the directory object immediately when the loop terminates. Ignore this value if you are not using this function with `for` (see Notes).</li></ul>          |
| **Notes**                                   | <ul><li>Unlike most functions in this module, `hs.fs.dir` will throw a Lua error if the supplied path cannot be iterated.</li><li></li><li>The simplest way to use this function is with a `for` loop. When used in this manner, the `for` loop itself will take care of closing the directory stream for us, even if we break out of the loop early.</li><li>   ```</li><li>      for file in hs.fs.dir("/Users/Guest/Documents") do</li><li>          print(file)</li><li>      end</li><li>   ```</li><li></li><li>It is also possible to use the dir_obj directly if you wish:</li><li>   ```</li><li>      local iterFn, dirObj = hs.fs.dir("/Users/Guest/Documents")</li><li>      local file = dirObj:next() -- get the first file in the directory</li><li>      while (file) do</li><li>          print(file)</li><li>          file = dirObj:next() -- get the next file in the directory</li><li>      end</li><li>      dirObj:close() -- necessary to make sure that the directory stream is closed</li><li>   ```</li></ul>                |

---

### [displayName](#displayname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.displayName(filepath) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the display name of the file or directory at a specified path.                                                                     |
| **Parameters**                              | <ul><li>filepath - The path to the file or directory</li></ul> |
| **Returns**                                 | <ul><li>a string containing the display name of the file or directory at a specified path; returns nil if no file with the specified path exists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [fileUTI](#fileuti)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.fileUTI(path) -> string or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the Uniform Type Identifier for the file location specified.                                                                     |
| **Parameters**                              | <ul><li>path - the path to the file to return the UTI for.</li></ul> |
| **Returns**                                 | <ul><li>a string containing the Uniform Type Identifier for the file location specified or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [fileUTIalternate](#fileutialternate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.fileUTIalternate(fileUTI, type) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the fileUTI's equivalent form in an alternate type specification format.                                                                     |
| **Parameters**                              | <ul><li>a string containing a file UTI, such as one returned by `hs.fs.fileUTI`.</li><li>a string specifying the alternate format for the UTI.  This string may be one of the following:`extension`  - as a file extension, commonly used for platform independent file sharing when file metadata can't be guaranteed to be cross-platform compatible.  Generally considered unreliable when other file type identification methods are available.
  `mime`       - as a mime-type, commonly used by Internet applications like web browsers and email applications.
  `pasteboard` - as an NSPasteboard type (see `hs.pasteboard`).
  `ostype`     - four character file type, most common pre OS X, but still used in some legacy APIs.</li></ul> |
| **Returns**                                 | <ul><li>the file UTI in the alternate format or nil if the UTI does not have an alternate of the specified type.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getFinderComments](#getfindercomments)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.getFinderComments(path) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get the Finder comments for the file or directory at the specified path                                                                     |
| **Parameters**                              | <ul><li>path - the path to the file or directory you wish to get the comments of</li></ul> |
| **Returns**                                 | <ul><li>a string containing the Finder comments for the file or directory specified.  If no comments have been set for the file, returns an empty string.  If an error occurs, most commonly an invalid path, this function will throw a Lua error.</li></ul>          |
| **Notes**                                   | <ul><li>This function uses `hs.osascript` to access the file comments through AppleScript</li></ul>                |

---

### [link](#link)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.link(old, new[, symlink]) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a link                                                                     |
| **Parameters**                              | <ul><li>old - A string containing a path to a filesystem object to link from</li><li>new - A string containing a path to create the link at</li><li>symlink - An optional boolean, true to create a symlink, false to create a hard link. Defaults to false</li></ul> |
| **Returns**                                 | <ul><li>True if the link was created, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [lock](#lock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.lock(filehandle, mode[, start[, length]]) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Locks a file, or part of it                                                                     |
| **Parameters**                              | <ul><li>filehandle - An open file</li><li>mode - A string containing either "r" for a shared read lock, or "w" for an exclusive write lock</li><li>start - An optional number containing an offset into the file to start the lock at. Defaults to 0</li><li>length - An optional number containing the length of the file to lock. Defaults to the full size of the file</li></ul> |
| **Returns**                                 | <ul><li>True if the lock was obtained successfully, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [lockDir](#lockdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.lockDir(path, [seconds_stale]) -> lock or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Locks a directory                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the path to a directory</li><li>seconds_stale - An optional number containing an age (in seconds) beyond which to consider an existing lock as stale. Defaults to INT_MAX (which is, broadly speaking, equivalent to "never")</li></ul> |
| **Returns**                                 | <ul><li>If successful, a lock object, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul><li>This is not a low level OS feature, the lock is actually a file created in the path, called `lockfile.lfs`, so the directory must be writable for this function to succeed</li><li>The returned lock object can be freed with ```lock:free()```</li><li>If the lock already exists and is not stale, the error string returned will be "File exists"</li></ul>                |

---

### [mkdir](#mkdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.mkdir(dirname) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new directory                                                                     |
| **Parameters**                              | <ul><li>dirname - A string containing the path of a directory to create</li></ul> |
| **Returns**                                 | <ul><li>True if the directory was created, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pathFromBookmark](#pathfrombookmark)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.pathFromBookmark(data) -> string | nil, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the file path from a binary encoded bookmark.                                                                     |
| **Parameters**                              | <ul><li>data - The binary encoded Bookmark.</li></ul> |
| **Returns**                                 | <ul><li>A string containing the path to the Bookmark URL or `nil` if an error occurs.</li><li>An error message if an error occurs.</li></ul>          |
| **Notes**                                   | <ul><li>A bookmark provides a persistent reference to a file-system resource.</li><li>   When you resolve a bookmark, you obtain a URL to the resource’s current location.</li><li>   A bookmark’s association with a file-system resource (typically a file or folder)</li><li>   usually continues to work if the user moves or renames the resource, or if the</li><li>   user relaunches your app or restarts the system.</li><li>No volumes are mounted during the resolution of the bookmark data.</li></ul>                |

---

### [pathToAbsolute](#pathtoabsolute)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.pathToAbsolute(filepath) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the absolute path of a given path                                                                     |
| **Parameters**                              | <ul><li>filepath - Any kind of file or directory path, be it relative or not</li></ul> |
| **Returns**                                 | <ul><li>A string containing the absolute path of `filepath` (i.e. one that doesn't include `.`, `..` or symlinks)</li><li>Note that symlinks will be resolved to their target file</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pathToBookmark](#pathtobookmark)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.pathToBookmark(path) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the path as binary encoded bookmark data.                                                                     |
| **Parameters**                              | <ul><li>path - The path to encode</li></ul> |
| **Returns**                                 | <ul><li>Bookmark data in a binary encoded string or `nil` if path is invalid.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [rmdir](#rmdir)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.rmdir(dirname) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes an existing directory                                                                     |
| **Parameters**                              | <ul><li>dirname - A string containing the path to a directory to remove</li></ul> |
| **Returns**                                 | <ul><li>True if the directory was removed, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setFinderComments](#setfindercomments)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.setFinderComments(path, comment) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Set the Finder comments for the file or directory at the specified path to the comment specified                                                                     |
| **Parameters**                              | <ul><li>path    - the path to the file or directory you wish to set the comments of</li><li>comment - a string specifying the comment to set.  If this parameter is missing or is an explicit nil, the existing comment is cleared.</li></ul> |
| **Returns**                                 | <ul><li>true on success; on error, most commonly an invalid path, this function will throw a Lua error.</li></ul>          |
| **Notes**                                   | <ul><li>This function uses `hs.osascript` to access the file comments through AppleScript</li></ul>                |

---

### [symlinkAttributes](#symlinkattributes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.symlinkAttributes (filepath [, aname]) -> table or string or nil,error`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the attributes of a symbolic link                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a link to inspect</li><li>aName - An optional attribute name. If this value is specified, only the attribute requested, is returned</li></ul> |
| **Returns**                                 | <ul><li>A table or string if the values could be found, otherwise nil and an error string.</li></ul>          |
| **Notes**                                   | <ul><li>The return values for this function are identical to those provided by `hs.fs.attributes()` with the following addition: the attribute name "target" is added and specifies a string containing the absolute path that the symlink points to.</li></ul>                |

---

### [tagsAdd](#tagsadd)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.tagsAdd(filepath, tags)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds one or more tags to the Finder tags of a file                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file</li><li>tags - A table containing one or more strings, each containing a tag name</li></ul> |
| **Returns**                                 | <ul><li>true if the tags were updated; throws a lua error if an error occurs updating the tags</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [tagsGet](#tagsget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.tagsGet(filepath) -> table or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Finder tags of a file                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file</li></ul> |
| **Returns**                                 | <ul><li>A table containing the list of the file's tags, or nil if the file has no tags assigned; throws a lua error if an error accessing the file occurs</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [tagsRemove](#tagsremove)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.tagsRemove(filepath, tags)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Removes Finder tags from a file                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file</li><li>tags - A table containing one or more strings, each containing a tag name</li></ul> |
| **Returns**                                 | <ul><li>true if the tags were updated; throws a lua error if an error occurs updating the tags</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [tagsSet](#tagsset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.tagsSet(filepath, tags)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the Finder tags of a file, removing any that are already set                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file</li><li>tags - A table containing zero or more strings, each containing a tag name</li></ul> |
| **Returns**                                 | <ul><li>true if the tags were set; throws a lua error if an error occurs setting the new tags</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [temporaryDirectory](#temporarydirectory)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.temporaryDirectory() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the path of the temporary directory for the current user.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The path to the system designated temporary directory for the current user.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [touch](#touch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.touch(filepath [, atime [, mtime]]) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Updates the access and modification times of a file                                                                     |
| **Parameters**                              | <ul><li>filepath - A string containing the path of a file to touch</li><li>atime - An optional number containing the new access time of the file to set (as seconds since the Epoch). Defaults to now</li><li>mtime - An optional number containing the new modification time of the file to set (as seconds since the Epoch). Defaults to the value of atime</li></ul> |
| **Returns**                                 | <ul><li>True if the operation was successful, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [unlock](#unlock)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.unlock(filehandle[, start[, length]]) -> true or (nil,error)`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unlocks a file or a part of it.                                                                     |
| **Parameters**                              | <ul><li>filehandle - An open file</li><li>start - An optional number containing an offset from the start of the file, to unlock. Defaults to 0</li><li>length - An optional number containing the length of file to unlock. Defaults to the full size of the file</li></ul> |
| **Returns**                                 | <ul><li>True if the unlock succeeded, otherwise nil and an error string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [urlFromPath](#urlfrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.fs.urlFromPath(path) -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the encoded URL from a path.                                                                     |
| **Parameters**                              | <ul><li>path - The path</li></ul> |
| **Returns**                                 | <ul><li>A string or `nil` if path is invalid.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
