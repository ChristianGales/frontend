"use client"

import { Toaster } from "sonner"

import Navbar from "@/components/layout/navbar"
import AppSidebar from "@/components/layout/appsidebar"
import AppFooter from "@/components/layout/AppFooter"

import { SidebarProvider } from "@/components/ui/sidebar"
import RoleGuard from "../auth/role-guard"

interface DashboardShellProps {
  children: React.ReactNode
  defaultOpen?: boolean
}

const DashboardShell = ({
  children,
  defaultOpen,
}: DashboardShellProps) => {
  return (
    <RoleGuard>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />

        <main className="flex min-h-screen flex-1 flex-col overflow-hidden">
          <Navbar />

          <Toaster
            position="top-center"
            richColors
          />

          <div className="flex-1 px-4 py-4 md:px-6">
            {children}
          </div>

          <div className="border-t">
            <AppFooter />
          </div>
        </main>
      </SidebarProvider>
    </RoleGuard>
    
  )
}

export default DashboardShell;