import { DevTool } from '@hookform/devtools'
import React, { forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import { VehicleEntity } from '../../interfaces'
import { Button } from '@nextui-org/react'
import { InputTextForm } from '../common/Form/InputTextForm'
import { FormLayout } from '../common/Layout/FormLayout'

export interface IVehicleForm {
  vehicleData?: VehicleEntity
}

const VehicleForm = ({ vehicleData }: IVehicleForm) => {
  const isFormEdit = !!vehicleData

  const { register, handleSubmit, control } = useForm<VehicleEntity>({
    mode: 'onChange',
  })

  // Register fields
  const nameField = register('name', { required: true })
  const licensePlateField = register('licensePlate', { required: true })
  const buildDateField = register('buildDate', { required: true })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
  }

  const formTitle = isFormEdit
    ? `Modifica veicolo ${vehicleData.name}`
    : 'Nuovo veicolo'

  console.log('useForm control', control)

  return (
    <FormLayout title={formTitle}>
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full mb-6">
            <InputTextForm<VehicleEntity>
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Nome veicolo`}
              name={`name`}
              control={control}
              withWrapper
            />
            <InputTextForm<VehicleEntity>
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Targa veicolo`}
              name={`licensePlate`}
              control={control}
              withWrapper
            />
            <InputTextForm<VehicleEntity>
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Anno immatricolazione`}
              name={`buildDate`}
              control={control}
              withWrapper
            />
          </div>
          <div className="flex justify-end">
            <Button shadow color="primary" auto type="submit">
              {isFormEdit ? 'Salva Veicolo' : 'Crea Veicolo'}
            </Button>
          </div>
        </form>
        <DevTool control={control} />
      </>
    </FormLayout>
  )
}

VehicleForm.displayName = 'VehicleForm'

export { VehicleForm }
