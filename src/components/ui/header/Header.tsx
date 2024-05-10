import avatar from '@/assets/image/avatar.svg'
import logo from '@/assets/image/Logo.png'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import styles from './header.module.scss'

type IsLogin = {
  isLogin: boolean
}

export const Header = ({ isLogin }: IsLogin) => {
  return (
    <header className={styles.header}>
      <img alt={'logo'} src={logo} />
      {!isLogin ? (
        <Button className={styles.headerNavigation} variant={'secondary'}>
          Sign In
        </Button>
      ) : (
        <div className={styles.profileLink}>
          <Typography variant={'subtitle1'}>Ivan</Typography>
          <img alt={'avatar'} src={avatar} />
        </div>
      )}
    </header>
  )
}
