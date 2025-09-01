import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recipeApi } from './recipeApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)
