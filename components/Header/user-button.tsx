'use client'

import { useRouter } from 'next/navigation'
import { signOutUser } from '@/lib/actions/user.action'

const UserButton = ({ user }: { user: unknown }) => {
  const router = useRouter()

  if (!user) {
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={1} role="button">
          <div className="avatar avatar-placeholder">
            <div className="hover:pointer w-7 rounded-full bg-white/10 text-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul
          tabIndex={1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
        >
          <li>
            <a href="/sign-in">Sign In</a>
          </li>
        </ul>
      </div>
    )
  }

  const handleSignOut = async () => {
    await signOutUser()
    router.refresh()
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={1} role="button">
        <div className="avatar">
          <div className="w-7 cursor-pointer rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div>
      <ul
        tabIndex={1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm"
      >
        <li>
          <button onClick={handleSignOut}>Sign Out</button>
        </li>
      </ul>
    </div>
  )
}

export default UserButton
