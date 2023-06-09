# cp.spec

An synchronous/asynchronous test library for Lua.

This library uses a syntax similar to Ruby RSpec or Mocha.js.

## Simple Synchronous Test

To create a test, create a new file ending with `_spec.lua`. For example, `simple_spec.lua`:

```lua
local spec          = require "cp.spec"
local it            = spec.it

return it "always passes"
:doing(function()
    assert(true, "This always passes")
end)
```

It can be run from the Debug Console like so:

```
cp.spec "simple" ()
```

It will report something like this:

```
2019-10-06 18:13:28: [RESULT] it always passes: passed: 1; failed: 0; aborted: 0; time: 0.0022s
```

## Simple Synchronous Failure

If a test fails, it gives a report of where it failed, and if provided, the related message:

```lua
local spec          = require "cp.spec"
local it            = spec.it

return it "always fails"
:doing(function()
    assert(false, "This always fails")
end)
```

This will result in something like this:

```
2019-10-06 21:54:16:   [FAIL] it always fails: [.../simple_spec.lua:6] This always fails
2019-10-06 21:54:16:
2019-10-06 21:54:16: [RESULT] it always fails: passed: 0; failed: 1; aborted: 0; time: 0.0370s
```

You can then check the line that failed and resolve the issue.

## Simple Asynchronous Test

Performing an asynchronous test is only a little more complicated.
We'll modify our `simple_spec.lua` to use of the [Run.This](cp.spec.Run.This.md) instance available to every test:

```lua
local spec          = require "cp.spec"
local it            = spec.it
local timer         = require "hs.timer"

return it "always passes"
:doing(function(this)
    this:wait(5)
    assert(true, "This happens immediately")
    timer.doAfter(2, function()
        assert(true, "This happens after 2 seconds.")
        this:done()
    end)
end)
```

Other than using `hs.timer` to actually make this asynchronous, the key additions here are:
 * `this:wait(5)`: Tells the test that it is asynchronous, and to wait 5 seconds before timing out.
 * `this:done()`: Called inside the asynchronous function to indicate that it's complete.

Asycnchronous (and synchronous) tests can also be terminated by a failed `assert`, an `error` or a call to [this:fail(...)](cp.spec.Run.This.md#fail)
or [this:abort(...)](cp.spec.Run.This.md#abort)

## Multiple tests

Most things you're testing will require more than a single test. For this,
We use [Specification](cp.spec.Specification.md), most simply via the [describe](#describe) function:

```lua
local spec          = require "cp.spec"
local describe, it  = spec.describe, spec.it

local function sum(a,b)
    return a + b
end

return describe "sum" {
    it "results in 3 when you add 1 and 2"
    :doing(function()
        assert(sum(1, 2) == 3)
    end),
    it "results in 0 when you add 1 and -1"
    :doing(function()
        assert(sum(1, -1) == 0)
    end),
}
```

This will now run two tests, and report something like this:

```
2019-10-06 21:40:00: [RESULT] sum: passed: 2; failed: 0; aborted: 0; time: 0.0027s
```

## Data-driven Testing

When testing a feature, there are often multiple variations you want to test,
and repeating individual tests can get tedious.

This is a great place to use the [where](cp.spec.Scenario.md#where) feature.
Our previous test can become something like this:

```lua
return describe "sum" {
    it "results in ${result} when you add ${a} and ${b}"
    :doing(function(this)
        assert(sum(this.a, this.b) == this.result)
    end)
    :where {
        { "a",  "b",    "result"},
        { 1,    2,      3 },
        { 1,    -1,     0 },
    },
}
```

Other variations can be added easily by adding more rows.

## Running Multiple Specs

As shown above, you can run a single spec like so:

```lua
cp.spec "path.to.spec" ()
```

You can also run that spec an all other specs under the same path by adding `".*"` to the end.

```lua
cp.spec "path.to.spec.*" ()
```

Or run every spec in your system like so:

```lua
cp.spec "*" ()
```

## Submodules
 * [cp.spec.DefaultHandler](cp.spec.DefaultHandler.md)
 * [cp.spec.Definition](cp.spec.Definition.md)
 * [cp.spec.Error](cp.spec.Error.md)
 * [cp.spec.Handled](cp.spec.Handled.md)
 * [cp.spec.Handler](cp.spec.Handler.md)
 * [cp.spec.Message](cp.spec.Message.md)
 * [cp.spec.Report](cp.spec.Report.md)
 * [cp.spec.Run](cp.spec.Run.md)
 * [cp.spec.Scenario](cp.spec.Scenario.md)
 * [cp.spec.Specification](cp.spec.Specification.md)
 * [cp.spec.TestCase](cp.spec.TestCase.md)
 * [cp.spec.TestSuite](cp.spec.TestSuite.md)
 * [cp.spec.Where](cp.spec.Where.md)
 * [cp.spec.expect](cp.spec.expect.md)

## API Overview
* Functions - API calls offered directly by the extension
 * [describe](#describe)
 * [find](#find)
 * [it](#it)
 * [setSearchPath](#setSearchPath)
 * [spec](#spec)
 * [test](#test)

## API Documentation

### Functions


### [describe](#describe)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.describe(name) -> function(definitions) -> cp.spec.Specification`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns a `function` which will accept a list of test [definitions](cp.spec.Definition.md), or a `table` of [definitions](cp.spec.Definition.md).                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the test suite.</li></ul> |
| **Returns**                                 | <ul><li>A `function` that must be called with the set of [definitions](cp.spec.Definition.md) or [suites](cp.spec.Specification.md) to run.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [find](#find)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.find(idPattern) -> cp.spec.Definition`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to find specs that match the provided ID pattern.                                                                     |
| **Parameters**                              | <ul><li>idPattern - the ID pattern</li></ul> |
| **Returns**                                 | <ul><li>The spec or `nil` and an error message.</li></ul>          |
| **Notes**                                   | <ul><li>Essentially, this is a standard `require` id/path to the spec file, with an optional `"*"` at the end to indicate that all specs available under that path should be loaded. Eg. "foo.bar" will find the specific spec at `foo/bar_spec.lua` or `foo/bar/._spec.lua`, or if those don't exist it will see if there is a `foo/bar_test.lua` or `foo/bar/._test.lua` and load that via [test](#test) instead.</li><li>However, if the pattern is "foo.bar.*", it will not only look for those specs, but will also check under that folder for other `_spec.lua` or `_test.lua` files to add to the collection to run.</li></ul>                |

---

### [it](#it)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.it(name[, ...]) -> cp.spec.Scenario`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Returns an [Scenario](cp.spec.Scenario.md) with the specified name and optional `doingFn` function. If the function is not provided, it must be done via the [doing](#doing) method prior to running.                                                                     |
| **Parameters**                              | <ul><li>name      - The name of the scenario.</li><li>doingFn   - (optional) The `function` to call when doing the operation. Will be passed the [Run.This](cp.spec.Run.This.md) instance for the definition.</li></ul> |
| **Returns**                                 | <ul><li>A `cp.spec.Scenario` object</li></ul>          |
| **Notes**                                   | <ul><li>See [doing](cp.spec.Scenario.md#doing) for more details regarding the function.</li></ul>                |

---

### [setSearchPath](#setSearchPath)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.setSearchPath(path) -> none`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Sets the path that will be used to search for `spec` files with the `spec "my.extension"` call. By default it will search the current package path. If specified, it will also search the provided path.                                                                     |
| **Parameters**                              | <ul><li>path - The path to search for `spec` files. Set to `nil` to only search the default package path.</li></ul> |
| **Returns**                                 | <ul><li>None</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---

### [spec](#spec)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec(id) -> cp.spec.Definition`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | This will search the package path (and [specPath](#setSpecPath), if set) for `_spec.lua` files.                                                                     |
| **Parameters**                              | <ul><li>id - the path ID for the spec. Eg. "cp.app"</li></ul> |
| **Returns**                                 | <ul><li>The [Definition](cp.spec.Definition.md), or throws an error.</li></ul>          |
| **Notes**                                   | <ul><li>It will first look for a file ending with `_spec.lua`, then will look for a file named `_spec.lua` in the folder.</li><li>For example, if you run `require "cp.spec" "foo.bar"`, it will first look for `"foo/bar_spec.lua"`, then `"foo/bar/_spec.lua"`.</li><li>This gives flexibility for extensions that are organised as single files or as folders.</li></ul>                |

---

### [test](#test)

|                                             |                                                                                     |
| --------------------------------------------|-------------------------------------------------------------------------------------|
| **Signature**                               | `cp.spec.test(id) -> cp.spec.Definition`                                                                    |
| **Type**                                    | Function                                                                     |
| **Description**                             | Attempts to load a [cp.test](cp.test.md) with the specified ID, converting it to a `cp.spec` [Definition](cp.spec.Definition.md). This can then be run like any other `spec`.                                                                     |
| **Parameters**                              | <ul><li>id - The `cp.test` ID (eg. `"cp.app"`).</li></ul> |
| **Returns**                                 | <ul><li>The `Definition` or throws an error if it can't be found.</li></ul>          |
| **Notes**                                   | <ul></ul>                |

---
