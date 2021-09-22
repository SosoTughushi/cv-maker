import { Period } from "./Period"

type ContentType = React.ReactNode;
;

export type Job = {
    company: string,
    location: string,
    projects: Project[]
}

type Project = {
    role: string,
    description: ContentType,
    scope?: ContentType[],
    stack: ContentType[],
    responsibilities?: ContentType[],
    period: Period
}

