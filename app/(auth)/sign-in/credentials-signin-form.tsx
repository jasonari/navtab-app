'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { useSearchParams } from 'next/navigation'
import { signInWithCredentials } from '@/lib/actions/user.action'

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: ''
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const SignInBtn = () => {
    const { pending } = useFormStatus()

    return (
      <button disabled={pending} className="btn btn-neutral w-75">
        {pending ? 'Signing In...' : 'Sign In'}
      </button>
    )
  }

  return (
    <form
      className="flex-center h-112 w-116 flex-col gap-6 p-12"
      action={action}
    >
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="text-2xl font-bold">Sign In</div>
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
      <div>
        <SignInBtn />
      </div>

      {data && !data.success && (
        <div className="text-destructive text-center">{data.message}</div>
      )}

      <div className="text-center text-sm text-gray-400">
        Don&apos;t have an account? &nbsp;
        <Link href="/sign-up" target="_self" className="link">
          Sign up
        </Link>
      </div>
    </form>
  )
}

export default CredentialsSignInForm
