# cp.text.matcher

Adapted from 'utf8.lua' (https://github.com/Stepets/utf8.lua)

Copyright (c) 2006-2007, Kyle Smith
All rights reserved.

Contributors:
    Alimov Stepan
    David Peterson

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice,
      this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the author nor the names of its contributors may be
      used to endorse or promote products derived from this software without
      specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [matcher](#matcher)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [find](#find)
 * [gmatch](#gmatch)
 * [gsub](#gsub)
 * [match](#match)


---

## API Documentation

#### Constructors


### [matcher](#matcher)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.matcher(pattern[, plain]) -> cp.text.matcher`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a matcher for the specified pattern. This follows the conventions of the standard [LUA Patterns](https://www.lua.org/pil/20.2.html) API. This will return a reusable, compiled parser for the given pattern.                                                                     |
| **Parameters**                              | <ul><li>`pattern`	- The pattern to parse</li><li>`plain`		- If `true`, the pattern is not parsed and the provided text must match exactly.</li></ul> |
| **Returns**                                 | <ul><li>New `cp.text.matcher` for the pattern.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/text/matcher.lua line 819](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/text/matcher.lua#L819) |

---

#### Methods


### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.matcher:find(value[, start]) -> number, number, ...`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Processes the text, returning the start position, the end position, followed by any capture group values.                                                                     |
| **Parameters**                              | <ul><li>`value`		- The `cp.text` value to process.</li><li>`start`		- If specified, indicates the starting position to process from. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The start position for the match, end position, and the list of capture group values.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/text/matcher.lua line 415](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/text/matcher.lua#L415) |

---


### [gmatch](#gmatch)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.matcher:gmatch(value) -> function`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns an iterator function that, each time it is called, returns the next captures from pattern over string s. If pattern specifies no captures, then the whole match is produced in each call.                                                                     |
| **Parameters**                              | <ul><li>`value`		- The `cp.text` value to process.</li></ul> |
| **Returns**                                 | <ul><li>The iterator function.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/text/matcher.lua line 486](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/text/matcher.lua#L486) |

---


### [gsub](#gsub)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.matcher:gsub(value, repl, limit) -> text, number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a copy of `value` in which all (or the first `n`, if given) occurrences of the pattern have been replaced by a replacement string specified by `repl`, which can be text, a string, a table, or a function. gsub also returns, as its second value, the total number of matches that occurred.                                                                     |
| **Parameters**                              | <ul><li>`value`	- The text or string value to process.</li><li>`repl`	- The replacement text/string/table/function</li><li>`limit`	- The maximum number of times to do the replacement. Defaults to unlimited.</li></ul> |
| **Returns**                                 | <ul><li>`text`	- The text value with replacements.</li><li>`number`	- The number of matches that occurred.</li></ul>          |
| **Notes**                                   | <ul><li>If repl is text or a string, then its value is used for replacement. The character `%` works as an escape character: any sequence in repl of the form `%n`, with `n` between `1` and `9`, stands for the value of the `n`-th captured substring (see below). The sequence `%0` stands for the whole match. The sequence `%%` stands for a single `%`.</li><li>If `repl` is a table, then the table is queried for every match, using the first capture as the key; if the pattern specifies no captures, then the whole match is used as the key.</li><li>If `repl` is a function, then this function is called every time a match occurs, with all captured substrings passed as arguments, in order; if the pattern specifies no captures, then the whole match is passed as a sole argument.</li><li>If the value returned by the table query or by the function call is a string or a number, then it is used as the replacement string; otherwise, if it is `false` or `nil`, then there is no replacement (that is, the original match is kept in the string).</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/text/init.lua line 338](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/text/init.lua#L338) |

---


### [match](#match)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.text.matcher:match(value[, start]) -> ...`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Looks for the first match of the pattern in the string `value`. If it finds one, then match returns the captures from the pattern; otherwise it returns `nil`. If pattern specifies no captures, then the whole match is returned. A third, optional numerical argument init specifies where to start the search; its default value is `1` and can be negative.                                                                     |
| **Parameters**                              | <ul><li>`value`		- The `cp.text` value to process.</li><li>`start`		- If specified, indicates the starting position to process from. Defaults to `1`.</li></ul> |
| **Returns**                                 | <ul><li>The capture results, the whole match, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/extensions/cp/text/matcher.lua line 464](https://github.com/CommandPost/CommandPost/blob/develop/src/extensions/cp/text/matcher.lua#L464) |

---

