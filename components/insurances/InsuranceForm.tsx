import React from 'react'

import { useAppSelector } from '../../src/state/reduxHooks'
import { LoadingSpinner } from '../common/Layout/LoadingSpinner'
import { useGetInsuranceByIdQuery } from '../../src/services/insurances.service'
import { InsuranceFormContent } from './InsuranceFormContent'

// Styles
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export interface IInsuranceForm {}

const InsuranceForm = () => {
  const { modalEntityId, modalMode } = useAppSelector(({ appView }) => appView)

  const isFormEdit = modalEntityId && modalMode === 'edit'

  const { data: insuranceData, isLoading } = useGetInsuranceByIdQuery(
    modalEntityId as string,
    {
      skip: !isFormEdit,
    }
  )

  if (isFormEdit) {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!insuranceData) {
      return <div>No data</div>
    }
  }

  return <InsuranceFormContent insuranceData={insuranceData} />
}

InsuranceForm.displayName = 'InsuranceForm'

export { InsuranceForm }
