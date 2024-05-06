import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationComponent: Story = {
  args: {
    pageSize: 2,
    totalCount: 45,
  },
}
