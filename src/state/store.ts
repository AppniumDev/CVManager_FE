import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

// Slices
import { appViewSlice } from './appViewSlice'
import { vehiclesApi } from '../services/vehicles.service'

const store = configureStore({
  reducer: {
    // Services RTK Query
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
    // Slices
    [appViewSlice.name]: appViewSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vehiclesApi.middleware),
  devTools: true,
})

const makeStore = () =>
  configureStore({
    reducer: {
      // Services RTK Query
      [vehiclesApi.reducerPath]: vehiclesApi.reducer,
      // Slices
      [appViewSlice.name]: appViewSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(vehiclesApi.middleware),
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore)
