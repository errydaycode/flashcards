import { ChangeEvent } from 'react'

import { DOTS, usePagination } from '@/components/ui/pagination/hooks/usePagination'
import { PropsSelect, Selects } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { Icon } from './../icon'

type PaginationProps = {
  changeValue?: (e: ChangeEvent<HTMLSelectElement>) => void
  className?: string
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
  value?: number
} & PropsSelect

export const Pagination = ({
  changeValue,
  className,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  value,
  ...restProps
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNextHandler = () => {
    if (currentPage) {
      onChangePage(currentPage + 1)
    }
  }

  const onPreviousHandler = () => {
    if (currentPage) {
      onChangePage(currentPage - 1)
    }
  }

  const changePageHandler = (pageNumber: number) => () => onChangePage(pageNumber)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  const classNames = {
    buttonLeft: clsx(s.item, { [s.disabled]: isFirstPage }),
    buttonRight: clsx(s.item, { [s.disabled]: isLastPage }),
    container: clsx(s.container, className),
    dots: clsx(s.item, s.dots),
  }

  return (
    <div className={classNames.container}>
      <button className={classNames.buttonLeft} disabled={isFirstPage} onClick={onPreviousHandler}>
        <Icon iconId={'ArrowDown'} />
      </button>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <span className={classNames.dots} key={i}>
              &#8230;
            </span>
          )
        }

        // Render our Page Pills
        return (
          <button
            className={clsx(s.item, pageNumber === currentPage && s.selected)}
            key={i}
            onClick={changePageHandler(pageNumber)}
          >
            <Typography
              as={'span'}
              className={clsx(s.item, pageNumber === currentPage && s.selected)}
              variant={'body2'}
            >
              {pageNumber}
            </Typography>
          </button>
        )
      })}
      <button className={classNames.buttonRight} disabled={isLastPage} onClick={onNextHandler}>
        <Icon iconId={'ArrowDown'} />
      </button>
      <Typography as={'div'} className={s.selectContainer} variant={'body2'}>
        Показать
        <Selects onChangeValue={changeValue} value={value} {...restProps} /> на странице
      </Typography>
    </div>
  )
}
