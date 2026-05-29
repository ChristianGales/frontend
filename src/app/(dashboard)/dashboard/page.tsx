import { redirect } from "next/navigation"
import { getDashboardRoute } from "@/lib/dashboard-routes"

export default async function DashboardPage() {
  // TODO: Replace with actual session user
  const role = "ADMIN"

  redirect(getDashboardRoute(role))
}