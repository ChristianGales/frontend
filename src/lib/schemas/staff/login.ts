import { z } from "zod"

export const staffLoginSchema = z.object({
  employeeId: z.string().min(1, "Employee ID is required"),
  password: z.string().min(1, "Password is required"),
})

export type StaffLoginData = z.infer<typeof staffLoginSchema>