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
import { Department } from "@/types/admin/department"


// ─── Types ────────────────────────────────────────────────────────────────────
type AddDepartmentFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (department: Omit<Department, "department_id">) => void
}

// ─── Default form state ───────────────────────────────────────────────────────
const defaultForm = {
  department_name: "",
  department_description: "",
}

// ─── Add Course Form ──────────────────────────────────────────────────────────
export function AddDepartmentForm({ open, onOpenChange, onSubmit }: AddDepartmentFormProps) {
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
    if (!form.department_name.trim()) next.department_name = "Course code is required."
    if (!form.department_description.trim()) next.department_description = "Course name is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate()) return
    onSubmit?.({
      department_name: form.department_name.trim().toUpperCase(),
      department_description: form.department_description.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.department_name.trim() && !!form.department_description.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add Department</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="grid gap-4 py-1">

          {/* Course Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="departement_name" className="flex items-center gap-1.5">
              Department Name
            </Label>
            <Input
              id="departement_name"
              placeholder="e.g. BSIT"
              value={form.department_name}
              onChange={(e) =>
                setForm((f) => ({ ...f, department_name: e.target.value }))
              }
            />
            {errors.department_name && (
              <p className="text-xs text-red-500">{errors.department_name}</p>
            )}
          </div>

          {/* Course Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="department_description" className="flex items-center gap-1.5">
              Department Description
            </Label>
            <Input
              id="department_description"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.department_description}
              onChange={(e) =>
                setForm((f) => ({ ...f, department_description: e.target.value }))
              }
            />
            {errors.department_description && (
              <p className="text-xs text-red-500">{errors.department_description}</p>
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