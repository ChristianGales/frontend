"use client"

import { useState } from "react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

import { course } from "@/lib/dummy/registrar/college/course"
import { Curriculum } from "@/types/registrar/college/curriculum"

// ─── Types ────────────────────────────────────────────────────────────────────
type AddCurriculumFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (curriculum: Omit<Curriculum, "id">) => void
}

// ─── Default form state ───────────────────────────────────────────────────────
const defaultForm = {
  course_id: "",
  curriculum_year: "",
  curriculum_description: "",
}

// ─── Add Course Form ──────────────────────────────────────────────────────────
export function AddCurriculumForm({ open, onOpenChange, onSubmit }: AddCurriculumFormProps) {
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
    if (!form.course_id.trim()) next.course_id = "Course is required."
    if (!form.curriculum_year.trim()) next.curriculum_year = "Curriculum Year is required."
    if (!form.curriculum_description.trim()) next.curriculum_description = "Curriculum Description is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate()) return
    onSubmit?.({
      course_id: form.course_id.trim(),
      curriculum_year: form.curriculum_year.trim().toUpperCase(),
      curriculum_description: form.curriculum_description.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.course_id.trim() && !!form.curriculum_year.trim() && !!form.curriculum_description.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add Curriculum</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="grid gap-4 py-1">

          {/* Course */}
          <div className="grid gap-1.5">
            <Label htmlFor="course-id" className="flex items-center gap-1.5">
              Course
            </Label>
            <Select
              value={form.course_id}
              onValueChange={(value) => setForm((f) => ({ ...f, course_id: value }))}
            >
              <SelectTrigger id="course-id" className="w-full">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {course.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.course_code} — {item.course_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.course_id && (
              <p className="text-xs text-red-500">{errors.course_id}</p>
            )}
          </div>

          {/* Curriculum Year */}
          <div className="grid gap-1.5">
            <Label htmlFor="curriculum-year" className="flex items-center gap-1.5">
              Curriculum Year
            </Label>
            <Input
              id="curriculum-year"
              placeholder="e.g. 2024-2025"
              value={form.curriculum_year}
              onChange={(e) =>
                setForm((f) => ({ ...f, curriculum_year: e.target.value }))
              }
            />
            {errors.curriculum_year && (
              <p className="text-xs text-red-500">{errors.curriculum_year}</p>
            )}
          </div>

          {/* Curriculum Description */}
          <div className="grid gap-1.5">
            <Label htmlFor="curriculum-description" className="flex items-center gap-1.5">
              Curriculum Description
            </Label>
            <Input
              id="curriculum-description"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.curriculum_description}
              onChange={(e) =>
                setForm((f) => ({ ...f, curriculum_description: e.target.value }))
              }
            />
            {errors.curriculum_description && (
              <p className="text-xs text-red-500">{errors.curriculum_description}</p>
            )}
          </div>


        </div>

        <Separator />

        <DialogFooter className="flex-row justify-end gap-2">
          <Button variant="outline" size="sm" onClick={handleClose}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSubmit} disabled={!canSubmit}>
            Add Course
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}