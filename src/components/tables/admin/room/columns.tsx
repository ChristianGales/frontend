"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { EditRoomForm } from "@/components/forms/admin/room/edit-room-form"
import { Room } from "@/types/admin/room"

// ─── Actions cell ─────────────────────────────────────────────────────────────
function ActionsCell({ room }: { room: Room }) {
  const [editOpen, setEditOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

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
        <Button
          size="sm"
          variant="ghost"
          className="h-8 gap-1.5 px-2 text-xs text-red-500 hover:text-red-600"
          onClick={() => setDeleteOpen(true)}
        >
          <Trash2 className="size-3.5" />
          Delete
        </Button>
      </div>

      {/* Delete Dialog */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-base font-semibold">
              Delete Room
            </DialogTitle>
          </DialogHeader>

          <Separator />

          <div className="text-center py-2 text-sm">
            <p className="text-muted-foreground">
              Are you sure you want to delete this room?
            </p>
          </div>

          {/* identity strip */}
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {room.room_code.slice(0, 2).toUpperCase()}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium">
                {room.room_code}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {room.room_location}
              </p>
            </div>
          </div>

          

          <DialogFooter className="flex-row justify-end gap-2">
            <Button
              size="sm"
              className="bg-[var(--danger)] text-[var(--danger-foreground)] hover:bg-[var(--danger)]/90"
              onClick={() => {
                console.log("Delete Room", room.room_id)
                setDeleteOpen(false)
              }}
            >
              <Trash2 className="size-4" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Form */}
      <EditRoomForm
        room={room}
        open={editOpen}
        onOpenChange={setEditOpen}
        onSubmit={(updated) => console.log("Updated Room:", updated)}
      />
    </>
  )
}

// ─── Column definitions ───────────────────────────────────────────────────────
export const roomColumns: ColumnDef<Room>[] = [
  { accessorKey: "room_code", header: "Room Code" },
  { accessorKey: "room_location", header: "Room Location" },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => <ActionsCell room={row.original} />,
  },
]