import { ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import styles from './input.module.scss'

import { Typography } from './../typography/Typography'

export type InputProps = {
  errorMessage?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = ({ className, label, placeholder }: InputProps) => {
  const classNames = {
    input: clsx(styles.inputContainer, className),
  }

  return (
    <div className={styles.main}>
      {label && (
        <div>
          <Typography className={styles.label} variant={'body2'}>
            {label}
          </Typography>
        </div>
      )}
      <div className={classNames.input}>
        <input className={styles.input} placeholder={placeholder} type={'text'} />
      </div>
    </div>
  )
}
