# [docs](index.md) » cp.plist.plistParser
---

plistParser (https://codea.io/talk/discussion/1269/code-plist-parser)
version 1.01

based on an XML parser by Roberto Ierusalimschy at:
lua-users.org/wiki/LuaXml

Takes a string-ified .plist file as input, and outputs
a table. Nested dictionaries and arrays are parsed into
subtables. Table structure will match the structure of
the .plist file

Usage:
```lua
local plistStr = <string-ified plist file>
local plistTable = plistParse(plistStr)
```

## API Overview

## API Documentation

