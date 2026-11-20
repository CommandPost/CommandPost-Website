# Sony Timecode Repair

Final Cut Pro currently doesn't correctly interpret timecode from certain Sony Cameras that are recording into an MP4 wrapper.

This Toolbox will update a Project's FCPXML to use the correct timecode values from the XML sidecar file (or the MP4 itself if no sidecar file exists), so that you can more easily send timelines from Final Cut Pro to DaVinci Resolve, Baselight or Adobe Premiere (with XtoCC).

This Toolbox supports both Drop Frame (29.97fps, 59.94fps, 119.88fps) and Non-Drop Frame Timecode (i.e 24fps, 25fps, 120fps, etc).

This Toolbox was thrown together for Alister Robbie. Thanks George Elias, Jamie LeJeune & Valerio D'Andrassi.

![](../static/toolbox-sony-timecode.png)

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
