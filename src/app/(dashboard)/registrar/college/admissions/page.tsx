import RoleGuard from "@/components/auth/role-guard"
import { columns } from "@/components/tables/registrar/college/admission/columns"
import { DataTable } from "@/components/tables/registrar/college/admission/data-table"
import { applicants } from "@/lib/dummy/admission"


export default async function AdmissionPage() {
  return (
    <RoleGuard>
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <DataTable
          columns={columns}
          data={applicants}
        />
      </div>
    </RoleGuard>
    
  )
}