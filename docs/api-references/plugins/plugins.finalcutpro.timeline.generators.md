# plugins.finalcutpro.timeline.generators

Controls Final Cut Pro's Generators.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [apply](#apply)


---

## API Documentation

### Functions


### [apply](#apply)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.generators.apply(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies the specified action as a generator.                                                                     |
| **Parameters**                              | <ul><li>`action`     - A table with the name/category/theme for the generator to apply, or a string with just the name.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a matching generator was found and applied to the timeline.</li></ul>          |
| **Notes**                                   | <ul><li>Expects action to be a table with the following structure:</li><li></li><li>```lua</li><li>{ name = "XXX", category = "YYY", theme = "ZZZ" }</li><li>```</li><li></li><li>...where `"XXX"`, `"YYY"` and `"ZZZ"` are in the current FCPX language. The `category` and `theme` are optional,</li><li>but if they are known it's recommended to use them, or it will simply execute the first matching generator with that name.</li><li></li><li>Alternatively, you can also supply a string with just the name.</li><li></li><li>Actions will be cached each session, so that if the user applies the effect multiple times, only the first time will require</li><li>GUI scripting - subsequent uses will just use the Pasteboard.</li></ul>                |

---
