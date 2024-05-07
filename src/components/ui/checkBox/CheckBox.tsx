import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import style from './checkBox.module.scss'

export type CheckBoxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onCheckedChange?: (checked: boolean) => void
}

export const CheckBox = forwardRef<ElementRef<typeof Checkbox.Root>, CheckBoxProps>(
  ({ checked, className, disabled, label, onCheckedChange }, ref) => {
    return (
      <div className={style.checkboxWrapper}>
        <div className={disabled ? style.disabledWrapper : style.checkbox} tabIndex={1}>
          <Checkbox.Root
            checked={checked}
            className={disabled ? style.disabled : style.checkboxRoot}
            disabled={disabled}
            id={'c1'}
            onCheckedChange={onCheckedChange}
            ref={ref}
          >
            <Checkbox.Indicator className={style.checkboxIndicator}>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
        </div>
        <label className={disabled ? style.disableLabel : style.label && className} htmlFor={'c1'}>
          <Typography variant={'body2'}>{label}</Typography>
        </label>
      </div>
    )
  }
)
