# cp.nib

Provides support for NIB files.

---

## Submodules
 * [cp.nib.archiver](cp.nib.archiver.md)
 * cp.nib.type
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

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
