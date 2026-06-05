import { Course } from "./course"

export type Curriculum = {
    id: string
    course_id: string 
    course?: Course
    curriculum_year: string
    curriculum_description: string
}