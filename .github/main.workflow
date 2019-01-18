workflow "Build and test" {
  on = "push"
  resolves = ["Build", "Test"]
}

action "Install" {
  uses = "docker://node:10"
  args = "install"
}

action "Build" {
  uses = "docker://node:10"
  needs = ["Install"]
  args = "build"
}

action "Test" {
  uses = "docker://node:10"
  needs = ["Install"]
  args = "test"
}
