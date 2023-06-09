# plugins.core.setup.panel

CommandPost Setup Window Panel.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [WEBVIEW_LABEL](#webview_label)

**Functions** - _API calls offered directly by the extension_
 * [panelCount](#panelcount)
 * [panelNumber](#panelnumber)
 * [panelQueue](#panelqueue)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addButton](#addbutton)
 * [addCheckbox](#addcheckbox)
 * [addContent](#addcontent)
 * [addFooter](#addfooter)
 * [addHandler](#addhandler)
 * [addHeading](#addheading)
 * [addIcon](#addicon)
 * [addParagraph](#addparagraph)
 * [addPassword](#addpassword)
 * [addSelect](#addselect)
 * [addSubHeading](#addsubheading)
 * [addTextbox](#addtextbox)
 * [getHandler](#gethandler)


---

## API Documentation

#### Constants


### [WEBVIEW_LABEL](#webview_label)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel.WEBVIEW_LABEL -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The ID for the Webview                                                                     |
| **Notes**                                   | - None |

---

#### Functions


### [panelCount](#panelcount)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panelCount() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The number of panels currently being processed in this session. This includes panels already processed, the current panel, and remaining panels.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The number of panels.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [panelNumber](#panelnumber)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panelNumber() -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The number of the panel currently being viewed.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>the current panel number, or `0` if no panels are registered.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [panelQueue](#panelqueue)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panelQueue() -> table of panels`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The table of panels remaining to be processed. Panels are removed from the queue one at a time and displayed in the window via the `nextPanel()` function.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The table of panels remaining to be processed.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel.new(id, priority) -> plugins.core.setup.panel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new panel with the specified priority and ID.                                                                     |
| **Parameters**                              | <ul><li>priority - Defines the order in which the panel appears.</li><li>id       - The unique ID for the panel.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [addButton](#addbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addButton(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a button to the panel.                                                                     |
| **Parameters**                              | <ul><li>params - The list of parameters.</li></ul> |
| **Returns**                                 | <ul><li>The same panel.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` table may contain:</li><li> ** `id`        - (optional) the unique ID for the button. If none is provided, one is generated.</li><li> ** `value`     - The value of the button. This is sent to the `onclick` function.</li><li> ** `label`     - The text label for the button. Defaults to the `value` if not provided.</li><li> ** `width`     - The width of the button in pixels.</li><li> ** `onclick`   - the function to execute when the button is clicked. The function should have the signature of `function(id, value)`, where `id` is the id of the button that was clicked, and `value` is the value of the button.</li></ul> |

---


### [addCheckbox](#addcheckbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addCheckbox(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a checkbox to the panel with the specified `params`.                                                                     |
| **Parameters**                              | <ul><li>`params`     - The set of parameters for the checkbox.</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can contain the following fields:</li><li> ** `id`        - (optional) The unique ID. If none is provided, one will be generated.</li><li> ** `name`      - (optional) The name of the checkbox field.</li><li> ** `label`     - (optional) The text label to display after the checkbox.</li><li> ** `onchange`  - (optional) a function that will get called when the checkbox value changes. It will be passed two parameters, `id` and `params`, the latter of which is a table containing the `value` and `checked` values of the checkbox.</li><li> ** `class`     - (optional) the CSS class list to apply to the checkbox.</li></ul> |

---


### [addContent](#addcontent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addContent(content[, escaped]) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified `content` to the panel.                                                                     |
| **Parameters**                              | <ul><li>`content` - a value that can be converted to a string.</li><li>`escaped` - if `true`, the content will not be escaped. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>The panel.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addFooter](#addfooter)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addFooter(content, unescaped) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified `content` to the panel's footer.                                                                     |
| **Parameters**                              | <ul><li>`content` - a value that can be converted to a string.</li><li>`unescaped` - if `true`, the content will not be escaped. Defaults to true.</li></ul> |
| **Returns**                                 | <ul><li>The panel.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addHandler](#addhandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addHandler(event, id, handlerFn, keys) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a handler from an Handler ID                                                                     |
| **Parameters**                              | <ul><li>event - The event</li><li>id - the Handler ID</li><li>handlerFn - The Handler function</li><li>keys - Keys</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addHeading](#addheading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addHeading(text) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a heading to the panel                                                                     |
| **Parameters**                              | <ul><li>text - The text of the heading as a string</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addIcon](#addicon)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addIcon(src) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds an icon to the panel.                                                                     |
| **Parameters**                              | <ul><li>src - Location of the icon.</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addParagraph](#addparagraph)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addParagraph(content[, escaped[, class]]) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a Paragraph to the panel                                                                     |
| **Parameters**                              | <ul><li>content - The content as a string</li><li>escaped - Whether or not the HTML should be escaped as a boolean</li><li>class - The class as a string</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addPassword](#addpassword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addPassword(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a password text-box to the panel.                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addSelect](#addselect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addSelect(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a select to the panel.                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addSubHeading](#addsubheading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addSubHeading(text) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a sub-heading to the panel                                                                     |
| **Parameters**                              | <ul><li>text - The text of the sub-heading as a string</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [addTextbox](#addtextbox)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:addTextbox(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a text-box to the panel                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [getHandler](#gethandler)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.setup.panel:getHandler(id) -> handler`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a handler from an Handler ID                                                                     |
| **Parameters**                              | <ul><li>`id` - the Handler ID</li></ul> |
| **Returns**                                 | <ul><li>A handler.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

