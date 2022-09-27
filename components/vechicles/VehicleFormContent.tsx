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

export interface IVehicleForm {
  vehicleData?: VehicleEntity
}

const uppy = new Uppy()

const formValidationSchema = Yup.object()
  .shape({
    name: Yup.string().required(),
    licensePlate: Yup.string().required(),
    buildDate: Yup.string().required(),
  })
  .required()

const VehicleFormContent = ({ vehicleData }: IVehicleForm) => {
  const dispatch = useAppDispatch()

  const isFormEdit = !!vehicleData

  // Local state
  const [isModalOpen, setIsModalOpen] = useState(false)

  const defaultValues = useMemo(
    () =>
      vehicleData && {
        name: vehicleData.name,
        licensePlate: vehicleData.licensePlate,
        buildDate: vehicleData.buildDate,
      },
    [vehicleData]
  )

  const { register, handleSubmit, control, formState } = useForm<VehicleEntity>(
    {
      mode: 'onChange',
      resolver: yupResolver(formValidationSchema),
      ...(defaultValues && { defaultValues }),
    }
  )

  console.log('Form state', formState)

  // Register fields
  const nameField = register('name', { required: true })
  const licensePlateField = register('licensePlate', { required: true })
  const buildDateField = register('buildDate', { required: true })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }

  const formTitle = isFormEdit
    ? `Modifica veicolo ${vehicleData?.name}`
    : 'Nuovo veicolo'

  return (
    <FormLayout title={formTitle} width="w-7/12">
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap w-full gap-10 mb-6">
            <InputTextForm<VehicleEntity>
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Nome veicolo`}
              name={`name`}
              control={control}
              withWrapper
            />
            <InputTextForm<VehicleEntity>
              placeholder={`es: FD1234DD`}
              label={`Targa veicolo`}
              name={`licensePlate`}
              control={control}
              withWrapper
            />
            <InputTextForm<VehicleEntity>
              placeholder={`es: 09/2003`}
              label={`Anno immatricolazione`}
              name={`buildDate`}
              control={control}
              withWrapper
            />
          </div>
          <div className="flex justify-end">
            <Button onClick={() => dispatch(closeModal())}>{'Chiudi'}</Button>
            <Button variant="contained" type="submit">
              {isFormEdit ? 'Salva Veicolo' : 'Crea Veicolo'}
            </Button>
          </div>
        </form>
        <DevTool control={control} />
        <DashboardModal
          uppy={uppy}
          open={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          proudlyDisplayPoweredByUppy={false}
        />
      </>
    </FormLayout>
  )
}

VehicleFormContent.displayName = 'VehicleFormContent'

export { VehicleFormContent }
