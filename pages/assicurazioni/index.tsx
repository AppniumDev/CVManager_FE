import type { NextPage } from 'next'
import { useMemo } from 'react'
import { BaseLayout } from '../../components/common/Layout/BaseLayout'
import { LoadingSpinner } from '../../components/common/Layout/LoadingSpinner'
import { insurancesColumns } from '../../components/insurances/insurances.table-utils'
import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch } from '../../src/state/reduxHooks'
import { Button } from '@mui/material'
import { MODALS_PRIMARY } from '../../components/common/ModalSwitcher/PrimaryModalSwitcher'
import { openPrimaryModal } from '../../src/state/appViewSlice'

const AssicurazioniPage: NextPage = () => {
  // const { data, isLoading } = useGetAllInsurancesQuery()

  const dispatch = useAppDispatch()

  const columnsGenerated = useMemo(
    () => insurancesColumns({ dispatch }),
    [dispatch]
  )

  const contentRender = useMemo(() => {
    // if (isLoading) {
    //   return <LoadingSpinner />
    // }

    // if (!data) {
    //   return <div>No data</div>
    // }

    return (
      <>
        <div className="flex flex-col justify-end w-full pb-3">
          <div className="flex self-end">
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(
                  openPrimaryModal({
                    modal: MODALS_PRIMARY.VEHICLE_FORM,
                    mode: 'add',
                  })
                )
              }}
            >
              Aggiungi Assicurazione
            </Button>
          </div>
        </div>
        {/* <div className="bg-white rounded-lg shadow-xl">
          <DataGrid
            rows={data}
            columns={columnsGenerated}
            autoHeight
            disableSelectionOnClick
          />
        </div> */}
      </>
    )
  }, [dispatch])

  return <BaseLayout>{contentRender}</BaseLayout>
}

export default AssicurazioniPage
