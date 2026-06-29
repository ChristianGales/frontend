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
import { Designation } from "@/types/admin/designation"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { departments } from "@/lib/dummy/admin/department"


// ─── Types ────────────────────────────────────────────────────────────────────
type EditDesignationFormProps = {
  designation: Designation | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Designation) => void
}

// ─── Edit Course Form ─────────────────────────────────────────────────────────
export function EditDesignationForm({ designation, open, onOpenChange, onSubmit }: EditDesignationFormProps) {
  const [form, setForm] = useState({ department_id: "", position: "", designation_description: "", })
  const [errors, setErrors] = useState<Partial<Record<"department_id" | "position" | "designation_description", string>>>({})

  // Populate form when course changes
  useEffect(() => {
    if (designation) {
      setForm({
        department_id: designation.department_id,
        position: designation.position,
        designation_description: designation.designation_description,
      })
      setErrors({})
    }
  }, [designation])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
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
    if (!validate() || !designation) return
    onSubmit?.({
      ...designation,
      department_id: form.department_id.trim(),
      position: form.position.trim(),
      designation_description: form.department_id.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.department_id.trim() && !!form.position.trim() && !!form.designation_description.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Edit Designation</DialogTitle>
        </DialogHeader>

        <Separator />

        {/* Course identity strip */}
        {/* {department && (
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {department.department_name.split(/[\s-]/)[0].slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{department.department_name}</p>
              <p className="truncate text-xs text-muted-foreground">{department.department_description}</p>
            </div>
          </div>
        )} */}

        <div className="grid gap-4 py-1">

          {/* Department */}
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
              Department Description
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
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}