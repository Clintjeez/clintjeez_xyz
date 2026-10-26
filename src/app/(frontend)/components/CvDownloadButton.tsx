'use client'

import React from 'react'
import { HiArrowDownTray } from 'react-icons/hi2'
import posthog from 'posthog-js'

// Serves the pre-built PDF (scripts/build-cv-pdf.sh) so downloads never carry
// the browser's print header and footer.
const CvDownloadButton = () => (
  <a
    href="/clinton-james-cv.pdf"
    download="Clinton-James-CV.pdf"
    onClick={() => posthog.capture('cv_download_clicked')}
    className="inline-flex items-center gap-2 h-9 px-3 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[12px] font-bold rounded-md transition-all"
  >
    <HiArrowDownTray className="text-[#edd86e] text-[15px]" />
    Download PDF
  </a>
)

export default CvDownloadButton
