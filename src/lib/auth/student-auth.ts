import { dummyStudentUsers } from "@/lib/dummy/student/student"
import type {
  StudentSession,
  StudentUser,
} from "@/lib/types/student/user"

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