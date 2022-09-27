import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { VehicleEntity } from '../../interfaces'
import { InputTextForm } from '../common/Form/InputTextForm'
import { FormLayout } from '../common/Layout/FormLayout'
import * as Yup from 'yup'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import Uppy from '@uppy/core'
import { DashboardModal } from '@uppy/react'
import { Button } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../src/state/reduxHooks'
import { closeModal } from '../../src/state/appViewSlice'
import { LoadingSpinner } from '../common/Layout/LoadingSpinner'
import { useGetVehicleByIdQuery } from '../../src/services/vehicles.service'
import { VehicleFormContent } from './VehicleFormContent'

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
