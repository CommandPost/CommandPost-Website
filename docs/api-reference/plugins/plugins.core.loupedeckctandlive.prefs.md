# [docs](index.md) » plugins.core.loupedeckctandlive.prefs
---

Preferences Panels for Loupedeck CT, Loupedeck Live, Loupedeck Live-S and Razer Stream Controller.

## API Overview
* Variables - Configurable values
 * [defaultIconPath](#defaultIconPath)
 * [supportedExtensions](#supportedExtensions)
* Functions - API calls offered directly by the extension
 * [buildIconFromLabel](#buildIconFromLabel)
 * [processEncodedIcon](#processEncodedIcon)
 * [updateUI](#updateUI)
* Constructors - API calls which return an object, typically one that offers API methods
 * [new](#new)
* Methods - API calls which can only be made on an object returned by a constructor
 * [generateContent](#generateContent)
 * [generateKnobImages](#generateKnobImages)
 * [panelCallback](#panelCallback)
 * [refreshDevice](#refreshDevice)
 * [renderPanel](#renderPanel)
 * [setItem](#setItem)

## API Documentation

### Variables

| [defaultIconPath](#defaultIconPath)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs.defaultIconPath -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Default Path where built-in icons are stored                                                                     |

| [supportedExtensions](#supportedExtensions)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs.supportedExtensions -> string`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | Table of supported extensions for Icons.                                                                     |

### Functions

| [buildIconFromLabel](#buildIconFromLabel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:buildIconFromLabel(params) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Creates a new icon image from a string.                                                                     |
| **Parameters**                              | <ul><li>params - A table of parameters.</li></ul> |
| **Returns**                                 | <ul><li>A new encoded icon as URL string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [processEncodedIcon](#processEncodedIcon)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:processEncodedIcon(icon, controlType) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Processes an encoded icon.                                                                     |
| **Parameters**                              | <ul><li>icon - The encoded icon as URL string or a hs.image object.</li><li>controlType - The control type as string.</li></ul> |
| **Returns**                                 | <ul><li>A new encoded icon as URL string.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [updateUI](#updateUI)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:updateUI([params]) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Update the Preferences Panel UI.                                                                     |
| **Parameters**                              | <ul><li>params - A optional table of parameters</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Constructors

| [new](#new)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs.new() -> Loupedeck`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new Loupedeck Preferences panel.                                                                     |
| **Parameters**                              | <ul><li>deviceType - The device type defined in `hs.loupedeck.deviceTypes`</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>The deviceType should be either `hs.loupedeck.deviceTypes.LIVE`</li><li>   or `hs.loupedeck.deviceTypes.CT`.</li></ul>                |

### Methods

| [generateContent](#generateContent)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:generateContent() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates the Preference Panel HTML Content.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>HTML content as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [generateKnobImages](#generateKnobImages)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:generateKnobImages(app, bank, id) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates a combined image for all the knobs on a single side. Which side is generated is determined by the knob id.                                                                     |
| **Parameters**                              | <ul><li>app - The application bundle ID as a string.</li><li>bank - The bank as a string.</li><li>id - The knob ID as a string.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [panelCallback](#panelCallback)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:panelCallback(id, params) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | JavaScript Callback for the Preferences Panel                                                                     |
| **Parameters**                              | <ul><li>id - ID as string</li><li>params - Table of paramaters</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [refreshDevice](#refreshDevice)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:refreshDevice() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Refreshes the currently selected Loupedeck Device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [renderPanel](#renderPanel)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:renderPanel(context) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Generates the Preference Panel HTML Content.                                                                     |
| **Parameters**                              | <ul><li>context - Table of data that you want to share with the renderer</li></ul> |
| **Returns**                                 | <ul><li>HTML content as string</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setItem](#setItem)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.loupedeckctandlive.prefs:setItem(app, bank, controlType, id, valueA, valueB) -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Update the Loupedeck CT layout file.                                                                     |
| **Parameters**                              | <ul><li>app - The application bundle ID as a string</li><li>bank - The bank ID as a string</li><li>controlType - The control type as a string</li><li>id - The ID of the item as a string</li><li>valueA - The value of the item as a string</li><li>valueB - An optional value</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

