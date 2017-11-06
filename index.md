---
title: CommandPost
---

# Introduction:

CommandPost is a completely **free** and [**open source**](https://github.com/CommandPost/CommandPost/blob/develop/LICENSE.md) Mac application that allows you to seriously speed up your creative editing process through powerful and customisable automation tools. Think Apple's [Automator](https://macosxautomation.com/automator/), with a little bit of [BetterTouchTool](https://www.boastr.net) and [Keyboard Maestro](https://www.keyboardmaestro.com) thrown in, but specifically designed for creative professionals.

It's currently focussed on Apple's [Final Cut Pro](http://apple.com/final-cut-pro/) - however the road-map is to add useful functionality for other tools we use on a daily basis, like [Adobe After Effects](http://www.adobe.com/au/products/aftereffects.html) and [mocha Pro](http://www.imagineersystems.com/products/mocha-pro/).

It originally started off as a little proof-of-concept project to make finding the Final Cut Pro browser playhead easier for [Scott Simmons](http://www.scottsimmons.tv/) (you can read the origin story [here](https://latenitefilms.com/blog/final-cut-pro-hacks/)) – but has since grown into a HUGE collection of handy professional workflow tools and unique automation features to make editing within Final Cut Pro faster, easier and much more powerful.

Built on-top of a powerful and flexible plugin architecture, the aim of CommandPost is to build an **open platform** where editors worldwide can easily create and share useful tools to make their editing lives easier - allowing them to spend less time worrying about keystrokes, and more time doing creative things. We want to remove boring workflow obstacles so that everyone can **get home earlier** and spend **less** time in front of a computer.

For those that know how to stumble around HTML or JavaScript code, building plugins for CommandPost will also be a breeze, as they're built using the powerful, fast, and easy-to-learn [Lua](https://www.lua.org/about.html) coding language.

You can listen to Chris explain CommandPost on [Final Cut Pro Radio](http://fcpradio.com/episodes/episode043.html).

---

# Top Features for Final Cut Pro:

- Timecode Overlays in Viewer
- Batch Exporting from Browser
- Scrolling Timeline
- Watch Folders
- Customisable Touch Bar buttons
- Shared Clipboard & Clipboard History
- Timeline Zooming with Mouse Scroll & OPTION key (includes Magic Mouse)
- Color Board controls on the MacBook Pro Touch Bar (or using [Duet](https://www.duetdisplay.com))
- Color Board Puck Shortcuts (for use with control surfaces)
- Movable Markers
- Mobile Notifications ([Prowl](https://www.prowlapp.com) or iMessage)
- Enable Rendering During Playback
- Change Final Cut Pro's Backup Interval
- [Stream Deck](https://www.elgato.com/en/gaming/stream-deck) Support
- Ignore Inserted Camera Cards
- Highlight Browser Playhead
- *Plus lots more...*

---

# Download:

CommandPost is currently in a **public beta testing phase**.

If you're interested in helping out please join our [Beta Testers Facebook Group](https://www.facebook.com/groups/commandpost/).

You can download the latest release <a href="https://github.com/CommandPost/CommandPost/releases/latest" id="download-text-link">here</a>.

[![GitHub release](https://img.shields.io/github/release/CommandPost/CommandPost/all.svg)](https://github.com/CommandPost/CommandPost/releases) [![license](https://img.shields.io/github/license/CommandPost/CommandPost.svg)](https://github.com/CommandPost/CommandPost/blob/develop/LICENSE.md) [![Github All Releases](https://img.shields.io/github/downloads/CommandPost/CommandPost/total.svg)](https://github.com/CommandPost/CommandPost/releases) [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HQK87KLKY8EVN)

---

# System Requirements:

CommandPost supports **macOS 10.10.5** or above (Sierra recommended).

It requires **Accessibility Permissions**, so you'll need your computer's **Administrator Password**.

The Final Cut Pro features require **Final Cut Pro 10.3.2** or above (10.3.4 recommended).

The **Touch Bar** & **Magic Mouse** features require **[macOS Sierra 10.12.1](https://support.apple.com/kb/dl1897)** or above.

---

# How to Contribute:

You can help support CommandPost by:

- [Making a Secure PayPal Donation.](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HQK87KLKY8EVN)
- [Buying Merchandise.](https://lateniteshop.com)

...or help out with development by:

- [Translating CommandPost into other languages.](https://dev.commandpost.io/internationalisation/translate/)
- [Creating your own CommandPost Plugins and sharing them with the community.](https://dev.commandpost.io/plugins/overview/)
- [Helping create tutorials and documentation for CommandPost.](https://github.com/CommandPost/CommandPost/issues)
- [Supporting the development of Hammerspoon.](http://www.hammerspoon.org)
- [Supporting the development of Lua](https://www.lua.org/donations.html)

---

# Support:

You can post issues and feature requests on the [CommandPost GitHub Page](https://github.com/CommandPost/CommandPost/issues). Registering with GitHub is free, and we actively monitor these requests, so you'll generally get a very quick reply.

Alternatively, you can always email us via [team@commandpost.io](mailto:team@commandpost.io).

---

# Authors:

CommandPost was [originally](https://latenitefilms.com/blog/final-cut-pro-hacks/) conceived and thrown together by Chris Hocking at [LateNite Films](https://latenitefilms.com/about/).

It's now developed and maintained by [Chris Hocking](https://github.com/latenitefilms) & [David Peterson](https://github.com/randomeizer) through [GitHub](https://github.com/CommandPost/CommandPost).

---

# Special Thanks:

The CommandPost logo was designed by the very generous and talented [Sam Woodhall](https://twitter.com/SWDoctor).

The [CommandPost-App](https://github.com/CommandPost/CommandPost-App) is a fork of [Hammerspoon](http://www.hammerspoon.org). Thank you to [EVERYONE](https://github.com/Hammerspoon/hammerspoon/blob/master/CREDITS.md) in the [Hammerspoon Community](https://github.com/Hammerspoon/hammerspoon/issues) for all their help!

MASSIVE thanks to [Aaron Magill](https://github.com/asmagill) and [Chris Jones](https://github.com/cmsj) for all their on-going [help and support](https://github.com/Hammerspoon/hammerspoon/issues) with Hammerspoon – they’re both truly awesome people. CommandPost wouldn't be remotely possible if it wasn't for their brains and constant help and support. Thank you, thank you.

MASSIVE thanks to the INCREDIBLE Andrew Kramer at [Video Copilot](http://www.videocopilot.net/) for giving the world [FX Console](http://www.videocopilot.net/blog/2016/10/new-workflow-plug-in-fx-console-is-now-available/) for FREE – and also inspiring me to rip off his genius idea and include a “console” feature in CommandPost!

MASSIVE thanks to Bill Cheeseman at [PFiddlesoft](http://pfiddlesoft.com/), for all his help with [UI Browser](http://pfiddlesoft.com/uibrowser/index.html) and his very generous GUI Scripting advice. Thanks also to Andreas Verhoeven & Robbert Klarenbeek for the work they’ve done with [Touch Bar Demo App](https://github.com/bikkelbroeders/TouchBarDemoApp) - which [Aaron Magill](https://github.com/asmagill) very kindly [ported to Hammerspoon](https://github.com/asmagill/hammerspoon_asm/tree/master/touchbar).

MASSIVE thanks to [Iain Anderson](http://funwithstuff.com) for all his beta testing and encouragement.

MASSIVE thanks to the always amazing Karen Hocking, Daniel Daperis, [David Hocking](http://www.dphocking.com/), Nicholas Colla, [Alex Gollner](http://alex4d.com/), [Scott Simmons](http://www.scottsimmons.tv/), [Isaac J. Terronez](https://twitter.com/ijterronez), Tim Webb, Vigneswaran Rajkumar, Андрей Смирнов, Michael Matzdorff, Shahin Shokoui, Ilyas Akhmedov and everyone in the FCPX Editors InSync & FINAL CUT PRO X EDITORS Facebook Groups for all their ideas and advice!

Thanks also to all our [awesome beta testers](https://www.facebook.com/groups/commandpost/)!