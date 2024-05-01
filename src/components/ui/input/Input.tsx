import { ComponentPropsWithoutRef } from 'react'

import Eye from '@/icons/icons input/eye.svg'
import { clsx } from 'clsx'

import styles from './input.module.scss'

import { Typography } from './../typography/Typography'

export type InputProps = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  disabled,
  error,
  label,
  placeholder,
  type,
  width,
}: InputProps) => {
  const classNames = {
    input: clsx(styles.inputContainer, !!error && styles.error, className),
    label: clsx(styles.label, disabled && styles.disabled),
  }

  return (
    <div className={clsx(styles.main, disabled && styles.disabled)} style={{ width }}>
      {label && (
        <div>
          <Typography className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        </div>
      )}
      <div className={classNames.input}>
        <input
          className={styles.input}
          disabled={disabled}
          placeholder={placeholder}
          style={error ? { color: 'var( --color-danger-300 )' } : {}}
          type={type}
        />
        {type === 'password' && <img alt={'Eye'} src={Eye} />}
      </div>

      {error && (
        <div style={{ margin: '4px 0' }}>
          <Typography style={{ color: 'var( --color-danger-300 )' }} variant={'caption'}>
            {error}
          </Typography>
        </div>
      )}
    </div>
  )
}
