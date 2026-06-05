  // import {
  //     Home,
  //     Inbox,
  //     LayoutDashboard,
  //     Settings,
  //     ShieldCogCorner,
  //     Table2,
  //     Calendar,
  //     ShieldCheck,
  //     User,
  //     BookOpen,
  //     ClipboardList,
  //   } from "lucide-react"
    
  //   export const SideBarLinks = {
  //     main: [
  //       {
  //         title: "Dashboard",
  //         url: "/dashboard",
  //         icon: Home,
  //         visible: ["ADMIN", "STUDENT", "COLLEGE REGISTRAR"],
  //       },
  //       {
  //         title: "RBAC",
  //         url: "/rbac",
  //         icon: ShieldCogCorner,
  //         visible: ["ADMIN"],
  //       },
  //       {
  //         title: "Inbox",
  //         url: "#",
  //         icon: Inbox,
  //         badge: 23,
  //         visible: ["ADMIN", "STUDENT", "COLLEGE REGISTRAR"],
  //       },
  //       {
  //         title: "Admissions",
  //         url: "/admissions",
  //         icon: ShieldCheck,
  //         badge: 5,
  //         visible: ["COLLEGE REGISTRAR"],
  //       },
  //       {
  //         title: "Schedule",
  //         url: "/schedule",
  //         icon: Calendar,
  //         visible: ["STUDENT"],
  //       },
  //       {
  //         title: "Enrollment",
  //         url: "/enrollment",
  //         icon: ClipboardList,
  //         visible: ["STUDENT"],
  //       },
  //       {
  //         title: "Components",
  //         url: "/scomponents",
  //         icon: LayoutDashboard,
  //         visible: ["ADMIN"],
  //       },
  //       {
  //         title: "Tables",
  //         url: "/table",
  //         icon: Table2,
  //         visible: ["ADMIN"],
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //         icon: Settings,
  //         visible: ["ADMIN", "STUDENT", "COLLEGE REGISTRAR"],
  //       },
  //     ],
    
  //     pages: [
  //       {
  //         title: "Blank",
  //         url: "/blank",
  //       },
  //       {
  //         title: "Maintenance",
  //         url: "/maintenance",
  //       },
  //       {
  //         title: "404 Page",
  //         url: "/unknown-page",
  //       },
  //       {
  //         title: "Privacy Policy",
  //         url: "/privacy-policy",
  //       },
  //       {
  //         title: "Programs",
  //         url: "/programs",
  //       },
  //     ],
    
  //     auth: [
  //       {
  //         title: "Login",
  //         url: "/login",
  //       },
  //       {
  //         title: "Register",
  //         url: "/registration",
  //       },
  //       {
  //         title: "OTP Verification",
  //         url: "/otp",
  //       },
  //       {
  //         title: "Forgot Password",
  //         url: "/forgot-password",
  //       },
  //       {
  //         title: "Reset Password",
  //         url: "/reset-password",
  //       },
  //     ],
  //   }
    
  //   export const studentSidebarLinks = {
  //     main: [
  //       {
  //         title: "Profile",
  //         url: "/students/profile",
  //         icon: User,
  //       },
  //       {
  //         title: "Schedule",
  //         url: "/students/schedule",
  //         icon: Calendar,
  //       },
  //       {
  //         title: "Enrollment",
  //         url: "/students/enrollment",
  //         icon: ClipboardList,
  //       },
  //     ],
  //   }


  //   export const collegeRegistrarSidebarLinks = {
  //     main: [
  //       {
  //         title: "Dashboard",
  //         url: "/registrar/college/",
  //         icon: LayoutDashboard,
  //       },
  //       {
  //         title: "Adminssions",
  //         url: "/registrar/college/admission",
  //         icon: BookOpen,
  //         badge: 5,
  //       },
  //     ],
      
  //   }




  import {
    Home,
    Inbox,
    LayoutDashboard,
    Settings,
    ShieldUser,
    Table2,
    Calendar,
    ShieldCheck,
    ClipboardList,
    Users,
    BookOpen,
    GraduationCap,
    Building2,
    DollarSign,
    CreditCard,
    FileText,
    BookMarked,
    UserCog,
    BarChart3,
    ClipboardCheck,
    School,
    Wallet,
    FileMinus,
    Boxes,
  } from "lucide-react"
  
  export const SideBarLinks = {
    main: [
      // ─── Universal ───────────────────────────────────────────
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
        visible: [
          "ADMIN",
          "STUDENT",
          "FACULTY",
          "ACCOUNTING",
        ],
      },
  
      // ─── ADMIN only ───────────────────────────────────────────
      {
        title: "RBAC",
        url: "/rbac",
        icon: ShieldUser,
        visible: ["ADMIN"],
      },
      {
        title: "Users",
        url: "/users",
        icon: UserCog,
        visible: ["ADMIN"],
      },
      {
        title: "Departments",
        url: "/departments",
        icon: Building2,
        visible: ["ADMIN"],
      },
      {
        title: "Designations",
        url: "/designations",
        icon: Users,
        visible: ["ADMIN"],
      },
      {
        title: "Rooms",
        url: "/rooms",
        icon: School,
        visible: ["ADMIN"],
      },
      {
        title: "Reports",
        url: "/reports",
        icon: BarChart3,
        visible: ["ADMIN"],
      },
      {
        title: "Components",
        url: "/scomponents",
        icon: LayoutDashboard,
        visible: ["ADMIN"],
      },
      {
        title: "Tables",
        url: "/table",
        icon: Table2,
        visible: ["ADMIN"],
      },
  
      // ─── COLLEGE REGISTRAR ────────────────────────────────────
      {
        title: "Dashboard",
        url: "/registrar/college",
        icon: LayoutDashboard,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Admissions",
        url: "/registrar/college/admissions",
        icon: ShieldCheck,
        badge: 5,
        visible: ["COLLEGE REGISTRAR"]
      },
      {
        title: "Enrollment",
        url: "/registrar/college/enrollment",
        icon: ClipboardList,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Students",
        url: "/registrar/college/students",
        icon: GraduationCap,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Curriculum",
        url: "/registrar/college/curriculum",
        icon: BookMarked,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Courses",
        url: "/registrar/college/course",
        icon: BookOpen,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Subjects",
        url: "/registrar/college/subject",
        icon: FileText,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Classes",
        url: "/registrar/college/classes",
        icon: School,
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Transcript",
        url: "/registrar/college/transcript",
        icon: FileMinus,
        visible: [ "COLLEGE REGISTRAR" ]
      },
      
      // ─── BASIC ED REGISTRAR ────────────────────────────────────
      {
        title: "Dashboard",
        url: "/registrar/basic-ed",
        icon: LayoutDashboard,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Admissions",
        url: "/registrar/college/admissions",
        icon: ShieldCheck,
        badge: 5,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Enrollment",
        url: "/registrar/college/enrollment",
        icon: ClipboardList,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      //Drop Down Elementary, Junior High, Senior High
      {
        title: "Students",
        url: "/registrar/college/students",
        icon: GraduationCap,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Curriculum",
        url: "/registrar/college/curriculum",
        icon: BookMarked,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Grade Level",
        url: "/registrar/college/courses",
        icon: BookOpen,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Subjects",
        url: "/registrar/college/subjects",
        icon: FileText,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Classes",
        url: "/registrar/college/classes",
        icon: School,
        visible: ["BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Section",
        url: "/registrar/college/section",
        icon: Boxes,
        visible: ["BASIC EDUCATION REGISTRAR"]
      },
      {
        title: "Report Card",
        url: "registrar/basic-ed/reportCard",
        icon: FileText,
        visible: ["BASIC EDUCATION REGISTRAR"]

      },
      // ─── TEACHER ──────────────────────
      {
        tiitle: "Dashboard",
        url: "faculty/teacher",
        icon: LayoutDashboard,
        visible: ["Teacher"] 
      },
      {
        title: "Schedule",
        url: "/my-classes",
        icon: ClipboardCheck,
        visible: ["TEACHER"],
      },
      {
        title: "Grades",
        url: "/grades",
        icon: FileText,
        visible: ["TEACHER"],
      },
      {
        title: "Report Card",
        url: "/grades",
        icon: FileText,
        visible: ["TEACHER"],
      },

      // ─── INSTRUCTOR ──────────────────────
      {
        title: "Dashboard",
        url: "faculty/instructor",
        icon: LayoutDashboard,
        visible: ["INSTRUCTOR"] 
      },
      {
        title: "Schedule",
        url: "/my-classes",
        icon: Calendar,
        visible: ["INSTRUCTOR"],
      },
      {
        title: "Classes",
        url: "/grades",
        icon: Building2,
        visible: ["INSTRUCTOR"],
      },
      // {
      //   title: "Attendance",
      //   url: "/attendance",
      //   icon: ClipboardList,
      //   visible: ["FACULTY", "TEACHER", "INSTRUCTOR"],
      // },
      // {
      //   title: "Payroll",
      //   url: "/payroll",
      //   icon: DollarSign,
      //   visible: ["FACULTY", "TEACHER", "INSTRUCTOR"],
      // },
  
      // ─── STUDENT ──────────────────────────────────────────────
      {
        title: "My Schedule",
        url: "/schedule",
        icon: Calendar,
        visible: ["STUDENT"],
      },
      {
        title: "My Enrollment",
        url: "/enrollment",
        icon: ClipboardList,
        visible: ["STUDENT"],
      },
      {
        title: "My Grades",
        url: "/my-grades",
        icon: GraduationCap,
        visible: ["STUDENT"],
      },
      // not visible online
      // {
      //   title: "My Account",
      //   url: "/my-account",
      //   icon: Wallet,
      //   visible: ["STUDENT"],
      // },
      // {
      //   title: "Books",
      //   url: "/books",
      //   icon: BookOpen,
      //   visible: ["STUDENT"],
      // },
  
      // ─── ACCOUNTING ───────────────────────────────────────────
      {
        title: "Fees",
        url: "/fees",
        icon: DollarSign,
        visible: ["ACCOUNTING", "ADMIN"],
      },
      {
        title: "Payments",
        url: "/payments",
        icon: CreditCard,
        visible: ["ACCOUNTING", "ADMIN"],
      },
      {
        title: "Scholarships",
        url: "/scholarships",
        icon: GraduationCap,
        visible: ["ACCOUNTING", "ADMIN"],
      },
      {
        title: "Account Statements",
        url: "/account-statements",
        icon: FileText,
        visible: ["ACCOUNTING", "ADMIN"],
      },
      {
        title: "Payroll",
        url: "/payroll",
        icon: DollarSign,
        visible: ["ACCOUNTING", "ADMIN"],
      },
    ],
  
    /// ─── Universal ───────────────────────────────────────────
    pages: [
      { title: "Blank", url: "/blank" },
      { title: "Maintenance", url: "/maintenance" },
      { title: "404 Page", url: "/unknown-page" },
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Programs", url: "/programs" },
    ],
  
    auth: [
      { title: "Login", url: "/login" },
      { title: "Register", url: "/registration" },
      { title: "OTP Verification", url: "/otp" },
      { title: "Forgot Password", url: "/forgot-password" },
      { title: "Reset Password", url: "/reset-password" },
    ],
  }