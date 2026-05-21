"use client"

import { useEffect, useState } from "react"

import {
  CalendarDays,
  CloudRain,
  MapPin,
  Rocket,
} from "lucide-react"

import AppAreaChart from "@/components/AppAreaChart"
import AppBarChart from "@/components/AppBarChart"
import AppPieChart from "@/components/AppPieChart"
import TodoList from "@/components/AppToDoList"
import CardList from "@/components/CardList"

const Homepage = () => {

  const [time, setTime] = useState("")
  const [period, setPeriod] = useState("")
  const [date, setDate] = useState("")
  const [greeting, setGreeting] = useState("")

  const [weather, setWeather] = useState("Loading...")
  const [temperature, setTemperature] = useState("--")
  const [location, setLocation] = useState("Detecting location...")

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

  // WEATHER + LOCATION
  useEffect(() => {

    const fetchWeather = async (
      lat: number,
      lon: number 
    ) => {

      try {

        // Replace with your API key
        const API_KEY = "YOUR_OPENWEATHER_API_KEY"

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        )

        const data = await response.json()

        setTemperature(`${Math.round(data.main.temp)}°C`)
        setWeather(data.weather[0].description)

        setLocation(data.name)

      } catch (error) {
        console.error(error)
      }
    }

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position) => {

          const lat = position.coords.latitude
          const lon = position.coords.longitude

          fetchWeather(lat, lon)

        },
        () => {
          setLocation("Location unavailable")
        }
      )
    }

  }, [])

  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">

      {/* HERO CARD */}
      <div className="relative overflow-hidden rounded-3xl border bg-card p-6">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-primary/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div>

            <h1 className="text-4xl font-black tracking-tight">
              {greeting}, Firstname
            </h1>

            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              Ready to make today productive!
              <Rocket className="h-4 w-4 text-primary" />
            </p>

            {/* TIME */}
            <div className="mt-8 flex items-end gap-1">

              <span className="text-6xl font-black leading-none">
                {time}
              </span>

              <span className="pb-2 text-2xl font-semibold text-muted-foreground">
                {period}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-left lg:text-right">

            {/* WEATHER */}
            <div className="flex items-center gap-4 lg:justify-end">

              <div className="rounded-full bg-primary/10 p-4">
                <CloudRain className="h-10 w-10 text-primary" />
              </div>

              <div>

                <div className="text-6xl font-black leading-none">
                  {temperature}
                </div>

                <p className="mt-1 capitalize text-muted-foreground">
                  {weather}
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6 space-y-1">

              <div className="flex items-center gap-2 lg:justify-end">

                <MapPin className="h-5 w-5 text-primary" />

                <h3 className="text-2xl font-bold">
                  {location}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground lg:justify-end">

                <CalendarDays className="h-4 w-4" />

                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DASHBOARD GRID */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">

        <div className="rounded-2xl border bg-card p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>

        <div className="rounded-2xl border bg-card p-4">
          <CardList title="Latest Transactions" />
        </div>

        <div className="rounded-2xl border bg-card p-4">
          <AppPieChart />
        </div>

        <div className="rounded-2xl border bg-card p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <TodoList />
        </div>

        <div className="rounded-2xl border bg-card p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>
      </div>
    </div>
  )
}

export default Homepage