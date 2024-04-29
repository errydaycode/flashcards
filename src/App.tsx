import { CheckBox } from '@/components/ui/checkBox/CheckBox'
import { TabSwitcher } from '@/components/ui/tabs/Tabs'

export function App() {
  return (
    <div>
      <TabSwitcher />
      <CheckBox disabled label={'checkbox'} />
      <CheckBox label={'checkbox'} />
    </div>
  )
}
