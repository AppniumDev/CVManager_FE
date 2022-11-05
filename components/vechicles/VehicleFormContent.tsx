import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
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
import {
  closePrimaryModal,
  openSecondaryModal,
} from '../../src/state/appViewSlice'
import XHRUpload from '@uppy/xhr-upload'
import italianLanguage from '@uppy/locales/lib/it_IT'
import { baseImageURL, serverEndpoint } from '../../src/config'
import shortid from 'shortid'
import Image from 'next/image'
import { useMutation } from '@apollo/client'
import {
  createVehicleMutation,
  updateVehicleMutation,
} from '../../src/graphql/mutations/vehicles.mutations'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  CreateVehicleMutation,
  CreateVehicleMutationVariables,
  SingleVehicleQuery,
  UpdateVehicleMutation,
  UpdateVehicleMutationVariables,
} from '../../src/graphql/__generated__/graphql'
import {
  getAllVehiclesQuery,
  getVehicleByIdQuery,
} from '../../src/graphql/queries/vehicles.queries'
import { MODALS_SECONDARY } from '../common/ModalSwitcher/SecondaryModalSwitcher'

export interface IVehicleForm {
  vehicleData?: SingleVehicleQuery['vehiclesByPk']
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

  // React hook form init
  const defaultValues = useMemo(
    () =>
      vehicleData && {
        name: vehicleData.name,
        licensePlate: vehicleData.licensePlate,
        buildDate: vehicleData.buildDate,
        image: vehicleData.image,
      },
    [vehicleData]
  )

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isValid, isDirty, errors },
    getValues,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(formValidationSchema),
    ...(defaultValues && { defaultValues }),
  })

  // Uppy section
  const uppy = useUppy(() => {
    return new Uppy({
      id: 'DragDropImages',
      locale: italianLanguage,
      onBeforeFileAdded: (currentFile, files) => {
        let extensionImage = '.jpg'
        let currentFileCopy = currentFile
        const generatedNameHash = shortid.generate()
        currentFileCopy.name = generatedNameHash + extensionImage

        // Set filename as preview image

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

  uppy.on('complete', (result) => {
    try {
      // console.log('Vehiocle images uploaded', result)
      setValue('image', result.successful[0].name)
    } catch (err) {
      console.error(err)
    }
  })

  // Register fields
  const nameField = register('name', { required: true })
  const licensePlateField = register('licensePlate', { required: true })
  const buildDateField = register('buildDate', { required: true })
  const imageField = register('image', { required: true })

  // Apollo GraphQL mutations
  const [createVehicle, { data, loading, error }] =
    useMutation<CreateVehicleMutation>(createVehicleMutation)
  const [updateVehicle] = useMutation<UpdateVehicleMutation>(
    updateVehicleMutation
  )

  // Submit form function
  const onSubmit = async (data: SingleVehicleQuery['vehiclesByPk']) => {
    if (!data) return

    try {
      const buildDateFormatted =
        data.buildDate && new Date(data.buildDate).toISOString()

      if (isFormEdit) {
        const variablesUpdateVehicle: UpdateVehicleMutationVariables = {
          pkColumns: {
            id: vehicleData?.id,
          },
          set: {
            name: getValues('name'),
            licensePlate: getValues('licensePlate'),
            buildDate: getValues('buildDate'),
            image: getValues('image'),
          },
        }

        await updateVehicle({
          variables: variablesUpdateVehicle,
          refetchQueries: [{ query: getAllVehiclesQuery }, 'AllVehicles'],
        })
      } else {
        const variablesCreateVehicle: CreateVehicleMutationVariables = {
          object: {
            name: getValues('name'),
            licensePlate: getValues('licensePlate'),
            buildDate: getValues('buildDate'),
            image: getValues('image'),
          },
        }

        await createVehicle({
          variables: variablesCreateVehicle,
          refetchQueries: [{ query: getAllVehiclesQuery }, 'AllVehicles'],
        })
      }
    } catch (e) {
      console.log(e)
    }

    dispatch(closePrimaryModal())
  }

  return (
    <FormLayout title={formTitle} width="w-8/12" additionalClassname={''}>
      <>
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="flex flex-col py-8"
        >
          <Typography variant="h6" component="h1" className="mb-4">
            Dati veicolo
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Nome veicolo`}
              name={`name`}
              control={control}
              withWrapper
            />
            <InputForm
              placeholder={`es: FD1234DD`}
              label={`Targa veicolo`}
              name={`licensePlate`}
              control={control}
              withWrapper
            />
            <InputDateForm
              placeholder={`es: 09/2003`}
              label={`Data immatricolazione`}
              name={`buildDate`}
              control={control}
              withWrapper
            />
          </div>
          <div className="flex">
            <div className="flex flex-col w-full gap-4">
              <Typography variant="h6" component="h2" className="mb-4">
                Assicurazioni
              </Typography>
              <div className="flex w-full gap-8 pt-4 mb-3">
                <div className="flex items-center justify-start">
                  <div
                    className="flex flex-col items-center justify-center h-20 gap-4 p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
                    onClick={() =>
                      dispatch(
                        openSecondaryModal({
                          modal: MODALS_SECONDARY.INSURANCE_FORM,
                          mode: 'add',
                        })
                      )
                    }
                  >
                    {getValues().image && (
                      <div className="flex items-center justify-center h-48">
                        <Image
                          src={baseImageURL + getValues().image}
                          alt="Image of vehicle"
                          className="object-contain rounded-lg"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
                  </div>
                </div>
              </div>

              <Typography variant="h6" component="h2" className="mb-4">
                Revisioni
              </Typography>
              <div className="flex w-full gap-8 pt-4 mb-3">
                <div className="flex items-center justify-start">
                  <div
                    className="flex flex-col items-center justify-center h-20 gap-4 p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
                    onClick={() => setIsUppyModalOpen(true)}
                  >
                    {getValues().image && (
                      <div className="flex items-center justify-center h-48">
                        <Image
                          src={baseImageURL + getValues().image}
                          alt="Image of vehicle"
                          className="object-contain rounded-lg"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
                  </div>
                </div>
              </div>

              <Typography variant="h6" component="h2" className="mb-4">
                Interventi
              </Typography>
              <div className="flex w-full gap-8 pt-4 mb-3">
                <div className="flex items-center justify-start">
                  <div
                    className="flex flex-col items-center justify-center h-20 gap-4 p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
                    onClick={() => setIsUppyModalOpen(true)}
                  >
                    {getValues().image && (
                      <div className="flex items-center justify-center h-48">
                        <Image
                          src={baseImageURL + getValues().image}
                          alt="Image of vehicle"
                          className="object-contain rounded-lg"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4">
              <Typography variant="h6" component="h2" className="mb-4">
                Documenti
              </Typography>
              <div className="flex w-full gap-8 pt-4 mb-3">
                <div className="flex items-center justify-start">
                  <div
                    className="flex flex-col items-center justify-center h-20 gap-4 p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
                    onClick={() => setIsUppyModalOpen(true)}
                  >
                    {getValues().image && (
                      <div className="flex items-center justify-center h-48">
                        <Image
                          src={baseImageURL + getValues().image}
                          alt="Image of vehicle"
                          className="object-contain rounded-lg"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
                  </div>
                </div>
              </div>
              <Typography variant="h6" component="h2" className="mb-4">
                Foto
              </Typography>
              <div className="flex w-full gap-8 pt-4 mb-3">
                <div className="flex items-center justify-start">
                  <div
                    className="flex flex-col items-center justify-center h-20 gap-4 p-2 bg-blue-100 rounded-lg shadow-md cursor-pointer group hover:bg-blue-400 w-28 hover:shadow-2xl"
                    onClick={() => setIsUppyModalOpen(true)}
                  >
                    {getValues().image && (
                      <div className="flex items-center justify-center h-48">
                        <Image
                          src={baseImageURL + getValues().image}
                          alt="Image of vehicle"
                          className="object-contain rounded-lg"
                          width={250}
                          height={250}
                        />
                      </div>
                    )}
                    <PlusCircleIcon className="self-center w-10 h-10 text-sm font-light text-blue-300 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button onClick={() => dispatch(closePrimaryModal())}>
              {'Chiudi'}
            </Button>
            <Button
              disabled={!isValid || !isDirty}
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
