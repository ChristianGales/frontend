import type { UserRole } from "@/types/user"

export function getDashboardRoute(role: UserRole): string {
  switch (role) {
    case "ADMIN":
      return "/admin"

    case "COLLEGE REGISTRAR":
      return "/registrar/college"

    case "BASIC EDUCATION REGISTRAR":
      return "/registrar/basic-ed"

    case "FACULTY":
    case "TEACHER":
    case "INSTRUCTOR":
      return "/faculty"

    case "STUDENT":
      return "/student"

    case "ACCOUNTING":
      return "/accounting"

    default:
      return "/login"
  }
}