# hs.hash

Various hashing algorithms

## API Overview
* Functions - API calls offered directly by the extension
 * [bMD5](#bmd5)
 * [bSHA1](#bsha1)
 * [bSHA256](#bsha256)
 * [bSHA512](#bsha512)
 * [hmacMD5](#hmacmd5)
 * [hmacSHA1](#hmacsha1)
 * [hmacSHA256](#hmacsha256)
 * [hmacSHA512](#hmacsha512)
 * [MD5](#md5)
 * [SHA1](#sha1)
 * [SHA256](#sha256)
 * [SHA512](#sha512)

## API Documentation

### Functions


### [bMD5](#bmd5)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.bMD5(data) -> data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates a binary MD5 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the binary hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [bSHA1](#bsha1)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.bSHA1(data) -> data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates a binary SHA1 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the binary hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [bSHA256](#bsha256)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.bSHA256(data) -> data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates a binary SHA256 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the binary hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [bSHA512](#bsha512)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.bSHA512(data) -> data`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates a binary SHA512 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the binary hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hmacMD5](#hmacmd5)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.hmacMD5(key, data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an HMAC using a key and an MD5 hash                                                                     |
| **Parameters**                              | <ul><li>key - A string containing a secret key to use</li><li>data - A string containing the data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hmacSHA1](#hmacsha1)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.hmacSHA1(key, data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an HMAC using a key and a SHA1 hash                                                                     |
| **Parameters**                              | <ul><li>key - A string containing a secret key to use</li><li>data - A string containing the data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hmacSHA256](#hmacsha256)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.hmacSHA256(key, data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an HMAC using a key and a SHA256 hash                                                                     |
| **Parameters**                              | <ul><li>key - A string containing a secret key to use</li><li>data - A string containing the data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [hmacSHA512](#hmacsha512)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.hmacSHA512(key, data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an HMAC using a key and a SHA512 hash                                                                     |
| **Parameters**                              | <ul><li>key - A string containing a secret key to use</li><li>data - A string containing the data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [MD5](#md5)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.MD5(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an MD5 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data, encoded as hexadecimal</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [SHA1](#sha1)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.SHA1(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an SHA1 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data, encoded as hexadecimal</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [SHA256](#sha256)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.SHA256(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an SHA256 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data, encoded as hexadecimal</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [SHA512](#sha512)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `hs.hash.SHA512(data) -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Calculates an SHA512 hash                                                                     |
| **Parameters**                              | <ul><li>data - A string containing some data to hash</li></ul> |
| **Returns**                                 | <ul><li>A string containing the hash of the supplied data, encoded as hexadecimal</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
