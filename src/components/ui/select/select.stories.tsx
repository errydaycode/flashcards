import type { Meta, StoryObj } from '@storybook/react'

import { Selects } from './Select'

const meta = {
  component: Selects,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Selects>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {}
