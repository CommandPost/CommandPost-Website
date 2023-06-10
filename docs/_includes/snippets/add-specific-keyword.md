### Add Specific Keyword

```lua
-----------------------------------------
-- Add Specific Keyword
-----------------------------------------
cp.apple.finalcutpro.keywordEditor:show()
local keywords = cp.apple.finalcutpro.keywordEditor:keywords()
table.insert(keywords, "test")
cp.apple.finalcutpro.keywordEditor:keywords(keywords)
```
