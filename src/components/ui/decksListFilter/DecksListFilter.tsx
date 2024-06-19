import { useState } from 'react'

import { CreateDeck } from '@/components/modals/createDeck/CreateDeck'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon'
import { Input } from '@/components/ui/input'
import { CustomSlider } from '@/components/ui/slider/Slider'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'

import styles from './decksListFilter.module.scss'

type Props = {
  changeMinMaxCard: (value: number[]) => void
  changeValue?: (e: string) => void
  clearFilterHandler: () => void
  onChange: (id: string) => void
  rangeValue: number[]
  search?: string
  value: string
}

export const DecksListFilter = ({
  changeMinMaxCard,
  changeValue,
  clearFilterHandler,
  onChange,
  rangeValue,
  search,
  value,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const options = [
    {
      title: 'My Cards',
      value: 'my',
    },
    {
      title: 'All Cards',
      value: 'all',
    },
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button onClick={handleOpenModal}>Add New Deck</Button>
        {isModalOpen && <CreateDeck onClose={handleOpenModal} />}
      </div>
      <div className={styles.filter}>
        <Input
          onValueChange={changeValue}
          placeholder={'Input search'}
          type={'search'}
          value={search}
          width={'299px'}
        />
        <div>
          <Typography variant={'body2'}>Show decks cards</Typography>
          <Tab onChange={onChange} options={options} value={value} />
        </div>
        <div style={{ minWidth: '15%' }}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <CustomSlider max={50} onValueChange={changeMinMaxCard} value={rangeValue} />
        </div>
        <Button
          onClick={clearFilterHandler}
          style={{ height: '36px', padding: '0', width: '150px' }}
          variant={'secondary'}
        >
          <Icon iconId={'trashDelete'} />
          Clear Filter
        </Button>
      </div>
    </div>
  )
}
