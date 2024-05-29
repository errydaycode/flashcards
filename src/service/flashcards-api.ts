import {
  CreateDeckArgs,
  Deck,
  DecksListResponse,
  DeleteDeck,
  GetDecksArgs,
  UpdateDeckArgs,
} from '@/service/decks/decks.type'
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
      createDeck: builder.mutation<Deck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
      }),
      deleteDecks: builder.mutation<void, DeleteDeck>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `/v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: 'v2/decks',
        }),
      }),
      updateDecks: builder.mutation<Deck, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks'],
})

export const {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = flashcardsApi
