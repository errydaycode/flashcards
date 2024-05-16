import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewPassword.module.scss'

type FormValue = z.infer<typeof newPasswordSchema>

const newPasswordSchema = z.object({
  password: z.string().min(1, 'Enter password'),
})

type Props = {
  onSubmit: (data: FormValue) => void
}

export const CreateNewPassword = ({}: Props) => {
  const { control, handleSubmit } = useForm<FormValue>({
    defaultValues: { password: '' },
    resolver: zodResolver(newPasswordSchema),
  })

  const onSubmit = (data: FormValue) => {
    console.log(data.password)
  }

  return (
    <>
      <Card className={s.card}>
        <Typography as={'h1'} variant={'h1'}>
          Create new password
        </Typography>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.password}>
            <FormInput control={control} label={'Password'} name={'password'} type={'password'} />
          </div>
          <Typography className={s.instructions} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'}>
            Create new password
          </Button>
        </form>
      </Card>
    </>
  )
}
