# [docs](index.md) » plugins.core.preferences.manager.panel
---

CommandPost Preferences Panel.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [addButton](#addButton)
 * [addCheckbox](#addCheckbox)
 * [addContent](#addContent)
 * [addHandler](#addHandler)
 * [addHeading](#addHeading)
 * [addParagraph](#addParagraph)
 * [addPassword](#addPassword)
 * [addSelect](#addSelect)
 * [addTextbox](#addTextbox)
 * [getToolbarItem](#getToolbarItem)

## API Documentation

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel.new(params, manager) -> cp.core.preferences.manager.panel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new panel with the specified priority and ID.                                                                     |
| **Parameters**                              | <ul><li>params - Table of parameters</li><li>manager - The manager</li></ul> |
| **Returns**                                 | <ul><li>A `cp.core.preferences.manager.panel` object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [addButton](#addButton)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addButton(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a button to the panel.                                                                     |
| **Parameters**                              | <ul><li>params - The list of parameters.</li></ul> |
| **Returns**                                 | <ul><li>The same panel.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` table may contain:</li><li> ** `id`        - (optional) the unique ID for the button. If none is provided, one is generated.</li><li> ** `value`     - The value of the button. This is sent to the `onclick` function.</li><li> ** `label`     - The text label for the button. Defaults to the `value` if not provided.</li><li> ** `width`     - The width of the button in pixels.</li><li> ** `onclick`   - the function to execute when the button is clicked. The function should have the signature of `function(id, value)`, where `id` is the id of the button that was clicked, and `value` is the value of the button.</li></ul>                |

| [addCheckbox](#addCheckbox)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addCheckbox(priority, params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a checkbox to the panel with the specified `priority` and `params`.                                                                     |
| **Parameters**                              | <ul><li>`priority`   - The priority number for the checkbox.</li><li>`params`     - The set of parameters for the checkbox.</li></ul> |
| **Returns**                                 | <ul><li>The panel.</li></ul>          |
| **Notes**                                   | <ul><li>The `params` can contain the following fields:</li><li> ** `id`         - (optional) The unique ID. If none is provided, one will be generated.</li><li> ** `name`       - (optional) The name of the checkbox field.</li><li> ** `label`      - (optional) The text label to display after the checkbox.</li><li> ** `onchange`   - (optional) a function that will get called when the checkbox value changes. It will be passed two parameters, `id` and `params`, the latter of which is a table containing the `value` and `checked` values of the checkbox.</li><li> ** `class`      - (optional) the CSS class list to apply to the checkbox.</li></ul>                |

| [addContent](#addContent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addContent(priority, content[, escaped]) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds the specified `content` to the panel, with the specified `priority` order.                                                                     |
| **Parameters**                              | <ul><li>`priority`        - the priority order of the content.</li><li>`content`         - a value that can be converted to a string.</li><li>`escaped`         - if `true`, the content will be escaped.</li></ul> |
| **Returns**                                 | <ul><li>The panel.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addHandler](#addHandler)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addHandler(event, id, handlerFn, keys) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets a handler from an Handler ID                                                                     |
| **Parameters**                              | <ul><li>event - The event</li><li>id - the Handler ID</li><li>handlerFn - The Handler function</li><li>keys - Keys</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addHeading](#addHeading)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addHeading(text) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a heading to the panel                                                                     |
| **Parameters**                              | <ul><li>text - The text of the heading as a string</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addParagraph](#addParagraph)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addParagraph(content[, escaped[, class]]) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a Paragraph to the panel                                                                     |
| **Parameters**                              | <ul><li>content - The content as a string</li><li>escaped - Whether or not the HTML should be escaped as a boolean. Defaults to `true` for simple text.</li><li>class - The class as a string</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addPassword](#addPassword)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addPassword(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a password text-box to the panel.                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addSelect](#addSelect)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addSelect(priority, params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a select to the panel.                                                                     |
| **Parameters**                              | <ul><li>priority - Priority of the item as number.</li><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [addTextbox](#addTextbox)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:addTextbox(params) -> panel`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a text-box to the panel                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters</li></ul> |
| **Returns**                                 | <ul><li>The panel object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [getToolbarItem](#getToolbarItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.preferences.manager.panel:getToolbarItem() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the Tool Bar as a table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The toolbar item as a table.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

