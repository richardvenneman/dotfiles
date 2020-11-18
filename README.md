# Dotfiles

## Install dependencies

1. [Install 1Password](https://1password.com)
2. [Install Homebrew](https://brew.sh)
3. `$ brew tap caskroom/cask`

## Install software

1. `git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"`
2. `brew install zsh zsh-completions stow rbenv yarn redis heroku/brew/heroku puma/puma/puma-dev terminal-notifier`
3. `brew cask install postgres atom virtualbox google-chrome firefox finicky`
4. `brew cask install skype`

If installing VirtualBox fails, open macOS Security & Privacy preference pane and try again.

## Other

Install [Fira Code](https://github.com/tonsky/FiraCode) (TTF).

## Configure software

1. `git clone https://github.com/richardvenneman/dotfiles.git ~/.dotfiles`
2. Run commands:

```shell
# Symlink with stow
cd ~/.dotfiles
stow zsh
stow atom
stow .finicky.js

# Setup iTerm2 preferences
defaults write com.googlecode.iterm2 "PrefsCustomFolder" -string "~/.dotfiles/iterm2"
defaults write com.googlecode.iterm2 "LoadPrefsFromCustomFolder" -bool true
```

3. [Setup Puma-dev](https://github.com/puma/puma-dev#install)
