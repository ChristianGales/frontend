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
         
          "BASIC EDUCATION REGISTRAR",
          "FACULTY",
          "TEACHER",
          "INSTRUCTOR",
          "ACCOUNTING",
        ],
      },
      // inbox not sure / if needed 
      // {
      //   title: "Inbox",
      //   url: "/inbox",
      //   icon: Inbox,
      //   badge: 23,
      //   visible: [
      //     "ADMIN",
      //     "STUDENT",
      //     "COLLEGE REGISTRAR",
      //     "BASIC EDUCATION REGISTRAR",
      //     "FACULTY",
      //     "TEACHER",
      //     "INSTRUCTOR",
      //     "ACCOUNTING",
      //   ],
      // },
      // {
      //   title: "Settings",
      //   url: "/settings",
      //   icon: Settings,
      //   visible: [
      //     "ADMIN",
      //     "STUDENT",
      //     "COLLEGE REGISTRAR",
      //     "BASIC EDUCATION REGISTRAR",
      //     "FACULTY",
      //     "TEACHER",
      //     "INSTRUCTOR",
      //     "ACCOUNTING",
      //   ],
      // },
  
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
        visible: ["COLLEGE REGISTRAR"],
      },
      {
        title: "Enrollment",
        url: "/enrollment",
        icon: ClipboardList,
        visible: ["COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR"],
      },
      {
        title: "Students",
        url: "/students",
        icon: GraduationCap,
        visible: ["COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR", "ADMIN"],
      },
      {
        title: "Curriculum",
        url: "/curriculum",
        icon: BookMarked,
        visible: ["COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR", "ADMIN"],
      },
      {
        title: "Courses",
        url: "/courses",
        icon: BookOpen,
        visible: ["COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR", "ADMIN"],
      },
      {
        title: "Subjects",
        url: "/subjects",
        icon: FileText,
        visible: ["COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR", "ADMIN"],
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
        visible: [
          "COLLEGE REGISTRAR",
          "BASIC EDUCATION REGISTRAR",
          "ADMIN",
          "FACULTY",
          "TEACHER",
          "INSTRUCTOR",
        ],
      },
      {
        title: "Classes",
        url: "/classes",
        icon: School,
        visible: [
          "COLLEGE REGISTRAR",
          "BASIC EDUCATION REGISTRAR",
          "ADMIN",
          "FACULTY",
          "TEACHER",
          "INSTRUCTOR",
        ],
      },
  
      // ─── FACULTY / TEACHER / INSTRUCTOR ──────────────────────
      {
        title: "My Classes",
        url: "/my-classes",
        icon: ClipboardCheck,
        visible: ["FACULTY", "TEACHER", "INSTRUCTOR"],
      },
      {
        title: "Grades",
        url: "/grades",
        icon: FileText,
        visible: ["FACULTY", "TEACHER", "INSTRUCTOR", "COLLEGE REGISTRAR", "BASIC EDUCATION REGISTRAR"],
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