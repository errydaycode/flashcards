import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useDecksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const currentPage = Number(searchParams.get('page')) || 1
  const itemsPerPage = Number(searchParams.get('items')) || 5
  const minCards = Number(searchParams.get('minCards')) || 0
  const maxCards = Number(searchParams.get('maxCards')) || 50

  const [rangeValue, setRangeValue] = useState<number[]>([minCards, maxCards])
  const changeMinMaxCard = (values: number[]) => {
    if (values[0] !== 0 || values[1] !== 50) {
      searchParams.set('minCards', values[0].toString())
      searchParams.set('maxCards', values[1].toString())
    } else {
      searchParams.delete('minCards')
      searchParams.delete('maxCards')
    }
    setRangeValue(values)
    setSearchParams(searchParams)
  }

  const onChangePage = (page: number) => {
    searchParams.set('page', page.toString())
    setSearchParams(searchParams, { replace: true })
  }

  const changeItemsPerPage = (items: string) => {
    searchParams.set('items', items)
    searchParams.set('page', '1')
    setSearchParams(searchParams, { replace: true })
  }

  const changeValue = (value: string) => {
    if (value.length) {
      searchParams.set('search', value)
    } else {
      searchParams.delete('search')
    }
    setSearchParams(searchParams, { replace: true })
  }

  return {
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
    setRangeValue,
  }
}
