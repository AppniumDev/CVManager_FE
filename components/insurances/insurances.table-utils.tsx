import { InsuranceEntity } from '../../interfaces'
import { format } from 'date-fns'
import { GridColDef, GridColumns } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { MODALS_PRIMARY } from '../common/ModalSwitcher/PrimaryModalSwitcher'
import { openPrimaryModal } from '../../src/state/appViewSlice'
import { AppDispatch } from '../../src/state/store'

export interface IInsurancesColumns {
  dispatch: AppDispatch
}

export const insurancesColumns = ({
  dispatch,
}: IInsurancesColumns): GridColumns<InsuranceEntity> => {
  const columns: GridColDef<InsuranceEntity>[] = [
    { field: 'vehicleId', headerName: 'Nome veicolo', flex: 1 },
    {
      field: 'insuranceCompany',
      headerName: 'Compagnia assicurativa',
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Prezzo',
      flex: 1,
    },
    {
      field: 'startDate',
      headerName: 'Data inizio',
      flex: 1,
      renderCell({ value }) {
        return <b>{format(new Date(value), 'dd/M/yyyy')}</b>
      },
    },
    {
      field: 'endDate',
      headerName: 'Data fine',
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
