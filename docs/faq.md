# Frequently Asked Questions

### Why is CommandPost no longer free?

!!!tip
**CommandPost now requires at least ONE paid LateNite application installed from the Mac App Store.**\
\
The cheapest options are [ScriptStar](https://scriptstar.fcp.cafe), [Fast Collections](https://fastcollections.fcp.cafe), [Gyroflow Toolbox](https://gyroflowtoolbox.fcp.cafe), [LUT Robot](https://lutrobot.fcp.cafe), [News Import](https://newsimport.fcp.cafe), [Recall Toolbox](https://recalltoolbox.fcp.cafe) and [Transfer Toolbox](https://transfertoolbox.fcp.cafe) - all **USD$9.99**.\
\
You can find a list of all our applications on the [Mac App Store](https://apps.apple.com/au/developer/latenite-films-pty-ltd/id1652018641).
\
All our applications on the Mac App Store support Family Sharing, and offer a reduced price on the Apple School Manager for volume purchases.\
\
**CommandPost remains open source - and you can build it yourself.**
!!!

Back on 15th September 2016, **FCPX Hacks** was born into the world. You can read the origin story [on this old blog post](https://fcp.cafe/blog/final-cut-pro-hacks/#original-blog-post-15th-september-2016).

I wrote:

> Over the last few days, I’ve been having lots of discussions with other Final Cut Pro users on social media about how annoying the **Reveal in Browser** (aka "Match Frame") feature in FCPX is. The problem is that if you have hundreds of clips within your browser, when you match frame it’s really hard to instantly visually see where the playhead is in a sea of other clips. It’s also really annoying if you’ve got your playhead at a specific position in the browser, then continue editing in the timeline for a hour or so, and want to easily jump back to that browser playhead position to continue where you left off. It’s VERY hard to spot which clip is selected and where the tiny white playhead is hiding in the browser!

Basically, I really wanted to solve this problem for [Scott Simmons](https://www.scottsimmons.tv), and I couldn't solve it with AppleScript or Automator (and at the time I had ZERO idea about Xcode), but I found a little open source project called [Hammerspoon](https://www.hammerspoon.org), and kinda fell in love.

I grew up with BASIC programming on a PC, and Lua (the scripting language used in Hammerspoon) was VERY similar.

Once I solved the **Highlight Playhead** problem, I started tackling hundreds of other Final Cut Pro Workflow issues.

Eventually **FCPX Hacks** became a monster with hundreds of features. You can read about it on [this old blog post](https://fcp.cafe/blog/final-cut-pro-hacks/#final-cut-pro-hacks).

As **FCPX Hacks** grew though, something awesome happened. A Brisbane guy called David Peterson got in touch. He was a filmmaker, but also a professional programmer, and he had some ideas on how to fix up **FCPX Hacks** to make it better.

We started collaborating... a lot. He introduced me to [GitHub](https://github.com). He slowly helped me transform my GIANT single Lua file (that was **FCPX Hacks**) into **many** individual files.

Eventually, we decided, rather than just shipping a bunch of Lua scripts, and asking users to install Hammerspoon - we forked Hammerspoon, renamed **FCPX Hacks** to **CommandPost**, and started shipping it as a self-contained application.

In **November 2019**, after **78 releases** of **FCPX Hacks** and **91 beta releases** of CommandPost, CommandPost v1.0.0 was released into the world.

At the time, with over 3300 active monthly users and over 1208 users in our Facebook Community, we were very happy with the progress CommandPost had made over the previous three years.

Over the next 7 years, we continued to update CommandPost and make it bigger and better.

More control surfaces were added. Every time Apple pushed out a Final Cut Pro update, we had to madly work to support it on launch day.

Apple has never given us access to early copies/betas/seeds of Final Cut Pro - so we get our hands on it the same day that you do - and generally speaking something breaks, because a user interface has changed, a button has been renamed, or the `FCPXML DTD` has been updated.

Whilst there were some amazing companies like Tangent and Loupedeck who have been INCREDIBLY supportive of CommandPost, for most control surface companies, they didn't really care about CommandPost, so we had to buy our own hardware to make things work.

Over the years both David and I have spent an insane amount of hours on CommandPost, especially in the early days:

![](/static/github-stats.png)

We've also spent a LOT of money on control surfaces out of our own pockets.

![](/static/commandpost-buttons.jpg)

Whilst we've always offered a way to sponsor CommandPost on GitHub, very few took up the opportunity.

At the time of writing, the CommandPost GitHub repository currently has 9 sponsors, and my personal GitHub repository currently has 3 sponsors.

The GitHub income barely covers the cost of the domain, let alone buying control surfaces for testing.

The hope/dream has always been to get CommandPost onto the Mac App Store, but unfortunately the Mac App Store doesn't allow any applications that use Private APIs or applications that use the Accessibility API - so that basically rules out CommandPost all together.

However, there are "tricks" to get it on the Mac App Store - some apps get around the Accessibility API rules by having an optional helper application that does all the Accessibility work.

I spent a few months trying to get something onto the Mac App Store - but just hit road-block after road-block, so in the end I decided to come up with another plan.

Building out our own licensing system, and online shop was definitely an option, but I helped do that for [Jumper](https://getjumper.io), and it was a HUGE amount of work, and there's an on-going cost for Paddle & Keygen. Basically, this just all falls into the too hard basket, so I came up with something a bit more unique...

**CommandPost v2** now requires at least **ONE PAID** [LateNite](https://apps.apple.com/au/developer/latenite-films-pty-ltd/id1652018641) application installed.

After **9 years of free updates**, to ensure that CommandPost continues to be developed, improved, and stay open-source, we've decided that you need at least ONE paid [LateNite](https://apps.apple.com/au/developer/latenite-films-pty-ltd/id1652018641) application installed to use CommandPost moving forward - consider it "inner circle" software (i.e. only our mates get access to it).

To use **CommandPost v2** please download and install at least **ONE** [LateNite](https://apps.apple.com/au/developer/latenite-films-pty-ltd/id1652018641) application from the [Mac App Store](https://apps.apple.com/au/developer/latenite-films-pty-ltd/id1652018641). The cheapest is **USD$10**.

Alternatively, you can always stay on **CommandPost v1** without updating (you can turn off **Automatically Check for Updates** in the CommandPost's **General Preferences**), or build CommandPost yourself in [Xcode](https://github.com/CommandPost/CommandPost), as it remains completely open source.

HOPEFULLY this little bit of extra income will allow me to spend more time on CommandPost, so that I can continue to add more control surface support, and deeper integration into Final Cut Pro moving forward.

Thank you to **EVERYONE** who has supported CommandPost throughout these years!

Onwards & Upwards!

---

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

---

### Why did you remove the Shot Data Toolbox?

This feature was removed in **CommandPost v1.6.0**, as it was rarely used, and Vigneswaran Rajkumar has started work on a Swift rewrite of this functionality.

---

### Why did you remove the Notion Toolbox?

This feature was removed in **CommandPost v1.6.0**, as it was rarely used, and Vigneswaran Rajkumar has started work on a Swift rewrite of this functionality.