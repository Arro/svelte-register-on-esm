## svelte-register-on-esm

This is an extremely small wrapper around `svelte/register` allowing you to import it into ESM codebases.

It takes two positonal arguments:
1. A svelte root: a path like "./"
2. The filename of the root svelte object like `App.svelte`

Here's an example of how you might use it:

```
import svelteRegister from "svelte-register-on-esm"
import path from "path"
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))
const App = svelteRegister(path.join(__dirname, "./svelte"), "App.svelte")

let { html } = App.render({
  foo: "bar"
})
```
