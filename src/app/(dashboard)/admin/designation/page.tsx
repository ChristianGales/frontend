import { designationColumns } from "@/components/tables/admin/designation/columns";
import { DesginationDataTable } from "@/components/tables/admin/designation/data-table";
import { designations } from "@/lib/dummy/admin/designation";


export default async function DesignationPage() {
  return (
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <DesginationDataTable
            columns={designationColumns}
            data={designations}
        />
      </div>
  )
}