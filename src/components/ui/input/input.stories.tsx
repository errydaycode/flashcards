import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

export default { component: Input }
const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/UI/Input',
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    width: '284px',
  },
}

export const Error: Story = {
  args: {
    error: 'Error!',
    label: 'Input',
    placeholder: 'Input',
    width: '284px',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    width: '284px',
  },
}

export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
    width: '284px',
  },
}

export const DisabledPassword: Story = {
  args: {
    disabled: true,
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
    width: '284px',
  },
}
