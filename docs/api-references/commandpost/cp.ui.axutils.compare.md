# cp.ui.axutils.compare

Contains functions for comparing `axuielement`s.

## API Overview
* Functions - API calls offered directly by the extension
 * [bottomToTop](#bottomToTop)
 * [leftToRight](#leftToRight)
 * [rightToLeft](#rightToLeft)
 * [topToBottom](#topToBottom)

## API Documentation

### Functions

| [bottomToTop](#bottomToTop)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.bottomToTop(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is below element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is below `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [leftToRight](#leftToRight)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.leftToRight(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is left of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is left of `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [rightToLeft](#rightToLeft)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.rightToLeft(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is right of element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is right of `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [topToBottom](#topToBottom)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.ui.axutils.compare.topToBottom(a, b) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns `true` if element `a` is above element `b`. May be used with `table.sort`.                                                                     |
| **Parameters**                              | <ul><li>a - The first element</li><li>b - The second element</li></ul> |
| **Returns**                                 | <ul><li>`true` if `a` is above `b`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |
