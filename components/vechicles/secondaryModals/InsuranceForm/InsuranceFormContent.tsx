import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { closeSecondaryModal } from '../../../../src/state/appViewSlice'
import { useAppDispatch } from '../../../../src/state/reduxHooks'
import { FormLayout } from '../../../common/Layout/FormLayout'
import * as Yup from 'yup'
import { Button, Typography } from '@mui/material'
import { InputDateForm } from '../../../common/Form/InputDateForm'
import { InputForm } from '../../../common/Form/InputForm'
import { SingleInsuranceQuery } from '../../../../src/graphql/__generated__/graphql'

export interface IInsuranceForm {
  insuranceData?: SingleInsuranceQuery['insurancesByPk']
}

const formValidationSchema = Yup.object().shape({
  description: Yup.string().required(),
  firstInstallment: Yup.number().required(),
  secondInstallment: Yup.number().required(),
})

const InsuranceFormContent = ({ insuranceData }: IInsuranceForm) => {
  const dispatch = useAppDispatch()

  // Local state
  const [isUppyModalOpen, setIsUppyModalOpen] = useState(false)
  const isFormEdit = !!insuranceData
  const formTitle = isFormEdit
    ? `Modifica assicurazione | ${insuranceData?.id}`
    : 'Nuova assicurazione'

  // React hook form init
  const defaultValues = useMemo(
    () =>
      insuranceData && {
        description: insuranceData.description,
        firstInstallment: insuranceData.firstInstallment,
        secondInstallment: insuranceData.secondInstallment,
        price: insuranceData.price,
        startDate: insuranceData.startDate,
        endDate: insuranceData.endDate,
        suspensionDate: insuranceData.suspensionDate,
        reactivationDate: insuranceData.reactivationDate,
      },
    [insuranceData]
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

  // Submit form function
  const onSubmit = async (data: SingleInsuranceQuery['insurancesByPk']) => {
    if (!data) return

    try {
      if (isFormEdit) {
        // const variablesUpdateVehicle: UpdateVehicleMutationVariables = {
        //   pkColumns: {
        //     id: vehicleData?.id,
        //   },
        //   set: {
        //     name: getValues('name'),
        //     licensePlate: getValues('licensePlate'),
        //     buildDate: getValues('buildDate'),
        //     image: getValues('image'),
        //   },
        // }
        // await updateVehicle({
        //   variables: variablesUpdateVehicle,
        //   refetchQueries: [{ query: getAllVehiclesQuery }, 'AllVehicles'],
        // })
      } else {
        //   const variablesCreateVehicle: CreateVehicleMutationVariables = {
        //     object: {
        //       name: getValues('name'),
        //       licensePlate: getValues('licensePlate'),
        //       buildDate: getValues('buildDate'),
        //       image: getValues('image'),
        //     },
        //   }
        //   await createVehicle({
        //     variables: variablesCreateVehicle,
        //     refetchQueries: [{ query: getAllVehiclesQuery }, 'AllVehicles'],
        //   })
      }
    } catch (e) {
      console.log(e)
    }

    dispatch(closeSecondaryModal())
  }

  return (
    <FormLayout title={formTitle} width="w-7/12" additionalClassname="pt-6">
      <>
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="flex flex-col py-8"
        >
          <Typography variant="h6" component="h1" className="mb-4">
            Dati generali
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm
              placeholder={`es: Assicurazione Caddy`}
              label={`Nome assicurazione`}
              name={`description`}
              control={control}
              withWrapper
            />
          </div>
          <Typography variant="h6" component="h1" className="mb-4">
            Prezzi / Rate
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm
              placeholder={`es: 99,90`}
              label={`Prezzo assicurazione`}
              name={`price`}
              control={control}
              withWrapper
              money
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Prima rata assicurazione`}
              name={`firstInstallment`}
              control={control}
              withWrapper
              money
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Seconda rata assicurazione`}
              name={`secondInstallment`}
              control={control}
              withWrapper
              money
            />
          </div>
          <Typography variant="h6" component="h1" className="mb-4">
            Date / Scadenze
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputDateForm
              placeholder={`es: 09/2022`}
              label={`Data inizio assicurazione`}
              name={`startDate`}
              control={control}
              withWrapper
            />
            <InputDateForm
              placeholder={`es: 09/2022`}
              label={`Data fine assicurazione`}
              name={`endDate`}
              control={control}
              withWrapper
            />
            <InputDateForm
              placeholder={`es: 09/2022`}
              label={`Data sospensione assicurazione`}
              name={`suspensionDate`}
              control={control}
              withWrapper
            />
            <InputDateForm
              placeholder={`es: 09/2022`}
              label={`Data riattivazione assicurazione`}
              name={`reactivationDate`}
              control={control}
              withWrapper
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button onClick={() => dispatch(closeSecondaryModal())}>
              {'Chiudi'}
            </Button>
            <Button
              disabled={!isValid || !isDirty}
              variant="contained"
              type="submit"
            >
              {isFormEdit ? 'Salva Assicurazione' : 'Crea Assicurazione'}
            </Button>
          </div>
        </form>
      </>
    </FormLayout>
  )
}

InsuranceFormContent.displayName = 'InsuranceFormContent'

export { InsuranceFormContent }
