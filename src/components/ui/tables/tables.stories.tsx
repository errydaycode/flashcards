import type { Meta, StoryObj } from '@storybook/react'

import { Tables as TablesComponent } from './tables'

const meta = {
  component: TablesComponent,
  tags: ['autodocs'],
  title: 'components/Tables',
} satisfies Meta<typeof TablesComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Tables: Story = {}
