# CommandPost Developer Guide
---

## What is CommandPost?

CommandPost is a **free** and **open source** Mac application that adds a mountain-load of new features to Apple’s [Final Cut Pro](http://apple.com/final-cut-pro/). It originally started off as a little proof of concept project to make finding the browser playhead easier for [Scott Simmons](http://www.scottsimmons.tv/) \(you can read the origin story [here](https://latenitefilms.com/blog/final-cut-pro-hacks/)\) – but has since grown into a huge collection of handy professional workflow tools and automation features to make editing within Final Cut Pro faster, easier and much more powerful.

The aim of CommandPost is to build an **open platform **where editors worldwide can easily create and share useful tools to make their editing lives easier - allowing them to spend less time worrying about keystrokes, and more time doing creative things. We want to remove boring workflow obstacles so that everyone can **get home earlier** and spend **less** time in front of a computer. CommandPost is not limited to Final Cut Pro - the plan is to eventually add useful functionality for a range of other professional applications, such as Adobe After Effects and mocha Pro.

---

## Developing with CommandPost

CommandPost has been built from the ground-up to be incredibly flexible, extensible, and quick and easy to modify and improve features.

Depending on what you're wanting to do and your skillset, there's lot of way you can develop with CommandPost:

### Developing Plugins

CommandPost has a powerful plugin architecture allowing you to easily build and distribute your own plugins that can be shared with the world.

Plugins can either be pure Lua or a mixture of Lua and Objective-C (although since they are just dynamically loaded libraries, they could ultimately be compiled in almost any language).

You can learn more about developing plugins in the [Plugins](plugins/plugin-overview.md) section of the Developer Guide.

### AppleScript

You can trigger Lua code via CommandPost's AppleScript interface. So, for example, rather than using complex GUI scripting, if you want your AppleScript code to select the second clip on a Final Cut Pro, you could use:

```applescript
tell application "CommandPost"
	execute lua code "require(\"cp.plugins\")(\"finalcutpro.timeline.lanes\").selectClipAtLane(1)"
end tell
```

This allows you to have all the power of CommandPost & it's Lua Scripting Engine, directly within AppleScript (and Automator).

You can learn more about the AppleScript Interface [here](control/applescript.md).

### Command Line Interface

After installing the Command Line Tool from the **Advanced** panel of the CommandPost Preferences, you can also trigger Lua via code the command line. For example:

```
cmdpost -c 'require("cp.plugins")("finalcutpro.timeline.lanes").selectClipAtLane(1)'
```

This allows you to have all the power of CommandPost & it's Lua Scripting Engine, directly from the command line.

You can learn more about the Command Line Interface [here](control/command-line.md).

### URL Handler

CommandPost also has a URL Handler which allows you to trigger CommandPost Commands & Actions via a URL address.

For example:

`commandpost://command?group=fcpx&id=cpSelectClipAtLaneOne`

You can learn more about the URL Handler [here](control/urlhandler.md).

---

## How has CommandPost been built?

CommandPost is made up of two seperate components:

* [CommandPost-App](https://github.com/CommandPost/CommandPost-App) is a fork of [Hammerspoon](http://www.hammerspoon.org). This is the main Objective-C based Xcode project.
* [CommandPost](https://github.com/CommandPost/CommandPost) is a repository that contains all of the CommandPost [Lua](https://www.lua.org/about.html) scripts, which actually make up the CommandPost user interface and feature set.

Essentially, we're using Hammerspoon as an "engine" to drive our Lua-based application.

---

## What is Hammerspoon?

[Hammerspoon](http://www.hammerspoon.org) is a tool for powerful automation of macOS. At its core, Hammerspoon is just a bridge between the operating system and a Lua scripting engine. What gives Hammerspoon its power is a set of extensions that expose specific pieces of system functionality, to the user.

With Hammerspoon, you can write Lua code that interacts with macOS APIs for applications, windows, mouse pointers, filesystem objects, audio devices, batteries, screens, low-level keyboard/mouse events, clipboards, location services, wifi, and more.

Hammerspoon Extensions can either be pure Lua or a mixture of Lua and Objective-C (although since they are just dynamically loaded libraries, they could ultimately be compiled in almost any language such as [Swift](https://developer.apple.com/swift/).

It's extremely powerful, and is very much in active development. We're MASSIVE fans.

Because behind-the-scenes CommandPost is pretty much exactly the same code as Hammerspoon - all Hammerspoon extensions are completely compatible with CommandPost.

---

## How has Hammerspoon been built?

Hammerspoon is actually a fork of [Mjolnir](https://github.com/sdegutis/mjolnir) by Steven Degutis. Unlike Hammerspoon, Mjolnir aims to be a very minimal application, with its extensions hosted externally and managed using a Lua package manager. Hammerspoon wanted to provide a more integrated experience.

Hammerspoon is composed of three separate logical areas - a Lua runtime wrapper framework called [LuaSkin](http://www.hammerspoon.org/docs/LuaSkin/Classes/LuaSkin/index.html#), the core Hammerspoon app which houses the LuaSkin/Lua runtime and provides the ability to load extensions, and [various extension modules](https://github.com/Hammerspoon/hammerspoon/tree/master/extensions) that [expose system APIs](/api/hs/hs.md) to the user's Lua code.

---

## What is Lua?

What do Adobe Photoshop Lightroom, Angry Birds, Apache HTTP Server, Apache Traffic Server, the Firefox web browser, MediaWiki, and World of Warcraft all have in common? They are all extensible using the cross-platform Lua programming language!

Lua is a powerful and fast programming language that is easy to learn and use and to embed into your application.

Lua is designed to be a lightweight embeddable scripting language and is used for [all sorts of applications](https://www.lua.org/uses.html) from games to web applications and image processing.

Lua is freely available for any purpose, including commercial purposes, at absolutely no cost, and using it requires no paperwork. Read the details in the [license page](https://www.lua.org/license.html).

---

## Why Lua & Hammerspoon?

Building software can be extremely complex and time consuming. There's a big jump in knowledge and experience needed between building a simple HTML page, and a fully-fledged Objective-C application.

We're impatient and lazy (or just busy?). We don't have the time to learn Objective-C or the extremely comprehensive macOS frameworks.

That's why we really love Hammerspoon. Because smart and incredibly generous people have put together some incredible Hammerspoon extensions, we can quickly and easily throw together complex scripts using very simple Lua code.

For example, lots of Mac utilities place a small icon in the system menubar to display their status and let you interact with them. We’re going to use two of Hammerspoon’s extensions to whip up a very simple replacement for the popular utility `Caffeine`.

```lua
local caffeine = hs.menubar.new()
function setCaffeineDisplay(state)
    if state then
        caffeine:setTitle("AWAKE")
    else
        caffeine:setTitle("SLEEPY")
    end
end

function caffeineClicked()
    setCaffeineDisplay(hs.caffeinate.toggle("displayIdle"))
end

if caffeine then
    caffeine:setClickCallback(caffeineClicked)
    setCaffeineDisplay(hs.caffeinate.get("displayIdle"))
end
```

This code snippet will create a menubar item that displays either the text `SLEEPY` if your machine is allowed to go to sleep when you’re not using it, or `AWAKE` if it will refuse to sleep. The [`hs.caffeine`](/api/hs/hs.caffeinate.md) extension provides the ability to prevent the display from sleeping, but [`hs.menubar`](/api/hs/hs.menubar.md) is providing the menubar item.

In this case we create the menubar item and connect a callback (in this case `caffeineClicked()`) to click events on the menubar item. You can also use icons instead of text, using the `:setIcon()` method on your menubar object.

As you can see, with very few lines of code, we can do incredibly powerful things.

What we've done with CommandPost is basically take all the power of Hammerspoon, and it's extensive Hammerspoon Extensions, and then built our own set of extensions, such as [`cp.finalcutpro`](/api/cp/cp.md) - which allows use to control Final Cut Pro.