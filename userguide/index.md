---
title: CommandPost User Guide
---

# User Guide

- [Installation](#installation)
- [Assessibility Permissions](#assessibility-permissions)
- [Removing CommandPost](#removing-commandpost)
- [The Menubar](#the-menubar)
- [Preparing the Console, HUD & Shortcuts](#preparing-the-console-hud-shortcuts)
- [The Console](#the-console)

## Installation

You can download the latest release of CommandPost as an DMG package <a href="https://github.com/CommandPost/CommandPost/releases/latest" id="download-text-link">here</a>.

Once downloaded, simply open the package by double-clicking it, then drag the CommandPost Application into your Applications folder on your Mac. You can then double click on the CommandPost application to open it.

---

## Assessibility Permissions

CommandPost makes use of the macOS Accessibility Frameworks to control Final Cut Pro. This is called GUI Scripting.

When you first run CommandPost, you'll be prompted with the following alert:

![CommandPost Accessibility Dialog Box](http://commandpost.io/assets/images/cp-accessibility-alert-01.png "CommandPost Accessibility Dialog Box")

When you click **OK**, you'll then be presented with another alert:

![CommandPost Accessibility Dialog Box](http://commandpost.io/assets/images/cp-accessibility-alert-02.png "CommandPost Accessibility Dialog Box")

When you click **Open System Preferences**, it will open the Accessibility section of the Security & Privacy System Preferences, which looks like this:

![Security & Privacy System Preferences](http://commandpost.io/assets/images/cp-accessibility-alert-03.png "Security & Privacy System Preferences")

In the bottom left hand corner of the screen you'll see a padlock. You need to click this to "unlock" the settings panel using your systems password. Once unlocked, you need to make sure that the CommandPost application is ticked. Once this is done, CommandPost will have access to the macOS Accessibility Framework, allowing it to "interact" with Final Cut Pro.

![Security & Privacy System Preferences](http://commandpost.io/assets/images/cp-accessibility-alert-04.png "Security & Privacy System Preferences")

---

## Removing CommandPost

To remove CommandPost from your system, simply drag the CommandPost application to the trash.

The CommandPost preferences are located at: 

`~/Library/Preferences/org.latenitefilms.CommandPost.plist`

This file can also be dragged to the Trash to remove CommandPost's Preferences.

---

## The Menubar

The main interface for CommandPost is the menubar, which sits in your system's menubar at the top right of the screen alongside other itmes such as the WiFi icon, Volume Control, Battery Information, Date & Time, and Spotlight. The menubar is split up into multiple sections, and offers a huge variety of different tools and features:

![CommandPost Menubar](http://commandpost.io/assets/images/cp-menubar.png "CommandPost Menubar")

If you find the menubar too overwhelming, you can customise it by showing and hiding different "sections" to your liking:

![CommandPost Menubar Preferences](http://commandpost.io/assets/images/cp-menubar-preferences.png "CommandPost Menubar Preferences")

Within these same menubar preferences, is the ability to enable/disable the **Display Proxy/Original Icon**. When enabled, this inserts a coloured dot in the menubar to visually highlight if you’re watching Proxy or Original files in Final Cut Pro - allowing you to instantly see if you're watching videos in the Viewer at full quality or not. If the dot is red you're watching proxies, otherwise if the dot is blue you're watching at full quality.

![Display Proxy/Original Icon](http://commandpost.io/assets/images/cp-proxy-icon.png "Display Proxy/Original Icon")

---

## Preparing the Console, HUD & Shortcuts

One of the first things you should do when you run CommandPost is open up Final Cut Pro, and update the Effects, Transitions, Titles, Generators lists. What this does is essentially "scans" the Final Cut Pro interface, and creates a "cache" of all the different Effects, Transitions, Titles and Generator options for use as Shortcuts, and as options in the Console & HUD.

Without updating these lists, CommandPost has no idea what 3rd party Effects, Transitions, Titles and Generators you have installed.

You can update these lists via the **TIMELINE: > Assign Shortcuts** menubar. For example, to update the Effects list, press the **TIMELINE: > Assign Shortcuts > Effects Shortcuts > Update Effects List** button and follow the prompts.

![Update Effects](http://commandpost.io/assets/images/cp-update-effects.png "Update Effects")

Once you have completed this step, every effect you have installed in Final Cut Pro will now be available as an option in the CommandPost Effects Shortcut assignment, the HUD button assignment, and as an option in the Console.

If you install a new Effect, Transition, Title or Generator, you will need to again update these lists before the new items will appear in CommandPost.

---

## The Console

TBC
