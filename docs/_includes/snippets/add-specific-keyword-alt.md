### Add Specific Keyword (Alt)

```lua
-----------------------------------------
-- Add Specific Keyword (Alt)
-----------------------------------------
local keywordEditor = cp.apple.finalcutpro.keywordEditor
local wasShowing = cp.apple.finalcutpro.keywordEditor:isShowing()
cp.apple.finalcutpro.keywordEditor:show()
local keywords = cp.apple.finalcutpro.keywordEditor:keywords()
table.insert(keywords, "PRO_EW")
cp.apple.finalcutpro.keywordEditor:keywords(keywords)
if not wasShowing then
cp.apple.finalcutpro.keywordEditor:hide()
end
```
