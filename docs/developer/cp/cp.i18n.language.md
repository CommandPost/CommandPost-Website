# [docs](index.md) » cp.i18n.language
---

Provides the set of ISO 693-1/2/3 language codes and names.
The return value can be iterated as a list, or you can find a
specific language by either its two-character code (`alpha2`), English-based three-character code (`alpha3B`),
local name, or English name.

For example:

```lua
local lang = require("cp.i18n.language")
print(lang[1]) -- table for "Abkhaz" language
print(lang.fr) -- table for "French"
print(lang.fre) -- same table for "French"
print(lang["Français"]) -- same table for "French"
print(lang.French) -- same table for "French"
```

This will return a table containing the following:
 * `alpha2`       - The 2-character language code (eg. "en", "fr").
 * `alpha3`       - The 3-character language code (eg. "eng", "fra").
 * `alpha3B`      - The 3-character English-derived language code (eg. "eng", "fre").
 * `alpha3T`      - The 3-character local-language-derived code (eg. "eng", "fra").
 * `localName`   - The name in the local language (eg. "English", "Français").
 * `name`        - The name in English (eg. "English", "French").

Notes: This data was adapted from [arnubol's code](https://github.com/anurbol/languages-iso-639-1-2-3-json)
under an [MIT license](https://raw.githubusercontent.com/anurbol/languages-iso-639-1-2-3-json/master/LICENSE).

## API Overview

## API Documentation

