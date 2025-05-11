import type { NextPage } from 'next'
import type { Bookmark } from '@/lib/types/userData'

interface NavIconProps {
  icon: Bookmark
}

const NavIcon: NextPage<NavIconProps> = ({ icon }) => {
  return (
    <a
      href={icon.href}
      target="_self"
      rel="noopener noreferrer"
      className="flex-center mr-2 ml-2 flex size-[60px] rounded-xl bg-[#fff]"
    >
      <img
        src={icon.imgUrl}
        alt={icon.title}
        className={`size-[${icon.size}px]`}
      />
    </a>
  )
}

export default NavIcon
