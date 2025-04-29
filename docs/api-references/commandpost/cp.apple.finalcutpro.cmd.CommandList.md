# cp.apple.finalcutpro.cmd.CommandList

A list of commands available in the [CommandEditor](cp.apple.finalcutpro.cmd.CommandEditor.md).

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [commands](#commands)
 * [groups](#groups)
 * [label](#label)
 * [splitter](#splitter)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandList.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the element matches the CommandList.                                                                     |
| **Parameters**                              | <ul><li>element - The element to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the element matches, `false` otherwise.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua line 27](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua#L27) |

---

#### Fields


### [commands](#commands)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandList.commands <cp.apple.finalcutpro.cmd.Commands>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Commands](cp.apple.finalcutpro.cmd.Commands.md) for this CommandList.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua#L77) |

---


### [groups](#groups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandList.groups <cp.apple.finalcutpro.cmd.CommandGroups>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandGroups](cp.apple.finalcutpro.cmd.CommandGroups.md) for this CommandList.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua line 63](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua#L63) |

---


### [label](#label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandList.label <cp.ui.StaticText>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The StaticText that displays the label.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua line 45](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua#L45) |

---


### [splitter](#splitter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandList.splitter <cp.ui.Splitter>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Splitter](cp.ui.Splitter.md) for this CommandList.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandList.lua#L70) |

---

