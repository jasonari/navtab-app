import type { NextPage } from 'next'
import { auth } from '@/auth'
import UserButton from './user-button'

const Header: NextPage = async () => {
  const session = await auth()

  return (
    <div className="flex h-16 flex-row justify-end px-6">
      <nav className="flex-center">
        <UserButton user={session?.user} />
      </nav>
    </div>
  )
}

export default Header
