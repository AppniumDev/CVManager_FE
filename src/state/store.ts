import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

// Slices
import { appViewSlice } from './appViewSlice'

const store = configureStore({
  reducer: {
    // Slices
    [appViewSlice.name]: appViewSlice.reducer,
  },
  devTools: true,
})

const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore)
