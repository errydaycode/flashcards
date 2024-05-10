import type { Meta, StoryObj } from '@storybook/react'

import { Header as headerComponent } from './Header'

const meta = {
  component: headerComponent,
  tags: ['autodocs'],
  title: 'Components/UI/headerComponent',
} satisfies Meta<typeof headerComponent>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderSingIn: Story = {
  args: {
    isLogin: false,
  },
}
export const HeaderAvatar: Story = {
  args: {
    isLogin: true,
  },
}
