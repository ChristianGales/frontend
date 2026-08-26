export type RegistrarStatus = "active" | "inactive"

export interface RegistrarUser {
  id: string
  employeeId: string
  firstName: string
  middleName?: string
  lastName: string
  email: string
  password: string
  position: string
  office: string
  status: RegistrarStatus
  role: "registrar"
}

export type RegistrarSession = Omit<RegistrarUser, "password">