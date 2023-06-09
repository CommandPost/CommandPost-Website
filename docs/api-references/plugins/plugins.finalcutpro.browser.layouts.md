# plugins.finalcutpro.browser.layouts

Allows you to save and restore Browser Layouts.

This plugin creates two different types of actions:

 **Save/Restore Browser Layout to Memory**
This feature allows you save and restore five custom browser layouts, which can be
easily triggered by a CommandPost action, such as a keyboard shortcut.

 *Save/Restore/Set Browser Layout for Selected Collection**
This feature allows you to save a browser layout for the currently selected
collection. This feature will only work if a single collection (either Keyword
Collection or Smart Collection) is selected - if more than one is selected then
you'll just hear an error beep. Once you save a browser layout, then the next time
you click on the collection with your mouse, your previously saved browser layout
will be automatically restored. Browser layouts are only automatically loaded when
you use your mouse - collection layouts won't be loaded if you change collections
using keyboard shortcuts. You can also temporarily prevent a browser layout from
automatically loading by holding down the OPTION key.

 **Developer Note:**
This plugin currently uses a `hs.eventtap` rather than AX Notifications, because in
testing we found the AX Notifications to be too unreliable. We also opted to just
use the collection name as the reference point, rather than the path to the
collection name (i.e. "Edits" instead of
"Library Name > Event Name > Folder Name > Collection Name") so that browser
layouts can easily be common across multiple libraries (i.e if you always have a
Smart Collection called "Edits", then this smart collection will always have the
same browser layout across all your libraries.

We're also currently using the menu position for selecting "Show/Hide All Columns"
as the strings for these values are contained within a `.nib` file not a `.strings`
file.

## API Overview
### **Variables** - _Configurable values_
 * [busy](#busy)
 * [lastCollection](#lastcollection)

### **Functions** - _API calls offered directly by the extension_
 * [getActiveColumnsNames](#getactivecolumnsnames)
 * [getClipNameSize](#getclipnamesize)
 * [getSingleSelectedCollection](#getsingleselectedcollection)
 * [resetBrowserLayoutForSelectedCollection](#resetbrowserlayoutforselectedcollection)
 * [restoreBrowserLayoutForSelectedCollection](#restorebrowserlayoutforselectedcollection)
 * [restoreLayoutFromTable](#restorelayoutfromtable)
 * [saveBrowserLayoutForSelectedCollection](#savebrowserlayoutforselectedcollection)
 * [saveLayoutToTable](#savelayouttotable)
 * [setupWatcher](#setupwatcher)


## API Documentation

### Variables


### [busy](#busy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.busy -> boolean`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Are we already in the process of doing something?                                                                     |

---

### [lastCollection](#lastcollection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.lastCollection -> string | nil`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The last collection registered.                                                                     |

---
### Functions


### [getActiveColumnsNames](#getactivecolumnsnames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.getActiveColumnsNames() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Get active column names in a table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table of active column names or an empty table if something goes wrong.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getClipNameSize](#getclipnamesize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.getClipNameSize() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the Clip Name Size as a string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The Clip Name Size as a string or `nil` if cannot be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [getSingleSelectedCollection](#getsingleselectedcollection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.getSingleSelectedCollection() -> string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | If a single collection is selected in the browser it's value is returned as a string.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string if successful otherwise `nil`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [resetBrowserLayoutForSelectedCollection](#resetbrowserlayoutforselectedcollection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.resetBrowserLayoutForSelectedCollection() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Reset Browser Layout for selected collection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>An error sound will play if there's nothing to reset.</li></ul>                |

---

### [restoreBrowserLayoutForSelectedCollection](#restorebrowserlayoutforselectedcollection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.restoreBrowserLayoutForSelectedCollection() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Restore Browser Layout for selected collection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>An error sound will play if there's nothing to restore.</li></ul>                |

---

### [restoreLayoutFromTable](#restorelayoutfromtable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.restoreLayoutFromTable(layout) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Restore Layout from Table.                                                                     |
| **Parameters**                              | <ul><li>layout - The layout settings in a table.</li></ul> |
| **Returns**                                 | <ul><li>`true` if successful otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [saveBrowserLayoutForSelectedCollection](#savebrowserlayoutforselectedcollection)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.saveBrowserLayoutForSelectedCollection() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Save Browser Layout for selected collection.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>An error sound will play if there's nothing to save.</li></ul>                |

---

### [saveLayoutToTable](#savelayouttotable)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.saveLayoutToTable() -> table | boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Save Layout to Table.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A table containing the layout settings if successful otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [setupWatcher](#setupwatcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.browser.layouts.setupWatcher() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates or destroys the keyboard watcher.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
