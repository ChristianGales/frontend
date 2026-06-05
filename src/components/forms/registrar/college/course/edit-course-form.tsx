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

import { Course } from "@/types/registrar/college/course"

// ─── Types ────────────────────────────────────────────────────────────────────
type EditCourseFormProps = {
  course: Course | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Course) => void
}

// ─── Edit Course Form ─────────────────────────────────────────────────────────
export function EditCourseForm({ course, open, onOpenChange, onSubmit }: EditCourseFormProps) {
  const [form, setForm] = useState({ course_code: "", course_name: "" })
  const [errors, setErrors] = useState<Partial<Record<"course_code" | "course_name", string>>>({})

  // Populate form when course changes
  useEffect(() => {
    if (course) {
      setForm({
        course_code: course.course_code,
        course_name: course.course_name,
      })
      setErrors({})
    }
  }, [course])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.course_code.trim()) next.course_code = "Course code is required."
    if (!form.course_name.trim()) next.course_name = "Course name is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate() || !course) return
    onSubmit?.({
      ...course,
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
          <DialogTitle className="text-base font-semibold">Edit Course</DialogTitle>
        </DialogHeader>

        <Separator />

        {/* Course identity strip */}
        {course && (
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {course.course_code.split(/[\s-]/)[0].slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{course.course_code}</p>
              <p className="truncate text-xs text-muted-foreground">{course.course_name}</p>
            </div>
          </div>
        )}

        <div className="grid gap-4 py-1">

          {/* Course Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-course-code" className="flex items-center gap-1.5">
              <Hash className="size-3.5 text-muted-foreground" />
              Course Code
            </Label>
            <Input
              id="edit-course-code"
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
            <Label htmlFor="edit-course-name" className="flex items-center gap-1.5">
              <BookOpen className="size-3.5 text-muted-foreground" />
              Course Name
            </Label>
            <Input
              id="edit-course-name"
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
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}