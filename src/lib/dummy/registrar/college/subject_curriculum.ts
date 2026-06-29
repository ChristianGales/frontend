// lib/dummy/registrar/college/subject-curriculum.ts
import { SubjectCurriculum } from "@/types/registrar/college/subject-curriculum"

export const subjectCurricula: SubjectCurriculum[] = [
  // Year 1 - 1st Semester (curr-it-2024)
  { id: "SC-001", curriculum_id: "curr-it-2024", subject_id: "SUBJ-001", year_level: 1, semester: "1st Semester" },
  { id: "SC-002", curriculum_id: "curr-it-2024", subject_id: "SUBJ-002", year_level: 1, semester: "1st Semester" },
  { id: "SC-003", curriculum_id: "curr-it-2024", subject_id: "SUBJ-003", year_level: 1, semester: "1st Semester" },
  { id: "SC-004", curriculum_id: "curr-it-2024", subject_id: "SUBJ-004", year_level: 1, semester: "1st Semester" },
  { id: "SC-005", curriculum_id: "curr-it-2024", subject_id: "SUBJ-005", year_level: 1, semester: "1st Semester" },
  { id: "SC-006", curriculum_id: "curr-it-2024", subject_id: "SUBJ-006", year_level: 1, semester: "1st Semester", pre_requisite_id: null },

  // Year 1 - 2nd Semester
  { id: "SC-007", curriculum_id: "curr-it-2024", subject_id: "SUBJ-007", year_level: 1, semester: "2nd Semester" },
  { id: "SC-008", curriculum_id: "curr-it-2024", subject_id: "SUBJ-008", year_level: 1, semester: "2nd Semester" },
  { id: "SC-009", curriculum_id: "curr-it-2024", subject_id: "SUBJ-009", year_level: 1, semester: "2nd Semester", pre_requisite_id: "SC-006" },
  { id: "SC-010", curriculum_id: "curr-it-2024", subject_id: "SUBJ-010", year_level: 1, semester: "2nd Semester", pre_requisite_id: "SC-006" },

  // Year 2 - 1st Semester
  { id: "SC-011", curriculum_id: "curr-it-2024", subject_id: "SUBJ-011", year_level: 2, semester: "1st Semester" },
  { id: "SC-012", curriculum_id: "curr-it-2024", subject_id: "SUBJ-012", year_level: 2, semester: "1st Semester", pre_requisite_id: "SC-011" },
  { id: "SC-013", curriculum_id: "curr-it-2024", subject_id: "SUBJ-013", year_level: 2, semester: "1st Semester" },

  // Year 3 - 1st Semester
  { id: "SC-014", curriculum_id: "curr-it-2024", subject_id: "SUBJ-014", year_level: 3, semester: "1st Semester", pre_requisite_id: "SC-012" },

  // Year 4 - 1st Semester
  { id: "SC-015", curriculum_id: "curr-it-2024", subject_id: "SUBJ-015", year_level: 4, semester: "1st Semester", pre_requisite_id: "SC-014" },
]