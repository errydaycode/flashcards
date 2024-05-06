import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from './Tabs'

const meta = {
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/UI/TabSwitcher',
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Tabs: Story = {}
