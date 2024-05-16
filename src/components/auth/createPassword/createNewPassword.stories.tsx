import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Auth/createNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { onSubmit: data => console.log(data) },
}
