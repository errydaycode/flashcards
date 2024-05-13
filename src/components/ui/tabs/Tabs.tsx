import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import style from './tabs.module.scss'

export const TabSwitcher = () => (
  <Tabs.Root className={style.Root}>
    <Tabs.List className={style.TabsList}>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab1'}>
        <Typography variant={'body1'}>My Cards</Typography>
      </Tabs.Trigger>
      <Tabs.Trigger className={style.TabsTrigger} value={'tab2'}>
        <Typography variant={'body1'}>All Cards</Typography>
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
)
