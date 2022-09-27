import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../../components/common/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/common/Layout/LoadingSpinner'
import { useGetAllVehiclesQuery } from '../../src/services/vehicles.service'
import { vehiclesColumns } from '../../src/tables/vehicles/vehicle.table-utils'
import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch } from '../../src/state/reduxHooks'
import { Button } from '@mui/material'
import { MODALS } from '../../components/common/ModalSwitcher/ModalSwitcher'
import { openModal } from '../../src/state/appViewSlice'

const VeicoliPage: NextPage = () => {
  const { data, isLoading } = useGetAllVehiclesQuery()

  const dispatch = useAppDispatch()

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
        <div className="flex flex-col justify-end w-full pb-3">
          <div className="flex self-end">
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(
                  openModal({
                    modal: MODALS.VEHICLE_FORM,
                    type: 'add',
                  })
                )
              }}
            >
              Aggiungi Veicolo
            </Button>
          </div>
        </div>
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
