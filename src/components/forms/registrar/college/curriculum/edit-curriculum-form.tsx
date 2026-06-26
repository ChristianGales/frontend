"use client"

import { useState, useEffect } from "react"
import { BookOpen, Hash, FlaskConical, Sigma, Award } from "lucide-react"

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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { curriculum } from "@/lib/dummy/registrar/college/curriculum"
import { Curriculum } from "@/types/registrar/college/curriculum"
import { course } from "@/lib/dummy/registrar/college/course"

const courseOptions = Array.isArray(course) ? course : []

// ─── Types ────────────────────────────────────────────────────────────────────
type EditCurriculumFormProps = {
  curriculum: Curriculum | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Curriculum) => void
}

type FormState = {
  course_id: string
  curriculum_year: string
  curriculum_description: string
}

// ─── Edit Subject Form ────────────────────────────────────────────────────────
export function EditCurriculumForm({ curriculum, open, onOpenChange, onSubmit }: EditCurriculumFormProps) {
  const [form, setForm] = useState<FormState>({
    course_id: "",
    curriculum_year: "",
    curriculum_description: "",
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  // Populate form when subject changes
  useEffect(() => {
    if (curriculum) {
      setForm({
        course_id: curriculum.course_id,
        curriculum_year: curriculum.curriculum_year,
        curriculum_description: curriculum.curriculum_description,
      })
      setErrors({})
    }
  }, [curriculum])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.course_id.trim()) next.course_id = "Course is required."
    if (!form.curriculum_year.trim()) next.curriculum_year = "Curriculum Year is required."
    if (!form.curriculum_description) next.curriculum_description = "Subject type is required."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate() || !curriculum) return
    onSubmit?.({
      ...curriculum,
      course_id: form.course_id.trim(),
      curriculum_year: form.curriculum_year.trim(),
      curriculum_description: form.curriculum_description.trim(),
    })
    handleClose()
  }

  const canSubmit =
    !!form.course_id.trim() &&
    !!form.curriculum_description.trim() &&
    !!form.curriculum_year 
   

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Edit Curriculum</DialogTitle>
        </DialogHeader>

        <Separator />

        {/* Subject identity strip */}
        {curriculum && (
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {curriculum.curriculum_description.replace(/\s/g, "").slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
             
              <p className="truncate text-sm font-medium">{curriculum.course_id}</p>
              <p className="truncate text-xs text-muted-foreground">{curriculum.curriculum_year}</p>
              <p className="truncate text-xs text-muted-foreground">{curriculum.curriculum_description}</p>
            </div>
          </div>
        )}

        <div className="grid gap-4 py-1">

          {/* Course */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-subject-code" className="flex items-center gap-1.5">
              Subject Code
            </Label>
            <Select
                value={form.course_id}
                onValueChange={(value) => setForm((f) => ({ ...f, course_id: value }))}
                >
                <SelectTrigger id="edit-course-id" className="w-full">
                    <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                    {courseOptions.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                        {item.course_code} - {item.course_name}
                    </SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>

          {/* Curriculum Year */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-curriculum-year" className="flex items-center gap-1.5">
              Curriculum Year
            </Label>
            <Input
              id="edit-curriculum-year"
              value={form.curriculum_year}
              onChange={(e) => setForm((f) => ({ ...f, curriculum_year: e.target.value }))}
            />
            {errors.curriculum_year && (
              <p className="text-xs text-red-500">{errors.curriculum_year}</p>
            )}
          </div>

          {/* Curriculum Description */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-curriculum-description" className="flex items-center gap-1.5">
              Curriculum Description
            </Label>
            <Input
              id="edit-curriculum-description"
              placeholder="e.g. Understanding the Self"
              value={form.curriculum_description}
              onChange={(e) => setForm((f) => ({ ...f, curriculum_description: e.target.value }))}
            />
            {errors.curriculum_description && (
              <p className="text-xs text-red-500">{errors.curriculum_description}</p>
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