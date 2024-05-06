import { CheckBox } from '@/components/ui/checkBox/CheckBox'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Selects } from '@/components/ui/select/Select'
import { TabSwitcher } from '@/components/ui/tabs/Tabs'

export function App() {
  return (
    <div style={{ paddingLeft: '20px' }}>
      <TabSwitcher />
      <CheckBox disabled label={'checkbox'} />
      <CheckBox label={'checkbox'} />
      <Selects />
      <div style={{ width: '200px' }}>
        <Input label={'email'} />
      </div>
      <Pagination pageSize={10} totalCount={5} />
    </div>
  )
}
