# Dotfiles

This is a [Dotbot](https://github.com/anishathalye/dotbot) powered repository containing my dotfiles. I'm tracking these to accommodate for setting up new machines easily. In case you've arrived here, I'd recommend checking out Dotbot to set up your own configuration (it's really easy).

## Prerequisites

### Install brew

```
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
$ eval "$(/opt/homebrew/bin/brew shellenv)"
$ brew analytics off
```

### Git & GitHub

```
$ xcode-select --install
$ brew install gh
$ gh auth login
```

## Installation

```
$ git clone git@github.com:richardvenneman/dotfiles.git .dotfiles --recursive
$ cd .dotfiles && ./install
```

## Optional: Configure power schedule
Optional step for a work machine: I like running my MacBook in clamshell mode and to avoid having to open it up to press the power button every morning, we can set up a power schedule. Especially useful since I currently have it mounted/tucked away underneath my desk:

```
sudo su
pmset repeat wakeorpoweron MTWRF 8:45:00
```

## Updating

```
$ cd .dotfiles
$ git pull
$ ./install
```
