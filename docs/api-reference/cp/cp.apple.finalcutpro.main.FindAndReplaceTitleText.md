# [docs](index.md) » cp.apple.finalcutpro.main.FindAndReplaceTitleText
---

Represents a "Find and Replace Title Text" dialogue box.

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [FindAndReplaceTitleText](#FindAndReplaceTitleText)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [findText](#findText)
 * [loopSearch](#loopSearch)
 * [matchCase](#matchCase)
 * [next](#next)
 * [previous](#previous)
 * [replace](#replace)
 * [replaceAll](#replaceAll)
 * [replaceAndFind](#replaceAndFind)
 * [replaceText](#replaceText)
 * [searchIn](#searchIn)
 * [wholeWords](#wholeWords)
* Methods - API calls which can only be made on an object returned by a constructor
 * [doFindAndReplaceAll](#doFindAndReplaceAll)
 * [doHide](#doHide)
 * [doShow](#doShow)

## API Documentation

### Constructors

| [FindAndReplaceTitleText](#FindAndReplaceTitleText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText(cpApp)`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new "Find and Replace Title Text" [Dialog](cp.ui.Dialog.md)                                                                     |
| **Parameters**                              | <ul><li>cpApp - The cpApp</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [findText](#findText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.findText <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Find" search field, as a [TextField](cp.ui.TextField.md)                                                                     |

| [loopSearch](#loopSearch)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.loopSearch <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Loop search" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [matchCase](#matchCase)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.matchCase <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Match case" [CheckBox](cp.ui.CheckBox.md).                                                                     |

| [next](#next)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.next <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Next" [Button](cp.ui.Button.md).                                                                     |

| [previous](#previous)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.previous <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Previous" [Button](cp.ui.Button.md).                                                                     |

| [replace](#replace)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.replace <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Replace" [Button](cp.ui.Button.md).                                                                     |

| [replaceAll](#replaceAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.replaceAll <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Replace All" [Button](cp.ui.Button.md).                                                                     |

| [replaceAndFind](#replaceAndFind)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.replaceAndFind <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Replace & Find" [Button](cp.ui.Button.md).                                                                     |

| [replaceText](#replaceText)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.replaceText <cp.ui.TextField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Replace" search field, as a [TextField](cp.ui.TextField.md)                                                                     |

| [searchIn](#searchIn)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.searchIn <cp.ui.PopUpButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Search In" [PopUpButton](cp.ui.PopUpButton.md).                                                                     |

| [wholeWords](#wholeWords)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText.wholeWords <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The "Whole words" [CheckBox](cp.ui.CheckBox.md).                                                                     |

### Methods

| [doFindAndReplaceAll](#doFindAndReplaceAll)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText:doFindAndReplaceAll(find, replace) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to find all titles containing `find` and replace them with `replace`.                                                                     |
| **Parameters**                              | <ul><li>find - what to find</li><li>replace - what to replace</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doHide](#doHide)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText:doHide() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to hide the "Find And Replace Title Text" dialog.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShow](#doShow)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.FindAndReplaceTitleText:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will attempt to show the "Find And Replace Title Text" dialog.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

