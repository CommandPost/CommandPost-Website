# cp.choices.builder

Choices Builder Module.

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [id](#id)
 * [image](#image)
 * [params](#params)
 * [subText](#subtext)
 * [text](#text)

## API Documentation

### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder.new(choiceType) -> builder`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new choice builder instance.                                                                     |
| **Parameters**                              | <ul><li>`choice`	- The choice instance to configure.</li></ul> |
| **Returns**                                 | <ul><li>The new choice builder.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Methods


### [id](#id)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder:id(value) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the ID of the choice.                                                                     |
| **Parameters**                              | <ul><li>`value` - The ID.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [image](#image)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder:image(value) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the image of the choice.                                                                     |
| **Parameters**                              | <ul><li>value - A `hs.image` image object that will be displayed next to the choice</li></ul> |
| **Returns**                                 | <ul><li>The choice builder.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [params](#params)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder:params(value) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies a table of parameter values for the choice. These values need to be simple - text, numbers, booleans, or tables.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The table of parameters.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder, added to the choices set.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [subText](#subtext)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder:subText(value) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the `subText` value for the choice being built.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The subText title for the choice.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [text](#text)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.builder:text(value) -> builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Specifies the text value for the choice being built.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The text title for the choice.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder, added to the choices set.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
