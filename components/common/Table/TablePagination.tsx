import { Table } from '@tanstack/table-core'

interface ITablePagination<T> {
  table: Table<T>
}

export const TablePagination = <T extends unknown>({
  table,
}: ITablePagination<T>) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between my-6">
        <div>{table.getRowModel().rows.length} Rows</div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-full gap-2 px-12 py-6 bg-white rounded-xl shrink">
            <button
              className="p-1 border rounded"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              className="p-1 border rounded"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<'}
            </button>
            <button
              className="p-1 border rounded"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>'}
            </button>
            <button
              className="p-1 border rounded"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </button>
            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="flex items-center gap-1">
              | Go to page:
              <input
                type="number"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
                }}
                className="w-16 p-1 border border-gray-300 rounded"
              />
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
              className="w-24 p-1 border border-gray-300 rounded"
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
