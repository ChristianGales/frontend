"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  ChevronDown,
  ShieldCheck,
  Calendar,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { adminSidebarLinks } from "./sidebar-links"

const SidebarAdmin = () => {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        Applications
      </SidebarGroupLabel>

      <SidebarGroupContent>
        <SidebarMenu>
          {adminSidebarLinks.main.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild
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

              {item.badge && (
                <SidebarMenuBadge>
                  {item.badge}
                </SidebarMenuBadge>
              )}
            </SidebarMenuItem>
          ))}

          <Collapsible className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <Calendar />
                  <span>Pages</span>
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {adminSidebarLinks.pages.map(
                    (item) => (
                      <SidebarMenuSubItem
                        key={item.title}
                      >
                        <SidebarMenuSubButton asChild>
                          <Link href={item.url}>
                            {item.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>

            </SidebarMenuItem>
          </Collapsible>

          {/* removable */}
          <Collapsible className="group/collapsible">
            <SidebarMenuItem>

              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <ShieldCheck />

                  <span>Authentication</span>

                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarMenuSub>
                  {adminSidebarLinks.auth.map(
                    (item) => (
                      <SidebarMenuSubItem
                        key={item.title}
                      >
                        <SidebarMenuSubButton asChild
                        >
                          <Link href={item.url}>
                            {item.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    )
                  )}
                </SidebarMenuSub>
              </CollapsibleContent>

            </SidebarMenuItem>
          </Collapsible>

        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export default SidebarAdmin;