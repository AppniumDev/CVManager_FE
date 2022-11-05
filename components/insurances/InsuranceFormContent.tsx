import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InsuranceEntity } from '../../interfaces'
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
import XHRUpload from '@uppy/xhr-upload'
import italianLanguage from '@uppy/locales/lib/it_IT'
import { serverEndpoint } from '../../src/config'
import shortid from 'shortid'

export interface IInsuranceForm {
  insuranceData?: InsuranceEntity
}

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  licensePlate: Yup.string().required(),
  buildDate: Yup.string().required(),
})

const InsuranceFormContent = ({ insuranceData }: IInsuranceForm) => {
  const dispatch = useAppDispatch()

  // Local state
  const [isUppyModalOpen, setIsUppyModalOpen] = useState(false)
  const isFormEdit = !!insuranceData
  const formTitle = isFormEdit
    ? `Modifica assicurazione | ${insuranceData?.description}`
    : 'Nuova assicurazione'

  // React hook form init
  const defaultValues = useMemo(
    () =>
      insuranceData && {
        ...insuranceData,
      },
    [insuranceData]
  )

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, isDirty, errors },
  } = useForm<InsuranceEntity>({
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

  // uppy.on('complete', (result) => {
  //   try {
  //     // console.log('Vehiocle images uploaded', result)
  //     setValue('insuranceImage', result.successful[0].name)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // })

  console.log('Form state', { isValid, isDirty, errors })

  // Register fields
  const insuranceCompanyField = register('insuranceCompany', { required: true })
  const descriptionField = register('description', { required: true })
  const startDateField = register('startDate', { required: true })
  const endDateField = register('endDate', { required: true })
  const suspensionDateField = register('suspensionDate', { required: true })
  const reactivationDateField = register('reactivationDate', { required: true })

  // Redux RTK Query actions
  const [updateInsurance, { isLoading: isLoadingUpdateInsurance }] =
    useUpdateInsuranceMutation()
  const [createInsurance, { isLoading: isLoadingCreateInsurance }] =
    useCreateInsuranceMutation()

  // Submit form function
  const onSubmit = async (data: Partial<InsuranceEntity>) => {
    try {
      const startDateFormatted =
        data.startDate && new Date(data.startDate).toISOString()

      let body: Partial<InsuranceEntity> = {
        ...insuranceData,
        ...data,
        startDate: startDateFormatted,
      } as Partial<InsuranceEntity>

      delete body.updatedAt
      delete body.createdAt

      if (isFormEdit) {
        await updateInsurance(body as InsuranceEntity)
      } else {
        await createInsurance(body as InsuranceEntity)
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
            Dati assicurazione
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm<InsuranceEntity>
              placeholder={`es: AXXA`}
              label={`Nome compagnia assicurativa`}
              name={`insuranceCompany`}
              control={control}
              withWrapper
            />
            <InputForm<InsuranceEntity>
              placeholder={`es: descrizione ass.`}
              label={`Descrizione`}
              name={`description`}
              control={control}
              withWrapper
            />

            <InputDateForm<InsuranceEntity>
              placeholder={`es: 09/2022`}
              label={`Data inizio assicurazione`}
              name={`startDate`}
              control={control}
              withWrapper
            />

            <InputDateForm<InsuranceEntity>
              placeholder={`es: 09/2022`}
              label={`Data fine assicurazione`}
              name={`startDate`}
              control={control}
              withWrapper
            />

            <InputDateForm<InsuranceEntity>
              placeholder={`es: 09/2022`}
              label={`Data sospensione assicurazione`}
              name={`startDate`}
              control={control}
              withWrapper
            />

            <InputDateForm<InsuranceEntity>
              placeholder={`es: 09/2022`}
              label={`Data ripresa assicurazione`}
              name={`startDate`}
              control={control}
              withWrapper
            />
          </div>

          <Typography variant="h6" component="h2" className="mb-4">
            Documenti
          </Typography>
          <div className="flex w-full gap-8 pt-4 mb-3">
            <div className="flex items-center justify-start">
              <div className="flex flex-col items-center gap-4 p-2 bg-gray-200 rounded-lg">
                <Typography
                  variant="h6"
                  component="h3"
                  className="text-indigo-800"
                >
                  Foto documento assicurazione
                </Typography>
                {/* {getValues().insuranceImage && (
                  <div className="flex items-center justify-center h-48">
                    <Image
                      src={
                        'https://cvmanager.fra1.digitaloceanspaces.com/CVManager/' +
                        getValues().insuranceImage
                      }
                      alt="Image of insurance"
                      className="object-contain rounded-lg"
                      width={250}
                      height={250}
                    />
                  </div>
                )} */}
                <div className="flex items-center">
                  <Button
                    variant="outlined"
                    onClick={() => setIsUppyModalOpen(true)}
                  >
                    {'Carica foto'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              onClick={() => dispatch(closeModal())}
              disabled={isLoadingUpdateInsurance || isLoadingCreateInsurance}
            >
              {'Chiudi'}
            </Button>
            <Button
              disabled={
                isLoadingUpdateInsurance ||
                isLoadingCreateInsurance ||
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

InsuranceFormContent.displayName = 'InsuranceFormContent'

export { InsuranceFormContent }
