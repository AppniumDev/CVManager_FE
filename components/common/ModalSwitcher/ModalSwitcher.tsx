import { Modal, Typography } from '@mui/material'
import { useMemo } from 'react'
import { closeModal } from '../../../src/state/appViewSlice'
import { useAppDispatch, useAppSelector } from '../../../src/state/reduxHooks'
import { VehicleForm } from '../../vechicles/VehicleForm'

export enum MODALS {
  NONE = 'NONE',
  VEHICLE_FORM = 'VEHICLE_FORM',
}

const ModalSwitcher = () => {
  const modalOpened = useAppSelector(({ appView }) => appView.modalOpened)
  const dispatch = useAppDispatch()

  const renderModalContent = useMemo(() => {
    switch (modalOpened) {
      case MODALS.VEHICLE_FORM:
        return <VehicleForm />
    }

    return <></>
  }, [modalOpened])

  return (
    <>
      <Modal
        open={!!modalOpened && modalOpened !== MODALS.NONE}
        onClose={() => dispatch(closeModal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {renderModalContent}
      </Modal>
    </>
  )
}

export { ModalSwitcher }
