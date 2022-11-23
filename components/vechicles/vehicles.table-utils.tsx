import { format } from 'date-fns'
import { GridColDef, GridColumns } from '@mui/x-data-grid'
import { Chip, Button } from '@mui/material'
import { MODALS_PRIMARY } from '../common/ModalSwitcher/PrimaryModalSwitcher'
import { openPrimaryModal } from '../../src/state/appViewSlice'
import { AppDispatch } from '../../src/state/store'
import { AllVehiclesQuery } from '../../src/graphql/__generated__/graphql'

export interface IVechiclesColumns {
  dispatch: AppDispatch
}

export const vehiclesColumns = ({
  dispatch,
}: IVechiclesColumns): GridColumns<AllVehiclesQuery['vehicles'][number]> => {
  const columns: GridColDef<AllVehiclesQuery['vehicles'][number]>[] = [
    { field: 'name', headerName: 'Nome Veicolo', flex: 1 },
    {
      field: 'licensePlate',
      headerName: 'Targa Veicolo',
      flex: 1,
      renderCell({ value }) {
        return <Chip color="secondary" label={value} />
      },
    },
    {
      field: 'buildDate',
      headerName: 'Data Immatricolazione',
      flex: 1,
      renderCell({ value }) {
        return <b>{value}</b>
        // return <b>{format(value, 'dd/M/yyyy')}</b>
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Ultimo Aggiornamento',
      flex: 1,
      renderCell({ value }) {
        return <b>{value}</b>
        // return <b>{format(value, 'dd/M/yyyy hh:mm')}</b>
      },
    },
    {
      field: 'actions',
      headerName: 'Azioni',
      flex: 1,
      renderCell({ row }) {
        return (
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(
                openPrimaryModal({
                  modal: MODALS_PRIMARY.VEHICLE_FORM,
                  mode: 'edit',
                  entityId: row?.id.toString(),
                })
              )
            }}
          >
            Modifica
          </Button>
        )
      },
    },
  ]

  return columns
}
