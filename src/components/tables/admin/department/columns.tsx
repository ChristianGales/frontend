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

import { Department } from "@/types/admin/department"
import { EditDepartmentForm } from "@/components/forms/admin/department/edit-department-form"
// import { EditCourseForm } from "@/components/forms/registrar/college/course/edit-course-form"


// ─── Actions cell ─────────────────────────────────────────────────────────────
function ActionsCell({ department }: { department: Department }) {
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
              <AlertDialogTitle>Delete Department?</AlertDialogTitle>
              <AlertDialogDescription>
                <span className="font-medium">
                  {department.department_name} — {department.department_description}
                </span>
                <br />
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => console.log("Delete course", department.department_id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <EditDepartmentForm
        department={department}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated Departmemt:", updated)}
      />
    </>
  )
}

// ─── Column definitions ───────────────────────────────────────────────────────
export const departmentColumns: ColumnDef<Department>[] = [
  { accessorKey: "department_name", header: "Department Name" },
  { accessorKey: "department_description", header: "Department Description" },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ActionsCell department={row.original} />,
  },
]