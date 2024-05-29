import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './dropDownContent.module.scss'

export type DropDownBasicItemContentProps = {
  icon: ReactNode
  name: string
}

export const DropDownContent = ({ icon, name }: DropDownBasicItemContentProps) => {
  return (
    <>
      <div className={s.icon}>{icon}</div>
      <Typography variant={'caption'}>{name}</Typography>
    </>
  )
}
