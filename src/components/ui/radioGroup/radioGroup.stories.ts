import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './index'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/Radio',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Option One', value: 'option-one' },
      { label: 'Option Two', value: 'option-two' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Option One', value: 'option-one' },
      { label: 'Option Two', value: 'option-two' },
    ],
  },
}
