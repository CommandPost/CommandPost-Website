# cp.apple.finalcutpro.main.PrimaryToolbar

Timeline Toolbar.

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [matches](#matches)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [PrimaryToolbar](#primarytoolbar)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [backgroundTasksWindow](#backgroundtaskswindow)
 * [browserShowing](#browsershowing)
 * [extensions](#extensions)
 * [inspectorShowing](#inspectorshowing)
 * [keywordEditor](#keywordeditor)
 * [mediaImport](#mediaimport)
 * [shareButton](#sharebutton)
 * [timelineShowing](#timelineshowing)


## API Documentation

### Functions


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.matches(element) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks to see if an element matches what we think it should be.                                                                     |
| **Parameters**                              | <ul><li>element - An `axuielementObject` to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if matches otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Constructors


### [PrimaryToolbar](#primarytoolbar)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar(parent) -> PrimaryToolbar`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `PrimaryToolbar` instance.                                                                     |
| **Parameters**                              | <ul><li>parent - The parent object.</li></ul> |
| **Returns**                                 | <ul><li>A new `PrimaryToolbar` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [backgroundTasksWindow](#backgroundtaskswindow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.backgroundTasksWindow <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CheckBox` that will open the `BackgroundTasksWindow` dialog                                                                     |

---

### [browserShowing](#browsershowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.browserShowing <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CheckBox` indicating if the `Browser` is showing                                                                     |

---

### [extensions](#extensions)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.extensions <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Button` that will open the "Available Extensions" dialog, or trigger the only extension, if only one is installed.                                                                     |

---

### [inspectorShowing](#inspectorshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.inspectorShowing <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CheckBox` indicating if the Inspector is showing                                                                     |

---

### [keywordEditor](#keywordeditor)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.keywordEditor <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CheckBox` that will open the `KeywordEditor` dialog when checked.                                                                     |

---

### [mediaImport](#mediaimport)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.mediaImport <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `Button` that will open the `MediaImport` dialog                                                                     |

---

### [shareButton](#sharebutton)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.shareButton <cp.ui.Button>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The Share Button.                                                                     |

---

### [timelineShowing](#timelineshowing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.main.PrimaryToolbar.timelineShowing <cp.ui.CheckBox>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The `CheckBox` indicating if the `Timeline` is showing                                                                     |

---
