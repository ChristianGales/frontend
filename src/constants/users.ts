import type { UserRole } from "@/types/user"

export interface MockUser {
  id: string
  name: string
  email: string
  role: UserRole
}

export const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "John Admin",
    email: "admin@nsc.edu",
    role: "ADMIN",
  },
  {
    id: "2",
    name: "Jane Registrar",
    email: "registrar@nsc.edu",
    role: "COLLEGE REGISTRAR",
  },
  {
    id: "3",
    name: "Bob Student",
    email: "student@nsc.edu",
    role: "STUDENT",
  },
]

// The currently "logged in" user — swap this to test different roles
export const CURRENT_USER = MOCK_USERS[0]