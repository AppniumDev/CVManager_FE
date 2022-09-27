import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MODALS } from '../../components/common/ModalSwitcher/ModalSwitcher'

export type IAppViewState = {
  modalOpened: MODALS
  modalMode: 'add' | 'edit'
  modalEntityId?: string
}

const initialState: IAppViewState = {
  modalOpened: MODALS.NONE,
  modalMode: 'add',
  modalEntityId: undefined,
}

export const appViewSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        modal: MODALS
        type: IAppViewState['modalMode']
        modalEntityId?: string
      }>
    ) => {
      state.modalOpened = action.payload.modal
      state.modalMode = action.payload.type

      if (action.payload.modalEntityId) {
        state.modalEntityId = action.payload.modalEntityId
      }
    },
    closeModal: (state) => {
      state.modalOpened = MODALS.NONE
      state.modalMode = 'add'
      state.modalEntityId = undefined
    },
  },
})

export const { openModal, closeModal } = appViewSlice.actions

export default appViewSlice.reducer
