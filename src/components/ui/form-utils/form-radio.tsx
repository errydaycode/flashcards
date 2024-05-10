import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup'

type Props<T extends FieldValues> = Omit<RadioGroupProps, 'onValueChange' | 'value'> &
  UseControllerProps<T>

export const FormRadioGroup = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} name={name} onValueChange={onChange} value={value} />
}
