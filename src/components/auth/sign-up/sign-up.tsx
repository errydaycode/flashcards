import { useForm } from 'react-hook-form'

import { emailSchema, passwordSchema } from '@/common/utils/zod-schemas'
import { Card } from '@/components/ui/card'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { Typography } from '@/components/ui/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Button } from '../../ui/button'

type FormValues = z.infer<typeof signUpSchema>

const signUpSchema = z
  .object({
    confirmPassword: passwordSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // Указываем поле, которое не прошло валидацию
  })

type Props = {
  onSubmit: (values: FormValues) => void
}

export const SignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}

      <Card className={s.card}>
        <Typography className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.form}>
            <FormInput control={control} label={'Email'} name={'email'} />
            <FormInput control={control} label={'Password'} name={'password'} type={'password'} />
            <FormInput
              control={control}
              label={'Confirm Password'}
              name={'confirmPassword'}
              type={'password'}
            />
          </div>
          <Button fullWidth style={{ marginTop: '50px' }} type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography className={s.questionText} variant={'body2'}>
          {`Already have an account?`}
        </Typography>
        <Typography as={'a'} className={s.signInLink} href={`/sing-in`} variant={'link1'}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
