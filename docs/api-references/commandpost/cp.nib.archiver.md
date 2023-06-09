# cp.nib.archiver

Provides support for loading NIB files stored in the `NIBArchive` format.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [SIGNATURE](#signature)

**Functions** - _API calls offered directly by the extension_
 * [isSupported](#issupported)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [fromFile](#fromfile)


---

## API Documentation

#### Constants


### [SIGNATURE](#signature)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.nib.archiver.SIGNATURE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Marks the data stream as an `NIBArchive`.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/nib/archiver.lua line 324](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/nib/archiver.lua#L324){target="_blank"} |

---

#### Functions


### [isSupported](#issupported)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.nib.archiver.isSupported(data) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the given `data` is an NIBArchive.                                                                     |
| **Parameters**                              | <ul><li>data - The data to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `data` is an NIBArchive, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/nib/archiver.lua line 329](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/nib/archiver.lua#L329){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.nib.archiver.new(decoders) -> cp.nib.archiver`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `cp.nib.archiver` instance, with the specified list of `decoders`.                                                                     |
| **Parameters**                              | <ul><li>decoders - The list of `cp.nib.decoder` functions to use.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.nib.archiver` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/nib/archiver.lua line 343](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/nib/archiver.lua#L343){target="_blank"} |

---

#### Methods


### [fromFile](#fromfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.nib.archiver.fromFile(filename) -> table | nil, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to read the specified `filename` and unarchives it into a `table`, if it is a valid NIBArchive.                                                                     |
| **Parameters**                              | <ul><li>filename - The `string` of the file to read.</li></ul> |
| **Returns**                                 | <ul><li>A `table` containing the archive data, or `nil` if the file could not be read.</li><li>The `string` error message, if any.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/nib/archiver.lua line 381](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/nib/archiver.lua#L381){target="_blank"} |

---

