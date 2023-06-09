# cp.apple.finalcutpro.content.Clip

Represents a clip of media inside FCP.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [filmstrip](#filmstrip)
 * [row](#row)

**Functions** - _API calls offered directly by the extension_
 * [is](#is)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [new](#new)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [getTitle](#gettitle)
 * [getType](#gettype)
 * [setTitle](#settitle)
 * [UI](#ui)


---

## API Documentation

#### Constants


### [filmstrip](#filmstrip)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip.type.filmstrip`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A constant for clips which are represented by a filmstrip.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L18){target="_blank"} |

---


### [row](#row)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip.type.row`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | A constant for clips which are represented by a table row.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 23](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L23){target="_blank"} |

---

#### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the specified `thing` is a `Clip` instance.                                                                     |
| **Parameters**                              | <ul><li>`thing`  - The thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `thing` is a `Clip`, otherwise returns `false`.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 125](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L125){target="_blank"} |

---

#### Constructors


### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip.new(element[, options]) -> Clip`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Clip` pointing at the specified element, with the specified options.                                                                     |
| **Parameters**                              | <ul><li>`element`        - The `axuielement` the clip represents.</li><li>`options`        - A table containing the options for the clip.</li></ul> |
| **Returns**                                 | <ul><li>The new `Clip`.</li></ul>          |
| **Notes**                                   | <ul><li>The options may be:</li><li> ** `columnIndex`   - A number which will be used to specify the column number to find the title in, if relevant.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 102](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L102){target="_blank"} |

---

#### Methods


### [getTitle](#gettitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip:getTitle() -> String`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the title of the clip.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The clip title.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 54](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L54){target="_blank"} |

---


### [getType](#gettype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip:getType() -> Clip.type`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the type of clip (one of the `Clip.type` values)                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Clip.type` value (e.g. `Clip.type.row` or Clip.type.filmstrip`)</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 41](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L41){target="_blank"} |

---


### [setTitle](#settitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip:setTitle(title) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the title of a clip.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 73](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L73){target="_blank"} |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.content.Clip:UI() -> axuielement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `axuielement` for the clip.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `axuielement` for the clip.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/content/Clip.lua line 28](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/content/Clip.lua#L28){target="_blank"} |

---

