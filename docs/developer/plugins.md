# Plugin Overview

CommandPost has a very easy to use and powerful plugins functionality, and because Lua is quite a simple language to use, it's really easy to throw together your own CommandPost Plugins!

---

## Plugins Location

CommandPost will load any 3rd Party Plugins located in:

`~/Application Support/CommandPost/Plugins`

Internally, all the user interface and features for CommandPost are also plugins. They are automatically loaded from:

`CommandPost.app/Contents/Resources/plugins/`

This means if you build a plugin that's really awesome, it's very easily to add it to the main CommandPost Application when it's ready.

---

## Plugins Structure

A CommandPost Plugin is simply a macOS bundle which contains Lua scripts (and any other resources you want to throw in it).

When you first run CommandPost it will register the `.cpPlugin` extension in macOS, which means if you create a folder called `SOMETHING.cpPlugin` it will prompt you with:

![CommandPost Plugin](/static/cpplugin.png)

If you click **Add** it will turn that newly created folder into a CommandPost Plugin Bundle.

You view the contents of the bundle, simply right click and select **Show Package Contents**.

![Show Package Contents](/static/show-package-contents.png)

At a very minimum, the plugin should contain a single `.lua` file, which will be the Lua code that's executed.

CommandPost Plugins can either be pure Lua or a mixture of Lua and Objective-C (although since they are just dynamically loaded libraries, they could ultimately be compiled in almost any language such as [Swift](https://developer.apple.com/swift/){target="_blank"}.

---

## Simple Example Plugin

Below is a simple Plugin example that adds a button to the very bottom of the CommandPost menubar, and when click it displays the CommandPost version in a dialog box.

* To make things easy for others to understand, and to help with automatic documentation generation, we recommend you use [these naming conventions](/developer/naming-conventions/) when building your own plugins.
* You can learn more about the plugins API [here](/developer/cp/cp.plugins/).
* You can learn more about `cp.config` [here](/developer/cp/cp.config/).

```lua
--- === plugins.core.example ===
---
--- An example plugin.

--------------------------------------------------------------------------------
--
-- EXTENSIONS:
--
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- CommandPost Extensions:
--------------------------------------------------------------------------------
local config			= require("cp.config")
local dialog			= require("cp.dialog")

--------------------------------------------------------------------------------
--
-- THE MODULE:
--
--------------------------------------------------------------------------------
local mod = {}

--- plugins.core.example.displayVersion() -> nil
--- Function
--- Displays a Dialog Box that displays the CommandPost Version.
---
--- Parameters:
---  * None
---
--- Returns:
---  * None
function mod.displayVersion()
	dialog.displayMessage("The CommandPost Version is: " .. config.appVersion)
end

--------------------------------------------------------------------------------
--
-- THE PLUGIN:
--
--------------------------------------------------------------------------------
local plugin = {
	id				= "core.example",
	group			= "core",
	dependencies	= {
		["core.menu.bottom"] = "bottom",
	}
}

--------------------------------------------------------------------------------
-- INITIALISE PLUGIN:
--------------------------------------------------------------------------------
function plugin.init(deps)
	deps.bottom:addSeparator(9999999999):addItem(99999999999, function()
		return { title = "Example Menu Item",	fn = mod.displayVersion }
	end)

	return mod
end

return plugin
```

---

## Advanced Example Plugin

Here's a more advanced example plugin for adding CINEMA 4D support to CommandPost:

```lua
--- === plugins.cinema4D ===
---
--- Example Cinema4D Commands Plugin throw together for Sarah Kimberly Euschen.
---
--- Sorry, this looks way more complicated than it actually is... I promise!
---
--- You can learn more about Lua coding here:
--- https://dev.commandpost.io/lua/overview/

--------------------------------------------------------------------------------
--
-- EXTENSIONS:
--
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- Hammerspoon Extensions:
--------------------------------------------------------------------------------
local log				= require("hs.logger").new("cinema4D")
local application       = require("hs.application")
local eventtap          = require("hs.eventtap")
local filter            = require("hs.window").filter

--------------------------------------------------------------------------------
-- CommandPost Extensions:
--------------------------------------------------------------------------------
local commands			= require("cp.commands")

--------------------------------------------------------------------------------
--
-- THE MODULE:
--
--------------------------------------------------------------------------------
local mod = {}

--- plugins.cinema4D.id() -> none
--- Constant
--- The ID used internally by CommandPost to identify CINEMA 4D.
mod.id          = "cinema4D"

--- plugins.cinema4D.appName() -> none
--- Constant
--- The application name used for Window Detection.
mod.appName     = "CINEMA 4D Lite" -- You probably want to change this to something else, maybe just "CINEMA 4D"?

--- plugins.cinema4D.init() -> none
--- Function
--- Initialises the  Plugin
---
--- Parameters:
---  * None
---
--- Returns:
---  * None
function mod.init()

    --------------------------------------------------------------------------------
    -- Setup Translations:
    -- Documentation: https://dev.commandpost.io/api/i18n/
    --------------------------------------------------------------------------------
    i18n.set("en.plugin_group_" .. mod.id, mod.appName)         -- This sets the label used by the Group dropdown boxes.
    i18n.set("en.shortcut_group_" .. mod.id, mod.appName)       -- This sets the label used by the Shortcut Group dropdown box.
    i18n.set("en." .. mod.id .. "_midi_label", mod.appName)     -- This sets the label used in the Plugins Preference Page.

    --------------------------------------------------------------------------------
	-- Creates New CINEMA 4D Command Collection:
	-- Documentation: https://dev.commandpost.io/api/cp/cp.commands.html
	--------------------------------------------------------------------------------
	mod.cmds = commands.new(mod.id)

    --------------------------------------------------------------------------------
    -- Subscribe to Window Events using `hs.window.filter`:
    -- Documentation: https://dev.commandpost.io/api/hs/hs.window.filter.html
    --------------------------------------------------------------------------------
    mod._filter = filter.new{mod.appName}
        :subscribe(filter.windowFocused, function()
            --------------------------------------------------------------------------------
            -- Window has focus:
            --------------------------------------------------------------------------------
            log.df("Cinema 4D Focussed") -- This is just debugging code. It will write the result to the CommandPost Error Log.
            mod._manager.groupStatus(mod.id, true)
            mod.cmds:enable()
        end)
        :subscribe(filter.windowUnfocused, function()
            --------------------------------------------------------------------------------
            -- Window has lost focus:
            --------------------------------------------------------------------------------
            log.df("Cinema 4D Unfocussed") -- This is just debugging code. It will write the result to the CommandPost Error Log.
            mod._manager.groupStatus(mod.id, false)
            mod.cmds:disable()
        end)

    --------------------------------------------------------------------------------
    -- Set up Application Watcher using `hs.application.watcher`:
    -- Documentation: https://dev.commandpost.io/api/hs/hs.application.watcher.html
    --------------------------------------------------------------------------------
    mod._appWatcher = application.watcher.new(function(name, event, app)
        if name == mod.appName then
            if event == application.watcher.activated then
                log.df("Cinema 4D Activated") -- This is just debugging code. It will write the result to the CommandPost Error Log.
                mod._manager.groupStatus(mod.id, true)
                mod.cmds:enable()
            elseif event == application.watcher.deactivated then
                log.df("Cinema 4D Deactivated") -- This is just debugging code. It will write the result to the CommandPost Error Log.
                mod._manager.groupStatus(mod.id, false)
                mod.cmds:disable()
            end
        end
    end):start()

    --------------------------------------------------------------------------------
    -- Using a table to generate shortcuts:
    --------------------------------------------------------------------------------
    local shortcuts = {
        ["example1"] = {    ["label"] = "Example 1",
                            ["fn"] = function()
                                --------------------------------------------------------------------------------
                                -- Selects a menu item:
                                --------------------------------------------------------------------------------
                                local app = application.frontmostApplication()
                                app:selectMenuItem({"CINEMA 4D Lite", "About CINEMA 4D Lite"})
                            end,
                       },
        ["example2"] = {    ["label"] = "Example 2",
                            ["fn"] = function()
                                --------------------------------------------------------------------------------
                                -- Selects a menu item:
                                --------------------------------------------------------------------------------
                                local app = application.frontmostApplication()
                                app:selectMenuItem({"CINEMA 4D Lite", "About CINEMA 4D Lite"})
                            end,
                        },
    }
    for id, v in pairs(shortcuts) do
        i18n.set("en." .. id .. "_title", v.label)
        mod.cmds:add(id):whenPressed(v.fn)
    end

    --------------------------------------------------------------------------------
    -- Add "About Cinema 4D" Shortcut:
    -- This is an example of how to trigger menu items.
    --------------------------------------------------------------------------------
    i18n.set("en.cinema4DHelpAbout_title", "About CINEMA 4D")
	mod.cmds:add("cinema4DHelpAbout")
		:activatedBy():ctrl():alt():cmd("1") -- This is the default shortcut.
		:whenPressed(function()
		    local app = application.frontmostApplication()
		    --------------------------------------------------------------------------------
		    -- Selects a menu item:
		    --------------------------------------------------------------------------------
		    app:selectMenuItem({"CINEMA 4D Lite", "About CINEMA 4D Lite"})
		end)
		:groupedBy("cinema4D")

    --------------------------------------------------------------------------------
    -- Add "New" Shortcut:
    -- This is an example of how to simulate keypresses.
    --------------------------------------------------------------------------------
    i18n.set("en.cinema4DNew_title", "New")
	mod.cmds:add("cinema4DNew")
		:activatedBy():ctrl():alt():cmd("2") -- This is the default shortcut.
		:whenPressed(function()
		    log.df("New CINEMA 4D Shortcut Pressed!") -- This is just debugging code. It will write the result to the CommandPost Error Log.
		    --------------------------------------------------------------------------------
		    -- Simulates a keystroke:
		    -- Documentation: https://dev.commandpost.io/api/hs/hs.eventtap.html
		    --------------------------------------------------------------------------------
            eventtap.keyStroke({"command"}, "n")
		end)
		:groupedBy("cinema4D")

    --------------------------------------------------------------------------------
    -- Add "Trigger Python" Shortcut:
    -- This is an example of how to trigger Terminal Commands:
    --------------------------------------------------------------------------------
    i18n.set("en.cinema4DPython_title", "Trigger Python")
	mod.cmds:add("cinema4DPython")
		:activatedBy():ctrl():alt():cmd("3") -- This is the default shortcut.
		:whenPressed(function()
		    log.df("CINEMA 4D Python Shortcut Pressed!") -- This is just debugging code. It will write the result to the CommandPost Error Log.
		    --------------------------------------------------------------------------------
		    -- Triggers a Terminal command:
		    -- Documentation: https://dev.commandpost.io/api/hs/hs.html#execute
		    --------------------------------------------------------------------------------
            local command = [[osascript -e 'tell app "]] .. mod.appName .. [[" to display dialog "Hello World"']]
            hs.execute(command)
		end)
		:groupedBy("cinema4D")

    --------------------------------------------------------------------------------
    -- Setup Action Handler. This basically takes all our above "commands" and turns
    -- them into actions (i.e. things that can be selected in the Console popups).
    -- The reason we confusingly have both "Commands" and "Actions" is because of
    -- the feature that allows you to control Final Cut Pro shortcuts from within
    -- Final Cut Pro's own Command Editor. One day we'll make this cleaner.
    -- https://dev.commandpost.io/api/plugins/plugins.core.action.handler.html
    --------------------------------------------------------------------------------
    i18n.set("en." .. mod.id .. "_cmds_action", mod.appName .. " Commands")
    mod._handler = mod._actionmanager.addHandler(mod.id .. "_cmds", mod.id)
		:onChoices(mod.onChoices)
		:onExecute(mod.onExecute)
		:onActionId(mod.getId)
end

--- plugins.cinema4D.onChoices(choices) -> nothing
--- Function
--- Adds available choices to the selection.
---
--- Parameters:
--- * `choices`		- The `cp.choices` to add choices to.
---
--- Returns:
--- * Nothing
function mod.onChoices(choices)
	for _,cmd in pairs(mod.cmds:getAll()) do
		local title = cmd:getTitle()
		if title then
			local group = cmd:getSubtitle()
			if not group and cmd:getGroup() then
				group = i18n(cmd:getGroup().."_group")
			end
			group = group or ""
			local action = {
				id		= cmd:id(),
			}
			choices:add(title)
				:subText(i18n("commandChoiceSubText", {group = group}))
				:params(action)
				:id(mod.getId(action))
		end
	end
end

--- plugins.cinema4D.getId(action) -> boolean
--- Function
--- Gets an Action ID.
---
--- Parameters:
---  * `action`	- A table representing the action, matching the following:
---		* `id`		- The specific Command ID within the group.
---
--- Returns:
---  * `true` if the action was executed successfully.
function mod.getId(action)
	return string.format("%s:%s", ID, action.id)
end

--- plugins.cinema4D.execute(action) -> boolean
--- Function
--- Executes the action with the provided parameters.
---
--- Parameters:
---  * `action`	- A table representing the action, matching the following:
---	   * `id`   - The specific Command ID within the group.
---
--- Returns:
---  * `true` if the action was executed successfully.
function mod.onExecute(action)
	local group = mod.cmds
	if group then
		local cmdId = action.id
		if cmdId == nil or cmdId == "" then
		    --------------------------------------------------------------------------------
			-- No command ID provided:
			--------------------------------------------------------------------------------
			dialog.displayMessage(i18n("cmdIdMissingError"))
			return false
		end
		local cmd = group:get(cmdId)
		if cmd == nil then
		    --------------------------------------------------------------------------------
			-- No matching command:
			--------------------------------------------------------------------------------
			dialog.displayMessage(i18n("cmdDoesNotExistError"), {id = cmdId})
			return false
		end
        --------------------------------------------------------------------------------
		-- Ensure the command group is active:
		--------------------------------------------------------------------------------
		group:activate(
			function() cmd:activated() end,
			function() dialog.displayMessage(i18n("cmdGroupNotActivated"), {id = group.id}) end
		)
		return true
	end
	return false
end

--- plugins.cinema4D.reset() -> nothing
--- Function
--- Resets the set of choices.
---
--- Parameters:
--- * None
---
--- Returns:
--- * Nothing
function mod.reset()
	mod._handler:reset()
end

--------------------------------------------------------------------------------
--
-- THE PLUGIN:
--
--------------------------------------------------------------------------------
local plugin = {
    --------------------------------------------------------------------------------
    -- This is the internal ID used by CommandPost:
    --------------------------------------------------------------------------------
    id              = "cinema4D",

    --------------------------------------------------------------------------------
    -- This is the internal plugin group ID used by CommandPost:
    --------------------------------------------------------------------------------
    group           = "cinema4D",

    --------------------------------------------------------------------------------
    -- Below are a list of dependancies of other CommandPost plugins:
    --------------------------------------------------------------------------------
    dependencies    = {
        ["core.midi.manager"]		= "manager",
        ["core.action.manager"]		= "actionmanager",
    }
}

--------------------------------------------------------------------------------
-- INITIALISE PLUGIN:
--------------------------------------------------------------------------------
function plugin.init(deps)
    --------------------------------------------------------------------------------
    -- Load dependancies to Module:
    --------------------------------------------------------------------------------
    mod._manager = deps.manager
    mod._actionmanager = deps.actionmanager

    --------------------------------------------------------------------------------
    -- Load the module:
    --------------------------------------------------------------------------------
    return mod.init()
end

--------------------------------------------------------------------------------
-- POST INITIALISATION:
--------------------------------------------------------------------------------
function plugin.postInit()
    -- You can do Plugin Post Initialisation stuff here if needed.
end

return plugin
```