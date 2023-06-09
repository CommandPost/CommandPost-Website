# plugins.core.monogram.manager

Monogram Manager Plugin.

## API Overview
* Constants - Useful values which cannot be changed
 * [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)
* Variables - Configurable values
 * [favourites](#favourites)
 * [lastPort](#lastPort)
 * [performAction](#performAction)
 * [plugins](#plugins)
* Functions - API calls offered directly by the extension
 * [changeContext](#changeContext)
 * [launchCreatorBundle](#launchCreatorBundle)
 * [registerAction](#registerAction)
 * [registerPlugin](#registerPlugin)
 * [setEnabled](#setEnabled)
 * [sign](#sign)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [automaticProfileSwitching](#automaticProfileSwitching)
 * [enabled](#enabled)

## API Documentation

### Constants

| [NUMBER_OF_FAVOURITES](#NUMBER_OF_FAVOURITES)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.NUMBER_OF_FAVOURITES -> number`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Number of favourites                                                                     |

### Variables

| [favourites](#favourites)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.favourites <cp.prop: table>`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A `cp.prop` that that contains all the Monogram Favourites.                                                                     |

| [lastPort](#lastPort)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.lastPort -> number`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | The port that Monogram Creator used to connect to CommandPost.                                                                     |

| [performAction](#performAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.performAction -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of actions that are triggered by the callback function.                                                                     |

| [plugins](#plugins)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.plugins -> table`                                                                    |
| **Type**                                    | Variable                                                                     |
| **Description**                             | A table of Monogram plugins to install.                                                                     |

### Functions

| [changeContext](#changeContext)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.changeContext(context) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Switches the Monogram Profile.                                                                     |
| **Parameters**                              | <ul><li>context - The name of the context you want to switch to.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [launchCreatorBundle](#launchCreatorBundle)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.launchCreatorBundle() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Launch the Monogram Creator.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [registerAction](#registerAction)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.registerAction(name, fn) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Monogram Action.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the plugin.</li><li>fn - The function to trigger.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [registerPlugin](#registerPlugin)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.registerPlugin(name, path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a new Monogram plugin.                                                                     |
| **Parameters**                              | <ul><li>name - The name of the plugin.</li><li>path - The path to the folder containing the plugin.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [setEnabled](#setEnabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.setEnabled(enabled) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Enables or disables Monogram Support.                                                                     |
| **Parameters**                              | <ul><li>enabled - A boolean</li></ul> |
| **Returns**                                 | <ul><li>`true` if Monogram support is enabled, otherwise `false`</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sign](#sign)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.sign() -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Signs all the Monogram Integrations.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

### Fields

| [automaticProfileSwitching](#automaticProfileSwitching)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.automaticProfileSwitching <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Automatic Profile Switching                                                                     |

| [enabled](#enabled)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.core.monogram.manager.enabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Enable or disable Monogram Support.                                                                     |

