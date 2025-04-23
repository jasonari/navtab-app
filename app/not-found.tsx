'use client'
import type { NextPage } from 'next'

const NotFound: NextPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="p-4 text-4xl font-bold">404 Not Found</h1>
      <button
        className="btn btn-neutral"
        onClick={() => {
          window.location.replace('/')
        }}
      >
        Back to Home
      </button>
    </div>
  )
}

export default NotFound
