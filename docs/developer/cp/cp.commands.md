# [docs](index.md) » cp.commands
---

Commands Module.

## Submodules
 * [cp.commands.command](cp.commands.command.md)
 * [cp.commands.englishKeyCodes](cp.commands.englishKeyCodes.md)
 * [cp.commands.shortcut](cp.commands.shortcut.md)

## API Overview
* Constants - Useful values which cannot be changed
 * [DEFAULT_EXTENSION](#DEFAULT_EXTENSION)
* Functions - API calls offered directly by the extension
 * [getShortcutsPath](#getShortcutsPath)
 * [group](#group)
 * [groupIds](#groupIds)
 * [groups](#groups)
 * [loadFromFile](#loadFromFile)
 * [new](#new)
 * [saveToFile](#saveToFile)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [enabled](#enabled)
 * [isEditable](#isEditable)
* Methods - API calls which can only be made on an object returned by a constructor
 * [activate](#activate)
 * [add](#add)
 * [clear](#clear)
 * [deleteShortcuts](#deleteShortcuts)
 * [disable](#disable)
 * [enable](#enable)
 * [get](#get)
 * [getAll](#getAll)
 * [id](#id)
 * [loadShortcuts](#loadShortcuts)
 * [saveShortcuts](#saveShortcuts)
 * [watch](#watch)

## API Documentation

### Constants

| [DEFAULT_EXTENSION](#DEFAULT_EXTENSION)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.DEFAULT_EXTENSION -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The menubar position priority.                                                                     |

### Functions

| [getShortcutsPath](#getShortcutsPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.getShortcutsPath(name) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the path to the named shortcut set.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [group](#group)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.group(id) -> cp.command or nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a collection of commands. These commands can be enabled or disabled as a group.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The ID to retrieve</li></ul> |
| **Returns**                                 | <ul><li>`cp.commands` - The command group with the specified ID, or `nil` if none exists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [groupIds](#groupIds)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.groupIds() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an array of IDs of command groups which have been created.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`table` - The array of group IDs.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [groups](#groups)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.groups(id) -> table of cp.commands`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table with the set of commands.                                                                     |
| **Parameters**                              | <ul><li>`id` - The ID to retrieve</li></ul> |
| **Returns**                                 | <ul><li>`cp.commands` - The command group with the specified ID, or `nil` if none exists.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadFromFile](#loadFromFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.loadFromFile(name) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Loads a shortcut set from the standard location with the specified name.                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the shortcut set. E.g. "My Custom Shortcuts"</li></ul> |
| **Returns**                                 | <ul><li>`true` if the file was found and loaded successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.new(id) -> cp.commands`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a collection of commands. These commands can be enabled or disabled as a group.                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this command group.</li></ul> |
| **Returns**                                 | <ul><li>cp.commands - The command group that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveToFile](#saveToFile)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.saveToFile(name) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Saves the current shortcuts for all groups to a file in the standard location with the provided name.                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the command set. E.g. "My Custom Commands"</li></ul> |
| **Returns**                                 | <ul><li>`true` if the shortcuts were saved successfully.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If enabled, the commands in the group will be active as well.                                                                     |

| [isEditable](#isEditable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands.isEditable <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | If set to `false`, the command group is not user-editable.                                                                     |

### Methods

| [activate](#activate)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:activate(successFn, failureFn) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Will trigger an 'activate' event, and then execute either the `successFn` or `failureFn` if the command group is not enabled within 5 seconds.                                                                     |
| **Parameters**                              | <ul><li>successFn     - the function to call if successfully activated.</li><li>failureFn     - the function to call if not activated after 5 seconds.</li></ul> |
| **Returns**                                 | <ul><li>Nothing.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [add](#add)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:add(commandId) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new command with the specified ID to this group. Additional configuration should be applied to the returned `command` instance. Eg:                                                                     |
| **Parameters**                              | <ul><li>`commandId`   - The unique ID for the new command.</li></ul> |
| **Returns**                                 | <ul><li>The new `cp.commands.command` instance.</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li>```lua</li><li>myCommands:add("fooBar"):groupedBy("foo"):whenActivated(function() ... end)`</li><li>```</li></ul>                |

| [clear](#clear)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:clear() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears all commands and their shortcuts.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [deleteShortcuts](#deleteShortcuts)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:deleteShortcuts() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Clears all shortcuts associated with commands in this command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [disable](#disable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:disable() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Disables the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [enable](#enable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:enable() -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Enables the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [get](#get)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:get(commandId) -> cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the command with the specified ID, or `nil` if none exists.                                                                     |
| **Parameters**                              | <ul><li>`commandId` - The command ID to retrieve.</li></ul> |
| **Returns**                                 | <ul><li>The `cp.commands.command`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getAll](#getAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:getAll() -> table of cp.commands.command`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the table of commands, with the key being the ID and the value being the command instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table</li></ul>          |
| **Notes**                                   | <ul><li>For example:</li><li></li><li>```lua</li><li>for id,cmd in pairs(myCommands:getAll()) do</li><li>    ...</li><li>end</li><li>```</li></ul>                |

| [id](#id)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the unique ID of the command group.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The command group ID string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [loadShortcuts](#loadShortcuts)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:loadShortcuts(data) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Loads the shortcut details in the data table and applies them to the commands in this group. The data should probably come from the `saveShortcuts` method.                                                                     |
| **Parameters**                              | <ul><li>data      - The data table containing shortcuts.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [saveShortcuts](#saveShortcuts)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:saveShortcuts() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table that is approprate to be saved to file that contains the shortuct for all contained `cp.commands.command` instances.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of shortcuts for commands.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [watch](#watch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.commands:watch(events) -> cp.commands`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an event watcher to the command group.                                                                     |
| **Parameters**                              | <ul><li>events    - The table of events to watch for (see Notes).</li></ul> |
| **Returns**                                 | <ul><li>The command group instance.</li></ul>          |
| **Notes**                                   | <ul><li>The table can have properties with the following functions, which will be called for the specific event:</li><li> ** `add(command)`:      Called after the provided `cp.commands.command` instance has been added.</li><li> ** `activate()`         Called when the command group is activated.</li><li> ** `enable()`:          Called when the command group is enabled.</li><li> ** `disable()`:         Called when the command group is disabled.</li></ul>                |

