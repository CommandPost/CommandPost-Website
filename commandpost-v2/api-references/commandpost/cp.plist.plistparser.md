# cp.plist.plistParser

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

---

## API Overview

---

## API Documentation

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
