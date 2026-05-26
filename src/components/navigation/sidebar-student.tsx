"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { studentSidebarLinks } from "./sidebar-links"

const SidebarStudent = () => {
  const pathname = usePathname()

  return (
    <SidebarGroup>

      <SidebarGroupLabel>
        Student Portal
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>

          {studentSidebarLinks.main.map((item) => (
            <SidebarMenuItem key={item.title}>

              <SidebarMenuButton
                asChild
                isActive={pathname === item.url}
                className="
                  data-[active=true]:bg-[var(--primary)]
                  data-[active=true]:text-white
                  data-[active=true]:font-medium
                  hover:bg-[var(--primary)]/10
                  transition-colors
                "
              >
                <Link href={item.url}>
                  <item.icon />

                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>

            </SidebarMenuItem>
          ))}

        </SidebarMenu>
      </SidebarGroupContent>

    </SidebarGroup>
  )
}

export default SidebarStudent;