

import type {
  StudentSession,
  StudentUser,
} from "@/types/student/student"

import { dummyStudentUsers } from "../dummy/student/student"

export function authenticateStudent(
  studentNumber: string,
  password: string
): StudentUser | null {
  return (
    dummyStudentUsers.find(
      (student) =>
        student.studentNumber === studentNumber &&
        student.password === password
    ) ?? null
  )
}

export function createStudentSession(
  student: StudentUser
): StudentSession {
  const { password: _password, ...session } = student

  return session
}