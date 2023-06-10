### Select all odd clips in Timeline

```lua
-----------------------------------------
-- Select all odd clips in Timeline
-----------------------------------------
cp.apple.finalcutpro:launch()
local clips = cp.apple.finalcutpro:timeline():contents():clipsUI()
table.sort(clips, function(a, b) return a:position().x < b:position().x end)
local evenClips = {}
for i, clip in ipairs(clips) do
    if (i % 2 == 1) then
        table.insert(evenClips, clip)
    end
end
cp.apple.finalcutpro:timeline():contents():selectClips(evenClips)
```
