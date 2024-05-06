import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'
import { Card as CardComponent } from 'src/components/ui/card/Card'

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
      backgroundColor: 'blue',
      borderRadius: '10px',
      height: '552px',
      maxWidth: '420px',
      padding: '24px',
    },
  },
}
