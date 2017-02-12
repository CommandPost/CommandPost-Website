---
title: CommandPost User Guide
---

# User Guide

- [Installation](#installation)
- [Assessibility Permissions](#assessibility-permissions)
- [Removing CommandPost](#removing-commandpost)

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

The CommandPost preferences are located at `~/Library/Preferences/org.latenitefilms.CommandPost.plist` - this file can also be dragged to the Trash to remove CommandPost completely.

---

