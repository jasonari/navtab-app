import React from 'react'
import type { Metadata } from 'next'
import { APP_TITLE, APP_DESCRIPTION } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
