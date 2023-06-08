# Snippets for LED Status
---

The DaVinci Resolve Control Surface panel have the ability to use Lua Snippets to set whether or not an LED is active.

The Snippet should return a `true` or a `false`.

You can learn more about Lua on the [CommandPost Developers site](https://dev.commandpost.io/lua/lua-overview).

---

# Examples

## Set LED to On

```lua
return true
```

---

## Set LED to Off

```lua
return false
```