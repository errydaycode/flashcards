import { FC, useState } from 'react'

import avatar from '@/assets/image/avatar.svg'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useImageUpload } from '@/hooks/useImageUpload'

import styles from './personalInformation.module.scss'

export interface Props {
  onSubmit: (data: any) => void
}

export const PersonalInformation: FC<Props> = ({ onSubmit }) => {
  const { handleImageChange, image } = useImageUpload(avatar)
  const [isShowInput, setIsShowInput] = useState<boolean>(false)
  const [nickname, setNickname] = useState('Ivan')

  const handleIsShowInputClick = () => {
    setIsShowInput(!isShowInput)
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Typography className={styles.title} variant={'h1'}>
        Personal Information
      </Typography>

      <img alt={'avatar'} className={styles.avatar} src={image} />

      <label className={styles.customFileInput} htmlFor={'avatarInput'}>
        <Icon
          fill={'none'}
          height={'16'}
          iconId={'editOutline'}
          viewBox={'0 0 16 16'}
          width={'16'}
        />
      </label>
      <input
        className={styles.avatarInput}
        id={'avatarInput'}
        onChange={handleImageChange}
        type={'file'}
      />

      <div className={styles.inputWrapper}>
        {!isShowInput && (
          <Typography style={{ paddingLeft: '25px' }} variant={'h2'}>
            {nickname}
          </Typography>
        )}
        {isShowInput ? (
          <Input
            autoFocus
            label={'Nickname'}
            onBlur={handleIsShowInputClick}
            onValueChange={setNickname}
            value={nickname}
          />
        ) : (
          <Button className={styles.editButton} onClick={handleIsShowInputClick}>
            <Icon
              fill={'none'}
              height={'16'}
              iconId={'editOutline'}
              viewBox={'0 0 16 16'}
              width={'16'}
            />
          </Button>
        )}
      </div>

      <Typography className={styles.email} variant={'body2'}>
        ivanRulit82@gmail.com
      </Typography>

      <Button variant={'secondary'}>
        <Icon fill={'none'} height={'16'} iconId={'logout'} viewBox={'0 0 16 16'} width={'16'} />
        Logout
      </Button>
    </form>
  )
}
