import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Props, Selects } from './Select'

const meta = {
  component: Selects,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Selects>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = (args: Props) => {
  const [value, setValue] = useState('100')

  return <Selects {...args} onChangeValue={setValue} value={value} />
}
Select.args = {
  label: 'pagination',
}
{
  /*<select onChange={e => setItemsPerPage(+e.currentTarget.value)} value={itemsPerPage}>*/
}
{
  /*  <option value={10}>10</option>*/
}
{
  /*  <option value={15}>15</option>*/
}
{
  /*  <option value={20}>20</option>*/
}
{
  /*  <option value={50}>50</option>*/
}
{
  /*</select>*/
}
