# cp.apple.finalcutpro.cmd.CommandDetail

This class provides a UI for displaying the details of a command when it is selected on the `CommandList`.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [contents](#contents)
 * [detail](#detail)
 * [label](#label)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandDetail.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element matches the criteria for this class.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua line 21](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua#L21){target="_blank"} |

---

#### Fields


### [contents](#contents)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandDetail.contents <cp.ui.TextArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The TextArea that displays the content.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua#L84){target="_blank"} |

---


### [detail](#detail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandDetail.detail <cp.ui.ScrollArea>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [ScrollArea](cp.ui.ScrollArea.md) that displays the contained [TextArea](cp.ui.TextArea.md).                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua#L77){target="_blank"} |

---


### [label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandDetail.label <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The StaticText that displays the label.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandDetail.lua#L63){target="_blank"} |

---

