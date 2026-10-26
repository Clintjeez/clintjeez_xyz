#!/usr/bin/env bash
# Regenerates public/clinton-james-cv.pdf from the /cv page (served by the
# "Download PDF" button). Run it after editing src/app/(frontend)/lib/cv.ts,
# with the dev server running:
#
#   pnpm dev            # in another terminal
#   pnpm cv:pdf         # or: bash scripts/build-cv-pdf.sh http://localhost:3000/cv
#
# Uses Chrome's own headless printer with browser headers/footers disabled,
# so the PDF has no date, page title or URL printed on it.
set -euo pipefail

URL="${1:-http://localhost:3000/cv}"
OUT="public/clinton-james-cv.pdf"
CHROME="${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 --print-to-pdf="$OUT" "$URL" 2>/dev/null

echo "Wrote $OUT"
