import React, { FC, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import style from './select.module.scss'

export type PropsSelect = {
  label?: string
  onChangeValue?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  value?: number
}

export const Selects: FC<PropsSelect> = ({ label, onChangeValue, value }) => {
  // const [value, setValue] = useState('10')
  const [open, setOpen] = useState(true)

  const handleValueChange = (value: string) => {
    if (onChangeValue) {
      const event = {
        currentTarget: {
          value,
        },
      } as React.ChangeEvent<HTMLSelectElement>

      onChangeValue(event)
    }
  }
  const handleOpenChange = (open: boolean) => {
    setOpen(open)
  }

  return (
    <div className={style.selectWrapper}>
      <Select.Root
        onOpenChange={handleOpenChange}
        onValueChange={handleValueChange}
        value={String(value)}
      >
        {open && (
          <div className={style.selectName}>
            <Typography variant={'body2'}>{label}</Typography>
          </div>
        )}
        <Select.Trigger className={style.SelectTrigger}>
          <Select.Value aria-label={String(value)}>{value}</Select.Value>
          <Select.Icon>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className={style.SelectContent} position={'popper'}>
            <Select.Viewport className={style.SelectViewport}>
              <Select.Group>
                <Select.Item className={style.SelectItem} value={'5'}>
                  <Typography variant={'body1'}>5</Typography>
                </Select.Item>
                <Select.Item className={style.SelectItem} value={'10'}>
                  <Typography variant={'body1'}>10</Typography>
                </Select.Item>
                <Select.Item className={style.SelectItem} value={'20'}>
                  <Typography variant={'body1'}>20</Typography>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
