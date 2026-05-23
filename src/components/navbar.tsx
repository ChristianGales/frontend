"use client"

import { Bell, LogOut, Moon, Settings, SquareMenuIcon, Sun, User, X } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { SidebarTrigger, useSidebar } from "./ui/sidebar"
import AppBreadcrumb from "./AppBreadCrumb"

const Navbar = () => {

    // hook for themes
    const { theme, setTheme } = useTheme();


    // Sample Notification Data
const notifications = [
  {
    id: 1,
    name: "Terry Franci",
    time: "5 min ago",
    online: true,
    avatar:
      "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Alena Franci",
    time: "8 min ago",
    online: true,
    avatar:
      "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Jocelyn Kenter",
    time: "15 min ago",
    online: true,
    avatar:
      "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Brandon Philips",
    time: "1 hr ago",
    online: false,
    avatar:
      "https://i.pravatar.cc/150?img=4",
  },
]

    // hook for collapsible sidebar button
    // const { toggleSidebar } = useSidebar();

    return (
        <nav className='p-4 flex items-center justify-between sticky top-0 bg-background z-10'>
            {/* {left} */}
            {/* sidem  bar collasable */}
            {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}

           <div className="flex items-center ">
            <SidebarTrigger />

            <div className="min-w-0 flex-1">
                <AppBreadcrumb />
            </div>

            </div>
            {/* {right} */}
            <div className="flex item-center gap-4">

                {/* Notification */}
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-full"
                    >
                    <Bell className="h-5 w-5" />

                    {/* Notification Badge */}
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                        4
                    </span>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="end"
                    sideOffset={10}
                    className="w-[380px] rounded-2xl border border-border bg-background p-0 shadow-2xl"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b px-5 py-4">
                        <h2 className="text-lg font-semibold">Notification</h2>
                    </div>

                    {/* Notifications */}
                    <div className="max-h-[350px] space-y-1 overflow-y-auto px-2 py-2">
                    {notifications.map((item) => (
                        <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-muted/50"
                        >
                        {/* Avatar */}
                        <div className="relative">
                            <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-12 w-12 rounded-full object-cover"
                            />

                            {/* Status Dot */}
                            <span
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                                item.online ? "bg-green-500" : "bg-red-500"
                            }`}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                            <p className="text-sm leading-5 text-muted-foreground">
                            <span className="font-semibold text-foreground">
                                {item.name}
                            </span>{" "}
                            requests permission to change{" "}
                            <span className="font-semibold text-foreground">
                                Project - Nganter App
                            </span>
                            </p>

                            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                            <span>Project</span>
                            <span>•</span>
                            <span>{item.time}</span>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Footer */}
                    <div className="border-t p-4">
                    <Button
                        variant="outline"
                        className="w-full rounded-xl"
                    >
                        View All Notification
                    </Button>
                    </div>
                </DropdownMenuContent>
                </DropdownMenu>

                 {/* Theme */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* User Menu */}
                <DropdownMenu>
                    <DropdownMenuTrigger >
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuItem>
                           <Link href="/profile" className="flex items-center gap-2">
                            <User className="h[1.2rem] w-[1.2rem] mr-2"/>
                            Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className="h[1.2rem] w-[1.2rem] mr-2"/>
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                            <LogOut className="h[1.2rem] w-[1.2rem] mr-2"/>
                            Logout
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
           
        </nav>
    ) 
}

export default Navbar