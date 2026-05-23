"use client"

import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md rounded-3xl border-none shadow-xl">
        <CardContent className="p-8">

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <Mail className="h-7 w-7 text-[var(--primary)]" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Forgot Password
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Enter your email address and we&apos;ll send you a reset link.
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="user@example.com"
                className="
                  h-10
                  border-input

                "
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
              Send Reset Link
            </Button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-[var(--primary)] hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default ForgotPasswordPage;