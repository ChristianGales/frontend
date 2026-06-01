"use client"

import { useEffect, useState } from "react"
import { CalendarDays, Rocket} from "lucide-react"

import AppAreaChart from "@/components/charts/AppAreaChart"
import AppBarChart from "@/components/charts/AppBarChart"
import AppPieChart from "@/components/charts/AppPieChart"
import TodoList from "@/components/charts/AppToDoList"
import CardList from "@/components/CardList"

const CollegeRegistrarDashboard = () => {

  const [time, setTime] = useState("")
  const [period, setPeriod] = useState("")
  const [date, setDate] = useState("")
  const [greeting, setGreeting] = useState("")

  useEffect(() => {

    const updateClock = () => {
      const now = new Date()

      // TIME
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })

      const [clock, meridian] = formattedTime.split(" ")

      setTime(clock)
      setPeriod(meridian)

      // DATE
      const formattedDate = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })

      setDate(formattedDate)

      // GREETING
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
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">

      {/* greeting card */}
      <div className="relative overflow-hidden rounded-3xl border bg-card p-6">
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              {greeting}, College Registrar!
            </h1>

            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              Ready to make today productive!
              <Rocket className="h-4 w-4 text-primary" />
            </p>

          </div>

          {/* right */}
          <div className="text-left lg:text-right">

            <div className="mt-8 flex items-end gap-1">
              <span className="text-6xl font-black leading-none">
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

      {/* dashboard grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">

       
      </div>
    </div>
  )
}

export default CollegeRegistrarDashboard;