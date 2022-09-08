import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { VehicleEntity } from '../../../interfaces'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const columnHelper = createColumnHelper<VehicleEntity>()

export const vehiclesColumns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Furgone</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor((row) => row.licensePlate, {
    id: 'licensePlate',
    cell: (info) => <b>{info.getValue()}</b>,
    header: () => <span>Targa</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('buildDate', {
    header: () => 'Anno immatricolazione',
    cell: (info) => <b>{format(new Date(info.getValue()), 'MM/yyyy')}</b>,
    footer: (props) => props.column.id,
  }),

  columnHelper.accessor('updatedAt', {
    header: () => <span>Last updated</span>,
    cell: (info) => (
      <b>{format(new Date(info.getValue()), 'dd/M/yyyy hh:mm')}</b>
    ),
    footer: (props) => props.column.id,
  }),
  // Display Column
  columnHelper.display({
    id: 'actions',
    cell: (props) => <div>Actions buttons</div>,
  }),
]