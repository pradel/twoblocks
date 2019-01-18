workflow "Build and test" {
  on = "push"
  resolves = ["Build", "Test"]
}

action "Install" {
  uses = "node@10"
  args = "install"
}

action "Build" {
  uses = "node@10"
  needs = ["Install"]
  args = "build"
}

action "Test" {
  uses = "node@10"
  needs = ["Install"]
  args = "test"
}
