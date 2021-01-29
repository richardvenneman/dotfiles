# Dotfiles

## Terminal
First, let's make sure we have a workable terminal environment.

1. `git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"`
2. `git clone --recurse-submodules https://github.com/belak/prezto-contrib "${ZDOTDIR:-$HOME}/.zprezto/contrib"`

## Install dependencies
[Install Homebrew](https://brew.sh) and Homebrew Cask:

`$ brew tap homebrew/cask`

Install dependencies:

1. `brew install zsh zsh-completions stow rbenv yarn redis heroku/brew/heroku puma/puma/puma-dev terminal-notifier`
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
