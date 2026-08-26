import {
    LayoutDashboard,
    BookOpen,
    GraduationCap,
    CalendarClock,
    ClipboardList,
    UserCircle,
    Settings,
    Users,
    FileBarChart,
  } from "lucide-react"
  
  export const SideBarLinks = {
    main: [
      {
        title: "Dashboard",
        url: "/student",
        icon: LayoutDashboard,
        visible: ["student", "admin", "faculty"],
      },
      {
        title: "My Subjects",
        url: "/student/subjects",
        icon: BookOpen,
        visible: ["student"],
      },
      {
        title: "Grades",
        url: "/student/grades",
        icon: GraduationCap,
        visible: ["student"],
      },
      {
        title: "Schedule",
        url: "/student/schedule",
        icon: CalendarClock,
        visible: ["student"],
      },
      {
        title: "Requirements",
        url: "/student/requirements",
        icon: ClipboardList,
        visible: ["student"],
      },
      {
        title: "Manage Students",
        url: "/admin/students",
        icon: Users,
        visible: ["admin"],
      },
      {
        title: "Reports",
        url: "/admin/reports",
        icon: FileBarChart,
        visible: ["admin"],
      },
    ],
    pages: [
      { title: "Profile", url: "/profile" },
      { title: "Settings", url: "/settings" },
    ],
    auth: [
      { title: "Student Login", url: "/student/login" },
      { title: "Register", url: "/student/register" },
    ],
  }