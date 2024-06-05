import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import { CreateDeck as CreateCardComponent } from './CreateDeck'

const meta = {
  component: CreateCardComponent,
  tags: ['autodocs'],
  title: 'components/UI/createCard',
} satisfies Meta<typeof CreateCardComponent>

export default meta
type Story = StoryObj<typeof meta>

export const CreateDeck: Story = {
  args: {
    children: (
      <>
        <Typography variant={'large'}>Card</Typography>
        <Input label={'Uncontrolled text field'} />
        <Input label={'Uncontrolled search'} type={'search'} />
        <Button as={'a'} href={'https://google.com'} variant={'link'}>
          Google
        </Button>
      </>
    ),
  },
}
