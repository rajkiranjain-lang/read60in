import type { Metadata } from 'next'
import React from 'react'
import './styles.css'

export const metadata: Metadata = {
  title: 'READ60',
  description: 'Blog · Story · News · Reels',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
