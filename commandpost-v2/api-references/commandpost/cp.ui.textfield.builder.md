# cp.ui.TextField.Builder

Defines a `TextField` [Builder](cp.ui.Builder.md).

---

## API Overview
**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [convertingGet](#convertingget)
 * [convertingSet](#convertingset)

---

## API Documentation

#### Methods

### [convertingGet](#convertingget)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.Builder:convertingGet(getter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies a function that will convert the result of the `TextField:value()` getter to a different type.                                                                     |
| **Parameters**                              | <ul><li>getter - A `function` that will be called to get the value from the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `getter` will be called with the `string` value from the `TextField` as its only parameter.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 25](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L25) |

---

### [convertingSet](#convertingset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.TextField.Builder:convertingSet(setter) -> cp.ui.TextField.Builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies a function to convert the value before setting it in the `TextField`.                                                                     |
| **Parameters**                              | <ul><li>setter - A `function` that will be called to set the value in the `TextField`.</li></ul> |
| **Returns**                                 | <ul><li>The `TextField.Builder`</li></ul>          |
| **Notes**                                   | <ul><li>The `setter` will be called with the input value from a `TextField:value(...)` call as its only parameter.</li><li>   It should return a `string` to be saved into the `TextField`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/TextField.lua line 38](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/TextField.lua#L38) |

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
