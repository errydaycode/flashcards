import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

type Props<T extends FieldValues> = Omit<
  InputProps,
  'error' | 'name' | 'onBlur' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export function FormInput<T extends FieldValues>({ control, name, ...rest }: Props<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return <Input {...rest} {...field} error={error?.message} />
}
