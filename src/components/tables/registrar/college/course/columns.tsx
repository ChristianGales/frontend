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

import { Course } from "@/types/registrar/college/course"
import { EditCourseForm } from "@/components/forms/registrar/college/course/edit-course-form"


// ─── Actions cell ─────────────────────────────────────────────────────────────
function ActionsCell({ course }: { course: Course }) {
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
              <AlertDialogTitle>Delete Course?</AlertDialogTitle>
              <AlertDialogDescription>
                <span className="font-medium">
                  {course.course_code} — {course.course_name}
                </span>
                <br />
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => console.log("Delete course", course.id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <EditCourseForm
        course={course}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated course:", updated)}
      />
    </>
  )
}

// ─── Column definitions ───────────────────────────────────────────────────────
export const courseColumns: ColumnDef<Course>[] = [
  { accessorKey: "course_code", header: "Course Code" },
  { accessorKey: "course_name", header: "Course Name" },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ActionsCell course={row.original} />,
  },
]