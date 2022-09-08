import { configureStore } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

// Slices
import { appViewSlice } from './appViewSlice'

const makeStore = () =>
  configureStore({
    reducer: {
      [appViewSlice.name]: appViewSlice.reducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)
