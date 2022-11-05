import React from 'react'

import { useAppSelector } from '../../src/state/reduxHooks'
import { LoadingSpinner } from '../common/Layout/LoadingSpinner'
import { VehicleFormContent } from './VehicleFormContent'

// Styles
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import { useQuery } from '@apollo/client'
import { getVehicleByIdQuery } from '../../src/graphql/queries/vehicles.queries'
import {
  SingleVehicleQuery,
  SingleVehicleQueryVariables,
} from '../../src/graphql/__generated__/graphql'

const VehicleForm = () => {
  const { entityId, mode } = useAppSelector(
    ({ appView }) => appView.primaryModal
  )

  const isFormEdit = entityId && mode === 'edit'

  const variables: SingleVehicleQueryVariables = {
    vehicleId: parseInt(entityId || '0'),
  }

  const { data: vehicleData, loading } = useQuery<SingleVehicleQuery>(
    getVehicleByIdQuery,
    {
      variables,
      skip: !isFormEdit,
    }
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (isFormEdit && !vehicleData) {
    return <div>No data</div>
  }

  return <VehicleFormContent vehicleData={vehicleData?.vehiclesByPk} />
}

VehicleForm.displayName = 'VehicleForm'

export { VehicleForm }
