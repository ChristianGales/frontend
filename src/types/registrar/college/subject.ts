export type Subject = {
    id: string
    subject_code: string
    subject_title: string
    subject_type: "GE" | "Major" | "Mandatory"
    units: number
    //lab fee
    include_in_latin_honors: boolean
}