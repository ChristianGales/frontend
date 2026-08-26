"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface RoleGuardProps {
  children: React.ReactNode
  allowedRoles?: string[]
  redirectTo?: string
}

interface SessionShape {
  role: string
  [key: string]: unknown
}

const RoleGuard = ({
  children,
  allowedRoles = ["student"],
  redirectTo = "/student/login",
}: RoleGuardProps) => {
  const router = useRouter()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const raw = sessionStorage.getItem("activeStudent")

    if (!raw) {
      router.replace(redirectTo)
      return
    }

    try {
      const session = JSON.parse(raw) as SessionShape

      if (!allowedRoles.includes(session.role)) {
        router.replace(redirectTo)
        return
      }

      setChecked(true)
    } catch {
      sessionStorage.removeItem("activeStudent")
      router.replace(redirectTo)
    }
  }, [router, allowedRoles, redirectTo])

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  return <>{children}</>
}

export default RoleGuard