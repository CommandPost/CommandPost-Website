# cp.spec.expect

Provides a way of checking values match expected results. At it's core, it uses `assert` to make the check.

For example:

```lua
expect("Hello World"):is("Hello World")
expect("Hello World"):isNot("Hello Mars")
expect(value):isAtLeast(10)
expect.given("the world is a globe"):that(theEarth):isNot("flat")
```

## API Overview

## API Documentation

