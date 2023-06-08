# Command Line Tool

CommandPost offers an optional Command Line Tool, that allows you to trigger any arbitrary Lua code via Apple's Terminal.

The Command Line Tool uses [hs.ipc](https://dev.commandpost.io/api/hs/hs.ipc.html){target="_blank"}.

To install the Command Line Tool, click the CommandPost menubar icon, then **Preferences...**, click the **Advanced** tab then the **Install** button.

After installing the Command Line Tool you can also trigger Lua via code the command line. For example:

```
cmdpost -c 'require("cp.plugins")("finalcutpro.timeline.lanes").selectClipAtLane(1)'
```

This allows you to have all the power of CommandPost & it's Lua Scripting Engine, directly from the command line.

The man page of the command line tool is provided here:

```
NAME
     cmdpost -- Command line interface to CommandPost.app

SYNOPSIS
     cmdpost [-i | -s | -c code] [-r] [-n]

DESCRIPTION
     Runs code from within CommandPost, and prints the results. The given code is passed to "hs.ipc.
     handler" which normally executes it as plain Lua code, but may be overridden to do some custom
     evaluation.

     When no args are given, -i is implied.

     -i       Runs in interactive-mode; uses each line as code . Prints in color unless otherwise speci-
              fied.
     -c       Uses the given argument as code
     -s       Uses stdin as code
     -r       Forces CommandPost to interpret code as raw Lua code; the function "hs.ipc.handler" is not
              called.
     -n       When specified, interactive-mode does not use colors.

EXIT STATUS
     The cmdpost utility exits 0 on success, and >0 if an error occurs.
```

