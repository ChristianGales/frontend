export type Admission = {
    id: string
    fullName: string
    course: string
    admissionType: string
    admissionFor: "College" | "PTCP"
    appliedAt: string
    status: "Pending" | "Approved" | "Rejected"
}