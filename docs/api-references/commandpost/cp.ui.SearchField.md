# cp.ui.SearchField

A [TextField](cp.ui.TextField.md) with a subrole of `AXSearchField`.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matchesSearch](#matchessearch)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [SearchField](#searchfield)


---

## API Documentation

#### Functions


### [matchesSearch](#matchessearch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SearchField.matchesSearch(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element is a `AXTextField` with a subrole of `AXSearchField`.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/SearchField.lua line 10](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/SearchField.lua#L10) |

---

#### Methods


### [SearchField](#searchfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.SearchField(parent, uiFinder[, convertFn]) -> cp.ui.SearchField`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new SearchField. They have a parent and a finder function.                                                                     |
| **Parameters**                              | <ul><li>parent	- The parent object.</li><li>uiFinder	- The function will return the `axuielement` for the SearchField.</li><li>convertFn	- (optional) If provided, will be passed the `string` value when returning.</li></ul> |
| **Returns**                                 | <ul><li>The new `SearchField`.</li></ul>          |
| **Notes**                                   | <ul><li>Additionally, an optional `convert` function can be provided, with the following signature:</li><li></li><li>`function(textValue) -> anything`</li><li></li><li>The `value` will be passed to the function before being returned, if present. All values passed into `value(x)` will be converted to a `string` first via `tostring`.</li><li>For example, to have the value be converted into a `number`, simply use `tonumber` like this:</li><li></li><li>```lua</li><li>local numberField = SearchField(parent, function() return ... end, tonumber)</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/ui/SearchField.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/SearchField.lua#L23) |

---

