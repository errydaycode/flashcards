import { Pagination } from '@/service/decks/decks.type'

export type CardListResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: Date
  deckId: string
  grade: number
  id: string | undefined
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: Date
  userId: string
}

export type CardArrayResponse = {
  items: CardListResponse[]
  pagination: Pagination
}

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  itemsPerPage?: number
  orderBy?: null | string
  question?: string
}
