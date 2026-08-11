# AppleScript

CommandPost allows you to trigger any arbitrary Lua code via CommandPost's AppleScript interface.

So, for example, rather than using complex GUI scripting, if you want your AppleScript code to select the second clip on a Final Cut Pro, you could use:

```applescript
tell application "CommandPost"
	execute lua code "require(\"cp.plugins\")(\"finalcutpro.timeline.lanes\").selectClipAtLane(1)"
end tell
```

This allows you to have all the power of CommandPost & it's Lua Scripting Engine, directly within AppleScript.

This also means that you can use AppleScript Commands within Apple Automator to put together complex workflows for controlling Final Cut Pro.

CommandPost supports the following AppleScript commands:

> **execute lua code** text : The string to execute -> Returns the Lua Code Execution Result
>
> **quit** : Quits CommandPost
>
> **application name** (text, r/o) : The name of the application.
>
> **application frontmost** (boolean, r/o) : Is this the active application?
>
> **version** (text, r/o) : The version number of the application.

The ability to mix and match AppleScript & Lua allows for all kinds of interesting possibilities!

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
