# hs.doc.markdown

Markdown to HTML and plaintext conversion support used by hs.doc

This module provides GitHub-Flavored-Markdown conversion support used by hs.doc.  This module is a Lua wrapper to the C code portion of the Ruby gem `github-markdown`, available at https://rubygems.org/gems/github-markdown/versions/0.6.9.

The Ruby gem `github-markdown` was chosen as the code base for this module because it is the tool used to generate the official Hammerspoon Dash docset.

The Lua wrapper portion is licensed under the MIT license by the Hammerspoon development team.  The C code portion of the Ruby gem is licensed under the MIT license by GitHub, Inc.

## API Overview
* Functions - API calls offered directly by the extension
 * [convert](#convert)

## API Documentation

### Functions


### [convert](#convert)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.doc.markdown.convert(markdown, [type]) -> output`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Converts markdown encoded text to html or plaintext.                                                                     |
| **Parameters**                              | <ul><li>markdown - a string containing the input text encoded using markdown tags</li><li>type     - an optional string specifying the conversion options and output type.  Defaults to "gfm".  The currently recognized types are:
  "markdown"  - specifies that the output should be HTML with the standard GitHub/Markdown extensions enabled.
  "gfm"       - specifies that the output should be HTML with additional GitHub extensions enabled.
  "plaintext" - specifies that the output should plain text with the standard GitHub/Markdown extensions enabled.</li></ul> |
| **Returns**                                 | <ul><li>an HTML or plaintext representation of the markdown encoded text provided.</li></ul>          |
| **Notes**                                   | <ul><li>The standard GitHub/Markdown extensions enabled for all conversions are:</li><li>  NO_INTRA_EMPHASIS -  disallow emphasis inside of words</li><li>  LAX_SPACING       - supports spacing like in Markdown 1.0.0 (i.e. do not require an empty line between two different blocks in a paragraph)</li><li>  STRIKETHROUGH     - support strikethrough with double tildes (~)</li><li>  TABLES            - support Markdown tables</li><li>  FENCED_CODE       - supports fenced code blocks surround by three back-ticks (`) or three tildes (~)</li><li>  AUTOLINK          - HTTP URL's are treated as links, even if they aren't marked as such with Markdown tags</li><li></li><li>The "gfm" type also includes the following extensions:</li><li> HARD_WRAP     - line breaks are replaced with <br> entities</li><li> SPACE_HEADERS - require a space between the `#` and the name of a header (prevents collisions with the Issues filter)</li></ul>                |

---
