import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../../components/common/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/common/Layout/LoadingSpinner'
import { useGetAllInsurancesQuery } from '../../src/services/insurances.service'
import { insurancesColumns } from '../../components/insurances/insurances.table-utils'
import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch } from '../../src/state/reduxHooks'
import { Button } from '@mui/material'
import { MODALS } from '../../components/common/ModalSwitcher/ModalSwitcher'
import { openModal } from '../../src/state/appViewSlice'

const AssicurazioniPage: NextPage = () => {
  const { data, isLoading } = useGetAllInsurancesQuery()

  const dispatch = useAppDispatch()

  const columnsGenerated = useMemo(
    () => insurancesColumns({ dispatch }),
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
              Aggiungi Assicurazione
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
  }, [isLoading, data, columnsGenerated, dispatch])

  return <BaseLayout>{contentRender}</BaseLayout>
}

export default AssicurazioniPage
