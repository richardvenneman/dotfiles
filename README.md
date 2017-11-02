# Dotfiles

## Install dependencies

1. [Install 1Password](https://1password.com)
2. [Install Homebrew](https://brew.sh)
3. `$ brew tap caskroom/cask`

## Install software

1. `git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto"`
2. `brew install zsh zsh-completions stow rbenv yarn redis heroku/brew/heroku`
3. `brew cask install postgres atom virtualbox google-chrome firefox`
4. `brew cask install dropbox skype`

If installing VirtualBox fails, open macOS Security & Privacy preference pane and try again.

## Other

Install [Noto Mono](https://www.google.com/get/noto/) and [Noto Mono for Powerline](https://github.com/powerline/fonts/tree/master/NotoMono).

## Configure software

1. `git clone https://github.com/richardvenneman/dotfiles.git ~/.dotfiles`
2. Run commands:

```shell
cd ~/.dotfiles
stow zsh
stow atom
```
