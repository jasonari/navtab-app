import NavIcon from '@/components/NavIcon'
import type { NextPage } from 'next'
import { getBookmarksByUserUid } from '@/lib/actions/userData.actions'
import type { Bookmark } from '@/lib/types/userData'

const Dock: NextPage = async () => {
  const iconList: Bookmark[] = await getBookmarksByUserUid('9aa5a58a-70ce-447e-8362-7bdc3f085374')
  console.log(iconList)

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
