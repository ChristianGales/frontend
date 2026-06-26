import { subjectColumns } from "@/components/tables/registrar/college/subject/columns"
import { DataTable }      from "@/components/tables/registrar/college/subject/data-table"
import { subjects }       from "@/lib/dummy/registrar/college/subject"

export default function SubjectPage() {
  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <DataTable
          columns={subjectColumns}
          data={subjects}
        />
    </div>
  )
}