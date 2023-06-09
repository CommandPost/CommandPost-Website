# cp.apple.finalcutpro.main.KeywordField

Keyword Text Field Module.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [KeywordField](#KeywordField)
* Methods - API calls which can only be made on an object returned by a constructor
 * [addKeyword](#addKeyword)
 * [removeKeyword](#removeKeyword)

## API Documentation

### Constructors

| [KeywordField](#KeywordField)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField(parent, uiFinder) -> KeywordField`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new KeywordField.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent object.</li><li>uiFinder - The `function` or `cp.prop` that provides the axuielement.</li></ul> |
| **Returns**                                 | <ul><li>The new `KeywordField`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Methods

| [addKeyword](#addKeyword)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField:addKeyword(keyword) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to add the specified keyword.                                                                     |
| **Parameters**                              | <ul><li>keyword - The keyword string to add.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the keyword was not present and added, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [removeKeyword](#removeKeyword)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField:removeKeyword(keyword) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to remove the specified keyword.                                                                     |
| **Parameters**                              | <ul><li>keyword - The keyword string to remove.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the keyword was present and removed, otherwise false.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

