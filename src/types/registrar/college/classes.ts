import { User } from "@/types/admin/user"
import { SubjectCurriculum } from "./subject_curriculum"

export type Classes = {
  id: string
  subject_curriculum_id: string
  subject_curriculum?: SubjectCurriculum
  faculty_id: string
  faculty?: User
  section: string
  schedule: string
  room: string
  school_year: string
  semester: "1st Semester" | "2nd Semester" | "Summer"
}