// types/registrar/college/subject-curriculum.ts
import { Curriculum } from "./curriculum"
import { Subject } from "./subject"

export type SubjectCurriculum = {
  id: string
  curriculum_id: string
  curriculum?: Curriculum
  subject_id: string
  subject?: Subject
  year_level: 1 | 2 | 3 | 4
  semester: "1st Semester" | "2nd Semester" | "Summer"
  pre_requisite_id?: string | null
}