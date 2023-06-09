# cp.commands

Commands Module.

---

## Submodules
 * [cp.commands.command](cp.commands.command.md)
 * [cp.commands.englishKeyCodes](cp.commands.englishKeyCodes.md)
 * [cp.commands.shortcut](cp.commands.shortcut.md)

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [DEFAULT_EXTENSION](#default_extension)

**Functions** - _API calls offered directly by the extension_
 * [getShortcutsPath](#getshortcutspath)
 * [group](#group)
 * [groupIds](#groupids)
 * [groups](#groups)
 * [loadFromFile](#loadfromfile)
 * [new](#new)
 * [saveToFile](#savetofile)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [enabled](#enabled)
 * [isEditable](#iseditable)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [activate](#activate)
 * [add](#add)
 * [clear](#clear)
 * [deleteShortcuts](#deleteshortcuts)
 * [disable](#disable)
 * [enable](#enable)
 * [get](#get)
 * [getAll](#getall)
 * [id](#id)
 * [loadShortcuts](#loadshortcuts)
 * [saveShortcuts](#saveshortcuts)
 * [watch](#watch)


---

## API Documentation

#### Constants


### [DEFAULT_EXTENSION](#default_extension)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.DEFAULT_EXTENSION -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The menubar position priority.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 33](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L33) |

---

#### Functions


### [getShortcutsPath](#getshortcutspath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.getShortcutsPath(name) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the path to the named shortcut set.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 379](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L379) |

---


### [group](#group)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.group(id) -> cp.command or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a collection of commands. These commands can be enabled or disabled as a group.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The ID to retrieve</li></ul> |
| **Returns**                                 | <ul><li>`cp.commands` - The command group with the specified ID, or `nil` if none exists.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 57](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L57) |

---


### [groupIds](#groupids)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.groupIds() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an array of IDs of command groups which have been created.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`table` - The array of group IDs.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 40](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L40) |

---


### [groups](#groups)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.groups(id) -> table of cp.commands`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table with the set of commands.                                                                     |
| **Parameters**                              | <ul><li>`id` - The ID to retrieve</li></ul> |
| **Returns**                                 | <ul><li>`cp.commands` - The command group with the specified ID, or `nil` if none exists.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 70](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L70) |

---


### [loadFromFile](#loadfromfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.loadFromFile(name) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a shortcut set from the standard location with the specified name.                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the shortcut set. E.g. "My Custom Shortcuts"</li></ul> |
| **Returns**                                 | <ul><li>`true` if the file was found and loaded successfully.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 404](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L404) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.new(id) -> cp.commands`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a collection of commands. These commands can be enabled or disabled as a group.                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this command group.</li></ul> |
| **Returns**                                 | <ul><li>cp.commands - The command group that was created.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 83](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L83) |

---


### [saveToFile](#savetofile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.saveToFile(name) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the current shortcuts for all groups to a file in the standard location with the provided name.                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the command set. E.g. "My Custom Commands"</li></ul> |
| **Returns**                                 | <ul><li>`true` if the shortcuts were saved successfully.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 456](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L456) |

---

#### Fields


### [enabled](#enabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If enabled, the commands in the group will be active as well.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 104](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L104) |

---


### [isEditable](#iseditable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.isEditable <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If set to `false`, the command group is not user-editable.                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 116](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L116) |

---

#### Methods


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:activate(successFn, failureFn) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Will trigger an 'activate' event, and then execute either the `successFn` or `failureFn` if the command group is not enabled within 5 seconds.                                                                     |
| **Parameters**                              | <ul><li>successFn     - the function to call if successfully activated.</li><li>failureFn     - the function to call if not activated after 5 seconds.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 300](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L300) |

---


### [add](#add)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:add(commandId) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new command with the specified ID to this group. Additional configuration should be applied to the returned `command` instance. Eg:                                                                     |
| **Parameters**                              | <ul><li>`commandId`   - The unique ID for the new command.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>myCommands:add("fooBar"):groupedBy("foo"):whenActivated(function() ... end)`</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 139](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L139) |

---


### [clear](#clear)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:clear() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears all commands and their shortcuts.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 197](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L197) |

---


### [deleteShortcuts](#deleteshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:deleteShortcuts() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears all shortcuts associated with commands in this command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 212](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L212) |

---


### [disable](#disable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:disable() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 242](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L242) |

---


### [enable](#enable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:enable() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 228](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L228) |

---


### [get](#get)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:get(commandId) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the command with the specified ID, or `nil` if none exists.                                                                     |
| **Parameters**                              | <ul><li>`commandId` - The command ID to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 162](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L162) |

---


### [getAll](#getall)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:getAll() -> table of cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the table of commands, with the key being the ID and the value being the command instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>for id,cmd in pairs(myCommands:getAll()) do</li><li>    ...</li><li>end</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 175](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L175) |

---


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the unique ID of the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group ID string.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 126](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L126) |

---


### [loadShortcuts](#loadshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:loadShortcuts(data) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads the shortcut details in the data table and applies them to the commands in this group. The data should probably come from the `saveShortcuts` method.                                                                     |
| **Parameters**                              | <ul><li>data      - The data table containing shortcuts.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 358](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L358) |

---


### [saveShortcuts](#saveshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:saveShortcuts() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table that is approprate to be saved to file that contains the shortuct for all contained `cp.commands.command` instances.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of shortcuts for commands.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 333](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L333) |

---


### [watch](#watch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:watch(events) -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an event watcher to the command group.                                                                     |
| **Parameters**                              | <ul><li>events    - The table of events to watch for (see Notes).</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>The table can have properties with the following functions, which will be called for the specific event:</li><li> ** `add(command)`:      Called after the provided `cp.commands.command` instance has been added.</li><li> ** `activate()`         Called when the command group is activated.</li><li> ** `enable()`:          Called when the command group is enabled.</li><li> ** `disable()`:         Called when the command group is disabled.</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/commands/init.lua line 256](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/commands/init.lua#L256) |

---

