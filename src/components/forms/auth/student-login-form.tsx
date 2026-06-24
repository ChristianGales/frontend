"use client"

import * as React from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function StudentLoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) { 

  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>

        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Welcome Back</h1>

          <p className="text-sm text-balance text-muted-foreground">
            Enter your Student Number and Password below to login to your account
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="student_number">Student Number</FieldLabel>

          <Input
            id="student_number"
            type="text"
            placeholder="250001"
            required
            className="bg-background"
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <a
              href="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              className="bg-background pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </Field>

        {/* change to student page */}
        <Field>
          <Link href="/dashboard">
            <Button type="submit" className="w-full h-10 text-white" >
              Login
            </Button>
          </Link>
        </Field>

        {/* <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/programs"
              className="underline underline-offset-4"
            >
              Sign up
            </a>
          </FieldDescription>
        </Field> */}

      </FieldGroup>
    </form>
  )
}