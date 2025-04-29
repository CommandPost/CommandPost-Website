# hs.image

A module for capturing and manipulating image objects from other modules for use with hs.drawing.


---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [additionalImageNames](#additionalimagenames)
 * [systemImageNames](#systemimagenames)

**Functions** - _API calls offered directly by the extension_
 * [getExifFromPath](#getexiffrompath)

**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [iconForFile](#iconforfile)
 * [iconForFileType](#iconforfiletype)
 * [imageFromAppBundle](#imagefromappbundle)
 * [imageFromASCII](#imagefromascii)
 * [imageFromMediaFile](#imagefrommediafile)
 * [imageFromName](#imagefromname)
 * [imageFromPath](#imagefrompath)
 * [imageFromURL](#imagefromurl)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [bitmapRepresentation](#bitmaprepresentation)
 * [colorAt](#colorat)
 * [copy](#copy)
 * [croppedCopy](#croppedcopy)
 * [encodeAsURLString](#encodeasurlstring)
 * [getLoupedeckArray](#getloupedeckarray)
 * [name](#name)
 * [saveToFile](#savetofile)
 * [setName](#setname)
 * [setSize](#setsize)
 * [size](#size)
 * [template](#template)
 * [toASCII](#toascii)


---

## API Documentation

#### Constants


### [additionalImageNames](#additionalimagenames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.additionalImageNames[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table of arrays containing the names of additional internal system images which may also be available for use with `hs.drawing.image` and [hs.image.imageFromName](#imageFromName).                                                                     |
| **Notes**                                   | <ul><li>The list of these images was pulled from a collection located in the repositories at https://github.com/hetima?tab=repositories.  As these image names are (for the most part) not formally listed in Apple's documentation or published APIs, their use cannot be guaranteed across all OS X versions.  If you identify any images which may be missing or could be added, please file an issue at https://github.com/Hammerspoon/hammerspoon.</li></ul> |
| **Source**                                  | [extensions/image/libimage.m line 283](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L283) |

---


### [systemImageNames](#systemimagenames)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.systemImageNames[]`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Table containing the names of internal system images for use with hs.drawing.image                                                                     |
| **Notes**                                   | <ul><li>Image names pulled from NSImage.h</li><li>This table has a __tostring() metamethod which allows listing it's contents in the Hammerspoon console by typing `hs.image.systemImageNames`.</li></ul> |
| **Source**                                  | [extensions/image/libimage.m line 131](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L131) |

---

#### Functions


### [getExifFromPath](#getexiffrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.getExifFromPath(path) -> table | nil`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Gets the EXIF metadata information from an image file.                                                                     |
| **Parameters**                              | <ul><li>path - The path to the image file.</li></ul> |
| **Returns**                                 | <ul><li>A table of EXIF metadata, or `nil` if no metadata can be found or the file path is invalid.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 759](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L759) |

---

#### Constructors


### [iconForFile](#iconforfile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.iconForFile(file) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.image` object for the file or files specified                                                                     |
| **Parameters**                              | <ul><li>file - the path to a file or an array of files to generate an icon for.</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object or nil, if there was an error.  The image will be the icon for the specified file or an icon representing multiple files if an array of multiple files is specified.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1097](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1097) |

---


### [iconForFileType](#iconforfiletype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.iconForFileType(fileType) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.image` object of the icon for the specified file type.                                                                     |
| **Parameters**                              | <ul><li>fileType - the file type, specified as a filename extension or a universal type identifier (UTI).</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object or nil, if there was an error</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1132](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1132) |

---


### [imageFromAppBundle](#imagefromappbundle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromAppBundle(bundleID) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.image` object using the icon from an App                                                                     |
| **Parameters**                              | <ul><li>bundleID - A string containing the bundle identifier of an application</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object or nil, if no app icon was found</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1068](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1068) |

---


### [imageFromASCII](#imagefromascii)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromASCII(ascii[, context]) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an image from an ASCII representation with the specified context.                                                                     |
| **Parameters**                              | <ul><li>ascii - A string containing a representation of an image</li><li>context - An optional table containing the context for each shape in the image.  A shape is considered a single drawing element (point, ellipse, line, or polygon) as defined at https://github.com/cparnot/ASCIImage and http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring/.
  The context table is an optional (possibly sparse) array in which the index represents the order in which the shapes are defined.  The last (highest) numbered index in the sparse array specifies the default settings for any unspecified index and any settings which are not explicitly set in any other given index.
  Each index consists of a table which can contain one or more of the following keys:fillColor - the color with which the shape will be filled (defaults to black)  Color is defined in a table containing color component values between 0.0 and 1.0 for each of the keys:red (default 0.0)green (default 0.0)blue (default 0.0)alpha (default 1.0)strokeColor - the color with which the shape will be stroked (defaults to black)lineWidth - the line width (number) for the stroke of the shape (defaults to 1 if anti-aliasing is on or (√2)/2 if it is off -- approximately 0.7)shouldClose - a boolean indicating whether or not the shape should be closed (defaults to true)antialias - a boolean indicating whether or not the shape should be antialiased (defaults to true)</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | <ul><li>To use the ASCII diagram image support, see https://github.com/cparnot/ASCIImage and http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring</li><li>The default for lineWidth, when antialiasing is off, is defined within the ASCIImage library. Geometrically it represents one half of the hypotenuse of the unit right-triangle and is a more accurate representation of a "real" point size when dealing with arbitrary angles and lines than 1.0 would be.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 838](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L838) |

---


### [imageFromMediaFile](#imagefrommediafile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromMediaFile(file) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.image` object from a video file or the album artwork of an audio file or directory                                                                     |
| **Parameters**                              | <ul><li>file - A string containing the path to an audio or video file or an album directory</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object</li></ul>          |
| **Notes**                                   | <ul><li>If a thumbnail can be generated for a video file, it is returned as an `hs.image` object, otherwise the filetype icon</li><li>For audio files, this function first determines the containing directory (if not already a directory)</li><li>It checks if any of the following common filenames for album art are present:</li><li> cover.jpg</li><li> front.jpg</li><li> art.jpg</li><li> album.jpg</li><li> folder.jpg</li><li>If one of the common album art filenames is found, it is returned as an `hs.image` object</li><li>This is faster than extracting image metadata and allows for obtaining artwork associated with file formats such as .flac/.ogg</li><li>If no common album art filenames are found, it attempts to extract image metadata from the file. This works for .mp3/.m4a files</li><li>If embedded image metadata is found, it is returned as an `hs.image` object, otherwise the filetype icon</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1154](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1154) |

---


### [imageFromName](#imagefromname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromName(string) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Returns the hs.image object for the specified name, if it exists.                                                                     |
| **Parameters**                              | <ul><li>Name - the name of the image to return.</li></ul> |
| **Returns**                                 | <ul><li>An hs.image object or nil, if no image was found with the specified name.</li></ul>          |
| **Notes**                                   | <ul><li>Some predefined labels corresponding to OS X System default images can be found in `hs.image.systemImageNames`.</li><li>Names are not required to be unique: The search order is as follows, and the first match found is returned:</li><li>   an image whose name was explicitly set with the `setName` method since the last full restart of Hammerspoon</li><li>   Hammerspoon's main application bundle</li><li>   the Application Kit framework (this is where most of the images listed in `hs.image.systemImageNames` are located)</li><li>Image names can be assigned by the image creator or by calling the `hs.image:setName` method on an hs.image object.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 986](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L986) |

---


### [imageFromPath](#imagefrompath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromPath(path) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Loads an image file                                                                     |
| **Parameters**                              | <ul><li>path - A string containing the path to an image file on disk</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object, or nil if an error occurred</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 811](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L811) |

---


### [imageFromURL](#imagefromurl)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image.imageFromURL(url[, callbackFn]) -> object`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates an `hs.image` object from the contents of the specified URL.                                                                     |
| **Parameters**                              | <ul><li>url - a web url specifying the location of the image to retrieve</li><li>callbackFn - an optional callback function to be called when the image fetching is complete</li></ul> |
| **Returns**                                 | <ul><li>An `hs.image` object or nil, if the url does not specify image contents or is unreachable, or if a callback function is supplied</li></ul>          |
| **Notes**                                   | <ul><li>If a callback function is supplied, this function will return nil immediately and the image will be fetched asynchronously</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1016](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1016) |

---

#### Methods


### [bitmapRepresentation](#bitmaprepresentation)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:bitmapRepresentation([size], [gray]) -> imageObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Creates a new bitmap representation of the image and returns it as a new hs.image object                                                                     |
| **Parameters**                              | <ul><li>`size` - an optional table specifying the height and width the image should be scaled to in the bitmap. The size is specified as table with `h` and `w` keys set. Defaults to the size of the source image object.</li><li>`gray` - an optional boolean, default false, specifying whether or not the bitmap should be converted to grayscale (true) or left as RGB color (false).</li></ul> |
| **Returns**                                 | <ul><li>a new hs.image object</li></ul>          |
| **Notes**                                   | <ul><li>a bitmap representation of an image is rendered at the specific size specified (or inherited) when it is generated -- if you later scale it to a different size, the bitmap will be scaled as larger or smaller pixels rather than smoothly.</li><li></li><li>this method may be useful when preparing images for other devices (e.g. `hs.streamdeck`).</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1779](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1779) |

---


### [colorAt](#colorat)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:colorAt(point) -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Reads the color of the pixel at the specified location.                                                                     |
| **Parameters**                              | <ul><li>`point` - a `hs.geometry.point`</li></ul> |
| **Returns**                                 | <ul><li>A `hs.drawing.color` object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1315](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1315) |

---


### [copy](#copy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:copy() -> imageObject`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a copy of the image                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>a new hs.image object</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1613](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1613) |

---


### [croppedCopy](#croppedcopy)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:croppedCopy(rectangle) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a copy of the portion of the image specified by the rectangle specified.                                                                     |
| **Parameters**                              | <ul><li>rectangle - a table with 'x', 'y', 'h', and 'w' keys specifying the portion of the image to return in the new image.</li></ul> |
| **Returns**                                 | <ul><li>a copy of the portion of the image specified</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1347](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1347) |

---


### [encodeAsURLString](#encodeasurlstring)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:encodeAsURLString([scale], [type]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a bitmap representation of the image as a base64 encoded URL string                                                                     |
| **Parameters**                              | <ul><li>scale - an optional boolean, default false, which indicates that the image size (which macOS represents as points) should be scaled to pixels.  For images that have Retina scale representations, this may result in an encoded image which is scaled down from the original source.</li><li>type  - optional case-insensitive string parameter specifying the bitmap image type for the encoded string (default PNG)
  PNG  - save in Portable Network Graphics (PNG) format
  TIFF - save in Tagged Image File Format (TIFF) format
  BMP  - save in Windows bitmap image (BMP) format
  GIF  - save in Graphics Image Format (GIF) format
  JPEG - save in Joint Photographic Experts Group (JPEG) format</li></ul> |
| **Returns**                                 | <ul><li>the bitmap image representation as a Base64 encoded string</li></ul>          |
| **Notes**                                   | <ul><li>You can convert the string back into an image object with [hs.image.imageFromURL](#URL), e.g. `hs.image.imageFromURL(string)`</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1397](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1397) |

---


### [getLoupedeckArray](#getloupedeckarray)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:getLoupedeckArray() -> table`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Translates an `hs.image` object into an RGB array string suitable for the Loupedeck CT device.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>A string containing the RGB data</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1630](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1630) |

---


### [name](#name)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:name([name]) -> imageObject | string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the name of the image represented by the hs.image object.                                                                     |
| **Parameters**                              | <ul><li>`name` - an optional string specifying the new name for the hs.image object.</li></ul> |
| **Returns**                                 | <ul><li>if no argument is provided, returns the current name.  If a new name is specified, returns the hs.image object or nil if the name cannot be changed.</li></ul>          |
| **Notes**                                   | <ul><li>see also [hs.image:setName](#setName) for a variant that returns a boolean instead.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1252](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1252) |

---


### [saveToFile](#savetofile)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:saveToFile(filename, [scale], [filetype]) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Save the hs.image object as an image of type `filetype` to the specified filename.                                                                     |
| **Parameters**                              | <ul><li>filename - the path and name of the file to save.</li><li>scale    - an optional boolean, default false, which indicates that the image size (which macOS represents as points) should be scaled to pixels.  For images that have Retina scale representations, this may result in a saved image which is scaled down from the original source.</li><li>filetype - optional case-insensitive string parameter specifying the file type to save (default PNG)
  PNG  - save in Portable Network Graphics (PNG) format
  TIFF - save in Tagged Image File Format (TIFF) format
  BMP  - save in Windows bitmap image (BMP) format
  GIF  - save in Graphics Image Format (GIF) format
  JPEG - save in Joint Photographic Experts Group (JPEG) format</li></ul> |
| **Returns**                                 | <ul><li>Status - a boolean value indicating success (true) or failure (false)</li></ul>          |
| **Notes**                                   | <ul><li>Saves image at the size in points (or pixels, if `scale` is true) as reported by [hs.image:size()](#size) for the image object</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1487](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1487) |

---


### [setName](#setname)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:setName(Name) -> boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Assigns the name assigned to the hs.image object.                                                                     |
| **Parameters**                              | <ul><li>Name - the name to assign to the hs.image object.</li></ul> |
| **Returns**                                 | <ul><li>Status - a boolean value indicating success (true) or failure (false) when assigning the specified name.</li></ul>          |
| **Notes**                                   | <ul><li>This method is included for backwards compatibility and is considered deprecated.  It is equivalent to `hs.image:name(name) and true or false`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/image.lua line 39](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/image.lua#L39) |

---


### [setSize](#setsize)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:setSize(size [, absolute]) -> object`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Returns a copy of the image resized to the height and width specified in the size table.                                                                     |
| **Parameters**                              | <ul><li>size     - a table with 'h' and 'w' keys specifying the size for the new image.</li><li>absolute - an optional boolean specifying whether or not the copied image should be resized to the height and width specified (true), or whether the copied image should be scaled proportionally to fit within the height and width specified (false).  Defaults to false.</li></ul> |
| **Returns**                                 | <ul><li>a copy of the image object at the new size</li></ul>          |
| **Notes**                                   | <ul><li>This method is included for backwards compatibility and is considered deprecated.  It is equivalent to `hs.image:copy():size(size, [absolute])`.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/image.lua line 53](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/image.lua#L53) |

---


### [size](#size)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:size([size, [absolute]] ) -> imageObject | size`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set the size of the image represented by the hs.image object.                                                                     |
| **Parameters**                              | <ul><li>`size`     - an optional table with 'h' and 'w' keys specifying the size for the image.</li><li>`absolute` - when specifying a new size, an optional boolean, default false, specifying whether or not the image should be resized to the height and width specified (true), or whether the copied image should be scaled proportionally to fit within the height and width specified (false).</li></ul> |
| **Returns**                                 | <ul><li>If arguments are provided, return the hs.image object; otherwise returns the current size</li></ul>          |
| **Notes**                                   | <ul><li>See also [hs.image:setSize](#setSize) for creating a copy of the image at a new size.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1280](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1280) |

---


### [template](#template)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:template([state]) -> imageObject | boolean`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Get or set whether the image is considered a template image.                                                                     |
| **Parameters**                              | <ul><li>`state` - an optional boolean specifying whether or not the image should be a template.</li></ul> |
| **Returns**                                 | <ul><li>if a parameter is provided, returns the hs.image object; otherwise returns the current value</li></ul>          |
| **Notes**                                   | <ul><li>Template images consist of black and clear colors (and an alpha channel). Template images are not intended to be used as standalone images and are usually mixed with other content to create the desired final appearance.</li><li>Images with this flag set to true usually appear lighter than they would with this flag set to false.</li></ul> |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1587](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1587) |

---


### [toASCII](#toascii)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.image:toASCII([width, height]) -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Converts an image to an ASCII representation of the image in the form of a string.                                                                     |
| **Parameters**                              | <ul><li>width - An optional width in pixels (defaults to image width if nothing supplied).</li><li>height - An optional height in pixels (defaults to image height if nothing supplied).</li></ul> |
| **Returns**                                 | <ul><li>A string.</li></ul>          |
| **Notes**                                   | None |
| **Examples**                                | None |
| **Source**                                  | [extensions/image/libimage.m line 1747](https://github.com/CommandPost/CommandPost-App/blob/master/extensions/image/libimage.m#L1747) |

---

