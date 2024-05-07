import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckBoxProps } from '@/components/ui/checkBox/CheckBox'

type Props<T extends FieldValues> = Omit<
  CheckBoxProps,
  'checked' | 'name' | 'onBlur' | 'onCheckedChange'
> &
  UseControllerProps<T>

export function FormCheckbox<T extends FieldValues>({ control, name, ...rest }: Props<T>) {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name,
  })

  return <CheckBox {...rest} {...field} checked={value} onCheckedChange={onChange} />
}
