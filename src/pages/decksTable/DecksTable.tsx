import { Icon } from '@/components/ui/icon'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRows,
  Tables,
} from '@/components/ui/tables'
import { Deck } from '@/service/decks/decks.type'

type Props = {
  data?: Deck[] | undefined
}

export const DecksTable = ({ data }: Props) => {
  return (
    <>
      <Tables>
        <TableHead>
          <TableRows>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>last Updated</TableHeadCell>
            <TableHeadCell>Creat By</TableHeadCell>
            <TableHeadCell>Rating</TableHeadCell>
            <TableHeadCell>Button mok</TableHeadCell>
          </TableRows>
        </TableHead>
        <TableBody>
          {data?.map(deck => {
            return (
              <TableRows key={deck.id}>
                <TableCell>{deck.name}</TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableCell>
                <TableCell>{deck.author.name}</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <button>
                    <Icon iconId={'pencil'} />
                  </button>
                  <button>
                    <Icon iconId={'player'} />
                  </button>
                  <button>
                    <Icon iconId={'trashDelete'} />
                  </button>
                </TableCell>
              </TableRows>
            )
          })}
        </TableBody>
      </Tables>
    </>
  )
}
