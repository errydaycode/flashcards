import type { Meta, StoryObj } from '@storybook/react'

import { NewCardModal as NewCardModalComponent } from './NewCardModal'

const meta = {
  component: NewCardModalComponent,
  tags: ['autodocs'],
  title: 'Components/UI/NewCardModalComponent',
} satisfies Meta<typeof NewCardModalComponent>

export default meta
type Story = StoryObj<typeof meta>

export const NewCardModal: Story = {}
