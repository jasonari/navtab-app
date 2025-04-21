import NavIcon from '@/components/NavIcon'
import { iconList, type Icon } from './iconListData'
import type { NextPage } from 'next'

const Dock: NextPage = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex h-21 flex-row items-center justify-center rounded-[26px] bg-white/40 pr-2 pl-2">
        {iconList.map((icon: Icon) => (
          <NavIcon key={icon.id} icon={icon} />
        ))}
      </div>
    </div>
  )
}

export default Dock
