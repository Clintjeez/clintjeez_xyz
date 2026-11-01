#!/bin/bash
# Usage: ./render.sh post-1-framework 1080 1350
# Renders an HTML layout to PNG at 2x with headless Chrome.
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size="$2,$3" --virtual-time-budget=6000 \
  --screenshot="$PWD/$1.png" "file://$PWD/$1.html" 2>/dev/null
