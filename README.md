# Dotfiles

## Install package managers
[Install Homebrew](https://brew.sh):

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Terminal
Now to make sure we have a workable terminal environment:

```shell
brew install zsh-autosuggestions starship
```

## Install dependencies
Install dependencies:

1. `brew install stow rbenv ruby-build yarn redis heroku/brew/heroku puma/puma/puma-dev terminal-notifier`
2. `brew install 1password iterm2 nova postgres google-chrome firefox finicky whatsapp --cask`

## Other

Install [Fira Code](https://github.com/tonsky/FiraCode) (TTF).

## Configure software

1. `git clone https://github.com/richardvenneman/dotfiles.git ~/.dotfiles`
2. Run commands:

```shell
# Symlink with stow
cd ~/.dotfiles
stow zsh
stow finicky

# Setup iTerm2 preferences
defaults write com.googlecode.iterm2 "PrefsCustomFolder" -string "~/.dotfiles/iterm2"
defaults write com.googlecode.iterm2 "LoadPrefsFromCustomFolder" -bool true
```

3. [Setup Puma-dev](https://github.com/puma/puma-dev#install)

## Configure OS

Per [Time to upgrade your monitor](https://tonsky.me/blog/monitors/), set the correct scaled resolution and disable font-smoothing:
```shell
defaults -currentHost write -g AppleFontSmoothing -int 0
```
