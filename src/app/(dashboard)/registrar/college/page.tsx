"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Users,
} from "lucide-react"

type Stat = {
  title: string
  value: string
  description: string
  icon: LucideIcon
}

const stats: Stat[] = [
  {
    title: "Admissions",
    value: "245",
    description: "Applications received",
    icon: ClipboardCheck,
  },
  {
    title: "Enrollments",
    value: "1,284",
    description: "Currently enrolled students",
    icon: Users,
  },
  {
    title: "Programs Offered",
    value: "18",
    description: "Active academic programs",
    icon: BookOpen,
  },
  {
    title: "Pending Evaluations",
    value: "32",
    description: "Awaiting approval",
    icon: GraduationCap,
  },
]

const CollegeRegistrarDashboard = () => {
  return (
       <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">
        <DashboardHeader
          role="College Registrar"
          subtitle="Ready to make today productive!"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>

                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>

                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
  )
}

export default CollegeRegistrarDashboard;