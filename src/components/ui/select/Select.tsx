import { useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import style from './Select.module.scss'

export const Selects = () => {
  const [value, setValue] = useState('Select-box')
  const [open, setOpen] = useState(false)

  return (
    <Select.Root onOpenChange={setOpen} onValueChange={setValue} value={value}>
      <div className={style.selectName}>Select-box</div>
      <Select.Trigger className={style.SelectTrigger}>
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={style.SelectContent}>
          <Select.Viewport className={style.SelectViewport}>
            <Select.Group>
              <Select.Item className={style.SelectItem} value={'Select-box1'}>
                Select-box1
              </Select.Item>
              <Select.Item className={style.SelectItem} value={'Select-box-2'}>
                Select-box2
              </Select.Item>
              <Select.Item className={style.SelectItem} value={'Select-box-3'}>
                Select-box3
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
