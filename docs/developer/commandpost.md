# CommandPost
---

CommandPost is made up of two seperate components:

* [CommandPost-App](https://github.com/CommandPost/CommandPost-App) contains the [Hammerspoon](http://www.hammerspoon.org) fork which makes up the main application.
* [CommandPost](https://github.com/CommandPost/CommandPost) contains all the [Lua](https://www.lua.org/about.html) scripts that drive the interface and feature set.

Essentially, we're using Hammerspoon as an "engine" to drive our Lua-based application - which is contained with the [CommandPost](https://github.com/CommandPost/CommandPost) repository.

The CommandPost `src` directory contains three folders:

* `extensions` contains all the third party extensions used by CommandPost (such as `i18n` and `resty`), and well as the main `cp` code.
* `plugins` contains all the bundled plugins that drive the CommandPost menubar and shortcut manager, as well as all the core and Final Cut Pro features
* `setup` is used by CommandPost-App. When building CommandPost-App the `setup.lua` file in the CommandPost repository replaces the `Hammerspoon/setup.lua` file in CommandPost-App.

If there's a 3rd party extension that you need for development, you can add it to the `extensions` folder.

If you want to make new features for CommandPost, you can build them as a plugin and store them in the `plugins` folder.

If you have any questions about this, feel free to [submit an issue](https://github.com/CommandPost/CommandPost/issues).