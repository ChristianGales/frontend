import z from "zod/v3"

export const addDesignationSchema = z.object({
  department_id: z.string().min(1, "Department is required."),
  position: z.string().min(2, "Position is required."),
  designation_description: z.string().min(5, "Designation Description is required."),
})

export const editDesignationSchema = addDesignationSchema.partial()

export type AddDesignationFormValues = z.infer<typeof addDesignationSchema>
export type EditDesignationFormValues = z.infer<typeof editDesignationSchema>