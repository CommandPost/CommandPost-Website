# cp.apple.fcpxml.time

Allows you to convert time string values found in a FCPXML document into Lua objects,
that do all the operations using rational numbers.

Final Cut Pro expresses time values as a rational number of seconds with a 64-bit
numerator and a 32-bit denominator. Frame rates for NTSC-compatible media, for example,
use a frame duration of 1001/30000s (29.97 fps) or 1001/60000s (59.94 fps). If a time
value is equal to a whole number of seconds, Final Cut Pro may reduce the fraction
into whole seconds (for example, 5s).

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [ONE](#one)

**Functions** - _API calls offered directly by the extension_
 * [add](#add)
 * [div](#div)
 * [doesIntersect](#doesintersect)
 * [eq](#eq)
 * [gcd](#gcd)
 * [lt](#lt)
 * [max](#max)
 * [min](#min)
 * [mul](#mul)
 * [sub](#sub)
 * [tonumber](#tonumber)
 * [tostring](#tostring)
 * [unm](#unm)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)


---

## API Documentation

#### Constants


### [ONE](#one)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.ONE -> timeObject`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A time object with a value of 0/1s.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 402](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L402){target="_blank"} |

---

#### Functions


### [add](#add)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.add(a, b) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Adds one time object to another.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A new time object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 131](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L131){target="_blank"} |

---


### [div](#div)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.div(a, b) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Divides one time object with another.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A new time object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 228](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L228){target="_blank"} |

---


### [doesIntersect](#doesintersect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.doesIntersect(aStart, aDuration, bStart, bDuration) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if two clips intersect.                                                                     |
| **Parameters**                              | <ul><li>aStart - The start time of clip one as a time object.</li><li>aDuration - The duration of clip one as a time object.</li><li>bStart - The start time of clip two as a time object.</li><li>bDuration - The duration of clip two as a time object.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 370](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L370){target="_blank"} |

---


### [eq](#eq)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.eq(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Compares two time objects to ensure they're equal.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 283](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L283){target="_blank"} |

---


### [gcd](#gcd)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.gcd(numerator, denominator) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the greatest common divisor.                                                                     |
| **Parameters**                              | <ul><li>numerator - A numerator as a number</li><li>denominator - A denominator as a number</li></ul> |
| **Returns**                                 | <ul><li>A number containing the greatest common divisor.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L102){target="_blank"} |

---


### [lt](#lt)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.lt(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Is time object A less than or equal to time object B?                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A boolean</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 318](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L318){target="_blank"} |

---


### [max](#max)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.max(a, b) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the bigger of the two time objects.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A time object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 353](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L353){target="_blank"} |

---


### [min](#min)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.min(a, b) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the smaller of the two time objects.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A time object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 336](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L336){target="_blank"} |

---


### [mul](#mul)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.mul(object, value) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | To the power of a time value.                                                                     |
| **Parameters**                              | <ul><li>object - A time object.</li><li>value - The power value</li></ul> |
| **Returns**                                 | <ul><li>A new time object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 208](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L208){target="_blank"} |

---


### [sub](#sub)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.sub(a, b) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Subtract one time object from another.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li><li>b - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A new time object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 168](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L168){target="_blank"} |

---


### [tonumber](#tonumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.tonumber(a) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the number value of a time object.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A number</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 269](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L269){target="_blank"} |

---


### [tostring](#tostring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.tostring(a) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the string value of a time object.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A string</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 250](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L250){target="_blank"} |

---


### [unm](#unm)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.unm(a) -> timeObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Negates a time object.                                                                     |
| **Parameters**                              | <ul><li>a - A time object.</li></ul> |
| **Returns**                                 | <ul><li>A new time object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 151](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L151){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.fcpxml.time.new([numerator], [denominator]) -> timeObject`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             |                                                                      |
| **Parameters**                              | <ul><li>An optional numerator as a number (i.e. 3400) or a string value (i.e. "3400/2500s" or "2s"). Defaults to "0s".</li><li>A optional denominator as a number (i.e 2500)</li></ul> |
| **Returns**                                 | <ul><li>A new `cp.apple.fcpxml.time` object.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/fcpxml/time.lua line 20](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/fcpxml/time.lua#L20){target="_blank"} |

---

