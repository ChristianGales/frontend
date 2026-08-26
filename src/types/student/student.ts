export type StudentStatus = "active" | "inactive" | "graduated"

export interface StudentUser {
  id: string
  studentNumber: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  password: string
  course: string
  yearLevel: number
  status: StudentStatus
  role: "student"
}

export type StudentSession = Omit<StudentUser, "password">