import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CreateDeck } from '@/components/modals/createDeck/CreateDeck'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header/Header'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { CardHeader } from '@/pages/card/cardHeader'
import { CardsTables } from '@/pages/card/cardTables'
import { useGetDeckCardsQuery } from '@/service/decks/decks-api'

import s from './cards.module.scss'

const item: string = 'My Deck'

export const Card = () => {
  const { id } = useParams<{ id: string }>()
  const packId = id as string
  const [openModal, setOpenModal] = useState(false)
  const { data } = useGetDeckCardsQuery({
    args: {},
    id: packId as string,
  })
  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div>
      <Header isLogin />
      <div className={s.container}>
        <div className={s.backToCard}>
          <Link className={s.linkBack} to={`/`}>
            <Icon height={'10'} iconId={'goToBack'} viewBox={'0 0 12 10'} width={'12'} />
            <Typography variant={'body2'}>Back to Decks List</Typography>
          </Link>
        </div>
        <div className={s.menu}>
          <div>
            <CardHeader item={item} />
          </div>
          <Button onClick={handleOpenModal}>Add New Deck</Button>
          {openModal && <CreateDeck onClose={handleOpenModal} />}
        </div>
        <div className={s.inputSearch}>
          <Input placeholder={'Input search'} type={'search'} />
        </div>
        <div className={s.tableCards}>
          <CardsTables cards={data?.items} />
        </div>
      </div>
    </div>
  )
}
