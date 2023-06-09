# cp.i18n.languageID

As per [Apple's documentation](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW6),
a `language ID` is a code which identifies either a language used across multiple regions,
a dialect from a specific region, or a script used in multiple regions. See the [parse](#parse) function for details.

When you parse a code with the [forCode](#forCode) function, it will result in a table that contains a
reference to the approprate `cp.i18n.language` table, and up to one of either the matching `cp.i18n.region`
or `cp.i18n.script` tables. These contain the full details for each language/regin/script, as appropriate.

You can also convert the resulting table back to the code via `tostring`, or the [code](#code) method.

## API Overview
* Functions - API calls offered directly by the extension
 * [is](#is)
 * [parse](#parse)
* Constructors - API calls which return an object, typically one that offers API methods
 * [forCode](#forCode)
 * [forLocaleID](#forLocaleID)
 * [forParts](#forParts)
* Fields - Variables which can only be accessed from an object returned by a constructor
 * [code](#code)
 * [language](#language)
 * [region](#region)
 * [script](#script)
* Methods - API calls which can only be made on an object returned by a constructor
 * [toLocaleID](#toLocaleID)

## API Documentation

### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.is(thing) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `thing` is a languageID instance.                                                                     |
| **Parameters**                              | <ul><li>thing     - the thing to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if the `thing` is a `languageID`, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [parse](#parse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.parse(code) -> string, string, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Parses a `language ID`. into three possible string components                                                                     |
| **Parameters**                              | <ul><li>code - The `language ID` code. Eg. "en-AU".</li></ul> |
| **Returns**                                 | <ul><li>language - The two-character lower-case alpha language code.</li><li>script - the four-character mixed-case alpha script code.</li><li>region - The two-character upper-case alpha region code.</li></ul>          |
| **Notes**                                   | <ul><li>Parses a `language ID` into three possible string components:</li><li>  ** The ISO 693-1 language code</li><li>  ** The ISO 15924 script code</li><li>  ** The ISO 3166-1 region code</li><li>This is one of the following patterns:</li><li>  ** `[language]` - eg. `"en"`, or `"fr"`. The covers the language across all languages and scripts.</li><li>  ** `[language]-[script]` - eg. "az-Arab" for Azerbaijani in Arabic script, "az-Latn" for Azerbaijani in Latin script.</li><li>  ** `[language]-[region]` - eg. "en-AU" for Australian English, "fr-CA" for Canadian French, etc.</li><li>It will then return the matched component in three return values: language, script, region.</li><li>If a script is specified, the `region` will be `nil`. Eg.:</li><li></li><li>```lua</li><li>local lang, scrpt, rgn, scrpt = languageID.parse("en-AU") -- results in "en", nil, "AU"</li><li>```</li></ul>                |

---
### Constructors


### [forCode](#forCode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.forCode(code) -> cp.i18n.languageID, string`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates, or retrieves from the cache, a `languageID` instance for the specified `code`.                                                                     |
| **Parameters**                              | <ul><li>code      - The language ID code.</li></ul> |
| **Returns**                                 | <ul><li>The matching `languageID`, or `nil` if the language ID couldn't be found.</li><li>The error message, or `nil` if there was no problem.</li></ul>          |
| **Notes**                                   | <ul><li>If the code can't be parsed, or if the actual language/region/script codes don't exist, `nil` is returned.</li></ul>                |

---

### [forLocaleID](#forLocaleID)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.forLocaleID(code[, prioritiseScript]) -> cp.i18n.languageID, string`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates, or retrieves from the cache, a `languageID` instance for the specified `cp.i18n.localeID`.                                                                     |
| **Parameters**                              | <ul><li>locale            - The `localeID` to convert</li><li>prioritiseScript  - If set to `true` and the locale has both a region and script then the script code will be used.</li></ul> |
| **Returns**                                 | <ul><li>The `languageID` for the `locale`, or `nil`</li><li>The error message if there was a problem.</li></ul>          |
| **Notes**                                   | <ul><li>Language IDs can only have either a script or a region, so if the locale has both, this will priortise the `region` by default. You can set `prioritiseScript` to `true` to use script instead.</li><li>If only one or the other is set in the locale, `prioritiseScript` is ignored.</li></ul>                |

---

### [forParts](#forParts)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.forParts(languageCode[, scriptCode[, regionCode]]) -> cp.i18n.languageID`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns a `languageID` with the specified parts.                                                                     |
| **Parameters**                              | <ul><li>languageCode - Language code</li><li>scriptCode - Optional Script code</li><li>regionCode - Optional Region Code</li></ul> |
| **Returns**                                 | <ul><li>A `cp.i18n.languageID` object.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
### Fields


### [code](#code)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.code <string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The language ID code.                                                                     |

---

### [language](#language)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.language <cp.i18n.language>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `language` details.                                                                     |

---

### [region](#region)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.region <cp.i18n.region>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `region` details, if appropriate. Will be `nil` if no region was specified in the `code`.                                                                     |

---

### [script](#script)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID.script <cp.i18n.script>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `script` details, if appropriate. Will be `nil` if no script was specified in the `code`.                                                                     |

---
### Methods


### [toLocaleID](#toLocaleID)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.languageID:toLocaleID() -> cp.i18n.localeID`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns the `cp.i18n.localeID` equivalent for this `languageID`.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The matching `localeID`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
