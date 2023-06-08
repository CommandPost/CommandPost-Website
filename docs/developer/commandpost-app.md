# CommandPost-App

CommandPost is made up of two seperate components:

* [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"} contains the [Hammerspoon](http://www.hammerspoon.org){target="_blank"} fork which makes up the main application.
* [CommandPost](https://github.com/CommandPost/CommandPost){target="_blank"} contains all the [Lua](https://www.lua.org/about.html){target="_blank"} scripts that drive the interface and feature set.

The goal of [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"} is to always stay compatible with [Hammerspoon](http://www.hammerspoon.org){target="_blank"}, to allow us to always be able to bring across bug fixes and new features from the Hammerspoon repository to the ComamndPost-App fork.

We also don't touch the `Hammerspoon/setup.lua` or `extensions/_coresetup/init.lua` files within the [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"} repository - this is all done in the [CommandPost](https://github.com/CommandPost/CommandPost){target="_blank"} fork.

In most cases, you should never really need to make changes to [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"}, as all the user interfaces and features are built with Lua scripts.

However, if there is something missing from CommandPost-App that you want to add to the application (for example we added the "Drag & Drop to Dock" callbacks), ideally you would commit this to the main Hammerspoon repository first (so that the Hammerspoon community can also benefit from it), and then update CommandPost-App from [Hammerspoon/master](https://github.com/Hammerspoon/hammerspoon){target="_blank"}.

For more information on contributing to Hammerspoon, refer to their [Contribution Guide](https://github.com/Hammerspoon/hammerspoon/blob/master/CONTRIBUTING.md){target="_blank"}.

There's also a fantastic Hammerspoon Module Walkthrough [here](https://github.com/asmagill/HS_ModuleWalkthrough){target="_blank"}, which includes examples of how to make Objective-C extensions.

If you have any questions about this, feel free to [submit an issue](https://github.com/CommandPost/CommandPost-App/issues){target="_blank"}.