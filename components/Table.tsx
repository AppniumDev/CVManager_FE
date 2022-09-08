import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface ITable<T> {
  data: T[]
  columns: ColumnDef<T, any>[]
}

const Table = <T extends unknown>(options: ITable<T>) => {
  const table = useReactTable({
    data: options.data,
    columns: options.columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return <></>
}

export { Table }
