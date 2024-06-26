import { decksApi } from '@/service/decks/decks-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(decksApi.middleware),
  reducer: {
    [decksApi.reducerPath]: decksApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
