import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'

import { Card as CardComponent } from './Card'

const meta = {
  component: CardComponent,
  tags: ['autodocs'],
  title: 'components/UI/Card',
} satisfies Meta<typeof CardComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {
  args: {
    children: <Typography variant={'large'}>Card</Typography>,
    style: {
      height: '552px',
      maxWidth: '420px',
      padding: '24px',
    },
  },
}

export const ExampleWithContent: Story = {
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
