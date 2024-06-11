import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRows,
  Tables,
} from '@/components/ui/tables'
import { CardListResponse } from '@/service/cards/cards-type'

import s from './cardsTables.module.scss'

type Props = {
  cards?: CardListResponse[] | undefined
}

export const CardsTables = ({ cards }: Props) => {
  return (
    <>
      <Tables>
        <TableHead>
          <TableRows>
            <TableHeadCell>Questions</TableHeadCell>
            <TableHeadCell>Answer</TableHeadCell>
            <TableHeadCell>last Updated</TableHeadCell>
            <TableHeadCell>Grade</TableHeadCell>
            <TableHeadCell>Button mok</TableHeadCell>
          </TableRows>
        </TableHead>
        <TableBody>
          {cards?.map(card => {
            return (
              <TableRows key={card.id}>
                <TableCell className={s.item}>
                  {card.questionImg && <img alt={''} className={s.img} src={card.questionImg} />}
                  {card.question}
                </TableCell>
                <TableCell>{card.answer}</TableCell>
                <TableCell>{new Date(card.updated).toLocaleDateString('ru-RU')}</TableCell>
                {/*<TableCell>{card.author.name}</TableCell>*/}
                <TableCell>
                  {Array(card.grade).fill(<Icon iconId={'starYellow'} />)}
                  {Array(5 - card.grade).fill(<Icon iconId={'starOutline'} />)}
                </TableCell>
                <TableCell>
                  <Button variant={'link'}>
                    <Icon iconId={'pencil'} />
                  </Button>
                  <Button variant={'link'}>
                    <Icon iconId={'trashDelete'} />
                  </Button>
                </TableCell>
              </TableRows>
            )
          })}
        </TableBody>
      </Tables>
    </>
  )
}
