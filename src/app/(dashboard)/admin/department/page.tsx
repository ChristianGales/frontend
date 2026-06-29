import { departmentColumns } from "@/components/tables/admin/department/columns";
import { DepartmentDataTable } from "@/components/tables/admin/department/data-table";
import { departments } from "@/lib/dummy/admin/department";

export default async function DepartmentPage() {
  return (
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <DepartmentDataTable
            columns={departmentColumns}
            data={departments}
        />
      </div>
  )
}