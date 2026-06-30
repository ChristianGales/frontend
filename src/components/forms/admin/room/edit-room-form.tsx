"use client"

import { useState, useEffect } from "react"
import { Hash, BookOpen, File } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Room } from "@/types/admin/room"



// ─── Types ────────────────────────────────────────────────────────────────────
type EditRoomFormProps = {
  room: Room | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Room) => void
}

// ─── Edit Course Form ─────────────────────────────────────────────────────────
export function EditRoomForm({ room, open, onOpenChange, onSubmit }: EditRoomFormProps) {
  const [form, setForm] = useState({ room_code: "", room_location: "" })
  const [errors, setErrors] = useState<Partial<Record<"room_code" | "room_location", string>>>({})

  // Populate form when course changes
  useEffect(() => {
    if (room) {
      setForm({
        room_code: room.room_code,
        room_location: room.room_location,
      })
      setErrors({})
    }
  }, [room])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.room_code.trim()) next.room_code = "Room code is required."
    if (!form.room_location.trim()) next.room_location = "Room location is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate() || !room) return
    onSubmit?.({
      ...room,
      room_code: form.room_code.trim().toUpperCase(),
      room_location: form.room_location.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.room_code.trim() && !!form.room_location.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Edit Room</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="grid gap-4 py-1">
          {/* Room Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="room_code" className="flex items-center gap-1.5">
              Room Code
            </Label>
            <Input
              id="room_code"
              placeholder="ComLab-1"
              value={form.room_code}
              onChange={(e) =>
                setForm((f) => ({ ...f, room_code: e.target.value }))
              }
            />
            {errors.room_code && (
              <p className="text-xs text-red-500">{errors.room_code}</p>
            )}
          </div>

          {/* Room Location */}
          <div className="grid gap-1.5">
            <Label htmlFor="room_location" className="flex items-center gap-1.5">
              Room Location
            </Label>
            <Input
              id="room_location"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.room_location}
              onChange={(e) =>
                setForm((f) => ({ ...f, room_location: e.target.value }))
              }
            />
            {errors.room_location && (
              <p className="text-xs text-red-500">{errors.room_location}</p>
            )}
          </div>

        </div>

        <DialogFooter className="flex-row justify-end gap-2">
          <Button size="sm" onClick={handleSubmit} disabled={!canSubmit}>
            <File />
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}