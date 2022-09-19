import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
// Table components
import { TableFilter } from './TableFilter'
import { TablePagination } from './TablePagination'

interface ITableComponent<T> {
  data: T[]
  columns: ColumnDef<T, any>[]
}

const TableComponent = <T extends unknown>(options: ITableComponent<T>) => {
  const table = useReactTable({
    data: options.data,
    columns: options.columns,
    // Pipeline of plugins
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // Debug
    debugTable: true,
  })

  return (
    <div className="overflow-x-auto bg-white rounded-xl">
      <table className="w-full whitespace-nowrap">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="w-full h-20 text-sm leading-none text-gray-600"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanFilter() ? (
                        <div>
                          <TableFilter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full bg-red-400">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="h-20 text-sm leading-none text-gray-700 bg-white border-b border-gray-200 hover:bg-blue-200 hover:cursor-pointer"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot> */}
      </table>
      <TablePagination table={table} />
    </div>
  )
}

export { TableComponent }