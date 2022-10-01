import { Modal } from '@mui/material'
import { useMemo } from 'react'
import { closeSecondaryModal } from '../../../src/state/appViewSlice'
import { useAppDispatch, useAppSelector } from '../../../src/state/reduxHooks'
import { VehicleForm } from '../../vechicles/VehicleForm'

export enum MODALS_SECONDARY {
  INSURANCE_FORM = 'INSURANCE_FORM',
}

const SecondaryModalSwitcher = () => {
  const { mode, opened, entityId } = useAppSelector(
    ({ appView }) => appView.secondaryModal
  )
  const dispatch = useAppDispatch()

  const renderModalContent = useMemo(() => {
    switch (opened) {
      case MODALS_SECONDARY.INSURANCE_FORM:
        return <VehicleForm />
    }
  }, [opened])

  if (!renderModalContent) {
    return <></>
  }

  return (
    <Modal
      id="secondary-modal"
      open={!!opened}
      onClose={() => dispatch(closeSecondaryModal)}
      aria-labelledby="modal-secondary-title"
      aria-describedby="modal-secondary-description"
    >
      <>{renderModalContent}</>
    </Modal>
  )
}

export { SecondaryModalSwitcher }
