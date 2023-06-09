# cp.ui.axutils.compare

Contains functions for comparing `axuielement`s.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [bottomToTop](#bottomtotop)
 * [leftToRight](#lefttoright)
 * [rightToLeft](#righttoleft)
 * [topToBottom](#toptobottom)


---

## API Documentation

#### Functions


### [bottomToTop](#bottomtotop)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.bottomToTop(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is below element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is below `b`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 467](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L467){target="_blank"} |

---


### [leftToRight](#lefttoright)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.leftToRight(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is left of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is left of `b`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 419](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L419){target="_blank"} |

---


### [rightToLeft](#righttoleft)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.rightToLeft(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is right of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is right of `b`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 435](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L435){target="_blank"} |

---


### [topToBottom](#toptobottom)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.topToBottom(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is above element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is above `b`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/ui/axutils.lua line 451](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/ui/axutils.lua#L451){target="_blank"} |

---

