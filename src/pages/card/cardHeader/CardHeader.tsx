import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropDownContent,
  DropDownItem,
  DropDownMenu,
  DropDownSeparator,
} from '@/components/ui/dropDown'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'

import s from './cardHeader.module.scss'

type Props = {
  isOwner: boolean
  item: string | undefined
}

export const CardHeader = ({ isOwner, item }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={s.item}>
      <div className={s.dropDown}>
        <div>
          <Typography variant={'h2'}>{item}</Typography>
        </div>
        <div>
          {isOwner && (
            <DropDownMenu
              defaultOpen={isOpen}
              trigger={
                <Button onClick={toggleDropDown} variant={'icon'}>
                  <Icon height={'24'} iconId={'info'} viewBox={'0 0 24 24'} width={'24'} />
                </Button>
              }
            >
              <DropDownItem onSelect={() => {}}>
                <DropDownContent icon={<Icon iconId={'layer2'} />} name={'Edit'} />
              </DropDownItem>
              <DropDownSeparator />
              <DropDownItem onSelect={() => {}}>
                <DropDownContent icon={<Icon iconId={'layer1'} />} name={'Delete'} />
              </DropDownItem>
            </DropDownMenu>
          )}
        </div>
      </div>
    </div>
  )
}
