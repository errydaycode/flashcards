import { FC, useState } from 'react'

import avatar from '@/assets/image/avatar.svg'
import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/fileUploder'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import styles from './personalInformation.module.scss'

export interface Props {
  onSubmit: (data: any) => void
}

export const PersonalInformation: FC<Props> = ({ onSubmit }) => {
  const [isShowInput, setIsShowInput] = useState<boolean>(false)
  const [nickname, setNickname] = useState('Ivan')
  const [file, setFile] = useState<File | null>(null)

  const handleIsShowInputClick = () => {
    setIsShowInput(!isShowInput)
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Typography className={styles.title} variant={'h1'}>
        Personal Information
      </Typography>

      <img
        alt={'avatar'}
        className={styles.avatar}
        src={file ? URL.createObjectURL(file) : avatar}
      />

      <FileUploader
        className={styles.customFileInput}
        id={'avatarInput'}
        name={'avatarInput'}
        setFile={setFile}
        trigger={
          <Icon
            fill={'none'}
            height={'16'}
            iconId={'editOutline'}
            viewBox={'0 0 16 16'}
            width={'16'}
          />
        }
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
