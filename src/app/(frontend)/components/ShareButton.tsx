'use client'

import { GoCopy } from 'react-icons/go'

interface ShareButtonProps {
  postSlug: string
}

export const ShareButton = ({ postSlug }: ShareButtonProps) => {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${postSlug}`)
    }
  }

  return (
    <button
      className="text-[20px] text-[#77777869] hover:text-[#777778] hover:border-[#777778] border-[1px] border-[#77777869] rounded-md p-2"
      onClick={handleShare}
    >
      <GoCopy />
    </button>
  )
}
