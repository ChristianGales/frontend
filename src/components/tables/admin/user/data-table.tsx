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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// import { AddUserForm } from "@/components/forms/admin/user/add-user-form"
import { User, PendingRegistration } from "@/types/admin/user"


// ─── Users data table ────────────────────────────────────────────────────────
interface UserDataTableProps {
  columns: ColumnDef<User>[]
  data: User[]
}

export function UserDataTable({ columns, data }: UserDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

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

  function handleAddUser(user: Omit<User, "id">) {
    // TODO: wire to your API / Server Action
    console.log("New user:", user)
  }

  return (
    <>
      <div className="space-y-4">

        {/* Header + Filters Card */}
        <div className="rounded-xl border bg-background p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Users Directory</h2>

            <Button onClick={() => setAddOpen(true)}>
              <Plus className="mr-1.5 size-4" />
              Add User
            </Button>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search by fullname */}
            <div className="w-full lg:max-w-sm">
              <Input
                placeholder="Search fullname..."
                value={(table.getColumn("fullname")?.getFilterValue() as string) ?? ""}
                onChange={(e) => table.getColumn("fullname")?.setFilterValue(e.target.value)}
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
                  <X className="mr-2 size-4" />
                  Reset
                </Button>
              )}

              {/* Usertype filter */}
              <Select
                value={(table.getColumn("user_type")?.getFilterValue() as string) ?? "all"}
                onValueChange={(val) =>
                  table.getColumn("user_type")?.setFilterValue(val === "all" ? "" : val)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Usertypes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Usertypes</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                  <SelectItem value="COLLEGE_REGISTRAR">College Registrar</SelectItem>
                  <SelectItem value="BASIC_EDUCATION_REGISTRAR">Basic Ed Registrar</SelectItem>
                  <SelectItem value="FACULTY">Faculty</SelectItem>
                  <SelectItem value="STUDENT">Student</SelectItem>
                  <SelectItem value="ACCOUNTING">Accounting</SelectItem>
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
                      No users found.
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

      {/* Add User Modal */}
      {/* <AddUserForm open={addOpen} onOpenChange={setAddOpen} onSubmit={handleAddUser} /> */}
    </>
  )
}

// ─── Pending registrations data table ───────────────────────────────────────
interface PendingRegistrationDataTableProps {
  columns: ColumnDef<PendingRegistration>[]
  data: PendingRegistration[]
}

export function PendingRegistrationDataTable({
  columns,
  data,
}: PendingRegistrationDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

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

  return (
    <div className="space-y-4">

      {/* Header + Filters Card */}
      <div className="rounded-xl border bg-background p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Pending Registrations</h2>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search by fullname */}
          <div className="w-full lg:max-w-sm">
            <Input
              placeholder="Search fullname..."
              value={(table.getColumn("fullname")?.getFilterValue() as string) ?? ""}
              onChange={(e) => table.getColumn("fullname")?.setFilterValue(e.target.value)}
            />
          </div>

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
                    No pending registrations.
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