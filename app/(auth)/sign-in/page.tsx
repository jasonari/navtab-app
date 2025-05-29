import CredentialsSignInForm from './credentials-signin-form'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

interface SignInPageProps {
  searchParams: Promise<{ callbackUrl: string }>
}

const SignInPage = async (props: SignInPageProps) => {
  const { callbackUrl } = await props.searchParams

  const session = await auth()

  if (session) {
    return redirect(callbackUrl || '/')
  }

  return (
    <div className="flex-center h-screen backdrop-blur-md">
      <div className="flex h-[450px] w-[800px] rounded-3xl bg-[url('/user-login-bg.png')] bg-cover bg-no-repeat">
        <CredentialsSignInForm />
      </div>
    </div>
  )
}

export default SignInPage
