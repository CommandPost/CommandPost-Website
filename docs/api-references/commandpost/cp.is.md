# cp.is

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

---

## API Overview
**Functions** - _API calls offered directly by the extension_
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


---

## API Documentation

#### Functions


### [blank](#blank)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.blank(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a blank string value - either `nil` or `tostring(value) == ""`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 222](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L222) |

---


### [boolean](#boolean)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.boolean(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `function`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 93](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L93) |

---


### [callable](#callable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.callable(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a callable - either a `function` or a `table` with `__call` in it's metatable hierarchy.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 209](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L209) |

---


### [falsey](#falsey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.falsey(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `falsey` value. A value is considered to be `falsey` if it is `nil` or `false`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 171](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L171) |

---


### [fn](#fn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.fn(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `function`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 67](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L67) |

---


### [instance](#instance)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.instance(value, class) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is an instance of the provided class `table`. It is considered an instance if the `class` is either the value itself, or is the `__index` or `__class` field of the `metatable`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li><li>class     - the class table to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 235](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L235) |

---


### [list](#list)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.list(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `list`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 145](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L145) |

---


### [nothing](#nothing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.nothing(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is `nil`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L28) |

---


### [number](#number)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.number(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `number`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 80](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L80) |

---


### [object](#object)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.object(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `object`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 132](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L132) |

---


### [something](#something)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.something(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is not `nil`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L41) |

---


### [string](#string)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.string(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a string.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L54) |

---


### [table](#table)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.table(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `table`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 106](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L106) |

---


### [truthy](#truthy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.truthy(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `truthy` value. A value is considered to be truthy if it is not `nil` nor `false`.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 158](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L158) |

---


### [userdata](#userdata)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.is.userdata(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Check if the value is a `userdata` object.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it matches, `false` if not.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp//is.lua line 119](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp//is.lua#L119) |

---

