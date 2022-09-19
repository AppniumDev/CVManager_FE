import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../../components/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/Layout/LoadingSpinner'
import { TableComponent } from '../../components/Table/TableComponent'
import { useGetAllVehiclesQuery } from '../../src/services/vehicles.service'
import { vehiclesColumns } from '../../src/tables/vehicles/vehicle.table-utils'

const VeicoliPage: NextPage = () => {
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

export default VeicoliPage
