# cp.i18n.region

Provides the set of ISO 3166-1 region codes and names.
The return value can be iterated as a list, or you can find a
specific region by either its upper-case two-character code (`alpha2`), three-character numeric code (`numeric3`),
or English name (`name`).

For example:

```lua
local region = require("cp.i18n.region")
print(region[1])    -- table for "Afghanistan"
print(lang.FR)      -- table for "France"
print(lang.France)  -- same table for "France"
```

This will return a table containing the following:
 * `alpha2`      - The 2-character region code, upper-case (eg. "AU", "FR").
 * `name`        - The name in English (eg. "Australia", "France").

Notes: This data was adapted from the [datahub.io list](https://datahub.io/core/country-list)
released under a Public Domain license.

---

## API Overview

---

## API Documentation

