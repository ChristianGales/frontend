  import {
      Home,
      Inbox,
      LayoutDashboard,
      Settings,
      ShieldCogCorner,
      Table2,
      Calendar,
      ShieldCheck,
      User,
      BookOpen,
      ClipboardList,
    } from "lucide-react"
    
    export const adminSidebarLinks = {
      main: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: Home,
        },
        {
          title: "RBAC",
          url: "/rbac",
          icon: ShieldCogCorner,
        },
        {
          title: "Inbox",
          url: "#",
          icon: Inbox,
          badge: 23,
        },
        {
          title: "Components",
          url: "/scomponents",
          icon: LayoutDashboard,
        },
        {
          title: "Tables",
          url: "/table",
          icon: Table2,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ],
    
      pages: [
        {
          title: "Blank",
          url: "/blank",
        },
        {
          title: "Maintenance",
          url: "/maintenance",
        },
        {
          title: "404 Page",
          url: "/unknown-page",
        },
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
        },
        {
          title: "Programs",
          url: "/programs",
        },
      ],
    
      auth: [
        {
          title: "Login",
          url: "/login",
        },
        {
          title: "Register",
          url: "/registration",
        },
        {
          title: "OTP Verification",
          url: "/otp",
        },
        {
          title: "Forgot Password",
          url: "/forgot-password",
        },
        {
          title: "Reset Password",
          url: "/reset-password",
        },
      ],
    }
    
    export const studentSidebarLinks = {
      main: [
        {
          title: "Profile",
          url: "/students/profile",
          icon: User,
        },
        {
          title: "Schedule",
          url: "/students/schedule",
          icon: Calendar,
        },
        {
          title: "Enrollment",
          url: "/students/enrollment",
          icon: ClipboardList,
        },
      ],
    }


    export const collegeRegistrarSidebarLinks = {
      main: [
        {
          title: "Dashboard",
          url: "/registrar/college/",
          icon: LayoutDashboard,
        },
        {
          title: "Adminssions",
          url: "/registrar/college/admission",
          icon: BookOpen,
          badge: 5,
        },
      ],
      
    }