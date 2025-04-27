import React from 'react'
import type { Metadata } from 'next'
import { APP_TITLE, APP_DESCRIPTION } from '@/lib/constants'
import '@/app/ui/globals.css'
import { notoSansSC } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${notoSansSC.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
