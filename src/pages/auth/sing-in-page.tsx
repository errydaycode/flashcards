import { Navigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/sign-in'
import { ROUTES } from '@/routes'
import { LoginArgs } from '@/service/auth/auth.types'
import { useGetMeQuery, useLoginMutation } from '@/service/auth/authService'

export const SingInPage = () => {
  const [login] = useLoginMutation()
  const { data: me } = useGetMeQuery()

  const onSubmit = async (data: LoginArgs) => {
    await login(data).unwrap()
  }

  if (me) {
    return <Navigate replace to={ROUTES.base} />
  }

  return (
    <>
      <SignIn onSubmit={onSubmit} />
    </>
  )
}
