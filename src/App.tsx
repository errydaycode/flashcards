import { CheckBox } from '@/components/ui/checkBox/CheckBox'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Selects } from '@/components/ui/select/Select'
import { TabSwitcher } from '@/components/ui/tabs/Tabs'

export function App() {
  return (
    <div>
      <TabSwitcher />
      <CheckBox disabled label={'checkbox'} />
      <CheckBox label={'checkbox'} />
      <Selects />
      <div style={{ width: '200px' }}>
        <Input label={'email'} />
      </div>
      <Pagination pageSize={2} totalCount={45} />
    </div>
  )
}
