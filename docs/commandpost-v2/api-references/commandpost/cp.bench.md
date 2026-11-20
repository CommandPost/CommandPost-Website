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

