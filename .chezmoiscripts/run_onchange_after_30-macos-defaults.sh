#!/usr/bin/env bash
set -euo pipefail

echo "==> macOS defaults"

# Crisper text rendering.
defaults -currentHost write -g AppleFontSmoothing -int 0

echo "==> Loading keyboard remap agent"
AGENT="$HOME/Library/LaunchAgents/com.richardvenneman.keyremap.plist"
if [[ -f "$AGENT" ]]; then
    launchctl unload "$AGENT" 2>/dev/null || true
    launchctl load "$AGENT"
fi
