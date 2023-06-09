# cp.apple.finalcutpro.cmd.CommandEditor

Command Editor Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [CommandEditor](#CommandEditor)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [closeButton](#closeButton)
 * [command](#command)
 * [commandDetail](#commandDetail)
 * [commandGroups](#commandGroups)
 * [commandList](#commandList)
 * [commands](#commands)
 * [commandSet](#commandSet)
 * [control](#control)
 * [keyboard](#keyboard)
 * [keyboardToggle](#keyboardToggle)
 * [keyDetail](#keyDetail)
 * [modifiers](#modifiers)
 * [option](#option)
 * [save](#save)
 * [search](#search)
 * [shift](#shift)
 * [UI](#UI)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [doClose](#doClose)
 * [doFindCommandID](#doFindCommandID)
 * [doSave](#doSave)
 * [doShow](#doShow)
 * [hide](#hide)
 * [show](#show)

## API Documentation

### Functions

| [matches](#matches)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [CommandEditor](#CommandEditor)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor(app) -> CommandEditor`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Command Editor object.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.apple.finalcutpro` object.</li></ul> |
| **Returns**                                 | <ul><li>A new `CommandEditor` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [closeButton](#closeButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.closeButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Close" [Button](cp.ui.Button.md).                                                                     |

| [command](#command)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.command <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Command" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [commandDetail](#commandDetail)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandDetail <cp.apple.finalcutpro.cmd.CommandDetail>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandDetail](cp.apple.finalcutpro.cmd.CommandDetail.md) section.                                                                     |

| [commandGroups](#commandGroups)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandGroups <cp.apple.finalcutpro.cmd.CommandGroups>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandGroups](cp.apple.finalcutpro.cmd.CommandGroups.md).                                                                     |

| [commandList](#commandList)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandList <cp.apple.finalcutpro.cmd.CommandList>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [CommandList](cp.apple.finalcutpro.cmd.CommandList.md).                                                                     |

| [commands](#commands)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commands <cp.apple.finalcutpro.cmd.Commands>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Commands](cp.apple.finalcutpro.cmd.Commands.md).                                                                     |

| [commandSet](#commandSet)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.commandSet <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Command Set" [PopUpButton](cp.ui.PopUpButton.md).                                                                     |

| [control](#control)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.control <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Control" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [keyboard](#keyboard)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyboard <cp.ui.Group>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Group](cp.ui.Group.md) containing the keyboard shortcuts. Does not seem to expose the actual key buttons.                                                                     |

| [keyboardToggle](#keyboardToggle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyboardToggle <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Keyboard Toggle" [CheckBox](cp.ui.CheckBox.md) (next to the Search field).                                                                     |

| [keyDetail](#keyDetail)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.keyDetail <cp.appple.finalcutpro.cmd.KeyDetail>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [KeyDetail](cp.apple.finalcutpro.cmd.KeyDetail.md) section.                                                                     |

| [modifiers](#modifiers)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.modifiers <cp.ui.Group>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [Group](cp.ui.Group.md) containing 'modifier' checkboxes (Cmd, Shift, etc).                                                                     |

| [option](#option)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.option <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Option" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [save](#save)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.save <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Save" [Button](cp.ui.Button.md).                                                                     |

| [search](#search)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.search <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Search" [TextField](cp.ui.TextField.md).                                                                     |

| [shift](#shift)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.shift <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Shift" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [UI](#UI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor.UI <cp.prop: axuielement; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` for the window.                                                                     |

### Methods

| [app](#app)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:app() -> App`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the app instance representing Final Cut Pro.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>App</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doClose](#doClose)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doClose() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that triggers the Close button in the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the button was found and pushed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doFindCommandID](#doFindCommandID)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doFindCommandID(commandID, [highlight]) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will find the command with the given ID, revealing it at the top of the [commands](#commands) list.                                                                     |
| **Parameters**                              | <ul><li>commandID - The locale-neutral ID of the command to find. Eg. "NextEdit" (ID), not "Go To Next Edit" (English)</li><li>highlight - (optional) If `true`, the command will be highlighted in the list.</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doSave](#doSave)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doSave() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that triggers the Save button in the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if the button was found and pushed, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:doShow() -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a [Statement](cp.rx.go.Statement.md) that will attempt to hide the Command Editor, if FCPX is running. If the changes have not been saved, they will be lost.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, which will resolve to `true` if the CommandEditor is not showing or `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [hide](#hide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:hide() -> cp.apple.finalcutpro.cmd.CommandEditor`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.cmd.CommandEditor` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [show](#show)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.cmd.CommandEditor:show() -> cp.apple.finalcutpro.cmd.CommandEditor`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Command Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.apple.finalcutpro.cmd.CommandEditor` object for method chaining.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

