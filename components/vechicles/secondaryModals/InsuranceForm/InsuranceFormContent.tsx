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
import {
  CreateInsuranceMutation,
  CreateInsuranceMutationVariables,
  SingleInsuranceQuery,
  UpdateInsuranceMutation,
  UpdateInsuranceMutationVariables,
} from '../../../../src/graphql/__generated__/graphql'
import { DevTool } from '@hookform/devtools'
import { useMutation } from '@apollo/client'
import {
  createInsuranceMutation,
  updateInsuranceMutation,
} from '../../../../src/graphql/mutations/insurances.mutation'
import { getAllInsurancesQuery } from '../../../../src/graphql/queries/insurances.queries'

export interface IInsuranceForm {
  insuranceData?: SingleInsuranceQuery['insurancesByPk']
  vehicleId?: number
}

const formValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  firstInstallment: Yup.number().required(),
  secondInstallment: Yup.number(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
})

const InsuranceFormContent = ({ insuranceData, vehicleId }: IInsuranceForm) => {
  const dispatch = useAppDispatch()

  // Local state
  const [isUppyModalOpen, setIsUppyModalOpen] = useState(false)
  const isFormEdit = !!insuranceData
  const formTitle = isFormEdit
    ? `Modifica assicurazione | ${insuranceData?.title}`
    : 'Nuova assicurazione'

  // React hook form init
  const defaultValues = useMemo(
    () =>
      insuranceData && {
        title: insuranceData.title,
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

  // Register fields
  const titleField = register('title', { required: true })
  const firstInstallmentField = register('firstInstallment')
  const secondInstallmentField = register('secondInstallment')
  const priceField = register('price')
  const startDateField = register('startDate', { required: true })
  const endDateField = register('endDate', { required: true })
  const suspensionDateField = register('suspensionDate')
  const reactivationDateField = register('reactivationDate')

  // Apollo GraphQL mutations
  const [createInsurance, { data, loading, error }] =
    useMutation<CreateInsuranceMutation>(createInsuranceMutation)
  const [updateInsurance] = useMutation<UpdateInsuranceMutation>(
    updateInsuranceMutation
  )

  // Submit form function
  const onSubmit = async (data: SingleInsuranceQuery['insurancesByPk']) => {
    if (!data) return

    try {
      if (isFormEdit) {
        const variablesUpdateInsurance: UpdateInsuranceMutationVariables = {
          pkColumns: {
            id: insuranceData?.id,
          },
          set: {
            title: getValues('title'),
            firstInstallment: getValues('firstInstallment'),
            secondInstallment: getValues('secondInstallment'),
            price: getValues('price'),
            startDate: getValues('startDate'),
            endDate: getValues('endDate'),
            suspensionDate: getValues('suspensionDate'),
            reactivationDate: getValues('reactivationDate'),
          },
        }
        await updateInsurance({
          variables: variablesUpdateInsurance,
          refetchQueries: [{ query: getAllInsurancesQuery }, 'AllInsurances'],
        })
      } else {
        const variablesCreateInsurance: CreateInsuranceMutationVariables = {
          object: {
            vehicleId: vehicleId,
            title: getValues('title'),
            firstInstallment: getValues('firstInstallment'),
            secondInstallment: getValues('secondInstallment'),
            price: getValues('price'),
            startDate: getValues('startDate'),
            endDate: getValues('endDate'),
            suspensionDate: getValues('suspensionDate'),
            reactivationDate: getValues('reactivationDate'),
          },
        }
        await createInsurance({
          variables: variablesCreateInsurance,
          refetchQueries: [{ query: getAllInsurancesQuery }, 'AllInsurances'],
        })
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
              name={`title`}
              control={control}
              withWrapper
              required
            />
          </div>
          <Typography variant="h6" component="h1" className="mb-4">
            Prezzi / Rate
          </Typography>
          <div className="flex flex-wrap w-full gap-10 mb-3">
            <InputForm
              placeholder={`es: 99,90`}
              label={`Prezzo`}
              name={`price`}
              control={control}
              withWrapper
              money
              required
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Prima rata`}
              name={`firstInstallment`}
              control={control}
              withWrapper
              money
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Seconda rata`}
              name={`secondInstallment`}
              control={control}
              withWrapper
              money
            />
          </div>
          <Typography variant="h6" component="h1" className="mb-4">
            Date / Scadenze
          </Typography>
          <div className="flex flex-wrap w-full mb-3">
            <div className="flex gap-10">
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data inizio`}
                name={`startDate`}
                control={control}
                withWrapper
                required
              />
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data fine`}
                name={`endDate`}
                control={control}
                withWrapper
                required
              />
            </div>

            <div className="flex gap-10">
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data sospensione`}
                name={`suspensionDate`}
                control={control}
                withWrapper
              />
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data riattivazione`}
                name={`reactivationDate`}
                control={control}
                withWrapper
              />
            </div>
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
        <DevTool control={control} />
      </>
    </FormLayout>
  )
}

InsuranceFormContent.displayName = 'InsuranceFormContent'

export { InsuranceFormContent }
