// app/(dashboard)/student/page.tsx
"use client"

import {
  BookOpen,
  CalendarClock,
  GraduationCap,
  ClipboardCheck,
  Bell,
  Clock,
} from "lucide-react"

import DashboardHeader from "@/components/dashboard/header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// ---- placeholder data (replace with real fetches) ----
const stats = [
  {
    label: "Enrolled Units",
    value: "21",
    icon: BookOpen,
  },
  {
    label: "General Average",
    value: "1.75",
    icon: GraduationCap,
  },
  {
    label: "Attendance Rate",
    value: "96%",
    icon: ClipboardCheck,
  },
  {
    label: "Pending Requirements",
    value: "2",
    icon: Clock,
  },
]

const todaySchedule = [
  { time: "8:00 AM - 9:30 AM", subject: "Data Structures", room: "Room 301", instructor: "Prof. Santos" },
  { time: "10:00 AM - 11:30 AM", subject: "Discrete Mathematics", room: "Room 205", instructor: "Prof. Reyes" },
  { time: "1:00 PM - 2:30 PM", subject: "Web Development", room: "Comp Lab 2", instructor: "Prof. Cruz" },
]

const announcements = [
  { title: "Midterm Exam Schedule Released", time: "2 hours ago" },
  { title: "Enrollment for Next Semester Opens Soon", time: "1 day ago" },
  { title: "Library Extended Hours During Finals Week", time: "3 days ago" },
]

const recentGrades = [
  { subject: "Data Structures", term: "Prelim", grade: "1.50", status: "Passed" },
  { subject: "Discrete Mathematics", term: "Prelim", grade: "1.75", status: "Passed" },
  { subject: "Web Development", term: "Prelim", grade: "1.25", status: "Passed" },
  { subject: "Physical Education 3", term: "Prelim", grade: "2.00", status: "Passed" },
]

const enrolledSubjects = [
  { code: "CS301", name: "Data Structures & Algorithms", attendance: 98 },
  { code: "MATH204", name: "Discrete Mathematics", attendance: 92 },
  { code: "IT210", name: "Web Development", attendance: 100 },
  { code: "PE103", name: "Physical Education 3", attendance: 88 },
]
// --------------------------------------------------------

const StudentDashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">
      <DashboardHeader
        role="Student"
        subtitle="Here's what's happening with your academics today."
      />

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between rounded-2xl border bg-card p-4"
          >
            <div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold">{stat.value}</p>
            </div>
            <div className="rounded-full bg-primary/10 p-3">
              <stat.icon className="h-5 w-5 text-primary" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {/* Today's schedule */}
        <div className="rounded-2xl border bg-card p-4 xl:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Today&apos;s Schedule</h2>
          </div>

          <div className="flex flex-col divide-y">
            {todaySchedule.map((item) => (
              <div
                key={item.subject}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium">{item.subject}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.room} · {item.instructor}
                  </p>
                </div>
                <Badge variant="secondary" className="w-fit">
                  {item.time}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="rounded-2xl border bg-card p-4">
          <div className="mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">Announcements</h2>
          </div>

          <div className="flex flex-col divide-y">
            {announcements.map((item) => (
              <div key={item.title} className="py-3">
                <p className="text-sm font-medium leading-snug">{item.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        {/* Recent grades */}
        <Card className="xl:col-span-2 rounded-2xl">
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
            <CardDescription>Prelim period results for this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentGrades.map((row) => (
                  <TableRow key={row.subject}>
                    <TableCell className="font-medium">{row.subject}</TableCell>
                    <TableCell>{row.term}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="outline" className="text-green-600 border-green-600/30">
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Enrolled subjects / attendance */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Enrolled Subjects</CardTitle>
            <CardDescription>Attendance rate per subject</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {enrolledSubjects.map((subject) => (
              <div key={subject.code}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{subject.name}</span>
                  <span className="text-muted-foreground">{subject.attendance}%</span>
                </div>
                <Progress value={subject.attendance} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default StudentDashboard