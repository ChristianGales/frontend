"use client"

import { useState } from "react"
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

import { Course } from "@/types/registrar/college/course"

// ─── Types ────────────────────────────────────────────────────────────────────
type AddCourseFormProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (course: Omit<Course, "id">) => void
}

// ─── Default form state ───────────────────────────────────────────────────────
const defaultForm = {
  course_code: "",
  course_name: "",
}

// ─── Add Course Form ──────────────────────────────────────────────────────────
export function AddCourseForm({ open, onOpenChange, onSubmit }: AddCourseFormProps) {
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
    if (!form.course_code.trim()) next.course_code = "Course code is required."
    if (!form.course_name.trim()) next.course_name = "Course name is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate()) return
    onSubmit?.({
      course_code: form.course_code.trim().toUpperCase(),
      course_name: form.course_name.trim(),
    })
    handleClose()
  }

  const canSubmit = !!form.course_code.trim() && !!form.course_name.trim()

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Add Course</DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="grid gap-4 py-1">

          {/* Course Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="course-code" className="flex items-center gap-1.5">
              <Hash className="size-3.5 text-muted-foreground" />
              Course Code
            </Label>
            <Input
              id="course-code"
              placeholder="e.g. BSIT"
              value={form.course_code}
              onChange={(e) =>
                setForm((f) => ({ ...f, course_code: e.target.value }))
              }
            />
            {errors.course_code && (
              <p className="text-xs text-red-500">{errors.course_code}</p>
            )}
          </div>

          {/* Course Name */}
          <div className="grid gap-1.5">
            <Label htmlFor="course-name" className="flex items-center gap-1.5">
              <BookOpen className="size-3.5 text-muted-foreground" />
              Course Name
            </Label>
            <Input
              id="course-name"
              placeholder="e.g. Bachelor of Science in Information Technology"
              value={form.course_name}
              onChange={(e) =>
                setForm((f) => ({ ...f, course_name: e.target.value }))
              }
            />
            {errors.course_name && (
              <p className="text-xs text-red-500">{errors.course_name}</p>
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