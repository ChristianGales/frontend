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
import { Subject } from "@/types/registrar/college/subject"



// ─── Types ────────────────────────────────────────────────────────────────────
type EditSubjectFormProps = {
  subject: Subject | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit?: (updated: Subject) => void
}

type FormState = {
  subject_code: string
  subject_title: string
  subject_type: Subject["subject_type"] | ""
  units: string
  include_in_latin_honors: boolean
}

// ─── Edit Subject Form ────────────────────────────────────────────────────────
export function EditSubjectForm({ subject, open, onOpenChange, onSubmit }: EditSubjectFormProps) {
  const [form, setForm] = useState<FormState>({
    subject_code: "",
    subject_title: "",
    subject_type: "",
    units: "",
    include_in_latin_honors: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  // Populate form when subject changes
  useEffect(() => {
    if (subject) {
      setForm({
        subject_code: subject.subject_code,
        subject_title: subject.subject_title,
        subject_type: subject.subject_type,
        units: String(subject.units),
        include_in_latin_honors: subject.include_in_latin_honors,
      })
      setErrors({})
    }
  }, [subject])

  function handleClose() {
    onOpenChange(false)
    setTimeout(() => setErrors({}), 200)
  }

  function validate() {
    const next: typeof errors = {}
    if (!form.subject_code.trim()) next.subject_code = "Subject code is required."
    if (!form.subject_title.trim()) next.subject_title = "Subject title is required."
    if (!form.subject_type) next.subject_type = "Subject type is required."
    if (!form.units || isNaN(Number(form.units)) || Number(form.units) <= 0)
      next.units = "Enter a valid number of units."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit() {
    if (!validate() || !subject) return
    onSubmit?.({
      ...subject,
      subject_code: form.subject_code.trim(),
      subject_title: form.subject_title.trim(),
      subject_type: form.subject_type as Subject["subject_type"],
      units: Number(form.units),
      include_in_latin_honors: form.include_in_latin_honors,
    })
    handleClose()
  }

  const canSubmit =
    !!form.subject_code.trim() &&
    !!form.subject_title.trim() &&
    !!form.subject_type &&
    !!form.units &&
    !isNaN(Number(form.units)) &&
    Number(form.units) > 0

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">Edit Subject</DialogTitle>
        </DialogHeader>

        <Separator />

        {/* Subject identity strip */}
        {subject && (
          <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-3 py-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground select-none">
              {subject.subject_code.replace(/\s/g, "").slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{subject.subject_code}</p>
              <p className="truncate text-xs text-muted-foreground">{subject.subject_title}</p>
            </div>
          </div>
        )}

        <div className="grid gap-4 py-1">

          {/* Subject Code */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-subject-code" className="flex items-center gap-1.5">
              Subject Code
            </Label>
            <Input
              id="edit-subject-code"
              placeholder="e.g. GE 110"
              value={form.subject_code}
              onChange={(e) => setForm((f) => ({ ...f, subject_code: e.target.value }))}
            />
            {errors.subject_code && (
              <p className="text-xs text-red-500">{errors.subject_code}</p>
            )}
          </div>

          {/* Subject Title */}
          <div className="grid gap-1.5">
            <Label htmlFor="edit-subject-title" className="flex items-center gap-1.5">
              Subject Title
            </Label>
            <Input
              id="edit-subject-title"
              placeholder="e.g. Understanding the Self"
              value={form.subject_title}
              onChange={(e) => setForm((f) => ({ ...f, subject_title: e.target.value }))}
            />
            {errors.subject_title && (
              <p className="text-xs text-red-500">{errors.subject_title}</p>
            )}
          </div>

          {/* Subject Type + Units — side by side */}
          <div className="grid grid-cols-2 gap-3">

            {/* Subject Type */}
            <div className="grid gap-1.5">
              <Label className="flex items-center gap-1.5">
                Subject Type
              </Label>
              <Select
                value={form.subject_type}
                onValueChange={(val) =>
                  setForm((f) => ({ ...f, subject_type: val as Subject["subject_type"] }))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GE">GE</SelectItem>
                  <SelectItem value="Mandatory">Mandatory</SelectItem>
                  <SelectItem value="Major">Major</SelectItem>
                </SelectContent>
              </Select>
              {errors.subject_type && (
                <p className="text-xs text-red-500">{errors.subject_type}</p>
              )}
            </div>

            {/* Units */}
            <div className="grid gap-1.5">
              <Label htmlFor="edit-units" className="flex items-center gap-1.5">
                Units
              </Label>
              <Input
                id="edit-units"
                type="number"
                min={1}
                max={9}
                placeholder="e.g. 3"
                value={form.units}
                onChange={(e) => setForm((f) => ({ ...f, units: e.target.value }))}
              />
              {errors.units && (
                <p className="text-xs text-red-500">{errors.units}</p>
              )}
            </div>

          </div>

          {/* Include in Latin Honors */}
          <div className="flex items-start gap-2.5 rounded-lg border bg-muted/40 px-3 py-2.5">
            <Checkbox
              id="edit-latin-honors"
              checked={form.include_in_latin_honors}
              onCheckedChange={(checked) =>
                setForm((f) => ({ ...f, include_in_latin_honors: checked === true }))
              }
              className="mt-0.5"
            />
            <div className="grid gap-0.5">
              <Label
                htmlFor="edit-latin-honors"
                className="flex cursor-pointer items-center gap-1.5 font-medium"
              >
                <Award className="size-3.5 text-muted-foreground" />
                Include in Latin Honors
              </Label>
              <p className="text-xs text-muted-foreground">
                This subject's grade will count toward Latin Honors computation.
              </p>
            </div>
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