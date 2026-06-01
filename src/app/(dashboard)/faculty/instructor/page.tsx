"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"

const InstructorDashboard = () => {
  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col gap-6">
        
        <DashboardHeader
          role="Instructor"
          subtitle="Ready to make today productive!"
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
            {/* contents here */}
        </div>
    </div>
  )
}

export default InstructorDashboard;