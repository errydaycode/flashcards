import { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DecksListFilter } from '@/components/ui/decksListFilter/DecksListFilter'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { DecksTable } from '@/pages/decksTable/DecksTable'
import { useGetDecksQuery } from '@/service/flashcards-api'

import styles from '@/pages/mainPage/mainPage.module.scss'

export function DecksPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''

  const handleSearchChange = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams)
  }
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const setItemsPerPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+e.currentTarget.value)
  }

  const { data, error, isLoading } = useGetDecksQuery({
    itemsPerPage,
    name: search,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1>Erorr: {JSON.stringify(error)}</h1>
  }

  return (
    <div>
      <div className={styles.mainPage}>
        <DecksListFilter changeValue={handleSearchChange} search={search} />
        <DecksTable data={data?.items} />
        <Pagination
          changeValue={setItemsPerPageHandler}
          pageSize={2}
          totalCount={45}
          value={itemsPerPage}
        />
      </div>
    </div>
  )
}
