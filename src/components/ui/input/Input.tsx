import { ComponentPropsWithoutRef } from 'react'

export type TextFieldProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  search?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = () => {
  return <input placeholder={'Enter Your Name'} type={'text'} />
}
