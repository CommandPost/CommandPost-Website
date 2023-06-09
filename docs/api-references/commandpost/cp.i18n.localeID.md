# cp.i18n.localeID

As per [Apple's documentation](https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html#//apple_ref/doc/uid/10000171i-CH15-SW6),
a `locale ID` is a code which identifies either a language used across multiple regions,
a dialect from a specific region, a script used in multiple regions, or a combination of all three.
See the [parse](#parse) function for details.

When you parse a code with the [forCode](#forCode) function, it will result in a table that contains a
reference to the approprate `cp.i18n.language` table, and any specified `cp.i18n.region`
or `cp.i18n.script` tables. These contain the full details for each language/regin/script, as appropriate.

You can also convert the resulting table back to the code via `tostring`, or the [code](#code) method.

## API Overview
### **Functions** - _API calls offered directly by the extension_
 * [is](#is)
 * [parse](#parse)

### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [forCode](#forcode)

### **Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [code](#code)
 * [language](#language)
 * [localName](#localname)
 * [name](#name)
 * [region](#region)
 * [script](#script)

### **Methods** - _API calls which can only be made on an object returned by a constructor_
 * [matches](#matches)


## API Documentation

### Functions


### [is](#is)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.is(other) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Checks if the `other` is a `localeID`.                                                                     |
| **Parameters**                              | <ul><li>other     - the other value to check.</li></ul> |
| **Returns**                                 | <ul><li>`true` if it is a `cp.i18n.locale`, otherwise `false`.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [parse](#parse)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.parse(code) -> string, string, string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This function will first attempt to determine the language, script and region by using `hs.host.locale.details()`. If that fails, it will use Lua patterns as described below.                                                                     |
| **Parameters**                              | <ul><li>code      - The `locale ID` code. Eg. "en_AU".</li></ul> |
| **Returns**                                 | <ul><li>language  - The two-character lower-case alpha language code.</li><li>region    - The two-character upper-case alpha region code.</li><li>script    - the four-character mixed-case alpha script code.</li></ul>          |
| **Notes**                                   | <ul><li>This function will first attempt to determine the language, script and region by using `hs.host.locale.details()`. If that fails, it will use Lua patterns as described below.</li><li> Parses a `language ID` into three possible string components:</li><li>  ** The ISO 693-1 language code</li><li>  ** The ISO 15924 script code</li><li>  ** The ISO 3166-1 region code</li><li>This is one of the following patterns:</li><li>  ** `[language]` - eg. `"en"`, or `"fr"`. This covers the language across all languages and scripts. We also allow the full name (eg. "English" or "French") since this seems common in Apple's I18N management.</li><li>  ** `[language]_[region]` - eg. "en_AU" for Australian English, "fr_CA" for Canadian French, etc.</li><li>  ** `[language]-[script]` - eg. "az-Arab" for Azerbaijani in Arabic script, "az-Latn" for Azerbaijani in Latin script.</li><li>  ** `[language]-[script]_[region]` - eg. "en-Latin-AU"</li><li>It will then return the matched component in three return values: language, script, region.</li><li>If a `region` is specified, the `script` will be `nil`. Eg.:</li><li></li><li>```lua</li><li>local lang, scrpt, rgn = localeID.parse("en_AU") -- results in "en", nil, "AU"</li><li>```</li></ul>                |

---
### Constructors


### [forCode](#forcode)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.forCode(code) -> cp.i18n.localeID or nil`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates, or retrieves from the cache, a `localeID` instance for the specified `code`.                                                                     |
| **Parameters**                              | <ul><li>code      - The language ID code.</li></ul> |
| **Returns**                                 | <ul><li>The matching `langaugeID`, or `nil`.</li></ul>          |
| **Notes**                                   | <ul><li>If the code can't be parsed, or if the actual language/region/script codes don't exist, `nil` is returned.</li></ul>                |

---
### Fields


### [code](#code)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.code <string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The locale ID code.                                                                     |

---

### [language](#language)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.language <cp.i18n.language>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `language` details.                                                                     |

---

### [localName](#localname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.localName <string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The local name in it's own language.                                                                     |

---

### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.name <string>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The locale name in English.                                                                     |

---

### [region](#region)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.region <cp.i18n.region>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `region` details, if appropriate. Will be `nil` if no region was specified in the `code`.                                                                     |

---

### [script](#script)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID.script <cp.i18n.script>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | The matching `script` details, if appropriate. Will be `nil` if no script was specified in the `code`.                                                                     |

---
### Methods


### [matches](#matches)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.i18n.localeID:matches(otherLocale) -> number`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | This compares the `otherLocale` to this locale and returns a number indicating the 'strength' of the match.                                                                     |
| **Parameters**                              | <ul><li>otherLocale       - The other locale to compare to.</li></ul> |
| **Returns**                                 | <ul><li>A number from `0` to `3` indicating the match strength.</li></ul>          |
| **Notes**                                   | <ul><li>It will be a value between `0` and `3`. The `script` and `region` in any locale are optional, and if they are not provided, they are considered "open" and will match with another locale which has the script or region defined. However, it is considered to be a weaker match.</li><li>For example:</li><li></li><li>```lua</li><li>local l = localeID.forCode</li><li>local en, en_AU, en_Latn, en_Latn_AU, en_NZ, de = l("en"), l("en_AU"), l("en-Latn"), l("en-Latn_AU"), l("en_NZ"), l("de")</li><li></li><li>en:matches(de)              == 0    -- no match - different language</li><li></li><li>en:matches(en)              == 3    -- language, script, and region match exactly</li><li>en:matches(en_AU)           == 2.5  -- language and script match, region half-match with one side "open".</li><li>en:matches(en_Latn)         == 2.5  -- language and region match, script half-match with one side "open".</li><li>en:matches(en_Latn_AU)      == 2    -- language matches, two half-matches for script and region.</li><li></li><li>en_AU:matches(en_AU)        == 3    -- exact match</li><li>en_AU:matches(en)           == 2.5  -- language and script match, region half-match with a `nil` on one side.</li><li>en_AU:matches(en_NZ)        == 2    -- language and script match, but no match between specific regions.</li><li>en_AU:matches(en_Latn_AU)   == 2.5  -- language and region match exactly, and the optional `script` value is different.</li><li>```</li><li></li><li>The higher the match value, the closer they are to matching. If selecting a from multiple locales which match you will generally want the highest-ranking match.</li></ul>                |

---
