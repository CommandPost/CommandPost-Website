# plugins.finalcutpro.timeline.videoeffects

Controls Final Cut Pro's Video Effects.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [videoeffects](#videoeffects)


---

## API Documentation

#### Functions


### [videoeffects](#videoeffects)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.timeline.videoeffects(action) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Applies the specified action as a video effect.                                                                     |
| **Parameters**                              | <ul><li>`action`     - A table with the name/category/theme for the video effect to apply, or a string with just the name.</li></ul> |
| **Returns**                                 | <ul><li>`true` if a matching video effect was found and applied to the timeline.</li></ul>          |
| **Notes**                                   | <ul><li>Expects action to be a table with the following structure:</li><li></li><li>```lua</li><li>{ name = "XXX", category = "YYY", theme = "ZZZ" }</li><li>```</li><li></li><li>...where `"XXX"`, `"YYY"` and `"ZZZ"` are in the current FCPX language. The `category` and `theme` are optional,</li><li>but if they are known it's recommended to use them, or it will simply execute the first matching video effect with that name.</li><li></li><li>Alternatively, you can also supply a string with just the name.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/timeline/videoeffects.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/timeline/videoeffects.lua#L17) |

---

