# cp.apple.finalcutpro.main.KeywordField

Keyword Text Field Module.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [KeywordField](#keywordfield)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addKeyword](#addkeyword)
 * [removeKeyword](#removekeyword)


---

## API Documentation

#### Constructors


### [KeywordField](#keywordfield)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField(parent, uiFinder) -> KeywordField`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new KeywordField.                                                                     |
| **Parameters**                              | <ul><li>parent - the parent object.</li><li>uiFinder - The `function` or `cp.prop` that provides the axuielement.</li></ul> |
| **Returns**                                 | <ul><li>The new `KeywordField`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordField.lua line 17](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordField.lua#L17) |

---

#### Methods


### [addKeyword](#addkeyword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField:addKeyword(keyword) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to add the specified keyword.                                                                     |
| **Parameters**                              | <ul><li>keyword - The keyword string to add.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the keyword was not present and added, otherwise false.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordField.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordField.lua#L53) |

---


### [removeKeyword](#removekeyword)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordField:removeKeyword(keyword) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Attempts to remove the specified keyword.                                                                     |
| **Parameters**                              | <ul><li>keyword - The keyword string to remove.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the keyword was present and removed, otherwise false.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordField.lua line 77](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordField.lua#L77) |

---

