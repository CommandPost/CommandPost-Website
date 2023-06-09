# cp.apple.finalcutpro.main.KeywordEditor

Keyword Editor Module.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_SHORTCUTS](#NUMBER_OF_SHORTCUTS)
* Functions - API calls offered directly by the extension
 * [matches](#matches)
* Constructors - API calls which return an object, typically one that offers API methods
 * [KeywordEditor](#KeywordEditor)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [isShowing](#isShowing)
 * [keyboardShortcuts](#keyboardShortcuts)
 * [keywords](#keywords)
 * [resetButton](#resetButton)
 * [shortcutButtons](#shortcutButtons)
 * [shortcutFields](#shortcutFields)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doHide](#doHide)
 * [doShow](#doShow)
 * [hide](#hide)
 * [parent](#parent)
 * [show](#show)

## API Documentation

### Constants


### [NUMBER_OF_SHORTCUTS](#NUMBER_OF_SHORTCUTS)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.NUMBER_OF_SHORTCUTS -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The number of Keyword Keyboard shortcuts available.                                                                     |

---
### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an `hs.axuielement` object matches a Keyword Editor window                                                                     |
| **Parameters**                              | <ul><li>element - the `hs.axuielement` object you want to check</li></ul> |
| **Returns**                                 | <ul><li>`true` if a match otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [KeywordEditor](#KeywordEditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor(parent) -> KeywordEditor object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new KeywordEditor object                                                                     |
| **Parameters**                              | <ul><li>`parent`     - The parent</li></ul> |
| **Returns**                                 | <ul><li>A KeywordEditor object</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [isShowing](#isShowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.isShowing <cp.prop: boolean; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates whether or not the Keyword Editor is currently showing.                                                                     |

---

### [keyboardShortcuts](#keyboardShortcuts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keyboardShortcuts <cp.ui.DisclosureWindow>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `DisclosureTriangle` that shows/hides the keyboard shortcuts configuration.                                                                     |

---

### [keywords](#keywords)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.keywords <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | A `TextField` that contains the current keywords. The value is a `table` of `string` values for each individual keyword.                                                                     |

---

### [resetButton](#resetButton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.resetButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Button` that resets the current keywords to blank.                                                                     |

---

### [shortcutButtons](#shortcutButtons)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutButtons <table of cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `Button`s. The button for `Cmd+1` is accessed via `shortcutButtons[1]`, and so on.                                                                     |

---

### [shortcutFields](#shortcutFields)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor.shortcutFields <table of KeywordField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The list of keyboard shortcut `KeywordField`s. The field for `Cmd+1` is accessed via `shortcutFields[1]`, and so on.                                                                     |

---
### Methods


### [doHide](#doHide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that hides the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doShow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A `Statement` that shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:hide() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:parent() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the KeywordEditor's parent table                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The parent object as a table</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.KeywordEditor:show() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the Keyword Editor.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>KeywordEditor object</li><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
