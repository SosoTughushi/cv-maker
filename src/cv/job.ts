import { ContentType } from "./ContentType";
import { Period } from "./Period"

export type Job = {
    company: string,
    location: string,
    projects: Project[]
}

export type Project = {
    role: string,
    description?: ContentType,
    scope?: ContentType[],
    stack: ContentType[],
    responsibilities?: ContentType[],
    period: Period
}

