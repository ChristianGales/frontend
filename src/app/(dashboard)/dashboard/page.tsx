import { redirect } from "next/navigation"
import { getDashboardRoute } from "@/lib/dashboard-routes"
import { UserRole } from "@/types/user"

export default async function DashboardPage() {
  // TODO: Replace with actual session user
  const role: UserRole = "ADMIN"

  redirect(getDashboardRoute(role))
}