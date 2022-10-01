import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MODALS_PRIMARY } from '../../components/common/ModalSwitcher/PrimaryModalSwitcher'
import { MODALS_SECONDARY } from '../../components/common/ModalSwitcher/SecondaryModalSwitcher'

export type IAppViewState = {
  primaryModal: {
    opened: MODALS_PRIMARY | false
    mode: 'add' | 'edit'
    entityId?: string
  }
  secondaryModal: {
    opened: MODALS_SECONDARY | false
    mode: 'add' | 'edit'
    entityId?: string
  }
}

const initialState: IAppViewState = {
  primaryModal: {
    opened: false,
    mode: 'add',
    entityId: undefined,
  },
  secondaryModal: {
    opened: false,
    mode: 'add',
    entityId: undefined,
  },
}

export const appViewSlice = createSlice({
  name: 'appView',
  initialState,
  reducers: {
    openPrimaryModal: (
      state,
      action: PayloadAction<{
        modal: MODALS_PRIMARY
        mode: IAppViewState['primaryModal']['mode']
        entityId?: string
      }>
    ) => {
      state.primaryModal.opened = action.payload.modal
      state.primaryModal.mode = action.payload.mode

      if (action.payload.entityId) {
        state.primaryModal.entityId = action.payload.entityId
      }
    },
    closePrimaryModal: (state) => {
      // Close primary modal
      state.primaryModal.opened = false
      state.primaryModal.mode = 'add'
      state.primaryModal.entityId = undefined

      // Close also secondary modal
      state.secondaryModal.opened = false
      state.secondaryModal.mode = 'add'
      state.secondaryModal.entityId = undefined
    },
    openSecondaryModal: (
      state,
      action: PayloadAction<{
        modal: MODALS_SECONDARY
        mode: IAppViewState['primaryModal']['mode']
        entityId?: string
      }>
    ) => {
      state.secondaryModal.opened = action.payload.modal
      state.secondaryModal.mode = action.payload.mode

      if (action.payload.entityId) {
        state.secondaryModal.entityId = action.payload.entityId
      }
    },
    closeSecondaryModal: (state) => {
      // Close secondary modal
      state.secondaryModal.opened = false
      state.secondaryModal.mode = 'add'
      state.secondaryModal.entityId = undefined
    },
  },
})

export const {
  openPrimaryModal,
  closePrimaryModal,
  openSecondaryModal,
  closeSecondaryModal,
} = appViewSlice.actions

export default appViewSlice.reducer
