# cp.web.generate

Functions for Generating HTML UI Items

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [button](#button)
 * [checkbox](#checkbox)
 * [dropdown](#dropdown)
 * [heading](#heading)
 * [javascript](#javascript)
 * [setWebviewLabel](#setwebviewlabel)
 * [text](#text)


---

## API Documentation

#### Functions


### [button](#button)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.button(data, customTrigger, customWidth, customID) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Button                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li><li>customWidth - Number to set the width of the button to</li><li>customID - Overrides the random HTML ID</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 141](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L141) |

---


### [checkbox](#checkbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.checkbox(data, customTrigger, customID) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Checkbox                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li><li>customID - Custom ID used for the HTML objects</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L59) |

---


### [dropdown](#dropdown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.dropdown(title, data, customTrigger) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Dropdown                                                                     |
| **Parameters**                              | <ul><li>title - Title to put in front of the Dropdown. Can be "".</li><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L183) |

---


### [heading](#heading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.heading(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Heading                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 115](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L115) |

---


### [javascript](#javascript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.javascript(script, context) -> cp.web.html`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Heading                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>context - The context</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 98](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L98) |

---


### [setWebviewLabel](#setwebviewlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.setWebviewLabel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the WebView Label                                                                     |
| **Parameters**                              | <ul><li>value - WebView Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 46](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L46) |

---


### [text](#text)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.text(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a blank HTML                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display.</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/web/generate.lua line 128](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/web/generate.lua#L128) |

---

