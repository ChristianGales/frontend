import { roomColumns } from "@/components/tables/admin/room/columns";
import { RoomDataTable } from "@/components/tables/admin/room/data-table";
import { rooms } from "@/lib/dummy/admin/room";

export default async function RoomPage() {
  return (
      <div className="flex min-h-[calc(100vh-136px)] flex-col">
        <RoomDataTable
        columns={roomColumns}
        data={rooms}
        />
      </div>
  )
}