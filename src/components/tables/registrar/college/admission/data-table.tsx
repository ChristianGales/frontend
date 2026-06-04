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

import { ListFilter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { COURSES } from "@/lib/dummy/courses"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] =
    React.useState<SortingState>([])

  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([])

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

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

    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="space-y-4">

  {/* Header + Filters Card */}
  <div className="rounded-xl border bg-background p-4 shadow-sm">
    <div className="mb-4">
      <h2 className="text-lg font-semibold">
        Admissions Directory
      </h2>
    </div>

    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="w-full lg:max-w-sm">
        <Input
          placeholder="Search applicant..."
          value={
            (table.getColumn("fullName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("fullName")?.setFilterValue(event.target.value)
          }
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        {isFiltered && (
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="min-w-[110px]"
          >
            <X className="mr-2 h-4 w-4" />
            Reset
          </Button>
        )}

        {/* Date */}
        <Input
          type="date"
          value={
            (table.getColumn("appliedAt")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("appliedAt")?.setFilterValue(event.target.value)
          }
          className="w-[160px]"
        />

        {/* Course */}
        <Select
          value={
            (table.getColumn("course")?.getFilterValue() as string) ?? "all"
          }
          onValueChange={(val) =>
            table.getColumn("course")?.setFilterValue(
              val === "all" ? "" : val
            )
          }
        >
          <SelectTrigger className="w-[190px]">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>

            {COURSES.map((course) => (
              <SelectItem key={course.value} value={course.value}>
                {course.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Admission For */}
        <Select
          value={
            (table.getColumn("admissionFor")?.getFilterValue() as string) ??
            "all"
          }
          onValueChange={(val) =>
            table
              .getColumn("admissionFor")
              ?.setFilterValue(val === "all" ? "" : val)
          }
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Admission For" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="College">College</SelectItem>
            <SelectItem value="PTCP">PTCP</SelectItem>
          </SelectContent>
        </Select>
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
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No applications found.
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
  )
}