import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from './Tabs'

const meta = {
  component: Tab,
  tags: ['autodocs'],
  title: 'Components/UI/TabSwitcher',
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { title: 'My Cards', value: 'a' },
      { title: 'All Cards', value: 'c' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: false,
    options: [
      { title: 'Switcher', value: 'a' },
      { title: 'Switcher', value: 'c' },
      { title: 'Switcher', value: 'v' },
    ],
  },
}
