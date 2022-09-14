require("svelte/register")

// svelte_root is a path like "./"
// root_filename is a name like `App.svelte`

module.exports = (svelte_root, root_filename) => {
  return require(`${svelte_root}/${root_filename}`).default
}
