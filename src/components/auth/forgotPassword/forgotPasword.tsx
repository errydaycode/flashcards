import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

type FormValues = z.infer<typeof radioSchema>

const radioSchema = z.object({
  email: z.string().email('Email is required'),
})

type Props = {}

export const ForgotPassword = ({}: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(radioSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data.email)
  }

  return (
    <>
      <Card className={s.card}>
        <Typography as={'h2'} variant={'large'}>
          Forgot your password
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <FormInput control={control} label={'Email'} name={'email'} />
          <Typography as={'p'} className={s.form__description} variant={'subtitle1'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button fullWidth type={'submit'}>
            Send Instruction
          </Button>
        </form>
        <div className={s.bottom}>
          <Typography as={'p'} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Button as={'a'} className={s.logIn} variant={'link'}>
            Try logging in
          </Button>
        </div>
      </Card>
    </>
  )
}
