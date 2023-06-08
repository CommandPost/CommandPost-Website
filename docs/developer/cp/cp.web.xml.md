# [docs](index.md) » cp.web.xml
---

Functions for Generating XML markup.

This library allows the creation of 'safe' XML using via code.

Examples:

```lua
local xml = require "cp.web.xml"
print xml.Root "Hello world!"						-- "<Root>Hello world!</Root>"
print xml.Root { class = "custom" } "Hello world!"	-- "<Root class='custom'>Hello world!</Root>"
print xml.Root { class = "custom" } (
	xml.Child "One" .. " and " .. xml.Child "Two" .. "."
)
-- "<Root class='custom'><Child>One</Child> and <Child>Two</Child>.</Root>"
print xml("1 < 2")										-- "1 &lt; 2" (escaped)
print xml("1 < 2", true)								-- "1 < 2" (unescaped)
print xml.Root ("<Child>One</Child>", true)				-- "<Root><Child>One</Child></Root>"
```

Be aware that concatonating with ".." can behave unexpectedly in some cases. For example:

```lua
local name = "world!"
print xml.Root "Hello " .. name					-- "<Root>Hello </Root>world!"
```

The `"Hello"` gets inserted into the `Root` tag, but the `name` gets concatonated after the closing tag.
To get the `name` inside the `Root` tag, we need to put brackets around the content:

```lua
print xml.Root ("Hello " .. name)					-- "<Root>Hello world!</Root>"
```

Any tag name can be generated, along with any attribute. The results are correctly escaped.
There are two 'special' tag names:
 * `CDATA`	- will generate a `&lt;![CDATA[ ... ]]&gt;` section with the content contained.
 * `__`		- (double underscore) will generate a `&lt!-- ... --&gt` comment block.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)

## API Documentation

### Functions

| [is](#is)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.xml.is(value) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `value` is an `cp.web.xml` block.                                                                     |
| **Parameters**                              | <ul><li>value		- the value to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is an HTML block, or `false` otherwise.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

