import { Modal } from '@mui/material'
import { useMemo } from 'react'
import { closePrimaryModal } from '../../../src/state/appViewSlice'
import { useAppDispatch, useAppSelector } from '../../../src/state/reduxHooks'
import { VehicleForm } from '../../vechicles/VehicleForm'

export enum MODALS_PRIMARY {
  VEHICLE_FORM = 'VEHICLE_FORM',
}

const PrimaryModalSwitcher = () => {
  const { mode, opened, entityId } = useAppSelector(
    ({ appView }) => appView.primaryModal
  )
  const dispatch = useAppDispatch()

  const renderModalContent = useMemo(() => {
    switch (opened) {
      case MODALS_PRIMARY.VEHICLE_FORM:
        return <VehicleForm />
    }
  }, [opened])

  if (!renderModalContent) {
    return <></>
  }

  return (
    <Modal
      id="primary-modal"
      open={!!opened}
      onClose={() => dispatch(closePrimaryModal)}
      aria-labelledby="modal-primary-title"
      aria-describedby="modal-primary-description"
    >
      <>{renderModalContent}</>
    </Modal>
  )
}

export { PrimaryModalSwitcher }
