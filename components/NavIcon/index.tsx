import type { NextPage } from 'next'
import Image from 'next/image'
import type { Bookmark } from '@/types'

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
      <Image
        src={icon.imgUrl}
        alt={icon.title}
        width={icon.size}
        height={icon.size}
      />
    </a>
  )
}

export default NavIcon
