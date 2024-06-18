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
import { PersonalInformation } from '@/components/ui/personalInformation/PersonalInformation'
import { SingInPage } from '@/pages/auth/sing-in-page'
import { SingUpPage } from '@/pages/auth/sing-up-page'
import { Card } from '@/pages/card/Card'
import { DecksPage } from '@/pages/decks'
import { useGetMeQuery } from '@/service/auth/authService'

export const ROUTES = {
  base: '/',
  cards: '/cards/:id',
  checkEmail: '/check-email',
  createPassword: '/create-password',
  forgotPassword: '/forgot',
  personalInformation: '/personal-information',
  singIn: '/sing-in',
  singUp: '/sing-up',
}

const publicRoutes: RouteObject[] = [
  {
    element: <SingInPage />,
    path: ROUTES.singIn,
  },
  {
    element: <SingUpPage />,
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
    element: <Card />,
    path: ROUTES.cards,
  },
  {
    element: <PersonalInformation onSubmit={() => {}} />,
    path: '',
  },
]

function PrivateRoutes() {
  const { data } = useGetMeQuery()
  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.singIn} />
}

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
