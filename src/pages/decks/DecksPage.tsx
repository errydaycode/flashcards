import { ChangeEvent, useState } from 'react'

import { useDecksSearchParams } from '@/common/hooks/useDecksSearchParams'
import { DecksListFilter } from '@/components/ui/decksListFilter/DecksListFilter'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { DecksTable } from '@/pages/decks/decksTable/DecksTable'
import { useGetMeQuery } from '@/service/auth/authService'
import { useGetDecksQuery } from '@/service/decks/decks-api'

import styles from './deckPage.module.scss'

export function DecksPage() {
  const {
    changeItemsPerPage,
    changeMinMaxCard,
    changeValue,
    currentPage,
    itemsPerPage,
    maxCards,
    minCards,
    onChangePage,
    rangeValue,
    search,
  } = useDecksSearchParams()

  const [currentTab, setCurrentTab] = useState('all')
  const { data: me } = useGetMeQuery()
  const currentUserId = me?.id
  const authorId = currentTab === 'my' ? currentUserId : undefined
  const { data, error, isLoading } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: search,
  })

  const handleTabChange = (tab: string) => {
    onChangePage(1)
    setCurrentTab(tab)
  }
  const setItemsPerPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    changeItemsPerPage(e.currentTarget.value)
  }
  const clearFilterHandler = () => {
    changeMinMaxCard([0, 50])
    setCurrentTab('all')
    changeValue('')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1>Error: {JSON.stringify(error)}</h1>
  }

  return (
    <div>
      <Header isLogin />
      <div className={styles.mainPage}>
        <DecksListFilter
          changeMinMaxCard={changeMinMaxCard}
          changeValue={changeValue}
          clearFilterHandler={clearFilterHandler}
          onChange={handleTabChange}
          rangeValue={rangeValue}
          search={search}
          value={currentTab}
        />

        <DecksTable data={data?.items} />

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
  )
}
