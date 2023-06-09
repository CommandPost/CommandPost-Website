# cp.apple.finalcutpro.inspector.BasePanel

A base class for the different panels in the [Inspector](cp.apple.finalcutpro.inspector.Inspector.md).

Extends [Element](cp.ui.Element.md).

---

## API Overview
**Constructors** - _API calls which return an object, typically one that offers API methods_
 * [BasePanel](#basepanel)

**Methods** - _API calls which can only be made on an object returned by a constructor_
 * [doShow](#doshow)
 * [hide](#hide)
 * [panelType](#paneltype)
 * [show](#show)


---

## API Documentation

#### Constructors


### [BasePanel](#basepanel)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BasePanel(parent, panelType) -> BasePanel`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Constructs the panel, initialising the parent and the [UI](cp.ui.Element.md#UI).                                                                     |
| **Parameters**                              | <ul><li>parent        - The parent [Element](cp.ui.Element.md).</li><li>panelType     - The panel type string, as defined in [Inspector.INSPECTOR_TABS](cp.apple.finalcutpro.inspector.Inspector.md#INSPECTOR_TABS).</li></ul> |
| **Returns**                                 | <ul><li>The new `BasePanel` instance.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

#### Methods


### [doShow](#doshow)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BasePanel:doShow() -> cp.rx.go.Statment`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | A [Statement](cp.rx.go.Statement.md) that hides the panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The `Statement`, resolving to `true` if successful and sending an error if not.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [hide](#hide)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BasePanel:hide() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Hides the panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [panelType](#paneltype)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BasePanel:panelType() -> string`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Gets the type of panel this is.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>The panel type identifier.</li></ul>          |
| **Notes**                                   | <ul></ul> |

---


### [show](#show)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.apple.finalcutpro.inspector.BasePanel:show() -> none`                                                                    |
| **Type**                                    | Method                                                                     |
| **Description**                             | Shows the panel.                                                                     |
| **Parameters**                              | <ul><li>None</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul> |

---

