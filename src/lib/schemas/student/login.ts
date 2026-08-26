import { z } from "zod"

export const studentLoginSchema = z.object({
  studentNumber: z
    .string()
    .trim()
    .min(1, "Student number is required.")
    .regex(
      /^\d{4}-\d{5}$/,
      "Student number must follow the format 2026-00001."
    ),

  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must contain at least 8 characters."),
})

export type StudentLoginData = z.infer<typeof studentLoginSchema>