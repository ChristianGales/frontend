

import type {
  StaffSession,
  StaffUser,
} from "@/types/staff/staff"

import { dummyStaffUsers } from "../dummy/registrar/college/staff"

export function authenticateStaff(
  employeeId: string,
  password: string
): StaffUser | null {
  return (
    dummyStaffUsers.find(
      (staff) =>
        staff.employeeId === employeeId &&
        staff.password === password
    ) ?? null
  )
}

export function createStaffSession(
  staff: StaffUser
): StaffSession {
  const { password: _password, ...session } = staff

  return session
}