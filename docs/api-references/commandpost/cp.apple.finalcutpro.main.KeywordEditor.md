# cp.apple.finalcutpro.main.KeywordEditor

Keyword Editor Module.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NUMBER_OF_SHORTCUTS](#number_of_shortcuts)

**Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [KeywordEditor](#keywordeditor)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [isShowing](#isshowing)
 * [keyboardShortcuts](#keyboardshortcuts)
 * [keywords](#keywords)
 * [resetButton](#resetbutton)
 * [shortcutButtons](#shortcutbuttons)
 * [shortcutFields](#shortcutfields)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doHide](#dohide)
 * [doShow](#doshow)
 * [hide](#hide)
 * [parent](#parent)
 * [show](#show)


---

## API Documentation

#### Constants


### [NUMBER_OF_SHORTCUTS](#number_of_shortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.NUMBER_OF_SHORTCUTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of Keyword Keyboard shortcuts available.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 26](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L26){target="_blank"} |

---

#### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an `hs.axuielement` object matches a Keyword Editor window                                                                     |
| **Parameters**                              | <ul><li>element - the `hs.axuielement` object you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if a match otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 31](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L31){target="_blank"} |

---

#### Constructors


### [KeywordEditor](#keywordeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor(parent) -> KeywordEditor object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new KeywordEditor object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A KeywordEditor object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 64](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L64){target="_blank"} |

---

#### Fields


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.isShowing <cp.prop: boolean; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates whether or not the Keyword Editor is currently showing.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 112](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L112){target="_blank"} |

---


### [keyboardShortcuts](#keyboardshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keyboardShortcuts <cp.ui.DisclosureWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `DisclosureTriangle` that shows/hides the keyboard shortcuts configuration.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 183](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L183){target="_blank"} |

---


### [keywords](#keywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keywords <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that contains the current keywords. The value is a `table` of `string` values for each individual keyword.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 173](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L173){target="_blank"} |

---


### [resetButton](#resetbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.resetButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Button` that resets the current keywords to blank.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 238](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L238){target="_blank"} |

---


### [shortcutButtons](#shortcutbuttons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutButtons <table of cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `Button`s. The button for `Cmd+1` is accessed via `shortcutButtons[1]`, and so on.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 218](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L218){target="_blank"} |

---


### [shortcutFields](#shortcutfields)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutFields <table of KeywordField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `KeywordField`s. The field for `Cmd+1` is accessed via `shortcutFields[1]`, and so on.                                                                     |
| **Notes**                                   | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 198](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L198){target="_blank"} |

---

#### Methods


### [doHide](#dohide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that hides the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 160](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L160){target="_blank"} |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 133](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L133){target="_blank"} |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:hide() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L146){target="_blank"} |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:parent() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the KeywordEditor's parent table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The parent object as a table</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 89](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L89){target="_blank"} |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua line 119](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/apple/finalcutpro/main/KeywordEditor.lua#L119){target="_blank"} |

---

