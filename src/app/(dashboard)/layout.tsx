import DashboardShell from "@/components/dashboard/dashboard-shell"
import { cookies } from "next/headers"
import { Toaster } from "@/components/ui/sonner"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()

  const defaultOpen =
    cookieStore.get("sidebar_state")?.value === "true"

  return (
    <DashboardShell defaultOpen={defaultOpen}>
      {children}
    </DashboardShell>
  )
}