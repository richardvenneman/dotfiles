#!/usr/bin/env bash
set -euo pipefail

echo "==> macOS defaults"

# Crisper text rendering.
defaults -currentHost write -g AppleFontSmoothing -int 0
