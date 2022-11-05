import { Modal } from '@mui/material'
import { useMemo } from 'react'
import { closeSecondaryModal } from '../../../src/state/appViewSlice'
import { useAppDispatch, useAppSelector } from '../../../src/state/reduxHooks'

// Vehicle secondary form
import { InsuranceModal } from '../../vechicles/secondaryModals/InsuranceForm/InsuranceForm'

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
        return <InsuranceModal />

      default:
        return <h1>No modal</h1>
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
