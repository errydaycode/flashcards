import type { Meta, StoryObj } from '@storybook/react'

import { CustomSlider } from './Slider'

const meta = {
  component: CustomSlider,
  tags: ['autodocs'],
  title: 'Components/UI/CustomSlider',
} satisfies Meta<typeof CustomSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {}
