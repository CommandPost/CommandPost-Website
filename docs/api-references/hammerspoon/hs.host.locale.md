# hs.host.locale

Retrieve information about the user's Language and Region settings.

Locales encapsulate information about linguistic, cultural, and technological conventions and standards. Examples of information encapsulated by a locale include the symbol used for the decimal separator in numbers and the way dates are formatted. Locales are typically used to provide, format, and interpret information about and according to the user’s customs and preferences.

---

## API Overview
**Functions** - _API calls offered directly by the extension_
 * [availableLocales](#availablelocales)
 * [current](#current)
 * [details](#details)
 * [localizedString](#localizedstring)
 * [preferredLanguages](#preferredlanguages)
 * [registerCallback](#registercallback)
 * [unregisterCallback](#unregistercallback)


---

## API Documentation

#### Functions


### [availableLocales](#availablelocales)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.availableLocales() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an array table containing the identifiers for the locales available on the system.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an array table of strings specifying the locale identifiers recognized by this system.</li></ul>          |
| **Notes**                                   | <ul><li>these values can be used with [hs.host.locale.details](#details) to get details for a specific locale.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/libhost_locale.m line 172](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/libhost_locale.m#L172) |

---


### [current](#current)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.current() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an string specifying the user's currently selected locale identifier.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a string specifying the identifier of the user's currently selected locale.</li></ul>          |
| **Notes**                                   | <ul><li>this value can be used with [hs.host.locale.details](#details) to get details for the returned locale.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/libhost_locale.m line 219](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/libhost_locale.m#L219) |

---


### [details](#details)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.details([identifier]) -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a table containing information about the current or specified locale.                                                                     |
| **Parameters**                              | <ul><li>`identifier` - an optional string, specifying the locale to display information about.  If you do not specify an identifier, information about the user's currently selected locale is returned.</li></ul> |
| **Returns**                                 | <ul><li>a table containing one or more of the following key-value pairs:</li><li>  `alternateQuotationBeginDelimiterKey` - A string containing the alternating begin quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate.</li><li>  `alternateQuotationEndDelimiterKey`   - A string containing the alternate end quotation symbol associated with the locale. In some locales, when quotations are nested, the quotation characters alternate.</li><li>  `calendar`                            - A table containing key-value pairs describing for calendar associated with the locale. The table will contain one or more of the following pairs:</li><li>    `AMSymbol`                          - The AM symbol for time in the locale's calendar.</li><li>    `calendarIdentifier`                - A string representing the calendar identity.</li><li>    `eraSymbols`                        - An array table of strings specifying the names of the eras as recognized in the locale's calendar.</li><li>    `firstWeekday`                      - The index in `weekdaySymbols` of the first weekday in the locale's calendar.</li><li>    `longEraSymbols`                    - An array table of strings specifying long names of the eras as recognized in the locale's calendar.</li><li>    `minimumDaysInFirstWeek`            - The minimum number of days, an integer value, in the first week in the locale's calendar.</li><li>    `monthSymbols`                      - An array table of strings for the months of the year in the locale's calendar.</li><li>    `PMSymbol`                          - The PM symbol for time in the locale's calendar.</li><li>    `quarterSymbols`                    - An array table of strings for the quarters of the year in the locale's calendar.</li><li>    `shortMonthSymbols`                 - An array table of short strings for the months of the year in the locale's calendar.</li><li>    `shortQuarterSymbols`               - An array table of short strings for the quarters of the year in the locale's calendar.</li><li>    `shortStandaloneMonthSymbols`       - An array table of short standalone strings for the months of the year in the locale's calendar.</li><li>    `shortStandaloneQuarterSymbols`     - An array table of short standalone strings for the quarters of the year in the locale's calendar.</li><li>    `shortStandaloneWeekdaySymbols`     - An array table of short standalone strings for the days of the week in the locale's calendar.</li><li>    `shortWeekdaySymbols`               - An array table of short strings for the days of the week in the locale's calendar.</li><li>    `standaloneMonthSymbols`            - An array table of standalone strings for the months of the year in the locale's calendar.</li><li>    `standaloneQuarterSymbols`          - An array table of standalone strings for the quarters of the year in the locale's calendar.</li><li>    `standaloneWeekdaySymbols`          - An array table of standalone strings for the days of the week in the locale's calendar.</li><li>    `veryShortMonthSymbols`             - An array table of very short strings for the months of the year in the locale's calendar.</li><li>    `veryShortStandaloneMonthSymbols`   - An array table of very short standalone strings for the months of the year in the locale's calendar.</li><li>    `veryShortStandaloneWeekdaySymbols` - An array table of very short standalone strings for the days of the week in the locale's calendar.</li><li>    `veryShortWeekdaySymbols`           - An array table of very short strings for the days of the week in the locale's calendar.</li><li>    `weekdaySymbols`                    - An array table of strings for the days of the week in the locale's calendar.</li><li>  `collationIdentifier`                 - A string containing the collation associated with the locale.</li><li>  `collatorIdentifier`                  - A string containing the collation identifier for the locale.</li><li>  `countryCode`                         - A string containing the locale country code.</li><li>  `currencyCode`                        - A string containing the currency code associated with the locale.</li><li>  `currencySymbol`                      - A string containing the currency symbol associated with the locale.</li><li>  `decimalSeparator`                    - A string containing the decimal separator associated with the locale.</li><li>  `exemplarCharacterSet`                - An array table of strings which make up the exemplar character set for the locale.</li><li>  `groupingSeparator`                   - A string containing the numeric grouping separator associated with the locale.</li><li>  `identifier`                          - A string containing the locale identifier.</li><li>  `languageCode`                        - A string containing the locale language code.</li><li>  `measurementSystem`                   - A string containing the measurement system associated with the locale.</li><li>  `quotationBeginDelimiterKey`          - A string containing the begin quotation symbol associated with the locale.</li><li>  `quotationEndDelimiterKey`            - A string containing the end quotation symbol associated with the locale.</li><li>  `scriptCode`                          - A string containing the locale script code.</li><li>  `temperatureUnit`                     - A string containing the preferred measurement system for temperature.</li><li>  `timeFormatIs24Hour`                  - A boolean specifying whether time is expressed in a 24 hour format (true) or 12 hour format (false).</li><li>  `usesMetricSystem`                    - A boolean specifying whether or not the locale uses the metric system.</li><li>  `variantCode`                         - A string containing the locale variant code.</li></ul>          |
| **Notes**                                   | <ul><li>If you specify a locale identifier as an argument, it should be based on one of the strings returned by [hs.host.locale.availableLocales](#availableLocales). Use of an arbitrary string may produce unreliable or inconsistent results.</li><li></li><li>Apple does not provide a documented method for retrieving the users preferences with respect to `temperatureUnit` or `timeFormatIs24Hour`. The methods used to determine these values are based on code from the following sources:</li><li>  `temperatureUnit`    - http://stackoverflow.com/a/41263725</li><li>  `timeFormatIs24Hour` - http://stackoverflow.com/a/1972487</li><li>If you are able to identify additional locale or regional settings that are not provided by this function and have a source which describes a reliable method to retrieve this information, please submit an issue at https://github.com/Hammerspoon/hammerspoon with the details.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/libhost_locale.m line 238](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/libhost_locale.m#L238) |

---


### [localizedString](#localizedstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.localizedString(localeCode[, baseLocaleCode]) -> string | nil, string | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the localized string for a specific language code.                                                                     |
| **Parameters**                              | <ul><li>`localeCode` - The locale code for the locale you want to return the localized string of.</li><li>`baseLocaleCode` - An optional string, specifying the locale to use for the string. If you do not specify a `baseLocaleCode`, the user's currently selected locale is used.</li></ul> |
| **Returns**                                 | <ul><li>A string containing the localized string or `nil ` if either the `localeCode` or `baseLocaleCode` is invalid. For example, if the `localeCode` is "de_CH", this will return "German".</li><li>A string containing the localized string including the dialect or `nil ` if either the `localeCode` or `baseLocaleCode` is invalid. For example, if the `localeCode` is "de_CH", this will return "German (Switzerland)".</li></ul>          |
| **Notes**                                   | <ul><li>The `localeCode` and optional `baseLocaleCode` must be one of the strings returned by [hs.host.locale.availableLocales](#availableLocales).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/libhost_locale.m line 317](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/libhost_locale.m#L317) |

---


### [preferredLanguages](#preferredlanguages)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.preferredLanguages() -> table`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns the user's language preference order as an array of strings.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>an array table of strings specifying the user's preferred languages as string identifiers.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/libhost_locale.m line 197](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/libhost_locale.m#L197) |

---


### [registerCallback](#registercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.registerCallback(function) -> uuidString`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Registers a function to be invoked when anything in the user's locale settings change                                                                     |
| **Parameters**                              | <ul><li>`fn` - the function to be invoked when a setting changes</li></ul> |
| **Returns**                                 | <ul><li>a uuid string which can be used to unregister a callback function when you no longer require notification of changes</li></ul>          |
| **Notes**                                   | <ul><li>The callback function will not receive any arguments and should return none.  You can retrieve the new locale settings with [hs.host.locale.localeInformation](#localeInformation) and check its keys to determine if the change is of interest.</li><li></li><li>Any change made within the Language and Region settings panel will trigger this callback, even changes which are not reflected in the locale information provided by [hs.host.locale.localeInformation](#localeInformation).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/host_locale.lua line 28](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/host_locale.lua#L28) |

---


### [unregisterCallback](#unregistercallback)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.host.locale.unregisterCallback(uuidString) -> boolean`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Unregister a callback function when you no longer care about changes to the user's locale                                                                     |
| **Parameters**                              | <ul><li>`uuidString` - the uuidString returned by [hs.host.locale.registerCallback](#registerCallback) when you registered the callback function</li></ul> |
| **Returns**                                 | <ul><li>true if the callback was successfully unregistered or false if it was not, usually because the uuidString does not correspond to a current callback function.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/host/locale/host_locale.lua line 52](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/host/locale/host_locale.lua#L52) |

---

