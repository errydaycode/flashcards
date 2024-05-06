import { FC, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import style from './checkBox.module.scss'

interface Props {
  disabled?: boolean
  label?: string
}

export const CheckBox: FC<Props> = ({ disabled, label }) => {
  const [checked, setChecked] = useState<boolean>(false)

  const onCheckedChange = () => {
    setChecked(!checked)
  }

  return (
    <div className={style.checkboxWrapper}>
      <div className={disabled ? style.disabledWrapper : style.checkbox} tabIndex={1}>
        <Checkbox.Root
          className={disabled ? style.disabled : style.checkboxRoot}
          disabled={disabled}
          id={'c1'}
          onClick={onCheckedChange}
        >
          <Checkbox.Indicator className={style.checkboxIndicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
      <label className={disabled ? style.disableLabel : style.label} htmlFor={'c1'}>
        <Typography variant={'body2'}>{label}</Typography>
      </label>
    </div>
  )
}
