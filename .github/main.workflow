workflow "Build and test" {
  on = "push"
  resolves = ["Build", "Test"]
}

action "Install" {
  uses = "yarn"
  args = "install"
}

action "Build" {
  uses = "yarn"
  needs = ["Install"]
  args = "build"
}

action "Test" {
  uses = "yarn"
  needs = ["Install"]
  args = "test"
}
