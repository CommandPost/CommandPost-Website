### Go back 500 frames and play

```lua
hs.eventtap.keyStroke({}, "-", 0)
hs.eventtap.keyStroke({}, "2", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "0", 0)
hs.eventtap.keyStroke({}, "return")
cp.apple.finalcutpro:doShortcut("JogForward"):Now()
```