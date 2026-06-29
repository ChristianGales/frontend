"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { departments } from "@/lib/dummy/admin/department"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Designation } from "@/types/admin/designation"



// ─── Types ────────────────────────────────────────────────────────────────────
type AddDesignationFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (designation: Omit<Designation, "designation_id">) => void
}

// ─── Default form state ───────────────────────────────────────────────────────
const defaultForm = {
  department_id: "",
  position: "",
  designation_description: "",
}

// ─── Add Course Form ──────────────────────────────────────────────────────────
export function AddDesignationForm({ open, onOpenChange, onSubmit }: AddDesignationFormProps) {
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
    if (!form.department_id.trim()) next.department_id = "Department is required."
    if (!form.position.trim()) next.position = "Position name is required."
    if (!form.designation_description.trim()) next.designation_description = "Designattion Description is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate()) return
    onSubmit?.({
      department_id: form.department_id.trim(),
      position: form.position.trim(),
      designation_description: form.designation_description.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.department_id.trim() && !!form.position.trim() && !!form.designation_description.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add Designation</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="grid gap-4 py-1">

          {/* Department  */}
          <div className="grid gap-1.5">
            <Label htmlFor="department_id" className="flex items-center gap-1.5">
              Department
            </Label>
            <Select
              value={form.department_id}
              onValueChange={(value) =>
                setForm((f) => ({ ...f, department_id: value }))
              }
            >
              <SelectTrigger id="department_id" className="w-full">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((department) => (
                  <SelectItem
                    key={department.department_id}
                    value={department.department_id}
                  >
                    {department.department_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.department_id && (
              <p className="text-xs text-red-500">{errors.department_id}</p>
            )}
          </div>

          {/* Course Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="position" className="flex items-center gap-1.5">
              Position
            </Label>
            <Input
              id="position"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.position}
              onChange={(e) =>
                setForm((f) => ({ ...f, position: e.target.value }))
              }
            />
            {errors.position && (
              <p className="text-xs text-red-500">{errors.position}</p>
            )}
          </div>

          {/*  */}
          <div className="grid gap-1.5">
            <Label htmlFor="designation_description" className="flex items-center gap-1.5">
              Designation Description
            </Label>
            <Input
              id="designation_description"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.designation_description}
              onChange={(e) =>
                setForm((f) => ({ ...f, designation_description: e.target.value }))
              }
            />
            {errors.designation_description && (
              <p className="text-xs text-red-500">{errors.designation_description}</p>
            )}
          </div>

        </div>

        <Separator />

        <DialogFooter className="flex-row justify-end gap-2">
          <Button size="sm" onClick={handleSubmit} disabled={!canSubmit}>
            Add Department
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}