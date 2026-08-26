export type StaffStatus = "active" | "inactive"

export type StaffRole = "admin" | "registrar" | "instructor" | "teacher"

export interface StaffUser {
  id: string
  employeeId: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  password: string
  position: string
  office: string
  status: StaffStatus
  role: StaffRole
}

export type StaffSession = Omit<StaffUser, "password">