import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type IAppViewState = {
  modalOpened?: string
}

const initialState: IAppViewState = {
  modalOpened: undefined,
}

export const appViewSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string | undefined>) => {
      state.modalOpened = action.payload
    },
    closeModal: (state) => {
      state.modalOpened = undefined
    },
  },
})

export const { openModal } = appViewSlice.actions

export default appViewSlice.reducer
