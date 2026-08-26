"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  FileUp,
  GraduationCap,
  HeartHandshake,
  Home,
  MapPin,
  ShieldCheck,
  Upload,
  User,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface FormData {
  schoolYear: string
  semester: string
  status: string
  lastName: string
  firstName: string
  middleName: string
  nameExtension: string
  placeOfBirth: string
  dateOfBirth: string
  age: string
  sex: string
  civilStatus: string
  email: string
  zipCode: string
  province: string
  city: string
  homeNumber: string
  street: string
  mobileNumber: string
  religion: string
  guardianName: string
  emergencyMobile: string
  emergencyPhone: string
  emergencyEmail: string
  emergencyAddress: string
  primarySchool: string
  primaryYearGrad: string
  lrn: string
  secondarySchool: string
  secondaryYearGrad: string
  shsSchool: string
  shsYearGrad: string
  shsStrand: string
  fatherName: string
  fatherOccupation: string
  fatherMobile: string
  fatherPhone: string
  fatherAddress: string
  motherName: string
  motherOccupation: string
  motherMobile: string
  motherPhone: string
  motherAddress: string
  spouseName: string
  spouseOccupation: string
  spouseMobile: string
  spousePhone: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const steps = [
  "basic-info",
  "personal-info",
  "emergency-contact",
  "academic-info",
  "family-info",
  "file-upload",
] as const

type Step = (typeof steps)[number]

const stepMeta: Record<
  Step,
  {
    title: string
    shortTitle: string
    description: string
    icon: typeof User
  }
> = {
  "basic-info": {
    title: "Basic Information",
    shortTitle: "Basic",
    description: "Enrollment details and personal identity",
    icon: User,
  },
  "personal-info": {
    title: "Personal Information",
    shortTitle: "Contact",
    description: "Home address and contact details",
    icon: MapPin,
  },
  "emergency-contact": {
    title: "Emergency Contact",
    shortTitle: "Emergency",
    description: "Person to notify in case of emergency",
    icon: HeartHandshake,
  },
  "academic-info": {
    title: "Academic Information",
    shortTitle: "Academic",
    description: "Previous schools and educational background",
    icon: BookOpen,
  },
  "family-info": {
    title: "Family Information",
    shortTitle: "Family",
    description: "Parent, guardian, and spouse information",
    icon: Users,
  },
  "file-upload": {
    title: "File Upload",
    shortTitle: "Upload",
    description: "Attach your identification photo",
    icon: FileUp,
  },
}

const requiredByStep: Record<Step, (keyof FormData)[]> = {
  "basic-info": ["schoolYear", "semester", "status", "lastName", "firstName", "placeOfBirth", "dateOfBirth", "sex", "civilStatus", "email"],
  "personal-info": ["zipCode","province",  "city", "street", "mobileNumber", "religion"],
  "emergency-contact": ["guardianName", "emergencyAddress"],
  "academic-info": ["primarySchool", "primaryYearGrad", "lrn", "secondarySchool", "secondaryYearGrad", "shsSchool", "shsYearGrad", "shsStrand"],
  "family-info": ["fatherName", "motherName"],
  "file-upload": [],
}

const tabContentClassName =
  "mt-0 animate-in fade-in slide-in-from-right-2 duration-300 [&_.space-y-4]:rounded-2xl [&_.space-y-4]:border [&_.space-y-4]:border-slate-200/80 [&_.space-y-4]:bg-slate-50/60 [&_.space-y-4]:p-4 dark:[&_.space-y-4]:border-white/10 dark:[&_.space-y-4]:bg-white/[0.025] sm:[&_.space-y-4]:p-6"

const fieldLabels: Partial<Record<keyof FormData, string>> = {
  schoolYear: "School Year",
  semester: "Semester",
  status: "Status",
  lastName: "Last Name",
  firstName: "First Name",
  placeOfBirth: "Place of Birth",
  dateOfBirth: "Date of Birth",
  sex: "Sex",
  civilStatus: "Civil Status",
  email: "Email",
  zipCode: "Zip Code",
  province: "Province / State",
  city: "City",
  street: "Street / Brgy.",
  mobileNumber: "Mobile Number",
  religion: "Religion",
  guardianName: "Guardian / Contact Name",
  emergencyMobile: "Mobile Number",
  emergencyAddress: "Address",
  primarySchool: "Primary School",
  primaryYearGrad: "Primary Year Graduated",
  lrn:"LRN",
  secondarySchool: "Secondary School",
  secondaryYearGrad: "Secondary Year Graduated",
  shsSchool: "SHS School",
  shsYearGrad: "SHS Year Graduated",
  shsStrand: "SHS Strand",
  fatherName: "Father's Full Name",
  motherName: "Mother's Full Name",
}

const initialFormData: FormData = {
  schoolYear: "2026-2027",
  semester: "",
  status: "",
  lastName: "",
  firstName: "",
  middleName: "",
  nameExtension: "",
  placeOfBirth: "",
  dateOfBirth: "",
  age: "",
  sex: "",
  civilStatus: "",
  email: "",
  zipCode: "",
  province: "",
  city: "",
  homeNumber: "",
  street: "",
  mobileNumber: "",
  religion: "",
  guardianName: "",
  emergencyMobile: "",
  emergencyPhone: "",
  emergencyEmail: "",
  emergencyAddress: "",
  primarySchool: "",
  primaryYearGrad: "",
  lrn: "",
  secondarySchool: "",
  secondaryYearGrad: "",
  shsSchool: "",
  shsYearGrad: "",
  shsStrand: "",
  fatherName: "",
  fatherOccupation: "",
  fatherMobile: "",
  fatherPhone: "",
  fatherAddress: "",
  motherName: "",
  motherOccupation: "",
  motherMobile: "",
  motherPhone: "",
  motherAddress: "",
  spouseName: "",
  spouseOccupation: "",
  spouseMobile: "",
  spousePhone: "",
}

export default function CollegeRegistrationForm() {

  const [activeTab, setActiveTab] = useState<Step>(steps[0])
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const currentStep = steps.indexOf(activeTab)

  useEffect(() => {
    if (!formData.dateOfBirth) {
      setFormData(prev => ({ ...prev, age: "" }))
      return
    }
    const today = new Date()
    const dob = new Date(formData.dateOfBirth)
    let calculated = today.getFullYear() - dob.getFullYear()
    const monthDiff = today.getMonth() - dob.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      calculated--
    }
    setFormData(prev => ({ ...prev, age: calculated.toString() }))
  }, [formData.dateOfBirth])



  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validateStep = (step: Step): boolean => {
    const required = requiredByStep[step] ?? []
    const newErrors: FormErrors = {}
    required.forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = `${fieldLabels[field] ?? field} is required.`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (!validateStep(activeTab)) return
    if (currentStep < steps.length - 1) {
      const next = steps[currentStep + 1]
      if (!next) return
      setActiveTab(next)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setErrors({})
    if (currentStep > 0) {
      const previous = steps[currentStep - 1]
      if (!previous) return
      setActiveTab(previous)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleTabChange = (value: string) => {
    const nextIndex = steps.indexOf(value as Step)
    if (nextIndex >= 0 && nextIndex <= currentStep) {
      setErrors({})
      setActiveTab(value as Step)
    }
  }


  const handleSubmit = () => {
    const payload = { ...formData, file: uploadedFile?.name ?? null }
    console.log("Submitting registration:", payload)
    // TODO: replace with actual API call
    // await fetch("/api/register", { method: "POST", body: JSON.stringify(payload) })
    setSubmitted(true)
  }

  // ── Inline error message component ──────────────────────────────────────────
  const Err = ({ field }: { field: keyof FormData }) =>
    errors[field] ? (
      <p role="alert" className="mt-1 text-xs font-medium text-destructive">
        {errors[field]}
      </p>
    ) : null

  const req = <span aria-hidden="true" className="text-destructive">*</span>

  // ── Success screen ───────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="relative min-h-svh overflow-hidden bg-slate-50 px-4 py-10 dark:bg-slate-950 sm:px-6">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-background shadow-2xl shadow-slate-900/5 transition-all dark:border-white/10">

          <div className="relative overflow-hidden border-b bg-gradient-to-br from-emerald-50 via-background to-primary/5 px-8 py-12 text-center dark:from-emerald-950/30 dark:via-background dark:to-primary/10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-primary to-amber-400" />
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-lg shadow-emerald-500/15 ring-8 ring-emerald-500/5 dark:bg-emerald-900/50 dark:text-emerald-400">
              <CheckCircle2 className="h-10 w-10 animate-in zoom-in duration-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Application submitted
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              We received your college admission application. A confirmation
              and copy of your information will be sent to your email address.
            </p>

            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300">
              <Clock3 className="h-4 w-4" />
              Status: For registrar review
            </div>
          </div>

          {/* Content */}
          {/* Remove this for testing purposes */}
          <div className="space-y-10 p-6 sm:p-10">
            <div className="grid gap-4 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Keep your contact details available</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  The Admissions Office may contact you if a document or detail needs clarification.
                </p>
              </div>
            </div>
            {/* Academic Information */}
            <section>
              <div className="mb-5 flex items-center gap-2 border-b pb-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Academic Information
                </h3>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <li className="rounded-xl border bg-muted/10 p-4 transition-colors hover:bg-muted/20">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">School Year</span>
                  <p className="mt-1 font-medium text-foreground">{formData.schoolYear}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4 transition-colors hover:bg-muted/20">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Semester</span>
                  <p className="mt-1 font-medium text-foreground">{formData.semester}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4 transition-colors hover:bg-muted/20">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</span>
                  <p className="mt-1 font-medium text-foreground">{formData.status}</p>
                </li>
              </ul>
            </section>

            {/* Personal Information */}
            <section>
              <div className="mb-5 flex items-center gap-2 border-b pb-2">
                <User className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Personal Information
                </h3>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Full Name</span>
                  <p className="mt-1 font-medium text-foreground">
                    {formData.lastName}, {formData.firstName} {formData.middleName}
                  </p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Date of Birth</span>
                  <p className="mt-1 font-medium text-foreground">{formData.dateOfBirth}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Place of Birth</span>
                  <p className="mt-1 font-medium text-foreground">{formData.placeOfBirth}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Age & Sex</span>
                  <p className="mt-1 font-medium text-foreground">{formData.age} yrs old • {formData.sex}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Civil Status</span>
                  <p className="mt-1 font-medium text-foreground">{formData.civilStatus}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Religion</span>
                  <p className="mt-1 font-medium text-foreground">{formData.religion}</p>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <div className="mb-5 flex items-center gap-2 border-b pb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Contact Information
                </h3>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</span>
                  <p className="mt-1 font-medium text-foreground">{formData.email}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Mobile Number</span>
                  <p className="mt-1 font-medium text-foreground">{formData.mobileNumber}</p>
                </li>
                <li className="rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Home Number</span>
                  <p className="mt-1 font-medium text-foreground">{formData.homeNumber}</p>
                </li>
                <li className="md:col-span-3 rounded-xl border bg-muted/10 p-4">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Address</span>
                  <p className="mt-1 font-medium text-foreground">
                    {formData.street}, {formData.city}, {formData.province} {formData.zipCode}
                  </p>
                </li>
              </ul>
            </section>

            <div className="mt-10 flex flex-col-reverse gap-3 border-t pt-8 sm:flex-row sm:justify-end">
              <Button variant="outline" size="lg"  className="w-full sm:w-auto">
                <a href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  return (
<<<<<<< Updated upstream:src/components/auth/student/student-registration-form-v1.tsx
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-foreground dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
=======
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br bg-[var(--primary)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
>>>>>>> Stashed changes:src/components/forms/registration/college/college-registration-form.tsx

        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-background/85 backdrop-blur-xl dark:border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <a href="/" className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/15 bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
                <img
                src="/nsc-logo.png"
                alt="Northern Samar Colleges logo"
                className="h-full w-full object-contain"
                />
            </div>

            <div>
                <h1 className="text-sm font-bold leading-tight text-foreground sm:text-base">
                Northern Samar Colleges
                </h1>

                <p className="text-xs text-muted-foreground sm:text-sm">
                College Admission Portal
                </p>
            </div>
            </a>

            <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300 md:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Enrollment Open
            </div>

            <div className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:text-sm">
                A.Y. 2026–2027 · 1st Semester
            </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">

                <div className="mb-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Online application
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                      College Admission Form
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                      Complete all six sections carefully. Fields marked with an asterisk are required.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-background/80 px-4 py-3 shadow-sm backdrop-blur dark:border-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Secure application</p>
                      <p className="text-sm font-semibold">Your information is protected</p>
                    </div>
                  </div>
                </div>

                {/* ── CARD ── */}
                <Card className="overflow-hidden rounded-3xl border-slate-200/80 bg-background/95 p-0 shadow-xl shadow-slate-900/[0.06] backdrop-blur dark:border-white/10">
                <CardHeader className="grid gap-4 border-b bg-gradient-to-r from-primary/[0.08] via-background to-background px-5 py-6 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        {(() => {
                          const ActiveIcon = stepMeta[activeTab].icon
                          return <ActiveIcon className="h-5 w-5" />
                        })()}
                      </div>
                      <div className="flex min-w-0 flex-col gap-1">
                        <CardTitle className="text-xl font-semibold text-foreground sm:text-2xl">
                          {stepMeta[activeTab].title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {stepMeta[activeTab].description}
                        </p>
                      </div>
                    </div>

                </CardHeader>

                <CardContent className="p-2 [&_input]:h-11 [&_[role=combobox]]:h-11 sm:p-8">
                    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">

                    {/* ── STEP INDICATORS ── */}
                    <TabsList className="mb-8 grid h-auto w-full grid-cols-6 gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-primary/5 sm:gap-2">
                        {steps.map((step, i) => {
                          const Icon = stepMeta[step].icon
                          const isComplete = i < currentStep

                          return (
                            <TabsTrigger
                                key={step}
                                value={step}
                                disabled={i > currentStep}
                                aria-label={`Step ${i + 1}: ${stepMeta[step].title}`}
                                className="group h-auto min-w-0 flex-col gap-1.5 rounded-xl px-1.5 py-2.5 text-muted-foreground transition-all data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow- disabled:opacity-45 sm:flex-row sm:px-2 lg:gap-2.5 lg:px-3"
                            >
                                <span className={`flex h-5  w-5  shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors ${isComplete ? "border-primary bg-primary text-primary-foreground" : "border-current/20 bg-background/70"}`}>
                                  {isComplete ? <Check className="h-3.5 w-3.5" /> : <Icon className="h-3.5 w-3.5" />}
                                </span>
                                <span className="hidden truncate text-xs font-semibold lg:inline">
                                  {stepMeta[step].shortTitle}
                                </span>
                            </TabsTrigger>
                          )
                        })}
                    </TabsList>

                    {/* STEP 1 — Basic Info */}
                    <TabsContent value="basic-info" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">

                        <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm dark:border-blue-900 dark:bg-blue-950/30 md:col-span-2">
                            <span className="mt-0.5 text-blue-600 dark:text-blue-400">
                                <CircleAlert className="h-5 w-5" />
                            </span>
                            <div>
<<<<<<< Updated upstream:src/components/auth/student/student-registration-form-v1.tsx
                                <p className="mb-1 font-semibold text-blue-900 dark:text-blue-100">Before you begin</p>
                                <p className="leading-relaxed text-blue-800/80 dark:text-blue-200/80">
                                    A digital copy of your filled-out registration form will be sent to your email.
=======
                                <p className="font-semibold text-[var(--primary)] mb-1">Notice</p>
                                <p className="text-[var(--primary)] leading-relaxed">
                                    A copy of your filled-out registration form will be sent to your email. 
>>>>>>> Stashed changes:src/components/forms/registration/college/college-registration-form.tsx
                                    Please ensure that the email address you provided is valid and accessible.
                                </p>
                            </div>
                        </div>

                        {/* SY */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                            <FieldLabel>School Year {req} </FieldLabel>
                            <Input
                                value={formData.schoolYear}
                                onChange={e => handleChange("schoolYear", e.target.value)}
                                className={errors.schoolYear ? "border-red-500" : ""}
                            />
                            <Err field="schoolYear" />
                            </Field>

                            <Field>
                            <FieldLabel>Semester {req}</FieldLabel>
                            <Select value={formData.semester} onValueChange={v => handleChange("semester", v)}>
                                <SelectTrigger className={errors.semester ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select semester" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="1st">First Semester</SelectItem>
                                <SelectItem value="2nd">Second Semester</SelectItem>
                                </SelectContent>
                            </Select>
                            <Err field="semester" />
                            </Field>

                            <Field>
                            <FieldLabel>Status {req}</FieldLabel>
                            <Select value={formData.status} onValueChange={v => handleChange("status", v)}>
                                <SelectTrigger className={errors.status ? "border-red-500" : ""}>
                                <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="new">New Student</SelectItem>
                                <SelectItem value="old">Old Student</SelectItem>
                                <SelectItem value="transferee">Transferee</SelectItem>
                                </SelectContent>
                            </Select>
                            <Err field="status" />
                            </Field>
                        </div>

                        {/* Full name */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Full name</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Last name {req}</FieldLabel>
                                <Input
                                value={formData.lastName}
                                onChange={e => handleChange("lastName", e.target.value)}
                                className={errors.lastName ? "border-red-500" : ""}
                                />
                                <Err field="lastName" />
                            </Field>
                            <Field>
                                <FieldLabel>First name {req}</FieldLabel>
                                <Input
                                value={formData.firstName}
                                onChange={e => handleChange("firstName", e.target.value)}
                                className={errors.firstName ? "border-red-500" : ""}
                                />
                                <Err field="firstName" />
                            </Field>
                            <Field>
                                <FieldLabel>Middle name</FieldLabel>
                                <Input
                                value={formData.middleName}
                                onChange={e => handleChange("middleName", e.target.value)}
                                />
                            </Field>
                            <Field>
                                <FieldLabel>Name Extension</FieldLabel>
                                <Input
                                value={formData.nameExtension}
                                onChange={e => handleChange("nameExtension", e.target.value)}
                                />
                            </Field>

                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Personal Details</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Place of Birth {req}</FieldLabel>
                                <Input
                                value={formData.placeOfBirth}
                                onChange={e => handleChange("placeOfBirth", e.target.value)}
                                className={errors.placeOfBirth ? "border-red-500" : ""}
                                />
                                <Err field="placeOfBirth" />
                            </Field>
                            <Field>
                                <FieldLabel>Date of Birth {req}</FieldLabel>
                                <Input
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={e => handleChange("dateOfBirth", e.target.value)}
                                className={errors.dateOfBirth ? "border-red-500" : ""}
                                />
                                <Err field="dateOfBirth" />
                            </Field>
                            <Field>
                                <FieldLabel>Age</FieldLabel>
                                <Input value={formData.age} disabled placeholder="Auto calculated" />
                            </Field>
                            <Field>
                                <FieldLabel>Sex {req}</FieldLabel>
                                <Select value={formData.sex} onValueChange={v => handleChange("sex", v)}>
                                <SelectTrigger className={errors.sex ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select sex" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                                </Select>
                                <Err field="sex" />
                            </Field>
                            <Field>
                                <FieldLabel>Civil Status {req}</FieldLabel>
                                <Select value={formData.civilStatus} onValueChange={v => handleChange("civilStatus", v)}>
                                <SelectTrigger className={errors.civilStatus ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select civil status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="single">Single</SelectItem>
                                    <SelectItem value="married">Married</SelectItem>
                                    <SelectItem value="widowed">Widowed</SelectItem>
                                </SelectContent>
                                </Select>
                                <Err field="civilStatus" />
                            </Field>
                            <Field>
                                <FieldLabel>Email {req}</FieldLabel>
                                <Input
                                type="email"
                                value={formData.email}
                                onChange={e => handleChange("email", e.target.value)}
                                className={errors.email ? "border-red-500" : ""}
                                />
                                <Err field="email" />
                            </Field>
                            </div>
                        </div>

                        <div className="flex justify-end border-t pt-6">
                            <Button onClick={nextStep} size="lg" className="min-w-32 text-white shadow-sm">
                            Next <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    {/* STEP 2 — Personal Info */}
                    <TabsContent value="personal-info" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Address</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Zip Code {req}</FieldLabel>
                                <Input
                                    value={formData.zipCode}
                                    onChange={e => handleChange("zipCode", e.target.value)}
                                    className={errors.zipCode ? "border-red-500" : ""}
                                />
                                <Err field="zipCode" />
                            </Field>
                            <Field>
                                <FieldLabel>Province / State {req}</FieldLabel>
                                <Input
                                value={formData.province}
                                onChange={e => handleChange("province", e.target.value)}
                                className={errors.province ? "border-red-500" : ""}
                                />
                                <Err field="province" />
                            </Field>
                            <Field>
                                <FieldLabel>City {req}</FieldLabel>
                                <Input
                                value={formData.city}
                                onChange={e => handleChange("city", e.target.value)}
                                className={errors.city ? "border-red-500" : ""}
                                />
                                <Err field="city" />
                            </Field>
                            <Field>
                                <FieldLabel>Home Number</FieldLabel>
                                <Input value={formData.homeNumber} onChange={e => handleChange("homeNumber", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Street / Brgy. {req}</FieldLabel>
                                <Input
                                value={formData.street}
                                onChange={e => handleChange("street", e.target.value)}
                                className={errors.street ? "border-red-500" : ""}
                                />
                                <Err field="street" />
                            </Field>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Contact & Other Details</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Mobile Number {req}</FieldLabel>
                                <Input
                                value={formData.mobileNumber}
                                onChange={e => handleChange("mobileNumber", e.target.value)}
                                className={errors.mobileNumber ? "border-red-500" : ""}
                                />
                                <Err field="mobileNumber" />
                            </Field>
                            <Field>
                                <FieldLabel>Religion {req}</FieldLabel>
                                <Select value={formData.religion} onValueChange={v => handleChange("religion", v)}>
                                <SelectTrigger className={errors.religion ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select religion" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rc">Roman Catholic</SelectItem>
                                    <SelectItem value="inc">Iglesia Ni Cristo</SelectItem>
                                    <SelectItem value="aglipay">Aglipay</SelectItem>
                                    <SelectItem value="up">United Pentecostal</SelectItem>
                                    <SelectItem value="miracle">Miracle Revival</SelectItem>
                                    <SelectItem value="baptist">Baptist</SelectItem>
                                    <SelectItem value="jil">Jesus is Lord</SelectItem>
                                    <SelectItem value="sda">Seventh Day Adventist</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                                </Select>
                                <Err field="religion" />
                            </Field>
                            <Field>
                                <FieldLabel>Country</FieldLabel>
                                <Input value="Philippines" disabled />
                            </Field>
                            <Field>
                                <FieldLabel>Citizenship</FieldLabel>
                                <Input value="Filipino" disabled />
                            </Field>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t pt-6">
                            <Button variant="outline" size="lg" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={nextStep} size="lg" className="min-w-32 text-white shadow-sm">
                            Next <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    {/*  STEP 3 — Emergency Contact */}
                    <TabsContent value="emergency-contact" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Emergency Contact Information</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                            <Field>
                                <FieldLabel>Guardian / Contact Name {req}</FieldLabel>
                                <Input
                                value={formData.guardianName}
                                onChange={e => handleChange("guardianName", e.target.value)}
                                className={errors.guardianName ? "border-red-500" : ""}
                                />
                                <Err field="guardianName" />
                            </Field>
                            <Field>
                                <FieldLabel>Mobile Number </FieldLabel>
                                <Input
                                value={formData.emergencyMobile}
                                onChange={e => handleChange("emergencyMobile", e.target.value)}
                                />
                            </Field>

                            <Field>
                                <FieldLabel>Email Address</FieldLabel>
                                <Input
                                type="email"
                                value={formData.emergencyEmail}
                                onChange={e => handleChange("emergencyEmail", e.target.value)}
                                />

                            </Field>
                            <Field className="md:col-span-2">
                                <FieldLabel>Address {req}</FieldLabel>
                                <Input
                                value={formData.emergencyAddress}
                                onChange={e => handleChange("emergencyAddress", e.target.value)}
                                className={errors.emergencyAddress ? "border-red-500" : ""}
                                />
                                <Err field="emergencyAddress" />
                            </Field>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t pt-6">
                            <Button variant="outline" size="lg" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={nextStep} size="lg" className="min-w-32 text-white shadow-sm">
                            Next <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    {/* STEP 4 — Academic Info */}
                    <TabsContent value="academic-info" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Primary Education</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Name of the School {req}</FieldLabel>
                                <Input
                                value={formData.primarySchool}
                                onChange={e => handleChange("primarySchool", e.target.value)}
                                className={errors.primarySchool ? "border-red-500" : ""}
                                />
                                <Err field="primarySchool" />
                            </Field>
                            <Field>
                                <FieldLabel>Year Graduated {req}</FieldLabel>
                                <Input
                                value={formData.primaryYearGrad}
                                onChange={e => handleChange("primaryYearGrad", e.target.value)}
                                className={errors.primaryYearGrad ? "border-red-500" : ""}
                                />
                                <Err field="primaryYearGrad" />
                            </Field>
                            <Field>
                                <FieldLabel>LRN {req}</FieldLabel>
                                <Input
                                    value={formData.lrn}
                                    onChange={e => handleChange("lrn", e.target.value)}
                                    className={errors.lrn ? "border-red-500" : ""}/>
                                <Err field="lrn" />
                            </Field>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Secondary Education</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                            <Field>
                                <FieldLabel>Name of the School {req}</FieldLabel>
                                <Input
                                value={formData.secondarySchool}
                                onChange={e => handleChange("secondarySchool", e.target.value)}
                                className={errors.secondarySchool ? "border-red-500" : ""}
                                />
                                <Err field="secondarySchool" />
                            </Field>
                            <Field>
                                <FieldLabel>Year Graduated {req}</FieldLabel>
                                <Input
                                value={formData.secondaryYearGrad}
                                onChange={e => handleChange("secondaryYearGrad", e.target.value)}
                                className={errors.secondaryYearGrad ? "border-red-500" : ""}
                                />
                                <Err field="secondaryYearGrad" />
                            </Field>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Senior High School</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                                <FieldLabel>Name of the School {req}</FieldLabel>
                                <Input
                                value={formData.shsSchool}
                                onChange={e => handleChange("shsSchool", e.target.value)}
                                className={errors.shsSchool ? "border-red-500" : ""}
                                />
                                <Err field="shsSchool" />
                            </Field>
                            <Field>
                                <FieldLabel>Year Graduated {req}</FieldLabel>
                                <Input
                                value={formData.shsYearGrad}
                                onChange={e => handleChange("shsYearGrad", e.target.value)}
                                className={errors.shsYearGrad ? "border-red-500" : ""}
                                />
                                <Err field="shsYearGrad" />
                            </Field>
                            <Field>
                                <FieldLabel>Strand & Track {req}</FieldLabel>
                                <Select value={formData.shsStrand} onValueChange={v => handleChange("shsStrand", v)}>
                                <SelectTrigger className={errors.shsStrand ? "border-red-500" : ""}>
                                    <SelectValue placeholder="Select Strand & Track" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="na">N/A</SelectItem>
                                    <SelectItem value="abm">Accountancy, Business and Management (ABM)</SelectItem>
                                    <SelectItem value="stem">Science, Technology, Engineering, and Mathematics (STEM)</SelectItem>
                                    <SelectItem value="humss">Humanities and Social Science (HUMSS)</SelectItem>
                                    <SelectItem value="gas">General Academic Strand (GAS)</SelectItem>
                                    <SelectItem value="arts">Arts and Design</SelectItem>
                                    <SelectItem value="sports">Sports</SelectItem>
                                    <SelectItem value="tvl">Technical-Vocational-Livelihood (TVL)</SelectItem>
                                    <SelectItem value="afa">Agricultural-Fishery Arts (AFA)</SelectItem>
                                    <SelectItem value="he">Home Economics (HE)</SelectItem>
                                    <SelectItem value="ia">Industrial Arts (IA)</SelectItem>
                                    <SelectItem value="ict">Information and Communications Technology (ICT)</SelectItem>
                                </SelectContent>
                                </Select>
                                <Err field="shsStrand" />
                            </Field>
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t pt-6">
                            <Button variant="outline" size="lg" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={nextStep} size="lg" className="min-w-32 text-white shadow-sm">
                            Next <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    {/* STEP 5 — Family Info */}
                    <TabsContent value="family-info" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">

                        {/* Father */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Father's Information</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                            <Field>
                                <FieldLabel>Full name {req}</FieldLabel>
                                <Input
                                value={formData.fatherName}
                                onChange={e => handleChange("fatherName", e.target.value)}
                                className={errors.fatherName ? "border-red-500" : ""}
                                />
                                <Err field="fatherName" />
                            </Field>
                            <Field>
                                <FieldLabel>Occupation</FieldLabel>
                                <Input value={formData.fatherOccupation} onChange={e => handleChange("fatherOccupation", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Mobile Number</FieldLabel>
                                <Input value={formData.fatherMobile} onChange={e => handleChange("fatherMobile", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Phone Number</FieldLabel>
                                <Input value={formData.fatherPhone} onChange={e => handleChange("fatherPhone", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Address</FieldLabel>
                                <Input value={formData.fatherAddress} onChange={e => handleChange("fatherAddress", e.target.value)} />
                            </Field>
                            </div>
                        </div>

                        {/* Mother */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Mother's Information</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                            <Field>
                                <FieldLabel>Full name {req}</FieldLabel>
                                <Input
                                value={formData.motherName}
                                onChange={e => handleChange("motherName", e.target.value)}
                                className={errors.motherName ? "border-red-500" : ""}
                                />
                                <Err field="motherName" />
                            </Field>
                            <Field>
                                <FieldLabel>Occupation</FieldLabel>
                                <Input value={formData.motherOccupation} onChange={e => handleChange("motherOccupation", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Mobile Number</FieldLabel>
                                <Input value={formData.motherMobile} onChange={e => handleChange("motherMobile", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Phone Number</FieldLabel>
                                <Input value={formData.motherPhone} onChange={e => handleChange("motherPhone", e.target.value)} />
                            </Field>
                            <Field>
                                <FieldLabel>Address</FieldLabel>
                                <Input value={formData.motherAddress} onChange={e => handleChange("motherAddress", e.target.value)} />
                            </Field>
                            </div>
                        </div>

                        {/* Spouse — conditional on civilStatus from step 1 */}
                        {/* FIX: was reading from separate `civilStatus` state; now reads from formData */}
                        {/* FIX: heading was using text-muted-foreground instead of text-primary */}
                        {formData.civilStatus === "married" && (
                            <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Spouse Information</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <Field>
                                <FieldLabel>Spouse</FieldLabel>
                                <Input value={formData.spouseName} onChange={e => handleChange("spouseName", e.target.value)} />
                                </Field>
                                <Field>
                                <FieldLabel>Occupation</FieldLabel>
                                <Input value={formData.spouseOccupation} onChange={e => handleChange("spouseOccupation", e.target.value)} />
                                </Field>
                                <Field>
                                <FieldLabel>Mobile Number</FieldLabel>
                                <Input value={formData.spouseMobile} onChange={e => handleChange("spouseMobile", e.target.value)} />
                                </Field>
                                <Field>
                                <FieldLabel>Phone Number</FieldLabel>
                                <Input value={formData.spousePhone} onChange={e => handleChange("spousePhone", e.target.value)} />
                                </Field>
                            </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between border-t pt-6">
                            <Button variant="outline" size="lg" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={nextStep} size="lg" className="min-w-32 text-white shadow-sm">
                            Next <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    {/* STEP 6 — File Upload */}
                    <TabsContent value="file-upload" className={tabContentClassName}>
                        <FieldGroup className="space-y-8">
                        <div>
                            {/* <h2 className="text-lg font-semibold text-primary">ID Photo</h2>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Upload your ID Photo.
                                </p> */}
                            <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm dark:border-blue-900 dark:bg-blue-950/30 md:col-span-2">
                            <span className="mt-0.5 text-blue-600 dark:text-blue-400">
                                <CircleAlert className="h-5 w-5" />
                            </span>
                            <div>
                                <p className="mb-1 font-semibold text-blue-900 dark:text-blue-100">Photo requirements</p>
                                <p className="leading-relaxed text-blue-800/80 dark:text-blue-200/80">
                                    Upload your scanned / soft copy of your ID Photo in JPG, or PNG format. File should not exceed 10MB in size.
                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="rounded-3xl border-2 border-dashed border-primary/25 bg-gradient-to-b from-primary/[0.06] to-transparent p-6 text-center transition-colors hover:border-primary/45 sm:p-10">
                            <div className="flex flex-col items-center gap-3">
                            <div className="rounded-2xl bg-primary/10 p-4 ring-8 ring-primary/[0.04]">
                                <Upload className="h-8 w-8 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold">Upload your ID photo</p>
                                <p className="mt-1 text-sm text-muted-foreground">Choose a clear JPG or PNG file up to 10MB</p>
                            </div>
                            <Input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                className="max-w-sm cursor-pointer bg-background"
                                onChange={e => setUploadedFile(e.target.files?.[0] ?? null)}
                            />
                            {uploadedFile && (
                                <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                                <CheckCircle2 className="h-4 w-4" /> {uploadedFile.name}
                                </p>
                            )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between border-t pt-6">
                            <Button variant="outline" size="lg" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                            </Button>
                            <Button onClick={handleSubmit} size="lg" className="text-white shadow-sm">
                                <Check className="mr-1 h-4 w-4" /> Submit Registration
                            </Button>
                        </div>
                        </FieldGroup>
                    </TabsContent>

                    </Tabs>
                </CardContent>
                </Card>

                <div className="mt-6 flex flex-col gap-2 px-2 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
                  <p>Need assistance? Contact the NSC MIS Office.</p>
                  <p>© 2026 Northern Samar Colleges. All rights reserved.</p>
                </div>

            </div>
        </main>
</div>
  )
}