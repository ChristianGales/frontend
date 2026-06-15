"use client"

import { Mail } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const OtpPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-md border-none shadow-xl rounded-3xl">
        <CardContent className="p-8">
          
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)]/10">
            <Mail className="h-7 w-7 text-[var(--primary)]" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Check your email
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              We sent a verification code to{" "}
              <span className="font-medium text-foreground">
                user@example.com
              </span>
            </p>
          </div>

        {/* OTP */}
        <div className="mt-8 flex justify-center">
            <InputOTP maxLength={6}>
                <InputOTPGroup>
                <InputOTPSlot
                    index={0}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />

                <InputOTPSlot
                    index={1}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />

                <InputOTPSlot
                    index={2}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />
                </InputOTPGroup>

                <div className="mx-3 text-2xl font-bold text-muted-foreground">
                —
                </div>

                <InputOTPGroup>
                <InputOTPSlot
                    index={3}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />

                <InputOTPSlot
                    index={4}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />

                <InputOTPSlot
                    index={5}
                    className="
                    border
                    border-input
                    focus:border-[var(--primary)]
                    focus:ring-[var(--primary)]
                    "
                />
                </InputOTPGroup>
            </InputOTP>
        </div>

          {/* Button */}
          <Button
            className="
              mt-8 h-10 w-full
              bg-[var(--primary)]
              text-white
              hover:opacity-90
            "
          >
            Verify Email
          </Button>

          {/* Resend */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Didn&apos;t receive the email?{" "}
            <button className="font-medium text-[var(--primary)] hover:underline">
              Resend code
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default OtpPage