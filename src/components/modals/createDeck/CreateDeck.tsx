import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/fileUploder/FileUploader'
import { FormCheckbox } from '@/components/ui/form-utils/form-checkbox'
import { FormInput } from '@/components/ui/form-utils/form-input'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation } from '@/service/decks/decks-api'
import { z } from 'zod'

import s from './createDeck.module.scss'

type Props = {
  onClose: () => void
}

const newDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(30),
})

type FormValues = z.infer<typeof newDeckSchema>

export const CreateDeck = ({ onClose }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      isPrivate: true,
      name: '',
    },
  })
  const [_, setImg] = useState<File | null>(null)
  const [createDeck] = useCreateDeckMutation()

  const onSubmit = (data: FormValues) => {
    createDeck(data)
    onClose()
  }

  return (
    <div className={s.positionModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={s.root}>
          <div className={s.header}>
            <Typography style={{ fontWeight: '700px' }} variant={'large'}>
              Add new Deck
            </Typography>
            <button onClick={onClose}>
              <Icon height={'12'} iconId={'vector'} viewBox={'0 0 12 12'} width={'12'} />
            </button>
          </div>
          <div className={s.body}>
            <FormInput control={control} label={'Name Pack'} name={'name'} placeholder={'Name'} />
            <FileUploader
              setFile={setImg}
              trigger={
                <Button as={'span'} fullWidth variant={'secondary'}>
                  Upload image
                </Button>
              }
            />
            <FormCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
          </div>
          <div className={s.footer}>
            <Button onClick={onClose} variant={'secondary'}>
              Cancel
            </Button>
            <Button variant={'primary'}>Add New pack</Button>
          </div>
        </Card>
      </form>
    </div>
  )
}
