# plugins.finalcutpro.menu.menuaction

A `action` which will trigger an Final Cut Pro menu with a matching path, if available/enabled.
Registers itself with the `plugins.core.actions.actionmanager`.

## API Overview
* Functions - API calls offered directly by the extension
 * [actionId](#actionId)
 * [init](#init)

## API Documentation

### Functions

| [actionId](#actionId)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.menuaction.actionId(params) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the action ID from the parameters table.                                                                     |
| **Parameters**                              | <ul><li>params - Parameters table.</li></ul> |
| **Returns**                                 | <ul><li>Action ID as string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [init](#init)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.menuaction.init(actionmanager) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initialises the Menu Action plugin                                                                     |
| **Parameters**                              | <ul><li>`actionmanager` - the Action Manager plugin</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |
