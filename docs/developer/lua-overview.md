# Lua Overview

## What is Lua?

What do DaVinci Resolve, Adobe Photoshop Lightroom, Angry Birds, Apache HTTP Server, Apache Traffic Server, the Firefox web browser, MediaWiki, and World of Warcraft all have in common?

They are all extensible using the cross-platform Lua programming language!

"Lua" (pronounced LOO-ah) means "Moon" in Portuguese.

Lua is a powerful and fast programming language that is easy to learn and use and to embed into your application.

Lua is designed to be a lightweight embeddable scripting language and is used for [all sorts of applications](https://www.lua.org/uses.html){target="_blank"} from games to web applications and image processing.

Lua is freely available for any purpose, including commercial purposes, at absolutely no cost, and using it requires no paperwork. Read the details in the [license page](https://www.lua.org/license.html){target="_blank"}.

For complete information, visit [Lua's web site](http://www.lua.org/){target="_blank"}.

---

## Tutorials

Here's some links to useful tutorials...

#### Beginners:

* [Lua Tutorial (Video)](https://www.youtube.com/watch?v=iMacxZQMPXs){target="_blank"} & [Cheatsheet](http://www.newthinktank.com/2015/06/learn-lua-one-video/){target="_blank"}
* [Intro to Programming in Lua (Video)](https://www.youtube.com/playlist?list=PLz-rYTT-2nIvtosMFa-OVURa5J9fAgtNU){target="_blank"}
* [Learn Lua in 15 Minutes](http://tylerneylon.com/a/learn-lua/){target="_blank"}
* [Learn Lua the Hard Way](http://www.phailed.me/2011/02/learn-lua-the-hard-way-1/){target="_blank"}

#### Programmers:

* [Lua for Programmers Part 1: Language Essentials](http://nova-fusion.com/2012/08/27/lua-for-programmers-part-1/){target="_blank"}
* [Learning Lua from JavaScript](http://phrogz.net/lua/LearningLua_FromJS.html){target="_blank"}
* [Lua for Python Programmers](http://the4thwiki.com/lua/){target="_blank"}
* [A Quick Start Guide On Lua For C/C++ Programmers](https://docs.google.com/presentation/d/1wU7QwUQGved6jpnn-oYHjv9sU3d9TlqEvhv_TqyAZwM/edit#slide=id.i0){target="_blank"}

#### Advanced:

* [Lua Performance Tips](https://www.lua.org/gems/sample.pdf){target="_blank"}

#### The Manual:

*  [Programming in Lua (first edition)](http://www.lua.org/pil/contents.html){target="_blank"}

---

## Crash Course

#### Introduction

* Like JavaScript, Lua is a case sensitive language - "and", "And" or "AND" are not the same.
* The following are Lua keywords:
```lua
and       break     do        else      elseif
end       false     for       function  if
in        local     nil       not       or
repeat    return    then      true      until     while
```
* The following strings denote other tokens:
```lua
\+     -     *     /     %     ^     #
==    ~=    <=    >=    <     >     =
(     )     {     }     [     ]
;     :     ,     .     ..    ...
```
* Literal strings can be delimited by matching single or double quotes (e.g. 'hello' or "hello")
* A comment starts with a double hyphen (--) anywhere outside of a string. e.g.:
```lua
a=4 -- variable a is now 4!
```

#### Values & Types

* Lua is a dynamically typed language which means that variables do not have types; only values do.
* There are 8 basic types in Lua:
 * `nil` - type of the value nil whose main property is to be different from any other value. It usually represents the absence of a useful value.
 * `boolean` - values false and true (both nil and false make a condition false; any other value makes it true)
 * `number` - real numbers
 * `string` - arrays of characters (strings may contain any 8-bit character, including embedded zeros)
 * `function` - Lua functions
 * `userdata` - can hold arbitrary C data (corresponds to a block of raw memory)
 * `thread` - independent threads of execution used to implement coroutines
 * `table` - arrays that can hold values of any type except `nil`

#### Variables

* There are 3 kinds of variables:
 * Global Variables
 * Local Variables
 * Table Fields
* Any variable is assumed to be global unless explicitely declared as local.
* [Asmagill explains Global Variables](https://github.com/Hammerspoon/hammerspoon/issues/1103#issuecomment-265087511){target="_blank"}.
* Before the first assignment to a variable, its value is `nil`.
* Square brackets are used to index a table (e.g. `value=table[x]`). The first value in a table is at position 1 (and not 0 as for C arrays).

#### Statements

* Lua allows multiple assignments. The syntax for assignments defines a list of variables on the left side and a list of expressions on the right side. The elements in both lists are separated by commas:
```lua
x,y,z = myTable[1],myTable[2],myTable[3]
```
* Relational operators (always result in false or true):
```lua
==     equality
~=     negation of equality
<      smaller than
>      bigger than
<=     smaller or equal than
>=     bigger or equal than
```
* **If** control structure (by example):
```lua
if value1==value2 then
    print('value1 and value2 are same!')
end
```
* **For** control structure (by example):
```lua
for i=1,4,1 do -- count from 1 to 4 with increments of 1
    print(i)
end
```
* **While** control structure (by example):
```lua
i=0
while i~=4 do
    i=i+1
end
```
* **Repeat** control structure (by example):
```lua
i=0
repeat
    i=i+1
until i==4
```
* **Table** operations (by example):
```lua
myTable={'firstValue',2,3} -- builds a table with 3 values
print(myTable[1]) -- prints the first element in the table
table.insert(myTable,4) -- appends the number 4 to the table
```
* Concatenation (by example):
```lua
a=' hello'
b=' world'
c=a..b -- c contains 'hello world'
```
* Length operator #:
```lua
stringLength=#'hello world'
tableSize=#{1,2,3,4,5}
```