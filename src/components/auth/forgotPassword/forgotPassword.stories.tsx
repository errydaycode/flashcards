import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Auth/forgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
