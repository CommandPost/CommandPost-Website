# Frequently Asked Questions

### Why did you remove "Moveable Markers"?

Moveable Markers was [first discovered](http://alex4d.com/notes/item/fcpx-movable-markers) by Alex Goldner back in June 2014.

To enable it, you basically just need to toggle a boolean hidden within a preference file inside the Final Cut Pro Library.

In the early days of [FCPX Hacks](https://latenitefilms.com/blog/fcpx-hacks) we added an option for Moveable Markers which enables them using the same technique Alex found, except it allowed users to easily toggle the feature on and off using the menu bar or shortcut keys.

When we transitioned FCPX Hacks to CommandPost, we kept this feature, however we've since decided that it's probably a bad idea to modify the contents of the Final Cut Pro application bundle, so we removed this feature all together, along with other features that modify the contents of the Final Cut Pro application bundle (such as inserting our commands into the Final Cut Pro Command Editor).

We want CommandPost to be as safe and reliable as possible, and we want to avoid using "hacks" to make things happen.

The easiest way to enable Moveable Markers is via Terminal.

This works on Final Cut Pro 10.5.2 and below on both Intel and Apple Silicon.

The below assumes you have Final Cut Pro installed within the `/Applications` folder.

This will enable them:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' true" '/Applications/Final Cut Pro.app/Contents/Frameworks/TLKit.framework/Versions/A/Resources/EventDescriptions.plist'`

This will disable them:

`sudo /usr/libexec/PlistBuddy -c "Set :TLKMarkerHandler:Configuration:'Allow Moving Markers' false" '/Applications/Final Cut Pro.app/Contents/Frameworks/TLKit.framework/Versions/A/Resources/EventDescriptions.plist'`

---

### Why did you remove "Show Timeline in Viewers"?

Unfortunately Apple removed the hidden "Show Timeline in Viewers" preference in Final Cut Pro 10.4.9.

As CommandPost is just enabling this hidden preference, unfortunately there's nothing we can do to bring it back.

However, you can still use this feature if you're using Final Cut Pro 10.4.4 to 10.4.8.

If you found this feature useful, please [send feedback to Apple](https://www.apple.com/feedback/finalcutpro.html) explaining how you used it and why you found it useful.

---

### Why did you remove the "Hidden FCPXML Import/Export Option"?

Unfortunately Apple removed the "Hidden FCPXML Import/Export Option" preferences in Final Cut Pro 10.4.9.

As CommandPost is just enabling these hidden preferences, unfortunately there's nothing we can do to bring them back.

However, you can still use these features if you're using Final Cut Pro 10.4.4 to 10.4.8.

If you found this feature useful, please [send feedback to Apple](https://www.apple.com/feedback/finalcutpro.html) explaining how you used it and why you found it useful.