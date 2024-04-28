import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.css'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = ({ className, fullWidth, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...rest}
    />
  )
}
