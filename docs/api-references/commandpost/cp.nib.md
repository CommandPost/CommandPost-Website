# cp.nib

Provides support for NIB files.

---

## Submodules
 * [cp.nib.archiver](cp.nib.archiver.md)
 * [cp.nib.type](cp.nib.type.md)
 * [cp.nib.types](cp.nib.types.md)

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [fromBytes](#frombytes)


---

## API Documentation

#### Methods


### [fromBytes](#frombytes)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.nib.fromBytes(data) -> table | nil, string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Unarchives the given `string` of bytes into a `table`, if it is a valid `NIBArchive`.                                                                     |
| **Parameters**                              | <ul><li>data - The `string` of bytes to unarchive.</li></ul> |
| **Returns**                                 | <ul><li>The `table` containing the unarchived data, or `nil` if the `archive` is not a valid `NIBArchive`.</li><li>The `string` error message, if any.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/nib/archiver.lua line 358](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/nib/archiver.lua#L358) |

---

