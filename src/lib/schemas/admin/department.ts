import z from "zod/v3"

export const addDepartmentSchema = z.object({
  department_name: z.string().min(2, "Departmemt Name is required."),
  department_description: z.string().min(5, "Departmemt Description is required."),
})

export const editDepartmentSchema = addDepartmentSchema.partial()

export type AddDepartmentFormValues = z.infer<typeof addDepartmentSchema>
export type EditDepartmentFormValues = z.infer<typeof editDepartmentSchema>
