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
    currentPage: 10,
    onChangePage: () => {},
    pageSize: 2,
    totalCount: 40,
  },
}
