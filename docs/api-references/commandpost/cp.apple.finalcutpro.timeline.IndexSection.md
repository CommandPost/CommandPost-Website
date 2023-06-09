# cp.apple.finalcutpro.timeline.IndexSection

An abstract base class for sections inside the [Index](cp.apple.finalcutpro.timeline.Index.md).
This contains common methods and other definitions that apply for all sections.

This will generally not be created directly, but will be created via subclass such as
[IndexClips](cp.apple.finalcutpro.timeline.IndexClips.md).

## API Overview
* Constructors - API calls which return an object, typically one that offers API methods
 * [IndexSection](#indexsection)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [activate](#activate)
 * [index](#index)
 * [isShowing](#isshowing)
 * [search](#search)
 * [UI](#ui)
* Methods - API calls which can only be made on an object returned by a constructor
 * [app](#app)
 * [doActivateSearch](#doactivatesearch)
 * [doShow](#doshow)
 * [parent](#parent)

## API Documentation

### Constructors


### [IndexSection](#indexsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection(index) -> IndexSection`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates the `IndexSection` instance.                                                                     |
| **Parameters**                              | <ul><li>index - The [Index](cp.apple.finalcutpro.timeline.Index.md) instance.</li></ul> |
| **Returns**                                 | <ul></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [activate](#activate)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection.activate <cp.ui.RadioButton>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The [RadioButton](cp.ui.RadioButton.md) that activates the section.                                                                     |
| **Notes**                                   | <ul><li>Must be overridden in subclasses to provide the actual RadioButton.</li></ul>                |

---

### [index](#index)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection.index <cp.apple.finalcutpro.timeline.Index>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The parent [Index](cp.apple.finalcutpro.timeline.Index.md).                                                                     |

---

### [isShowing](#isshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection.isShowing <cp.prop: boolean; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Indicates if the section is currently showing.                                                                     |

---

### [search](#search)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection.search <cp.ui.SearchField>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The shared [SearchField](cp.ui.SearchField.md) for the [Index](cp.apple.finalcutpro.timeline.Index.md)                                                                     |

---

### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection.UI <cp.prop: axuielement; read-only; live?>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `axuielement` that represents the item.                                                                     |

---
### Methods


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection:app() -> cp.apple.finalcutpro`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The [Final Cut Pro](cp.apple.finalcutpro.md) instance.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Final Cut Pro](cp.apple.finalcutpro.md) instance.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doActivateSearch](#doactivatesearch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection:doActivateSearch() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a [Statement](cp.rx.go.Statement.md) that will show the Clips in the Timeline Index and focus on the Search field.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>Returns a [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection:doShow() -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that will show the Clips section in the Timeline Index, if possible.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The [Statement](cp.rx.go.Statement.md)</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [parent](#parent)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.timeline.IndexSection:parent() -> cp.apple.finalcutpro.timeline.Index`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | The parent index.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The parent index.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
