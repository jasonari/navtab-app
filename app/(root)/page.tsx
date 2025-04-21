import type { NextPage } from 'next'
import SearchBar from '@/components/SearchBar'
import Dock from '@/components/Dock'

const Page: NextPage = () => {
  return (
    <div>
      <SearchBar />
      <Dock />
    </div>
  )
}

export default Page
