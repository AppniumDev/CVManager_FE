import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { InputText } from '../../components/Form/InputText'
import { BaseLayout } from '../../components/Layout/BaseLayout'
import { FormLayout } from '../../components/Layout/FormLayout'
import { UpdateVehicleDto } from '../../interfaces'

const VeicoloDetailPage = () => {
  const router = useRouter()
  const { veicoloId } = router.query

  const { register, handleSubmit } = useForm<UpdateVehicleDto>()

  const isFormEdit = veicoloId !== 'new'

  // Register fields
  const nameField = register('name', { required: true })
  const licensePlateField = register('licensePlate', { required: true })
  const buildDateField = register('buildDate', { required: true })

  const onSubmit = (data: UpdateVehicleDto) => {}

  const formTitle = isFormEdit
    ? `Modifica veicolo ${veicoloId}`
    : 'Nuovo veicolo'

  return (
    <BaseLayout>
      <FormLayout title={formTitle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full mb-6">
            <InputText
              placeholder={`es: Caddy 1.9 TDI`}
              label={`Nome`}
              {...nameField}
              withWrapper
            />
            <InputText
              placeholder={`es: AB123CD`}
              label={`Targa`}
              {...licensePlateField}
              withWrapper
            />
            <InputText
              placeholder={`es: 11/2005`}
              label={`Data immatricolazione`}
              {...buildDateField}
              withWrapper
            />
          </div>
        </form>
      </FormLayout>
    </BaseLayout>
  )
}

export default VeicoloDetailPage
