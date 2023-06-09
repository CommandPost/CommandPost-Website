# cp.app.menu

Represents an app's menu bar, providing multi-lingual access to find and
trigger menu items.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [NIB_FILE](#nib_file)
 * [ROLE](#role)
 * [STORYBOARD_NAME](#storyboard_name)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [menu](#menu)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [showing](#showing)
 * [UI](#ui)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [addMenuFinder](#addmenufinder)
 * [app](#app)
 * [doFindMenuUI](#dofindmenuui)
 * [doIsEnabled](#doisenabled)
 * [doSelectMenu](#doselectmenu)
 * [findMenuUI](#findmenuui)
 * [getMenuTitles](#getmenutitles)
 * [isChecked](#ischecked)
 * [isEnabled](#isenabled)
 * [selectMenu](#selectmenu)
 * [visitMenuItems](#visitmenuitems)


---

## API Documentation

#### Constants


### [NIB_FILE](#nib_file)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu.NIB_FILE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Main NIB File.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 59](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L59) |

---


### [ROLE](#role)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu.ROLE -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | The menu role                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 49](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L49) |

---


### [STORYBOARD_NAME](#storyboard_name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu.STORYBOARD_NAME -> string`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Main Storyboard name.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 69](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L69) |

---

#### Constructors


### [menu](#menu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu(app) -> menu`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs a new menu for the specified App.                                                                     |
| **Parameters**                              | <ul><li>app - The `cp.app` instance the menu belongs to.</li></ul> |
| **Returns**                                 | <ul><li>a new menu instance</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 403](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L403) |

---

#### Fields


### [showing](#showing)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu.showing <cp.prop: boolean; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Tells you if the app's Menu Bar is visible.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 434](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L434) |

---


### [UI](#ui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu.UI <cp.prop:hs.axuielement; read-only; live>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Returns the `axuielement` representing the menu.                                                                     |
| **Notes**                                   | - None |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 423](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L423) |

---

#### Methods


### [addMenuFinder](#addmenufinder)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:addMenuFinder(finder) -> nothing`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Registers an `AXMenuItem` finder function. The finder's job is to take an individual 'find' step and return either the matching child, or `nil` if it can't be found. It is used by the [addMenuFinder](#addMenuFinder) function.                                                                     |
| **Parameters**                              | <ul><li>`finder`     - The finder function</li></ul> |
| **Returns**                                 | <ul><li>The `AXMenuItem` found, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>The `finder` should have the following signature:</li><li> `function(parentItem, path, childName, locale) -> childItem`</li><li>The elements are:</li><li> parentItem    - The `AXMenuItem` containing the children. E.g. the `Go To` menu under `Window`.</li><li> path          - An array of strings in the specified locale leading to the parent item. E.g. `{"Window", "Go To"}`.</li><li> childName     - The name of the next child to find, in the specified locale. E.g. `"Libraries"`.</li><li> locale        - The `cp.i18n.localeID` that the menu titles are in.</li><li> childItem     - The `AXMenuItem` that was found, or `nil` if not found.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 637](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L637) |

---


### [app](#app)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:app() -> cp.app`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `cp.app` instance this belongs to.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `cp.app`.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 441](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L441) |

---


### [doFindMenuUI](#dofindmenuui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:doFindMenuUI(path[, options]) -> cp.rx.go.Statement <hs.axuielement>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a `Statement` that when executed will emit each of the menu items along the path.                                                                     |
| **Parameters**                              | <ul><li>path         - the table of path items.</li><li>options      - (optional) table of additional configuration options.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, ready to be executed.</li></ul>          |
| **Notes**                                   | <ul><li>Each step on the path can be either one of:</li><li> a string     - The exact name of the menu item.</li><li> a number     - The menu item number, starting from 1.</li><li> a function   - Passed one argument - the Menu UI to check - returning `true` if it matches.</li><li>The `options` may contain:</li><li> locale   - The locale that any strings in the path are in. Defaults to "en".</li><li> plain    - Whether or not to disable the pattern matching feature. Defaults to `false`.</li><li>Examples:</li><li> `myApp:menu():doFindMenuUI({"Edit", "Copy"}):Now(function(item) print(item:title() .. " enabled: ", item:enabled()) end, error)`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 685](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L685) |

---


### [doIsEnabled](#doisenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:doIsEnabled(path, options) -> cp.rx.go.Statement`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that returns `true` if the item at the end of the path is enabled.                                                                     |
| **Parameters**                              | <ul><li>path      - The menu path to check.</li><li>options   - The options.</li></ul> |
| **Returns**                                 | <ul><li>A [Statement](cp.rx.go.Statement.md) to execute.</li></ul>          |
| **Notes**                                   | <ul></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 620](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L620) |

---


### [doSelectMenu](#doselectmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:doSelectMenu(path, options) -> cp.rx.go.Statement <boolean>`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a Menu Item based on the provided menu path.                                                                     |
| **Parameters**                              | <ul><li>path - The list of menu items you'd like to activate.</li><li>options - (optional) The table of options to apply.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, ready to execute.</li></ul>          |
| **Notes**                                   | <ul><li>Each step on the path can be either one of:</li><li> a string     - The exact name of the menu item.</li><li> a number     - The menu item number, starting from 1.</li><li> a function   - Passed one argument - the Menu UI to check - returning `true` if it matches.</li><li>The `options` may include:</li><li> locale - The `localeID` or `string` for the locale that the path values are in.</li><li> pressAll - If `true`, all menu items will be pressed on the way to the final destination.</li><li> plain    - Whether or not to disable the pattern matching feature. Defaults to `false`.</li><li>Examples:</li><li> `previewApp:menu():doSelectMenu({"File", "Take Screenshot", "From Entire Screen"}):Now()`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 483](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L483) |

---


### [findMenuUI](#findmenuui)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:findMenuUI(path[, options]) -> Menu UI, table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Finds a specific Menu UI element for the provided path.                                                                     |
| **Parameters**                              | <ul><li>path - The path list to search for.</li><li>options - (Optional) The table of options.</li></ul> |
| **Returns**                                 | <ul><li>The Menu UI, or `nil` if it could not be found.</li><li>The full list of Menu UIs for the path in a table.</li></ul>          |
| **Notes**                                   | <ul><li>E.g. `findMenuUI({"Edit", "Copy"})` returns the 'Copy' menu item in the 'Edit' menu.</li><li>Each step on the path can be either one of:</li><li> a string     - The exact name of the menu item.</li><li> a number     - The menu item number, starting from 1.</li><li> a function   - Passed one argument - the Menu UI to check - returning `true` if it matches.</li><li>The `options` can contain:</li><li> locale   - The `localeID` or `string` with the locale code. Defaults to "en".</li><li> plain    - Whether or not to disable the pattern matching feature. Defaults to `false`.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 821](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L821) |

---


### [getMenuTitles](#getmenutitles)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:getMenuTitles([locales]) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a table with the available menus, items and sub-menu, in the specified locales (if available). If no `locales` are specified, the app's current locale is loaded.                                                                     |
| **Parameters**                              | <ul><li>locales       - An optional single `localeID` or a list of `localeID`s to ensure are loaded.</li></ul> |
| **Returns**                                 | <ul><li>A table of Menu Bar Values</li></ul>          |
| **Notes**                                   | <ul><li>This menu may get added to over time if additional locales are loaded - previously loaded locales are not removed from the cache.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 454](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L454) |

---


### [isChecked](#ischecked)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:isChecked(path[, options]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Is a menu item checked?                                                                     |
| **Parameters**                              | <ul><li>path - At table containing the path to the menu bar item.</li><li>options - The locale the path is in. Defaults to "en".</li></ul> |
| **Returns**                                 | <ul><li>`true` if checked otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>The `options` may include:</li><li> locale   - The `localeID` or `string` with the locale code. Defaults to "en".</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 582](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L582) |

---


### [isEnabled](#isenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:isEnabled(path[, options]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Is a menu item enabled?                                                                     |
| **Parameters**                              | <ul><li>path - At table containing the path to the menu bar item.</li><li>options - The optional table of options.</li></ul> |
| **Returns**                                 | <ul><li>`true` if enabled otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul><li>The `options` may include:</li><li> locale   - The `localeID` or `string` with the locale code. Defaults to "en".</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 601](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L601) |

---


### [selectMenu](#selectmenu)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:selectMenu(path[, options]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Selects a Menu Item based on the list of menu titles in English.                                                                     |
| **Parameters**                              | <ul><li>path - The list of menu items you'd like to activate.</li><li>options - (optional) The table of options to apply.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the press was successful.</li></ul>          |
| **Notes**                                   | <ul><li>Each step on the path can be either one of:</li><li> a string     - The exact name of the menu item.</li><li> a number     - The menu item number, starting from 1.</li><li> a function   - Passed one argument - the Menu UI to check - returning `true` if it matches.</li><li>The `options` may include:</li><li> locale - The `localeID` or `string` for the locale that the path values are in.</li><li> pressAll - If `true`, all menu items will be pressed on the way to the final destination.</li><li> plain    - Whether or not to disable the pattern matching feature. Defaults to `false`.</li><li>Example usage:</li><li> `require("cp.app").forBundleID("com.apple.FinalCut"):menu():selectMenu({"View", "Browser", "Toggle Filmstrip/List View"})`</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 526](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L526) |

---


### [visitMenuItems](#visitmenuitems)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.app.menu:visitMenuItems(visitFn[, options]]) -> nil`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Walks the menu tree, calling the `visitFn` on all the 'item' values - that is, `AXMenuItem`s that don't have any sub-menus.                                                                     |
| **Parameters**                              | <ul><li>visitFn - The function called for each menu item.</li><li>options - (optional) The table of options.</li></ul> |
| **Returns**                                 | <ul><li>Nothing</li></ul>          |
| **Notes**                                   | <ul><li>The `options` may include:</li><li> locale   - The `localeID` or `string` with the locale code. Defaults to "en".</li><li> startPath - The path to the menu item to start at.</li><li>The `visitFn` will be called on each menu item with the following parameters:</li><li> `function(path, menuItem)`</li><li>The `menuItem` is the AXMenuItem object, and the `path` is an array with the path to that menu item. For example, if it is the "Copy" item in the "Edit" menu, the path will be `{ "Edit" }`.</li></ul> |
| **Examples**                                | <ul></ul> |
| **Source**                                  | [src/extensions/cp/app/menu.lua line 977](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/app/menu.lua#L977) |

---

