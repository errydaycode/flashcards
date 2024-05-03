import type { Meta, StoryObj } from '@storybook/react'

import { CheckBox as CheckBoxComponent } from './CheckBox'

const meta = {
  component: CheckBoxComponent,
  tags: ['autodocs'],
  title: 'Components/UI/CheckBoxComponent',
} satisfies Meta<typeof CheckBoxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    label: 'checkBox',
  },
}
