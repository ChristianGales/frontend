"use client"

import { useEffect, useState } from "react"
import { CalendarDays, Rocket} from "lucide-react"

import AppAreaChart from "@/components/charts/AppAreaChart"
import AppBarChart from "@/components/charts/AppBarChart"
import AppPieChart from "@/components/charts/AppPieChart"
import TodoList from "@/components/charts/AppToDoList"
import CardList from "@/components/CardList"
import DashboardHeader from "@/components/dashboard/dashboard-header"

const AdminDashboard = () => {

  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">

      <DashboardHeader
        role="Administrator"
        subtitle="Ready to make today productive!"
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
        {/* contents here */}
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

export default AdminDashboard;