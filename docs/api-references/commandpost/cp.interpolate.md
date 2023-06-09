# cp.interpolate

Provides a function that will interpolate values into a string.
It also augments the standard `string` to override the "mod" (`%`) operator so that
any string can be easily interpolated, like so:

```lua
"Hello ${world}" % { world = "Earth" }
```

## API Overview

## API Documentation

