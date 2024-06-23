import { useState } from 'react'

import logo from '@/assets/image/Logo.png'
import avatar from '@/assets/image/avatar.svg'
import { Button } from '@/components/ui/button'
import {
  DropDownContent,
  DropDownItem,
  DropDownMenu,
  DropDownSeparator,
} from '@/components/ui/dropDown'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { ROUTES } from '@/routes'

import styles from './header.module.scss'

type IsLogin = {
  isLogin: boolean
  logout: () => void
}

export const Header = ({ isLogin, logout }: IsLogin) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <img alt={'logo'} src={logo} />
      {isLogin ? (
        <div className={styles.profileLink}>
          <DropDownMenu
            defaultOpen={isOpen}
            trigger={
              <Button as={'a'} onClick={toggleDropDown} variant={'link'}>
                <Typography className={styles.profileName} variant={'subtitle1'}>
                  Ivan
                </Typography>
                <img alt={'avatar'} src={avatar} />
              </Button>
            }
          >
            <DropDownItem onSelect={() => {}}>
              <DropDownContent icon={<Icon iconId={'layer2'} />} name={'Edit'} />
            </DropDownItem>
            <DropDownSeparator />
            <DropDownItem onSelect={logout}>
              <DropDownContent icon={<Icon iconId={'layer1'} />} name={'Sign out'} />
            </DropDownItem>
          </DropDownMenu>
        </div>
      ) : (
        <Button as={'a'} href={ROUTES.singIn}>
          Sign In
        </Button>
      )}
    </header>
  )
}
