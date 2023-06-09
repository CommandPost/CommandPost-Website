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

### Functions


### [button](#button)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.button(data, customTrigger, customWidth, customID) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Button                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li><li>customWidth - Number to set the width of the button to</li><li>customID - Overrides the random HTML ID</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [checkbox](#checkbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.checkbox(data, customTrigger, customID) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Checkbox                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li><li>customID - Custom ID used for the HTML objects</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [dropdown](#dropdown)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.dropdown(title, data, customTrigger) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Dropdown                                                                     |
| **Parameters**                              | <ul><li>title - Title to put in front of the Dropdown. Can be "".</li><li>data - Table containing the data you want to display on the Checkbox</li><li>customTrigger - Custom label used for JavaScript Callback</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [heading](#heading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.heading(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Heading                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [javascript](#javascript)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.javascript(script, context) -> cp.web.html`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a HTML Heading                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display on the Checkbox</li><li>context - The context</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setWebviewLabel](#setwebviewlabel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.setWebviewLabel() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the WebView Label                                                                     |
| **Parameters**                              | <ul><li>value - WebView Label as string</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [text](#text)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.web.generate.text(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates a blank HTML                                                                     |
| **Parameters**                              | <ul><li>data - Table containing the data you want to display.</li></ul> |
| **Returns**                                 | <ul><li>String containing the HTML</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
