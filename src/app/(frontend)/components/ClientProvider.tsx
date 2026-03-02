'use client'

import React from 'react'
import { UnderConstructionProvider } from './UnderConstruction'

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <UnderConstructionProvider>{children}</UnderConstructionProvider>
}

export default ClientProvider
