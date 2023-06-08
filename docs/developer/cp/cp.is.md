# [docs](index.md) » cp.is
---

A simple class that lets you test if a value `is` a particular type.
Notes: for best performance, assign the specific checks you want to use to local functions. Eg:

```lua
local is_nothing = require("cp.is").nothing
is_nothing(nil) == true
```

You can also get functions that negate the functions below by calling `is.nt.XXX(...)` (read: "isn't XXX").
The individual functions are not documented, but all will work as expected. Eg:

```lua
is.blank("") == true
is.nt.blank("") == false
```

They can also be assigned directly to local values for better performance:

```lua
local isnt_blank = is.nt.blank
isnt_blank(nil) == false
```

## API Overview
* Functions - API calls offered directly by the extension
 * [blank](#blank)
 * [boolean](#boolean)
 * [callable](#callable)
 * [falsey](#falsey)
 * [fn](#fn)
 * [instance](#instance)
 * [list](#list)
 * [nothing](#nothing)
 * [number](#number)
 * [object](#object)
 * [something](#something)
 * [string](#string)
 * [table](#table)
 * [truthy](#truthy)
 * [userdata](#userdata)

## API Documentation

### Functions

| [blank](#blank)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.blank(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a blank string value - either `nil` or `tostring(value) == ""`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [boolean](#boolean)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.boolean(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `function`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [callable](#callable)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.callable(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a callable - either a `function` or a `table` with `__call` in it's metatable hierarchy.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [falsey](#falsey)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.falsey(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `falsey` value. A value is considered to be `falsey` if it is `nil` or `false`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [fn](#fn)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.fn(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `function`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [instance](#instance)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.instance(value, class) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is an instance of the provided class `table`. It is considered an instance if the `class` is either the value itself, or is the `__index` or `__class` field of the `metatable`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li><li>class     - the class table to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [list](#list)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.list(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `list`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [nothing](#nothing)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.nothing(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is `nil`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [number](#number)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.number(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `number`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [object](#object)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.object(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `object`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [something](#something)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.something(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is not `nil`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [string](#string)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.string(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a string.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [table](#table)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.table(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `table`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [truthy](#truthy)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.truthy(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `truthy` value. A value is considered to be truthy if it is not `nil` nor `false`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [userdata](#userdata)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.userdata(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `userdata` object.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

