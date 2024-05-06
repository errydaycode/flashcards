import React, { FC, useState } from 'react'

import { Selects } from '@/components/ui/select/Select'
import { paginationRange } from '@/utils'
import { clsx } from 'clsx'

import style from 'src/components/ui/pagination/pagination.module.scss'

interface Props {
  pageSize: number
  totalCount: number
}

export const Pagination: FC<Props> = ({ pageSize = 2, totalCount = 45 }) => {
  const [page, setPage] = useState(1)
  const totalPage: number = Math.ceil(totalCount / pageSize)
  const pages = paginationRange(totalPage, page, 1)

  const onClickPage = (e: React.SyntheticEvent<HTMLElement>) => {
    const datasetValue = e.currentTarget.dataset.page

    if (datasetValue === ' ...') {
      return setPage(totalPage)
    } else if (datasetValue === '... ') {
      return setPage(1)
    }

    if (datasetValue) {
      setPage(+datasetValue)
    }
  }

  const onClickNextPage = () => {
    setPage(prevState => {
      return prevState === 1 ? 1 : prevState - 1
    })
  }

  const onClickPrevPage = () => {
    setPage(prevState => {
      return prevState === totalPage ? totalPage : prevState + 1
    })
  }

  return (
    <nav>
      <ul className={style.listWrapper}>
        <li className={style.listItem} onClick={onClickNextPage}>
          <a href={'#'}>
            <span>&laquo;</span>
          </a>
        </li>
        {pages.map(item => {
          return (
            <li
              className={clsx(style.listItem, item == page && style.activePage)}
              data-page={item}
              key={item}
              onClick={onClickPage}
            >
              <a href={'#'}>{item}</a>
            </li>
          )
        })}
        <li className={style.listItem} onClick={onClickPrevPage}>
          <a href={'#'}>
            <span>&raquo;</span>
          </a>
        </li>

        <li className={style.selectNavigation}>
          <div>Показать</div>
          <Selects />
          <div>на странице</div>
        </li>
      </ul>
    </nav>
  )
}
