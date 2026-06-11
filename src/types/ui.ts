export type AlertState = {
  type:         "success" | "error"
  title:        string
  description?: string
} | null