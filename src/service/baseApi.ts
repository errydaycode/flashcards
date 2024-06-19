import { baseQueryWithReauth } from '@/service/base-query-with-reath'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,

  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://api.flashcards.andrii.es',
  //   credentials: 'include',
  //   prepareHeaders: headers => {
  //     // headers.append('x-auth-skip', 'true')
  //     const token = localStorage.getItem('accessToken')
  //
  //     if (token) {
  //       headers.set('Authorization', `Bearer ${token}`)
  //     }
  //
  //     return headers
  //   },
  // }),
  endpoints: () => ({}), // Пустые endpoint точки для базового API
  reducerPath: 'flashcardsApi',
  tagTypes: ['Auth', 'Decks', 'Cards'],
})
