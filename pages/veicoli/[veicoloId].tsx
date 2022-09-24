import { useRouter } from 'next/router'
import { BaseLayout } from '../../components/common/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/common/Layout/LoadingSpinner'
import { VehicleForm } from '../../components/vechicles/VehicleForm'
import { useGetVehicleByIdQuery } from '../../src/services/vehicles.service'

const VeicoloDetailPage = () => {
  const router = useRouter()
  const { veicoloId } = router.query

  const isEditMode = veicoloId !== 'new'

  const { data: vehicleData, isLoading } = useGetVehicleByIdQuery(
    veicoloId as string,
    {
      skip: !isEditMode,
    }
  )

  if (isEditMode) {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!vehicleData) {
      return <div>No data</div>
    }
  }

  return (
    <BaseLayout>
      <VehicleForm vehicleData={vehicleData} />
    </BaseLayout>
  )
}

export default VeicoloDetailPage
