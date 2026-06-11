"use client"

import { useState } from "react"

import { subjectColumns } from "@/components/tables/registrar/college/subject/columns"
import { DataTable }      from "@/components/tables/registrar/college/subject/data-table"
import { subjects }       from "@/lib/dummy/registrar/college/subject"
import AppAlert           from "@/components/AppAlert"
import { AlertState }     from "@/types/ui"

export default function SubjectPage() {
  const [alert, setAlert] = useState<AlertState>(null)

  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col">

      {alert && (
        <div className="mb-4">
          <AppAlert
            type={alert.type}
            title={alert.title}
            description={alert.description}
          />
        </div>
      )}

      <DataTable
        columns={subjectColumns}
        data={subjects}
        onAlert={setAlert}
      />

    </div>
  )
}