import z from "zod/v3"

export const addSubjectSchema = z.object({
  subject_code: z.string().min(1, "Subject code is required."),
  subject_title: z.string().min(1, "Subject title is required."),
  subject_type: z.enum(["GE", "Mandatory", "Major"], {
    errorMap: () => ({ message: "Subject type is required." }),
  }),
  units: z.coerce
    .number({ invalid_type_error: "Enter a valid number of units." })
    .min(1, "Units must be at least 1.")
    .max(9, "Units cannot exceed 9."),
  include_in_latin_honors: z.boolean().default(false),
})

export const editSubjectSchema = addSubjectSchema.partial()

export type AddSubjectFormValues = z.infer<typeof addSubjectSchema>
export type EditSubjectFormValues = z.infer<typeof editSubjectSchema>
