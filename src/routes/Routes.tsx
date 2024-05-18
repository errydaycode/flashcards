import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CheckEmail } from '@/components/auth/checkEmail/CheckEmail'
import { CreateNewPassword } from '@/components/auth/createPassword'
import { ForgotPassword } from '@/components/auth/forgotPassword'
import { SignIn } from '@/components/auth/sign-in'
import { SignUp } from '@/components/auth/sign-up'
import { PersonalInformation } from '@/components/ui/personalInformation/PersonalInformation'
import { DecksPage } from '@/pages/decks'

const ROUTES = {
  base: '/',
  checkEmail: 'check-email',
  createPassword: '/create-password',
  forgotPassword: '/forgot',
  personalInformation: '/personal-information',
  singIn: '/sing-in',
  singUp: '/sing-up',
}

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn onSubmit={() => {}} />,
    path: ROUTES.singIn,
  },
  {
    element: <SignUp onSubmit={() => {}} />,
    path: ROUTES.singUp,
  },
  {
    element: <ForgotPassword />,
    path: ROUTES.forgotPassword,
  },
  {
    element: <CreateNewPassword onSubmit={() => {}} />,
    path: ROUTES.createPassword,
  },
  {
    element: <CheckEmail email={'sadsa@mail.com'} />,
    path: ROUTES.checkEmail,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: ROUTES.base,
  },
  {
    element: <PersonalInformation onSubmit={() => {}} />,
    path: ROUTES.personalInformation,
  },
]

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.singIn} />
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
