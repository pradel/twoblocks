workflow "Build and test" {
  on = "push"
  resolves = ["Build", "Test"]
}

action "Install" {
  uses = "nuxt/actions-yarn@node-11"
  args = "install"
}

action "Build" {
  uses = "nuxt/actions-yarn@node-11"
  needs = ["Install"]
  args = "build"
}

action "Test" {
  uses = "yarn"
  needs = ["Install"]
  args = "test"
}
