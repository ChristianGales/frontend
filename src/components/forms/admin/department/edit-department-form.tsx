"use client"

import { useState, useEffect } from "react"
import { Hash, BookOpen } from "lucide-react"

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
type EditDepartmentFormProps = {
  department: Department | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Department) => void
}

// ─── Edit Course Form ─────────────────────────────────────────────────────────
export function EditDepartmentForm({ department, open, onOpenChange, onSubmit }: EditDepartmentFormProps) {
  const [form, setForm] = useState({ department_name: "", department_description: "" })
  const [errors, setErrors] = useState<Partial<Record<"department_name" | "department_description", string>>>({})

  // Populate form when course changes
  useEffect(() => {
    if (department) {
      setForm({
        department_name: department.department_name,
        department_description: department.department_description,
      })
      setErrors({})
    }
  }, [department])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.department_name.trim()) next.department_name = "Department name is required."
    if (!form.department_description.trim()) next.department_description = "Department Description is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate() || !department) return
    onSubmit?.({
      ...department,
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
          <DialogTitle className="text-base font-semibold">Edit Department</DialogTitle>
        </DialogHeader>

        <Separator />

        {/* Course identity strip */}
        {department && (
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {department.department_name.split(/[\s-]/)[0].slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{department.department_name}</p>
              <p className="truncate text-xs text-muted-foreground">{department.department_description}</p>
            </div>
          </div>
        )}

        <div className="grid gap-4 py-1">

          {/* Course Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="department_name" className="flex items-center gap-1.5">
              Course Code
            </Label>
            <Input
              id="department_name"
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
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}