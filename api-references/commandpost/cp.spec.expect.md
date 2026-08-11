# cp.spec.expect

Provides a way of checking values match expected results. At it's core, it uses `assert` to make the check.

For example:

```lua
expect("Hello World"):is("Hello World")
expect("Hello World"):isNot("Hello Mars")
expect(value):isAtLeast(10)
expect.given("the world is a globe"):that(theEarth):isNot("flat")
```

---

## API Overview

---

## API Documentation

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
