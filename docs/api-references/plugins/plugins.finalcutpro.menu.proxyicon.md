# plugins.finalcutpro.menu.proxyicon

Final Cut Pro Proxy Icon Plugin.

---

## API Overview
**Constants** - _Useful values which cannot be changed_
 * [procyMenuIconEnabled](#procymenuiconenabled)

**Functions** - _API calls offered directly by the extension_
 * [generateProxyTitle](#generateproxytitle)
 * [init](#init)

**Fields** - _Variables which can only be accessed from an object returned by a constructor_
 * [usingProxies](#usingproxies)


---

## API Documentation

#### Constants


### [procyMenuIconEnabled](#procymenuiconenabled)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.proxyicon.procyMenuIconEnabled <cp.prop: boolean>`                                                                    |
| **Type**                                    | Constant                                                                     |
| **Description**                             | Toggles the Enable Proxy Menu Icon                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/proxyicon.lua line 34](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/proxyicon.lua#L34) |

---

#### Functions


### [generateProxyTitle](#generateproxytitle)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.proxyicon.generateProxyTitle() -> string`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Generates the Proxy Title                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>String containing the Proxy Title</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/proxyicon.lua line 18](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/proxyicon.lua#L18) |

---


### [init](#init)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.proxyicon.init(menuManager) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Initalise the module.                                                                     |
| **Parameters**                              | <ul><li>menuManager - The menu manager plugin</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Examples**                                | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/proxyicon.lua line 39](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/proxyicon.lua#L39) |

---

#### Fields


### [usingProxies](#usingproxies)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `plugins.finalcutpro.menu.proxyicon.usingProxies -> <cp.prop: boolean>`                                                                    |
| **Type**                                    | Field                                                                     |
| **Description**                             | Using Proxies?                                                                     |
| **Notes**                                   | <ul><li>None</li></ul> |
| **Source**                                  | [src/plugins/finalcutpro/menu/proxyicon.lua line 13](https://github.com/CommandPost/CommandPost/blob/develop/src/plugins/finalcutpro/menu/proxyicon.lua#L13) |

---

