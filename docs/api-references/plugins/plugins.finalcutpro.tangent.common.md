# plugins.finalcutpro.tangent.common

Common Final Cut Pro functions for Tangent

## API Overview
* Functions - API calls offered directly by the extension
 * [buttonParameter](#buttonParameter)
 * [checkboxParameter](#checkboxParameter)
 * [checkboxParameterByIndex](#checkboxParameterByIndex)
 * [checkboxSliderParameter](#checkboxSliderParameter)
 * [commandParameter](#commandParameter)
 * [doShowParameter](#doShowParameter)
 * [dynamicPopupSliderParameter](#dynamicPopupSliderParameter)
 * [functionParameter](#functionParameter)
 * [menuParameter](#menuParameter)
 * [popupParameter](#popupParameter)
 * [popupParameters](#popupParameters)
 * [popupSliderParameter](#popupSliderParameter)
 * [radioButtonParameter](#radioButtonParameter)
 * [shortcutParameter](#shortcutParameter)
 * [sliderParameter](#sliderParameter)
 * [volumeSliderParameter](#volumeSliderParameter)
 * [xyParameter](#xyParameter)

## API Documentation

### Functions

| [buttonParameter](#buttonParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.buttonParameter(group, param, id, label) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Button Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [checkboxParameter](#checkboxParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.checkboxParameter(group, param, id, label) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Checkbox Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [checkboxParameterByIndex](#checkboxParameterByIndex)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.checkboxParameterByIndex(group, section, nextSection, id, label, index) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new AXCheckBox object for the Tangent.                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>section - The section as it appears in the FCPX Inspector.</li><li>nextSection - The next section as it appears in the FCPX Inspector.</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>index - The index of the checkbox in the section.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [checkboxSliderParameter](#checkboxSliderParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.checkboxSliderParameter(group, id, label, options, resetIndex) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Popup Slider parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>options - A table of options. The key for each option should be a number ID (in the order it appears in the UI), and the value should be another table with keys for `flexoID` and `i18n` values.</li><li>resetIndex - An index of which item to use when "reset" is triggered.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [commandParameter](#commandParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.commandParameter(group, id, commandID) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Command Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>id - The Tangent ID.</li><li>commandID - The command ID.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [doShowParameter](#doShowParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.doShowParameter(group, param, id, label) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new `DoShow` Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [dynamicPopupSliderParameter](#dynamicPopupSliderParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.dynamicPopupSliderParameter(group, param, id, label, defaultValue) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Popup Slider parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>defaultValue - The default value to use when the reset button is pressed.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [functionParameter](#functionParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.functionParameter(group, id, label, fn) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Function Parameter for the Tangent.                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>path - The list of menu items you'd like to activate as a table.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [menuParameter](#menuParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.menuParameter(group, id, label, path) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Final Cut Pro Menu Parameter for the Tangent.                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>path - The list of menu items you'd like to activate as a table.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [popupParameter](#popupParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.popupParameter(group, param, id, value, label) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Popup Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter.</li><li>id - The Tangent ID.</li><li>value - The value to select as a string.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [popupParameters](#popupParameters)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.popupParameters(group, param, id, options) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Popup Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>options - A table of options. The key for each option should be a number ID (in the order it appears in the UI), and the value should be another table with keys for `flexoID` and `i18n` values.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [popupSliderParameter](#popupSliderParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.popupSliderParameter(group, param, id, label, options, resetIndex) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Popup Slider parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>options - A table of options. The key for each option should be a number ID (in the order it appears in the UI), and the value should be another table with keys for `flexoID` and `i18n` values.</li><li>resetIndex - An index of which item to use when "reset" is triggered.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [radioButtonParameter](#radioButtonParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.radioButtonParameter(group, param, id, label) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Checkbox Parameter for the Tangent                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>param - The Parameter</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [shortcutParameter](#shortcutParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.shortcutParameter(group, id, label, shortcutID) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Final Cut Pro Shortcut Parameter for the Tangent.                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group.</li><li>id - The Tangent ID.</li><li>label - The label to be used by the Tangent. This can either be an i18n ID or a plain string.</li><li>shortcutID - The shortcut ID.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [sliderParameter](#sliderParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.sliderParameter(group, param, id, minValue, maxValue, stepSize, default, label, optionalParamA, optionalParamB) -> number, parameter`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Slider Parameter                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group</li><li>param - The Parameter</li><li>id - The Tangent ID</li><li>minValue - The minimum value</li><li>maxValue - The maximum value</li><li>stepSize - The step size</li><li>default - The default value</li><li>label - An optional label as an i18n ID or plain string. If no label is supplied the `param` label will be used.</li><li>optionalParamA - An optional parameter. Useful if you need to link parameters.</li><li>optionalParamB - An optional parameter. Useful if you need to link parameters.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li><li>The parameters value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [volumeSliderParameter](#volumeSliderParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.volumeSliderParameter(group, param, id, minValue, maxValue, stepSize, default, label) -> number, parameter`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new Volume Slider Parameter                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group</li><li>param - The Parameter</li><li>id - The Tangent ID</li><li>minValue - The minimum value</li><li>maxValue - The maximum value</li><li>stepSize - The step size</li><li>default - The default value</li><li>label - An optional label as an i18n ID or plain string. If no label is supplied the `param` label will be used.</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li><li>The parameters value</li></ul>          |
| **Notes**                                   | <ul></ul>                |

| [xyParameter](#xyParameter)         |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.tangent.common.xyParameter(group, param, id, minValue, maxValue, stepSize) -> number`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets up a new XY Parameter                                                                     |
| **Parameters**                              | <ul><li>group - The Tangent Group</li><li>param - The Parameter</li><li>id - The Tangent ID</li><li>minValue - The minimum value</li><li>maxValue - The maximum value</li><li>stepSize - The step size</li></ul> |
| **Returns**                                 | <ul><li>An updated ID</li><li>The `x` parameter value</li><li>The `y` parameter value</li><li>The xy binding</li></ul>          |
| **Notes**                                   | <ul></ul>                |

