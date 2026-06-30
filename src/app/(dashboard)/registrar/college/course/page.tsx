import { courseColumns } from "@/components/tables/registrar/college/course/columns"
import { CourseDataTable } from "@/components/tables/registrar/college/course/data-table"
import { course } from "@/lib/dummy/registrar/college/course"

export default async function CoursePage() {
  return (
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <CourseDataTable
          columns={courseColumns}
          data={course}
        />
      </div>
  )
}   