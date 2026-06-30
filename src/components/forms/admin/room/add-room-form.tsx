"use client"

import { useState } from "react"

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

import { appAlert } from "@/lib/alerts"
import { Check, Plus } from "lucide-react"


// ─── Types ────────────────────────────────────────────────────────────────────
type AddRoomFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (room: Omit<Room, "room_id">) => void
}

// ─── Default form state ───────────────────────────────────────────────────────
const defaultForm = {
  room_code: "",
  room_location: "",
}

// ─── Add Course Form ──────────────────────────────────────────────────────────
export function AddRoomForm({ open, onOpenChange, onSubmit }: AddRoomFormProps) {
  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState<Partial<Record<keyof typeof defaultForm, string>>>({})

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => {
      setForm(defaultForm)
      setErrors({})
    }, 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.room_code.trim()) next.room_code = "Room code is required."
    if (!form.room_location.trim()) next.room_location = "Room Location is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate()) {
      appAlert.error(
        "Missing required fields",
        "Please fill in the room code and location before submitting."
      )
      return
    }

    try {
      onSubmit?.({
        room_code: form.room_code.trim(),
        room_location: form.room_location.trim(),
      })
      appAlert.success(
        "Room added",
        `${form.room_code.trim()} has been added successfully.`
      )
      handleClose()
    } catch (err) {
      appAlert.error(
        "Failed to add room",
        "Something went wrong while saving the room. Please try again."
      )
    }
  }

  const canSubmit = !!form.room_code.trim() && !!form.room_location.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add Department</DialogTitle>
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
              placeholder="ComLab 1"
              value={form.room_code}
              onChange={(e) =>
                setForm((f) => ({ ...f, room_code: e.target.value }))
              }
            />
            {errors.room_code && (
              <p className="text-xs text-red-500">{errors.room_code}</p>
            )}
          </div>

          {/*  Room Location */}
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
            <Plus />
            Add Room
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}