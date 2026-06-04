import { Admission } from "@/types/admission"

export const applicants: Admission[] = [
  {
    id: "ADM-001",
    fullName: "Juan Dela Cruz",
    admissionFor: "PTCP",
    course: "BSIT",
    admissionType: "Freshman",
    appliedAt: "2026-06-01",
    status: "Pending",
  },
  {
    id: "ADM-002",
    fullName: "Maria Santos",
    admissionFor: "PTCP",
    course: "BSOA",
    admissionType: "Transferee",
    appliedAt: "2026-06-02",
    status: "Pending",
  },
]