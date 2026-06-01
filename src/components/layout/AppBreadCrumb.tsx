"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const AppBreadcrumb = () => {
  const pathname = usePathname()

  // Split path into segments
  const pathSegments = pathname.split("/").filter(Boolean)

  return (
  <div className="w-full px-4 md:px-6 lg:px-8">
      <Breadcrumb>
        <BreadcrumbList>

          {/* make this responsive based on the path of the user trype */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/admin">
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.map((segment, index) => {
            const href =
              "/" + pathSegments.slice(0, index + 1).join("/")

            const isLast =
              index === pathSegments.length - 1

              const breadcrumbLabels: Record<string, string> = {
                registrar: "Registrar",
                "basic-ed": "Basic Education",
                college: "College",
                admission: "Admissions",
                accounting: "Accounting",
                admin: "Administrator",
                faculty: "Faculty",
                instructor: "Instructor",
                teacher: "Teacher",
                student: "Student",
                profile: "Profile",
                rbac: "Role Management",
              }
              
              const label =
                breadcrumbLabels[segment] ??
                segment.charAt(0).toUpperCase() +
                  segment.slice(1).replace(/-/g, " ")

            return (
              <Fragment key={href}>
                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>

)
}

export default AppBreadcrumb;