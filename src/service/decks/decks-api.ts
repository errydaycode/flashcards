import { baseApi } from '@/service'
import { CardArrayResponse, GetCardsArgs } from '@/service/cards/cards-type'
import {
  CreateDeckArgs,
  Deck,
  DecksListResponse,
  DeleteDeck,
  GetDecksArgs,
  MinMaxCardsResponse,
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
      getMinMaxDecks: builder.query<MinMaxCardsResponse, void>({
        providesTags: ['Decks'],
        query: () => '/v2/decks/min-max-cards',
      }),
      getOneDeck: builder.query<Deck, { id: string }>({
        providesTags: ['Decks'],
        query: ({ id }) => `v1/decks/${id}`,
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
  useGetMinMaxDecksQuery,
  useGetOneDeckQuery,
  useUpdateDecksMutation,
} = decksApi
