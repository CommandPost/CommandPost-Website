# Batch Export Active Timeline
---

Batch Export Active Timeline is designed to work similar to exporting individual clips in Resolve for handing over graded clips for online editing. In Final Cut Pro, you can always select multiple items on your Browser and batch export, however, batch exporting from timeline allows you to quickly apply the same treatment, either with Select All or with an adjustment layer, to any number of clips on your timeline while they can still be exported individually. This is especially useful for situations like applying a new watermark or an audio filter to hundreds of videos at once.

Note that the way CommandPost achieves the batch export is by taking control of your computer's control, as you will be warned after triggering the batch export. Other than not being able to use your machine while batch exporting, you should note that CommandPost batch export clips by marking in and out points on your timeline for each clip you have selected. Which means that any adjustment layers, titles, secondary timeline clips will all have its own exported files, **BUT** as in a normal export, the layers will be mixed down and if the clip is below another opaque clip, the export will not show the clip underneath. Therefore it is suggested that you only select clips with edit points that reflects how you wanted your timeline to split, and any layers above it will still be mixed down even when they are not selected.

To use Batch Export Active Timeline, first open your timeline and select the clips. Then access the Batch export Active Timeline from the CommandPost Menubar while Final Cut Pro is in focused.

![Batch Export Active Timeline](../../images/batch-export-active-timeline-1.png)

You will be presented with the Batch Export Active Timeline Settings.

![Batch Export Active Timeline Settings](../../images/batch-export-active-timeline-2.png)

This is where you can configure the behaviour of the batch export to:

* **Change Destination Folder** to a folder of your choice.
* **Change Destination Preset** from a list of Destination you have in Final Cut Pro.
* **Change Custom Filename** to define a name used for the exports. This setting will not have any effect unless **Use Custom Filename** is checked. CommandPost add a sequential number after the name to avoid overwriting, regardless of your **Replace Existing Files** setting. 
* **Use Custom Filename** to enable the Custom Filename settings.
* **Replace Existing Files** to replace previously exported files.
* **Ignore Missing & Offline Files Warning** to keep the batch export working even if there is some missing clips among your selection.
* **Ignore Proxies Warning** to batch export with proxies.
* **Ignore Invalid Captions Warning** for CommandPost to bypass caption related warnings.
* **Ignore Background Tasks Warning** to bypass warnings related to stabilization in process, etc.

Pressing Perform Batch Export will present you with a final warning before you must let CommandPost take over your computer. 

![Batch Export Active Timeline Warning](../../images/batch-export-active-timeline-3.png)

You can still, however, resist CommandPost's control by hiding Final Cut Pro and it will present you with a warning about CommandPost aborting the batch export.

![Batch Export Active Timeline Warning](../../images/batch-export-active-timeline-4.png)

You should be presented with the completion message when all the clips in your selection has been added to the export queue, and you can then resume to use your computer. 

![Batch Export Active Timeline Warning](../../images/batch-export-active-timeline-5.png)