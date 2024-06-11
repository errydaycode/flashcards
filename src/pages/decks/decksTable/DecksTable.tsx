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
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/service/decks/decks.type'
import { useDeleteDecksMutation } from '@/service/decks/decks-api'

import s from './decksTable.module.scss'

type Props = {
  data?: Deck[] | undefined
}

export const DecksTable = ({ data }: Props) => {
  const [deleteDeck] = useDeleteDecksMutation()

  return (
    <>
      <Tables>
        <TableHead>
          <TableRows>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>last Updated</TableHeadCell>
            <TableHeadCell>Creat By</TableHeadCell>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRows>
        </TableHead>
        <TableBody>
          {data?.map(deck => {
            return (
              <TableRows key={deck.id}>
                <TableCell className={s.item}>
                  {deck.cover && <img alt={''} className={s.img} src={deck.cover} />}
                  <Typography as={'a'} href={`/cards/${deck.id}`} variant={'link1'}>
                    {deck.name}
                  </Typography>
                </TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>{deck.author.name}</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <Button variant={'link'}>
                    <Icon iconId={'pencil'} />
                  </Button>
                  <Button variant={'link'}>
                    <Icon iconId={'player'} />
                  </Button>
                  <Button onClick={() => deleteDeck({ id: deck.id })} variant={'link'}>
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
