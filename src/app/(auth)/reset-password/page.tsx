"use client"

import Link from "next/link"
import { ArrowLeft, LockKeyhole } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md rounded-3xl border-none shadow-xl">
        <CardContent className="p-8">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <LockKeyhole className="h-7 w-7 text-[var(--primary)]" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Reset Password
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Create a new password for your account.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">

            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="password">
                New Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="Enter new password"
                className="h-10 border-input"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="h-10 border-input"
              />
            </div>

            <Button
              type="submit"
              className="
                h-10 w-full
                bg-[var(--primary)]
                text-white
                hover:opacity-90
              "
            >
              Reset Password
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-center">
            <Link
              href="/login"
              className="
                inline-flex items-center gap-2
                text-sm font-medium
                text-[var(--primary)]
                hover:underline
              "
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPasswordPage;