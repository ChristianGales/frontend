import { UserRole } from "@/types/user"

export const PAGE_ACCESS: Record<string, UserRole[]> = {
  "/registrar/college": [
    "college_registrar",
    "college_head_registrar",
  ],
  "/registrar/college/course": [
    "college_registrar",
    "college_head_registrar",
  ],
  "/registrar/college/admissions": [
    "college_registrar",
    "college_head_registrar",
  ],
  "/registrar/college/enrollment": [
    "college_registrar",
    "college_head_registrar",
  ],
  "/registrar/college/curriculum": [
    "college_registrar",
    "college_head_registrar",
  ],
  
 
}

export function isAllowed(pathname: string, role: UserRole) {
  const allowed = PAGE_ACCESS[pathname]
  if (!allowed) return true 
  return allowed.includes(role)
}