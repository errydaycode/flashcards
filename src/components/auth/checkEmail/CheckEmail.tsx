import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'

import s from './checkEmail.module.scss'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <>
      <Card className={s.card}>
        <Typography as={'h2'} variant={'large'}>
          Check Email
        </Typography>
        <Icon
          className={s.icon}
          height={'96'}
          iconId={'checkEmail'}
          viewBox={'0 0 96 96 '}
          width={'96'}
        />
        <Typography className={s.description} variant={'body2'}>
          We’ve sent an Email with instructions to example@mail.com {email}
        </Typography>
        <Button as={'a'} className={s.button} fullWidth type={'submit'}>
          Back to Sing In
        </Button>
      </Card>
    </>
  )
}
