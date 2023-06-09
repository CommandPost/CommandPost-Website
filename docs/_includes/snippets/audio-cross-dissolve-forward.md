### Audio Cross Dissolve Forward (L-Cut)

```lua
hs.eventtap.keyStroke({"shift"}, "[", 0)
hs.eventtap.keyStroke({"shift"}, "=", 0)
hs.eventtap.keyStroke({}, "1", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return", 0)
hs.eventtap.keyStroke({"cmd"}, "up", 0)

-- Need To Assign Toggle Fade In in FCPX
hs.eventtap.keyStroke({"cmd", "shift"}, "f", 0)
hs.eventtap.keyStroke({"cmd"}, "down", 0)

 -- Need To Assign Toggle Fade Out in FCPX
hs.eventtap.keyStroke({"cmd", "alt"}, "f", 0)
hs.eventtap.keyStroke({"ctrl"}, "s", 0)
```