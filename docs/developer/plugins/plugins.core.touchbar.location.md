# [docs](index.md) » plugins.core.touchbar.location
---

Virtual Touch Bar Update Location Callback

## API Overview
* Methods - API calls which can only be made on an object returned by a constructor
 * [callbackFn](#callbackFn)
 * [delete](#delete)
 * [get](#get)
 * [getAll](#getAll)
 * [id](#id)
 * [new](#new)

## API Documentation

### Methods

| [callbackFn](#callbackFn)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:callbackFn() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the callbackFn of the current Update Location Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The callbackFn of the current Shutdown Callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [delete](#delete)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:delete() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Deletes a Update Location Callback based on an ID.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [get](#get)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets an Update Location Callback based on an ID.                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID for the callback you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the callback</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getAll](#getAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created Update Location Callbacks                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [id](#id)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the current Update Location Callback                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the current File Dropped to Dock Icon Callback as a `string`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.location:new(id, callbackFn) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Update Location Callback                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this callback.</li><li>`callbackFn` - The callback function.</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul></ul>                |

