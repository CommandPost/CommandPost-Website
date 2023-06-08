# URL Handler
---

CommandPost has a URL Handler which allows you to trigger CommandPost Commands & Actions via a simple URL address.

For example, you can type any of the below into a browser to trigger a specific action:

```
commandpost://fcpx_cmds?id=cpSelectClipAtLaneOne
commandpost://global_cmds?id=cpGlobalConsole
commandpost://fcpx_shortcuts?id=SelectAll
commandpost://fcpx_menu?path=Final%20Cut%20Pro||About%20Final%20Cut%20Pro
commandpost://fcpx_audioEffect?category=Voice&name=AUNewPitch
commandpost://fcpx_title?category=Lower%20Thirds&name=Basic%20Lower%20Third
commandpost://fcpx_transition?name=Spin&category=Movements
commandpost://fcpx_generator?name=Beam&category=Backgrounds
commandpost://fcpx_videoEffect?name=Directional&category=Blur
```

To get a list of the Handler IDs that are recognised by the URL Handler (i.e. "fcpx_cmds"), type the below Lua code into the **Error Log**:

```lua
hs.inspect(require("cp.plugins")("core.action.manager").handlerIds())
```

To get a list of choices available for a specific Hander ID, type the below (replacing "fcpx_shortcuts" with the Handler ID you want to review) into the **Error Log**:

```lua
hs.inspect(require("cp.plugins")("core.action.manager").getHandler("fcpx_cmds"):choices())
```

For example, if the Error Log displays something like:

```lua
{
  id = "cmds:cpColorPuckFourLeft",
  params = {
	id = "cpColorPuckFourLeft"
  },
  subText = "Command: Colour Board",
  text = "Select Color Puck 4 & Left",
  type = "fcpx_cmds"
}
```

Then the URL will be:

`commandpost://fcpx_cmds?id=cpColorPuckFourLeft`

Basically you use the `params` table as your guide. Table items can be separated with **||**.

The following Handler IDs should not be used with the URL Handler:

- `fcpx_midicontrols`
- `fcpx_widgets`
- `global_widgets`