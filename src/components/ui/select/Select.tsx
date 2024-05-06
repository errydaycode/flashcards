import { FC, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import style from 'src/components/ui/select/select.module.scss'

interface Props {
  label?: string
}

export const Selects: FC<Props> = ({ label }) => {
  const [value, setValue] = useState('100')
  const [open, setOpen] = useState(false)

  return (
    <Select.Root onOpenChange={setOpen} onValueChange={setValue} value={value}>
      {label && <div className={style.selectName}>{label}</div>}
      <Select.Trigger className={style.SelectTrigger}>
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={style.SelectContent} position={'popper'}>
          <Select.Viewport className={style.SelectViewport}>
            <Select.Group>
              <Select.Item className={style.SelectItem} value={'5'}>
                5
              </Select.Item>
              <Select.Item className={style.SelectItem} value={'10'}>
                10
              </Select.Item>
              <Select.Item className={style.SelectItem} value={'100'}>
                100
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
