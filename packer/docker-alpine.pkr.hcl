packer {
  required_plugins {
    docker = {
      version = ">= 0.0.7"
      source  = "github.com/hashicorp/docker"
    }
  }
}

source "docker" "alpine" {
  image  = "alpine:3.15.2"
  commit = true
}

build {
  name = "packer-hello-world"
  sources = [
    "source.docker.alpine"
  ]
}

