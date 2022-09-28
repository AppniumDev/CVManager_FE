import { VehicleEntity } from '../../../interfaces'
import { format } from 'date-fns'
import { GridColDef, GridColumns } from '@mui/x-data-grid'
import { Chip, Button } from '@mui/material'
import { MODALS } from '../../../components/common/ModalSwitcher/ModalSwitcher'
import { openModal } from '../../state/appViewSlice'
import { AppDispatch } from '../../state/store'

export interface IVechiclesColumns {
  dispatch: AppDispatch
}

export const vehiclesColumns = ({
  dispatch,
}: IVechiclesColumns): GridColumns<VehicleEntity> => {
  const columns: GridColDef<VehicleEntity>[] = [
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
        return <b>{format(new Date(value), 'dd/M/yyyy')}</b>
      },
    },
    {
      field: 'updatedAt',
      headerName: 'Ultimo Aggiornamento',
      flex: 1,
      renderCell({ value }) {
        return <b>{format(new Date(value), 'dd/M/yyyy hh:mm')}</b>
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
                openModal({
                  modal: MODALS.VEHICLE_FORM,
                  type: 'edit',
                  modalEntityId: row?.id.toString(),
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
