import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col bg-[url('/bg.jpg')] bg-cover bg-no-repeat">
      <main>{children}</main>
    </div>
  )
}

export default RootLayout
