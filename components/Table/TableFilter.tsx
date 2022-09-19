import { Column, Table as ReactTable } from '@tanstack/react-table'
import { InputNumber } from '../Form/InputNumber'
import { InputText } from '../Form/InputText'

export const TableFilter = ({
  column,
  table,
}: {
  column: Column<any, any>
  table: ReactTable<any>
}) => {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <InputNumber
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(value) => {
          column.setFilterValue((old: [number, number]) => [value, old?.[1]])
        }}
        placeholder={`Min`}
      />
      <InputNumber
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(value) => {
          column.setFilterValue((old: [number, number]) => [old?.[0], value])
        }}
        placeholder={`Max`}
      />
    </div>
  ) : (
    <InputText
      value={(columnFilterValue ?? '') as string}
      onChange={(value) => {
        console.log('onChange value', value)
        column.setFilterValue(value)
      }}
      placeholder={`Cerca...`}
    />
  )
}
