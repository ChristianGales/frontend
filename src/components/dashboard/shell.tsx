"use client"

import { Toaster } from "sonner"

import Navbar from "@/components/layout/navbar"
import Sidebar from "@/components/layout/mysidebar"
import Footer from "@/components/layout/footer"
import { SidebarProvider } from "@/components/ui/sidebar"
import RoleGuard from "@/components/auth/role-guard"

interface DashboardShellProps {
  children: React.ReactNode
  role?: string
  allowedRoles?: string[]
  defaultOpen?: boolean
}

const DashboardShell = ({
  children,
  role = "student",
  allowedRoles = ["student"],
  defaultOpen,
}: DashboardShellProps) => {
  return (
    <RoleGuard allowedRoles={allowedRoles}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <Sidebar role={role} />

        <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
          <Navbar />
          <Toaster position="top-center" richColors />

          <div className="flex-1 px-4 py-4 md:px-6">{children}</div>

          <div className="border-t">
            <Footer />
          </div>
        </main>
      </SidebarProvider>
    </RoleGuard>
  )
}

export default DashboardShell