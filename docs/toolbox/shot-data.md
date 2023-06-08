# Shot Data User Guide

![SDCover.gif](assets/SDCover.gif)

# Table of contents

- [Shot Data User Guide](#shot-data-user-guide)
- [Background](#background)
  - [What is Sound Locking?](#what-is-sound-locking)
  - [The Most Resilient Parasite](#the-most-resilient-parasite)
- [Enter Shot Data](#enter-shot-data)
  - [Why Final Cut Pro?](#why-final-cut-pro)
  - [Why Notion?](#why-notion)
  - [Introduction to Notion’s databases](#introduction-to-notions-databases)
- [Basic Usage - Shot Data](#basic-usage---shot-data)
- [Advance Usage - Shot Data](#advance-usage---shot-data)
- [FAQ](#faq)
- [Afterthoughts](#afterthoughts)

![Shot Data Toolbox.png](assets/Shot_Data_Toolbox.png)

# Background

Before I explain the workflow behind **Shot Data**, let me explain the concept of “Sound Lock”. We all know what “Picture Lock” is.

> *Picture lock is a stage in editing a film or editing a television production. It is the stage prior to online editing when all changes to the film or television program cut have been done and approved. It is then sent to subsequent stages in the process, such as online editing and audio mixing. Any last-minute changes can force portions of subsequent work to be redone.*
> 

*Source: [Wikipedia](https://en.wikipedia.org/wiki/Picture_lock)*

In an analogous fashion, Sound Lock is a stage in a film or editing a television production where a sequence is edited before the production starts principal photography. In other words, before the project is being shot, in the pre-production or development stage. You could call it “Pre-Editing” as well. The filmmaker would use a series of concept images to construct a timeline.

## What is Sound Locking?

Now, you might ask, where does the Sound component come in? In projects like Music Video, music follows higher precedence over visuals. Not that the visuals are not important, but in 99% of all Music Videos, the music will always be composed and recorded first. Thus, with that piece of the Music, it becomes the “Locked” component. It will never change. The filmmaker now uses that music track as an anchor point to construct the matching visual or rather envisioned visuals against that music right within the NLE. These envisioned visuals could come as a set of reference images, [hand-drawn sketches](https://wonderunit.com/storyboarder/) or even 3D generated shots. It mostly revolves around the filmmaker’s workflow.

Sound Locking is not an entirely a new concept. Filmmakers, Music Video Directors and the animation industry have utilised this technique for a long time. The biggest hurdle from the above mentioned workflow is, there is no path to bring shot and scene information out from NLE to on-set usage meaningfully. Even if you have edited and prepared the sequence, the only method within the NLE is to export that sequence out as a rendered video file. It is not entirely useful, and shot information is not entirely homogenous. You are also required to do a Shot List manually based on the envisioned visuals. Which would precipitate tons of physical print out for various departments in productions, which yields a non eco-friendly work practice.

However, there are applications on the market like [Shot Lister](https://www.shotlister.com/), [Studio Binder](https://www.studiobinder.com/) or [Celtx](https://www.celtx.com/) that allow you to develop industry standard Shot Lists. But all seems to tackle the Shot List construction from a script level. There is undoubtedly nothing wrong with this approach. The script is the anchor point, as screenplay is the foundation of every production.

For Music Videos and music driven narratives, sound or music invariably takes higher precedence. You can’t visualise music on a sheet of paper except on a musical score sheet and you can’t conceivably construct a Shot List from a score sheet.

## The Most Resilient Parasite

![inception.gif](assets/inception.gif)

> *What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate. An idea that is fully formed - fully understood - that sticks; right in there somewhere. - Cobb*

The thought of **Shot Data** workflow sparked in my mind some 7 years ago when working on various commercial projects. But no proper streamlined workflow or application was available at that period in time.

Furthermore, most database applications were not exclusively mainstream. You had your usual suspects like Microsoft Access and FileMaker Pro. You would certainly need to engage a consultant to develop your custom database application, which is complicated and costly.

In recent times, there is an emergence of cloud based database applications, like Notion and Airtable. With Data being the centre-point of our lives, such applications provide new intuitive features in a cost effective manner.

Starting with **Shot Data**, I aim to streamline and optimise the process for Shot List generation from within Final Cut Pro.

# Enter Shot Data

## Why Final Cut Pro?

Final Cut Pro is a radical and controversial NLE. There are users who loathe it and there are users who espouse the application. I am the latter. Apart from speed, Final Cut Pro is extremely powerful when it comes to handling Metadata. In particular, it’s [FCPXML](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference) file. The `*.fcpxml` file contains most of the timeline’s information, including Metadata from custom Motion Titles.

Utilising the Sound Locking principles, Shot Data is a 2-part workflow and a tool that allows you to generate [Storyboard](https://en.wikipedia.org/wiki/Storyboard) or [Shot-List](https://www.masterclass.com/articles/film-101-what-is-a-shot-list-how-to-format-and-create-a-shot-list) from within Final Cut Pro to Notion.  It utilises a custom Motion Template as a basis for Shot’s Data tabulation. Hence the name **Shot Data**.

## Why Notion?

[Notion](https://www.notion.so/) is a single space where you can think, write, and plan. Capture thoughts, manage projects, or even run an entire company — and do it exactly the way you want. Notion provides the building blocks and you can create your own layouts and toolkit to get work done at an affordable cost.

Notion’s workspace allows you to write in a beautiful clean space, build your own personal wiki (with endless layers of content), plan using a kanban view, a calendar or a simple list view and last, but not least, to capture your workflows and record everything by creating databases.

If you are familiar with Final Cut Pro’s [Smart Collections](https://support.apple.com/en-sg/guide/final-cut-pro/ver2833eb5b/mac), you will feel right at home with Notion’s database. Notion’s database allows you to create custom views with specific [filters and sort criteria](https://www.notion.so/help/views-filters-and-sorts).

[![Why Notion?](https://i3.ytimg.com/vi/gp2yhkVw0z4/maxresdefault.jpg)](https://www.youtube.com/watch?v=gp2yhkVw0z4 "Why Notion?")

## Introduction to Notion’s databases

One feature that sets Notion apart from other database (i.e Airtable) is every entry or record is its own editable page. The record you enter into your database can be opened as its own Notion page, where you can layer or add in any information or [blocks](https://www.youtube.com/watch?v=BZnR2Ml17sc) you want.

[![Introduction to Notion’s databases](https://i3.ytimg.com/vi/npaNKlAO7g8/maxresdefault.jpg)](https://www.youtube.com/watch?v=npaNKlAO7g8 "Introduction to Notion’s databases")

# Basic Usage - Shot Data

<details>
<summary>Part 0 - Download CommandPost</summary>

1. Download and Install the latest version of CommandPost from [GitHub](https://github.com/CommandPost/CommandPost/releases/).
</details>

<details>
<summary>Part 1 - Sound Locking (Pre-Editing)</summary>

1. Select **Shot Data** from the **CommandPost**’s Toolbox Menu.
    
    ![S1.1.png](assets/S1.1.png)
    
2. Click **Install Motion Template** from the **Shot Data**’s Toolbox
    
    ![S1.2.png](assets/S1.2.png)
    
3. Launch **Final Cut Pro**.
    
    ![S1.3.png](assets/S1.3.png)
    
4. Create a new **Library** of your choosing.
5. In **Titles and Generators** sidebar, you will now see the **Shot Data** Template under **CommandPost** category.
    
    ![S1.4.png](assets/S1.4.png)
    
6. Create a new **Project** with your desired Resolution and Frame Rate.
    
    
    💡 **Shot Data** Template is design for 4K UHD, DCI & CinemaScope Resolutions.
    
    
    
7. Append a **Custom Solid** to the Timeline.
    
    ![S1.5.png](assets/S1.5.png)
    
    
    💡 Custom Solid is used for this example. You can use any other available Solids from the Generators.
    
    
    
    
    🪲 There is an apparent bug in Final Cut Pro where Custom **Generators** with complex rigging and layers does not preview the background colour in the timeline. Hence, we have to use default Custom Solid Generator for visual indication within the timeline.
    
    
    
8. Connect your desired Music or Score Track to the first clip.
    
    ![S1.6.png](assets/S1.6.png)
    


💡 You can completely use Shot Data without a Music Track. It all depends on your project’s workflow and requirements.



1. With the Custom Solid Generator, you can start editing using the music’s structure and rhythm.
    
    ![S1.7.png](assets/S1.7.png)
    
    
    💡 You could change the colour of each Custom Solid to provide you a visual indication. For quicker reusability, create a set of Custom Solids with different colours. And you could also create a separate **Role** for all the Custom Solids and tag with a different colour.
    
    
    
2. Once you have completed editing the timeline with Custom Solids, you can now proceed to connect your reference images.
    
    
    💡 These reference images, could be hand-drawn sketches, movie stills, photographs or even 3D rendered images.
    
    
    
    ![S1.8.png](assets/S1.8.png)
    
    
    💡 Upon connecting the images to the timeline, select all the images. press `CMD` + `G` to create a secondary storyline. With secondary storyline, you can easily snap the images to each edit point.
    
    
    
3. Now, Connect **Shot Data** Template to the timeline.
    
    ![S1.9.png](assets/S1.9.png)
    
4. Take a look at the **Published Parameters** of the **Shot Data** Template. Don’t get overwhelmed with the number of fields. 😳
    
    ![S1.10.gif](assets/S1.10.gif)
    
    
    💡 You need not have to tabulate data in every field. They are published for greater versatility and flexibility when generating the `*.csv`.
    
    
    
5. Back in your timeline, perform an Extend Edit `Shift` + `X` on **Shot Data** Template.
    
    ![S1.11.gif](assets/S1.11.gif)
    
6. Go back to the **Published Parameters** of the **Shot Data** Template, enter your desired shot information pertaining the timeline and scene. If your entire timeline is meant only for scene 10, enter in `10` in the Scene Number field. Enter `01` under Shot Number.
    
    
    💡 For the purpose of sorting, use a 2 digit numbering with padding for the Shot Number field. You can also use 3 digit numbering with padding if you desire. It is unlikely that you would require more than 100 shots within a single Scene.
    
    
    
    ![S1.12.png](assets/S1.12.png)
    
7. Back in your timeline, press `CMD` + `G` to create a secondary storyline for the **Shot Data** Template. Using the **Blade** Tool, cut the **Shot Data** Template base on existing edit points. If you have **Snapping** enabled, all of the edit points should be identical across all 3 connected storyline.
    
    ![S1.13.png](assets/S1.13.png)
    
8. In order for **CommandPost** to the process **Shot Data** Template with the connected images, the storyline needs to be reordered. Both of the connected storylines need to be broken apart using `Shift` + `CMD` + `G`. To bring the visibility of the **Shot Data** Template’s Text on screen, you can reduce the opacity of the Images and Custom Solids to your desired value.
    
    ![S1.14.png](assets/S1.14.png)
    
9. Make sure you have entered and selected all the values within each **Shot Data** Template instance. You are required to enter a unique Shot Number `01`, `02`, `03`, `04` and so on for each **Shot Data** Template instance. If you have 19 cuts in your timeline, you should have 19 instances of **Shot Data** Template.
    
    
    💡 At this point, you can enter as much of **Shot Data** information pertaining each shot. Example: Scene Description, Wardrobe Notes and etc.  
    
    But if they are going to be the same for continuing shots, leave them as blank. You can copy & paste them easily later in Notion.
    
    
    
    ![S1.15.png](assets/S1.15.png)
    
10. We are finally done with Part 1! Here comes the fun Part. 🥳
</details>

<details>
<summary>Part 2 - Sending to Notion</summary>

1. [Duplicate](https://www.notion.so/help/duplicate-public-pages) my [Shot Data Template](https://soothsayer.notion.site/1e6a317008e546159ca7015011cdb173?v=a1b16c2a1fa447138268a8f1fe515bd7) into your Notion Workspace. You can rename the template to your desire.
2. Select **Shot Data** from the **CommandPost**’s Toolbox Menu.
3. Paste your [Notion v2 Token](https://vzhd1701.notion.site/Find-Your-Notion-Token-5f57951434c1414d84ac72f88226eede) in the Notion Token field. Make sure both **Automatically Upload Converted FCPXMLs** and **Merge with Existing Database** are Checked.
    
    ![S2.1.png](assets/S2.1.png)
    
    
    💡 Please take note that your Notion v2 Token may expire after some period of time. You would have to obtain it again.
    
    
    
4. From your duplicated Shot Data Template, **Copy Link to View** and paste the URL into the Notion Database URL field.
5. Select your preferred **Export Destination** by pressing on **Change Export Destination**.
    
    ![S2.2.png](assets/S2.2.png)
    
6. Drag & Drop your your Project into **Shot Data’s Toolbox** XML Drop Zone.
    
    ![S3.3.png](assets/S3.3.png)
    
7. Watch as the magic happens!
    
![S2.4.gif](assets/S2.4.gif)  
    
   💡 The upload speed is dependent on your internet connection and Notion’s servers. 
    
8. If you have 19 shots within your Project’s Timeline, you should technically have 19 records automatically created within your Notion’s database. 
9. This is the very essence of **Shot Data** Workflow. Repeat the process for the rest of your Scenes in Final Cut Pro. Your Notion’s database will grow overtime.
</details>

# Advance Usage - Shot Data

<details>
<summary>Using Notion’s Mobile App</summary>

1. [Download](https://www.notion.so/mobile) the Mobile version of Notion.
2. Add [widget](https://www.notion.so/help/mobile-widgets) on your home screen.
    
![S3.1.gif](assets/S3.1.gif)
    
   💡 You could [mount](https://www.manfrotto.com/global/magic-arm-with-bracket-143a/) your iPhone or iPad to your Camera Rig and to your [Director's Monitor Cage](https://woodencamera.com/products/directors-monitor-cage-v3).
    
</details>

<details>
<summary>Setting up database relationships</summary>

1. Make sure you have read and understand Notion’s [documentation on Relations & Rollups](https://www.notion.so/help/relations-and-rollups).
2. You can create separate databases for **Scene Characters**, **Scenes**, **Sets**, **Locations**, **Wardrobe** and so on.
3. Once you have created individual databases for each **Property**.
4. In the property menu, Choose **Relation** from the **Type** menu.
5. You'll be asked to find the database you want to create the relation with. You can use the input at the top to search for this database.
    
    ![S3.2.png](assets/S3.2.png)
    
6. In **Shot Data** Template of each instance, back in Final Cut Pro, you can enter the Exact name of that record from your **Characters** database.
    
    ![S3.3.png](assets/S3.3%201.png)
    
    
    💡 If you have added `Luke` and `Yoda` in your **Characters** database, enter `Luke,Yoda`. It is case-sensitive. And if you have more than 1 item for the field, have to separate them with `,`.
    
    
    
7. Now when you Drag & Drop your your Project into **Shot Data’s Toolbox** XML Drop Zone, **Shot Data** will automatically match and link the record with the associated relation in Notion during the upload.
8. As mention, you can create separate database for **Scene Characters**, **Scenes**, **Sets**, **Locations**, **Wardrobe** and so on. 
    
    
    💡 Set up all relevant and vital databases in Notion before you commence your work in Final Cut Pro with **Shot Data** Template.
    
    
</details>    

<details>
<summary>Updating existing Shot List in Notion’s database</summary>

1. In a scenario where your Images are updated in **Final Cut Pro**, you can batch update your existing Shot List database in Notion using **Ignore Selected Column** feature.
    
    
    💡 In order to batch update your records, couple of conditions have to be met. The **Shot Number** and **Scene Number** have to be matched and identical. And the number of edits have to be identical.
    
    
    
2. Select all the Columns except **Scene Description** and **Image Filename**. The **Scene Description** will always be used as the Image’s Caption within Notion.
    
    ![S3.4.gif](assets/S3.4.gif)
    
3. Now when you Drag & Drop your your Project into **Shot Data’s Toolbox** XML Drop Zone, **Shot Data** will only upload and update the images that are embedded within each record.
4. You can also update other Columns if required.
    
    
    💡 If your entire scene in **Final Cut Pro** is updated with a different set of cuts, the best course of action is to delete that affected range of Scene or Shot records in Notion. And perform a fresh set of upload in **Shot Data**’s Toolbox.
    
    
</details>    

<details>
<summary>Emojis 😀</summary>

1. In Notion, you can customise your pages with [Icons](https://www.notion.so/help/customize-and-style-your-content).
2. The default icon for all the records is. 🎬.
    
    ![S3.5.png](assets/S3.5.png)
    
3. You can click on the **Emoji Picker** button to change to a different Emoji.
    
    
    💡 You can get creative with emojis. You can assign ☀️ sun emoji for day scenes and 🌑 moon emoji for night scenes.
    
    
</details>

<details>
<summary>Saving and Loading Settings</summary>

1. As you get comfortable with **Shot Data** workflow and Notion, you would have multiple Shot List database within Notion for different projects. You might also hold multiple Notion accounts, Personal and Teams.
2. You are able to **Save Settings** for multiple configuration. 
    
    ![S3.6.png](assets/S3.6.png)
    
3. You can recall different configuration by pressing **Load Settings**.
</details>

<details>
<summary>Drag & Drop Final Cut Pro’s Project to Dock Icon</summary>

1. Check CommandPost’s Dock Icon, under **Preferences**, **General**.
    
    ![S3.7.png](assets/S3.7.png)
    
2. CommandPost’s Dock Icon will appear in your Dock.
    
    ![S3.8.png](assets/S3.8.png)
    
3. Check **Enable Dropping Final Cut Pro Project to Dock Icon**.
    
    ![S3.9.png](assets/S3.9.png)
    
4. You can now Drag & Drop Project’s **Shot Data** Sequences into CommandPost’s Dock Icon easily without opening **Shot Data**’s Toolbox.
    
    
    💡 Please make sure you have pre-configured all your settings within **Shot Data**’s Toolbox.
    
    
</details>    

# FAQ

<details>
<summary>Can Shot Data be used with other applications?</summary>

1. Yes. You can uncheck **Automatically Upload Converted FCPXMLs** in **Shot Data**’s Toolbox.
2. All Shot Data files are stored in **Export Destination** folder. Press **Reveal Export Destination** to open the folder.
3. In each sub folders, you will find the `*.csv` file with the accompanying images auto renamed.
4. You can import the `*.csv` to any application that accepts it.
</details>

<details>
<summary>Can Shot Data be used with Airtable?</summary>

Interestingly, I initially experimented Shot Data with Airtable. Airtable offers a superior database system compared to Notion. However, Notion offers greater affordability, superior embeds, note-taking features within each page, comparatively.

If you are an Airtable user and would like to use the Shot Data files in your Airtable’s database, [get in touch with me](https://twitter.com/IAmVigneswaran).
</details>

## Afterthoughts

This workflow would be particularly advantageous if you are the Writer, Director and Editor; or at least collaborating with an Editor in the early development phase. You could pursue through your vision from storyboard, pre-cut to actual principal photography and back to editorial in Final Cut Pro. Be it short-form or feature form, this workflow should be applicable across.

*Last Edited : 28th November 2022*

---

Workflow Created by [Vigneswaran Rajkumar](https://vigneswaranrajkumar.com)

Shot Data’s Toolbox Programming was made possible by [Chris Hocking](https://github.com/latenitefilms)

Notion’s [Import Tool](https://github.com/vzhd1701/csv2notion) by [Vladilen Zhdanov](https://github.com/vzhd1701)

Initial Motion Template rigging was assisted by [Peter Wiggins](https://twitter.com/peterwiggins)

Empire Strikes Back storyboard illustrations by [Joe Johnston](https://www.imdb.com/name/nm0002653/) and [Nilo Rodis-Jamero](https://www.imdb.com/name/nm0734890/)
