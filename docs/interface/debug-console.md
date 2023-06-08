# Debug Console
---

Because CommandPost is powered by a huge collection of Lua scripts, the Debug Console is one of the most important places in CommandPost to track down bugs and issues.

You can access the Debug Console via the "Help & Support > CommandPost" section of the menubar:

![Open Debug Console](../../images/open-error-log.png)

There is also an option to "Open Debug Console on Dock Icon Click", which is 'on' by default:

![General Preferences](../../images/general-preferences.png)

Similar to `Console.app` in macOS, the Debug Console basically displays all of CommandPost's log files for the current session:

![Debug Console](../../images/error-log.png)

In the menu bar, you can:

- Force CommandPost to reload it's Lua scripts
- Clear the Debug Console
- Toggle whether or not the Debug Console should always be on top of other macOS windows
- Automatically reload CommandPost when a Lua file is modified externally (i.e. if you modify a file in a text editor with CommandPost running)
- Open the Toolbox panel
- Open the Control Surfaces panel
- Open the Preferences panel
- Submit Feedback to the CommandPost Developers

The text box at the bottom of the Debug Console allows you to execute Lua Commands directly. This is really useful when developing CommandPost plugins. For example:

![Debug Console](../../images/error-log-code.png)

You can learn more about developing for CommandPost in the [Developers Guide](https://dev.commandpost.io).