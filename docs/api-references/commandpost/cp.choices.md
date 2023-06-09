# cp.choices

Choices Module.

## Submodules
 * [cp.choices.builder](cp.choices.builder.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [getChoices](#getChoices)
 * [new](#new)

## API Documentation

### Functions

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.new(type) -> choices`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.choices` instance for the specified type.                                                                     |
| **Parameters**                              | <ul><li>`type` - The unique ID for the type.</li></ul> |
| **Returns**                                 | <ul><li>The new `choices` instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [getChoices](#getChoices)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices:getChoices() -> array of choices`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the array of choices that have been added to this instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The array of choices.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices:new(choiceType) -> choices.builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new choice with the specified.                                                                     |
| **Parameters**                              | <ul><li>`text`	- The text title for the choice.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder, added to the choices set.</li></ul>          |
| **Notes**                                   | <ul><li>Additional settings can be set using the returned builder instance. E.g.:</li><li></li><li>```</li><li>choices:add("Do Something")</li><li>	:subText("Cool Actions")</li><li>		:params({</li><li>		one = "foo",</li><li>		two = "bar",</li><li>	})</li><li>```</li></ul>                |

