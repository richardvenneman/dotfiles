# Dotfiles

Managed with [chezmoi](https://www.chezmoi.io/). Machine configuration *and*
installed software live here, so a new Mac reaches a working state from one
command.

## Bootstrap a new machine

```
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply richardvenneman
```

That single line clones this repo, prompts once for the machine profile
(`personal` or `work`), installs Homebrew, applies every dotfile, installs all
declared packages, and sets up runtimes. Nothing else is required — `git` comes
from the Xcode command line tools, which macOS prompts for automatically.

## Layout

| Path | Purpose |
|---|---|
| `.chezmoi.toml.tmpl` | Prompts for the machine profile on first init |
| `.chezmoiignore` | Files excluded per profile |
| `.chezmoiscripts/` | Ordered lifecycle scripts (see below) |
| `dot_Brewfile.tmpl` | → `~/.Brewfile`, read by `brew bundle --global` |
| `dot_config/` | → `~/.config/*` (zed, mise, ghostty, starship) |
| `Library/LaunchAgents/` | Login agents |

Files are **copied**, not symlinked. Edit them with `chezmoi edit ~/.zshrc`, or
edit in place and run `chezmoi re-add`.

## Profiles

The profile is chosen once at `chezmoi init` and stored in
`~/.config/chezmoi/chezmoi.toml`. It gates:

- **work** — beehiiv git identity, `doppler` alias
- **personal** — games/media, IoT and flashing tools, Screen Studio

Change it later with `chezmoi init --promptChoice "Machine profile=personal"`.

## Scripts

Run in filename order during `chezmoi apply`:

| Script | When |
|---|---|
| `run_once_before_00-install-homebrew` | Once per machine, before any file |
| `run_onchange_after_10-brew-bundle` | When the Brewfile changes |
| `run_onchange_after_20-mise-install` | When the mise config changes |
| `run_onchange_after_30-macos-defaults` | When the script changes |

`run_onchange_` scripts are keyed on a content hash, so editing the Brewfile
re-runs `brew bundle` while an unrelated `chezmoi apply` does not.

## Packages

`~/.Brewfile` is the declared truth, applied **additively** — `brew bundle`
installs what is missing and never removes anything.

```
mise run brew-sync       # install everything declared
mise run brew-cleanup    # list installed-but-undeclared (removes nothing)
mise run up              # pull, apply, and sync everything
```

To actually prune, run `brew bundle cleanup --global --force` deliberately.

## Runtimes

[mise](https://mise.jdx.dev/) replaces asdf, using PATH activation rather than
shims. Global versions live in `dot_config/mise/config.toml`.

Note: `idiomatic_version_file_enable_tools` is set explicitly. mise disables
`.ruby-version` / `.nvmrc` support by default, unlike asdf's
`legacy_version_file = yes`, so without it existing projects would silently
resolve to the global version.

## Secrets

None are stored in this repo, and nothing is encrypted. When the self-hosted
Vaultwarden instance is running, point the Bitwarden CLI at it:

```
bw config server https://vault.example.com
```

chezmoi's `bitwarden` template functions then resolve secrets at apply time,
so they are never written to disk in the source repo.

## Daily use

```
chezmoi edit ~/.zshrc     # edit a managed file
chezmoi diff              # preview pending changes
chezmoi apply             # apply them
chezmoi re-add            # pull in edits made directly in ~
chezmoi cd                # jump to the source repo
```
