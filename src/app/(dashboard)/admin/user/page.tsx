import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { userColumns, pendingRegistrationColumns } from "@/components/tables/admin/user/columns"
import { UserDataTable, PendingRegistrationDataTable } from "@/components/tables/admin/user/data-table"

import { users } from "@/lib/dummy/admin/user"
import { pendingRegistrations } from "@/lib/dummy/admin/pending-registration"

export default function UsersPage() {
  return (
    <div className="flex min-h-[calc(100vh-136px)] flex-col">
      <Tabs defaultValue="users" className="flex flex-1 flex-col gap-4">
        <TabsList className="w-fit">
          <TabsTrigger value="users">User</TabsTrigger>
          <TabsTrigger value="pending">Pending Registrations</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="flex-1">
          <UserDataTable columns={userColumns} data={users} />
        </TabsContent>

        <TabsContent value="pending" className="flex-1">
          <PendingRegistrationDataTable
            columns={pendingRegistrationColumns}
            data={pendingRegistrations}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}