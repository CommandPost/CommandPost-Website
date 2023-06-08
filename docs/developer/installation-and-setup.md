# Installation & Setup

## Introduction

If you're interested in modifying CommandPost-App (the Objective-C based "engine" that drives CommandPost), you can follow the instructions below to get setup.

However, if you're less technical, and just want to play around with the Lua side of things, then there's no need to "build" CommandPost from scratch using Xcode - you can simply start writing your own Lua plugins, or modifying CommandPost's own Lua files. Skip to the "Developing CommandPost" section below to learn more.

---

## Prerequisites

### Xcode
[Xcode](https://developer.apple.com/xcode/){target="_blank"} can be downloaded for free from the [Mac App Store](https://itunes.apple.com/au/app/xcode/id497799835?mt=12){target="_blank"}.

You will need to launch it, and accept the Terms & Conditions before attempting to build CommandPost.

### Homebrew
[Homebrew](https://brew.sh){target="_blank"} can be easily installed by executing the following command into Terminal:

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### greadlink
Once `brew` is installed, `greadlink` can be installed by executing the following command into Terminal:

`brew install coreutils`

### jq

Once `brew` is installed, `jq` can be installed by executing the following command into Terminal:

`brew install jq`

### pip
[pip](https://packaging.python.org/installing/#install-pip-setuptools-and-wheel){target="_blank"} can be installed by downloading [get-pip.py](https://bootstrap.pypa.io/get-pip.py){target="_blank"} to your desktop, then executing the following command in Terminal:

`sudo python ~/Desktop/get-pip.py`

### DMG Canvas
If you wanting to build a DMG package as part of the CommandPost release, you'll need to buy and install [DMG Canvas](https://www.araelium.com/dmgcanvas){target="_blank"}.

---

## Building CommandPost

CommandPost is made up of two seperate components:

* [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"} contains the [Hammerspoon](http://www.hammerspoon.org){target="_blank"} fork which makes up the main application.
* [CommandPost](https://github.com/CommandPost/CommandPost){target="_blank"} contains all the [Lua](https://www.lua.org/about.html){target="_blank"} scripts that drive the interface and feature set.

To build your own version of CommandPost, you need to download both these repositories from here:

* [CommandPost](https://github.com/CommandPost/CommandPost){target="_blank"}
* [CommandPost-App](https://github.com/CommandPost/CommandPost-App){target="_blank"}

We use [GitHub Desktop](https://desktop.github.com){target="_blank"}, for keeping everything in sync.

Once downloaded, these two repositories should be contained in the same folder, because when you build CommandPost-App, it will copy the Lua Scripts from the CommandPost folder.

To build CommandPost-App:

* Create a self-signed Code Signing certificate named **Internal Code Signing** as explained [here](http://bd808.com/blog/2013/10/21/creating-a-self-signed-code-certificate-for-xcode/){target="_blank"} - however, please make sure you label the certificate "Internal Code Signing" and not "Self-signed Applications".
* Open a Terminal window.
* Navigate to the CommandPost-App project root directory.
* Execute `sudo pip install -r requirements.txt`
* Navigate to the CommandPost project root directory.
* Execute `./scripts/build_commandpost_testing.sh`
* Once complete, navigate to the CommandPost-App project root directory, and the application should be contained within the `build` folder.

---

## Developing CommandPost

By default CommandPost-App will look for the CommandPost Lua scripts inside it's application bundle (i.e. `CommandPost.app/Contents/Resources/extensions/`), however, if something with the same name exists in `~/Library/Application Support/CommandPost/Extensions/` it will use those files instead.

To speed up development, you can tell CommandPost-App to look for the CommandPost Lua scripts in another location, such as your CommandPost folder (as downloaded from GitHub). This means that you can modify the Lua files within the CommandPost folder whilst CommandPost-App is running, and each time you "save" a file, CommandPost will reload, so that you can test things out instantly.

To tell CommandPost-App to use your development folder:

* Navigate to the CommandPost project root directory.
* Execute `./scripts/load_lua_scripts_from_developer_source.sh`

If you want to undo this process, you can:

* Navigate to the CommandPost project root directory.
* Execute `./scripts/load_lua_scripts_from_app_bundle.sh`

---

## Building Documentation

To build the documentation you see in this Developers Guide:

* Navigate to the CommandPost project root directory.
* Execute `./scripts/build_commandpost_docs.sh`

---

## Trashing CommandPost Preferences

The CommandPost preferences are located at: `~/Library/Preferences/org.latenitefilms.CommandPost.plist`

To trash this file:

* Navigate to the CommandPost project root directory.
* Execute `./scripts/trash_commandpost_preferences.sh`
