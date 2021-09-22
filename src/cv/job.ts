import { Period } from "./Period"

export type Job = {
    company: string,
    location: string,
    projects: Project[]
}

type Project = {
    role: string,
    description: string,
    scope?: string[],
    stack: string[],
    responsibilities?: string[],
    period: Period
}

