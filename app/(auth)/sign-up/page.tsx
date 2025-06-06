import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import SignUpForm from './sign-up-form'

interface SignUpPageProps {
  searchParams: Promise<{ callbackUrl: string }>
}

const SignUpPage = async (props: SignUpPageProps) => {
  const { callbackUrl } = await props.searchParams

  const session = await auth()

  if (session) {
    return redirect(callbackUrl || '/')
  }

  return (
    <div className="flex-center h-screen backdrop-blur-md">
      <div className="flex h-[450px] w-[800px] rounded-3xl bg-[url('/user-login-bg.png')] bg-cover bg-no-repeat">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpPage
