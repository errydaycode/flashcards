import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { NewCardInfo } from '@/components/ui/newCardModal/NewCardInfo'
import { Typography } from '@/components/ui/typography'

import styles from './newCardModal.module.scss'

export const NewCardModal = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalHeader}>
        <Typography variant={'h3'}>Add New Card</Typography>
        <Button className={styles.closeButton} variant={'secondary'}>
          <Icon height={'24'} iconId={'close'} viewBox={'0 0 24 24'} width={'24'} />
        </Button>
      </div>
      <NewCardInfo key={'hi'} title={'Question:'} />
      <NewCardInfo key={'h1e'} title={'Answer:'} />
      <div className={styles.buttonWrapper}>
        <Button variant={'secondary'}>Cancel</Button>
        <Button>Add New Card</Button>
      </div>
    </div>
  )
}
