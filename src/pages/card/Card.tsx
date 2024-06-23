import { ChangeEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Page } from '@/components/Page'
import { CreateDeck } from '@/components/modals/createDeck/CreateDeck'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { CardHeader } from '@/pages/card/cardHeader'
import { CardsTables } from '@/pages/card/cardTables'
import { useGetMeQuery } from '@/service/auth/authService'
import { useGetDeckCardsQuery, useGetOneDeckQuery } from '@/service/decks/decks-api'

import s from './cards.module.scss'

export const Card = () => {
  const { id } = useParams<{ id: string }>()
  const packId = id as string
  const [openModal, setOpenModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const onChangePage = (page: number) => {
    setCurrentPage(page)
  }
  const setItemsPerPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.currentTarget.value)
  }

  const { data: me } = useGetMeQuery()

  const { data: deck } = useGetOneDeckQuery({
    id: packId || '',
  })
  const { data } = useGetDeckCardsQuery({
    args: {
      currentPage,
      itemsPerPage,
    },
    id: packId as string,
  })

  const isOwner = me?.id === deck?.userId

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <Page marginTop={'25px'}>
      <div className={s.container}>
        <div className={s.backToCard}>
          <Link className={s.linkBack} to={`/`}>
            <Icon height={'10'} iconId={'goToBack'} viewBox={'0 0 12 10'} width={'12'} />
            <Typography variant={'body2'}>Back to Decks List</Typography>
          </Link>
        </div>
        <div className={s.menu}>
          <div>
            <CardHeader isOwner={isOwner} item={deck?.name} />
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
        <div>
          <Pagination
            changeValue={setItemsPerPageHandler}
            currentPage={data?.pagination.currentPage || currentPage}
            onChangePage={onChangePage}
            pageSize={itemsPerPage}
            totalCount={data?.pagination.totalPages || 1}
            value={itemsPerPage}
          />
        </div>
      </div>
    </Page>
  )
}
