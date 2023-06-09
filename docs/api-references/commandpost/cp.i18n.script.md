# cp.i18n.script

Provides the set of ISO 15924 language scripts.
The return value can be iterated as a list, or you can find a
specific language by either its four-character code (`alpha4`), three-character numeric code (`numeric3`),
local name, or English name.

For example:

```lua
local script = require("cp.i18n.script")
print(script[1])        -- table for "Adlam" script
print(script.Hani)      -- table for "Han" script (matches `alpha4`)
print(script["500"])    -- same table for "Han" (matches `numeric3`)
print(script["Han (Hanzi, Kanji, Hanja)"]) -- same table for "Han" (matches `name`)
print(script.Han)       -- same table for "Han" (matches `pva`).
```

This will return a table containing the following:
 * `alpha4`      - The 4-character script code (eg. "Hani", "Arab").
 * `date`        - The `YYYY-MM-DD` date the script was added.
 * `name`        - The name in English (eg. "Arabic", "Afaka").
 * `numeric3`    - The 3-character language code (eg. "500", "050").
 * `pva`         - The Property Value Alias. Not available on all scripts.

Notes: This data was adapted from [wooorm's code](https://github.com/wooorm/iso-15924)
under an [MIT license](https://raw.githubusercontent.com/wooorm/iso-15924/master/LICENSE).

## API Overview

## API Documentation

