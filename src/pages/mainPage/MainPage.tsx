import { FC } from 'react'

import { DecksListFilter } from '@/components/ui/decksListFilter/DecksListFilter'
import { Pagination } from '@/components/ui/pagination/Pagination'

import styles from './mainPage.module.scss'

export const MainPage: FC = () => {
  return (
    <div className={styles.mainPage}>
      <DecksListFilter />
      <div>TABLE...</div>
      <Pagination pageSize={2} totalCount={45} />
    </div>
  )
}
