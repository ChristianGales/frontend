"use client"

import { LogOut, Moon, Settings, SquareMenuIcon, Sun, User } from "lucide-react"
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

const Navbar = () => {

    // hook for themes
    const { theme, setTheme } = useTheme();

    // hook for collapsible sidebar button
    // const { toggleSidebar } = useSidebar();

    return (
        <nav className='p-4 flex items-center justify-between'>
            {/* {left} */}
            {/* sidebar collasable */}
            {/* <Button variant="outline" onClick={toggleSidebar}>Custom Button</Button> */}
           <SidebarTrigger />
            {/* {right} */}
            <div className="flex item-center gap-4">
                 <Link href="/">Dashboard</Link>
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
                            <User className="h[1.2rem] w-[1.2rem] mr-2"/>
                            Profile
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


                {/* <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <SquareMenuIcon />
                            <span className="sr-only">Open Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
                    <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
                    <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}




                


            </div>
           
        </nav>
    ) 
}

export default Navbar