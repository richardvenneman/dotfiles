# Dotfiles

## Install dependencies

1. [Install 1Password](https://1password.com)
2. [Install Homebrew](https://brew.sh)
3. [Install iTerm2](https://iterm2.com)
4. [Install Nova](https://nova.app)
5. `$ brew tap homebrew/cask`

## Install software

1. `git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"`
2. `brew install zsh zsh-completions stow rbenv yarn redis heroku/brew/heroku puma/puma/puma-dev terminal-notifier`
3. `brew cask install postgres google-chrome firefox finicky`

If installing VirtualBox fails, open macOS Security & Privacy preference pane and try again.

## Other

Install [Fira Code](https://github.com/tonsky/FiraCode) (TTF).

## Configure software

1. `git clone https://github.com/richardvenneman/dotfiles.git ~/.dotfiles`
2. Run commands:

```shell
# Setup Prezto
cd $ZPREZTODIR
git clone --recurse-submodules https://github.com/belak/prezto-contrib contrib


# Symlink with stow
cd ~/.dotfiles
stow zsh
stow finicky

# Setup iTerm2 preferences
defaults write com.googlecode.iterm2 "PrefsCustomFolder" -string "~/.dotfiles/iterm2"
defaults write com.googlecode.iterm2 "LoadPrefsFromCustomFolder" -bool true
```

3. [Setup Puma-dev](https://github.com/puma/puma-dev#install)
