import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../components/BaseLayout'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { TableComponent } from '../components/Table'
import { useGetAllVehiclesQuery } from '../src/services/vehicles.service'
import { vehiclesColumns } from '../src/tables/vehicles/vehicle.table-utils'

const Veicoli: NextPage = () => {
  const { data, isLoading } = useGetAllVehiclesQuery()

  console.log('Data vehicles: ', data)

  const contentRender = useMemo(() => {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!data) {
      return <div>No data</div>
    }

    return (
      <>
        <TableComponent columns={vehiclesColumns} data={data} />
      </>
    )
  }, [isLoading, data])

  return <BaseLayout>{contentRender}</BaseLayout>
}

export default Veicoli
