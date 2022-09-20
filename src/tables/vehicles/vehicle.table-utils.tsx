import { createColumnHelper } from '@tanstack/react-table'
import { VehicleEntity } from '../../../interfaces'
import { format } from 'date-fns'
import { Button, ButtonType } from '../../../components/Form/Button'
import { Badge, BadgeColor } from '../../../components/Form/Badge'

const columnHelper = createColumnHelper<VehicleEntity>()

export const vehiclesColumns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
    header: () => <span>Furgone</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor((row) => row.licensePlate, {
    id: 'licensePlate',
    cell: (info) => <Badge color={BadgeColor.Indigo}>{info.getValue()}</Badge>,
    header: () => <span>Targa</span>,
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor('buildDate', {
    header: () => 'Anno immatricolazione',
    cell: (info) => (
      <Badge color={BadgeColor.Green}>
        {format(new Date(info.getValue()), 'MM/yyyy')}
      </Badge>
    ),
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
    cell: ({ row }) => (
      <Button
        text={'Modifica'}
        type={ButtonType.Primary}
        link={`/veicoli/${row.original.id}`}
      />
    ),
  }),
]
