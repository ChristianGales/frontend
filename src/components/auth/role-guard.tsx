"use client"

import { usePathname } from "next/navigation"
import { activeUser } from "@/lib/dummy/user"
import { isAllowed } from "@/lib/dashboard-routes"
import ForbiddenPage from "../dashboard/forbidden-page"


const RoleGuard = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  if (!isAllowed(pathname, activeUser.role)) {
    return <ForbiddenPage />
  }

  return <>{children}</>
}

export default RoleGuard;