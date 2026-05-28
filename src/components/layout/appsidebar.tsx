"use client"

import Image from "next/image"
import Link from "next/link"

import {
  ChevronUp,
  User,
} from "lucide-react"

import SidebarAdmin from "@/components/navigation/sidebar-admin"
import SidebarStudent from "@/components/navigation/sidebar-student"
import SidebarCollegeRegistrar from "@/components/navigation/sidebar-college-registrar"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import type { UserRole } from "@/types/user"


const AppSidebar = () => {


  // Temporary Role (Replace with actual user role from auth context or API)
  const role = "COLLEGE REGISTRAR" as UserRole

  return (
    <Sidebar collapsible="icon">

      {/* Logo */}
      <SidebarHeader className="py-4">

        <SidebarMenu>
          <SidebarMenuItem>

            <SidebarMenuButton asChild>
              <Link href="/dashboard">

                <Image
                  src="/images/nsc-logoo.png"
                  alt="NSC Logo"
                  width={40}
                  height={40}
                />

                <span>NSC SMS</span>

              </Link>
            </SidebarMenuButton>

          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>

        {role === "ADMIN" && (
          <SidebarAdmin />
        )}

        {role === "STUDENT" && (
          <SidebarStudent />
        )}

        {role === "COLLEGE REGISTRAR" && (
          <SidebarCollegeRegistrar />
        )}

      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>

        <SidebarMenu>
          <SidebarMenuItem>

            <DropdownMenu>

              <DropdownMenuTrigger asChild>

                <SidebarMenuButton>

                  <User />

                  <ChevronUp className="ml-auto" />

                </SidebarMenuButton>

              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="end"
                className="w-48"
              >

                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    Account
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    Settings
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Sign Out
                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>

          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar;