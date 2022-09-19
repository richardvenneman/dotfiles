export EDITOR="nova --wait"

# ZSH configuration
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

export STARSHIP_CONFIG=$HOME/.dotfiles/zsh/starship.toml
eval "$(starship init zsh)"

# Ruby
eval "$(rbenv init - zsh)"
