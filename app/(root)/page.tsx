import type { NextPage } from 'next'
import SearchBar from '@/components/SearchBar'
import Dock from '@/components/Dock'
import { Suspense } from 'react'
import DockSkeleton from '@/app/ui/skeletons'

const Page: NextPage = async () => {
  return (
    <div>
      <SearchBar />
      <Suspense fallback={<DockSkeleton />}>
        <Dock />
      </Suspense>
    </div>
  )
}

export default Page
