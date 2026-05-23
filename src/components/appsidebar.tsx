"use client";

import { Home, Inbox, Calendar, Search, Settings, User, ChevronUp, Plus, Projector, ChevronDown, PlusIcon, ShieldCheck, LayoutDashboard, Shield, ShieldCogCorner, Table2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"; 
import { usePathname } from "next/navigation";

//dummy records
const items = [
    { title: "Dashboard",     url: "/dashboard",  icon: Home     },
    { title: "RBAC",     url: "/rbac",  icon: ShieldCogCorner     },
    { title: "Inbox",    url: "#",  icon: Inbox    },
    { title: "Components",   url: "/scomponents",  icon: LayoutDashboard   },
    { title: "Tables",   url: "/table",  icon: Table2   },
    { title: "Settings", url: "#",  icon: Settings },
];



const AppSidebar = () => {

    const pathname = usePathname();

    return (
        
        <Sidebar collapsible="icon" >

            {/* Logo */}
            <SidebarHeader className="py-4" > 
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <Link href="/">
                            <Image src="/images/nsc-logoo.png" alt="logo" width={40} height={40} />
                            {/* <Image src="/images/NSC-Logo.png" alt="logo" width={40} height={40} /> */}
                            <span>NSC SMS</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarHeader>

            <SidebarContent>

                {/* Main nav items */}
                <SidebarGroup>
                    <SidebarGroupLabel>Applications</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items
                        .filter((item) => item.title !== "Pages")
                        .map((item) => (
                            <SidebarMenuItem key={item.title} >
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
                                <Link href={item.url} >
                                <item.icon />
                                <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                            
                            {/* Badge for Inbox */}
                            {item.title === "Inbox" && (
                                <SidebarMenuBadge>23</SidebarMenuBadge>
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

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/blank">
                                    Blank
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/maintenance">
                                    Maintenance
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/unknown-page">
                                    404 Page
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                            </SidebarMenuSub>
                            </CollapsibleContent>

                        </SidebarMenuItem>
                        </Collapsible>

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

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/login">
                                    Login
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/registration">
                                    Register
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/otp">
                                    OTP Verification
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                <SidebarMenuSubButton asChild>
                                    <Link href="/reset-password">
                                    Reset Password
                                    </Link>
                                </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                            </SidebarMenuSub>
                            </CollapsibleContent>

                        </SidebarMenuItem>
                        </Collapsible>

                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User /> Admin <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end"> 
                                <DropdownMenuItem>Account</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Sign Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;