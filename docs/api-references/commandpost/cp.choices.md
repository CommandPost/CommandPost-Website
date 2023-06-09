# cp.choices

Choices Module.

---

## Submodules
 * [cp.choices.builder](cp.choices.builder.md)

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [getChoices](#getchoices)
 * [new](#new)


---

## API Documentation

#### Functions


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices.new(type) -> choices`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new `cp.choices` instance for the specified type.                                                                     |
| **Parameters**                              | <ul><li>`type` - The unique ID for the type.</li></ul> |
| **Returns**                                 | <ul><li>The new `choices` instance.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/choices/init.lua line 105](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/choices/init.lua#L105) |

---

#### Methods


### [getChoices](#getchoices)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices:getChoices() -> array of choices`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the array of choices that have been added to this instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The array of choices.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/choices/init.lua line 157](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/choices/init.lua#L157) |

---


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.choices:new(choiceType) -> choices.builder`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new choice with the specified.                                                                     |
| **Parameters**                              | <ul><li>`text`	- The text title for the choice.</li></ul> |
| **Returns**                                 | <ul><li>The choice builder, added to the choices set.</li></ul>          |
| **Notes**                                   | <ul><li>Additional settings can be set using the returned builder instance. E.g.:</li><li></li><li>```</li><li>choices:add("Do Something")</li><li>	:subText("Cool Actions")</li><li>		:params({</li><li>		one = "foo",</li><li>		two = "bar",</li><li>	})</li><li>```</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/choices/init.lua line 127](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/choices/init.lua#L127) |

---

