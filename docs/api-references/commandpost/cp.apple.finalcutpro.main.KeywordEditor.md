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
| **Notes**                                   | - None |

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
| **Notes**                                   | <ul></ul> |

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
| **Notes**                                   | <ul></ul> |

---

#### Fields


### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.isShowing <cp.prop: boolean; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates whether or not the Keyword Editor is currently showing.                                                                     |
| **Notes**                                   | - None |

---


### [keyboardShortcuts](#keyboardshortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keyboardShortcuts <cp.ui.DisclosureWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `DisclosureTriangle` that shows/hides the keyboard shortcuts configuration.                                                                     |
| **Notes**                                   | - None |

---


### [keywords](#keywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keywords <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that contains the current keywords. The value is a `table` of `string` values for each individual keyword.                                                                     |
| **Notes**                                   | - None |

---


### [resetButton](#resetbutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.resetButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Button` that resets the current keywords to blank.                                                                     |
| **Notes**                                   | - None |

---


### [shortcutButtons](#shortcutbuttons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutButtons <table of cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `Button`s. The button for `Cmd+1` is accessed via `shortcutButtons[1]`, and so on.                                                                     |
| **Notes**                                   | - None |

---


### [shortcutFields](#shortcutfields)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutFields <table of KeywordField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `KeywordField`s. The field for `Cmd+1` is accessed via `shortcutFields[1]`, and so on.                                                                     |
| **Notes**                                   | - None |

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
| **Notes**                                   | <ul></ul> |

---


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:hide() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:parent() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the KeywordEditor's parent table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The parent object as a table</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

