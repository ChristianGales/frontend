import { UserRole } from "@/types/user"

export const PAGE_ACCESS: Record<string, UserRole[]> = {
  "/registrar/college": [
    "college_registrar",
    "college_head_registrar",
  ],
 
}

export function isAllowed(pathname: string, role: UserRole) {
  const matchedKey = Object.keys(PAGE_ACCESS)
    .filter((key) => pathname === key || pathname.startsWith(key + "/"))
    .sort((a, b) => b.length - a.length)[0]

  if (!matchedKey) return true 

  return PAGE_ACCESS[matchedKey].includes(role)
}