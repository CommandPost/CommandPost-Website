# cp.web.html

Functions for Generating HTML markup.

This library allows the creation of 'safe' HTML using via code.

Examples:

```lua
local html = require "cp.web.html"
print html.p "Hello world!"                             -- "<p>Hello world!</p>"
print html.p { class = "custom" } "Hello world!"        -- "<p class='custom'>Hello world!</p>"
print html.p { class = "custom" } (
    html.b "Bold" .. " and " .. html.i "italic" .. "."
)
-- "<p class='custom'><b>Bold</b> and <i>italic</i>.</p>"
print html("1 < 2")                                     -- "1 &lt; 2" (escaped)
print html("1 < 2", true)                               -- "1 < 2" (unescaped)
print html.p ("<b>bold</b>", true)                      -- "<p><b>bold</b></p>"
```

Be aware that concatonating with ".." can behave unexpectedly in some cases. For example:

```lua
local name = "world!"
print html.p "Hello " .. name                   -- "<p>Hello </p>world!"
```

The `"Hello"` gets inserted into the `p` tag, but the `name` gets concatonated after the closing tag.
To get the `name` inside the `p` tag, we need to put brackets around the content:

```lua
print html.p ("Hello " .. name)                 -- "<p>Hello world!</p>"
```

Any tag name can be generated, along with any attribute. The results are correctly escaped.
There are two 'special' tag names:
 * `CDATA`  - will generate a `&lt;![CDATA[ ... ]]&gt;` section with the content contained.
 * `__`     - (double underscore) will generate a `&lt!-- ... --&gt` comment block.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
* Methods - API calls which can only be made on an object returned by a constructor
 * [append](#append)
 * [prepend](#prepend)

## API Documentation

### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.html.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `value` is an `cp.web.html` block.                                                                     |
| **Parameters**                              | <ul><li>value     - the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an HTML block, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [append](#append)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.html:append(newContent[, escaped]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Appends the content. If specified, the `escaped` value will override any default escaping for the content type.                                                                     |
| **Parameters**                              | <ul><li>newContent		- The content to append to the contents of the HTML block.</li><li>escaped			- May be set to override default escaping for the content.</li></ul> |
| **Returns**                                 | <ul><li>The same HTML block instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `newContent` may be almost any value. The default handling is below:</li><li> ** `cp.web.html` instance: Any other HTML block can be added. Default escaping: `false`.</li><li> ** `function`: Functions will be executed every time the HTML block is converted to a string. Default escaping: whatever the default is for the returned value.</li><li> ** `list`: Tables which are lists will be iterrated and each item will be evaluated each time the HTML block is converted to a string. Default escaping: the default for each item.</li><li> ** _everything else_: Converted to a string via the `tostring` function. Default escaping: `true`.</li></ul>                |

---

### [prepend](#prepend)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.html:prepend(newContent[, escaped]) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Prepends the content. If specified, the `escaped` value will override any default escaping for the content type.                                                                     |
| **Parameters**                              | <ul><li>newContent		- The content to prepend to the contents of the HTML block.</li><li>escaped			- May be set to override default escaping for the content.</li></ul> |
| **Returns**                                 | <ul><li>The same HTML block instance.</li></ul>          |
| **Notes**                                   | <ul><li>The `newContent` may be almost any value. The default handling is below:</li><li> ** `cp.web.html` instance: Any other HTML block can be added. Default escaping: `false`.</li><li> ** `function`: Functions will be executed every time the HTML block is converted to a string. Default escaping: whatever the default is for the returned value.</li><li> ** `list`: Tables which are lists will be iterrated and each item will be evaluated each time the HTML block is converted to a string. Default escaping: the default for each item.</li><li> ** _everything else_: Converted to a string via the `tostring` function. Default escaping: `true`.</li></ul>                |

---
