"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { SideBarLinks } from "@/lib/navigation/sidebar-links"

interface AppSidebarProps {
  role?: string
}

const MySidebar = ({ role = "student" }: AppSidebarProps) => {
  const pathname = usePathname()

  const filteredLinks = SideBarLinks.main.filter((item) =>
    item.visible.includes(role)
  )

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton >
              <Link href="/student">
                <Image
                  src="/logo-lf.png"
                  alt="NSC Logo"
                  width={32}
                  height={32}
                />
                <span>NSC SMS</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Applications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    className="
                      data-[active=true]:bg-primary
                      data-[active=true]:text-primary-foreground
                      data-[active=true]:font-medium
                      hover:bg-primary/10
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
      </SidebarContent>
    </Sidebar>
  )
}

export default Sidebar