import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../../components/common/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/common/Layout/LoadingSpinner'
import { useGetAllVehiclesQuery } from '../../src/services/vehicles.service'
import { vehiclesColumns } from '../../src/tables/vehicles/vehicle.table-utils'
import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch } from '../../src/state/reduxHooks'

const VeicoliPage: NextPage = () => {
  const { data, isLoading } = useGetAllVehiclesQuery()

  const dispatch = useAppDispatch()

  console.log('Data vehicles: ', data)

  const columnsGenerated = useMemo(
    () => vehiclesColumns({ dispatch }),
    [dispatch]
  )

  const contentRender = useMemo(() => {
    if (isLoading) {
      return <LoadingSpinner />
    }

    if (!data) {
      return <div>No data</div>
    }

    return (
      <>
        <div className="bg-white rounded-lg shadow-xl">
          <DataGrid
            rows={data}
            columns={columnsGenerated}
            autoHeight
            disableSelectionOnClick
          />
        </div>
      </>
    )
  }, [isLoading, data, columnsGenerated])

  return <BaseLayout>{contentRender}</BaseLayout>
}

export default VeicoliPage
