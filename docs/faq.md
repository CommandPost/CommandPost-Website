# Frequently Asked Questions

### Why does CommandPost require "Screen Recording" permissions?

If you're using macOS Catalina or later, CommandPost requires the **Screen Recording** permission to detect things on your screen.

This is a new Security Setting in macOS Catalina, not a change to how CommandPost works.

**CommandPost does not record the screen.**

We're not "recording" the screen as a video like a QuickTime Player or a screen recording application would do - we're simply using Apple's APIs to get access to information about the contents of the screen.

We use Apple's API's to get the name of windows that are open.

We also use the API's to help detect when Final Cut Pro is playing and paused, by "looking" at the play/pause button in the Viewer.

**Nothing is saved to disk. Nothing is transmitted online.**

We simply use Apple's APIs to access screen information.

We also have the option of **OPTIONALLY** sending screenshots when you submit feedback.

Lots of other applications like [Bartender](https://www.macbartender.com/Screen-Recording-Permission/) and [BetterTouchTool](https://folivora.ai/blog/post/13011/) have this same limitation.

Also remember, CommandPost is totally open-source, so you can always [inspect the code](https://github.com/CommandPost/CommandPost) to see what we're doing.

---

### Why did you remove the "Vimeo Toolbox"?

The Vimeo Toolbox has "graduated" from CommandPost and has been spun out into a standalone commercial app called Marker Toolbox.

It's our intention to "spin out" a lot of CommandPost's features into standalone apps with enhancements over the coming years.

However, you can still use Vimeo Toolbox in [older versions of CommandPost](https://github.com/CommandPost/CommandPost/releases) - no one if forcing you to update CommandPost if you rely on this functionality.

You can learn more about Marker Toolbox [here](https://markertoolbox.io).

---

### Why did you remove "Moveable Markers"?

Moveable Markers was [first discovered](http://alex4d.com/notes/item/fcpx-movable-markers) by **Alex Goldner** back in **June 2014**.

To enable it, you basically just need to toggle a boolean hidden within a preference file inside the Final Cut Pro Library.

In the early days of [FCPX Hacks](https://latenitefilms.com/blog/final-cut-pro-hacks/) we added an option for Moveable Markers which enables them using the same technique Alex found, except it allowed users to easily toggle the feature on and off using the menu bar or shortcut keys.

When we transitioned FCPX Hacks to CommandPost, we kept this feature, however we later decided that it's probably a bad idea to modify the contents of the Final Cut Pro application bundle, so we removed this feature all together, along with other features that modify the contents of the Final Cut Pro application bundle (such as inserting our commands into the Final Cut Pro Command Editor).

We want CommandPost to be as safe and reliable as possible, and we want to avoid using "hacks" to make things happen.

The easiest way to enable Moveable Markers is via **Terminal**.

Starting in **macOS Sequoia 15**, you'll also need to grant **Terminal Full Disk Access** in **System Settings**, so that Terminal has access to modify these files. You can disable Full Disk Access after you've executed these commands for security.

The below works on **Final Cut Pro 10.8.1 and below** on both Intel and Apple Silicon.

The below assumes you have Final Cut Pro installed within the `/Applications` folder.

This will **enable Moveable Markers**:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' true" '/Applications/Final Cut Pro.app/Contents/Frameworks/TLKit.framework/Versions/A/Resources/EventDescriptions.plist'`

This will **disable Moveable Markers**:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' false" '/Applications/Final Cut Pro.app/Contents/Frameworks/TLKit.framework/Versions/A/Resources/EventDescriptions.plist'`

With the update of **Final Cut Pro 11**, internally some things have changed - requiring some slightly different commands:

This will **enable Moveable Markers**:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' true" '/Applications/Final Cut Pro.app/Contents/Frameworks/TimelineKit.framework/Versions/A/Resources/EventDescriptions.plist'`

This will **disable Moveable Markers**:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' false" '/Applications/Final Cut Pro.app/Contents/Frameworks/TimelineKit.framework/Versions/A/Resources/EventDescriptions.plist'`

However, due to new security protections in **macOS Sequoia 15**, after running the above commands, you'll now see something like this (noting, that I've renamed `Final Cut Pro.app` to `Final Cut Pro Modified.app`:

![](/static/fcp-modified-warning.png)

Click **Cancel** and then open **System Settings**.

In the **Privacy & Security** panel, you'll need to click the **Open Anyway** button:

![](/static/fcp-modified-warning-open-anyway.png)

Apple obviously does **NOT** want you to do this, so tread with care.

---

### Why did you remove "Show Timeline in Viewers"?

Unfortunately Apple removed the hidden "Show Timeline in Viewers" preference in Final Cut Pro 10.4.9.

As CommandPost is just enabling this hidden preference, unfortunately there's nothing we can do to bring it back.

However, you can still use this feature if you're using Final Cut Pro 10.4.4 to 10.4.8.

If you found this feature useful, please [send feedback to Apple](https://www.apple.com/feedback/finalcutpro/) explaining how you used it and why you found it useful.

---

### Why did you remove the "Hidden FCPXML Import/Export Option"?

Unfortunately Apple removed the "Hidden FCPXML Import/Export Option" preferences in Final Cut Pro 10.4.9.

As CommandPost is just enabling these hidden preferences, unfortunately there's nothing we can do to bring them back.

However, you can still use these features if you're using Final Cut Pro 10.4.4 to 10.4.8.

If you found this feature useful, please [send feedback to Apple](https://www.apple.com/feedback/finalcutpro/) explaining how you used it and why you found it useful.