import { Home, Inbox, Calendar, Search, Settings, User, ChevronUp, Plus, Projector, ChevronDown, PlusIcon, ShieldCheck, LayoutDashboard, Shield, ShieldCogCorner } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"; 

//dummy records
const items = [
    { title: "Dashboard",     url: "/",  icon: Home     },
    { title: "RBAC",     url: "/rbac",  icon: ShieldCogCorner     },
    { title: "Inbox",    url: "#",  icon: Inbox    },

    { title: "Components",   url: "/components",  icon: LayoutDashboard   },
    { title: "Settings", url: "#",  icon: Settings },
];

const AppSidebar = () => {
    return (
        
        <Sidebar collapsible="icon">

            {/* Logo */}
            <SidebarHeader className="py-4"> 
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
                            <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <Link href={item.url}>
                                <item.icon />
                                <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>

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
                                    <Link href="/maintenance">
                                    Register
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

                {/* Static Projects group */}
                <SidebarGroup> 
                    <SidebarGroupLabel>Projects</SidebarGroupLabel> 
                    <SidebarGroupAction>
                        <Plus /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Plus />
                                        Add Project 
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Collapsible group */}
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Collapsible Group 
                               
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus /> <span className="sr-only">Add Project</span>
                        </SidebarGroupAction>

                        <CollapsibleContent> 
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#">
                                                <Projector />
                                                See All Projects
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/#">
                                                <Plus />
                                                Add Project
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                {/* Nested group */}
                <SidebarGroup> 
                    <SidebarGroupLabel>Nested Items</SidebarGroupLabel> 
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/#">
                                        <Projector />
                                        See All Projects
                                    </Link>
                                </SidebarMenuButton>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton asChild>
                                            <Link href={"/"}>
                                                <PlusIcon />
                                                Add Project
                                            </Link>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
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