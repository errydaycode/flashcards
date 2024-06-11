import { baseApi } from '@/service'
import { CardArrayResponse } from '@/service/cards/cards-type'

export const cardsApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getCard: builder.query<CardArrayResponse, { id: string }>({
        providesTags: ['Cards'],
        query: arg => ({
          method: 'GET',
          url: `v1/decks/${arg.id}/cards`,
        }),
      }),
    }
  },
})

export const { useGetCardQuery } = cardsApi
