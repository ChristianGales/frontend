"use client"

import { useEffect, useState } from "react"
import { CalendarDays, Rocket } from "lucide-react"

interface DashboardHeaderProps {
  role: string
  subtitle?: string
}

export default function DashboardHeader({
  role,
  subtitle = "Ready to make today productive!",
}: DashboardHeaderProps) {
  const [time, setTime] = useState("")
  const [period, setPeriod] = useState("")
  const [date, setDate] = useState("")
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })

      const [clock, meridian] = formattedTime.split(" ")

      setTime(clock)
      setPeriod(meridian)

      setDate(
        now.toLocaleDateString([], {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      )

      const hour = now.getHours()

      if (hour < 12) {
        setGreeting("Good Morning")
      } else if (hour < 18) {
        setGreeting("Good Afternoon")
      } else {
        setGreeting("Good Evening")
      }
    }

    updateClock()

    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-card p-4">
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            {greeting}, {role}
          </h1>

          <p className="mt-2 flex items-center gap-2 text-muted-foreground">
            <Rocket className="h-4 w-4 text-primary" />
            {subtitle}
          </p>
        </div>

        <div className="text-left lg:text-right">
          <div className="mt-4 flex items-end gap-1">
            <span className="text-5xl font-black leading-none">
              {time}
            </span>

            <span className="pb-2 text-xl font-semibold text-muted-foreground">
              {period}
            </span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}