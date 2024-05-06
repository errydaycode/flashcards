import { ChangeEvent, FC, useState } from 'react'

import mask from '@/assets/image/Mask.png'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import styles from '@/components/ui/newCardModal/newCardModal.module.scss'

interface CardInfoProps {
  title: string
}

export const NewCardInfo: FC<CardInfoProps> = ({ title }) => {
  const [image, setImage] = useState<string>(mask) // предполагается, что mask - это строка, представляющая изображение по умолчанию

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file instanceof File) {
      const reader = new FileReader()

      reader.onload = () => {
        const imageData = reader.result as string

        setImage(imageData)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.cardInfoWrapper}>
      <Typography className={styles.title} variant={'subtitle2'}>
        {title}
      </Typography>
      <Input label={'Question?'} placeholder={'Name'} />

      <img
        alt={'Uploaded Image'}
        className={styles.cardImage}
        src={image}
        style={{ height: '119px', objectFit: 'fill', width: '100%' }}
      />
      <label className={styles.changeImageInput} htmlFor={'inputFile' + title}>
        <Icon height={'16'} iconId={'uploadImage'} viewBox={'0 0 17 16'} width={'17'} />
        <Typography variant={'subtitle2'}>Change Image</Typography>
      </label>
      <input id={'inputFile' + title} onChange={handleImageChange} type={'file'} />
    </div>
  )
}
