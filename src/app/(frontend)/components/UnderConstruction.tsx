'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { TbBarrierBlock } from 'react-icons/tb'

const ModalContext = createContext<{
  open: () => void
}>({ open: () => {} })

export const useUnderConstruction = () => useContext(ModalContext)

export const UnderConstructionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-sm rounded-xl border border-[#2a2a2e] bg-[#1b1c21] p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#222326]">
              <TbBarrierBlock className="text-[#edd86e] text-[28px]" />
            </div>
            <h3 className="text-[18px] font-bold text-[#e0e0e0] mb-2">
              Under Construction
            </h3>
            <p className="text-[13px] text-[#777778] leading-relaxed mb-6">
              This page is currently being built. Check back soon for updates.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 border border-[#edd86e] bg-[#17181d] hover:bg-[#484848] text-[#bfbfbf] text-[13px] font-bold px-6 py-2 rounded-md transition-all duration-300"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  )
}

export default UnderConstructionProvider
