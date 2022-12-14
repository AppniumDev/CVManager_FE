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
        <div className="fixed left-0 right-0 flex items-center justify-center ml-auto mr-auto bottom-6">
          <div className="flex items-center justify-center w-full max-w-3xl gap-2 px-12 py-6 bg-white rounded-xl shrink">
            <button
              className="w-10 h-10 p-1 border rounded cursor-pointer"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              className="w-10 h-10 p-1 border rounded cursor-pointer"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<'}
            </button>
            <button
              className="w-10 h-10 p-1 border rounded cursor-pointer"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>'}
            </button>
            <button
              className="w-10 h-10 p-1 border rounded cursor-pointer"
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
