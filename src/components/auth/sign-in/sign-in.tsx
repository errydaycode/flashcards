import { useForm } from 'react-hook-form'

import { emailSchema, passwordSchema } from '@/common/utils/zod-schemas'
import { Card } from '@/components/ui/card'
import { FormCheckbox } from '@/components/ui/form-utils/form-checkbox'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

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

      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form}>
            <FormInput control={control} label={'Email'} name={'email'} />
            <FormInput control={control} label={'Password'} name={'password'} type={'password'} />
          </div>
          <FormCheckbox
            className={s.checkbox}
            control={control}
            label={'Remember me'}
            name={'rememberMe'}
          />
          <Button type={'submit'}>Submit</Button>
        </form>
      </Card>
    </>
  )
}
