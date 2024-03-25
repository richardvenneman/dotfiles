export EDITOR="code --wait"
export DISABLE_SPRING="true"
setopt HIST_IGNORE_SPACE

# Set PATH, MANPATH, etc., for Homebrew.
eval "$(/opt/homebrew/bin/brew shellenv)"

# ASDF configuration
. "$HOME/.asdf/asdf.sh"

# ZSH configuration
export STARSHIP_CONFIG=$HOME/.starship.toml
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
eval "$(starship init zsh)"

# Aliases
alias dr="doppler run --"
alias rake="noglob rake"

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

