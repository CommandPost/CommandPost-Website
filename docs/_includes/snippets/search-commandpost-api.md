### Search CommandPost API

```lua
-----------------------------------------
-- Search CommandPost API
-----------------------------------------
cp.plugins("core.action.manager").getActivator("test"):onActivate(function(handler, action, text)
    local result = [[local handler = cp.plugins("core.action.manager").getHandler("]] .. handler:id()  .. [[")]] .. "\n"
    result = result .. "local action = " .. "\n"
    result = result .. hs.inspect(action) .. "\n"
    result = result .. [[handler:execute(action)]]
    hs.pasteboard.setContents(result)
end):show()
```
