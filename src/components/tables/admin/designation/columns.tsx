"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button"
import { Designation } from "@/types/admin/designation"
import { departments } from "@/lib/dummy/admin/department"
import { EditDesignationForm } from "@/components/forms/admin/designation/edit-department-form"




// ─── Actions cell ─────────────────────────────────────────────────────────────
function ActionsCell({ designation }: { designation: Designation }) {
  const [editOpen, setEditOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center gap-1">

        {/* Edit */}
        <Button
          size="sm"
          variant="ghost"
          className="h-8 gap-1.5 px-2 text-xs"
          onClick={() => setEditOpen(true)}
        >
          <Pencil className="size-3.5" />
          Edit
        </Button>

        {/* Delete */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 gap-1.5 px-2 text-xs text-red-500 hover:text-red-600"
            >
              <Trash2 className="size-3.5" />
              Delete
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Designation?</AlertDialogTitle>
              <AlertDialogDescription>
                <span className="font-medium">
                  {designation.position} — {designation.department_id}
                </span>
                <br />
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => console.log("Delete Designation", designation.designation_id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <EditDesignationForm
        designation={designation}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated Designation:", updated)}
      />
    </>
  )
}

// ─── Column definitions ───────────────────────────────────────────────────────
export const designationColumns: ColumnDef<Designation>[] = [
  { accessorKey: "designation_id", header: "Designation ID" },
  {
    accessorKey: "department_id",
    header: "Department",
    cell: ({ row }) => {
      const department = departments.find(
        (d) => d.department_id === row.original.department_id
      )
      return department?.department_name ?? row.original.department_id
    },
  },
  { accessorKey: "position", header: "Position"},
  { accessorKey: "designation_description", header: "Description"},
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ActionsCell designation={row.original} />,
  },
]