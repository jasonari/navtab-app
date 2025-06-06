'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useSearchParams } from 'next/navigation'
import { signUpUser } from '@/lib/actions/user.action'

const SignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: ''
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const SignUpBtn = () => {
    const { pending } = useFormStatus()

    return (
      <button disabled={pending} className="btn btn-neutral w-75">
        {pending ? 'Submitting...' : 'Sign Up'}
      </button>
    )
  }

  return (
    <form
      className="flex-center h-112 w-116 flex-col gap-2 p-12"
      action={action}
    >
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="text-2xl font-bold">Sign Up</div>
      <div className="flex flex-col">
        <label htmlFor="username" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="name"
          className="input w-75 focus-within:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          className="input w-75 focus-within:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm font-semibold">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          className="input w-75 focus-within:outline-none"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="text-sm font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="confirmPassword"
          className="input w-75 focus-within:outline-none"
        />
      </div>
      <div>
        <SignUpBtn />
      </div>

      {data && !data.success && (
        <div className="text-center text-sm text-red-400">{data.message}</div>
      )}

      <div className="p-0 text-center text-sm text-gray-400">
        Already have an account?
        <Link href="/sign-in" target="_self" className="link">
          Sign In
        </Link>
      </div>
    </form>
  )
}

export default SignUpForm
