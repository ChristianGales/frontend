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

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Subject } from "@/types/subject"
import { EditSubjectForm } from "@/components/forms/registrar/college/subject/edit-subject-form"


// ─── Subject Type badge ───────────────────────────────────────────────────────
function SubjectTypeBadge({ type }: { type: Subject["subject_type"] }) {
  const map: Record<Subject["subject_type"], { label: string; className: string }> = {
    GE: {
      label: "GE",
      className:
        "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    },
    Mandatory: {
      label: "Mandatory",
      className:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    },
    Major: {
      label: "Major",
      className:
        "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
    },
  }

  const { label, className } = map[type]
  return (
    <Badge variant="outline" className={`font-medium ${className}`}>
      {label}
    </Badge>
  )
}

// ─── Latin Honors badge ───────────────────────────────────────────────────────
function LatinHonorsBadge({ value }: { value: boolean }) {
  return value ? (
    <Badge
      variant="outline"
      className="bg-green-100 text-green-800 border-green-200 font-medium dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
    >
      Yes
    </Badge>
  ) : (
    <Badge
      variant="outline"
      className="bg-muted text-muted-foreground border-border font-medium"
    >
      No
    </Badge>
  )
}

// ─── Actions cell ─────────────────────────────────────────────────────────────
function ActionsCell({ subject }: { subject: Subject }) {
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
              <AlertDialogTitle>Delete Subject?</AlertDialogTitle>
              <AlertDialogDescription>
                <span className="font-medium">
                  {subject.subject_code} — {subject.subject_title}
                </span>
                <br />
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => console.log("Delete subject", subject.id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <EditSubjectForm
        subject={subject}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated subject:", updated)}
      />
    </>
  )
}

// ─── Column definitions ───────────────────────────────────────────────────────
export const subjectColumns: ColumnDef<Subject>[] = [
  { accessorKey: "subject_code", header: "Subject Code" },
  { accessorKey: "subject_title", header: "Subject Title" },
  {
    accessorKey: "subject_type",
    header: "Type",
    cell: ({ row }) => <SubjectTypeBadge type={row.original.subject_type} />,
  },
  {
    accessorKey: "units",
    header: "Units",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.units}</span>
    ),
  },
  {
    accessorKey: "include_in_latin_honors",
    header: "Latin Honors",
    cell: ({ row }) => (
      <LatinHonorsBadge value={row.original.include_in_latin_honors} />
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ActionsCell subject={row.original} />,
  },
]