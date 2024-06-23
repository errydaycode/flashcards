import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { SignIn } from '@/components/auth/sign-in'
import { Button } from '@/components/ui/button'
import { store } from '@/service'
import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/UI/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <SignIn onSubmit={() => {}} />,
    trigger: <Button>Sign In</Button>,
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
}
