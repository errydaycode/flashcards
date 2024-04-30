import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import styles from './input.module.scss'

import { Typography } from './../typography/Typography'

export type InputProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, error, label, placeholder, width }: InputProps) => {
  const classNames = {
    input: clsx(styles.inputContainer, !!error && styles.error, className),
  }

  return (
    <div className={styles.main} style={{ width }}>
      {label && (
        <div>
          <Typography className={styles.label} variant={'body2'}>
            {label}
          </Typography>
        </div>
      )}
      <div className={classNames.input}>
        <input
          className={styles.input}
          placeholder={placeholder}
          style={error ? { color: 'var( --color-danger-300 )' } : {}}
          type={'text'}
        />
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
