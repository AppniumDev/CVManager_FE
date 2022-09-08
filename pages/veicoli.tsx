import type { NextPage } from 'next'
import { BaseLayout } from '../components/BaseLayout'
import { useGetAllVehiclesQuery } from '../src/services/vehicles.service'

const Veicoli: NextPage = () => {
  const { data } = useGetAllVehiclesQuery()

  console.log('Data vehicles: ', data)
  return (
    <BaseLayout>
      <h1>Veicoli</h1>
    </BaseLayout>
  )
}

export default Veicoli
