# plugins.core.touchbar.manager.widgets

Touch Bar Widgets Manager

## API Overview
* Variables - Configurable values
 * [widgets](#widgets)
* Functions - API calls offered directly by the extension
 * [allGroups](#allGroups)
* Methods - API calls which can only be made on an object returned by a constructor
 * [get](#get)
 * [getAll](#getAll)
 * [id](#id)
 * [new](#new)
 * [params](#params)

## API Documentation

### Variables

| [widgets](#widgets)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Widget Manager                                                                     |

### Functions

| [allGroups](#allGroups)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets.allGroups() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing all of the widget groups.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [get](#get)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:get(id) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a Touch Bar widget                                                                     |
| **Parameters**                              | <ul><li>`id`      - The unique ID for the widget you want to return.</li></ul> |
| **Returns**                                 | <ul><li>table containing the widget</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getAll](#getAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:getAll() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns all of the created widgets                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>table containing all of the created callbacks</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [id](#id)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:id() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the ID of the widget                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The ID of the widget as a `string`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:new(id, params) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new Touch Bar Widget.                                                                     |
| **Parameters**                              | <ul><li>`id` - The unique ID for this widget.</li><li>`params` - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>table that has been created</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [params](#params)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.touchbar.manager.widgets:params() -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the paramaters of the widget                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The paramaters of the widget</li></ul>          |
| **Notes**                                   | <ul></ul>                |

