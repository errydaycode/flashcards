import { CreateDeckArgs, Deck, DecksListResponse, GetDecksArgs } from '@/service/decks/decks.type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.query<Deck, CreateDeckArgs>({
        query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs>({
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetDecksQuery } = flashcardsApi
