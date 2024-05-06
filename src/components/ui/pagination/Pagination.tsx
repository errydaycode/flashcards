import React, { FC, useState } from 'react'

import { Selects } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography'
import { paginationRange } from '@/utils'
import { clsx } from 'clsx'

import style from './pagination.module.scss'

interface Props {
  pageSize: number
  totalCount: number
}

export const Pagination: FC<Props> = ({ pageSize, totalCount }) => {
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
            <span>&lsaquo;</span>
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
              <Typography variant={'body2'}>
                <a href={'#'}>{item}</a>
              </Typography>
            </li>
          )
        })}
        <li className={style.listItem} onClick={onClickPrevPage}>
          <a href={'#'}>
            <span>&rsaquo;</span>
          </a>
        </li>

        <li className={style.selectNavigation}>
          <Typography variant={'body2'}>Показать</Typography>
          <Selects />
          <Typography variant={'body2'}>на странице</Typography>
        </li>
      </ul>
    </nav>
  )
}
