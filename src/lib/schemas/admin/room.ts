import z from "zod/v3"

export const addRoomSchema  = z.object({
    room_code: z.string().min(2, "Room Code is Required"),
    room_location: z.string().min(2, "Room Location is Required"),
})

export const editRoomSchema = addRoomSchema.partial()

export type AddRoomFormValues = z.infer<typeof addRoomSchema>
export type EditRoomFormValues = z.infer<typeof editRoomSchema>