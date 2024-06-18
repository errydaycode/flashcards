import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DecksListFilter } from '@/components/ui/decksListFilter/DecksListFilter'
import { Header } from '@/components/ui/header'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { DecksTable } from '@/pages/decks/decksTable/DecksTable'
import { useGetDecksQuery } from '@/service/decks/decks-api'

import styles from './deckPage.module.scss'

export function DecksPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [authorId, setAuthorId] = useState('')

  const handleSearchChange = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams, { replace: true })
  }

  const onChangePage = (page: number) => {
    // Установить новую страницу в параметрах поиска
    searchParams.set('page', String(page))
    setCurrentPage(page)
    setSearchParams(searchParams, { replace: true })
  }

  const setItemsPerPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.currentTarget.value)
  }

  const { data, error, isLoading } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage,
    name: search,
  })
  const filteredCardHandler = (id: string) => {
    setCurrentPage(1)
    const selectedDeck = data?.items.find(deck => deck.id === id)

    if (selectedDeck) {
      setAuthorId(selectedDeck.author.id)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1>Erorr: {JSON.stringify(error)}</h1>
  }

  return (
    <div>
      <Header isLogin />
      <div className={styles.mainPage}>
        <DecksListFilter
          changeValue={handleSearchChange}
          onChange={filteredCardHandler}
          search={search}
          setAuthorId={setAuthorId}
          value={authorId}
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
