# cp.apple.finalcutpro.cmd.CommandEditor

Command Editor Module.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [CommandEditor](#commandeditor)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [closeButton](#closebutton)
 * [command](#command)
 * [commandDetail](#commanddetail)
 * [commandGroups](#commandgroups)
 * [commandList](#commandlist)
 * [commands](#commands)
 * [commandSet](#commandset)
 * [control](#control)
 * [keyboard](#keyboard)
 * [keyboardToggle](#keyboardtoggle)
 * [keyDetail](#keydetail)
 * [modifiers](#modifiers)
 * [option](#option)
 * [save](#save)
 * [search](#search)
 * [shift](#shift)
 * [UI](#ui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [app](#app)
 * [doClose](#doclose)
 * [doFindCommandID](#dofindcommandid)
 * [doSave](#dosave)
 * [doShow](#doshow)
 * [hide](#hide)
 * [show](#show)


---

## API Documentation

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 36](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L36){target="_blank"} |

---

#### Constructors


### [CommandEditor](#commandeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor(app) -> CommandEditor`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Command Editor object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `CommandEditor` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 61](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L61){target="_blank"} |

---

#### Fields


### [closeButton](#closebutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.closeButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Close" [Button](cp.ui.Button.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 227](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L227){target="_blank"} |

---


### [command](#command)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.command <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Command" [CheckBox](cp.ui.CheckBox.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 254](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L254){target="_blank"} |

---


### [commandDetail](#commanddetail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandDetail <cp.apple.finalcutpro.cmd.CommandDetail>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandDetail](cp.apple.finalcutpro.cmd.CommandDetail.md) section.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 350](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L350){target="_blank"} |

---


### [commandGroups](#commandgroups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandGroups <cp.apple.finalcutpro.cmd.CommandGroups>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandGroups](cp.apple.finalcutpro.cmd.CommandGroups.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 333](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L333){target="_blank"} |

---


### [commandList](#commandlist)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandList <cp.apple.finalcutpro.cmd.CommandList>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandList](cp.apple.finalcutpro.cmd.CommandList.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 317](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L317){target="_blank"} |

---


### [commands](#commands)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commands <cp.apple.finalcutpro.cmd.Commands>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Commands](cp.apple.finalcutpro.cmd.Commands.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 326](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L326){target="_blank"} |

---


### [commandSet](#commandset)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandSet <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Command Set" [PopUpButton](cp.ui.PopUpButton.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 236](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L236){target="_blank"} |

---


### [control](#control)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.control <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Control" [CheckBox](cp.ui.CheckBox.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 281](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L281){target="_blank"} |

---


### [keyboard](#keyboard)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyboard <cp.ui.Group>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Group](cp.ui.Group.md) containing the keyboard shortcuts. Does not seem to expose the actual key buttons.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 308](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L308){target="_blank"} |

---


### [keyboardToggle](#keyboardtoggle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyboardToggle <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keyboard Toggle" [CheckBox](cp.ui.CheckBox.md) (next to the Search field).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 290](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L290){target="_blank"} |

---


### [keyDetail](#keydetail)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyDetail <cp.appple.finalcutpro.cmd.KeyDetail>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [KeyDetail](cp.apple.finalcutpro.cmd.KeyDetail.md) section.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 340](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L340){target="_blank"} |

---


### [modifiers](#modifiers)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.modifiers <cp.ui.Group>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Group](cp.ui.Group.md) containing 'modifier' checkboxes (Cmd, Shift, etc).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 245](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L245){target="_blank"} |

---


### [option](#option)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.option <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Option" [CheckBox](cp.ui.CheckBox.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 272](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L272){target="_blank"} |

---


### [save](#save)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.save <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Save" [Button](cp.ui.Button.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 218](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L218){target="_blank"} |

---


### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Search" [TextField](cp.ui.TextField.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 299](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L299){target="_blank"} |

---


### [shift](#shift)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.shift <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Shift" [CheckBox](cp.ui.CheckBox.md).                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 263](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L263){target="_blank"} |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.UI <cp.prop: axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` for the window.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 71](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L71){target="_blank"} |

---

#### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 84](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L84){target="_blank"} |

---


### [doClose](#doclose)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doClose() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that triggers the Close button in the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the button was found and pushed, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 203](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L203){target="_blank"} |

---


### [doFindCommandID](#dofindcommandid)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doFindCommandID(commandID, [highlight]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will find the command with the given ID, revealing it at the top of the [commands](#commands) list.                                                                     |
| **Parameters**                              | <ul><li>commandID - The locale-neutral ID of the command to find. Eg. "NextEdit" (ID), not "Go To Next Edit" (English)</li><li>highlight - (optional) If `true`, the command will be highlighted in the list.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 383](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L383){target="_blank"} |

---


### [doSave](#dosave)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doSave() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that triggers the Save button in the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the button was found and pushed, otherwise `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 190](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L190){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doShow() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) that will attempt to hide the Command Editor, if FCPX is running. If the changes have not been saved, they will be lost.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if the CommandEditor is not showing or `false` if not.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 155](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L155){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:hide() -> cp.apple.finalcutpro.cmd.CommandEditor`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.cmd.CommandEditor` object for method chaining.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L141){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:show() -> cp.apple.finalcutpro.cmd.CommandEditor`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.cmd.CommandEditor` object for method chaining.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua line 97](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/cmd/CommandEditor.lua#L97){target="_blank"} |

---

