import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import style from './tabs.module.scss'

export const TabSwitcher = () => (
  <Tabs.Root>
    <Tabs.List className={style.TabsList}>
      <Tabs.Trigger className={style.TabsTrigger} disabled value={'tab1'}>
        <Typography variant={'body1'}>Switcher</Typography>
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab2'}>
        <Typography variant={'body1'}>Switcher</Typography>
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab3'}>
        <Typography variant={'body1'}>Switcher</Typography>
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab4'}>
        <Typography variant={'body1'}>Switcher</Typography>
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab5'}>
        <Typography variant={'body1'}>Switcher</Typography>
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
)
