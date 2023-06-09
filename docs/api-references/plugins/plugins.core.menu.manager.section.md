# plugins.core.menu.manager.section

Controls sections for the CommandPost menu.

## API Overview
### **Constants** - _Useful values which cannot be changed_
 * [DEFAULT_PRIORITY](#default_priority)
 * [SECTION_DISABLED_PREFERENCES_KEY_PREFIX](#section_disabled_preferences_key_prefix)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addApplicationHeading](#addapplicationheading)
 * [addHeading](#addheading)
 * [addItem](#additem)
 * [addItems](#additems)
 * [addMenu](#addmenu)
 * [addSection](#addsection)
 * [addSeparator](#addseparator)
 * [generateTable](#generatetable)
 * [getDisabledPreferenceKey](#getdisabledpreferencekey)
 * [isApplicationHeading](#isapplicationheading)
 * [isDisabled](#isdisabled)
 * [new](#new)
 * [setDisabledFn](#setdisabledfn)
 * [setDisabledPreferenceKey](#setdisabledpreferencekey)


## API Documentation

### Constants


### [DEFAULT_PRIORITY](#default_priority)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section.DEFAULT_PRIORITY -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The default priority                                                                     |

---

### [SECTION_DISABLED_PREFERENCES_KEY_PREFIX](#section_disabled_preferences_key_prefix)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section.SECTION_DISABLED_PREFERENCES_KEY_PREFIX -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The preferences key prefix for a disabled section.                                                                     |

---
### Methods


### [addApplicationHeading](#addapplicationheading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addApplicationHeading(title) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a heading to the top of the section.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the Application Heading.</li></ul> |
| **Returns**                                 | <ul><li>section - The new section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addHeading](#addheading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addHeading(title) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a heading to the top of a section.                                                                     |
| **Parameters**                              | <ul><li>title - The title of the heading.</li></ul> |
| **Returns**                                 | <ul><li>section - The new section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addItem](#additem)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addItem(priority, itemFn) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a function which will generate a single table item.                                                                     |
| **Parameters**                              | <ul><li>`priority`	- The priority of the item within the section. Lower numbers appear first.</li><li>`itemFn`		- A function which will return a table representing a single menu item. See `hs.menubar` for details.</li></ul> |
| **Returns**                                 | <ul><li>section - The section the item was added to.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addItems](#additems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addItems(priority, itemsFn) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers a function which will generate multiple table items.                                                                     |
| **Parameters**                              | <ul><li>`priority`	- The priority of the items within the section. Lower numbers appear first.</li><li>`itemsFn`	- A function which will return a table containing multiple table items. See `hs.menubar` for details.</li></ul> |
| **Returns**                                 | <ul><li>section - The section the item was added to.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addMenu](#addmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addMenu(priority, titleFn) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new sub-menu with the specified priority. The section that will contain the items in the menu is returned.                                                                     |
| **Parameters**                              | <ul><li>`priority`	- The priority of the item within the section. Lower numbers appear first.</li><li>`titleFn`	- The function which will return the menu title.</li></ul> |
| **Returns**                                 | <ul><li>section - The new section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addSection](#addsection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addSection(priority) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new sub-section with the specified priority. The new sub-section is returned.                                                                     |
| **Parameters**                              | <ul><li>`priority`	- The priority of the item within the section. Lower numbers appear first.</li></ul> |
| **Returns**                                 | <ul><li>section - The new section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [addSeparator](#addseparator)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:addSeparator(priority) -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Adds a new seperator with specified priority.                                                                     |
| **Parameters**                              | <ul><li>`priority`	- The priority of the items within the section. Lower numbers appear first.</li></ul> |
| **Returns**                                 | <ul><li>section - The new section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [generateTable](#generatetable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:generateTable() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates a new menu table based on the registered items and sections inside this section.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`table`	- The menu table for this section. See `hs.menubar` for details on the format.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getDisabledPreferenceKey](#getdisabledpreferencekey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:getDisabledPreferenceKey() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the disabled preferences key.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the section has a disabled preferences key defined, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isApplicationHeading](#isapplicationheading)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:isApplicationHeading() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Does this section contain an application heading?                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if it does contain an application heading, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [isDisabled](#isdisabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:isDisabled() -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the disabled status                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>`true` if the section is disabled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [new](#new)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:new() -> section`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new menu section, which can have items and sub-menus added to it.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>section - The section that was created.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setDisabledFn](#setdisabledfn)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:setDisabledFn(disabledFn) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the Disabled Function                                                                     |
| **Parameters**                              | <ul><li>disabledFn - The disabled function.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setDisabledPreferenceKey](#setdisabledpreferencekey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.menu.manager.section:setDisabledPreferenceKey(key) -> self`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Sets the Disabled Preferences Key.                                                                     |
| **Parameters**                              | <ul><li>key - A string which contains the unique preferences key.</li></ul> |
| **Returns**                                 | <ul><li>Self</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
