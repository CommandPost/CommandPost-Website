# cp.rx.go.Throw

A [Statement](cp.rx.go.Statement.md) that will throw the provided message.

Example:

```lua
Throw("There was an error: %s", errorMessage)
```

## API Overview
### **Constructors** - _API calls which return an object, typically one that offers API methods_
 * [Throw](#throw)


## API Documentation

### Constructors


### [Throw](#throw)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.rx.go.Throw([message[, ...]]) -> Throw`                                                                    |
| **Type**                                    | Constructor                                                                     |
| **Description**                             | Creates a new `Throw` `Statement` that will throw the message when executed.                                                                     |
| **Parameters**                              | <ul><li>message  - The optional message to return. May contain `string.format` tokens</li><li>...      - The optional list of parameters to inject into the message.</li></ul> |
| **Returns**                                 | <ul><li>The `Statement` which will send the provided error message.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
