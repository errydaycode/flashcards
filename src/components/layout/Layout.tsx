import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'
import { Spinner } from '@/components/ui/spinner'
import { ROUTES, router } from '@/routes'
import { useGetMeQuery, useLogoutMutation } from '@/service/auth/authService'

import s from './layout.module.scss'

export type ProfileData = {
  avatar?: string
  email: string
  name: string
}

export const Layout = () => {
  const { isError, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const isAuth = !isError

  const logoutHandler = () => {
    logout()

    return router.navigate(ROUTES.singIn)
  }

  return (
    <>
      <Header isLogin={isAuth} logout={logoutHandler} />
      <main className={s.main}>{isLoading ? <Spinner /> : <Outlet context={{ isAuth }} />}</main>
    </>
  )
}
