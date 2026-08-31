# Dotfiles

This is a [chezmoi](https://www.chezmoi.io/) powered repository containing my dotfiles, together with the packages and apps I want on a machine. I'm tracking these to accommodate for setting up new machines easily. In case you've arrived here, I'd recommend checking out chezmoi to set up your own configuration (it's really easy).

## Prerequisites

Only git, which comes with the command line tools:

```
$ xcode-select --install
```

Homebrew is installed on the first run, so there's nothing to do for it up front. Once that's done I sign in to GitHub, and to the App Store so the App Store apps can install:

```
$ gh auth login
```

## Installation

```
$ sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply --source=~/Developer/dotfiles richardvenneman
```

This clones the repository to `~/Developer/dotfiles`, asks me whether it's a personal or work machine, and then sets the rest up: dotfiles, Homebrew packages, App Store apps and language runtimes.

On a machine that already has configuration worth keeping I leave off `--apply`, so I can look at `chezmoi diff` before anything gets written.

## Profiles

I'm asked once whether the machine is `personal` or `work`, and the answer is remembered in `~/.config/chezmoi/chezmoi.toml`. It decides:

- **work** — my beehiiv git identity and the Doppler CLI
- **personal** — games, media, and the tools I use for flashing hardware

To change my mind later I have to clear the answer first, since it's only asked when it isn't already known:

```
$ rm ~/.config/chezmoi/chezmoi.toml
$ chezmoi init --source=~/Developer/dotfiles --promptChoice "Machine profile=personal"
$ chezmoi apply
```

## Making changes

Files are copied into place rather than symlinked, so editing `~/.zshrc` directly won't update this repository. I either go through chezmoi, or pull the change back in afterwards:

```
$ chezmoi edit ~/.zshrc
$ chezmoi re-add            # when I've edited the file in place
$ chezmoi cd                # jump to this repository
```

## Packages

Everything I want installed lives in `~/.Brewfile`. It only ever installs, so anything I'm experimenting with sticks around until I clear it out myself:

```
$ mise run brew-sync        # install what's declared
$ mise run brew-cleanup     # show what's installed but not declared
```

The App Store apps need me signed in to the App Store first. If I'm not, they fail and the rest of the run carries on without them — so it's worth re-running once I've signed in.

Language runtimes are handled by [mise](https://mise.jdx.dev/), which reads `~/.config/mise/config.toml`. Worth knowing: `.ruby-version` and `.nvmrc` files are ignored unless the tool is listed under `idiomatic_version_file_enable_tools`, which is easy to forget when a project suddenly resolves to the wrong version.

## Secrets

Nothing secret is stored here. Once my Vaultwarden instance is running I can point the Bitwarden CLI at it and pull secrets in at apply time:

```
$ bw config server https://vault.example.com
```

## Optional: Configure power schedule
Optional step for a work machine: I like running my MacBook in clamshell mode and to avoid having to open it up to press the power button every morning, we can set up a power schedule. Especially useful since I currently have it mounted/tucked away underneath my desk:

```
sudo su
pmset repeat wakeorpoweron MTWRF 8:45:00
```

## Updating

```
$ chezmoi update --apply
```

Or `mise run up`, which pulls, applies, and syncs packages in one go.
