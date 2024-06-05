import { baseApi } from '@/service'
import { LoginArgs, LoginResponse, User } from '@/service/auth/auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getMe: builder.query<User | undefined, void>({
        providesTags: ['Me'],
        query: () => '/v1/auth/me',
      }),
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }
          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
    }
  },
})

export const { useGetMeQuery, useLoginMutation } = authService
