import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { CustomSlider, Props } from './Slider' // Make sure this path is correct

const meta: Meta<typeof CustomSlider> = {
  component: CustomSlider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
}

export default meta

export const Default: StoryObj<typeof CustomSlider> = (args: Props) => {
  const [value, setValue] = useState<number[]>(args.value)

  return <CustomSlider {...args} onValueChange={setValue} value={value} />
}

Default.args = {
  max: 99,
  min: 1,
  value: [2, 50],
}
