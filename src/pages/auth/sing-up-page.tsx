import { SignUp } from '@/components/auth/sign-up'
import { ROUTES, router } from '@/routes'
import { createUser } from '@/service/auth/auth.types'
import { useCreateUserMutation } from '@/service/auth/authService'

export const SingUpPage = () => {
  const [singUp] = useCreateUserMutation()

  const onSubmit = async (data: createUser) => {
    const { email, password, sendConfirmationEmail, ...rest } = data

    const registrationData = {
      email,
      password,
      sendConfirmationEmail: true,
      ...rest,
    }

    await singUp(registrationData).unwrap()
    await router.navigate(ROUTES.base)
  }

  return <SignUp onSubmit={onSubmit} />
}
