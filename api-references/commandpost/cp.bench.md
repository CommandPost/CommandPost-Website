# cp.bench

Benchmarking Tool.

TIME FUNCTION EXECUTION:
Use this to benchmark sections of code. Wrap them in a function inside this
function call. Eg:

local _bench = require("cp.bench")

local foo = _bench("Foo Test", function()
    return do.somethingHere()
end) --_bench

You can also benchmark all (or some) of the functions on a table in one hit
by using the 'bench.press' function:

local mod = { ... }
-- All functions are benchmarked
mod = _bench.press("mymod", mod)
-- Just the "foo" and "bar" functions are benchmarked.
mod = _bench.press("mymod", mod, {"foo", "bar"})

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
