"use client"

import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Room } from "@/types/admin/room"
import { AddRoomForm } from "@/components/forms/admin/room/add-department-form"

// import { Course } from "@/types/registrar/college/course"
// import { AddCourseForm } from "@/components/forms/registrar/college/course/add-course-form"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function RoomDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  // ── Add Department modal state ────────────────────────────────────────────────────
  const [addOpen, setAddOpen] = React.useState(false)

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters, columnVisibility },
  })

  const isFiltered = table.getState().columnFilters.length > 0

  function handleAddRoom(room: Omit<Room, "room_id">) {
    // TODO: wire to your API / state management
    console.log("New Room:", room)
  }

  return (
    <>
      <div className="space-y-4">

        {/* Header + Filters Card */}
        <div className="rounded-xl border bg-background p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Room Directory</h2>

            <Button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-white transition" onClick={() => setAddOpen(true)}>
              <Plus className="mr-1.5 size-4" />
              Add Room
            </Button>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search by name */}
            <div className="w-full lg:max-w-sm">
              <Input
                placeholder="Search room name..."
                value={
                  (table.getColumn("room_code")?.getFilterValue() as string) ?? ""
                }
                onChange={(e) =>
                  table.getColumn("room_code")?.setFilterValue(e.target.value)
                }
              />
            </div>

            {/* Reset filters */}
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              {isFiltered && (
                <Button
                  variant="outline"
                  onClick={() => table.resetColumnFilters()}
                  className="min-w-[110px]"
                >
                  <X className="mr-2 size-4" />
                  Reset
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="rounded-xl border bg-background p-4 shadow-sm">
          <div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No Room found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>

      </div>

      {/* Add Course Modal */}
      <AddRoomForm
        open={addOpen}
        onOpenChange={setAddOpen}
        onSubmit={handleAddRoom}
      />
    </>
  )
}