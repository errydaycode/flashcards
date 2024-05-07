import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Icon } from '@/components/ui/icon'
import { clsx } from 'clsx'

import styles from './input.module.scss'

import { Typography } from './../typography/Typography'

export type InputProps = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  search?: boolean
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      label,
      onChange,
      onValueChange,
      type,
      width,
      ...rest
    }: InputProps,
    ref
  ) => {
    const classNames = {
      input: clsx(styles.inputContainer, !!error && styles.error, className),
      label: clsx(styles.label, disabled && styles.disabled),
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(e.currentTarget.value)
      onChange?.(e)
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
            onChange={onInputChange}
            ref={ref}
            style={error ? { color: 'var( --color-danger-300 )' } : {}}
            type={type}
            {...rest}
          />
          {type === 'password' && (
            <button
              className={styles.imageButton}
              disabled={disabled}
              onClick={() => {
                alert('btn')
              }}
            >
              <Icon height={'20'} iconId={'openedEye'} viewBox={'0 0 20 20'} width={'20'} />
            </button>
          )}
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
)
