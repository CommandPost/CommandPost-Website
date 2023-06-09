# plugins.finalcutpro.timeline.audioeffects

Controls Final Cut Pro's Audio Effects.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [audioeffects](#audioeffects)


---

## API Documentation

#### Functions


### [audioeffects](#audioeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.audioeffects(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies the specified action as a audio effect.                                                                     |
| **Parameters**                              | <ul><li>`action`		- A table with the name/category/theme for the audio effect to apply, or a string with just the name.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a matching audio effect was found and applied to the timeline.</li></ul>          |
| **Notes**                                   | <ul><li>Expects action to be a table with the following structure:</li><li></li><li>```lua</li><li>{ name = "XXX", category = "YYY", theme = "ZZZ" }</li><li>```</li><li></li><li>...where `"XXX"`, `"YYY"` and `"ZZZ"` are in the current FCPX language. The `category` and `theme` are optional,</li><li>but if they are known it's recommended to use them, or it will simply execute the first matching audio effect with that name.</li><li></li><li>Alternatively, you can also supply a string with just the name.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/audioeffects.lua line 19](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/audioeffects.lua#L19) |

---

