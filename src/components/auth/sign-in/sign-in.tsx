import { useForm } from 'react-hook-form'

import { emailSchema, passwordSchema } from '@/common/utils/zod-schemas'
import { FormCheckbox } from '@/components/ui/form-utils/form-checkbox'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})

type Props = {
  onSubmit: (values: FormValues) => void
}

export const SignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput control={control} label={'email'} name={'email'} />
        <FormInput control={control} label={'password'} name={'password'} />
        <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
