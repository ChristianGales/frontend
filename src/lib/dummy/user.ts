import { UserRole } from "@/types/user";

export type DummyUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

// Temp USERS
export const dummyUsers: DummyUser[] = [
  {
    id: "ADM-001",
    name: "System Administrator",
    email: "admin@nsc.edu.ph",
    role: "admin",
  },

  {
    id: "SP-001",
    name: "School President",
    email: "president@nsc.edu.ph",
    role: "school_president",
  },

  {
    id: "ST-001",
    name: "School Trustee",
    email: "trustee@nsc.edu.ph",
    role: "school_trustee",
  },

  {
    id: "CD-001",
    name: "College Dean",
    email: "dean@nsc.edu.ph",
    role: "college_dean",
  },

  {
    id: "BEP-001",
    name: "Basic Education Principal",
    email: "principal@nsc.edu.ph",
    role: "basic_education_principal",
  },

  {
    id: "BEHR-001",
    name: "Basic Education Head Registrar",
    email: "be-head-registrar@nsc.edu.ph",
    role: "basic_education_head_registrar",
  },

  {
    id: "BER-001",
    name: "Basic Education Registrar",
    email: "be-registrar@nsc.edu.ph",
    role: "basic_education_registrar",
  },

  {
    id: "CHR-001",
    name: "College Head Registrar",
    email: "college-head-registrar@nsc.edu.ph",
    role: "college_head_registrar",
  },

  {
    id: "CR-001",
    name: "College Registrar",
    email: "college-registrar@nsc.edu.ph",
    role: "college_registrar",
  },

  {
    id: "FAC-001",
    name: "Faculty",
    email: "faculty@nsc.edu.ph",
    role: "faculty",
  },

  {
    id: "TEA-001",
    name: "Teacher",
    email: "teacher@nsc.edu.ph",
    role: "teacher",
  },

  {
    id: "INS-001",
    name: "Instructor",
    email: "instructor@nsc.edu.ph",
    role: "instructor",
  },

  {
    id: "CS-001",
    name: "College Student",
    email: "college-student@nsc.edu.ph",
    role: "college_student",
  },

  {
    id: "BES-001",
    name: "Basic Education Student",
    email: "be-student@nsc.edu.ph",
    role: "basic_education_student",
  },

  {
    id: "CHA-001",
    name: "College Head Accounting",
    email: "college-head-accounting@nsc.edu.ph",
    role: "college_head_accounting",
  },

  {
    id: "CA-001",
    name: "College Accounting",
    email: "college-accounting@nsc.edu.ph",
    role: "college_accounting",
  },

  {
    id: "BEHA-001",
    name: "Basic Education Head Accounting",
    email: "be-head-accounting@nsc.edu.ph",
    role: "basic_education_head_accounting",
  },

  {
    id: "BEA-001",
    name: "Basic Education Accounting",
    email: "be-accounting@nsc.edu.ph",
    role: "basic_education_accounting",
  },
];

// Change this while developing the UI
export let activeUser = dummyUsers[7];