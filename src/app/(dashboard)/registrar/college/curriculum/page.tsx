import { curriculumColumns } from "@/components/tables/registrar/college/curriculum/columns"
import { CurriculumDataTable } from "@/components/tables/registrar/college/curriculum/data-table"
import { curriculum } from "@/lib/dummy/registrar/college/curriculum"

export default async function CurriculumPage() {
  return (
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <CurriculumDataTable
          columns={curriculumColumns}
          data={curriculum}
        />
      </div>
  )
}   