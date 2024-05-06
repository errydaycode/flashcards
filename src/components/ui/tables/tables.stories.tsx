import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from '@/components/ui/icon'

import { TableBody, TableCell, TableHead, TableHeadCell, TableRows, Tables } from './'

const meta = {
  component: Tables,
  tags: ['autodocs'],
  title: 'components/UI/Tables',
} satisfies Meta<typeof Tables>

export default meta
type Story = StoryObj<typeof meta>
const decks = [
  {
    cardsCount: 5,
    createdBy: 'User1',
    id: '1',
    name: 'Deck1',
    rating: 3,
    updated: '2024-05-03T20:05:10Z',
  },
  {
    cardsCount: 7,
    createdBy: 'User2',
    id: '2',
    name: 'Deck2',
    rating: 4,
    updated: '2024-05-03T20:05:10Z',
  },
]

export const Default: Story = {
  args: {
    children: (
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
            {decks.map(deck => {
              return (
                <TableRows key={deck.id}>
                  <TableCell>{deck.name}</TableCell>
                  <TableCell>{deck.cardsCount}</TableCell>
                  <TableCell>{new Date(deck.updated).toLocaleDateString('ru-RU')}</TableCell>
                  <TableCell>{deck.createdBy}</TableCell>
                  <TableCell>
                    {Array(deck.rating).fill(<Icon iconId={'starYellow'} />)}
                    {Array(5 - deck.rating).fill(<Icon iconId={'starOutline'} />)}
                  </TableCell>
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
    ),
  },
}
