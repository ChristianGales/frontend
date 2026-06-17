import { UserRole } from "@/types/user"

export interface User {
  id: string            // e.g. "NSC26-0001"
  fullname: string
  email: string
  user_type: UserRole
}

export interface PendingRegistration {
  id: string             // e.g. "REG-2026-0001"
  fullname: string
  email: string
}