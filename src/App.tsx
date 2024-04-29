import { CheckBox } from '@/components/ui/checkBox/CheckBox'
import { Selects } from '@/components/ui/select/Select'
import { TabSwitcher } from '@/components/ui/tabs/Tabs'

export function App() {
  return (
    <div>
      <TabSwitcher />
      <CheckBox disabled label={'checkbox'} />
      <CheckBox label={'checkbox'} />
      <Selects />
    </div>
  )
}
