import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { VehicleEntity } from '../../interfaces'
import { InputForm } from '../common/Form/InputForm'
import { InputDateForm } from '../common/Form/InputDateForm'
import { FormLayout } from '../common/Layout/FormLayout'
import * as Yup from 'yup'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import Uppy from '@uppy/core'
import { DashboardModal, useUppy } from '@uppy/react'
import { Button, Typography } from '@mui/material'
import { useAppDispatch } from '../../src/state/reduxHooks'
import { closeModal } from '../../src/state/appViewSlice'
import {
  useCreateVehicleMutation,
  useUpdateVehicleMutation,
} from '../../src/services/vehicles.service'
import XHRUpload from '@uppy/xhr-upload'
import italianLanguage from '@uppy/locales/lib/it_IT'
import { serverEndpoint } from '../../src/config'
import shortid from 'shortid'

export interface IVehicleForm {
  vehicleData?: VehicleEntity
}

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  licensePlate: Yup.string().required(),
  buildDate: Yup.string().required(),
})

const VehicleFormContent = ({ vehicleData }: IVehicleForm) => {
  const dispatch = useAppDispatch()

  // Local state
  const [isUppyModalOpen, setIsUppyModalOpen] = useState(false)
  const isFormEdit = !!vehicleData
  const formTitle = isFormEdit
    ? `Modifica veicolo | ${vehicleData?.name}`
    : 'Nuovo veicolo'

  // Uppy section
  const uppy = useUppy(() => {
    return new Uppy({
      id: 'DragDropImages',
      locale: italianLanguage,
      onBeforeFileAdded: (currentFile: any, files: any) => {
        let extensionImage = '.jpg'
        let currentFileCopy = currentFile
        const generatedNameHash = shortid.generate()
        currentFileCopy.name = generatedNameHash + extensionImage
        return currentFileCopy
      },
      restrictions: {
        allowedFileTypes: ['image/*'],
      },
    }).use(XHRUpload, {
      bundle: true,
      endpoint: `${serverEndpoint}/upload-images`,
      fieldName: 'files',
      formData: true,
    })
  })

  // React hook form init
  const defaultValues = useMemo(
    () =>
      vehicleData && {
        name: vehicleData.name,
        licensePlate: vehicleData.licensePlate,
        buildDate: vehicleData.buildDate,
      },
    [vehicleData]
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isDirty, errors },
  } = useForm<VehicleEntity>({
    mode: 'onChange',
    resolver: yupResolver(formValidationSchema),
    ...(defaultValues && { defaultValues }),
  })

  console.log('Form state', { isValid, isDirty, errors })

  // Register fields
  const nameField = register('name', { required: true })
  const licensePlateField = register('licensePlate', { required: true })
  const buildDateField = register('buildDate', { required: true })

  // Redux RTK Query actions
  const [updateVehicle, { isLoading: isLoadingUpdateVehicle }] =
    useUpdateVehicleMutation()
  const [createVehicle, { isLoading: isLoadingCreateVehicle }] =
    useCreateVehicleMutation()

  // Submit form function
  const onSubmit = async (data: Partial<VehicleEntity>) => {
    try {
      const buildDateFormatted =
        data.buildDate && new Date(data.buildDate).toISOString()

      let body: Partial<VehicleEntity> = {
        ...vehicleData,
        ...data,
        buildDate: buildDateFormatted,
      } as Partial<VehicleEntity>

      delete body.updatedAt
      delete body.createdAt

      if (isFormEdit) {
        await updateVehicle(body as VehicleEntity)
      } else {
        await createVehicle(body as VehicleEntity)
      }
    } catch (e) {
      console.log(e)
    }

    dispatch(closeModal())
  }

  return (
    <FormLayout title={formTitle} width="w-7/12">
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" component="h1" className="mb-4">
            Dati veicolo
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm<VehicleEntity>
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Nome veicolo`}
              name={`name`}
              control={control}
              withWrapper
            />
            <InputForm<VehicleEntity>
              placeholder={`es: FD1234DD`}
              label={`Targa veicolo`}
              name={`licensePlate`}
              control={control}
              withWrapper
            />
            <InputDateForm<VehicleEntity>
              placeholder={`es: 09/2003`}
              label={`Data immatricolazione`}
              name={`buildDate`}
              control={control}
              withWrapper
            />
          </div>

          <Typography variant="h6" component="h2" className="mb-4">
            Documenti veicolo
          </Typography>
          <div className="flex flex-wrap w-full gap-8 pt-4 mb-3">
            <Button variant="outlined" onClick={() => setIsUppyModalOpen(true)}>
              {'Carica libretto'}
            </Button>
            <Button variant="outlined" onClick={() => setIsUppyModalOpen(true)}>
              {'Carica foto'}
            </Button>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              onClick={() => dispatch(closeModal())}
              disabled={isLoadingUpdateVehicle || isLoadingCreateVehicle}
            >
              {'Chiudi'}
            </Button>
            <Button
              disabled={
                isLoadingUpdateVehicle ||
                isLoadingCreateVehicle ||
                !isValid ||
                !isDirty
              }
              variant="contained"
              type="submit"
            >
              {isFormEdit ? 'Salva Veicolo' : 'Crea Veicolo'}
            </Button>
          </div>
        </form>
        <DevTool control={control} />
        <DashboardModal
          uppy={uppy}
          open={isUppyModalOpen}
          onRequestClose={() => setIsUppyModalOpen(false)}
          proudlyDisplayPoweredByUppy={false}
        />
      </>
    </FormLayout>
  )
}

VehicleFormContent.displayName = 'VehicleFormContent'

export { VehicleFormContent }
