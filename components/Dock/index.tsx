import NavIcon from '@/components/NavIcon'
import type { NextPage } from 'next'
import { getBookmarks } from '@/lib/actions/userData.actions'
import type { Bookmark } from '@/types'

const Dock: NextPage = async () => {
  const iconList: Bookmark[] = await getBookmarks()

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex-center h-21 flex-row rounded-[26px] bg-white/40 pr-2 pl-2">
        {iconList.map((icon: Bookmark) => (
          <NavIcon key={icon.id} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default Dock
