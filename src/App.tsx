import { CheckBox } from '@/components/ui/checkBox/CheckBox'
import { Header } from '@/components/ui/header/Header'
import { Input } from '@/components/ui/input'
import { NewCardModal } from '@/components/ui/newCardModal/NewCardModal'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { CustomSlider } from '@/components/ui/slider/Slider'
import { TabSwitcher } from '@/components/ui/tabs/Tabs'

export function App() {
  return (
    <div>
      <Header />
      <TabSwitcher />
      <CheckBox label={'checkbox'} />
      <div style={{ width: '200px' }}>
        <Input label={'email'} />
      </div>
      <Pagination pageSize={2} totalCount={45} />
      <CustomSlider />
      <NewCardModal />
    </div>
  )
}
