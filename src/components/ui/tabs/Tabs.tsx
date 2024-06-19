import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

import { Typography } from './../typography'

type TabProps = {
  disabled?: boolean
  label?: string
  onChange?: (value: string) => void
  options: OptionsType[]
  value?: string
}
export type OptionsType = {
  title: string
  value: string
}

export const Tab: FC<TabProps> = ({ disabled, label, onChange, options, value }) => (
  <Tabs.Root className={s.tabsRoot} onValueChange={onChange} value={value}>
    {label && (
      <Typography as={'label'} variant={'body2'}>
        {label}
      </Typography>
    )}
    <Tabs.List className={s.tabsList}>
      {options.map(option => (
        <Tabs.Trigger
          className={s.tabsTrigger}
          disabled={disabled}
          key={option.value}
          value={option.value}
        >
          <Typography variant={'body1'}>{option.title}</Typography>
        </Tabs.Trigger>
      ))}
    </Tabs.List>
  </Tabs.Root>
)
