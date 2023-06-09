# cp.dev

A set of handy developer tools for CommandPost.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [elementAtMouse](#elementatmouse)
 * [findUnusedLanguageStrings](#findunusedlanguagestrings)
 * [highlight](#highlight)
 * [highlightFrame](#highlightframe)
 * [highlightPoint](#highlightpoint)
 * [hotkey](#hotkey)
 * [inspect](#inspect)
 * [inspectAtMouse](#inspectatmouse)
 * [inspectElement](#inspectelement)
 * [inspectElementAtMousePath](#inspectelementatmousepath)
 * [test](#test)
 * [which](#which)


---

## API Documentation

#### Functions


### [elementAtMouse](#elementatmouse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.elementAtMouse() -> axuielementObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the AX element under the current mouse position.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 146](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L146){target="_blank"} |

---


### [findUnusedLanguageStrings](#findunusedlanguagestrings)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.findUnusedLanguageStrings() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Searches for any unused language strings in English.json.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string with the results of the search.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 66](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L66){target="_blank"} |

---


### [highlight](#highlight)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.highlight(element) -> axuielementObject`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlights an AX element on the screen.                                                                     |
| **Parameters**                              | <ul><li>element - The AX element to highlight.</li></ul> |
| **Returns**                                 | <ul><li>The element.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 277](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L277){target="_blank"} |

---


### [highlightFrame](#highlightframe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.highlightFrame(frame) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlights aa frame on the screen.                                                                     |
| **Parameters**                              | <ul><li>frame - A `hs.geometry` frame object.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 319](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L319){target="_blank"} |

---


### [highlightPoint](#highlightpoint)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.highlightPoint(point) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Highlights a point on the screen.                                                                     |
| **Parameters**                              | <ul><li>point - A `hs.geometry` point object.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 352](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L352){target="_blank"} |

---


### [hotkey](#hotkey)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.hotkey(fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Assigns a function to the CONTROL+OPTION+COMMAND+SHIFT+Q keyboard combination.                                                                     |
| **Parameters**                              | <ul><li>fn - A function to execute when the hotkey is triggered.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 53](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L53){target="_blank"} |

---


### [inspect](#inspect)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.inspect(item, options) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inspect an item.                                                                     |
| **Parameters**                              | <ul><li>item - The object to inspect.</li><li>options - Any additional options to pass along to `cp.dev.inspectElement`.</li></ul> |
| **Returns**                                 | <ul><li>A results as a string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 195](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L195){target="_blank"} |

---


### [inspectAtMouse](#inspectatmouse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.inspectAtMouse(options) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inspects an AX element under the current mouse position. Writes results to Debug Console.                                                                     |
| **Parameters**                              | <ul><li>options - Any additional options to pass along to `cp.dev.inspectElement`.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 159](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L159){target="_blank"} |

---


### [inspectElement](#inspectelement)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.inspectElement(element[, options]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inspect an AX element. Writes results to Debug Console.                                                                     |
| **Parameters**                              | <ul><li>element - The element to inspect.</li><li>options - A table containing any optional values.</li></ul> |
| **Returns**                                 | <ul><li>None.</li></ul>          |
| **Notes**                                   | <ul><li>The options table accepts the following parameters:</li><li> depth - A number representing the maximum depth to recurse into variable.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 234](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L234){target="_blank"} |

---


### [inspectElementAtMousePath](#inspectelementatmousepath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.inspectElementAtMousePath(options) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Inspects an AX element at the mouse path.                                                                     |
| **Parameters**                              | <ul><li>options - A table containing any optional values.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 393](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L393){target="_blank"} |

---


### [test](#test)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.test(id) -> cp.test`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             |  This function will return a [cp.test](cp.test.md).                                                                     |
| **Parameters**                              | <ul><li>id - the `id` to test.</li></ul> |
| **Returns**                                 | <ul><li>A [cp.test] to execute.</li></ul>          |
| **Notes**                                   | <ul><li>This function will return a [cp.test](cp.test.md) with either the name `<id>_test` or `<id>._test` if the `<id>` is pointing at a folder.</li><li></li><li>For example, you have an extensions called `foo.bar`, and you want to create a test for it.</li><li></li><li>Option 1: `<id>_test`</li><li>File: `/src/tests/foo/bar_test.lua`</li><li></li><li>Option 2: `<id>._test`</li><li>File: `/src/tests/foo/bar/_test.lua`</li><li></li><li>You could then run all the contained tests like so:</li><li>```lua</li><li>_test("foo.bar")()</li><li>```</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 406](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L406){target="_blank"} |

---


### [which](#which)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.dev.which(cmd) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | The which utility takes a list of command names and searches the path for each executable file that would be run had these commands actually been invoked.                                                                     |
| **Parameters**                              | <ul><li>cmd - The parameters to pass along to the `which` executable.</li></ul> |
| **Returns**                                 | <ul><li>The path or `nil` and the error message if an error occurs.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [src/extensions/cp/dev/init.lua line 122](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/dev/init.lua#L122){target="_blank"} |

---

