import { useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/sign-in'
import { ROUTES } from '@/routes'
import { LoginArgs } from '@/service/auth/auth.types'
import { useLoginMutation } from '@/service/auth/authService'

export const SingInPage = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const handleSignIn = async (data: LoginArgs) => {
    await login(data).unwrap()

    navigate(ROUTES.base)
  }

  return (
    <>
      <SignIn onSubmit={handleSignIn} />
    </>
  )
}
