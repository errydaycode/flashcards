import { Header } from '@/components/ui/header/Header'
import { MainPage } from '@/pages/mainPage/MainPage'

export function App() {
  return (
    <div>
      <Header isLogin />
      <MainPage />
    </div>
  )
}
