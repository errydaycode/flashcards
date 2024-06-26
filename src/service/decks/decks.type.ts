export interface Author {
  id: string
  name: string
}

export interface Deck {
  author: Author
  cardsCount: number
  cover?: any
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface DecksListResponse {
  items: Deck[]
  pagination: Pagination
}

export interface GetDecksArgs {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export interface CreateDeckArgs {
  cover?: string
  isPrivate: boolean
  name: string
}
export type UpdateDeckArgs = {
  id: string
} & Partial<Omit<CreateDeckArgs, 'id'>>

export interface DeleteDeck {
  id: string
}

export interface MinMaxCardsResponse {
  max: number
  min: number
}
