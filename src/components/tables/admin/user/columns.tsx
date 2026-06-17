"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Eye, Pencil, Trash2, Check, X } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// import { EditUserForm } from "@/components/forms/admin/user/edit-user-form"
import { User, PendingRegistration } from "@/types/admin/user"


// ─── Usertype badge ───────────────────────────────────────────────────────
// NOTE: keys below must match your actual UserRole values from types/user.ts.
// I'm guessing ADMIN / COLLEGE_REGISTRAR / BASIC_EDUCATION_REGISTRAR / FACULTY
// / STUDENT / ACCOUNTING based on earlier conversations — adjust if off.
function UserTypeBadge({ type }: { type: User["user_type"] }) {
  const map: Record<string, { label: string; className: string }> = {
    ADMIN: {
      label: "Admin",
      className:
        "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    },
    COLLEGE_REGISTRAR: {
      label: "College Registrar",
      className:
        "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    },
    BASIC_EDUCATION_REGISTRAR: {
      label: "Basic Ed Registrar",
      className:
        "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-800",
    },
    FACULTY: {
      label: "Faculty",
      className:
        "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
    },
    STUDENT: {
      label: "Student",
      className:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    },
    ACCOUNTING: {
      label: "Accounting",
      className:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    },
  }

  const entry = map[type] ?? {
    label: type,
    className: "bg-muted text-muted-foreground border-border",
  }

  return (
    <Badge variant="outline" className={`font-medium ${entry.className}`}>
      {entry.label}
    </Badge>
  )
}

// ─── User actions cell ──────────────────────────────────────────────────────
function UserActionsCell({ user }: { user: User }) {
  const [viewOpen, setViewOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center gap-1">

        {/* View */}
        <Button
          size="sm"
          variant="ghost"
          className="h-8 gap-1.5 px-2 text-xs"
          onClick={() => setViewOpen(true)}
        >
          <Eye className="size-3.5" />
          View
        </Button>

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
              <AlertDialogTitle>Delete User?</AlertDialogTitle>
              <AlertDialogDescription>
                <span className="font-medium">
                  {user.id} — {user.fullname}
                </span>
                <br />
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-500 text-white hover:bg-red-600"
                onClick={() => console.log("Delete user", user.id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* View dialog — read-only summary for now */}
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{user.fullname}</DialogTitle>
            <DialogDescription>{user.id}</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-muted-foreground">Usertype</span>
              <UserTypeBadge type={user.user_type} />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* <EditUserForm
        user={user}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated user:", updated)}
      /> */}
    </>
  )
}

// ─── Pending registration actions cell ─────────────────────────────────────
function PendingActionsCell({ registration }: { registration: PendingRegistration }) {
  return (
    <div className="flex items-center justify-center gap-1">

      {/* Approve */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 gap-1.5 px-2 text-xs text-green-600 hover:text-green-700"
          >
            <Check className="size-3.5" />
            Approve
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Approve Registration?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="font-medium">
                {registration.id} — {registration.fullname}
              </span>
              <br />
              This will create an active account for this user.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-green-600 text-white hover:bg-green-700"
              onClick={() => console.log("Approve registration", registration.id)}
            >
              Approve
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reject */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            className="h-8 gap-1.5 px-2 text-xs text-red-500 hover:text-red-600"
          >
            <X className="size-3.5" />
            Reject
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Reject Registration?</AlertDialogTitle>
            <AlertDialogDescription>
              <span className="font-medium">
                {registration.id} — {registration.fullname}
              </span>
              <br />
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={() => console.log("Reject registration", registration.id)}
            >
              Reject
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

// ─── Column definitions ──────────────────────────────────────────────────────
export const userColumns: ColumnDef<User>[] = [
  { accessorKey: "id", header: "User ID" },
  { accessorKey: "fullname", header: "Fullname" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "user_type",
    header: "Usertype",
    cell: ({ row }) => <UserTypeBadge type={row.original.user_type} />,
  },
  {
    id: "actions",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => <UserActionsCell user={row.original} />,
  },
]

export const pendingRegistrationColumns: ColumnDef<PendingRegistration>[] = [
  { accessorKey: "id", header: "Registration ID" },
  { accessorKey: "fullname", header: "Fullname" },
  { accessorKey: "email", header: "Email" },
  {
    id: "actions",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => <PendingActionsCell registration={row.original} />,
  },
]