import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { DecksListFilter } from '@/components/ui/decksListFilter/DecksListFilter'
import { Input } from '@/components/ui/input'
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
  const { data, error, isLoading } = useGetDecksQuery({
    itemsPerPage,
    name: search,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <h1>Eror: {JSON.stringify(error)}</h1>
  }

  return (
    <div>
      <Input label={'поиск по названию'} onValueChange={handleSearchChange} value={search} />
      <select onChange={e => setItemsPerPage(+e.currentTarget.value)} value={itemsPerPage}>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
      <div className={styles.mainPage}>
        <DecksListFilter />
        <DecksTable data={data?.items} />
        <Pagination pageSize={2} totalCount={45} />
      </div>
    </div>
  )
}
