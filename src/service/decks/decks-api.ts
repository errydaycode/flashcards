import { baseApi } from '@/service'
import { CardArrayResponse, GetCardsArgs } from '@/service/cards/cards-type'
import {
  CreateDeckArgs,
  Deck,
  DecksListResponse,
  DeleteDeck,
  GetDecksArgs,
  UpdateDeckArgs,
} from '@/service/decks/decks.type'

export const decksApi = baseApi.injectEndpoints({
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
      getDeckCards: builder.query<
        CardArrayResponse,
        { args: GetCardsArgs; id: string | undefined }
      >({
        providesTags: ['Cards'],
        query: ({ args, id }) => ({
          params: args ?? {},
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: '/v2/decks',
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
})

export const {
  useCreateDeckMutation,
  useDeleteDecksMutation,
  useGetDeckCardsQuery,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = decksApi
