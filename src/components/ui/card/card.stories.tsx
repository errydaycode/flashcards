import type { Meta, StoryObj } from '@storybook/react'

import { Card as CardComponent } from './card'

const meta = {
  component: CardComponent,
  tags: ['autodocs'],
  title: 'components/Card',
} satisfies Meta<typeof CardComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {}
