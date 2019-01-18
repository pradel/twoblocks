workflow "Build and test" {
  on = "push"
  resolves = ["Build", "Test"]
}

action "Install" {
  uses = "docker://node:10"
  args = "yarn install"
}

action "Build" {
  uses = "docker://node:10"
  needs = ["Install"]
  args = "yarn build"
}

action "Test" {
  uses = "docker://node:10"
  needs = ["Build"]
  args = "yarn test"
}
