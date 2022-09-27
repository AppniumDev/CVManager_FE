import React from 'react'

import { useAppSelector } from '../../src/state/reduxHooks'
import { LoadingSpinner } from '../common/Layout/LoadingSpinner'
import { useGetVehicleByIdQuery } from '../../src/services/vehicles.service'
import { VehicleFormContent } from './VehicleFormContent'

// Styles
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export interface IVehicleForm {}

const VehicleForm = () => {
  const { modalEntityId, modalMode } = useAppSelector(({ appView }) => appView)

  const isFormEdit = modalEntityId && modalMode === 'edit'

  const { data: vehicleData, isLoading } = useGetVehicleByIdQuery(
    modalEntityId as string,
    {
      skip: !isFormEdit,
    }
  )

  if (isFormEdit) {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!vehicleData) {
      return <div>No data</div>
    }
  }

  return <VehicleFormContent vehicleData={vehicleData} />
}

VehicleForm.displayName = 'VehicleForm'

export { VehicleForm }
