"use client"

import { type FormEvent, useState } from "react"
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  LoaderCircle,
  MailCheck,
  PencilLine,
  ShieldCheck,
  UserPlus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface RegistrationData {
  firstName: string
  middleName: string
  lastName: string
  contactNumber: string
  email: string
  password: string
  confirmPassword: string
}

type RegistrationErrors = Partial<Record<keyof RegistrationData, string>>

const initialData: RegistrationData = {
  firstName: "",
  middleName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const contactPattern = /^[0-9+()\s-]{7,20}$/

function PasswordInput({
  id,
  label,
  value,
  placeholder,
  error,
  onChange,
}: {
  id: string
  label: string
  value: string
  placeholder: string
  error: string | undefined
  onChange: (value: string) => void
}) {
  const [visible, setVisible] = useState(false)

  return (
    <Field>
      <FieldLabel htmlFor={id}>
        {label} <span className="text-destructive">*</span>
      </FieldLabel>

      <div className="relative">
        <Input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete="new-password"
          aria-invalid={Boolean(error)}
          className="h-11 pr-11"
        />

        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={(visible ? "Hide " : "Show ") + label.toLowerCase()}
        >
          {visible ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </button>
      </div>

      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </Field>
  )
}

export default function UserRegistrationForm() {
  const [formData, setFormData] = useState<RegistrationData>(initialData)
  const [errors, setErrors] = useState<RegistrationErrors>({})
  const [awaitingVerification, setAwaitingVerification] = useState(false)

  const handleChange = (field: keyof RegistrationData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const validateForm = () => {
    const nextErrors: RegistrationErrors = {}

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required."
    }

    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required."
    }

    if (!formData.contactNumber.trim()) {
      nextErrors.contactNumber = "Contact number is required."
    } else if (!contactPattern.test(formData.contactNumber.trim())) {
      nextErrors.contactNumber = "Enter a valid contact number."
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required."
    } else if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address."
    }

    if (!formData.password) {
      nextErrors.password = "Password is required."
    } else if (formData.password.length < 8) {
      nextErrors.password = "Password must contain at least 8 characters."
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password."
    } else if (formData.confirmPassword !== formData.password) {
      nextErrors.confirmPassword = "Passwords do not match."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) return

    // TODO: Submit the account information to your registration API.
    // The server must hash the password before storing it.
    // After the API sends its verification email, show the waiting screen.
    setAwaitingVerification(true)
  }

  const editEmailAddress = () => {
    setFormData((current) => ({
      ...current,
      password: "",
      confirmPassword: "",
    }))
    setErrors({})
    setAwaitingVerification(false)
  }

  const ErrorMessage = ({ field }: { field: keyof RegistrationData }) =>
    errors[field] ? (
      <p role="alert" className="mt-1 text-xs font-medium text-destructive">
        {errors[field]}
      </p>
    ) : null

  const requiredMark = (
    <span aria-hidden="true" className="text-destructive">
      *
    </span>
  )

  if (awaitingVerification) {
    return (
      <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 dark:bg-slate-950">
        <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <Card className="relative w-full max-w-xl overflow-hidden rounded-3xl border-slate-200/80 p-0 text-center shadow-2xl shadow-slate-900/[0.08] dark:border-white/10">
          <div className="h-1.5 bg-gradient-to-r from-primary via-blue-400 to-amber-400" />

          <CardContent className="px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/[0.05]">
              <MailCheck className="h-10 w-10" />
            </div>

            <h1 className="mt-7 text-3xl font-bold tracking-tight">
              Verify your email
            </h1>
            <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">
              We sent a verification link to{" "}
              <span className="font-medium text-foreground">
                {formData.email}
              </span>
              . Open the message and click the verification link to activate your
              account.
            </p>

            <div
              aria-live="polite"
              className="mt-7 flex items-center justify-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200"
            >
              <LoaderCircle className="h-5 w-5 shrink-0 animate-spin" />
              <div className="text-left">
                <p className="font-semibold">Waiting for email verification</p>
                <p className="mt-0.5 text-xs opacity-75">
                  Your account cannot be used until the email is verified.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 text-left sm:grid-cols-3">
              <div className="rounded-2xl border bg-muted/30 p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className="mt-3 text-sm font-semibold">Account submitted</p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-4">
                <MailCheck className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm font-semibold">Check your inbox</p>
              </div>
              <div className="rounded-2xl border bg-muted/30 p-4 opacity-60">
                <LockKeyhole className="h-5 w-5" />
                <p className="mt-3 text-sm font-semibold">Account activated</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Didn&apos;t receive the email? Check your spam or junk folder and
              confirm that the address above is correct.
            </p>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={editEmailAddress}
              className="mt-6 w-full"
            >
              <PencilLine className="mr-2 h-4 w-4" />
              Use a different email address
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="relative min-h-svh overflow-hidden bg-slate-50 text-foreground dark:bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />

      <header className="relative z-20 border-b border-slate-200/80 bg-background/85 backdrop-blur-xl dark:border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary/15 bg-white p-1 shadow-sm">
              <img
                src="/images/nsc-logoo.png"
                alt="Northern Samar Colleges logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-bold leading-tight sm:text-base">
                Northern Samar Colleges
              </p>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Account Registration
              </p>
            </div>
          </a>

          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to home</span>
              <span className="sm:hidden">Back</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10 flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Card className="grid w-full max-w-6xl overflow-hidden rounded-3xl border-slate-200/80 bg-background/95 p-0 shadow-2xl shadow-slate-900/[0.08] backdrop-blur dark:border-white/10 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="relative hidden overflow-hidden bg-primary p-10 text-primary-foreground md:flex md:flex-col md:justify-between lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/[0.05]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur">
                <UserPlus className="h-7 w-7" />
              </div>
              <h2 className="mt-8 text-3xl font-bold tracking-tight lg:text-4xl">
                Join the NSC community
              </h2>
              <p className="mt-4 max-w-sm leading-7 text-primary-foreground/75">
                Create your account to access the Northern Samar Colleges online
                services and student portal.
              </p>
            </div>

            <div className="relative space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span>Your personal information is protected</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                  <LockKeyhole className="h-4 w-4" />
                </div>
                <span>Secure account access</span>
              </div>
            </div>
          </aside>

          <div>
            <CardHeader className="border-b px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary md:hidden">
                <UserPlus className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                Create your account
              </CardTitle>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Enter your personal and account information below.
              </p>
            </CardHeader>

            <CardContent className="px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
              <form onSubmit={handleSubmit} noValidate>
                <FieldGroup className="gap-6">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <Field>
                      <FieldLabel htmlFor="first-name">
                        First name {requiredMark}
                      </FieldLabel>
                      <Input
                        id="first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={(event) =>
                          handleChange("firstName", event.target.value)
                        }
                        placeholder="Juan"
                        autoComplete="given-name"
                        aria-invalid={Boolean(errors.firstName)}
                        className="h-11"
                      />
                      <ErrorMessage field="firstName" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="middle-name">
                        Middle name
                        <span className="font-normal text-muted-foreground">
                          (Optional)
                        </span>
                      </FieldLabel>
                      <Input
                        id="middle-name"
                        name="middleName"
                        value={formData.middleName}
                        onChange={(event) =>
                          handleChange("middleName", event.target.value)
                        }
                        placeholder="Santos"
                        autoComplete="additional-name"
                        className="h-11"
                      />
                    </Field>

                    <Field className="sm:col-span-2 lg:col-span-1">
                      <FieldLabel htmlFor="last-name">
                        Last name {requiredMark}
                      </FieldLabel>
                      <Input
                        id="last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(event) =>
                          handleChange("lastName", event.target.value)
                        }
                        placeholder="Dela Cruz"
                        autoComplete="family-name"
                        aria-invalid={Boolean(errors.lastName)}
                        className="h-11"
                      />
                      <ErrorMessage field="lastName" />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldLabel htmlFor="contact-number">
                        Contact number {requiredMark}
                      </FieldLabel>
                      <Input
                        id="contact-number"
                        name="contactNumber"
                        type="tel"
                        inputMode="tel"
                        value={formData.contactNumber}
                        onChange={(event) =>
                          handleChange("contactNumber", event.target.value)
                        }
                        placeholder="09XX XXX XXXX"
                        autoComplete="tel"
                        aria-invalid={Boolean(errors.contactNumber)}
                        className="h-11"
                      />
                      <ErrorMessage field="contactNumber" />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="email">
                        Email address {requiredMark}
                      </FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(event) =>
                          handleChange("email", event.target.value)
                        }
                        placeholder="juan@example.com"
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        className="h-11"
                      />
                      <ErrorMessage field="email" />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <PasswordInput
                      id="password"
                      label="Password"
                      value={formData.password}
                      placeholder="At least 8 characters"
                      error={errors.password}
                      onChange={(value) => handleChange("password", value)}
                    />
                    <PasswordInput
                      id="confirmPassword"
                      label="Confirm password"
                      value={formData.confirmPassword}
                      placeholder="Enter your password again"
                      error={errors.confirmPassword}
                      onChange={(value) => handleChange("confirmPassword", value)}
                    />
                  </div>

                  <FieldDescription className="rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-blue-800 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-200">
                    Use at least 8 characters for your password. Never share it
                    with anyone.
                  </FieldDescription>

                  <Button type="submit" size="lg" className="w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Create account
                  </Button>

                  <FieldDescription className="text-center">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      Sign in
                    </a>
                  </FieldDescription>
                </FieldGroup>
              </form>
            </CardContent>
          </div>
        </Card>
      </main>

      <footer className="relative z-10 px-4 pb-6 text-center text-xs text-muted-foreground">
        By creating an account, you agree to our{" "}
        <a href="/terms" className="underline underline-offset-4 hover:text-foreground">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-4 hover:text-foreground">
          Privacy Policy
        </a>
        .
      </footer>
    </div>
  )
}