import React from 'react'

// Styles
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { useQuery } from '@apollo/client'

import { useAppSelector } from '../../../../src/state/reduxHooks'
import { LoadingSpinner } from '../../../common/Layout/LoadingSpinner'
import {
  SingleInsuranceQuery,
  SingleInsuranceQueryVariables,
} from '../../../../src/graphql/__generated__/graphql'
import { getInsuranceByIdQuery } from '../../../../src/graphql/queries/insurances.queries'
import { InsuranceFormContent } from './InsuranceFormContent'

const InsuranceModal = () => {
  const { entityId, mode } = useAppSelector(
    ({ appView }) => appView.secondaryModal
  )

  const isFormEdit = entityId && mode === 'edit'

  const variables: SingleInsuranceQueryVariables = {
    insuranceId: parseInt(entityId || '0'),
  }

  const { data: insuranceData, loading } = useQuery<SingleInsuranceQuery>(
    getInsuranceByIdQuery,
    {
      variables,
      skip: !isFormEdit,
    }
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (isFormEdit && !insuranceData) {
    return <div>No data</div>
  }

  return <InsuranceFormContent insuranceData={insuranceData?.insurancesByPk} />
}

InsuranceModal.displayName = 'InsuranceModal'

export { InsuranceModal }
