# cp.commands.command

Commands Module.

## API Overview
### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [isActive](#isactive)
 * [isEnabled](#isenabled)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [action](#action)
 * [activated](#activated)
 * [activatedBy](#activatedby)
 * [addShortcut](#addshortcut)
 * [deleteShortcuts](#deleteshortcuts)
 * [disable](#disable)
 * [enable](#enable)
 * [getAction](#getaction)
 * [getFirstShortcut](#getfirstshortcut)
 * [getGroup](#getgroup)
 * [getImage](#getimage)
 * [getShortcuts](#getshortcuts)
 * [getSubtitle](#getsubtitle)
 * [getTitle](#gettitle)
 * [groupedBy](#groupedby)
 * [hasAction](#hasaction)
 * [id](#id)
 * [image](#image)
 * [new](#new)
 * [parent](#parent)
 * [pressed](#pressed)
 * [released](#released)
 * [repeated](#repeated)
 * [setShortcuts](#setshortcuts)
 * [subtitled](#subtitled)
 * [titled](#titled)
 * [whenActivated](#whenactivated)
 * [whenPressed](#whenpressed)
 * [whenReleased](#whenreleased)
 * [whenRepeated](#whenrepeated)


## API Documentation

### Fields


### [isActive](#isactive)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command.isActive <cp.prop: boolean; read-only>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the command is active. To be active, both the command and the group it belongs to must be enabled.                                                                     |

---

### [isEnabled](#isenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command.isEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If set to `true`, the command is enabled.                                                                     |

---
### Methods


### [action](#action)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:action(getFn, setFn) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the action get and set callbacks for a specific command.                                                                     |
| **Parameters**                              | <ul><li>getFn - The function that gets the action.</li><li>setFn - The function that sets the action.</li></ul> |
| **Returns**                                 | <ul><li>command - The command that was created.</li></ul>          |
| **Notes**                                   | <ul><li>The `getFn` function should have no arguments.</li><li>The `setFn` function can have two optional arguments:</li><li>  `clear` - A boolean that defines whether or not the value should be cleared.</li><li>  `completionFn` - An optional completion function callback.</li></ul>                |

---

### [activated](#activated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:activated(repeats) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the 'pressed', then 'repeated', then 'released' functions, if present.                                                                     |
| **Parameters**                              | <ul><li>`repeats` - the number of times to repeat the 'repeated' function. Defaults to 1.</li></ul> |
| **Returns**                                 | <ul><li>the last 'truthy' result (non-nil/false).</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [activatedBy](#activatedby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:activatedBy([modifiers,] [keyCode]) -> command/modifier`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies that the command is activated by pressing a key combination.                                                                     |
| **Parameters**                              | <ul><li>`modifiers`	- (optional) The table containing names of required modifiers.</li><li>`keyCode`	- (optional) The key code that will activate the command, with no modifiers.</li></ul> |
| **Returns**                                 | <ul><li>`command` if a `keyCode` was provided, or `modifier` if not.</li></ul>          |
| **Notes**                                   | <ul><li>This method can be called multiple times, and multiple key combinations will be registered for the command.</li><li>To remove existing key combinations, call the `command:deleteShortcuts()` method.</li><li>  ** If the `keyCode` is provided, no modifiers need to be pressed to activate and the `command` is returned.</li><li>  ** If the `modifiers` and `keyCode` are provided, the combination is created and the `command` is returned.</li><li>  ** If no `keyCode` is provided, a `modifier` is returned, which lets you specify keyboard combinations.</li><li>For example:</li><li></li><li>```</li><li>local global    	= commands.collection("global")</li><li>local pressA 		= global:add("commandA"):activatedBy("a")</li><li>local pressShiftA	= global:add("commandShiftA"):activatedBy({"shift"}, "a")</li><li>local pressCmdA		= global:add("commandCmdA"):activatedBy():command("a")</li><li>local pressOptCmdA	= global:add("commandOptCmdA"):activatedBy():option():command("a")</li><li>global:enable()</li><li>```</li></ul>                |

---

### [addShortcut](#addshortcut)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:addShortcut(newShortcut) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified shortcut to the command. If the command is enabled, the shortcut will also be enabled.                                                                     |
| **Parameters**                              | <ul><li>`newShortcut`	- the shortcut to add.</li></ul> |
| **Returns**                                 | <ul><li>`self`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [deleteShortcuts](#deleteshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:deleteShortcuts() -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the command key combo is pressed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>command - The current command</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:disable() -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:enable() -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getAction](#getaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getAction() -> function, function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the action get and set callbacks for a specific command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>getFn - The function that gets the action.</li><li>setFn - The function that sets the action.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getFirstShortcut](#getfirstshortcut)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getFirstShortcut() -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the first shortcut, or `nil` if none have been registered.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The first shortcut, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getGroup](#getgroup)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getGroup() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the group ID for the command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The group ID.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getImage](#getimage)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getImage() -> hs.image object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current image.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A hs.image object or `nil` if not is specified.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getShortcuts](#getshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getShortcuts() -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the set of shortcuts assigned to this command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The associated shortcuts.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getSubtitle](#getsubtitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getSubtitle() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the current subtitle, based on either the set subtitle, or the "<ID>_subtitle" value in the I18N files. If nothing is available, it will return `nil`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The subtitle value or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getTitle](#gettitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:getTitle() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the command title in the current language, if availalbe. If not, the ID is returned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The human-readable command title.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [groupedBy](#groupedby)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:groupedBy(group) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies that the command is grouped by a specific value.                                                                     |
| **Parameters**                              | <ul><li>`group`	- The group ID.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul><li>This is different to the command group/parent value.</li></ul>                |

---

### [hasAction](#hasaction)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:hasAction() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets whether or not any action callbacks have been assigned.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if action callbacks have been assigned, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID for this command.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [image](#image)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:image(img) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the specified image and returns the `cp.commands.command` instance.                                                                     |
| **Parameters**                              | <ul><li>`img` - The `hs.image` to use.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command.new(id, parent) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new command, which can have keyboard shortcuts assigned to it.                                                                     |
| **Parameters**                              | <ul><li>`id` - the unique identifier for the command. E.g. 'cpCustomCommand'</li><li>`parent` - The parent group.</li></ul> |
| **Returns**                                 | <ul><li>command - The command that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:parent() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the parent command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The parent `cp.commands`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [pressed](#pressed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:pressed() -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the 'pressed' function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the result of the function, or `nil` if none is present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [released](#released)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:released() -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the 'released' function, if present.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the result of the function, or `nil` if none is present.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [repeated](#repeated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:repeated(repeats) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Executes the 'repeated' function, if present.                                                                     |
| **Parameters**                              | <ul><li>`repeats` - the number of times to repeat. Defaults to 1.</li></ul> |
| **Returns**                                 | <ul><li>the last result.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setShortcuts](#setshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:setShortcuts(shortcuts) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes any existing shortcuts and applies the new set of shortcuts in the table.                                                                     |
| **Parameters**                              | <ul><li>shortcuts - The set of `cp.commands.shortcuts` to apply to this command.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [subtitled](#subtitled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:subtitled(subtitle) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the specified subtitle and returns the `cp.commands.command` instance.                                                                     |
| **Parameters**                              | <ul><li>`subtitle`	- The new subtitle.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul><li>By default, it will look up the `<ID>_subtitle` value.</li><li>Anything set here will override it in all langauges.</li></ul>                |

---

### [titled](#titled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:titled(title) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Applies the provided human-readable title to the command.                                                                     |
| **Parameters**                              | <ul><li>id - the unique identifier for the command (i.e. 'CPCustomCommand').</li></ul> |
| **Returns**                                 | <ul><li>command - The command that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [whenActivated](#whenactivated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:whenActivated(activatedFn) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the command is activated.                                                                     |
| **Parameters**                              | <ul><li>`activatedFn`	- the function to call when activated.</li></ul> |
| **Returns**                                 | <ul><li>command - The current command</li></ul>          |
| **Notes**                                   | <ul><li>This is a shortcut for calling `whenPressed(...)`</li></ul>                |

---

### [whenPressed](#whenpressed)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:whenPressed(pressedFn) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the command key combo is pressed.                                                                     |
| **Parameters**                              | <ul><li>`pressedFn`	- the function to call when pressed.</li></ul> |
| **Returns**                                 | <ul><li>command - The current command</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [whenReleased](#whenreleased)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:whenReleased(releasedFn) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the command key combo is released.                                                                     |
| **Parameters**                              | <ul><li>`releasedFn`	- the function to call when released.</li></ul> |
| **Returns**                                 | <ul><li>command - The current command</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [whenRepeated](#whenrepeated)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.command:whenRepeated(repeatedFn) -> command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the function that will be called when the command key combo is repeated.                                                                     |
| **Parameters**                              | <ul><li>`repeatedFn`	- the function to call when repeated.</li></ul> |
| **Returns**                                 | <ul><li>command - The current command</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
