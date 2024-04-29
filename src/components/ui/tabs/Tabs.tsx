import * as Tabs from '@radix-ui/react-tabs'

import style from './Tabs.module.scss'

export const TabSwitcher = () => (
  <Tabs.Root>
    <Tabs.List className={style.TabsList}>
      <Tabs.Trigger className={style.TabsTrigger} disabled value={'tab1'}>
        Switcher
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab2'}>
        Switcher
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab3'}>
        Switcher
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab4'}>
        Switcher
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab5'}>
        Switcher
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
)
