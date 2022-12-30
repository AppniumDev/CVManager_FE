import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useMemo, useState } from 'react'
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
  DeleteInsuranceMutation,
  SingleInsuranceQuery,
  UpdateInsuranceMutation,
  UpdateInsuranceMutationVariables,
} from '../../../../src/graphql/__generated__/graphql'
import { DevTool } from '@hookform/devtools'
import { useMutation } from '@apollo/client'
import {
  createInsuranceMutation,
  deleteInsuranceMutation,
  updateInsuranceMutation,
} from '../../../../src/graphql/mutations/insurances.mutation'
import {
  getAllInsurancesQuery,
  getInsuranceByIdQuery,
} from '../../../../src/graphql/queries/insurances.queries'
import {
  decodePrice,
  encodePrice,
  isRequiredYup,
} from '../../../../src/utils/formUtils'
import { getVehicleByIdQuery } from '../../../../src/graphql/queries/vehicles.queries'

export interface IInsuranceForm {
  insuranceData?: SingleInsuranceQuery['insurancesByPk']
  vehicleId?: number
}

const formValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  price: Yup.number().required(),
  firstInstallment: Yup.number().required(),
  secondInstallment: Yup.number(),
  startDate: Yup.date().required(),
  endDate: Yup.date().required(),
  suspensionDate: Yup.date().nullable(),
  reactivationDate: Yup.date().nullable(),
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
  const defaultValues = useMemo(() => {
    if (insuranceData) {
      return {
        title: insuranceData.title,
        firstInstallment: decodePrice(insuranceData.firstInstallment),
        secondInstallment: decodePrice(insuranceData.secondInstallment),
        price: decodePrice(insuranceData.price),
        startDate: insuranceData.startDate && new Date(insuranceData.startDate),
        endDate: insuranceData.endDate && new Date(insuranceData.endDate),
        suspensionDate:
          insuranceData.suspensionDate &&
          new Date(insuranceData.suspensionDate),
        reactivationDate:
          insuranceData.reactivationDate &&
          new Date(insuranceData.reactivationDate),
      }
    }
  }, [insuranceData])

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getFieldState,
    formState: { isValid, isDirty, errors, dirtyFields, isValidating },
    clearErrors,
    getValues,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
    resolver: yupResolver(formValidationSchema),
    ...(defaultValues && { defaultValues }),
  })

  console.log('Form: ', {
    errors,
    isValid,
    dirtyFields,
    isValidating,
    errorsGet: {
      title: getFieldState('title').error,
      price: getFieldState('price').error,
      firstInstallment: getFieldState('firstInstallment').error,
      secondInstallment: getFieldState('secondInstallment').error,
      startDate: getFieldState('startDate').error,
      endDate: getFieldState('endDate').error,
      suspensionDate: getFieldState('suspensionDate').error,
      reactivationDate: getFieldState('reactivationDate').error,
    },
    values: getValues(),
  })

  const getIsRequired = (fieldName: string) => {
    return isRequiredYup(formValidationSchema, fieldName)
  }

  // Register fields
  const titleField = register('title')
  const firstInstallmentField = register('firstInstallment')
  const secondInstallmentField = register('secondInstallment')
  const priceField = register('price')
  const startDateField = register('startDate')
  const endDateField = register('endDate')
  const suspensionDateField = register('suspensionDate')
  const reactivationDateField = register('reactivationDate')

  // Apollo GraphQL mutations
  const [createInsurance, { data, loading, error }] =
    useMutation<CreateInsuranceMutation>(createInsuranceMutation)
  const [updateInsurance] = useMutation<UpdateInsuranceMutation>(
    updateInsuranceMutation
  )
  const [deleteInsurance] = useMutation<DeleteInsuranceMutation>(
    deleteInsuranceMutation
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
            firstInstallment: encodePrice(getValues('firstInstallment')),
            secondInstallment: encodePrice(getValues('secondInstallment')),
            price: encodePrice(getValues('price')),
            startDate: getValues('startDate'),
            endDate: getValues('endDate'),
            suspensionDate: getValues('suspensionDate'),
            reactivationDate: getValues('reactivationDate'),
          },
        }
        await updateInsurance({
          variables: variablesUpdateInsurance,
          refetchQueries: (data) => {
            return [
              {
                query: getInsuranceByIdQuery,
                variables: { insuranceId: insuranceData?.id },
              },
            ]
          },
        })
      } else {
        const variablesCreateInsurance: CreateInsuranceMutationVariables = {
          object: {
            vehicleId: vehicleId,
            title: getValues('title'),
            firstInstallment: getValues('firstInstallment')
              ? getValues('firstInstallment') * 100
              : getValues('firstInstallment'),
            secondInstallment: getValues('secondInstallment')
              ? getValues('secondInstallment') * 100
              : getValues('secondInstallment'),
            price: getValues('price')
              ? getValues('price') * 100
              : getValues('price'),
            startDate: getValues('startDate'),
            endDate: getValues('endDate'),
            suspensionDate: getValues('suspensionDate'),
            reactivationDate: getValues('reactivationDate'),
          },
        }
        await createInsurance({
          variables: variablesCreateInsurance,
          refetchQueries: (data) => {
            return [
              {
                query: getVehicleByIdQuery,
                variables: { vehicleId: vehicleId },
              },
            ]
          },
        })
      }
    } catch (e) {
      console.log(e)
    }

    dispatch(closeSecondaryModal())
  }

  const onDelete = async () => {
    await deleteInsurance({
      variables: {
        id: insuranceData?.id,
      },
      refetchQueries: (data) => {
        return [
          {
            query: getVehicleByIdQuery,
            variables: { vehicleId: vehicleId },
          },
        ]
      },
    })

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
              required={getIsRequired('title')}
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
              required={getIsRequired('price')}
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Prima rata`}
              name={`firstInstallment`}
              control={control}
              withWrapper
              money
              required={getIsRequired('firstInstallment')}
            />
            <InputForm
              placeholder={`es: 99,90`}
              label={`Seconda rata`}
              name={`secondInstallment`}
              control={control}
              withWrapper
              money
              required={getIsRequired('secondInstallment')}
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
                required={getIsRequired('startDate')}
              />
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data fine`}
                name={`endDate`}
                control={control}
                withWrapper
                required={getIsRequired('endDate')}
              />
            </div>

            <div className="flex gap-10">
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data sospensione`}
                name={`suspensionDate`}
                control={control}
                withWrapper
                required={getIsRequired('suspensionDate')}
              />
              <InputDateForm
                placeholder={`es: 09/2022`}
                label={`Data riattivazione`}
                name={`reactivationDate`}
                control={control}
                withWrapper
                required={getIsRequired('reactivationDate')}
              />
            </div>
          </div>
          <div className="flex justify-between">
            {isFormEdit && (
              <div className="flex justify-end gap-4">
                <Button color="error" onClick={() => onDelete()}>
                  {'Elimina assicurazione'}
                </Button>
              </div>
            )}
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
          </div>
        </form>
        <DevTool control={control} />
      </>
    </FormLayout>
  )
}

InsuranceFormContent.displayName = 'InsuranceFormContent'

export { InsuranceFormContent }
