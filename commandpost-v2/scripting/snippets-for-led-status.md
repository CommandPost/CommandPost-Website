# Snippets for LED Status

The DaVinci Resolve Control Surface panel has the ability to use Lua Snippets to set whether or not an LED is active.

The Snippet should return a `true` or a `false` boolean value.

You can learn more about Lua [here](../developer/lua-overview/).

---

## Examples

### Set LED to On

```lua
return true
```

---

### Set LED to Off

```lua
return false
```

---

<script src="https://giscus.app/client.js"
        data-repo="CommandPost/CommandPost"
        data-repo-id="MDEwOlJlcG9zaXRvcnk3NDY0NTk2NQ=="
        data-category="Website Discussion"
        data-category-id="DIC_kwDOBHMBzc4CXFFA"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
