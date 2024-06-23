import { baseApi } from '@/service'
import { LoginArgs, LoginResponse, createUser, getUser } from '@/service/auth/auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createUser: builder.mutation<getUser, createUser>({
        invalidatesTags: ['Auth'],
        query: body => ({
          body: body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
      getMe: builder.query<getUser, void>({
        providesTags: ['Auth'],
        query: () => '/v1/auth/me',
      }),
      login: builder.mutation<LoginResponse, LoginArgs>({
        invalidatesTags: ['Auth'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }
          localStorage.setItem('accessToken', data.accessToken.trim())
          localStorage.setItem('refreshToken', data.refreshToken.trim())
        },
        query: args => ({
          body: args,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Auth'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
        }),
      }),
    }
  },
})

export const { useCreateUserMutation, useGetMeQuery, useLoginMutation, useLogoutMutation } =
  authService
